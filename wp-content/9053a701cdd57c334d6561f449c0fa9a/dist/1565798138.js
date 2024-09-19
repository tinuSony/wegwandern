"use strict";(self.webpackChunkrealCookieBanner_=self.webpackChunkrealCookieBanner_||[]).push([[4],{8208:(e,t,n)=>{if(n.d(t,{apply:()=>g}),101==n.j)var o=n(23477);if(101==n.j)var s=n(65276);if(101==n.j)var i=n(69430);if(101==n.j)var a=n(72591);if(101==n.j)var r=n(9819);if(101==n.j)var c=n(44959);if(101==n.j)var l=n(42315);if(101==n.j)var d=n(64008);if(101==n.j)var u=n(80237);async function g(e){const t=[];await(0,c.S)(e).iterateServices((async(e,n,o)=>{o&&t.push({group:e,service:n})})),document.dispatchEvent(new CustomEvent(l.r,{detail:{services:t,triggeredByOtherTab:e.triggeredByOtherTab}})),await(0,o.G)();const{dataLayer:n,isManagerOptOut:g,services:p,ready:m}=await(0,i.D)(e),{ready:v}=await(0,a.i)(e,n,g),h=Promise.all([m,v]);await(0,s.P)(),document.dispatchEvent(new CustomEvent(d.T,{detail:{services:p,ready:h}}));const{deleteHttpCookies:f,services:b,ready:x}=await(0,r.W)(e,g);document.dispatchEvent(new CustomEvent(u.a,{detail:{services:b,deleteHttpCookies:f,ready:Promise.all([h,x])}}))}},17456:(e,t,n)=>{n.d(t,{R:()=>a});var o=n(57177);if(101==n.j)var s=n(94975);if(101==n.j)var i=n(84483);function a(e,t){for(const{type:n,name:a}of e){const e=(0,s.t)(a,t);if("*"===e)continue;const r=new RegExp((0,i.Z)(e),"g");switch(n){case"http":for(const e of Object.keys(o.A.get()))r.test(e)&&o.A.remove(e);break;case"local":case"session":try{const e="local"===n?window.localStorage:window.sessionStorage;if(e)for(const t of Object.keys(e))if(r.test(t)){try{e.setItem(t,null)}catch(e){}let n=0;for(;e.getItem(t)&&n<100;)n++,e.removeItem(t)}}catch(e){continue}}}}},55002:(e,t,n)=>{n.d(t,{OF:()=>s,XR:()=>r,iy:()=>o});const o="Google Tag Manager",s="Matomo Tag Manager",i="gtm",a="mtm";function r(e,t){let n,r,c,{presetId:l,isGcm:d}=t,u=!1,g="";const p={events:!0,executeCodeWhenNoTagManagerConsentIsGiven:!0};let m=e||"none";switch("googleTagManagerWithGcm"!==m||d||(m="googleTagManager"),m){case"googleTagManager":case"googleTagManagerWithGcm":c=i,n="dataLayer",g=o,p.events="googleTagManagerWithGcm"!==m;break;case"matomoTagManager":c=a,n="_mtm",g=s;break;default:p.events=!1,p.executeCodeWhenNoTagManagerConsentIsGiven=!1}return n&&(r=()=>(window[n]=window[n]||[],window[n])),c&&l===c&&(u=!0,p.events=!1,p.executeCodeWhenNoTagManagerConsentIsGiven=!1),{getDataLayer:r,useManager:m,serviceIsManager:u,managerLabel:g,expectedManagerPresetId:c,features:p}}},69430:(e,t,n)=>{if(n.d(t,{D:()=>a}),101==n.j)var o=n(65385);if(101==n.j)var s=n(44959);if(101==n.j)var i=n(97849);async function a(e){const t=[],{isManagerActive:n,iterateServices:a}=(0,s.S)(e),{skipOptIn:r}=e;let c,l=!1;const d=[];return await a((async(e,s,u,g)=>{let{getDataLayer:p,serviceIsManager:m}=g;const{codeDynamics:v,codeOptIn:h,executeCodeOptInWhenNoTagManagerConsentIsGiven:f}=s,b=n&&m;if(u){const l=n&&f,u="function"==typeof r&&r(s);if(b){const e={},t={},n={};await a(((o,s,i,a)=>{let{serviceIsManager:r}=a;if(!r){const{tagManagerOptInEventName:o,tagManagerOptOutEventName:a,uniqueName:r}=s;o&&(t[o]=i),a&&(n[a]=!i),r&&(e[r]=i)}})),Object.assign(e,t),Object.assign(e,n),c=p(),c.push({realCookieBannerConsents:e,realCookieBannerOptInEvents:t,realCookieBannerOptOutEvents:n})}l||u||!h||d.push((0,o.l)(h,v));const g={group:e,service:s};document.dispatchEvent(new CustomEvent(i.D,{detail:g})),t.push(g)}else b&&(l=!0)})),{isManagerOptOut:l,dataLayer:c,services:t,ready:Promise.all(d)}}},72591:(e,t,n)=>{if(n.d(t,{i:()=>i}),101==n.j)var o=n(65385);if(101==n.j)var s=n(44959);async function i(e,t,n){const i=[],{isManagerActive:a,iterateServices:r}=(0,s.S)(e);return t?(r(((e,n,o,s)=>{let{tagManagerOptInEventName:i}=n,{features:a}=s;o&&i&&a.events&&t.push({event:i})})),setTimeout((()=>r(((e,n,o,s)=>{let{tagManagerOptOutEventName:i}=n,{features:a}=s;!o&&i&&a.events&&t.push({event:i})}))),1e3)):a&&n&&await r((async(e,t,n)=>{let{codeDynamics:s,codeOptIn:a,executeCodeOptInWhenNoTagManagerConsentIsGiven:r}=t;n&&r&&i.push((0,o.l)(a,s))})),{ready:Promise.all(i)}}},9819:(e,t,n)=>{if(n.d(t,{W:()=>r}),101==n.j)var o=n(65385);if(101==n.j)var s=n(44959);if(101==n.j)var i=n(41678);if(101==n.j)var a=n(17456);async function r(e,t){const n=[],{isManagerActive:r,iterateServices:c}=(0,s.S)(e),l=[],d=[];return await c((async(e,s,c)=>{const{id:u,codeDynamics:g,codeOptOut:p,deleteTechnicalDefinitionsAfterOptOut:m,isEmbeddingOnlyExternalResources:v,technicalDefinitions:h,executeCodeOptOutWhenNoTagManagerConsentIsGiven:f}=s;if(!c){const c=r&&f;(c&&t||!c)&&l.push((0,o.l)(p,g)),m&&!v&&((0,a.R)(h,g),h.some((e=>{let{type:t}=e;return"http"===t}))&&d.push(u));const b={group:e,service:s};document.dispatchEvent(new CustomEvent(i.G,{detail:b})),n.push(b)}})),{services:n,ready:Promise.all(l),deleteHttpCookies:d}}},44959:(e,t,n)=>{if(n.d(t,{S:()=>i}),101==n.j)var o=n(65585);if(101==n.j)var s=n(55002);function i(e){let t,{decisionCookieName:n,setCookiesViaManager:i,isGcm:a,groups:r,type:c}=e;const{useManager:l}=(0,s.XR)(i,{isGcm:a,presetId:""}),d=r.find((e=>{let{isEssential:t}=e;return t})),u={[d.id]:d.items.map((e=>{let{id:t}=e;return t}))};if("consent"===c){const e=(0,o.y)(n);!1!==e?t=e.consent:(console.warn("Something went wrong while reading the cookie, fallback to essentials only..."),t=u)}return"essentials"===c&&(t=u),{isManagerActive:"none"!==l,selectedGroups:t,iterateServices:async function(e){for(const o of r)for(const r of o.items){var n;const l="all"===c||(null==(n=t[o.id])?void 0:n.indexOf(r.id))>-1,d=(0,s.XR)(i,{presetId:r.presetId,isGcm:a});await e(o,r,l,d)}}}}},65585:(e,t,n)=>{if(n.d(t,{y:()=>r}),101==n.j)var o=n(73422);var s=n(57177);const i=/^(?<createdAt>\d+)?:?(?<uuids>(?:[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}[,]?)+):(?<revisionHash>[a-f0-9]{32}):(?<json>.*)$/,a={};function r(e){const t=localStorage.getItem(e);if(t)return JSON.parse(t);const n=s.A.get(e);if(!n){const[t]=e.split("-");return(0,o.s)(t?`${t}-test`:void 0),!1}if(a[n])return a[n];const r=n.match(i);if(!r)return!1;const{groups:c}=r,l=c.uuids.split(","),d=l.shift();let u=JSON.parse(c.json);Object.hasOwn(u,"bc")||(u={d:u,bc:"none"});const g={uuid:d,previousUuids:l,created:c.createdAt?new Date(1e3*+c.createdAt):void 0,revision:c.revisionHash,consent:u.d,buttonClicked:u.bc};return a[n]=g,g}},44467:(e,t,n)=>{if(n.d(t,{persistWithQueueFallback:()=>s}),101==n.j)var o=n(55765);async function s(e,t){e.createdClientTime=(new Date).toISOString();const n=t.getConsentQueue();n.push(e),t.setConsentQueue(n);try{await t.getOption("persistConsent")(e,!0),t.setConsentQueue(t.getConsentQueue().filter((t=>{let{createdClientTime:n}=t;return e.createdClientTime!==n})))}catch(n){const{groups:s,decisionCookieName:i,tcfCookieName:a,gcmCookieName:r,failedConsentDocumentationHandling:c,revisionHash:l}=t.getOptions(),d="optimistic"===c,{decision:u,createdClientTime:g,tcfString:p,gcmConsent:m,buttonClicked:v}=e,h={consent:d?"all"===u?s.reduce(((e,t)=>(e[t.id]=t.items.map((e=>{let{id:t}=e;return t})),e)),{}):"essentials"===u?(0,o.w)(s,!1):u:(0,o.w)(s,!1),previousUuids:[],revision:l,uuid:g,created:new Date(g),buttonClicked:v};localStorage.setItem(i,JSON.stringify(h)),p&&localStorage.setItem(a,d?p:""),m&&localStorage.setItem(r,d?JSON.stringify(m):"[]")}}},82697:(e,t,n)=>{n.d(t,{retryPersistFromQueue:()=>s});var o=n(57177);function s(e,t){void 0===t&&(t=!1);const{decisionCookieName:n,tcfCookieName:i,gcmCookieName:a}=e.getOptions(),r=()=>{localStorage.removeItem(n),localStorage.removeItem(i),localStorage.removeItem(a),localStorage.removeItem(e.getConsentQueueName())},c=document.querySelector('a[href*="rcb-clear-current-cookie=1"]');if(null==c||c.addEventListener("click",r),e.isConsentQueueLocked()){const t=t=>{t.key!==e.getConsentQueueName(!0)||t.newValue||s(e)};return window.addEventListener("storage",t),()=>{window.removeEventListener("storage",t),null==c||c.removeEventListener("click",r)}}{let s,i=0;const a=async()=>{e.isConsentQueueLocked(!0);const t=e.getConsentQueue();let c=15e3;if(t.length>0){i++;try{const s=t.shift(),a=0===t.length||!o.A.get(n),l=await e.getOption("persistConsent")(s,a),d=o.A.get(n);d&&-1===d.indexOf(l)&&o.A.set(n,d.replace(/^(.*?:.*?):/gm,`$1,${l}:`)),e.setConsentQueue(t),0===t.length&&r(),i=0,c=1500}catch(e){c=15*i*1e3}}s=setTimeout(a,c)};return e.isConsentQueueLocked(!0),s=setTimeout(a,t?0:15e3),()=>{e.isConsentQueueLocked(!1),clearTimeout(s),null==c||c.removeEventListener("click",r)}}}},97849:(e,t,n)=>{n.d(t,{D:()=>o});const o="RCB/OptIn"},64008:(e,t,n)=>{n.d(t,{T:()=>o});const o="RCB/OptIn/All"},41678:(e,t,n)=>{n.d(t,{G:()=>o});const o="RCB/OptOut"},80237:(e,t,n)=>{n.d(t,{a:()=>o});const o="RCB/OptOut/All"},93256:(e,t,n)=>{function o(){const{userAgent:e}=navigator,{cookie:t}=document;if(e){if(/(cookiebot|2gdpr)\.com/i.test(e))return!0;if(/cmpcrawler(reject)?cookie=/i.test(t))return!0}return!1}n.d(t,{W:()=>o})},84483:(e,t,n)=>{if(n.d(t,{Z:()=>s}),101==n.j)var o=n(65042);function s(e){const t=e.replace(/\*/g,"PLEACE_REPLACE_ME_AGAIN");return`^${(0,o.N)(t).replace(/PLEACE_REPLACE_ME_AGAIN/g,"(.*)")}$`}},73422:(e,t,n)=>{n.d(t,{s:()=>a});var o=n(57177);if(101==n.j)var s=n(93256);let i=101==n.j?void 0:null;function a(e){if(void 0===e&&(e="test"),"boolean"==typeof i)return i;if((0,s.W)())return!0;try{const t={sameSite:"Lax"};o.A.set(e,"1",t);const n=-1!==document.cookie.indexOf(`${e}=`);return o.A.remove(e,t),i=n,n}catch(e){return!1}}},94975:(e,t,n)=>{n.d(t,{q:()=>o,t:()=>s});const o=/{{([A-Za-z0-9_]+)}}/gm;function s(e,t){return e.replace(o,((e,n)=>Object.prototype.hasOwnProperty.call(t,n)?t[n]:e))}},65385:(e,t,n)=>{if(n.d(t,{l:()=>a}),101==n.j)var o=n(94975);if(101==n.j)var s=n(65276);if(101==n.j)var i=n(68015);function a(e,t,a){return void 0===a&&(a=document.body),new Promise((r=>{e?(0,s.P)().then((()=>Promise.all([n.e(891),n.e(406),n.e(4)]).then(n.t.bind(n,61104,23)).then((n=>{let{default:s}=n;return s(a,(0,o.t)(e,t),{done:r,error:e=>{console.error(e)},beforeWriteToken:e=>{const{attrs:t,booleanAttrs:n,src:o,href:s}=e;if(null==n?void 0:n["skip-write"])return!1;for(const e in t)if(t[e]=(0,i.C)(t[e]),"unique-write-name"===e&&document.querySelector(`[unique-write-name="${t[e]}"]`))return!1;return o&&(e.src=(0,i.C)(o)),s&&(e.href=(0,i.C)(s)),e}})})))):r()}))}},52835:(e,t,n)=>{n.r(t),n.d(t,{BannerHistorySelect:()=>u});var o=n(3713),s=n(36021),i=n(24265),a=n(41594),r=n(7835),c=n(44592),l=n(28756),d=n(52372);const u=()=>{const e=(0,s.Y)(),{Select:t}=(0,i.y)().extend(...r.I),{set:n,consent:u,groups:g,tcf:p,isGcm:m,gcmConsent:v,lazyLoadedDataForSecondView:h,activeAction:f,history:b,fetchHistory:x,visible:C,i18n:{historyLabel:y,historyItemLoadError:j,historySelectNone:k}}=e,[S,w]=(0,a.useState)(),[E,O]=(0,a.useState)({consent:u,groups:g,tcf:p,gcmConsent:v,lazyLoadedDataForSecondView:h}),I=e=>{let{buttonClicked:t,tcf:o,gcmConsent:s,...i}=e;const a={isTcf:!!o,tcf:null,gcmConsent:[]};o&&(Object.assign(a,{tcf:"gvl"in o?o:(0,c.T)(o)}),(null==t?void 0:t.startsWith("implicit_"))&&(0,l.o)(a.tcf.model,t)),m&&(Object.assign(a,{gcmConsent:s||[]}),"implicit_all"===t&&(a.gcmConsent=Object.values(d.um))),n({...i,...a})};(0,a.useEffect)((()=>{const e={consent:[],groups:[],gcmConsent:[],lazyLoadedDataForSecondView:void 0};if(S){const{context:t}=S;I(t||e)}else I(e)}),[S]);const M=(0,a.useRef)(!1);(0,a.useEffect)((()=>{h&&!M.current&&"history"===f&&C&&(M.current=!0,async function(){const e=await x();O({consent:u,groups:g,tcf:p,gcmConsent:v,lazyLoadedDataForSecondView:h}),n({history:e}),w(e[0])}())}),[h,f,C]),(0,a.useEffect)((()=>{C||(M.current=!1)}),[C]),(0,a.useEffect)((()=>()=>I(E)),[]);const P=null==S?void 0:S.uuid;return(0,o.jsxs)(a.Fragment,{children:[y," ",(0,o.jsx)(t,{disabled:!(null==b?void 0:b.length),value:(null==S?void 0:S.id)||-1,onChange:e=>{const t=+e.target.value;for(const e of b){const{id:n}=e;if(n===t){w(e);break}}},children:(null==b?void 0:b.length)>0?b.map((e=>{let{id:t,isDoNotTrack:n,isUnblock:s,isForwarded:i,created:a}=e;return(0,o.jsxs)("option",{value:t,children:[new Date(a).toLocaleString(document.documentElement.lang),n?" (Do Not Track)":"",s?" (Content Blocker)":"",i?" (Consent Forwarding)":""]},t)})):(0,o.jsx)("option",{value:-1,children:k})}),(0,o.jsxs)("div",{style:{opacity:.5,marginTop:5},children:["UUID: ",P||"-"]}),!(null==S?void 0:S.context)&&(0,o.jsx)("div",{style:{fontWeight:"bold",marginTop:5},children:j})]})}},89040:(e,t,n)=>{n.r(t),n.d(t,{BannerGcmGroupList:()=>g});var o=n(3713),s=n(41594),i=n(36021),a=n(32273),r=n(51282),c=n(94665),l=n(72253),d=n(45905),u=n(77944);const g=()=>{const e=(0,i.Y)(),{i18n:{purposes:t,gcm:{standard:n,standardDesc:g}}}=e,p=(0,a.R)(),m=(0,u.h)(p);return(0,o.jsxs)(s.Fragment,{children:[(0,o.jsx)(c.Y,{headline:n,style:r.r,borderless:!0,children:g}),(0,o.jsx)(l._,{children:(0,o.jsx)(c.Y,{headline:t,children:m.map((e=>(0,o.jsx)(d.Y,{type:e,isBold:!0},e)))})})]})}},50118:(e,t,n)=>{n.r(t),n.d(t,{BannerGroupList:()=>m});var o=n(3713),s=n(36021),i=n(62334),a=n(30766),r=n(59133),c=n(41594),l=n(37500);const d=e=>{let{group:{id:t,isEssential:n},cookie:i}=e;const{id:a}=i,r=(0,s.Y)(),{consent:d,activeAction:u}=r,g=n||"history"===u,p=n||((null==d?void 0:d[t])||[]).some((e=>e===a)),m=(0,c.useCallback)((e=>r.updateCookieChecked(t,a,e)),[r,t,a]);return(0,o.jsx)(l.Cookie,{cookie:i,propertyListProps:{isEssentialGroup:n},checked:p,disabled:g,onToggle:m})};var u=n(94665);const g=e=>{let{group:t}=e;const n=(0,s.Y)(),{name:c,description:l,items:g}=t,{group:{headlineFontSize:p},individualTexts:{headline:m,showMore:v,hideMore:h}}=n,f=(0,i.C)(t);return(0,o.jsxs)(u.Y,{legend:`${m}: ${c}`,headline:(0,o.jsxs)(a.S,{...f,fontSize:p,children:[c," (",g.length,")"]}),children:[(0,o.jsx)("span",{children:l}),!!g&&(0,o.jsx)(r.X,{showMore:v,hideMore:h,children:g.map((e=>(0,o.jsx)(d,{group:t,cookie:e},e.id)))})]})};var p=n(72253);const m=()=>{const{groups:e}=(0,s.Y)(),t=e.filter((e=>{let{items:t}=e;return t.length}));return(0,o.jsx)(p._,{children:t.map((e=>(0,o.jsx)(g,{group:e},e.id)))})}},70511:(e,t,n)=>{n.r(t),n.d(t,{BannerSticky:()=>v});var o=n(3713),s=n(41594),i=n(47337),a=n(36021),r=n(57899),c=n(83533),l=n(24265);const d=[Symbol("extendBannerBubbleStylesheet"),(e,t)=>{let{rule:n,boolSwitch:o,boolIf:s,className:i}=e,{boolLargeOrMobile:a,sticky:{animationsEnabled:r,alignment:c,bubbleBorderRadius:l,bubbleBg:d,bubbleMargin:u,bubblePadding:g,bubbleBorderWidth:p,bubbleBorderColor:m,iconColor:v,iconSize:h,boxShadowEnabled:f,boxShadowColor:b,boxShadowOffsetX:x,boxShadowOffsetY:C,boxShadowBlurRadius:y,boxShadowSpreadRadius:j,boxShadowColorAlpha:k,bubbleHoverBg:S,bubbleHoverBorderColor:w,hoverIconColor:E,menuBorderRadius:O,menuFontSize:I,menuItemSpacing:M,menuItemPadding:P}}=t;const D=999999,[,T]=n({classNames:"sticky",zIndex:D,pointerEvents:"none !important",position:"fixed",bottom:"0px",left:"0px",right:"0px",display:"flex",justifyContent:o([[c("is-left"),"flex-start"],[c("is-center"),"center"],[c("is-right"),"flex-end"]]),pseudos:{">div":{position:"relative"}}}),A=a(h,s),L={cursor:"pointer",boxShadow:s(f,`${x()} ${C()} ${y()} ${j()} rgba(${b("r")} ${b("g")} ${b("b")} / ${k()})`)},N=i(),B=i(),$=a(g,s),[,z]=n({classNames:"bubble",...L,zIndex:D,display:"block",position:"relative",borderRadius:l(),padding:$,backgroundColor:d(),pointerEvents:"all !important",margin:a(u,s),color:v(),fontSize:A,border:`${p()} solid ${m()}`,lineHeight:A,width:A,height:A,boxSizing:"content-box",overflow:"hidden",pseudos:{">svg":{width:A,height:A,verticalAlign:"initial"},">img":{width:"auto",height:A},[`:hover,:has(+div :focus-visible),<.${N} `]:{backgroundColor:`${S()} !important`,borderColor:`${w()} !important`,color:`${E()} !important`},[`<.${B} `]:{transition:"background 250ms, border 250ms, color 250ms"}}}),[,F]=n({classNames:"sticky-menu",position:"absolute",bottom:"100%",left:s(c("is-left"),a(u,s,3),s(c("is-center"),"0px")),right:s(c("is-right"),a(u,s,1)),textAlign:c("val"),width:"100vw",marginLeft:s(c("is-center"),`calc(-50vw + ${$} + ${a(u,s,1)} + ${p()} + (${A} / 2))`),pointerEvents:"none !important",zIndex:999998,pseudos:{":has(:focus-visible)":{display:"block !important",opacity:"1 !important",transform:"initial !important"},">ul,>ul>li":{all:"unset",pointerEvents:"none",display:"block"},">ul>li:not(:last-of-type)":{marginBottom:a(M,s)},">ul>li>a":{all:"unset",display:"inline-block",textDecoration:"none",backgroundColor:S(),border:`${p()} solid ${w()}`,color:E(),pointerEvents:"all",fontSize:a(I,s),transition:"margin 0.3s",borderRadius:O(),padding:a(P,s),...L},">ul>li>a:hover":{textDecoration:"underline",marginLeft:s(r,"10px")}}});return n({forceSelector:`:not(.${N})>.${F}>ul>li>a`,pointerEvents:"none !important"}),{stickyBar:T,bubble:z,bubbleActive:N,menu:F,bubbleMounted:B}}],u=e=>{let{type:t}=e;const n={version:"1.1",enableBackground:"new 0 0 512 512",viewBox:"0 0 512 512",fill:"currentColor"};switch(t){case"custom":return(0,o.jsx)("svg",{...n});case"close":return(0,o.jsx)("svg",{...n,enableBackground:"new 0 0 24 24",viewBox:"0 0 24 24",children:(0,o.jsx)("path",{d:"m4.9902 3.9902a1.0001 1.0001 0 0 0-0.69727 1.7168l6.293 6.293-6.293 6.293a1.0001 1.0001 0 1 0 1.4141 1.4141l6.293-6.293 6.293 6.293a1.0001 1.0001 0 1 0 1.4141-1.4141l-6.293-6.293 6.293-6.293a1.0001 1.0001 0 0 0-0.72656-1.7168 1.0001 1.0001 0 0 0-0.6875 0.30273l-6.293 6.293-6.293-6.293a1.0001 1.0001 0 0 0-0.7168-0.30273z"})});case"padlock":return(0,o.jsxs)("svg",{...n,children:[(0,o.jsx)("path",{d:"m391.5 210.8v-60.2c0-75.3-60.2-135.5-135.5-135.5s-135.5 60.2-135.5 135.5v60.2c-25.6 0-45.2 19.6-45.2 45.2v195.8c0 25.6 19.6 45.2 45.2 45.2h271.1c25.6 0 45.2-19.6 45.2-45.2v-195.8c-.1-25.6-19.7-45.2-45.3-45.2zm-240.9-60.2c0-58.7 46.7-105.4 105.4-105.4s105.4 46.7 105.4 105.4v60.2h-210.8zm256 301.2c0 9-6 15.1-15.1 15.1h-271c-9 0-15.1-6-15.1-15.1v-195.8c0-9 6-15.1 15.1-15.1h15.1 240.9 15.1c9 0 15.1 6 15.1 15.1v195.8z"}),(0,o.jsx)("path",{d:"m256 284.8c-26.1 0-46.1 20-46.1 46.1 0 20 12.3 36.9 30.7 43v33.8c0 9.2 6.1 15.4 15.4 15.4s15.4-6.1 15.4-15.4v-33.8c18.4-6.1 30.7-23 30.7-43 0-26.2-20-46.1-46.1-46.1zm0 61.6c-9 0-15.1-6-15.1-15.1 0-9 6-15.1 15.1-15.1s15.1 6 15.1 15.1c0 9-6.1 15.1-15.1 15.1z"})]});case"incognito":return(0,o.jsxs)("svg",{...n,children:[(0,o.jsx)("path",{d:"m376.3 272c-47.6 0-87.1 34.7-94.7 80.2h-50.6c-7.6-45.5-47.1-80.2-94.7-80.2-53 0-96 43-96 96s43 96 96 96c47.5 0 87-34.5 94.6-79.8h50.7c7.7 45.3 47.1 79.8 94.6 79.8 53 0 96-43 96-96s-42.9-96-95.9-96zm-240 160c-35.3 0-64-28.7-64-64s28.7-64 64-64 64 28.7 64 64-28.6 64-64 64zm240 0c-35.3 0-64-28.7-64-64s28.7-64 64-64 64 28.7 64 64-28.6 64-64 64z"}),(0,o.jsx)("path",{d:"m464.3 208.2h-34.9l-24.9-124.2c-4.2-20.9-22.5-36-43.8-36h-208.9c-21 .4-38.9 15.4-43 36l-25.5 124.2h-35c-8.8 0-16 7.2-16 16s7.2 16 16 16h416c8.8 0 16-7.2 16-16 0-8.9-7.1-16-16-16zm-324.9-118c1.2-5.9 6.4-10.2 12.5-10.2h208.8c6.1 0 11.3 4.3 12.5 10.2l23.6 117.8h-281z"})]});default:return(0,o.jsxs)("svg",{...n,children:[(0,o.jsx)("path",{d:"m85.9 98.6c47-43 107.5-66.6 170.1-66.6s123.1 23.6 170.1 66.6c3.1 2.8 6.9 4.2 10.8 4.2 4.4 0 8.7-1.7 11.8-5.2 6-6.5 5.5-16.7-1-22.6-53-48.4-121.1-75-191.7-75s-138.7 26.6-191.7 74.9c-6.5 6-7 16.1-1 22.6 5.9 6.5 16 7 22.6 1.1z"}),(0,o.jsx)("path",{d:"m477.3 182.4c-50.4-75-133.1-119.8-221.3-119.8s-170.9 44.8-221.3 119.8c-4.9 7.3-3 17.3 4.4 22.2 7.3 4.9 17.3 3 22.2-4.4 44.4-66.1 117.2-105.6 194.7-105.6s150.3 39.5 194.7 105.6c3.1 4.6 8.1 7.1 13.3 7.1 3.1 0 6.2-.9 8.9-2.7 7.4-4.9 9.3-14.9 4.4-22.2z"}),(0,o.jsx)("path",{d:"m140.6 339.5c0-66 51.8-119.7 115.4-119.7s115.4 53.7 115.4 119.7c0 8.8 7.2 16 16 16s16-7.2 16-16c0-83.6-66.1-151.7-147.4-151.7s-147.4 68-147.4 151.7c0 80.6 82 164.3 85.5 167.8 3.1 3.2 7.3 4.7 11.4 4.7s8.1-1.5 11.3-4.6c6.3-6.2 6.3-16.4.1-22.6-.8-.8-76.3-77.8-76.3-145.3z"}),(0,o.jsx)("path",{d:"m269.8 125.7c-57-3.8-111.6 15.8-153.7 55.1-43.3 40.6-68.1 98.4-68.1 158.7 0 49.6 16.8 97.9 47.4 136.1 5.5 6.9 15.6 8 22.5 2.5s8-15.6 2.5-22.5c-26.1-32.5-40.4-73.8-40.4-116.1 0-51.5 21.2-100.8 58.1-135.3 35.6-33.2 81.6-49.8 129.7-46.6 92.1 6.1 164.3 89 164.3 188.7v3.6c0 25.7-20 46.6-44.7 46.6s-44.6-20.9-44.6-46.6v-10.4c0-24.3-9.4-47-26.4-64-16.3-16.2-37.7-25.1-60.4-25.1h-.4c-23.2.1-44.8 10-60.8 27.9-18.4 20.6-27.6 50-24.5 78.9 8.6 81.5 97.9 154.8 136.3 154.8 8.8 0 16-7.1 16-16s-7.2-16-16-16c-21 0-97.5-59.6-104.5-126.1-2.1-20 4.1-40.2 16.6-54.2 7-7.8 19.1-17.2 37.2-17.3h.3c14.1 0 27.6 5.6 37.8 15.8 10.9 10.9 16.9 25.5 16.9 41.3v10.4c0 43.3 34.4 78.6 76.6 78.6s76.7-35.3 76.7-78.6v-3.6c-.2-116.5-85.5-213.4-194.4-220.6z"}),(0,o.jsx)("path",{d:"m364.9 446.7c-41.9 0-95.2-56.3-95.2-119.7 0-8.8-7.2-16-16-16s-16 7.2-16 16c0 81.7 69.9 151.7 127.2 151.7 8.8 0 16-7.2 16-16s-7.2-16-16-16z"})]})}};var g=n(97991),p=n(65276);const m=()=>{const{sticky:{icon:e,iconCustom:t,iconCustomRetina:n,animationsEnabled:i,hoverIconCustom:r,hoverIconCustomRetina:m},texts:{stickyChange:v,stickyHistory:h,stickyRevoke:f,stickyRevokeSuccessMessage:b},openBanner:x,openHistory:C,revokeConsent:y,previewStickyMenuOpenState:j=!1}=(0,a.Y)(),{bubble:k,bubbleActive:S,bubbleMounted:w,menu:E,specify:O,className:I,screenReaderOnlyClass:M}=(0,l.y)().extend(...d);O(I);const[P,D]=(0,s.useState)(!1),[T,A]=(0,s.useState)(!1),[L,N]=(0,s.useState)(!1),[B,$]=(0,s.useState)(!1),z=(0,s.useRef)(),F=P||j,R=n&&!(null==t?void 0:t.endsWith(".svg"))&&window.devicePixelRatio>1?n:t,G=r&&!(null==r?void 0:r.endsWith(".svg"))&&window.devicePixelRatio>1?m:r;(0,s.useEffect)((()=>{j&&!L&&N(!0)}),[L,j]);const U=(0,s.useRef)(!1);return(0,s.useEffect)((()=>{U.current=!0}),[]),(0,o.jsxs)("div",{id:I,ref:e=>(0,p.P)().then((()=>null==e?void 0:e.classList.add(w))),className:`${F?S:""}`,children:[(0,o.jsx)("a",{href:"#",className:M,onFocus:e=>{N(!0),e.target.style.display="none",(0,p.P)().then((()=>z.current.focus()))}}),(0,o.jsx)("div",{className:k,onClick:()=>{D(!P),N(!0)},onMouseEnter:()=>A(!0),onMouseLeave:()=>A(!1),children:"custom"===e&&R&&!F?(0,o.jsx)("img",{"aria-hidden":!0,alt:"icon",src:T&&G||R}):(0,o.jsx)(u,{type:F?"close":e})}),(0,o.jsx)(c.N,{animationIn:"fadeInUp",animationInDuration:i?300:0,animationOut:"fadeOutDown",animationOutDuration:i?300:0,isVisible:F,className:E,style:{display:L||j?void 0:"none"},children:L&&(0,o.jsxs)("ul",{children:[!!h&&(0,o.jsx)("li",{children:(0,o.jsx)("a",{href:"#b",onClick:e=>{C(e),D(!1)},children:h})}),!!f&&(0,o.jsx)("li",{children:(0,o.jsxs)("a",{href:"#a",ref:z,onClick:e=>{y(b,e),$(!0)},children:[f,B&&(0,o.jsxs)(s.Fragment,{children:[" ",(0,o.jsx)(g.t,{})]})]})}),!!v&&(0,o.jsx)("li",{children:(0,o.jsx)("a",{href:"#c",onClick:e=>{x(e),D(!1)},children:v})})]})})]})},v=()=>{{const{visible:e,sticky:{animationsEnabled:t}}=(0,a.Y)(),{className:n}=(0,r.o)(),u=(0,l.y)(),{stickyBar:g}=u.extend(...d),p=(0,s.useRef)(!1);return(0,s.useEffect)((()=>{p.current=!0}),[e]),(0,o.jsx)(i.Z,{renderInContainer:document.body,children:(0,o.jsx)(c.N,{animationIn:"fadeIn",animationInDuration:p.current&&t?300:0,animationOut:"fadeOut",animationOutDuration:t?300:0,isVisible:!e,className:`${n} ${u.className} ${g}`,children:(0,o.jsx)(m,{})})})}}},32250:(e,t,n)=>{n.r(t),n.d(t,{BannerTcfGroupList:()=>T});var o=n(3713),s=n(41594),i=n(36021),a=n(51282),r=n(7835),c=n(57899),l=n(69527);const d=e=>{let{legend:t,active:n,onChange:s,items:i}=e;const{ButtonGroup:a,buttonGroupItem:d,screenReaderOnlyClass:u,Label:g}=(0,c.o)().extend(...r.I),p=(0,l.p)(),m=e=>{const{value:t}=e.target;s(t)};return(0,o.jsxs)(a,{children:[(0,o.jsx)("legend",{className:u,children:t}),i.map((e=>{let{key:t,value:s}=e;return(0,o.jsxs)(g,{children:[(0,o.jsx)("input",{name:p,type:"radio",value:t,checked:n===t,className:d,"aria-label":s,onChange:m}),(0,o.jsx)("span",{"aria-hidden":!0,children:s})]},t)}))]})};var u=n(97991),g=n(2406),p=n(40062),m=n(94665);const v=()=>{const e=(0,i.Y)(),{tcfFilterBy:t,i18n:{tcf:{vendors:n,filterNoVendors:s}}}=e,a=(0,p.E)(t),r=a.length>0;return(0,o.jsxs)(m.Y,{headline:n,children:[a.map((e=>{let{id:t}=e;return(0,o.jsx)(g.i$,{id:t},t)})),!r&&s]})};var h=n(9923),f=n(24265),b=n(39927),x=n(30766),C=n(59133),y=n(44342),j=n(85155),k=n(70984),S=n(61921),w=n(87711);const E=e=>{let{declaration:t,id:n}=e;const{Link:a,Cookie:c}=(0,f.y)().extend(...r.I).extend(...k.C),[l,d]=(0,s.useState)(!1),u=(0,b.V)(),{tcf:{gvl:p,model:m},tcfFilterBy:v,group:{descriptionFontSize:E},activeAction:O,i18n:{purpose:I,tcf:{showMore:M,hideMore:P,example:D,vendors:T,vendorsCount:A,dataRetentionPeriod:L}},designVersion:N}=(0,i.Y)(),{[t]:{[n.toString()]:B}}=p,{name:$,description:z,illustrations:F}=B,R=["specialPurposes","features","dataCategories"].indexOf(t)>-1,G="history"===O||R,U=R?void 0:m["specialFeatures"===t?"specialFeatureOptins":"legInt"===v?"purposeLegitimateInterests":"purposeConsents"],W=R||!!(null==U?void 0:U.has(n)),[Y,V]=(0,s.useState)(W);(0,s.useEffect)((()=>{V(W)}),[W]);const H=(0,s.useCallback)((e=>{try{U[e?"set":"unset"](n),V(e)}catch(e){}}),[n,U,V]),_=(0,s.useMemo)((()=>(0,h.L)(p,m,n,t,"legInt"===v,!0)),[p,m,n,t,v]);return(0,o.jsxs)(c,{children:[(0,o.jsxs)(x.S,{hideCheckbox:-1===["purposes","specialFeatures"].indexOf(t),isChecked:Y,isDisabled:G,fontSize:E,onToggle:H,after:(0,o.jsx)(C.X,{onToggle:d,showMore:M,hideMore:P}),children:[(0,o.jsx)("strong",{children:$}),N>6&&(0,o.jsxs)(s.Fragment,{children:[" (",(0,y.B)(_.length,...A),")"]})]}),l&&(0,o.jsxs)(s.Fragment,{children:[(0,o.jsx)(j.E,{label:I,value:(0,S.g)(z),children:(null==F?void 0:F.length)>0&&F.map(((e,t)=>(0,o.jsx)(j.E,{label:`${D} #${t+1}`,value:e},e)))}),(0,o.jsx)(j.E,{label:T,value:(0,w.i)(_.map((e=>{let{id:s,name:i,urls:r,dataRetention:c}=e;return(0,o.jsxs)(a,{href:(null==r?void 0:r[0].privacy)||"about:blank",target:"_blank",rel:"noreferrer",children:[i,["purposes","specialPurposes"].indexOf(t)>-1&&c?` (${L}: ${u((0,g.kd)(c,n,!1),"d")})`:""]},s)})),", ")})]})]})};var O=n(5998);const I=e=>{let{declaration:t}=e;const n=(0,i.Y)(),{i18n:{tcf:{declarations:{[t]:{title:a,desc:r}}}}}=n,c=function(e){const t=(0,i.Y)(),{tcf:{gvl:n,model:o},tcfFilterBy:a}=t,{[e]:r}=n;return(0,s.useMemo)((()=>(0,O.i)(e,n,o,a,!0)),[r,n,o,e,a])}(t);return c.length>0?(0,o.jsxs)(m.Y,{headline:a,children:[r,c.map((e=>{let{id:n}=e;return(0,o.jsx)(E,{declaration:t,id:n},n)}))]}):null};var M=n(72253),P=n(84948);const D=["purposes","specialPurposes","features","specialFeatures","dataCategories"],T=()=>{const e=(0,i.Y)(),{tcfFilterBy:t,suspense:n,i18n:{legitimateInterest:r,consent:c,tcf:{filterText:l,standard:g,standardDesc:p}},set:h}=e;return(0,o.jsxs)(s.Fragment,{children:[(0,o.jsxs)(m.Y,{headline:g,style:a.r,borderless:!0,children:[p,(0,o.jsxs)("div",{style:a.r,children:[(0,o.jsx)("span",{"aria-hidden":!0,children:l})," ",(0,o.jsx)(d,{legend:l,active:t,onChange:e=>h({tcfFilterBy:e}),items:[{key:"legInt",value:r},{key:"consent",value:c}]})]})]}),(0,o.jsx)(P.k,{promise:n.lazyLoadedDataForSecondView,suspenseProbs:{fallback:(0,o.jsx)(u.t,{})},children:(0,o.jsxs)(M._,{children:[(0,o.jsx)(v,{}),D.map((e=>(0,o.jsx)(I,{declaration:e},e)))]})})]})}},45905:(e,t,n)=>{n.d(t,{Y:()=>c});var o=n(3713),s=n(30766),i=n(24265),a=n(19003),r=n(70984);const c=e=>{let{type:t,isDisabled:n,isBold:c}=e;const{Cookie:l}=(0,i.y)().extend(...r.C),{activeAction:d,gcmConsent:u,updateGcmConsentTypeChecked:g,group:{descriptionFontSize:p},i18n:{gcm:{purposes:{[t]:m}}}}=(0,a.b)();return(0,o.jsx)(l,{children:(0,o.jsx)(s.S,{isChecked:u.indexOf(t)>-1,isDisabled:n||"history"===d,fontSize:p,onToggle:e=>g(t,e),children:(0,o.jsx)("span",{style:{fontWeight:c?"bold":void 0},children:m})})})}},37500:(e,t,n)=>{n.r(t),n.d(t,{Cookie:()=>l});var o=n(3713),s=n(19003),i=n(30766),a=n(29403),r=n(57899),c=n(70984);const l=e=>{let{cookie:t,checked:n,disabled:l,onToggle:d,propertyListProps:u={}}=e;const{Cookie:g}=(0,r.o)().extend(...c.C),{name:p}=t,{group:{descriptionFontSize:m}}=(0,s.b)();return(0,o.jsxs)(g,{children:[(0,o.jsx)(i.S,{isChecked:n,isDisabled:l,fontSize:m,onToggle:d,children:(0,o.jsx)("strong",{children:p})}),(0,o.jsx)(a.y,{cookie:t,...u,isDisabled:!n})]})}},29403:(e,t,n)=>{n.d(t,{G:()=>v,y:()=>m});var o=n(3713),s=n(41594),i=n(85155),a=n(19003),r=n(39927),c=n(88758),l=n(94975),d=n(52372),u=n(61921),g=n(45905),p=n(54852);const m=e=>{let{cookie:{purpose:t,isProviderCurrentWebsite:n,provider:m,providerContact:v={},providerPrivacyPolicyUrl:h,providerLegalNoticeUrl:f,legalBasis:b,ePrivacyUSA:x,dataProcessingInCountries:C,dataProcessingInCountriesSpecialTreatments:y,isEmbeddingOnlyExternalResources:j,technicalDefinitions:k,codeDynamics:S,googleConsentModeConsentTypes:w},isEssentialGroup:E,isDisabled:O}=e;const{i18n:I,isEPrivacyUSA:M,isDataProcessingInUnsafeCountries:P,iso3166OneAlpha2:D,dataProcessingInUnsafeCountriesSafeCountries:T,designVersion:A,websiteOperator:L,isGcm:N}=(0,a.b)(),B=(0,r.V)(),$={http:{name:"HTTP Cookie",abbr:"HTTP",backgroundColor:"black"},local:{name:"Local Storage",abbr:"Local",backgroundColor:"#b3983c"},session:{name:"Session Storage",abbr:"Session",backgroundColor:"#3c99b3"},indexedDb:{name:"IndexedDB",abbr:"I-DB",backgroundColor:"#4ab33c"}},z=(0,s.useMemo)((()=>P?(0,p.z)({dataProcessingInCountries:C,safeCountries:T,specialTreatments:y.filter((e=>-1===[d.ak.StandardContractualClauses].indexOf(e))),designVersion:A}).map((e=>D[e]||e)):[]),[P,T,y,C,D,A]),{legalNotice:F,privacyPolicy:R,contactForm:G}=(0,c.s)(),U=(0,s.useMemo)((()=>{if(n&&L){const{address:e,country:t,contactEmail:n,contactPhone:o}=L;return{provider:[e,D[t]||t].filter(Boolean).join(", "),contact:{email:n,phone:o,link:G},legalNoticeUrl:!1===F?"":F.url,privacyPolicyUrl:!1===R?"":R.url}}return{provider:m,contact:v,privacyPolicyUrl:h,legalNoticeUrl:f}}),[n,m,v,h,f,L,F,R,G]),W=(0,s.useMemo)((()=>Object.values(U.contact).filter(Boolean).length>0),[U.contact]);return(0,o.jsxs)(s.Fragment,{children:[!!t&&(0,o.jsx)(i.E,{label:I.purpose,value:(0,u.g)(t)}),(0,o.jsx)(i.E,{label:I.legalBasis,value:"legal-requirement"===b?I.legalRequirement:"legitimate-interest"===b||E?I.legitimateInterest:I.consent}),N&&w.length>0&&(0,o.jsx)(i.E,{label:I.gcm.dataProcessingInService,printValueAs:"empty",children:(0,o.jsx)("div",{style:{display:"inline-block"},children:(0,o.jsx)(i.E,{printValueAs:"empty",children:w.map((e=>(0,o.jsx)(g.Y,{type:e,isDisabled:O},e)))})})}),(0,o.jsx)(i.E,{label:I.provider,value:U.provider,children:W&&(0,o.jsxs)(s.Fragment,{children:[(0,o.jsx)(i.E,{label:I.providerContactPhone,value:U.contact.phone,printValueAs:"phone"}),(0,o.jsx)(i.E,{label:I.providerContactEmail,value:U.contact.email,printValueAs:"mail"}),(0,o.jsx)(i.E,{label:I.providerContactLink,value:U.contact.link})]})}),(0,o.jsx)(i.E,{label:I.providerPrivacyPolicyUrl,value:U.privacyPolicyUrl}),(0,o.jsx)(i.E,{label:I.providerLegalNoticeUrl,value:U.legalNoticeUrl}),!!M&&(0,o.jsx)(i.E,{label:I.ePrivacyUSA,value:x,printValueAs:"boolean"}),z.length>0&&(0,o.jsx)(i.E,{label:I.dataProcessingInUnsafeCountries,value:z.join(", ")}),A>4&&y.indexOf(d.ak.StandardContractualClauses)>-1&&(0,o.jsx)(i.E,{label:I.appropriateSafeguard,value:I.standardContractualClauses}),!j&&k.map((e=>{let{type:t,name:n,host:s,duration:a,durationUnit:r,isSessionDuration:c,purpose:d}=e;return(0,o.jsxs)(i.E,{label:I.technicalCookieDefinition,monospace:!0,value:(0,l.t)(n,S),children:[(0,o.jsx)(i.E,{label:I.type,value:$[t].name}),(0,o.jsx)(i.E,{label:I.purpose,value:d}),!!s&&(0,o.jsx)(i.E,{label:I.host,value:s,monospace:!0}),(0,o.jsx)(i.E,{label:I.duration,value:["local","indexedDb"].indexOf(t)>-1?I.noExpiration:c||"session"===t?"Session":B(a,r)})]},`${t}-${n}-${s}`)}))]})};function v(){return{http:{name:"HTTP Cookie",abbr:"HTTP",backgroundColor:"black"},local:{name:"Local Storage",abbr:"Local",backgroundColor:"#b3983c"},session:{name:"Session Storage",abbr:"Session",backgroundColor:"#3c99b3"},indexedDb:{name:"IndexedDB",abbr:"I-DB",backgroundColor:"#4ab33c"}}}},72253:(e,t,n)=>{n.d(t,{_:()=>a});var o=n(3713),s=n(70984),i=n(57899);const a=e=>{let{children:t}=e;const{GroupList:n}=(0,i.o)().extend(...s.C);return(0,o.jsx)(n,{children:t})}},84948:(e,t,n)=>{n.d(t,{k:()=>r});var o=n(3713),s=n(41594),i=n(51453);const a=e=>{let{children:t}=e;return(0,o.jsx)(s.Fragment,{children:t})},r=e=>{let{promise:t,children:n,suspenseProbs:r}=e;const c=(0,s.useMemo)((()=>(0,i.g)((t||Promise.resolve()).then((()=>a)),void 0,r)),[t]);return(0,o.jsx)(c,{children:n})}},68015:(e,t,n)=>{n.d(t,{C:()=>i});var o=n(92175),s=n(77068);function i(e){var t;return(0,o.g)(e)&&!(0,s.j)(e)?null==(t=(new DOMParser).parseFromString(`<a href="${e}"></a>`,"text/html").querySelector("a"))?void 0:t.href:(new DOMParser).parseFromString(e,"text/html").documentElement.textContent}},77068:(e,t,n)=>{function o(e){return/^\.?(([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9])\.)*([A-Za-z0-9]|[A-Za-z0-9][A-Za-z0-9-]*[A-Za-z0-9])$/gm.test(e)}n.d(t,{j:()=>o})},65042:(e,t,n)=>{function o(e,t){return e.replace(new RegExp(`[.\\\\+*?\\[\\^\\]$(){}=!<>|:\\${t||""}-]`,"g"),"\\$&")}n.d(t,{N:()=>o})},61921:(e,t,n)=>{n.d(t,{g:()=>i});var o=n(41594);const s=/(\r\n|\r|\n|<br[ ]?\/>)/g,i=e=>"string"==typeof e?e.split(s).map(((e,t)=>e.match(s)?(0,o.createElement)("br",{key:t}):e)):e},23477:(e,t,n)=>{n.d(t,{G:()=>a});const o=()=>{let e;return[!1,new Promise((t=>e=t)),e]},s={loading:o(),complete:o(),interactive:o()},i=101==n.j?["readystatechange","rocket-readystatechange","DOMContentLoaded","rocket-DOMContentLoaded","rocket-allScriptsLoaded"]:null,a=(e,t)=>(void 0===t&&(t="complete"),new Promise((n=>{let o=!1;const a=()=>{(()=>{const{readyState:e}=document,[t,,n]=s[e];if(!t){s[e][0]=!0,n();const[t,,o]=s.interactive;"complete"!==e||t||(s.interactive[0]=!0,o())}})(),!o&&s[t][0]&&(o=!0,null==e||e(),setTimeout(n,0))};a();for(const e of i)document.addEventListener(e,a);s[t][1].then(a)})))}}]);
//# sourceMappingURL=https://sourcemap.devowl.io/real-cookie-banner/4.7.15/974773bb229687cbbc4fb77cbe726909/banner-lazy.pro.js.map
