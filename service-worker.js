if(!self.define){let e,i={};const s=(s,n)=>(s=new URL(s+".js",n).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,r)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let t={};const o=e=>s(e,c),d={module:{uri:c},exports:t,require:o};i[c]=Promise.all(n.map((e=>d[e]||o(e)))).then((e=>(r(...e),t)))}}define(["./workbox-f683aea5"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"4a8e28ffdc180b96a1e0.jpg",revision:null},{url:"index.html",revision:"03df7a308d435cc66894bd201bef0679"},{url:"main.css",revision:"caa742b20c3d2d83d66be24cb070a5f3"},{url:"main.js",revision:"2a46c9c4ee2c32413a4c9a5aed74ac0f"},{url:"main.js.LICENSE.txt",revision:"5b8abc649cf29de3b5de419a078d8c6c"}],{})}));
