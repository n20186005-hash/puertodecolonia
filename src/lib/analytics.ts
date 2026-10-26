/** Existing opt-in analytics: refusal takes effect before persistence. */
export function initAnalytics(id: string) {
  const w = window as unknown as Window & { __puertoGA?: boolean; dataLayer?: unknown[]; gtag?: (...args: unknown[]) => void; [key: string]: unknown };
  const key = 'puerto-colonia-analytics-consent', vetoKey = key + '-off';
  const banner = document.getElementById('cookie-banner');
  const status = document.getElementById('consent-status');
  let denied = false;
  const read = () => { try { return localStorage.getItem(key); } catch { return null; } };
  const veto = () => { try { return sessionStorage.getItem(vetoKey) !== null; } catch { return true; } };
  const off = () => { denied = true; w['ga-disable-' + id] = true; w.gtag?.('consent', 'update', { analytics_storage: 'denied' }); };
  const refuse = () => {
    try { localStorage.setItem(key, 'rejected'); if (localStorage.getItem(key) === 'rejected') return true; } catch {}
    try { localStorage.removeItem(key); return localStorage.getItem(key) === null; } catch { return false; }
  };
  const on = () => {
    denied = false; w['ga-disable-' + id] = false;
    if (w.__puertoGA) { w.gtag?.('consent', 'update', { analytics_storage: 'granted' }); return; }
    w.__puertoGA = true; w.dataLayer ||= [];
    w.gtag = (...args: unknown[]) => { w.dataLayer!.push(args); };
    w.gtag('consent', 'default', { analytics_storage: 'granted' });
    w.gtag('js', new Date()); w.gtag('config', id, { anonymize_ip: true });
    const script = document.createElement('script'); script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=' + id; document.head.appendChild(script);
  };
  const set = (allow: boolean) => {
    off();
    let saved = false, sharedOff = false, tabOff = false;
    try { sessionStorage.setItem(vetoKey, '1'); tabOff = sessionStorage.getItem(vetoKey) === '1'; } catch {}
    if (allow) {
      try {
        sessionStorage.removeItem(vetoKey);
        if (sessionStorage.getItem(vetoKey) !== null) throw Error('veto');
        localStorage.setItem(key, 'accepted');
        if (localStorage.getItem(key) !== 'accepted') throw Error('readback');
        saved = true; on();
      } catch { sharedOff = refuse(); try { sessionStorage.setItem(vetoKey, '1'); tabOff = sessionStorage.getItem(vetoKey) === '1'; } catch {} }
    } else {
      try { localStorage.setItem(key, 'rejected'); saved = localStorage.getItem(key) === 'rejected'; } catch {}
      sharedOff = saved || refuse();
    }
    if (status) status.textContent = saved ? ('Preferencia guardada.') :
      ('No pudimos verificar el guardado. GA está desactivado en esta página.') +
      (sharedOff ? (' Se eliminó el permiso guardado.') : (' El permiso guardado puede seguir utilizable en otras pestañas o visitas.')) +
      (tabOff ? (' El rechazo se conserva en esta pestaña.') : '');
    if (saved) banner?.setAttribute('data-visible', 'false'); else banner?.setAttribute('data-visible', 'true');
  };
  w['ga-disable-' + id] = true;
  if (read() === 'accepted' && !veto()) on(); else { off(); if (!read()) banner?.setAttribute('data-visible', 'true'); }
  document.getElementById('cookie-accept')?.addEventListener('click', () => set(true));
  document.getElementById('cookie-reject')?.addEventListener('click', () => set(false));
  document.getElementById('cookie-settings')?.addEventListener('click', () => banner?.setAttribute('data-visible', 'true'));
  document.getElementById('cookie-close')?.addEventListener('click', () => banner?.setAttribute('data-visible', 'false'));
  window.addEventListener('storage', (event) => { if ((event.key === key || event.key === null) && read() !== 'accepted') { off(); try { sessionStorage.setItem(vetoKey, '1'); } catch {} } else if (!denied && !veto() && read() === 'accepted') on(); });
}
