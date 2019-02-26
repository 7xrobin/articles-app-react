
self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open('v1').then(function(cache) {
            return cache.addAll([
                './index.html',
                './favicon.ico',
                './espresso.jpeg',
                'https://fonts.googleapis.com/icon?family=Material+Icons',
                'https://fonts.gstatic.com/s/materialicons/v41/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.woff2'
            ]);
        })
    );
});
self.addEventListener('fetch', function(event) {
    if(!(event.request.url.indexOf('http') === 0)){
        return;
    }
    event.respondWith(caches.match(event.request).then(function(response) {
        // caches.match() always resolves
        // but in case of success response will have value
        if (response !== undefined) {
            return response;
        } else {
            return fetch(event.request).then(function (response) {
                // response may be used only once
                // we need to save clone to put one copy in cache
                // and serve second one

                let responseClone = response.clone();
                caches.open('v1').then(function (cache) {
                    cache.put(event.request, responseClone);
                });
                return response;
            }).catch(function () {
                console.log(event.request);
                return caches.match('./espresso.jpeg');
            });
        }
    }));
});