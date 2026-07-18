/**
 * POST /api/lead — creates a CRM lead in Fast Access's Odoo from the
 * website quote form, via Odoo's JSON-RPC external API.
 *
 * Required environment variables (set in Vercel → Project → Settings →
 * Environment Variables, then redeploy):
 *   ODOO_URL      e.g. https://portal.faccess.co
 *   ODOO_DB       the Odoo database name
 *   ODOO_LOGIN    an Odoo user login (email) with CRM access
 *   ODOO_API_KEY  an API key generated for that user
 *                 (Odoo → My Profile → Account Security → New API Key)
 */

async function odooRpc(url, service, method, args) {
  const res = await fetch(`${url}/jsonrpc`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      jsonrpc: '2.0',
      method: 'call',
      params: { service, method, args },
      id: Date.now(),
    }),
  });
  const data = await res.json();
  if (data.error) {
    const msg = data.error?.data?.message || data.error?.message || 'Odoo RPC error';
    throw new Error(msg);
  }
  return data.result;
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ ok: false, error: 'Method not allowed' });
  }

  const { ODOO_URL, ODOO_DB, ODOO_LOGIN, ODOO_API_KEY } = process.env;
  if (!ODOO_URL || !ODOO_DB || !ODOO_LOGIN || !ODOO_API_KEY) {
    return res.status(500).json({ ok: false, error: 'not_configured' });
  }

  try {
    const { name, email, phone, store, orders, message, locale } = req.body || {};
    // Accept bare domains like "oudana.sa" — normalize to a full URL
    let storeUrl = (req.body?.storeUrl || '').trim();
    if (storeUrl && !/^https?:\/\//i.test(storeUrl)) storeUrl = `https://${storeUrl}`;
    if (!name || !email) {
      return res.status(400).json({ ok: false, error: 'missing_fields' });
    }

    // 1) Authenticate → uid
    const uid = await odooRpc(ODOO_URL, 'common', 'authenticate', [
      ODOO_DB,
      ODOO_LOGIN,
      ODOO_API_KEY,
      {},
    ]);
    if (!uid) throw new Error('Odoo authentication failed');

    // Map the orders bracket to its upper bound for the Expected Volume field
    const VOLUME_MAP = { '0-100': 100, '101-500': 500, '501-2000': 2000, '2001-10000': 10000, '10000+': 10000 };
    const expectedVolume = VOLUME_MAP[orders] || 0;

    // 1.5) Resolve the "Website" UTM source (create it once if missing) so
    // every website lead lands with Source = Website — filterable in CRM.
    let sourceId = false;
    try {
      const found = await odooRpc(ODOO_URL, 'object', 'execute_kw', [
        ODOO_DB, uid, ODOO_API_KEY,
        'utm.source', 'search',
        [[['name', '=', 'Website']]],
        { limit: 1 },
      ]);
      if (found && found.length) {
        sourceId = found[0];
      } else {
        sourceId = await odooRpc(ODOO_URL, 'object', 'execute_kw', [
          ODOO_DB, uid, ODOO_API_KEY,
          'utm.source', 'create',
          [{ name: 'Website' }],
        ]);
      }
    } catch (e) {
      // Source is nice-to-have — never block lead creation over it.
      console.error('utm.source resolution failed (lead will be created without source):', e.message);
      sourceId = false;
    }

    // 2) Create the lead
    const descriptionLines = [
      `الطلبات الشهرية: ${orders || '—'}`,
      `رابط المتجر: ${storeUrl || '—'}`,
      '',
      'تفاصيل الشحن:',
      message || '—',
      '',
      `المصدر: نموذج الموقع (${locale === 'ar' ? 'عربي' : 'English'})`,
    ];

    const leadId = await odooRpc(ODOO_URL, 'object', 'execute_kw', [
      ODOO_DB,
      uid,
      ODOO_API_KEY,
      'crm.lead',
      'create',
      [
        {
          name: `طلب عرض سعر — ${store || name}`,
          contact_name: name,
          partner_name: store || false,
          email_from: email,
          phone: phone || false,
          website: storeUrl || false,
          expected_revenue: expectedVolume,
          description: descriptionLines.join('\n'),
          type: 'opportunity',
          ...(sourceId ? { source_id: sourceId } : {}),
        },
      ],
    ]);

    return res.status(200).json({ ok: true, id: leadId });
  } catch (err) {
    console.error('lead creation failed:', err.message);
    return res.status(502).json({ ok: false, error: 'odoo_error' });
  }
}
