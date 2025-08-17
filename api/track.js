// api/track.js
const GAS_URL = "https://script.google.com/macros/s/AKfycbwhgwM5K42ioCpLYoxbt8y_wI3sT-KyMkOwUQwGWoVcCkNdnTimXuI2TrEard-1lMt-zA/exec"; // your /exec URL

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  try {
    const r = await fetch(GAS_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(req.body || {})
    });
    const text = await r.text(); // GAS usually returns "ok"
    if (!r.ok) return res.status(500).json({ error: 'GAS error', detail: text });
    return res.status(200).json({ ok: true, detail: text });
  } catch (e) {
    return res.status(500).json({ error: 'Fetch to GAS failed', detail: String(e) });
  }
}
