"use strict";(self.webpackChunkrealCookieBanner_=self.webpackChunkrealCookieBanner_||[]).push([[4],{7218:(e,n,t)=>{t.r(n),t.d(n,{apply:()=>b});var o=t(3477),i=t(5276),a=t(5385),r=t(5585),s=t(5002);function l(e){let n,{decisionCookieName:t,setCookiesViaManager:o,isGcm:i,groups:a,type:l}=e;const{useManager:c}=(0,s.XR)(o,{isGcm:i,presetId:""}),d=a.find((e=>{let{isEssential:n}=e;return n})),u={[d.id]:d.items.map((e=>{let{id:n}=e;return n}))};if("consent"===l){const e=(0,r.y)(t);!1!==e?n=e.consent:(console.warn("Something went wrong while reading the cookie, fallback to essentials only..."),n=u)}return"essentials"===l&&(n=u),{isManagerActive:"none"!==c,selectedGroups:n,iterateServices:async function(e){for(const r of a)for(const a of r.items){var t;const c="all"===l||(null==(t=n[r.id])?void 0:t.indexOf(a.id))>-1,d=(0,s.XR)(o,{presetId:a.presetId,isGcm:i});await e(r,a,c,d)}}}}var c=t(7849),d=t(1678),u=t(7177),p=t(4975),h=t(2450);var g=t(2315),v=t(4008),m=t(237);async function b(e){const n=[];await l(e).iterateServices((async(e,t,o)=>{o&&n.push({group:e,service:t})})),document.dispatchEvent(new CustomEvent(g.r,{detail:{services:n}})),await(0,o.G)();const{dataLayer:t,isManagerOptOut:r,services:s,ready:b}=await async function(e){const n=[],{isManagerActive:t,iterateServices:o}=l(e),{skipOptIn:i}=e;let r,s=!1;const d=[];return await o((async(e,l,u,p)=>{let{getDataLayer:h,serviceIsManager:g}=p;const{codeDynamics:v,codeOptIn:m,executeCodeOptInWhenNoTagManagerConsentIsGiven:b}=l,f=t&&g;if(u){const s=t&&b,u="function"==typeof i&&i(l);if(f){const e={},n={},t={};await o(((o,i,a,r)=>{let{serviceIsManager:s}=r;if(!s){const{tagManagerOptInEventName:o,tagManagerOptOutEventName:r,uniqueName:s}=i;o&&(n[o]=a),r&&(t[r]=!a),s&&(e[s]=a)}})),Object.assign(e,n),Object.assign(e,t),r=h(),r.push({realCookieBannerConsents:e,realCookieBannerOptInEvents:n,realCookieBannerOptOutEvents:t})}s||u||!m||d.push((0,a.l)(m,v));const p={group:e,service:l};document.dispatchEvent(new CustomEvent(c.D,{detail:p})),n.push(p)}else f&&(s=!0)})),{isManagerOptOut:s,dataLayer:r,services:n,ready:Promise.all(d)}}(e),{ready:f}=await async function(e,n,t){const o=[],{isManagerActive:i,iterateServices:r}=l(e);return n?(r(((e,t,o,i)=>{let{tagManagerOptInEventName:a}=t,{features:r}=i;o&&a&&r.events&&n.push({event:a})})),setTimeout((()=>r(((e,t,o,i)=>{let{tagManagerOptOutEventName:a}=t,{features:r}=i;!o&&a&&r.events&&n.push({event:a})}))),1e3)):i&&t&&await r((async(e,n,t)=>{let{codeDynamics:i,codeOptIn:r,executeCodeOptInWhenNoTagManagerConsentIsGiven:s}=n;t&&s&&o.push((0,a.l)(r,i))})),{ready:Promise.all(o)}}(e,t,r),y=Promise.all([b,f]);await(0,i.P)(),document.dispatchEvent(new CustomEvent(v.T,{detail:{services:s,ready:y}}));const{deleteHttpCookies:C,services:Y,ready:k}=await async function(e,n){const t=[],{isManagerActive:o,iterateServices:i}=l(e),r=[],s=[];return await i((async(e,i,l)=>{const{id:c,codeDynamics:g,codeOptOut:v,deleteTechnicalDefinitionsAfterOptOut:m,isEmbeddingOnlyExternalResources:b,technicalDefinitions:f,executeCodeOptOutWhenNoTagManagerConsentIsGiven:y}=i;if(!l){const l=o&&y;(l&&n||!l)&&r.push((0,a.l)(v,g)),m&&!b&&(function(e,n){for(const{type:t,name:o}of e){const e=(0,p.t)(o,n);if("*"===e)continue;const i=new RegExp((0,h.Z)(e),"g");switch(t){case"http":for(const e of Object.keys(u.A.get()))i.test(e)&&u.A.remove(e);break;case"local":case"session":try{const e="local"===t?window.localStorage:window.sessionStorage;if(e)for(const n of Object.keys(e))if(i.test(n)){try{e.setItem(n,null)}catch(e){}let t=0;for(;e.getItem(n)&&t<100;)t++,e.removeItem(n)}}catch(e){continue}}}}(f,g),f.some((e=>{let{type:n}=e;return"http"===n}))&&s.push(c));const C={group:e,service:i};document.dispatchEvent(new CustomEvent(d.G,{detail:C})),t.push(C)}})),{services:t,ready:Promise.all(r),deleteHttpCookies:s}}(e,r);document.dispatchEvent(new CustomEvent(m.a,{detail:{services:Y,deleteHttpCookies:C,ready:Promise.all([y,k])}}))}},4467:(e,n,t)=>{async function o(e,n){e.createdClientTime=(new Date).toISOString();const o=n.getConsentQueue();o.push(e),n.setConsentQueue(o);try{await n.getOption("persistConsent")(e,!0),n.setConsentQueue(n.getConsentQueue().filter((n=>{let{createdClientTime:t}=n;return e.createdClientTime!==t})))}catch(o){const{groups:i,decisionCookieName:a,tcfCookieName:r,gcmCookieName:s,failedConsentDocumentationHandling:l,revisionHash:c}=n.getOptions(),d="optimistic"===l,{decision:u,createdClientTime:p,tcfString:h,gcmConsent:g}=e,v={consent:d?"all"===u?i.reduce(((e,n)=>(e[n.id]=n.items.map((e=>{let{id:n}=e;return n})),e)),{}):"essentials"===u?(0,t(5765).w)(i,!1):u:(0,t(5765).w)(i,!1),previousUuids:[],revision:c,uuid:p,created:new Date(p)};localStorage.setItem(a,JSON.stringify(v)),h&&localStorage.setItem(r,d?h:""),g&&localStorage.setItem(s,d?JSON.stringify(g):"[]")}}t.d(n,{persistWithQueueFallback:()=>o})},2697:(e,n,t)=>{function o(e,n){void 0===n&&(n=!1);const{decisionCookieName:i,tcfCookieName:a,gcmCookieName:r}=e.getOptions(),s=()=>{localStorage.removeItem(i),localStorage.removeItem(a),localStorage.removeItem(r),localStorage.removeItem(e.getConsentQueueName())},l=document.querySelector('a[href*="rcb-clear-current-cookie=1"]');if(null==l||l.addEventListener("click",s),e.isConsentQueueLocked()){const n=n=>{n.key!==e.getConsentQueueName(!0)||n.newValue||o(e)};return window.addEventListener("storage",n),()=>{window.removeEventListener("storage",n),null==l||l.removeEventListener("click",s)}}{let o,a=0;const r=async()=>{e.isConsentQueueLocked(!0);const n=e.getConsentQueue();let l=15e3;if(n.length>0){a++;try{const o=n.shift(),r=0===n.length||!t(7177).A.get(i),c=await e.getOption("persistConsent")(o,r),d=t(7177).A.get(i);d&&-1===d.indexOf(c)&&t(7177).A.set(i,d.replace(/^(.*?:.*?):/gm,`$1,${c}:`)),e.setConsentQueue(n),0===n.length&&s(),a=0,l=1500}catch(e){l=15*a*1e3}}o=setTimeout(r,l)};return e.isConsentQueueLocked(!0),o=setTimeout(r,n?0:15e3),()=>{e.isConsentQueueLocked(!1),clearTimeout(o),null==l||l.removeEventListener("click",s)}}}t.d(n,{retryPersistFromQueue:()=>o})},2835:(e,n,t)=>{t.r(n),t.d(n,{BannerHistorySelect:()=>o});const o=()=>{const e=(0,t(6021).Y)(),{Select:n}=(0,t(4265).y)().extend(...t(7835).I),{set:o,consent:i,groups:a,tcf:r,isGcm:s,gcmConsent:l,lazyLoadedDataForSecondView:c,activeAction:d,history:u,fetchHistory:p,visible:h,i18n:{historyLabel:g,historyItemLoadError:v,historySelectNone:m}}=e,[b,f]=(0,t(7936).J0)(),[y,C]=(0,t(7936).J0)({consent:i,groups:a,tcf:r,gcmConsent:l,lazyLoadedDataForSecondView:c}),Y=e=>{let{tcf:n,gcmConsent:i=[],...a}=e;const r={isTcf:!!n,tcf:null,gcmConsent:[]};n&&Object.assign(r,{tcf:"gvl"in n?n:(0,t(4592).T)(n)}),s&&Object.assign(r,{gcmConsent:i}),o({...a,...r})};(0,t(7936).vJ)((()=>{const e={consent:[],groups:[],gcmConsent:[],lazyLoadedDataForSecondView:void 0};if(b){const{context:n}=b;Y(n||e)}else Y(e)}),[b]);const k=(0,t(7936).li)(!1);(0,t(7936).vJ)((()=>{c&&!k.current&&"history"===d&&h&&(k.current=!0,async function(){const e=await p();C({consent:i,groups:a,tcf:r,gcmConsent:l,lazyLoadedDataForSecondView:c}),o({history:e}),f(e[0])}())}),[c,d,h]),(0,t(7936).vJ)((()=>{h||(k.current=!1)}),[h]),(0,t(7936).vJ)((()=>()=>Y(y)),[]);const S=null==b?void 0:b.uuid;return(0,t(6425).FD)(t(7936).FK,{children:[g," ",(0,t(6425).Y)(n,{disabled:!(null==u?void 0:u.length),value:(null==b?void 0:b.id)||-1,onChange:e=>{const n=+e.target.value;for(const e of u){const{id:t}=e;if(t===n){f(e);break}}},children:(null==u?void 0:u.length)>0?u.map((e=>{let{id:n,isDoNotTrack:o,isUnblock:i,isForwarded:a,created:r}=e;return(0,t(6425).FD)("option",{value:n,children:[new Date(r).toLocaleString(document.documentElement.lang),o?" (Do Not Track)":"",i?" (Content Blocker)":"",a?" (Consent Forwarding)":""]},n)})):(0,t(6425).Y)("option",{value:-1,children:m})}),(0,t(6425).FD)("div",{style:{opacity:.5,marginTop:5},children:["UUID: ",S||"-"]}),!(null==b?void 0:b.context)&&(0,t(6425).Y)("div",{style:{fontWeight:"bold",marginTop:5},children:v})]})}},9040:(e,n,t)=>{t.r(n),t.d(n,{BannerGcmGroupList:()=>o});const o=()=>{const e=(0,t(6021).Y)(),{i18n:{purposes:n,gcm:{standard:o,standardDesc:i}}}=e,a=(0,t(2273).R)(),r=(0,t(7944).h)(a);return(0,t(6425).FD)(t(7936).FK,{children:[(0,t(6425).Y)(t(4665).Y,{headline:o,style:t(1282).r,borderless:!0,children:i}),(0,t(6425).Y)(t(2253)._,{children:(0,t(6425).Y)(t(4665).Y,{headline:n,children:r.map((e=>(0,t(6425).Y)(t(5905).Y,{type:e,isBold:!0},e)))})})]})}},118:(e,n,t)=>{t.r(n),t.d(n,{BannerGroupList:()=>g});var o=t(6425),i=t(6021),a=t(2334),r=t(766),s=t(9133),l=t(7936),c=t(9345);const d=e=>{let{group:{id:n,isEssential:t},cookie:a}=e;const{id:r}=a,s=(0,i.Y)(),{consent:d,activeAction:u}=s,p=t||"history"===u,h=t||((null==d?void 0:d[n])||[]).some((e=>e===r)),g=(0,l.hb)((e=>s.updateCookieChecked(n,r,e)),[s,n,r]);return(0,o.Y)(c.Cookie,{cookie:a,propertyListProps:{isEssentialGroup:t},checked:h,disabled:p,onToggle:g})};var u=t(4665);const p=e=>{let{group:n}=e;const t=(0,i.Y)(),{name:l,description:c,items:p}=n,{group:{headlineFontSize:h},individualTexts:{headline:g,showMore:v,hideMore:m}}=t,b=(0,a.C)(n);return(0,o.FD)(u.Y,{legend:`${g}: ${l}`,headline:(0,o.FD)(r.S,{...b,fontSize:h,children:[l," (",p.length,")"]}),children:[(0,o.Y)("span",{children:c}),!!p&&(0,o.Y)(s.X,{showMore:v,hideMore:m,children:p.map((e=>(0,o.Y)(d,{group:n,cookie:e},e.id)))})]})};var h=t(2253);const g=()=>{const{groups:e}=(0,i.Y)(),n=e.filter((e=>{let{items:n}=e;return n.length}));return(0,o.Y)(h._,{children:n.map((e=>(0,o.Y)(p,{group:e},e.id)))})}},511:(e,n,t)=>{t.r(n),t.d(n,{BannerSticky:()=>v});var o=t(6425),i=t(7936),a=t(7337),r=t(6021),s=t(7899),l=t(3533),c=t(4265);const d=[Symbol("extendBannerBubbleStylesheet"),(e,n)=>{let{rule:t,boolSwitch:o,boolIf:i,className:a}=e,{boolLargeOrMobile:r,sticky:{animationsEnabled:s,alignment:l,bubbleBorderRadius:c,bubbleBg:d,bubbleMargin:u,bubblePadding:p,bubbleBorderWidth:h,bubbleBorderColor:g,iconColor:v,iconSize:m,boxShadowEnabled:b,boxShadowColor:f,boxShadowOffsetX:y,boxShadowOffsetY:C,boxShadowBlurRadius:Y,boxShadowSpreadRadius:k,boxShadowColorAlpha:S,bubbleHoverBg:E,bubbleHoverBorderColor:D,hoverIconColor:w,menuBorderRadius:I,menuFontSize:F,menuItemSpacing:x,menuItemPadding:O}}=n;const P=999999,[,B]=t({classNames:"sticky",zIndex:P,pointerEvents:"none !important",position:"fixed",bottom:"0px",left:"0px",right:"0px",display:"flex",justifyContent:o([[l("is-left"),"flex-start"],[l("is-center"),"center"],[l("is-right"),"flex-end"]]),pseudos:{">div":{position:"relative"}}}),$=r(m,i),N={cursor:"pointer",boxShadow:i(b,`${y()} ${C()} ${Y()} ${k()} rgba(${f("r")} ${f("g")} ${f("b")} / ${S()})`)},L=a(),T=a(),A=r(p,i),[,M]=t({classNames:"bubble",...N,zIndex:P,display:"block",position:"relative",borderRadius:c(),padding:A,backgroundColor:d(),pointerEvents:"all !important",margin:r(u,i),color:v(),fontSize:$,border:`${h()} solid ${g()}`,lineHeight:$,width:$,height:$,boxSizing:"content-box",overflow:"hidden",pseudos:{">svg":{width:$,height:$,verticalAlign:"initial"},">img":{width:"auto",height:$},[`:hover,:has(+div :focus-visible),<.${L} `]:{backgroundColor:`${E()} !important`,borderColor:`${D()} !important`,color:`${w()} !important`},[`<.${T} `]:{transition:"background 250ms, border 250ms, color 250ms"}}}),[,z]=t({classNames:"sticky-menu",position:"absolute",bottom:"100%",left:i(l("is-left"),r(u,i,3),i(l("is-center"),"0px")),right:i(l("is-right"),r(u,i,1)),textAlign:l("val"),width:"100vw",marginLeft:i(l("is-center"),`calc(-50vw + ${A} + ${r(u,i,1)} + ${h()} + (${$} / 2))`),pointerEvents:"none !important",zIndex:999998,pseudos:{":has(:focus-visible)":{display:"block !important",opacity:"1 !important",transform:"initial !important"},">ul,>ul>li":{all:"unset",pointerEvents:"none",display:"block"},">ul>li:not(:last-of-type)":{marginBottom:r(x,i)},">ul>li>a":{all:"unset",display:"inline-block",textDecoration:"none",backgroundColor:E(),border:`${h()} solid ${D()}`,color:w(),pointerEvents:"all",fontSize:r(F,i),transition:"margin 0.3s",borderRadius:I(),padding:r(O,i),...N},">ul>li>a:hover":{textDecoration:"underline",marginLeft:i(s,"10px")}}});return t({forceSelector:`:not(.${L})>.${z}>ul>li>a`,pointerEvents:"none !important"}),{stickyBar:B,bubble:M,bubbleActive:L,menu:z,bubbleMounted:T}}],u=e=>{let{type:n}=e;const t={version:"1.1",enableBackground:"new 0 0 512 512",viewBox:"0 0 512 512",fill:"currentColor"};switch(n){case"custom":return(0,o.Y)("svg",{...t});case"close":return(0,o.Y)("svg",{...t,enableBackground:"new 0 0 24 24",viewBox:"0 0 24 24",children:(0,o.Y)("path",{d:"m4.9902 3.9902a1.0001 1.0001 0 0 0-0.69727 1.7168l6.293 6.293-6.293 6.293a1.0001 1.0001 0 1 0 1.4141 1.4141l6.293-6.293 6.293 6.293a1.0001 1.0001 0 1 0 1.4141-1.4141l-6.293-6.293 6.293-6.293a1.0001 1.0001 0 0 0-0.72656-1.7168 1.0001 1.0001 0 0 0-0.6875 0.30273l-6.293 6.293-6.293-6.293a1.0001 1.0001 0 0 0-0.7168-0.30273z"})});case"padlock":return(0,o.FD)("svg",{...t,children:[(0,o.Y)("path",{d:"m391.5 210.8v-60.2c0-75.3-60.2-135.5-135.5-135.5s-135.5 60.2-135.5 135.5v60.2c-25.6 0-45.2 19.6-45.2 45.2v195.8c0 25.6 19.6 45.2 45.2 45.2h271.1c25.6 0 45.2-19.6 45.2-45.2v-195.8c-.1-25.6-19.7-45.2-45.3-45.2zm-240.9-60.2c0-58.7 46.7-105.4 105.4-105.4s105.4 46.7 105.4 105.4v60.2h-210.8zm256 301.2c0 9-6 15.1-15.1 15.1h-271c-9 0-15.1-6-15.1-15.1v-195.8c0-9 6-15.1 15.1-15.1h15.1 240.9 15.1c9 0 15.1 6 15.1 15.1v195.8z"}),(0,o.Y)("path",{d:"m256 284.8c-26.1 0-46.1 20-46.1 46.1 0 20 12.3 36.9 30.7 43v33.8c0 9.2 6.1 15.4 15.4 15.4s15.4-6.1 15.4-15.4v-33.8c18.4-6.1 30.7-23 30.7-43 0-26.2-20-46.1-46.1-46.1zm0 61.6c-9 0-15.1-6-15.1-15.1 0-9 6-15.1 15.1-15.1s15.1 6 15.1 15.1c0 9-6.1 15.1-15.1 15.1z"})]});case"incognito":return(0,o.FD)("svg",{...t,children:[(0,o.Y)("path",{d:"m376.3 272c-47.6 0-87.1 34.7-94.7 80.2h-50.6c-7.6-45.5-47.1-80.2-94.7-80.2-53 0-96 43-96 96s43 96 96 96c47.5 0 87-34.5 94.6-79.8h50.7c7.7 45.3 47.1 79.8 94.6 79.8 53 0 96-43 96-96s-42.9-96-95.9-96zm-240 160c-35.3 0-64-28.7-64-64s28.7-64 64-64 64 28.7 64 64-28.6 64-64 64zm240 0c-35.3 0-64-28.7-64-64s28.7-64 64-64 64 28.7 64 64-28.6 64-64 64z"}),(0,o.Y)("path",{d:"m464.3 208.2h-34.9l-24.9-124.2c-4.2-20.9-22.5-36-43.8-36h-208.9c-21 .4-38.9 15.4-43 36l-25.5 124.2h-35c-8.8 0-16 7.2-16 16s7.2 16 16 16h416c8.8 0 16-7.2 16-16 0-8.9-7.1-16-16-16zm-324.9-118c1.2-5.9 6.4-10.2 12.5-10.2h208.8c6.1 0 11.3 4.3 12.5 10.2l23.6 117.8h-281z"})]});default:return(0,o.FD)("svg",{...t,children:[(0,o.Y)("path",{d:"m85.9 98.6c47-43 107.5-66.6 170.1-66.6s123.1 23.6 170.1 66.6c3.1 2.8 6.9 4.2 10.8 4.2 4.4 0 8.7-1.7 11.8-5.2 6-6.5 5.5-16.7-1-22.6-53-48.4-121.1-75-191.7-75s-138.7 26.6-191.7 74.9c-6.5 6-7 16.1-1 22.6 5.9 6.5 16 7 22.6 1.1z"}),(0,o.Y)("path",{d:"m477.3 182.4c-50.4-75-133.1-119.8-221.3-119.8s-170.9 44.8-221.3 119.8c-4.9 7.3-3 17.3 4.4 22.2 7.3 4.9 17.3 3 22.2-4.4 44.4-66.1 117.2-105.6 194.7-105.6s150.3 39.5 194.7 105.6c3.1 4.6 8.1 7.1 13.3 7.1 3.1 0 6.2-.9 8.9-2.7 7.4-4.9 9.3-14.9 4.4-22.2z"}),(0,o.Y)("path",{d:"m140.6 339.5c0-66 51.8-119.7 115.4-119.7s115.4 53.7 115.4 119.7c0 8.8 7.2 16 16 16s16-7.2 16-16c0-83.6-66.1-151.7-147.4-151.7s-147.4 68-147.4 151.7c0 80.6 82 164.3 85.5 167.8 3.1 3.2 7.3 4.7 11.4 4.7s8.1-1.5 11.3-4.6c6.3-6.2 6.3-16.4.1-22.6-.8-.8-76.3-77.8-76.3-145.3z"}),(0,o.Y)("path",{d:"m269.8 125.7c-57-3.8-111.6 15.8-153.7 55.1-43.3 40.6-68.1 98.4-68.1 158.7 0 49.6 16.8 97.9 47.4 136.1 5.5 6.9 15.6 8 22.5 2.5s8-15.6 2.5-22.5c-26.1-32.5-40.4-73.8-40.4-116.1 0-51.5 21.2-100.8 58.1-135.3 35.6-33.2 81.6-49.8 129.7-46.6 92.1 6.1 164.3 89 164.3 188.7v3.6c0 25.7-20 46.6-44.7 46.6s-44.6-20.9-44.6-46.6v-10.4c0-24.3-9.4-47-26.4-64-16.3-16.2-37.7-25.1-60.4-25.1h-.4c-23.2.1-44.8 10-60.8 27.9-18.4 20.6-27.6 50-24.5 78.9 8.6 81.5 97.9 154.8 136.3 154.8 8.8 0 16-7.1 16-16s-7.2-16-16-16c-21 0-97.5-59.6-104.5-126.1-2.1-20 4.1-40.2 16.6-54.2 7-7.8 19.1-17.2 37.2-17.3h.3c14.1 0 27.6 5.6 37.8 15.8 10.9 10.9 16.9 25.5 16.9 41.3v10.4c0 43.3 34.4 78.6 76.6 78.6s76.7-35.3 76.7-78.6v-3.6c-.2-116.5-85.5-213.4-194.4-220.6z"}),(0,o.Y)("path",{d:"m364.9 446.7c-41.9 0-95.2-56.3-95.2-119.7 0-8.8-7.2-16-16-16s-16 7.2-16 16c0 81.7 69.9 151.7 127.2 151.7 8.8 0 16-7.2 16-16s-7.2-16-16-16z"})]})}};var p=t(7991),h=t(5276);const g=()=>{const{sticky:{icon:e,iconCustom:n,iconCustomRetina:t,animationsEnabled:a,hoverIconCustom:s,hoverIconCustomRetina:g},texts:{stickyChange:v,stickyHistory:m,stickyRevoke:b,stickyRevokeSuccessMessage:f},openBanner:y,openHistory:C,revokeConsent:Y,previewStickyMenuOpenState:k=!1}=(0,r.Y)(),{bubble:S,bubbleActive:E,bubbleMounted:D,menu:w,specify:I,className:F,screenReaderOnlyClass:x}=(0,c.y)().extend(...d);I(F);const[O,P]=(0,i.J0)(!1),[B,$]=(0,i.J0)(!1),[N,L]=(0,i.J0)(!1),[T,A]=(0,i.J0)(!1),M=(0,i.li)(),z=O||k,R=t&&!(null==n?void 0:n.endsWith(".svg"))&&window.devicePixelRatio>1?t:n,V=s&&!(null==s?void 0:s.endsWith(".svg"))&&window.devicePixelRatio>1?g:s;(0,i.vJ)((()=>{k&&!N&&L(!0)}),[N,k]);const U=(0,i.li)(!1);return(0,i.vJ)((()=>{U.current=!0}),[]),(0,o.FD)("div",{id:F,ref:e=>(0,h.P)().then((()=>null==e?void 0:e.classList.add(D))),className:`${z?E:""}`,children:[(0,o.Y)("a",{href:"#",className:x,onFocus:e=>{L(!0),e.target.style.display="none",(0,h.P)().then((()=>M.current.focus()))}}),(0,o.Y)("div",{className:S,onClick:()=>{P(!O),L(!0)},onMouseEnter:()=>$(!0),onMouseLeave:()=>$(!1),children:"custom"===e&&R&&!z?(0,o.Y)("img",{"aria-hidden":!0,alt:"icon",src:B&&V||R}):(0,o.Y)(u,{type:z?"close":e})}),(0,o.Y)(l.N,{animationIn:"fadeInUp",animationInDuration:a?300:0,animationOut:"fadeOutDown",animationOutDuration:a?300:0,isVisible:z,className:w,style:{display:N||k?void 0:"none"},children:N&&(0,o.FD)("ul",{children:[!!m&&(0,o.Y)("li",{children:(0,o.Y)("a",{href:"#b",onClick:e=>{C(e),P(!1)},children:m})}),!!b&&(0,o.Y)("li",{children:(0,o.FD)("a",{href:"#a",ref:M,onClick:e=>{Y(f,e),A(!0)},children:[b,T&&(0,o.FD)(i.FK,{children:[" ",(0,o.Y)(p.t,{})]})]})}),!!v&&(0,o.Y)("li",{children:(0,o.Y)("a",{href:"#c",onClick:e=>{y(e),P(!1)},children:v})})]})})]})},v=()=>{{const{visible:e,sticky:{animationsEnabled:n}}=(0,r.Y)(),{className:t}=(0,s.o)(),u=(0,c.y)(),{stickyBar:p}=u.extend(...d),h=(0,i.li)(!1);return(0,i.vJ)((()=>{h.current=!0}),[e]),(0,o.Y)(a.Z,{renderInContainer:document.body,children:(0,o.Y)(l.N,{animationIn:"fadeIn",animationInDuration:h.current&&n?300:0,animationOut:"fadeOut",animationOutDuration:n?300:0,isVisible:!e,className:`${t} ${u.className} ${p}`,children:(0,o.Y)(g,{})})})}}},2735:(e,n,t)=>{t.r(n),t.d(n,{BannerTcfGroupList:()=>A});var o=t(6425),i=t(7936),a=t(6021),r=t(1282),s=t(7835),l=t(7899),c=t(9527);const d=e=>{let{legend:n,active:t,onChange:i,items:a}=e;const{ButtonGroup:r,buttonGroupItem:d,screenReaderOnlyClass:u,Label:p}=(0,l.o)().extend(...s.I),h=(0,c.p)(),g=e=>{const{value:n}=e.target;i(n)};return(0,o.FD)(r,{children:[(0,o.Y)("legend",{className:u,children:n}),a.map((e=>{let{key:n,value:i}=e;return(0,o.FD)(p,{children:[(0,o.Y)("input",{name:h,type:"radio",value:n,checked:t===n,className:d,"aria-label":i,onChange:g}),(0,o.Y)("span",{"aria-hidden":!0,children:i})]},n)}))]})};var u=t(7991),p=t(2831),h=t(4265),g=t(9927),v=t(4852),m=t(766),b=t(9133),f=t(5155),y=t(984),C=t(2372);function Y(e,n,t){return e?e[t?"specialPurposes":"purposes"][`${n}`]||e.stdRetention:void 0}const k=e=>{let{id:n}=e;var t,r;const{Cookie:s}=(0,h.y)().extend(...y.C),[l,c]=(0,i.J0)(!1),d=(0,a.Y)(),u=(0,g.V)(),{isEPrivacyUSA:k,isDataProcessingInUnsafeCountries:E,dataProcessingInUnsafeCountriesSafeCountries:D,iso3166OneAlpha2:w,designVersion:I,tcfFilterBy:F,lazyLoadedDataForSecondView:x,tcf:{gvl:O,model:P,original:{vendorConfigurations:B}}}=d,{vendors:{[n]:$},purposes:N,specialPurposes:L,features:T,specialFeatures:A,dataCategories:M}=O,{name:z,["consent"===F?"purposes":"legIntPurposes"]:R,flexiblePurposes:V,specialPurposes:U,features:J,specialFeatures:G,dataDeclaration:j,usesCookies:K,cookieMaxAgeSeconds:H,cookieRefresh:Q,usesNonCookieAccess:_,dataRetention:W}=$,{ePrivacyUSA:X,dataProcessingInCountries:q,dataProcessingInCountriesSpecialTreatments:Z}=(0,i.Kr)((()=>Object.values(B).filter((e=>{let{vendorId:t}=e;return t===n}))[0]),[n]),ee=(0,i.Kr)((()=>[...R,...V.filter((e=>-1===R.indexOf(e)))].filter((e=>(0,p.n)(P,e,"legInt"===F,$)))),[n,F]),{group:{descriptionFontSize:ne},i18n:{tcf:{declarations:te,dataRetentionPeriod:oe,...ie},...ae},activeAction:re}=d,{urls:se,additionalInformation:le,deviceStorageDisclosure:ce}=(null==x||null==(t=x.tcf)?void 0:t.vendors[n])||{urls:[],additionalInformation:{},deviceStorageDisclosure:{}},de=null==le?void 0:le.legalAddress,ue=!!(null==le?void 0:le.internationalTransfers),pe=(null==le?void 0:le.transferMechanisms)||[],he=P["consent"===F?"vendorConsents":"vendorLegitimateInterests"],ge="history"===re,ve=he.has(n),[me,be]=(0,i.J0)(ve);(0,i.vJ)((()=>{be(ve)}),[ve]);const fe=(0,i.hb)((e=>{try{he[e?"set":"unset"](n),be(e)}catch(e){}}),[n,he,be]),ye=(0,i.Kr)((()=>E?(0,v.z)({dataProcessingInCountries:q,safeCountries:D,specialTreatments:Z.filter((e=>-1===[C.ak.StandardContractualClauses].indexOf(e))),designVersion:I}).map((e=>w[e]||e)):[]),[E,D,Z,q,w,I]),Ce=(0,i.Kr)((()=>[...new Set([I>4&&Z.indexOf(C.ak.StandardContractualClauses)>-1&&ae.standardContractualClauses,I>6&&ue&&pe.map((e=>{switch(e){case"SCCs":return ae.standardContractualClauses;case"Adequacy decision":return ae.adequacyDecision;case"BCRs":return ae.bindingCorporateRules;case"Other":return ae.other;default:return""}}))].flat().filter(Boolean))]),[I,Z]),{privacy:Ye,legIntClaim:ke}=(null==se?void 0:se[0])||{langId:"",privacy:"",legIntClaim:""},Se=(0,i.hb)(((e,n)=>(void 0===n&&(n=!1),e.map((e=>`${(n?L:N)[e].name}${W?` (${oe}: ${u(Y(W,e,!1),"d")})`:""}`)).join(", "))),[N,L,W]);return(0,o.FD)(s,{children:[(0,o.Y)(m.S,{isChecked:me,isDisabled:ge,fontSize:ne,onToggle:fe,after:(0,o.Y)(b.X,{onToggle:c,showMore:ie.showMore,hideMore:ie.hideMore}),children:(0,o.Y)("strong",{children:z})}),l&&(0,o.FD)(i.FK,{children:[!!de&&(0,o.Y)(f.E,{label:ae.provider,value:de.split(";").join(", ")}),(0,o.Y)(f.E,{label:ae.providerPrivacyPolicyUrl,value:Ye}),"legInt"===F&&(0,o.Y)(f.E,{label:ie.legIntClaim,value:ke}),!!k&&(0,o.Y)(f.E,{label:ae.ePrivacyUSA,value:ue?ae.yes:2===X?ae.unknown:1===X?ae.yes:ae.no}),ye.length>0&&(0,o.Y)(f.E,{label:ae.dataProcessingInUnsafeCountries,value:ye.join(", ")}),Ce.length>0&&(0,o.Y)(f.E,{label:ae.appropriateSafeguard,value:Ce.join(", ")}),ee.length>0&&(0,o.Y)(f.E,{label:te.purposes.title,value:Se(ee)}),U.length>0&&(0,o.Y)(f.E,{label:te.specialPurposes.title,value:Se(U,!0)}),J.length>0&&(0,o.Y)(f.E,{label:te.features.title,value:J.map((e=>T[e].name)).join(", ")}),G.length>0&&(0,o.Y)(f.E,{label:te.specialFeatures.title,value:G.map((e=>A[e].name)).join(", ")}),(null==j?void 0:j.length)>0&&(0,o.Y)(f.E,{label:te.dataCategories.title,value:j.map((e=>M[e].name)).join(", ")}),(0,o.Y)(f.E,{label:ae.usesCookies,value:K,printValueAs:"boolean"}),K&&(0,o.Y)(f.E,{label:ae.duration,value:H<=0?"Session":u(H,"s")}),(0,o.Y)(f.E,{label:ae.cookieRefresh,value:Q,printValueAs:"boolean"}),(0,o.Y)(f.E,{label:ae.usesNonCookieAccess,value:_,printValueAs:"boolean"}),null==ce||null==(r=ce.disclosures)?void 0:r.map((e=>{let{type:n,identifier:t,domain:i,domains:a,maxAgeSeconds:r,cookieRefresh:s,purposes:l}=e;return(0,o.FD)(f.E,{label:ae.technicalCookieDefinition,value:(0,o.Y)("span",{style:{fontFamily:"monospace"},children:t}),children:[(0,o.Y)(f.E,{label:ae.type,value:S(n)}),!!a&&(0,o.Y)(f.E,{label:ae.host,value:(0,o.Y)("span",{style:{fontFamily:"monospace"},children:a.join(",")})})||!!i&&(0,o.Y)(f.E,{label:ae.host,value:(0,o.Y)("span",{style:{fontFamily:"monospace"},children:i})}),null!==r&&(0,o.Y)(f.E,{label:ae.duration,value:r<=0?"Session":u(r,"s")}),(0,o.Y)(f.E,{label:ae.cookieRefresh,value:s,printValueAs:"boolean"}),!!(null==l?void 0:l.length)&&(0,o.Y)(f.E,{label:te.purposes.title,value:l.map((e=>{var n;return null==(n=N[e])?void 0:n.name})).filter(Boolean).join(", ")})]},`${n}-${t}-${z}`)}))]})]})};function S(e){switch(e){case"cookie":return"HTTP Cookie";case"web":return"LocalStorage, Session Storage, IndexDB";case"app":return"App";default:return e}}var E=t(62),D=t(4665);const w=()=>{const e=(0,a.Y)(),{tcfFilterBy:n,i18n:{tcf:{vendors:t,filterNoVendors:i}}}=e,r=(0,E.E)(n),s=r.length>0;return(0,o.FD)(D.Y,{headline:t,children:[r.map((e=>{let{id:n}=e;return(0,o.Y)(k,{id:n},n)})),!s&&i]})};var I=t(9923),F=t(4342),x=t(1921),O=t(7711);const P=e=>{let{declaration:n,id:t}=e;const{Link:r,Cookie:l}=(0,h.y)().extend(...s.I).extend(...y.C),[c,d]=(0,i.J0)(!1),u=(0,g.V)(),{tcf:{gvl:p,model:v},tcfFilterBy:C,group:{descriptionFontSize:k},activeAction:S,i18n:{purpose:E,tcf:{showMore:D,hideMore:w,example:P,vendors:B,vendorsCount:$,dataRetentionPeriod:N}},designVersion:L}=(0,a.Y)(),{[n]:{[t.toString()]:T}}=p,{name:A,description:M,illustrations:z}=T,R=["specialPurposes","features","dataCategories"].indexOf(n)>-1,V="history"===S||R,U=R?void 0:v["specialFeatures"===n?"specialFeatureOptins":"legInt"===C?"purposeLegitimateInterests":"purposeConsents"],J=R||!!(null==U?void 0:U.has(t)),[G,j]=(0,i.J0)(J);(0,i.vJ)((()=>{j(J)}),[J]);const K=(0,i.hb)((e=>{try{U[e?"set":"unset"](t),j(e)}catch(e){}}),[t,U,j]),H=(0,i.Kr)((()=>(0,I.L)(p,v,t,n,"legInt"===C,!0)),[p,v,t,n,C]);return(0,o.FD)(l,{children:[(0,o.FD)(m.S,{hideCheckbox:-1===["purposes","specialFeatures"].indexOf(n),isChecked:G,isDisabled:V,fontSize:k,onToggle:K,after:(0,o.Y)(b.X,{onToggle:d,showMore:D,hideMore:w}),children:[(0,o.Y)("strong",{children:A}),L>6&&(0,o.FD)(i.FK,{children:[" (",(0,F.B)(H.length,...$),")"]})]}),c&&(0,o.FD)(i.FK,{children:[(0,o.Y)(f.E,{label:E,value:(0,x.g)(M),children:(null==z?void 0:z.length)>0&&z.map(((e,n)=>(0,o.Y)(f.E,{label:`${P} #${n+1}`,value:e},e)))}),(0,o.Y)(f.E,{label:B,value:(0,O.i)(H.map((e=>{let{id:i,name:a,urls:s,dataRetention:l}=e;return(0,o.FD)(r,{href:(null==s?void 0:s[0].privacy)||"about:blank",target:"_blank",rel:"noreferrer",children:[a,["purposes","specialPurposes"].indexOf(n)>-1&&l?` (${N}: ${u(Y(l,t,!1),"d")})`:""]},i)})),", ")})]})]})};var B=t(5998);const $=e=>{let{declaration:n}=e;const t=(0,a.Y)(),{i18n:{tcf:{declarations:{[n]:{title:r,desc:s}}}}}=t,l=function(e){const n=(0,a.Y)(),{tcf:{gvl:t,model:o},tcfFilterBy:r}=n,{[e]:s}=t;return(0,i.Kr)((()=>(0,B.i)(e,t,o,r,!0)),[s,t,o,e,r])}(n);return l.length>0?(0,o.FD)(D.Y,{headline:r,children:[s,l.map((e=>{let{id:t}=e;return(0,o.Y)(P,{declaration:n,id:t},t)}))]}):null};var N=t(2253),L=t(4948);const T=["purposes","specialPurposes","features","specialFeatures","dataCategories"],A=()=>{const e=(0,a.Y)(),{tcfFilterBy:n,suspense:t,i18n:{legitimateInterest:s,consent:l,tcf:{filterText:c,standard:p,standardDesc:h}},set:g}=e;return(0,o.FD)(i.FK,{children:[(0,o.FD)(D.Y,{headline:p,style:r.r,borderless:!0,children:[h,(0,o.FD)("div",{style:r.r,children:[(0,o.Y)("span",{"aria-hidden":!0,children:c})," ",(0,o.Y)(d,{legend:c,active:n,onChange:e=>g({tcfFilterBy:e}),items:[{key:"legInt",value:s},{key:"consent",value:l}]})]})]}),(0,o.Y)(L.k,{promise:t.lazyLoadedDataForSecondView,suspenseProbs:{fallback:(0,o.Y)(u.t,{})},children:(0,o.FD)(N._,{children:[(0,o.Y)(w,{}),T.map((e=>(0,o.Y)($,{declaration:e},e)))]})})]})}},5905:(e,n,t)=>{t.d(n,{Y:()=>o});const o=e=>{let{type:n,isDisabled:o,isBold:i}=e;const{Cookie:a}=(0,t(4265).y)().extend(...t(984).C),{gcmConsent:r,updateGcmConsentTypeChecked:s,group:{descriptionFontSize:l},i18n:{gcm:{purposes:{[n]:c}}}}=(0,t(9003).b)();return(0,t(6425).Y)(a,{children:(0,t(6425).Y)(t(766).S,{isChecked:r.indexOf(n)>-1,isDisabled:o,fontSize:l,onToggle:e=>s(n,e),children:(0,t(6425).Y)("span",{style:{fontWeight:i?"bold":void 0},children:c})})})}},9345:(e,n,t)=>{t.r(n),t.d(n,{Cookie:()=>f});var o=t(6425),i=t(9003),a=t(766),r=t(7936),s=t(5155),l=t(9927),c=t(8758),d=t(4975),u=t(2372),p=t(1921),h=t(5905),g=t(4852);const v=e=>{let{cookie:{purpose:n,isProviderCurrentWebsite:t,provider:a,providerContact:v={},providerPrivacyPolicyUrl:m,providerLegalNoticeUrl:b,legalBasis:f,ePrivacyUSA:y,dataProcessingInCountries:C,dataProcessingInCountriesSpecialTreatments:Y,isEmbeddingOnlyExternalResources:k,technicalDefinitions:S,codeDynamics:E,googleConsentModeConsentTypes:D},isEssentialGroup:w,isDisabled:I}=e;const{i18n:F,isEPrivacyUSA:x,isDataProcessingInUnsafeCountries:O,iso3166OneAlpha2:P,dataProcessingInUnsafeCountriesSafeCountries:B,designVersion:$,websiteOperator:N,isGcm:L}=(0,i.b)(),T=(0,l.V)(),A={http:{name:"HTTP Cookie",abbr:"HTTP",backgroundColor:"black"},local:{name:"Local Storage",abbr:"Local",backgroundColor:"#b3983c"},session:{name:"Session Storage",abbr:"Session",backgroundColor:"#3c99b3"},indexedDb:{name:"IndexedDB",abbr:"I-DB",backgroundColor:"#4ab33c"}},M=(0,r.Kr)((()=>O?(0,g.z)({dataProcessingInCountries:C,safeCountries:B,specialTreatments:Y.filter((e=>-1===[u.ak.StandardContractualClauses].indexOf(e))),designVersion:$}).map((e=>P[e]||e)):[]),[O,B,Y,C,P,$]),{legalNotice:z,privacyPolicy:R,contactForm:V}=(0,c.s)(),U=(0,r.Kr)((()=>{if(t&&N){const{address:e,country:n,contactEmail:t,contactPhone:o}=N;return{provider:[e,P[n]||n].filter(Boolean).join(", "),contact:{email:t,phone:o,link:V},legalNoticeUrl:!1===z?"":z.url,privacyPolicyUrl:!1===R?"":R.url}}return{provider:a,contact:v,privacyPolicyUrl:m,legalNoticeUrl:b}}),[t,a,v,m,b,N,z,R,V]),J=(0,r.Kr)((()=>Object.values(U.contact).filter(Boolean).length>0),[U.contact]);return(0,o.FD)(r.FK,{children:[!!n&&(0,o.Y)(s.E,{label:F.purpose,value:(0,p.g)(n)}),(0,o.Y)(s.E,{label:F.legalBasis,value:"legal-requirement"===f?F.legalRequirement:"legitimate-interest"===f||w?F.legitimateInterest:F.consent}),L&&D.length>0&&(0,o.Y)(s.E,{label:F.gcm.dataProcessingInService,printValueAs:"empty",children:(0,o.Y)("div",{style:{display:"inline-block"},children:(0,o.Y)(s.E,{printValueAs:"empty",children:D.map((e=>(0,o.Y)(h.Y,{type:e,isDisabled:I},e)))})})}),(0,o.Y)(s.E,{label:F.provider,value:U.provider,children:J&&(0,o.FD)(r.FK,{children:[(0,o.Y)(s.E,{label:F.providerContactPhone,value:U.contact.phone,printValueAs:"phone"}),(0,o.Y)(s.E,{label:F.providerContactEmail,value:U.contact.email,printValueAs:"mail"}),(0,o.Y)(s.E,{label:F.providerContactLink,value:U.contact.link})]})}),(0,o.Y)(s.E,{label:F.providerPrivacyPolicyUrl,value:U.privacyPolicyUrl}),(0,o.Y)(s.E,{label:F.providerLegalNoticeUrl,value:U.legalNoticeUrl}),!!x&&(0,o.Y)(s.E,{label:F.ePrivacyUSA,value:y,printValueAs:"boolean"}),M.length>0&&(0,o.Y)(s.E,{label:F.dataProcessingInUnsafeCountries,value:M.join(", ")}),$>4&&Y.indexOf(u.ak.StandardContractualClauses)>-1&&(0,o.Y)(s.E,{label:F.appropriateSafeguard,value:F.standardContractualClauses}),!k&&S.map((e=>{let{type:n,name:t,host:i,duration:a,durationUnit:r,isSessionDuration:l,purpose:c}=e;return(0,o.FD)(s.E,{label:F.technicalCookieDefinition,monospace:!0,value:(0,d.t)(t,E),children:[(0,o.Y)(s.E,{label:F.type,value:A[n].name}),(0,o.Y)(s.E,{label:F.purpose,value:c}),!!i&&(0,o.Y)(s.E,{label:F.host,value:i,monospace:!0}),(0,o.Y)(s.E,{label:F.duration,value:["local","indexedDb"].indexOf(n)>-1?F.noExpiration:l||"session"===n?"Session":T(a,r)})]},`${n}-${t}-${i}`)}))]})};var m=t(7899),b=t(984);const f=e=>{let{cookie:n,checked:t,disabled:r,onToggle:s,propertyListProps:l={}}=e;const{Cookie:c}=(0,m.o)().extend(...b.C),{name:d}=n,{group:{descriptionFontSize:u}}=(0,i.b)();return(0,o.FD)(c,{children:[(0,o.Y)(a.S,{isChecked:t,isDisabled:r,fontSize:u,onToggle:s,children:(0,o.Y)("strong",{children:d})}),(0,o.Y)(v,{cookie:n,...l,isDisabled:!t})]})}},5155:(e,n,t)=>{t.d(n,{E:()=>o});const o=e=>{let{label:n,value:o,children:i,printValueAs:a,monospace:r}=e;const s=(0,t(7899).o)(),{Link:l,CookieProperty:c}=s.extend(...t(7835).I).extend(...t(984).C),d=(0,t(9003).b)(),{i18n:{yes:u,no:p}}=d;let h="string"==typeof o&&o.startsWith("http")&&(0,t(2175).g)(o)?(0,t(6425).Y)(l,{href:o,target:"_blank",rel:"noopener noreferrer",children:o}):"string"==typeof o?"phone"===a?(0,t(6425).Y)(l,{target:"_blank",href:`tel:${o.replace(/\s+/g,"")}`,children:o}):"mail"===a?(0,t(6425).Y)(l,{target:"_blank",href:`mailto:${o}`,children:o}):(0,t(6425).Y)("span",{dangerouslySetInnerHTML:{__html:o}}):o;return"boolean"===a&&(h=h?u:p),o||!1===o||"empty"===a?(0,t(6425).FD)(t(7936).FK,{children:[(0,t(6425).FD)(c,{children:[n&&(0,t(6425).FD)("strong",{children:[n,": "]}),(0,t(6425).Y)("span",{role:"presentation",style:{fontFamily:r?"monospace":void 0},children:h})]}),(0,t(6425).Y)(c,{children:!!i&&(0,t(6425).Y)("div",{children:i})})]}):null}},2253:(e,n,t)=>{t.d(n,{_:()=>o});const o=e=>{let{children:n}=e;const{GroupList:o}=(0,t(7899).o)().extend(...t(984).C);return(0,t(6425).Y)(o,{children:n})}},9133:(e,n,t)=>{t.d(n,{X:()=>o});const o=e=>{let{onToggle:n,children:o,showMore:i,hideMore:a,...r}=e;const{Link:s}=(0,t(7899).o)().extend(...t(7835).I),[l,c]=(0,t(7936).J0)(!1),d=(0,t(9527).p)();return(0,t(6425).FD)(t(7936).FK,{children:["  •  ",(0,t(6425).Y)(s,{href:"#",onClick:e=>{const t=!l;c(t),null==n||n(t),e.preventDefault()},...o?{"aria-expanded":l,"aria-controls":d}:{},...r,children:l?a:i}),o&&(0,t(6425).Y)("div",{id:d,children:l&&o})]})}},9927:(e,n,t)=>{function o(){const{i18n:{durationUnit:e},designVersion:n}=(0,t(9003).b)();return(0,t(7936).hb)(((o,i)=>n<6?e[i]:(0,t(4342).B)(o,e.n1[i],e.nx[i])),[e])}t.d(n,{V:()=>o})},1921:(e,n,t)=>{t.d(n,{g:()=>i});const o=/(\r\n|\r|\n|<br[ ]?\/>)/g,i=e=>"string"==typeof e?e.split(o).map(((e,n)=>e.match(o)?(0,t(7936).n)("br",{key:n}):e)):e}}]);
//# sourceMappingURL=https://sourcemap.devowl.io/real-cookie-banner/4.7.10/aac5d76c5a9846b5e23e673adaa38389/banner_tcf-pro-banner-lazy.pro.js.map
