if(!self.define){let e,i={};const s=(s,n)=>(s=new URL(s+".js",n).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(i[t])return;let o={};const c=e=>s(e,t),d={module:{uri:t},exports:o,require:c};i[t]=Promise.all(n.map((e=>d[e]||c(e)))).then((e=>(r(...e),o)))}}define(["./workbox-f683aea5"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"4a8e28ffdc180b96a1e0.jpg",revision:null},{url:"index.html",revision:"03df7a308d435cc66894bd201bef0679"},{url:"main.css",revision:"5c11e8a721c3628172f70d1a5e923c23"},{url:"main.js",revision:"039e39bc8635daa0c459383bded7ab88"},{url:"main.js.LICENSE.txt",revision:"5b8abc649cf29de3b5de419a078d8c6c"}],{})}));
