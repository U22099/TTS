if(!self.define){let e,i={};const n=(n,s)=>(n=new URL(n+".js",s).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(s,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let t={};const l=e=>n(e,o),c={module:{uri:o},exports:t,require:l};i[o]=Promise.all(s.map((e=>c[e]||l(e)))).then((e=>(r(...e),t)))}}define(["./workbox-3e911b1d"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-B0Pq71_S.js",revision:null},{url:"assets/index-DcN7fz9I.css",revision:null},{url:"index.html",revision:"e9ee898619e7cd361e9d27e452510149"},{url:"registerSW.js",revision:"b58924cd20ef84bd4c2a21a1a401a2f7"},{url:"maskable-icon-512x512.png",revision:"726c60a690706f0b66705ab2bfbfb09f"},{url:"pwa-192x192.png",revision:"29ebb0a571db40aba469414dcb0b8867"},{url:"pwa-512x512.png",revision:"39e9c8582136bcbac0e8ffbb3ed1d0b6"},{url:"pwa-64x64.png",revision:"745e5ab3a03c2a9170ff5a6f3c99e086"},{url:"manifest.webmanifest",revision:"8347e7cfa5611373bb1dfbaee6d60f42"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
