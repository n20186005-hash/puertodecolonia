/* Service Worker — Puerto de Colonia (static single page)
   Estrategia: network-first para navegación con respaldo offline a "/";
   cache-first para el resto de activos estáticos del mismo origen. */
const CACHE = 'puerto-de-colonia-v2026-09-09';
const CORE = [
  '/',
  '/manifest.webmanifest',
  '/favicon.svg',
  '/favicon-32x32.png',
  '/favicon-16x16.png',
  '/apple-touch-icon.png',
  '/icons/icon-192.png',
  '/icons/icon-512.png',
  '/icons/icon.svg',
  '/photos/puerto-terminal-exterior.jpg',
  '/photos/ferries-terminal.jpg',
  '/photos/ferry-atardecer.jpg',
  '/photos/terminal-interior.jpg'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE)
      .then((cache) => cache.addAll(CORE))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((key) => key !== CACHE).map((key) => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const request = event.request;
  if (request.method !== 'GET') return;

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  // Navegación: red primero, respaldo offline con la copia en caché de "/".
  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .then((response) => {
          const copy = response.clone();
          caches.open(CACHE).then((cache) => cache.put('/', copy));
          return response;
        })
        .catch(() => caches.match('/'))
    );
    return;
  }

  // Resto de activos: caché primero, luego red (y almacenar en caché).
  event.respondWith(
    caches.match(request).then(
      (cached) =>
        cached ||
        fetch(request).then((response) => {
          if (response && response.status === 200 && response.type === 'basic') {
            const copy = response.clone();
            caches.open(CACHE).then((cache) => cache.put(request, copy));
          }
          return response;
        })
    )
  );
});
