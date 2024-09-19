"use strict";(self.webpackChunkrealCookieBanner_=self.webpackChunkrealCookieBanner_||[]).push([[668],{48585:(e,t,a)=>{a.d(t,{X:()=>o});var s=a(63078),n=a(77381);function o(){const{__:e}=(0,n.s)();return(0,s.W)({title:e("Want a better integrated visual content blocker for your website?"),testDrive:!0,feature:"visual-content-blocker",assetName:e("pro-modal/visual-content-blocker.webp"),description:e("Instead of a lot of text, you can offer your visitor a more pleasant way to view blocked content. For example, you can replace your video embeds with a privacy-compliant dummy player with thumbnail, or an embedded map with a preview map.")})}},92175:(e,t,a)=>{function s(e){return e.indexOf(".")>-1&&!!/^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/.test(e)}a.d(t,{g:()=>s})},80717:(e,t,a)=>{a.d(t,{y:()=>u});var s=a(3713),n=a(41594),o=a(57922),r=a(95498),i=a(39313),l=a(18197),c=a(28101),d=a(99352);const u=(0,o.PA)((()=>{{const{statsStore:e,optionStore:{others:{colorScheme:t}}}=(0,r.g)(),{busyStats:a,filters:{dates:o,context:u},stats:{main:h}}=e,m=(0,n.useRef)(),[p,_]=(0,n.useState)(!1);return(0,n.useEffect)((()=>{e.fetchMain()}),[o,u]),(0,n.useEffect)((()=>{if(m.current){const e=new i.t1({container:m.current}),a=(null==h?void 0:h.map((e=>{let{term_name:t,accepted:a,count:s}=e;return{term_name:t,accepted:"0"===a?(0,d.__)("Rejected"):"1"===a?(0,d.__)("Some services"):(0,d.__)("All services"),count:s}})))||[];return e.options({type:"interval",autoFit:!0,height:300,animate:!1,data:a,encode:{x:"term_name",y:"count",color:"accepted"},transform:[{type:"stackY"}],legend:{color:{position:"right"}},scale:{color:{range:[t[2],t[3],"#e2e2e2"]}},axis:{y:{title:{visible:!1}},x:{title:""}},interaction:{elementHighlight:{background:!0},tooltip:{shared:!0}}}),e.render(),_(!a.length),e.render(),()=>{e.destroy()}}return()=>{}}),[m,h]),(0,s.jsxs)(l.A,{spinning:a.main,children:[(0,s.jsx)("div",{style:{display:p?"none":void 0},ref:m}),p&&!a.main&&(0,s.jsx)(c.A,{description:(0,d.__)("No data available for this period.")})]})}}))},92217:(e,t,a)=>{a.r(t),a.d(t,{DashboardCards:()=>W});var s=a(3713),n=a(41594),o=a(57922),r=a(43799),i=a(18197),l=a(6099),c=a(92453),d=a(99352),u=a(95498),h=a(33146),m=a(73491);const p="#/settings",_="#/cookies",g=(0,o.PA)((()=>{const{optionStore:e,cookieStore:{groups:t}}=(0,u.g)(),{isTcf:a,isBannerActive:n,isBlockerActive:o,busySettings:r,cookieCounts:l,isOnlyRcbCookieCreated:c,tcfVendorConfigurationCounts:g}=e,f=n&&o;return(0,s.jsxs)(i.A,{spinning:t.busy||r,children:[(0,s.jsxs)("div",{children:[(0,s.jsx)(h.A,{status:n?"success":"error",text:(0,d._i)(n?(0,d.__)("Cookie Banner is {{strong}}activated{{/strong}}"):(0,d.__)("Cookie Banner is {{strong}}deactivated{{/strong}}"),{strong:(0,s.jsx)("strong",{})})}),(0,s.jsx)("p",{className:"description",children:(0,d._i)((0,d.__)("You can enable and disable the cookie banner in the {{a}}settings page{{/a}}."),{a:(0,s.jsx)("a",{href:p})})})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)(h.A,{status:f?"success":"error",text:(0,d._i)(f?(0,d.__)("Content Blocker is {{strong}}activated{{/strong}}"):(0,d.__)("Content Blocker is {{strong}}deactivated{{/strong}}"),{strong:(0,s.jsx)("strong",{})})}),(0,s.jsx)("p",{className:"description",children:(0,d._i)((0,d.__)("You can enable and disable the content blocker in the {{a}}settings page{{/a}}."),{a:(0,s.jsx)("a",{href:p})})})]}),(0,s.jsxs)("p",{children:[(0,d.__)("Available service groups:")," ",t.sortedGroups.map((e=>{let{data:{name:t,id:a}}=e;return(0,s.jsx)(m.A,{children:t},a)})),"• ",(0,s.jsx)("a",{href:_,children:(0,d.__)("Manage")})]}),(0,s.jsxs)("p",{children:[(0,d._i)((0,d.__)("You have defined {{strong}}%d enabled{{/strong}}, %d disabled and %d draft services.",c?0:l.publish,c?0:l.private,c?0:l.draft),{strong:(0,s.jsx)("strong",{})}),"  •  ",(0,s.jsx)("a",{href:_,children:(0,d.__)("Manage")})]}),a&&g&&(0,s.jsxs)("p",{children:[(0,d._i)((0,d.__)("You have defined {{strong}}%d enabled{{/strong}}, %d disabled and %d draft TCF vendors.",g.publish,g.draft,g.private),{strong:(0,s.jsx)("strong",{})}),"  •  ",(0,s.jsx)("a",{href:"#/cookies/tcf-vendors",children:(0,d.__)("Manage")})]})]})}));var f=a(1057),x=a(19117),b=a(34650),y=a(24262),v=a(24985),j=a(9689),k=a(99124),w=a(92175),A=(a(59627),a(63078));var C=a(48585);const S=(0,o.PA)((()=>{const{message:e}=x.A.useApp(),[t,a]=(0,n.useState)(!1),{optionStore:{dashboardMigration:{id:o,description:r,actions:l},others:{isPro:c}}}=(0,u.g)(),[h,m]=(0,n.useState)({}),[p,_]=(0,n.useState)([]),g=(0,A.W)({title:(0,d.__)("Want to optimize the cookie banner for mobile users?"),testDrive:!0,feature:"mobile-experience",assetName:(0,d.__)("pro-modal/mobile-optimization.png"),description:(0,d.__)("Cookie banners are a necessary evil that takes up a lot of space, especially on smartphones. With mobile optimization you can customize the cookie banner so that it is more discreet and at the same time easy to read on smartphones.")}),S=(0,C.X)(),T=(0,n.useCallback)((async t=>{let{id:s,callback:n}=t;if("string"==typeof n&&(0,w.g)(n))window.location.href=n;else{a(!0);try{const{success:t,redirect:a,message:n,overrideAction:r}=await(0,f.E)({location:j.a,params:{migration:o,action:s}});t&&(a?window.location.href=a:(e.success(n||(0,d.__)("Successfully saved changes!")),r&&(m((e=>({...e,[s]:r}))),_((e=>[...e,s])))))}catch(e){}finally{a(!1)}}}),[]);return(0,s.jsxs)(i.A,{spinning:t,children:[(0,s.jsx)("p",{className:"description",dangerouslySetInnerHTML:{__html:r}}),(0,s.jsx)(b.A,{itemLayout:"vertical",size:"small",dataSource:Object.values(l),renderItem:e=>{const{id:t,title:a,description:n,linkText:o,linkClasses:r,linkDisabled:i,confirmText:l,previewImage:u,performed:m,performedLabel:_,needsPro:f,info:x}={...e,...h[e.id]||{},...p.indexOf(e.id)>-1?{performed:!0}:{}},j=(0,s.jsx)("button",{className:r,onClick:()=>!l&&T(e),disabled:i,children:o},"apply-link");return(0,s.jsx)(b.A.Item,{style:{paddingLeft:0,paddingRight:0},actions:[o&&(l?(0,s.jsx)(y.A,{title:(0,s.jsx)("span",{dangerouslySetInnerHTML:{__html:l}}),placement:"bottomLeft",onConfirm:()=>T(e),cancelText:(0,d.__)("Cancel"),okText:o,overlayStyle:{maxWidth:450},transitionName:null,children:j}):j),m&&(!f||c)&&(0,s.jsxs)("span",{style:{verticalAlign:"middle"},children:[(0,s.jsx)(k.A,{})," ",_||(0,d.__)("Already applied")]}),f&&!c&&(()=>{let e,a;switch(t){case"visual-content-blocker":({modal:e,tag:a}=S);break;case"mobile-experience":({modal:e,tag:a}=g);break;default:return null}return(0,s.jsxs)(s.Fragment,{children:[e," ",(0,s.jsx)("span",{style:{position:"absolute",top:3},children:a})]})})()].filter(Boolean),children:(0,s.jsx)(b.A.Item.Meta,{title:a,description:(0,s.jsxs)(s.Fragment,{children:[u&&(0,s.jsx)(v.A,{width:272,src:u,wrapperStyle:{marginLeft:15,float:"right"}}),(0,s.jsx)("p",{className:"description",dangerouslySetInnerHTML:{__html:n}}),!!x&&(0,s.jsx)("div",{className:"notice notice-info below-h2 notice-alt",style:{marginTop:10},children:(0,s.jsx)("p",{className:"description",dangerouslySetInnerHTML:{__html:x}})})]})})},t)}})]})}));var T=a(13525);const N=(0,o.PA)((e=>{let{description:t,links:a,logo:n}=e;return(0,s.jsxs)(s.Fragment,{children:[!!n&&(0,s.jsx)("img",{src:n,style:{maxWidth:"100%",maxHeight:"80px",display:"block",margin:"0 0 10px"}}),!!t&&(0,s.jsx)("p",{className:"description",dangerouslySetInnerHTML:{__html:t}}),null==a?void 0:a.map((e=>{let{link:t,linkText:a}=e;return(0,s.jsx)("a",{href:t,target:"_blank",rel:"noreferrer",className:"button",style:{marginTop:13,marginRight:10},children:a},t)}))]})}));var L=a(64715),M=a(2464);const Y={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M168 504.2c1-43.7 10-86.1 26.9-126 17.3-41 42.1-77.7 73.7-109.4S337 212.3 378 195c42.4-17.9 87.4-27 133.9-27s91.5 9.1 133.8 27A341.5 341.5 0 01755 268.8c9.9 9.9 19.2 20.4 27.8 31.4l-60.2 47a8 8 0 003 14.1l175.7 43c5 1.2 9.9-2.6 9.9-7.7l.8-180.9c0-6.7-7.7-10.5-12.9-6.3l-56.4 44.1C765.8 155.1 646.2 92 511.8 92 282.7 92 96.3 275.6 92 503.8a8 8 0 008 8.2h60c4.4 0 7.9-3.5 8-7.8zm756 7.8h-60c-4.4 0-7.9 3.5-8 7.8-1 43.7-10 86.1-26.9 126-17.3 41-42.1 77.8-73.7 109.4A342.45 342.45 0 01512.1 856a342.24 342.24 0 01-243.2-100.8c-9.9-9.9-19.2-20.4-27.8-31.4l60.2-47a8 8 0 00-3-14.1l-175.7-43c-5-1.2-9.9 2.6-9.9 7.7l-.7 181c0 6.7 7.7 10.5 12.9 6.3l56.4-44.1C258.2 868.9 377.8 932 512.2 932c229.2 0 415.5-183.7 419.8-411.8a8 8 0 00-8-8.2z"}}]},name:"sync",theme:"outlined"};var F=a(4679),P=function(e,t){return n.createElement(F.A,(0,M.A)({},e,{ref:t,icon:Y}))};const D=n.forwardRef(P),I=(0,o.PA)((()=>{const{message:e}=x.A.useApp(),{cookieStore:t,optionStore:a}=(0,u.g)(),{busySettings:o,others:{isPro:r,isLicensed:i},cloudReleaseInfo:{blocker:l,service:c}}=a,[h,m]=(0,n.useState)(!1),p=(0,n.useCallback)((async()=>{if(!h){m(!0);try{await t.fetchTemplatesServices({storage:"redownload"}),await t.fetchTemplatesBlocker(),await a.fetchCurrentRevision(),e.success("Template database successfully updated. You can see the latest templates now!")}catch(t){e.error(t.responseJSON.message)}finally{m(!1)}}}),[h]);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("p",{className:"description",children:(0,d.__)("Templates for hundreds of services that you could be running on your website must be downloaded from Real Cookie Banner's Service Cloud. The data will be downloaded locally to your server, so your website visitors will not need to connect to the cloud.")}),i?(0,s.jsxs)(s.Fragment,{children:[l?(0,s.jsx)("p",{className:"description",children:(0,d._i)((0,d.__)("You have downloaded the service templates the last time on {{u/}}"),{u:(0,s.jsx)(L.A,{title:(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("strong",{children:(0,d.__)("Services")}),(0,s.jsx)("br",{}),(0,d.__)("Release ID"),": ",null==c?void 0:c.releaseId,(0,s.jsx)("br",{}),(0,d.__)("Pre-release"),":"," ",(null==c?void 0:c.isPreReleaseEnabled)?(0,d.__)("Yes"):(0,d.__)("No"),(0,s.jsx)("br",{}),(0,s.jsx)("strong",{children:(0,d.__)("Content Blocker")}),(0,s.jsx)("br",{}),(0,d.__)("Release ID"),": ",null==l?void 0:l.releaseId,(0,s.jsx)("br",{}),(0,d.__)("Pre-release"),":"," ",(null==l?void 0:l.isPreReleaseEnabled)?(0,d.__)("Yes"):(0,d.__)("No")]}),children:(0,s.jsx)("u",{style:{textDecoration:"none",borderBottom:"1px dotted #000",cursor:"help"},children:new Date(l.downloadTime).toLocaleString(document.documentElement.lang)})})})}):o?null:(0,s.jsx)("div",{className:"notice notice-error inline below-h2 notice-alt",style:{margin:"10px 0"},children:(0,s.jsx)("p",{className:"description",children:(0,d.__)('An error occurred when trying to download the templates from the Service Cloud for the first time. This means that the scanner will currently not be able to suggest scan results for service templates. The download will be performed again automatically in a few minutes, or click "Update templates" below.')})}),(0,s.jsx)("p",{children:(0,s.jsx)(L.A,{title:(0,d.__)('The template database is downloaded to your WordPress and is updated daily. Click "Update templates" to download the latest version now!'),placement:"bottom",children:(0,s.jsxs)("a",{type:"button",className:"button "+(h?"button-disabled":""),onClick:p,children:[(0,s.jsx)(D,{spin:h})," ",(0,d.__)("Update templates")]})})})]}):o?null:(0,s.jsx)("div",{className:"notice notice-warning inline below-h2 notice-alt",style:{margin:"10px 0"},children:(0,s.jsxs)("p",{className:"description",children:[(0,d.__)("This functionality is only available with a valid license, as the service templates must be downloaded regularly from our cloud service.")," ","•"," ",(0,s.jsx)("a",{href:`#/licensing?navigateAfterActivation=${encodeURIComponent(window.location.href)}`,children:r?(0,d.__)("Activate license"):(0,d.__)("Activate free license")})]})})]})})),B=(0,o.PA)((()=>{const{optionStore:{others:{cachePlugins:e}}}=(0,u.g)(),t=Object.values(e).join(", ");return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("p",{className:"description",children:(0,d.__)("Real Cookie Banner can empty your page cache automatically as soon as a page cache is detected. This means that you do not have to manually clear your page cache if you make changes to the cookie banner via the customizer or if you ask for a new consent.")}),t?(0,s.jsx)(h.A,{status:"success",text:(0,d._i)((0,d.__)("We have detected {{strong}}%s{{/strong}} as your page cache.",t),{strong:(0,s.jsx)("strong",{})})}):(0,s.jsx)(h.A,{status:"default",text:(0,d._i)((0,d.__)("We did {{strong}}not detect{{/strong}} any page cache on your site."),{strong:(0,s.jsx)("strong",{})})})]})}));var R=a(80717),E=a(78002),z=a(34692);const W=(0,o.PA)((()=>{const{statsStore:e,optionStore:t,cookieStore:a,checklistStore:o}=(0,u.g)(),{others:{isPro:h,assetsUrl:m,hints:{dashboardTile:p}},dashboardMigration:_}=t,{filters:{dates:f}}=e,[x,b]=(0,n.useState)();(0,n.useEffect)((()=>{a.groups.get(),t.fetchCurrentRevision()}),[]);const y=o.completed.length<3||_?.5:1,v=(0,n.useMemo)((()=>(0,s.jsx)(r.A,{style:{margin:10,opacity:y},title:(0,d.__)("General"),className:"rcb-dashboard-card-focus",children:(0,s.jsx)(g,{})})),[y]),j=(0,n.useMemo)((()=>_?(0,s.jsx)(r.A,{style:{margin:10},title:_.headline,extra:(0,s.jsx)("a",{href:"#",onClick:()=>t.dismissMigration(),children:(0,d.__)("Dismiss this info")}),children:(0,s.jsx)(S,{})}):null),[_,t]),k=(0,n.useMemo)((()=>(0,s.jsx)(r.A,{style:{margin:10,opacity:_?y:void 0},title:(0,d.__)("Set up the cookie banner"),extra:o.done?null:(0,s.jsx)("a",{href:"#",onClick:()=>o.toggleChecklistItem("all",!0),children:(0,d.__)("I have already done all the steps")}),children:(0,s.jsx)(T.y,{})})),[o.done,_]),w=(0,n.useMemo)((()=>p.map((e=>{let{title:t,...a}=e;return(0,s.jsx)(r.A,{style:{margin:10,opacity:y},title:t,className:"rcb-dashboard-card-focus",children:(0,s.jsx)(N,{...a})},t)}))),[p,y]);return 0===o.items.length?(0,s.jsx)(i.A,{spinning:!0,style:{marginTop:15}}):(0,s.jsx)(i.A,{spinning:o.busyChecklist,style:{marginTop:15},children:(0,s.jsxs)(l.A,{children:[(0,s.jsxs)(c.A,{xl:16,sm:16,xs:24,children:[j,o.done?v:k,(0,s.jsx)(r.A,{style:{margin:10,opacity:y},className:"rcb-dashboard-card-focus",title:(0,d.__)("Statistics"),extra:(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("a",{href:"#/consent",children:(0,d.__)("More statistics")}),"  •  ",(0,s.jsx)(E.U,{value:f,disabled:!0})]}),children:h?(0,s.jsx)(R.y,{}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(z.X,{title:(0,d.__)("Want to see detailed statistics about the consents of your visitors?"),inContainer:!0,inContainerElement:x,testDrive:!0,feature:"dashboard-stats",description:(0,d.__)("You can get several statistics about how your users use the cookie banner. This helps you to calculate the total number of users who do not want to be tracked, for example, by extrapolating data from Google Analytics."),showHints:!1,showFomoCouponCounter:o.done}),(0,s.jsx)("div",{ref:b,className:"rcb-antd-modal-mount",style:{height:600,backgroundImage:`url('${m}dashboard-statistics-blured.png')`}})]})})]}),(0,s.jsxs)(c.A,{xl:8,sm:8,xs:24,children:[o.done?k:v,w,(0,s.jsx)(r.A,{style:{margin:10,opacity:y},title:(0,d.__)("Service Cloud"),className:"rcb-dashboard-card-focus",children:(0,s.jsx)(I,{})}),(0,s.jsx)(r.A,{style:{margin:10,opacity:y},title:(0,d.__)("Cache"),className:"rcb-dashboard-card-focus",children:(0,s.jsx)(B,{})})]})]})})}))},78002:(e,t,a)=>{a.d(t,{U:()=>u});var s=a(3713),n=a(99352),o=a(38123),r=a.n(o),i=a(32386),l=a(16983);const c=i.A.generatePicker(l.A),{RangePicker:d}=c,u=e=>{const t=r().localeData();return(0,s.jsx)(d,{locale:{lang:{locale:r().locale(),placeholder:(0,n.__)("Select date"),rangePlaceholder:[(0,n.__)("Start date"),(0,n.__)("End date")],today:(0,n.__)("Today"),now:(0,n.__)("Now"),backToToday:(0,n.__)("Back to today"),ok:(0,n.__)("OK"),clear:(0,n.__)("Clear"),month:(0,n.__)("Month"),year:(0,n.__)("Year"),timeSelect:(0,n.__)("Select time"),dateSelect:(0,n.__)("Select date"),monthSelect:(0,n.__)("Choose a month"),yearSelect:(0,n.__)("Choose a year"),decadeSelect:(0,n.__)("Choose a decade"),yearFormat:"YYYY",dateFormat:t.longDateFormat("LL"),dayFormat:"D",dateTimeFormat:t.longDateFormat("LLL"),monthFormat:"MMMM",monthBeforeYear:!0,previousMonth:(0,n.__)("Previous month (PageUp)"),nextMonth:(0,n.__)("Next month (PageDown)"),previousYear:(0,n.__)("Last year (Control + left)"),nextYear:(0,n.__)("Next year (Control + right)"),previousDecade:(0,n.__)("Last decade"),nextDecade:(0,n.__)("Next decade"),previousCentury:(0,n.__)("Last century"),nextCentury:(0,n.__)("Next century")},timePickerLocale:{placeholder:(0,n.__)("Select time")},dateFormat:t.longDateFormat("LL"),dateTimeFormat:t.longDateFormat("LLL"),weekFormat:"YYYY-wo",monthFormat:"YYYY-MM"},...e})}},16741:(e,t,a)=>{a.d(t,{A:()=>o});var s=a(75206),n=a.n(s);function o(e,t,a,s){var o=n().unstable_batchedUpdates?function(e){n().unstable_batchedUpdates(a,e)}:a;return null!=e&&e.addEventListener&&e.addEventListener(t,o,s),{remove:function(){null!=e&&e.removeEventListener&&e.removeEventListener(t,o,s)}}}},23797:(e,t,a)=>{function s(){return{width:document.documentElement.clientWidth,height:window.innerHeight||document.documentElement.clientHeight}}function n(e){var t=e.getBoundingClientRect(),a=document.documentElement;return{left:t.left+(window.pageXOffset||a.scrollLeft)-(a.clientLeft||document.body.clientLeft||0),top:t.top+(window.pageYOffset||a.scrollTop)-(a.clientTop||document.body.clientTop||0)}}a.d(t,{A3:()=>n,XV:()=>s})}}]);
//# sourceMappingURL=https://sourcemap.devowl.io/real-cookie-banner/4.7.15/c9a4e8cc50ca28305317426ed51bdf53/chunk-config-tab-dashboard.pro.js.map
