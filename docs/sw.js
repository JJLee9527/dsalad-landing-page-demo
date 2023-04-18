/**
 * Copyright 2018 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// If the loader is already loaded, just stop.
if (!self.define) {
  let registry = {};

  // Used for `eval` and `importScripts` where we can't get script URL by other means.
  // In both cases, it's safe to use a global var because those functions are synchronous.
  let nextDefineUri;

  const singleRequire = (uri, parentUri) => {
    uri = new URL(uri + ".js", parentUri).href;
    return registry[uri] || (
      
        new Promise(resolve => {
          if ("document" in self) {
            const script = document.createElement("script");
            script.src = uri;
            script.onload = resolve;
            document.head.appendChild(script);
          } else {
            nextDefineUri = uri;
            importScripts(uri);
            resolve();
          }
        })
      
      .then(() => {
        let promise = registry[uri];
        if (!promise) {
          throw new Error(`Module ${uri} didn’t register its module`);
        }
        return promise;
      })
    );
  };

  self.define = (depsNames, factory) => {
    const uri = nextDefineUri || ("document" in self ? document.currentScript.src : "") || location.href;
    if (registry[uri]) {
      // Module is already loading or loaded.
      return;
    }
    let exports = {};
    const require = depUri => singleRequire(depUri, uri);
    const specialDeps = {
      module: { uri },
      exports,
      require
    };
    registry[uri] = Promise.all(depsNames.map(
      depName => specialDeps[depName] || require(depName)
    )).then(deps => {
      factory(...deps);
      return exports;
    });
  };
}
define(['./workbox-01d9f47c'], (function (workbox) { 'use strict';

  self.skipWaiting();
  workbox.clientsClaim();

  /**
   * The precacheAndRoute() method efficiently caches and responds to
   * requests for URLs in the manifest.
   * See https://goo.gl/S9QRab
   */
  workbox.precacheAndRoute([{
    "url": "assets/_...all_-37532738.js",
    "revision": null
  }, {
    "url": "assets/404-32544fdb.js",
    "revision": null
  }, {
    "url": "assets/app-2cfe1ed2.js",
    "revision": null
  }, {
    "url": "assets/ar-3116e923.js",
    "revision": null
  }, {
    "url": "assets/de-ac17cf5a.js",
    "revision": null
  }, {
    "url": "assets/en-2ef8769f.js",
    "revision": null
  }, {
    "url": "assets/es-44e40f41.js",
    "revision": null
  }, {
    "url": "assets/fr-3deced60.js",
    "revision": null
  }, {
    "url": "assets/home-a2042202.js",
    "revision": null
  }, {
    "url": "assets/id-f4fd9e4f.js",
    "revision": null
  }, {
    "url": "assets/index-e2c03bf1.css",
    "revision": null
  }, {
    "url": "assets/it-3c0c7e92.js",
    "revision": null
  }, {
    "url": "assets/ja-0025478b.js",
    "revision": null
  }, {
    "url": "assets/ka-4057ec5d.js",
    "revision": null
  }, {
    "url": "assets/ko-8aa88c71.js",
    "revision": null
  }, {
    "url": "assets/pl-0a9960ff.js",
    "revision": null
  }, {
    "url": "assets/pt-BR-df026943.js",
    "revision": null
  }, {
    "url": "assets/README-bc87b04c.js",
    "revision": null
  }, {
    "url": "assets/ru-afb15a13.js",
    "revision": null
  }, {
    "url": "assets/tr-d2e1ae0a.js",
    "revision": null
  }, {
    "url": "assets/uk-557bb745.js",
    "revision": null
  }, {
    "url": "assets/vi-80491d22.js",
    "revision": null
  }, {
    "url": "assets/virtual_pwa-register-c197d34d.js",
    "revision": null
  }, {
    "url": "assets/workbox-window.prod.es5-dc90f814.js",
    "revision": null
  }, {
    "url": "assets/zh-CN-253ef87b.js",
    "revision": null
  }, {
    "url": "index.html",
    "revision": "ddf66b6298c203a685a6cba787618f0a"
  }, {
    "url": "readme.html",
    "revision": "3ab874775fb0203d43ad27d92ec0fe27"
  }, {
    "url": "favicon.svg",
    "revision": "dd3c62df6aeab84009d41900acfc9e7d"
  }, {
    "url": "safari-pinned-tab.svg",
    "revision": "5eaf74d1c43d30e0af743b68a3f48504"
  }, {
    "url": "pwa-192x192.png",
    "revision": "4baaee51a3c27ec4023776eb8312978d"
  }, {
    "url": "pwa-512x512.png",
    "revision": "ca21b47928e65d3b6ee2a11a6eb7eb38"
  }, {
    "url": "manifest.webmanifest",
    "revision": "37e8d18026b05432f623fc5efac2b4b1"
  }], {});
  workbox.cleanupOutdatedCaches();
  workbox.registerRoute(new workbox.NavigationRoute(workbox.createHandlerBoundToURL("index.html")));

}));
