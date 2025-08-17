// src/track.js  (BROWSER)
import { UAParser } from 'ua-parser-js';

const isLocal = location.hostname === 'localhost';
const ORIGIN  = isLocal ? 'https://the-school-of-freedom.vercel.app' : '';

const GEO_URL   = `${ORIGIN}/api/geo`;
const TRACK_URL = `${ORIGIN}/api/track`;

function getUTM() {
  const p = new URLSearchParams(window.location.search);
  const keys = ['utm_source','utm_medium','utm_campaign','utm_content','utm_term'];
  const utm = {};
  keys.forEach(k => { const v = p.get(k); if (v) utm[k] = v; });
  return utm;
}

export async function trackVisitOnce() {
  if (sessionStorage.getItem('tracked')) return;

  let geo = {};
  try { geo = await fetch(GEO_URL, { method: 'POST' }).then(r => r.json()); } catch {}

  const ua = new UAParser().getResult();
  const payload = {
    country: geo.country,
    city: geo.city,
    deviceType: ua.device?.type || 'desktop',
    deviceModel: ua.device?.model || '',
    osName: ua.os?.name || '',
    browserName: ua.browser?.name || '',
    referrer: document.referrer || '',
    path: window.location.pathname + window.location.search,
    utm: getUTM(),
  };

  const body = JSON.stringify(payload);
  const blob = new Blob([body], { type: 'application/json' });

  try {
    if (!navigator.sendBeacon || !navigator.sendBeacon(TRACK_URL, blob)) {
      await fetch(TRACK_URL, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body });
    }
    sessionStorage.setItem('tracked', '1');
  } catch {}
}
