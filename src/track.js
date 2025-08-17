import { UAParser } from 'ua-parser-js';


const WEBHOOK_URL = "https://script.google.com/macros/s/AKfycbwhgwM5K42ioCpLYoxbt8y_wI3sT-KyMkOwUQwGWoVcCkNdnTimXuI2TrEard-1lMt-zA/exec"; // <-- paste your /exec URL

function getUTM() {
  const p = new URLSearchParams(window.location.search);
  const keys = ['utm_source','utm_medium','utm_campaign','utm_content','utm_term'];
  const utm = {};
  keys.forEach(k => { const v = p.get(k); if (v) utm[k] = v; });
  return utm;
}

export async function trackVisitOnce() {
  // only once per tab/session
  if (sessionStorage.getItem('tracked')) return;

  // 1) get geo (works on deployed site)
  let geo = {};
  try {
    geo = await fetch('/api/geo', { method: 'POST' }).then(r => r.json());
  } catch {}

  // 2) parse user agent
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
    // prefer sendBeacon to avoid blocking navigation
    if (!navigator.sendBeacon || !navigator.sendBeacon(WEBHOOK_URL, blob)) {
      await fetch(WEBHOOK_URL, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body });
    }
    sessionStorage.setItem('tracked', '1');
  } catch {
    // ignore errors
  }
}
