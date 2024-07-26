'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "3dba152ec33be25e38f9c784747c5370",
"assets/AssetManifest.bin.json": "b2aa11736662d94ad06f889a949e6245",
"assets/AssetManifest.json": "3b625be449845d720014d7e4560e8822",
"assets/assets/images/black_logo.png": "cc4586ef6213f3d6c7df50f4f33deca9",
"assets/assets/images/cmm.jpg": "3beb81b930d134799496b0a5bfb30653",
"assets/assets/images/just_events_week.png": "c4b268824b9dbb52ac75aae81b7a8370",
"assets/assets/images/just_logo_white.png": "4f9f5ec4aeae3c9ee04c991c9ca9862e",
"assets/assets/images/menu.png": "265bbb072edfea430404413b23cebfa0",
"assets/assets/images/ministre.png": "235e33a98ac18105a71bad66333509f3",
"assets/assets/images/onmt.jpg": "97928a8f863fb474f00ccfaec4eed0d6",
"assets/assets/images/ram.jpg": "77db9fd3afac7fd97cc0c0a4cb8dad38",
"assets/assets/images/stars.png": "8f46ba5883318b360d537a50d2cc73ed",
"assets/assets/images/visit_morocco.png": "d559aa7300c90264f6ef61b1661b0d0b",
"assets/assets/images/white_logo.png": "5b017b47c1fe81047691ec8bd67f4180",
"assets/FontManifest.json": "94aeac1332d1708f89d82fa22f36ee72",
"assets/fonts/MaterialIcons-Regular.otf": "76631b07734b6266432731b3fa586ff7",
"assets/NOTICES": "afdd4be26e87f73aa2a5759e3c1d8ace",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "122502fb93c5b2ebb15c50fad3204a72",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "04f83c01dded195a11d21c2edf643455",
"assets/packages/iconsax_flutter/fonts/FlutterIconsax.ttf": "83c878235f9c448928034fe5bcba1c8a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "391d8cc806cf884d944cda43f3fc580d",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "e0eaa126ed3cbb762b2b2274cbfd21e6",
"icons/android-icon-144x144.png": "0734e3446c550969d069ebdaeaf63c66",
"icons/android-icon-192x192.png": "62de1bfe931542230617803dea95abc3",
"icons/android-icon-36x36.png": "924ccf66b86949bb58943ef71798477c",
"icons/android-icon-48x48.png": "76f3166b866172d8a71e85cada2d9b82",
"icons/android-icon-72x72.png": "51d041c3e717a63f246200a82a86b163",
"icons/android-icon-96x96.png": "5558d4018e6ecfdd076de715dc89a834",
"icons/apple-icon-114x114.png": "54732b455a5d1d5e932df24682cbbb20",
"icons/apple-icon-120x120.png": "6b93b424b78893b8bfef2925fa49f516",
"icons/apple-icon-144x144.png": "0734e3446c550969d069ebdaeaf63c66",
"icons/apple-icon-152x152.png": "64b9b2da8746b9b8c4685d8864a8a457",
"icons/apple-icon-180x180.png": "34f0d1bb458a0a6fca3b61101262e861",
"icons/apple-icon-57x57.png": "1cc051274cfdc01b4b74988cdaca1c98",
"icons/apple-icon-60x60.png": "8152ea76bbd486c6175b0dbb1a3d250c",
"icons/apple-icon-72x72.png": "51d041c3e717a63f246200a82a86b163",
"icons/apple-icon-76x76.png": "37fc5b79bd8b2a0c70cf86327ab10e44",
"icons/apple-icon-precomposed.png": "a8fedb68ae1f356e856b3380f156d325",
"icons/apple-icon.png": "a8fedb68ae1f356e856b3380f156d325",
"icons/browserconfig.xml": "653d077300a12f09a69caeea7a8947f8",
"icons/favicon-16x16.png": "1da1ff091bdfec6604990f3da4db5067",
"icons/favicon-32x32.png": "a9d38a837a12a01f34fed0f6a9ad7f15",
"icons/favicon-96x96.png": "5558d4018e6ecfdd076de715dc89a834",
"icons/favicon.ico": "e10db0949ca4d1e8b1d3970a326b67d0",
"icons/manifest.json": "b58fcfa7628c9205cb11a1b2c3e8f99a",
"icons/ms-icon-144x144.png": "0734e3446c550969d069ebdaeaf63c66",
"icons/ms-icon-150x150.png": "6df004c95c22e0a10384274422b6e0f3",
"icons/ms-icon-310x310.png": "f20f45bd0725ab81b2a6fd97faef2c94",
"icons/ms-icon-70x70.png": "da7aad62aa51c5d77a40592b24bb7ead",
"index.html": "7a5d281819aa7ac5c1b9d9ffb9e458d2",
"/": "7a5d281819aa7ac5c1b9d9ffb9e458d2",
"main-icon.png": "4f9f5ec4aeae3c9ee04c991c9ca9862e",
"main.dart.js": "6c0311e1d098d78170bb0dd42b2d226e",
"manifest.json": "c4880e6f629ef470223c4a28632a0484",
"version.json": "c81159a8d9558bcb5d0cb7ee64f364eb"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
