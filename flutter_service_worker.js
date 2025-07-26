'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "13aaa1f85601cd2ada61efd1858f35bd",
"assets/AssetManifest.bin.json": "7b688bbaf5e9f5c1191da13c1b4e31cf",
"assets/AssetManifest.json": "61d02e2017c08518917f108210b97c45",
"assets/assets/gif/back%25201.gif": "01fee2bef1ea5c77b8fbcc8cbd39d638",
"assets/assets/gif/back.gif": "b1db11c8789b1b44a4fc5e63bbaff04f",
"assets/assets/gif/backend%25201.png": "7e44ba8edc30ee54ea06a72fbfc57485",
"assets/assets/icons/%25D0%2591%25D0%25B0%25D1%2581%25D0%25BA%25D0%25B5%25D1%2582%25D1%258B.svg": "5546e9798af5f12d9b152a36ffa10b77",
"assets/assets/icons/%25D0%2591%25D1%2583%25D1%2580%25D0%25B3%25D0%25B5%25D1%2580%25D1%258B.svg": "e133321b328e1339bf0674b19cd12a2f",
"assets/assets/icons/%25D0%2592%25D1%2581%25D0%25B5%2520%25D0%25BF%25D1%2580%25D0%25BE%25D0%25B4%25D0%25BA.svg": "8828fec4cae4c122a8bb8cd95848da68",
"assets/assets/icons/%25D0%2597%25D0%25B0%25D0%25BA%25D0%25B0%25D0%25B7%25D1%258B.svg": "3fde3646b3dccc73c9a90a16d3b98185",
"assets/assets/icons/%25D0%25A2%25D0%25B2%25D0%25B8%25D1%2581%25D1%2582%25D0%25B5%25D1%2580%25D1%258B.svg": "183596df9be37d8a16ac25ea642617e0",
"assets/assets/icons/Account.svg": "fabb14fb5d12358aa786710ac92160fd",
"assets/assets/icons/bare%2520code.svg": "e5468b45d5480d84380c3403b1287bb7",
"assets/assets/icons/Cancel.svg": "673cb70721cd931a5601dbf2df75b0c4",
"assets/assets/icons/cart.svg": "583394fd8846c476282b028fdd479551",
"assets/assets/icons/home.svg": "ab3259d69614aad7f685f64f76193979",
"assets/assets/icons/Katalog.svg": "ecfee962dfae888972ebf674a563ded1",
"assets/assets/icons/massage.svg": "4fb81f37fc01fcf2b722793df6b44678",
"assets/assets/Icons%2520Cart/bonkcart.png": "cb3f8d5c8a26870d1ee6c2b452791db4",
"assets/assets/Icons%2520Cart/bonkcart.svg": "cb3f8d5c8a26870d1ee6c2b452791db4",
"assets/assets/Icons%2520Cart/money.svg": "69c7bec44fa8f6e0e76a38bee3a629d7",
"assets/assets/Icons%2520Cart/qr.svg": "8044584252bcaa476de7d31a8536156d",
"assets/assets/image/%25D0%25A8%25D0%25B0%25D0%25BA%25D0%25B0%25D1%2580%25D0%25BE%25D0%25B1.png": "172f542e418461e142a01b4cf1dbc103",
"assets/assets/logo/Logo%2520restourant.svg": "505c4afb24cd7aa1e92ff81f1f80144c",
"assets/assets/Product/%25D0%25A8%25D0%25B0%25D0%25BA%25D0%25B0%25D1%2580%25D0%25BE%25D0%25B1.png": "172f542e418461e142a01b4cf1dbc103",
"assets/assets/Product/burger.jpg": "884ff71b0756f94dee707155fdefa15c",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "a86f0525dccea4fc9457df3d28e38bc8",
"assets/NOTICES": "d4d2488b79c6118bbf9824457ea293bc",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "ed29bd0982a4eb69aac6b5e6b4247827",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "efe9166f6fd13a3a4d6c1b81aa412e8a",
"/": "efe9166f6fd13a3a4d6c1b81aa412e8a",
"main.dart.js": "1fadd33cff64786c3508e63b0ddc706d",
"manifest.json": "3ce46328033e76ff5018a9337859337f",
"version.json": "3c9d3b0530d857c31df92eef58c1f6e6"};
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
