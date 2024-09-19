"use strict";(self.webpackChunkrealCookieBanner_=self.webpackChunkrealCookieBanner_||[]).push([[80],{2936:(e,t,n)=>{n.d(t,{A:()=>r});const r={icon:{tag:"svg",attrs:{viewBox:"0 0 1024 1024",focusable:"false"},children:[{tag:"path",attrs:{d:"M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"}}]},name:"caret-down",theme:"filled"}},7136:(e,t,n)=>{n.d(t,{A:()=>r});const r={icon:{tag:"svg",attrs:{viewBox:"0 0 1024 1024",focusable:"false"},children:[{tag:"path",attrs:{d:"M715.8 493.5L335 165.1c-14.2-12.2-35-1.2-35 18.5v656.8c0 19.7 20.8 30.7 35 18.5l380.8-328.4c10.9-9.4 10.9-27.6 0-37z"}}]},name:"caret-right",theme:"filled"}},8285:(e,t,n)=>{n.d(t,{A:()=>r});const r={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"}}]},name:"down",theme:"outlined"}},8489:(e,t,n)=>{n.d(t,{A:()=>r});const r={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M872 474H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h720c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"}}]},name:"minus",theme:"outlined"}},2143:(e,t,n)=>{n.d(t,{A:()=>r});const r={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z"}}]},name:"right",theme:"outlined"}},1503:(e,t,n)=>{n.d(t,{Q:()=>a});var r=function(){return r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var c in t=arguments[n])Object.prototype.hasOwnProperty.call(t,c)&&(e[c]=t[c]);return e},r.apply(this,arguments)},c={primaryColor:"#333",secondaryColor:"#E6E6E6"};function a(e,t){if(void 0===t&&(t={}),"function"==typeof e.icon){var n=t.placeholders||c;return o(e.icon(n.primaryColor,n.secondaryColor),t)}return o(e.icon,t)}function o(e,t){var n="svg"===e.tag?r(r({},e.attrs),t.extraSVGAttrs||{}):e.attrs,c=Object.keys(n).reduce((function(e,t){var r=t,c=n[r],a="".concat(r,'="').concat(c,'"');return e.push(a),e}),[]),a=c.length?" "+c.join(" "):"",s=(e.children||[]).map((function(e){return o(e,t)})).join("");return s&&s.length?"<".concat(e.tag).concat(a,">").concat(s,"</").concat(e.tag,">"):"<".concat(e.tag).concat(a," />")}},8552:(e,t,n)=>{n.d(t,{y:()=>d});var r,c=n(7936),a=["bottom","height","left","right","top","width"],o=new Map,s=function e(){var t=[];o.forEach((function(e,n){var r,c,o=n.getBoundingClientRect();r=o,c=e.rect,void 0===r&&(r={}),void 0===c&&(c={}),a.some((function(e){return r[e]!==c[e]}))&&(e.rect=o,t.push(e))})),t.forEach((function(e){e.callbacks.forEach((function(t){return t(e.rect)}))})),r=window.requestAnimationFrame(e)};const i=function(e,t){return{observe:function(){var n=0===o.size;o.has(e)?o.get(e).callbacks.push(t):o.set(e,{rect:void 0,hasRectChanged:!1,callbacks:[t]}),n&&s()},unobserve:function(){var n=o.get(e);if(n){var c=n.callbacks.indexOf(t);c>=0&&n.callbacks.splice(c,1),n.callbacks.length||o.delete(e),o.size||cancelAnimationFrame(r)}}}};function u(e){return"boolean"==typeof e}function l(e){return!(!e||"[object Function]"!={}.toString.call(e))}var h="undefined"!=typeof window&&window.document&&window.document.createElement?c.Nf:c.vJ;function d(e,t,n){let r,a;u(t)?r=t:(r=t?.observe??!0,a=t?.onChange),l(n)&&(a=n),c.vJ((()=>{u(t)&&console.warn("Passing `observe` as the second argument to `useRect` is deprecated and will be removed in a future version of Reach UI. Instead, you can pass an object of options with an `observe` property as the second argument (`useRect(ref, { observe })`).\nSee https://reach.tech/rect#userect-observe")}),[t]),c.vJ((()=>{l(n)&&console.warn("Passing `onChange` as the third argument to `useRect` is deprecated and will be removed in a future version of Reach UI. Instead, you can pass an object of options with an `onChange` property as the second argument (`useRect(ref, { onChange })`).\nSee https://reach.tech/rect#userect-onchange")}),[n]);let[o,s]=c.J0(e.current),d=c.li(!1),f=c.li(!1),[v,g]=c.J0(null),p=c.li(a);return h((()=>{p.current=a,e.current!==o&&s(e.current)})),h((()=>{o&&!d.current&&(d.current=!0,g(o.getBoundingClientRect()))}),[o]),h((()=>{if(!r)return;let t=o;if(f.current||(f.current=!0,t=e.current),!t)return void console.warn("You need to place the ref");let n=i(t,(e=>{p.current?.(e),g(e)}));return n.observe(),()=>{n.unobserve()}}),[r,o,e]),v}}}]);
//# sourceMappingURL=https://sourcemap.devowl.io/real-cookie-banner/4.7.15/46bf823aebf0a8a6aa7ee5bb6970b5e5/banner_tcf-pro-80.pro.js.map
