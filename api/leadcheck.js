/**
 * GET /api/leadcheck — TEMPORARY: lists the 5 most recent crm.lead records
 * so we can verify website submissions landed in Odoo. Delete after debugging.
 */
async function odooRpc(url, service, method, args) {
  const res = await fetch(`${url}/jsonrpc`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ jsonrpc: '2.0', method: 'call', params: { service, method, args }, id: Date.now() }),
  });
  const data = await res.json();
  if (data.error) throw new Error(data.error?.data?.message || data.error?.message || 'RPC error');
  return data.result;
}

export default async function handler(req, res) {
  const { ODOO_URL, ODOO_DB, ODOO_LOGIN, ODOO_API_KEY } = process.env;
  try {
    const uid = await odooRpc(ODOO_URL, 'common', 'authenticate', [ODOO_DB, ODOO_LOGIN, ODOO_API_KEY, {}]);
    if (!uid) return res.status(200).json({ ok: false, error: 'auth_failed' });
    const leads = await odooRpc(ODOO_URL, 'object', 'execute_kw', [
      ODOO_DB, uid, ODOO_API_KEY,
      'crm.lead', 'search_read',
      [[], ['id', 'name', 'type', 'email_from', 'create_date', 'team_id', 'user_id', 'active']],
      { limit: 5, order: 'id desc' },
    ]);
    return res.status(200).json({ ok: true, uid, leads });
  } catch (e) {
    return res.status(200).json({ ok: false, error: String(e.message || e) });
  }
}
