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
    const { name, email, store, orders, message, locale } = req.body || {};
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

    // 2) Create the lead
    const descriptionLines = [
      `الطلبات الشهرية: ${orders || '—'}`,
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
          description: descriptionLines.join('\n'),
          type: 'opportunity',
        },
      ],
    ]);

    return res.status(200).json({ ok: true, id: leadId });
  } catch (err) {
    console.error('lead creation failed:', err.message);
    return res.status(502).json({ ok: false, error: 'odoo_error' });
  }
}
