// functions/_middleware.ts
export const onRequest: PagesFunction = async (ctx) => {
  const resp = await ctx.next();
  const h = new Headers(resp.headers);
  h.set('access-control-allow-origin', new URL(ctx.request.url).origin);
  return new Response(resp.body, { status: resp.status, headers: h });
};
