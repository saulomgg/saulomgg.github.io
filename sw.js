const CACHE_NAME = 'saulomgg-hub-v2';
const urlsToCache = [
  '/',
  'index.html',
  'gestores.html',
  'ferramentas.html',
  'apoio.html',
  'gratuitos.html',
  'windows.html',
  'servicos.html',
  'comunidade.html',
  'redes-sociais.html',
  'css/style.css',
  'css/pages.css',
  'css/cyber-modals.css',
  'js/main.js',
  'manifest.json'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache).catch(err => console.log('Cache install error:', err)))
  );
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames =>
      Promise.all(cacheNames.map(name => name !== CACHE_NAME ? caches.delete(name) : Promise.resolve()))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) return response;
        return fetch(event.request)
          .then(response => {
            if (!response || response.status !== 200 || response.type === 'error') return response;
            const clone = response.clone();
            caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
            return response;
          })
          .catch(() => caches.match('index.html'));
      })
  );
});
