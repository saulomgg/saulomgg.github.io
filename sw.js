const CACHE = 'saulomgg-hub-v3';
const FILES = ['index.html','apps.html','windows.html','sobre.html','comunidade.html','apoio.html',
  'css/style.css','css/pages.css','js/data.js','js/i18n.js','js/main.js','manifest.json','assets/icon-192.png','assets/icon-512.png'];
self.addEventListener('install', e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)).catch(()=>{})); self.skipWaiting(); });
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(k => Promise.all(k.filter(x => x !== CACHE).map(x => caches.delete(x)))));
  self.clients.claim();
});
/* rede primeiro (você sempre vê a versão nova); cache só quando offline */
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  e.respondWith(fetch(e.request).then(r => {
    if (r && r.status === 200 && new URL(e.request.url).origin === location.origin) {
      const c = r.clone(); caches.open(CACHE).then(ch => ch.put(e.request, c));
    }
    return r;
  }).catch(() => caches.match(e.request).then(r => r || caches.match('index.html'))));
});
