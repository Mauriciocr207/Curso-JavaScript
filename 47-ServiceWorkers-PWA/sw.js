const nombreCache = 'apv-v7';
const archivos = [
    '/47-ServiceWorkers-PWA/',
    '/47-ServiceWorkers-PWA/index.html',
    '/47-ServiceWorkers-PWA/css/bootstrap.css',
    '/47-ServiceWorkers-PWA/css/styles.css',
    '/47-ServiceWorkers-PWA/js/app.js',
    '/47-ServiceWorkers-PWA/js/apv.js',
    '/47-ServiceWorkers-PWA/manifest.json',
    '/47-ServiceWorkers-PWA/error.html',
  ];

// instalar service worker
self.addEventListener('install', e => {
    e.waitUntil(
        caches.open(nombreCache).then(cache => cache.addAll(archivos))
    )
})

// activar el service worker
self.addEventListener('activate', e => {
    e.waitUntil(
        caches.keys()
            .then(keys => Promise.all(
                keys
                    .filter(key => key !== nombreCache)
                    .map(key => caches.delete(key))
            ))
    )
})

// evento fetch para descargar archivos estaticos
self.addEventListener('fetch', e => {
    e.respondWith(
        caches
          .match(e.request)
          .then(cacheResponse => (cacheResponse ? cacheResponse : caches.match('error.html')))
    )
})