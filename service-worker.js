const CACHE_NAME = 'solo-leveling-cache-v4'; // Increment cache version
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/styles.css',
  '/watch.html',
  '/episode-thumbnails/icon.png',
  '/episode-thumbnails/cover1.png'
];

// Install event
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('Service Worker: Caching static assets');
      return cache.addAll(STATIC_ASSETS);
    })
  );
  self.skipWaiting(); // Immediately activate the new service worker
});

// Activate event
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            console.log('Service Worker: Clearing old cache:', cache);
            return caches.delete(cache);
          }
        })
      );
    }).then(() => {
        console.log("Service Worker: Activated and ready to go!");
        return self.clients.claim(); //Take control of uncontrolled clients.
    })
  );
});

// Fetch event (Stale-while-revalidate)
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.match(event.request).then((cachedResponse) => {
        const fetchedResponsePromise = fetch(event.request).then((networkResponse) => {
          // Check if the network response is valid
          if (!networkResponse || networkResponse.status !== 200) {
            return networkResponse;
          }
          cache.put(event.request, networkResponse.clone());
          return networkResponse;
        }).catch(err => {
            console.error("Fetch Error:", err);
            return cachedResponse;
        });
        // Return the cached response if available, otherwise fetch from the network
        return cachedResponse || fetchedResponsePromise;
      });
    })
  );
});
