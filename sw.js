const CACHE_NAME = 'biology-w3b-v1';
const STATIC_ASSETS = [
    './',
    './index.html',
    './styles.css',
    './components.js',
    './script.js',
    './data.js',
    './manifest.json',
    './humano.html',
    './animals.html',
    './seresvivos.html',
    './cell.html',
    './genetica.html',
    './cadenaAlimenticia.html',
    './biogeoquimicos.html',
    './infoEarth.html',
    './juego.html',
    './temas/index.html',
    './temas/celula.html',
    './temas/organulos.html',
    './temas/division-celular.html',
    './temas/circulatorio.html',
    './temas/digestivo.html',
    './temas/respiratorio.html',
    './temas/nervioso.html',
    './temas/adn.html',
    './temas/herencia.html',
    './temas/cromosomas.html',
    './temas/reinos.html',
    './temas/invertebrados-tema.html',
    './temas/funciones-vitales.html',
    './temas/vertebrados.html',
    './temas/invertebrados-animales.html',
    './temas/cadena-alimenticia.html',
    './temas/ecosistemas.html',
    './temas/ciclos-materia.html',
    './juegos/index.html',
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css',
    'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Outfit:wght@300;400;500;600;700;800&display=swap'
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(STATIC_ASSETS).catch((err) => {
                console.log('Some assets failed to cache:', err);
            });
        })
    );
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.filter((name) => name !== CACHE_NAME)
                    .map((name) => caches.delete(name))
            );
        })
    );
    self.clients.claim();
});

self.addEventListener('fetch', (event) => {
    if (event.request.method !== 'GET') return;

    event.respondWith(
        caches.match(event.request).then((cachedResponse) => {
            if (cachedResponse) return cachedResponse;

            return fetch(event.request).then((networkResponse) => {
                if (networkResponse && networkResponse.status === 200) {
                    const responseClone = networkResponse.clone();
                    caches.open(CACHE_NAME).then((cache) => {
                        cache.put(event.request, responseClone);
                    });
                }
                return networkResponse;
            }).catch(() => {
                if (event.request.destination === 'document') {
                    return caches.match('./index.html');
                }
                return null;
            });
        })
    );
});
