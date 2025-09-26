// functions/api/ingest.ts
export const onRequestPost: PagesFunction = async (ctx) => {
  const API_BASE = ctx.env.WORKER_ORIGIN as string;            // e.g. https://dht11-api.testarosa.workers.dev
  const TOKEN     = ctx.env.DEVICE_TOKEN as string;            // secret set in Pages settings

  const url = new URL(`${API_BASE}/api/ingest`);
  const body = await ctx.request.text();

  const resp = await fetch(url.toString(), {
    method: 'POST',
    headers: {
      'Content-Type': ctx.request.headers.get('content-type') || 'application/json',
      'X-DEVICE-TOKEN': TOKEN
    },
    body
  });

  return new Response(resp.body, { status: resp.status, headers: { 'content-type': 'application/json' } });
};
