(()=>{const e="v0",t=["/","/App.js","/img"];self.addEventListener("install",(n=>{n.waitUntil(caches.open(e).then((e=>e.addAll(t))))})),self.addEventListener("activate",(t=>{t.waitUntil(caches.keys().then((t=>Promise.all(t.map((t=>{if(t!==e)return cache.delete(t)}))))))})),self.addEventListener("fetch",(t=>{"GET"!==t.request.method||0===t.request.url.indexOf("chrome-extension")||t.request.url.includes("imageban")||t.respondWith(fetch(t.request).then((n=>n.ok?caches.open(e).then((e=>e.put(t.request,n).then((()=>n.clone())))):caches.match(t.request,{ignoreSearch:!0}))).catch((()=>caches.match(t.request,{ignoreSearch:!0}))))}))})();
//# sourceMappingURL=sw.js.map
