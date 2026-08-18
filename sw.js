const CACHE_NAME = 'saulomgg-hub-v1';
const urlsToCache = [
  'html/index.html',
  'html/gestores.html',
  'html/ferramentas.html',
  'html/apoio.html',
  'html/gratuitos.html',
  'html/windows.html',
  'html/servicos.html',
  'html/comunidade.html',
  'css/style.css',
  'css/pages.css',
  'js/main.js',
  'manifest.json'
];

// Install event
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
      .catch(err => console.log('Cache install error:', err))
  );
  self.skipWaiting();
});
// Activate event
self.addEventListener('activate', event => {
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  self.clients.claim();
// Fetch event
self.addEventListener('fetch', event => {
  // Skip non-GET requests
  if (event.request.method !== 'GET') {
    return;
  }
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Return cached version if available
        if (response) {
          return response;
        }
        // Otherwise fetch from network
        return fetch(event.request)
          .then(response => {
            // Don't cache non-successful responses
            if (!response || response.status !== 200 || response.type === 'error') {
              return response;
            }
            // Clone the response
            const responseToCache = response.clone();
            // Cache the new response
            caches.open(CACHE_NAME)
              .then(cache => {
                cache.put(event.request, responseToCache);
              });
            return response;
          })
          .catch(() => {
            // Return offline page if available
            return caches.match('html/index.html');
          });
