const CACHE = "khaton-final-clean-v1";
const ASSETS = ["./", "./index.html", "./card.html", "./manifest.json", "./images/product-1.webp", "./images/product-2.webp", "./images/product-3.webp", "./images/product-4.webp", "./images/product-5.webp", "./images/product-6.webp", "./images/product-7.webp", "./images/product-8.webp"];
self.addEventListener("install", event => event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(ASSETS)).then(() => self.skipWaiting())));
self.addEventListener("activate", event => event.waitUntil(self.clients.claim()));
self.addEventListener("fetch", event => event.respondWith(caches.match(event.request).then(cached => cached || fetch(event.request).catch(() => caches.match("./index.html")) )));
