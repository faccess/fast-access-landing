/**
 * GET /api/dbinfo — TEMPORARY helper: asks the configured Odoo server for its
 * database list so we can fill ODOO_DB. Delete this file once ODOO_DB is set.
 */
export default async function handler(req, res) {
  const url = process.env.ODOO_URL || 'https://portal.faccess.co';
  try {
    const r = await fetch(`${url}/jsonrpc`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        jsonrpc: '2.0',
        method: 'call',
        params: { service: 'db', method: 'list', args: [] },
        id: 1,
      }),
    });
    const data = await r.json();
    if (data.error) {
      return res.status(200).json({
        ok: false,
        hint: 'db listing is disabled on this server (common on Odoo.sh). Check the odoo.sh dashboard → production branch for the database name.',
        error: data.error?.data?.message || data.error?.message,
      });
    }
    return res.status(200).json({ ok: true, databases: data.result });
  } catch (e) {
    return res.status(200).json({ ok: false, error: String(e) });
  }
}
