'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "05932acb26b4da86849ef98f64649669",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "256ad8bb7417128c01e21dbf91f9b807",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "6856ab21291b823cc389a21e79088577",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "1f738ff517f7e79c0f2655a044ee5763",
".git/logs/refs/heads/main": "16fe8bc7ab233c33549e0e2e126890e1",
".git/logs/refs/remotes/origin/HEAD": "d70bcc80b9be3558d443eb8fa7685955",
".git/logs/refs/remotes/origin/main": "2c04dbfb09710d268f4de7fb94f22559",
".git/objects/06/ad5f7177caba6372e9e384cbfb0e731e74b5d1": "f6a5b2ec3e63030fc6f829e34e5badd3",
".git/objects/0f/2c2f884e8d8d37b2611c4009be77ed0a5ec9f6": "fa3b6383e90db3fd51f84e7c899cfc2b",
".git/objects/14/5c40c8e120fd369651e1296aaa385a5d6ed5bb": "2b5e5d79f30bbc520d24146a98ab1285",
".git/objects/1a/d7683b343914430a62157ebf451b9b2aa95cac": "94fdc36a022769ae6a8c6c98e87b3452",
".git/objects/20/b1364ac7178494f108a37089b86d6bf61f7701": "a93556da8a1b970d7c351f78c52fb94d",
".git/objects/43/83e050a25b2bc6599ca217ac4410537206d62a": "73ff00b227370bea528e4c7659456b23",
".git/objects/44/c9ce30d523da1527d0f03825e8cca0477a6bea": "80b21814d419d316e6b7ac3ad79c716b",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4c/51fb2d35630595c50f37c2bf5e1ceaf14c1a1e": "a20985c22880b353a0e347c2c6382997",
".git/objects/4d/23a6e54217dbdd41f9e7bf0ba1fa2e85d1a5d1": "552a5bcb27d4a0ead6b0c75e0c51182d",
".git/objects/4d/737897d151064db55da535194f6759870fc6d6": "ed2af7744b83b9a6b4309a3e2861adeb",
".git/objects/53/18a6956a86af56edbf5d2c8fdd654bcc943e88": "a686c83ba0910f09872b90fd86a98a8f",
".git/objects/53/3d2508cc1abb665366c7c8368963561d8c24e0": "4592c949830452e9c2bb87f305940304",
".git/objects/55/c9e89e7af4d83fb3703bdf806d9ad104940199": "333ceafbd9df6ce66368df04f8ff39b2",
".git/objects/58/55686722ce5c97d525ff29840bee246dd2c44e": "886077ffad83bfbfaff02cea18ec98ca",
".git/objects/62/9dc50a093a381bd1a1e91eda5e3c209cf27334": "de78e066300c5f2f0ff28836cf1e0f0e",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/70/a234a3df0f8c93b4c4742536b997bf04980585": "d95736cd43d2676a49e58b0ee61c1fb9",
".git/objects/71/1ccc249a0c7d871f9a8e07d7c59e10f246540d": "1ff318220b48561bfcc2a67c4ca32937",
".git/objects/73/c63bcf89a317ff882ba74ecb132b01c374a66f": "6ae390f0843274091d1e2838d9399c51",
".git/objects/76/5cc3c2027d071505cb16352576a154faea22e5": "c83e3985db3bad9b7f7f0c5f0a4aeceb",
".git/objects/76/e673b63d526394e3de401603c0a3c0c6f36784": "2b306cf29f2068956c9d7eb5efb17147",
".git/objects/81/6a06e0df5bc9132299a5ffef761c4367566b50": "62414dd9a31c328205dbf4e3333c8780",
".git/objects/82/3af00ecec3115de997a7afdac21d40ca155487": "4399bb16b10437e5017e88b574f7d9ec",
".git/objects/86/d961161950affb6f03e9a3a003fa125d19e73c": "ec3a493d55ca09d23e25becafcb29357",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/0dd8f4efbe184bfa57890385f0ee300486df51": "7f3a16274f6fede319e8fb188035371f",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/3c7d6bbbef6e7cefcdd4df877e7ed0ee4af46e": "025a3d8b84f839de674cd3567fdb7b1b",
".git/objects/8e/e9e48708f13fc52dc366d04902d87c714b73c0": "56c0ebcb30d6ddb48809dce87512be98",
".git/objects/8f/9f656de0d90a150b775643d833a1c2466b9739": "3996e6ac54f5e7b4c0e158ea47fee80a",
".git/objects/9b/b023ed0450e811e9e742c26f7c91f330f49749": "df9580c2345766c4638784127b4599c1",
".git/objects/9b/d3accc7e6a1485f4b1ddfbeeaae04e67e121d8": "784f8e1966649133f308f05f2d98214f",
".git/objects/9e/a65019abd5985356d6a30a784b959ee50792dc": "075ab849f8157e6174a486d1080e7229",
".git/objects/9f/fe18c9258dece7db501fd29e1d5600a44118ee": "5eefa1605ee12082afd366df4449386c",
".git/objects/a9/1ac940b328af8ba763daf93c0aaab97bbb49e9": "266dbb5e920f1a6b5585cba1bd4c56c1",
".git/objects/af/b73e4c98449cb9de7f073f1cf1b14d7d87e808": "804078dbd93ee516e636e6171c7c951a",
".git/objects/b1/18436e781032baac9d182b4a121753fe795c97": "49d4eca4442fb1500e21835db6edc9ab",
".git/objects/b1/92dc54950ac759024b2b782255a84ea1b3a34f": "00ee69880ce798a76413c033fb271ec8",
".git/objects/b3/c73d6389fc3d9a2fce0241d5251f37be53e79f": "3655563ba9e3b45fe150264dd7870125",
".git/objects/b6/d780f24f03e796e04cf624a661e7b09505a89e": "05da5fd58fd02a6c251c800f3f845583",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/6a5236065a6c0fb7193cb2bb2f538b2d7b4788": "4227e5e94459652d40710ef438055fe5",
".git/objects/c5/176603571e0054b388f18cb36439c47dcbfea5": "ab355321fc40928d2d64585f34199a20",
".git/objects/c8/08fb85f7e1f0bf2055866aed144791a1409207": "92cdd8b3553e66b1f3185e40eb77684e",
".git/objects/c9/843dc8473d14586ea46150cf04b8659dcbe332": "82701219da92dc13da6240a0fae23b38",
".git/objects/d0/ca836cd7860b4b40058d03b2e9722df40995fe": "cc5b457a404c6ab664ad80a90b230695",
".git/objects/d1/aba4d5280dd579829def1332dc9427e595f2ae": "bbe4250022a18662e9b2bba338006520",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/8a7ddf410d8f71caf3ceabb87d689d0df02dd6": "9ecba634e270aeb0eb5e6098426ee8c7",
".git/objects/d4/a4a0d57febf675fe490aae7023b137c9abee65": "735e75a9d140777f696f24cda3720bea",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d9/ad9dd1edaed7b8f933c9a6bc741d91dae884a1": "1e3fa1af4756a7304f9fba8ece97a441",
".git/objects/da/ae7758206c3de5f9a60c117553b91ce07146b3": "fb0d81df88cd77dbc092d1cb290fb998",
".git/objects/da/bbcb6ae094d4357fb5df5ea4f2d5dcda76fff2": "0b3adef268a8ee4673b48dcd6b977b04",
".git/objects/dc/11fdb45a686de35a7f8c24f3ac5f134761b8a9": "761c08dfe3c67fe7f31a98f6e2be3c9c",
".git/objects/e0/7ac7b837115a3d31ed52874a73bd277791e6bf": "74ebcb23eb10724ed101c9ff99cfa39f",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/ea/655d745eee4359a78df434ed0f7d9d21c97fa5": "9d74b3aa160bc0892a36f65e677e3825",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/05c83c30dd12ba843d8586bf8e564b8386303e": "c666d61bfc7065ee2216d51c705c26a1",
".git/objects/ef/cd6be19edc78c58bb146e7d9124a7b449a5e54": "95c1caa6e45760acc04b20bdbcd1c32f",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f6/d5dc5754510c4ace5309394f8d7a4631ab1551": "b1019793e94695171a326b921f303b31",
".git/objects/fa/3a567e0e987e784fc6c1589d3e4f198fe0fdbb": "d8840ccf5bb19ad9db99c692c319bad6",
".git/objects/fb/dc93abe99b106ec11f8a319db3e8ce7d297c76": "b2b5ab6070d20f8af8c9186ca91f9a20",
".git/refs/heads/main": "1b1c9a668a8e929b1ef15d01d33c0edb",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "1b1c9a668a8e929b1ef15d01d33c0edb",
"assets/AssetManifest.bin": "13aaa1f85601cd2ada61efd1858f35bd",
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
"flutter_bootstrap.js": "7f49e46a97da59bd5fb7bec38bac80af",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "efe9166f6fd13a3a4d6c1b81aa412e8a",
"/": "efe9166f6fd13a3a4d6c1b81aa412e8a",
"main.dart.js": "47ade28bd331d577f7026c548b977358",
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
