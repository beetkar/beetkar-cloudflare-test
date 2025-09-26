// functions/api/latest.ts
export const onRequestGet: PagesFunction = async (ctx) => {
  const API_BASE = ctx.env.WORKER_ORIGIN as string;
  const urlIn = new URL(ctx.request.url);
  const out = new URL(`${API_BASE}/api/latest`);
  out.search = urlIn.search; // keep ?deviceId=...

  const resp = await fetch(out.toString(), { method: 'GET' });
  return new Response(resp.body, { status: resp.status, headers: { 'content-type': 'application/json' } });
};
