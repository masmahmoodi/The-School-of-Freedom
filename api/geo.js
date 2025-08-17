// /api/geo.js
export const config = { runtime: 'edge' };

export default async function handler(req) {
  const country = req.headers.get('x-vercel-ip-country') || 'Unknown';
  const city    = req.headers.get('x-vercel-ip-city') || '';
  return new Response(JSON.stringify({ country, city }), {
    headers: { 'content-type': 'application/json' },
  });
}
