'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "4db7446758de16fbc0b2951d26884de0",
"assets/assets/fonts/LacaText-Bold.otf": "03039e23e0d31d2f5047ff5f5ed68068",
"assets/assets/fonts/LacaText-Regular.otf": "84ca0aa28f52dda626e37da63421dea1",
"assets/assets/fonts/LacaText-Semibold.otf": "e38c0a5314db4c8403e0da0166299d20",
"assets/assets/images/background/background1crp.png": "b37b4ed627d791731ec6e4ebe8702dfc",
"assets/assets/images/background/background1small.png": "be7baa80fbc3175d6f3cb74f2497d430",
"assets/assets/images/background/background1_light.png": "848174b521485d11d6e79a06291ae213",
"assets/assets/images/background/background2.png": "22cc686258095f5a1c278adc674c7983",
"assets/assets/images/background/background2small.png": "16cd39aa30ef608f592483b28a1eafb2",
"assets/assets/images/courses/course_c.png": "ad7034e8ab775c6d907c324bbd5d71a1",
"assets/assets/images/courses/course_cpp.png": "52f4a33d3ff2a9c230e58b1c1963a48b",
"assets/assets/images/courses/course_hacker.png": "ef7692a330d6d509c9f421bb7497724a",
"assets/assets/images/courses/course_java.png": "bb3e1484275d8a3bbfa265a95515c95a",
"assets/assets/images/courses/course_python.png": "4af4027086f500501ed6488e42604e13",
"assets/assets/images/icons/courses_icon.png": "1f34619aac6c6628120af5ead3b9e24f",
"assets/assets/images/icons/features_icon.png": "1be9ba3baaad4ad47de03330f605f0b4",
"assets/assets/images/icons/home_icon.png": "52ff346b293d6d90e6935df021eeee6d",
"assets/assets/images/icons/screen_icon_1.png": "6aa44ddbe66d2521af90d3508da91547",
"assets/assets/images/icons/screen_icon_2.png": "54eda7d12a21d7117df4bf30966b63f8",
"assets/assets/images/icons/screen_icon_3.png": "5ca1babcd72294881fc73d3991e20cd2",
"assets/assets/images/icons/screen_icon_4.png": "88c53011f52cebf81e7b49667b0ff47b",
"assets/assets/images/icons/screen_icon_5.png": "227c51bcafdf17a9c65e92e04e2b6ba5",
"assets/assets/images/icons/screen_icon_6.png": "37fb9d669fece2215b13dd3b0560abd5",
"assets/assets/images/icons/testimonals_icon.png": "71116b5bb87123ac3ec291785fa9a39e",
"assets/assets/images/logo/logo_purple.png": "a794a20fff599f25d897b87361624bcc",
"assets/assets/images/logo/logo_purple_small.png": "55f447a4655f448f62452f8b56777220",
"assets/assets/images/persons/person1.png": "5d4b170ceadcd28885950ea00a60560e",
"assets/assets/images/persons/person2.png": "cdcafdc61f095a6ebfcfa89d91c19fa0",
"assets/assets/images/persons/person3.png": "cf18b5f62cdbcb3f3c745dfe310ba5b4",
"assets/assets/images/screens/mobile_top_large.png": "67cd94e22c5f12296e38bb7e2e754115",
"assets/assets/images/screens/mobile_top_small.png": "4c026e5688a186ae2c913819e420502c",
"assets/assets/images/screens/screen1.png": "7569e951d5e532054ee2a4463f9226e7",
"assets/assets/images/screens/screen2.png": "fc680a4745eece63863409c897fca566",
"assets/assets/images/screens/screen3.png": "ea4de7c32bfa99355208c816b2ef3645",
"assets/assets/images/screens/screen4.png": "e1be13f6a34d8e2922780ea6dddd34ed",
"assets/assets/images/screens/screen5.png": "0330d1a67e40ffb18a45fb966add716f",
"assets/assets/images/screens/screen6.png": "1e9a15f3cab0bdba074302cb97e2629c",
"assets/assets/images/screens/screen_empty.png": "0491e64d82609da2cf4d83ca9510b82a",
"assets/FontManifest.json": "89694d8eaa25b80718d106e7623386ac",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "00510717171032343ddf174017a2bea0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "9a8e7fe35c54b70ec222a0793861b1ea",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "9c220c4e25fbf8695105f7ab844e4073",
"/": "9c220c4e25fbf8695105f7ab844e4073",
"main.dart.js": "dfe8d739615952bb572338b96f265d05",
"manifest.json": "ba5925135cd42737eb48d8e098950e5a",
"version.json": "18428c1189c97895502135d7ecdf3b04"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
