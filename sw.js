if(!self.define){let e,n={};const i=(i,c)=>(i=new URL(i+".js",c).href,n[i]||new Promise((n=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=n,document.head.appendChild(e)}else e=i,importScripts(i),n()})).then((()=>{let e=n[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(c,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(n[o])return;let s={};const a=e=>i(e,o),b={module:{uri:o},exports:s,require:a};n[o]=Promise.all(c.map((e=>b[e]||a(e)))).then((e=>(r(...e),s)))}}define(["./workbox-15125c53"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-2a396905.css",revision:null},{url:"assets/index.1e544d29.js",revision:null},{url:"assets/workbox-window.prod.es5.6bb6a4de.js",revision:null},{url:"background.webp",revision:"00e10f1040f782071d39e09be19aeff9"},{url:"background/forest.webp",revision:"53215cfb8501f7cc5e35f6465da28168"},{url:"background/hills.webp",revision:"544fac84a4541ab3558c5aea27c2bcc9"},{url:"background/lake.webp",revision:"77b4c0d74c3377c86f0c1ba92a0c991f"},{url:"background/morning.webp",revision:"605a36218526e52c906881eca200d737"},{url:"background/mountain.webp",revision:"0c0e96869e609667a306e2d3b0305a97"},{url:"background/ocean.webp",revision:"a098d846a175d8574e5b34c07d6baa0e"},{url:"background/snow.webp",revision:"4e8cc7d88d207d7532f56a40bf337604"},{url:"background/sunshine.webp",revision:"06baeab2898bc5fe51e129ce6df5ec42"},{url:"beian.webp",revision:"4b983472af8945686c4557faef7c57ab"},{url:"icon.png",revision:"b4acfcdcdb951ecff5975b56780f8f51"},{url:"index.html",revision:"d8f2d4cc747247cac83233cf9fd405e4"},{url:"favicon.ico",revision:"871b6f8b3d816b2577abbc71728cf269"},{url:"icon.png",revision:"b4acfcdcdb951ecff5975b56780f8f51"},{url:"background.webp",revision:"00e10f1040f782071d39e09be19aeff9"},{url:"manifest.webmanifest",revision:"54c4f235b59d1ae92a36563ad407e926"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))),e.registerRoute(/^https:\/\/open.lightxi.com\//,new e.CacheFirst({cacheName:"lightxi-cdn",plugins:[new e.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3})]}),"GET")}));
