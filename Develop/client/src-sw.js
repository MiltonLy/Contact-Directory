// TODO: Create a service worker that caches static assets:
const CACHE_NAME = "contacts-cache";
const urlsToCache = [
    "/",
    "/index.html",
    "/css/style.css",
    "/js/cards.js",
    "/js/database.js",
    "/js/index.js",
    "/js/install.js",
    "/images/logo.png"
];

self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache))
    );
});

self.addEventListener("activate", (event) => {
    event.waitUntil(
        caches.keys().then((keyList) => {
            Promise.all(
                keyList.map((key) => {
                    if (key !== CACHE_NAME) {
                        return caches.delete(key);
                    }
                })
            );
        })
    );
});

self.addEventListener("activate", (event) => {
    event.waitUntil(clients.claim());
});