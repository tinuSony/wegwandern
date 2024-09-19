"use strict";(self.webpackChunkrealCookieBanner_=self.webpackChunkrealCookieBanner_||[]).push([[220],{9923:(e,t,i)=>{function n(e,t,n,o,a,r){void 0===r&&(r=!1);let s={};switch(o){case"features":s=e.getVendorsWithFeature(n);break;case"specialFeatures":s=e.getVendorsWithSpecialFeature(n);break;case"specialPurposes":s=e.getVendorsWithSpecialPurpose(n);break;case"purposes":s=a?e.getVendorsWithLegIntPurpose(n):e.getVendorsWithConsentPurpose(n);break;case"dataCategories":s=Object.values(e.vendors).reduce(((e,t)=>{var i;return(null==(i=t.dataDeclaration)?void 0:i.includes(n))&&(e[t.id]=t),e}),{});break;default:s=e.getVendorsWithConsentPurpose(n)}"purposes"===o&&(s={...s,...e.getVendorsWithFlexiblePurpose(n)});const l=Object.values(s).filter((e=>"purposes"!==o||(0,i(2831).n)(t,n,a,e)));return r&&l.sort(((e,t)=>e.name.localeCompare(t.name))),l}i.d(t,{L:()=>n})},2831:(e,t,i)=>{function n(e,t,n,o){let{id:a,legIntPurposes:r}=o;var s;const l=e.publisherRestrictions.getRestrictions(a),d=l.map((e=>{let{purposeId:n,restrictionType:o}=e;return n===t&&o===i(7086).h.NOT_ALLOWED&&n})).filter(Boolean);if(d.indexOf(t)>-1)return!1;let c=null==(s=l.filter((e=>{let{purposeId:n,restrictionType:o}=e;return n===t&&o!==i(7086).h.NOT_ALLOWED}))[0])?void 0:s.restrictionType;return c||(c=r.indexOf(t)>-1?i(7086).h.REQUIRE_LI:i(7086).h.REQUIRE_CONSENT),!(n&&c===i(7086).h.REQUIRE_CONSENT||!n&&c===i(7086).h.REQUIRE_LI)}i.d(t,{n:()=>n})},8756:(e,t,i)=>{function n(e,t){const{gvl:n}=e,o=e=>{let{id:t}=e;return t};switch(t){case"main_all":case"ind_all":case"implicit_all":e.setAllVendorConsents(),e.setAllVendorLegitimateInterests(),e.purposeLegitimateInterests.set((0,i(5998).i)("purposes",n,e,"legInt").map(o)),e.purposeConsents.set((0,i(5998).i)("purposes",n,e,"consent").map(o)),e.specialFeatureOptins.set((0,i(5998).i)("specialFeatures",n,e,"consent").map(o));break;case"initial":case"main_essential":case"implicit_essential":case"ind_essential":case"ind_close_icon":case"main_close_icon":case"shortcode_revoke":e.unsetAll(),e.setAllVendorLegitimateInterests(),e.purposeLegitimateInterests.set((0,i(5998).i)("purposes",n,e,"legInt").map(o));break;case"none":e.unsetAll()}return t.startsWith("main_")?e.consentScreen=0:t.startsWith("ind_")?e.consentScreen=1:"shortcode_revoke"===t?e.consentScreen=10:"unblock"===t&&(e.consentScreen=20),"initial"===t?void 0:()=>i(9755).d.encode(e)}i.d(t,{o:()=>n})},3533:(e,t,i)=>{function n(e){let{isVisible:t,animationIn:i,animationOut:n,animationInDuration:o,animationOutDuration:a,animationInDelay:r,animationOutDelay:s}=e;return t?{animation:i,duration:o,delay:r}:{animation:n,duration:a,delay:s}}i.d(t,{N:()=>o});const o=e=>{let{animateOnMount:t=!0,isVisible:o=!0,animationIn:a="fadeIn",animationOut:r="fadeOut",animationInDelay:s=0,animationOutDelay:l=0,animationInDuration:d=1e3,animationOutDuration:c=1e3,className:p="",style:h={},children:u}=e;const[{animation:g,duration:m,delay:b},f]=(0,i(7936).J0)(t?n({isVisible:o,animationIn:a,animationOut:r,animationInDelay:s,animationOutDelay:l,animationInDuration:d,animationOutDuration:c}):{animation:"",delay:void 0,duration:0});(0,i(7936).vJ)((()=>{f(n({isVisible:o,animationIn:a,animationOut:r,animationInDelay:s,animationOutDelay:l,animationInDuration:d,animationOutDuration:c}))}),[o,a,r,s,l,d,c]);const y=`animate__animated animate__${g} ${p}`,x=g?{}:{opacity:o?1:0,transition:`opacity ${b}ms`};return(0,i(6425).Y)("div",{className:y,style:{animationDelay:`${b}ms`,animationDuration:`${m}ms`,pointerEvents:o?"all":"none",...h,...x},children:u})}},1282:(e,t,i)=>{i.d(t,{r:()=>I,R:()=>R});var n=i(6425),o=i(3967),a=i(6021),r=i(4342),s=i(4665),l=i(984),d=i(7936),c=i(766),p=i(2334);const h=e=>{let{group:t}=e;const{name:i}=t,o=(0,a.Y)(),{decision:{groupsFirstView:r},design:{fontSize:s}}=o,l=r,h=(0,p.C)(t);return(0,n.Y)(d.FK,{children:l?(0,n.Y)(c.S,{...h,fontSize:s,children:i}):(0,n.FD)("span",{children:[(0,n.Y)("i",{}),(0,n.Y)("span",{children:i})]})})};var u=i(4265);const g=()=>{const{texts:{headline:e}}=(0,a.Y)(),{DottedGroupList:t,screenReaderOnlyClass:i}=(0,u.y)().extend(...l.C),{groups:o,decision:{showGroups:r}}=(0,a.Y)();return r?(0,n.FD)(t,{children:[(0,n.Y)("legend",{className:i,children:e}),o.filter((e=>{let{items:t}=e;return!!t.length})).map((e=>(0,n.Y)(h,{group:e},e.id)))]}):null};var m=i(6606),b=i(2425),f=i(6381);const y=()=>{const e=(0,a.Y)(),{isConsentRecord:t,activeAction:i,bodyDesign:{acceptEssentialsUseAcceptAll:o,acceptAllOneRowLayout:r},decision:{showGroups:s,groupsFirstView:l,saveButton:c,acceptAll:p,acceptEssentials:h,buttonOrder:g},texts:{acceptAll:y,acceptEssentials:x,acceptIndividual:v},saveButton:{type:C,useAcceptAll:w},individualTexts:{save:k},individualPrivacyOpen:S,didGroupFirstChange:O,productionNotice:B,buttonClicked:D="",designVersion:I=m.G,fetchLazyLoadedDataForSecondView:R}=e,{a11yIds:{firstButton:$}}=(0,u.y)(),L=o&&p===h,Y=w&&p===C,{all:A,essential:F,individual:W,save:_}=(0,d.Kr)((()=>{const e=g.split(","),t=e.reduce(((t,i)=>(t[i]=e.indexOf(i),t)),{}),i=e.reduce(((t,i)=>(t[e.indexOf(i)]=i,t)),{});return r&&(t[i[0]]=1,t[i[1]]=0),t}),[g,r]),{buttonClickedAll:E,buttonClickedEssentials:P,buttonClickedCustom:N,acceptAll:T,acceptEssentials:G,acceptIndividual:z,openIndividualPrivacy:V}=(0,b.C)(),M="change"===i&&!t,H=s&&l,K=!S&&H&&"afterChangeAll"===c&&O,j="change"!==i,U=S||H&&("always"===c||"afterChange"===c&&O),J=!S,Q=(0,d.li)();return(0,n.FD)(d.FK,{children:[K?(0,n.Y)(f.$,{onClick:z,busyOnClick:M,order:A,type:"acceptAll",framed:D===N,id:$,children:k}):(0,n.Y)(f.$,{onClick:T,busyOnClick:M,order:A,type:"acceptAll",framed:D===E,id:$,children:y}),(j||I>2)&&(0,n.Y)(f.$,{onClick:()=>G(),busyOnClick:M,order:F,type:L?"acceptAll":"acceptEssentials",framed:D===P,children:x}),U&&(0,n.Y)(f.$,{onClick:z,busyOnClick:M,order:_,type:Y?"acceptAll":"save",framed:D===N,children:k}),J&&(0,n.Y)(f.$,{onClick:V,onMouseEnter:()=>{R&&(Q.current=setTimeout(R,500))},onMouseLeave:()=>clearTimeout(Q.current),busyOnClick:M,order:W,type:"acceptIndividual",framed:D.startsWith("ind_"),children:v}),B]})},x=[Symbol("extendBannerBodyStylesheet"),(e,t)=>{let{boolIf:i,boolNot:n,boolOr:o,boolSwitch:a,jsx:r}=e,{scaleVertical:s,dimsContent:l,dimsHeader:[,d],dimsFooter:[,c],activeAction:p,boolLargeOrMobile:h,bodyDesign:u,isBanner:g,isDialog:m,isMobile:b,isMobileWidth:f,layout:y,individualLayout:x,individualPrivacyOpen:v,design:C,footerBorderStyle:w}=t;const{fontColor:k}=C,{padding:S}=u,[,{scrollbar:O,scrolledBottom:B}]=l,D=o([g,v]),I="300px",R=i(g,I,`calc(${y.dialogMaxWidth()} - ${h(S,i,1)} - ${h(S,i,3)} - (${h(C.borderWidth,i)} * 2))`),$=n(f),L=i(m,`${h(C.borderWidth,i)} solid ${C.borderColor()}`),[Y]=r("div",{classNames:"body-container",background:C.bg(),lineHeight:1.4,paddingRight:h(u.padding,i,1),paddingLeft:h(u.padding,i,3),borderLeft:L,borderRight:L,pseudos:{":has(+div>div:empty)":w,">div":{transition:"width 500ms, max-width 500ms",margin:"auto",maxWidth:i({when:g,then:{when:[v,n(x.inheritBannerMaxWidth)],then:x.bannerMaxWidth(),or:y.bannerMaxWidth()}})},">div:after":{content:"''",display:"block",clear:"both"}}}),A=i(u.acceptAllOneRowLayout,"0 0 calc(50% - 5px)","1 1 100%"),F=i(u.acceptAllOneRowLayout,"5px"),[W]=r("div",{classNames:"tb-right",position:i(o([n(v),f]),"sticky"),margin:i({when:[$,m,v,n(x.inheritDialogMaxWidth)],then:"0 0 10px 10px"}),background:C.bg(),maxWidth:"100%",width:i($,R,"auto"),float:i($,i({when:D,then:"right"})),paddingTop:i(f,"10px",i({when:D,then:h(S,i,0),or:"10px"})),paddingBottom:i(v,i(f,"5px","10px"),h(S,i,2)),zIndex:1,display:"flex",flexWrap:"wrap",transition:"box-shadow ease-in-out .1s",boxShadow:i({when:[O(),n(B)],then:`0 -15px 15px -15px rgba(${k("r")} ${k("g")} ${k("b")} / 30%)`}),bottom:i(n(v),c.height()),top:i(v,d.height()),pseudos:{">a":{marginBottom:i(b,`calc(10px * ${s()})`,"10px")},">a[data-order='0']":{flex:A,marginRight:F},">a[data-order='1']":{flex:A,marginLeft:F}}}),_=[$,g,n(p["is-history"])],[E]=r("div",{classNames:"tb-left",float:i({when:_,then:"left"}),width:i({when:_,then:`calc(100% - ${I})`}),paddingRight:i({when:[g,$],then:"20px"}),paddingTop:i(v,"10px",h(u.padding,i,0)),paddingBottom:i({when:[$,n(v)],then:{when:o([g,v]),then:h(u.padding,i,2),or:"0px"},or:"10px"}),pseudos:{" img":{maxWidth:"100%",height:"auto"}}}),[P]=r("div",{position:"sticky",bottom:`calc(${c.height(!0,"0px")} - 1px)`,height:"0px",margin:"auto",transition:"box-shadow ease-in-out .1s",boxShadow:i({when:[O(),n(B)],then:`0 15px 15px 15px rgba(${C.fontColor("r")} ${C.fontColor("g")} ${C.fontColor("b")} / 20%)`}),display:a([[v,"block"],[[g,n(f)],"block"]],"none")});return{Container:Y,RightSide:W,LeftSide:E,BeforeFooter:P}}];var v=i(2273),C=i(7944),w=i(1453);const k=(0,w.g)(Promise.resolve(o.X),"BodyDescription"),S=(0,w.g)(Promise.all([i.e(39),i.e(18),i.e(220),i.e(4)]).then(i.bind(i,118)).then((e=>{let{BannerGroupList:t}=e;return t}))),O=(0,w.g)(Promise.all([i.e(39),i.e(18),i.e(220),i.e(4)]).then(i.bind(i,2735)).then((e=>{let{BannerTcfGroupList:t}=e;return t}))),B=(0,w.g)(Promise.all([i.e(39),i.e(18),i.e(220),i.e(4)]).then(i.bind(i,9040)).then((e=>{let{BannerGcmGroupList:t}=e;return t}))),D=(0,w.g)(Promise.all([i.e(39),i.e(18),i.e(220),i.e(4)]).then(i.bind(i,2835)).then((e=>{let{BannerHistorySelect:t}=e;return t}))),I={margin:"20px 0 10px 0"},R=e=>{let{leftSideContainerRef:t,rightSideContainerRef:i}=e;const{a11yIds:o,Container:l,RightSide:c,LeftSide:p,BeforeFooter:h}=(0,u.y)().extend(...x),m=(0,a.Y)(),{tcf:b,isGcm:f,individualPrivacyOpen:w,activeAction:R,individualTexts:{postamble:$},i18n:{nonStandard:L,nonStandardDesc:Y},groups:A}=m,F=(0,v.R)(),W=(0,r.b)({services:F}),_=f&&(0,C.h)(F).length>0,E=(0,d.Kr)((()=>!(!b&&!_)),[b,_]),P=(0,n.FD)(p,{ref:t,children:[(0,n.Y)(k,{id:o.description,...A.length>0?W:{},children:"history"===R&&(0,n.Y)(D,{})}),A.length>0&&(0,n.FD)(d.FK,{children:[w?(0,n.FD)(d.FK,{children:[E&&(0,n.Y)(s.Y,{headline:L,style:I,borderless:!0,children:Y}),(0,n.Y)(S,{}),b&&(0,n.Y)(O,{}),_&&(0,n.Y)(B,{})]}):(0,n.Y)(g,{}),!!$&&w&&(0,n.Y)(k,{teachings:[$],isPostamble:!0})]})]},"leftSide"),N="history"===R?(0,n.Y)("div",{ref:i}):(0,n.Y)(c,{ref:i,children:(0,n.Y)(y,{})},"rightSide");return(0,n.FD)(l,{children:[(0,n.Y)("div",{children:w?[N,P]:[P,N]}),(0,n.Y)(h,{})]})}},766:(e,t,i)=>{i.d(t,{S:()=>n});const n=e=>{let{hideCheckbox:t,isPartial:n,isChecked:o,isDisabled:a,fontSize:r,onToggle:s,children:l,after:d,...c}=e;const{checkbox:{className:p,style:h},Label:u}=(0,i(7899).o)().extend(...i(7835).I),g=n?i(8489).A:i(3769).A,m=(0,i(9527).p)();return(0,i(6425).FD)(u,{children:[!t&&(0,i(6425).FD)(i(7936).FK,{children:[(0,i(6425).Y)("input",{name:"checkbox[]",type:"checkbox",value:"1",checked:o,disabled:a,className:p,style:h({fontSize:r}),onChange:e=>{const{checked:t}=e.target;null==s||s(t)},"aria-labelledby":m}),(0,i(6425).Y)(i(6899).r,{"aria-hidden":!0,icon:g,...c})]}),l&&(0,i(6425).FD)("span",{children:[(0,i(6425).Y)("span",{id:m,"aria-hidden":!0,children:l}),d&&(0,i(6425).Y)("span",{onClick:e=>{e.stopPropagation()},children:d})]})]})}},4665:(e,t,i)=>{i.d(t,{Y:()=>n});const n=e=>{let{headline:t,borderless:n,children:o,legend:a,...r}=e;const{Group:s,GroupInner:l,GroupDescription:d,screenReaderOnlyClass:c}=(0,i(7899).o)().extend(...i(984).C),p=a||("string"==typeof t?t:void 0),h=(0,i(6425).FD)(l,{children:[p&&(0,i(6425).Y)("legend",{className:c,children:p}),(0,i(6425).Y)("span",{"aria-hidden":!!p,children:t}),o&&(0,i(6425).Y)(d,{children:o})]});return n?(0,i(6425).Y)("div",{className:"group",...r,children:h}):(0,i(6425).Y)(s,{...r,children:h})}},2425:(e,t,i)=>{function n(){const{individualPrivacyOpen:e,onSave:t,updateGroupChecked:n,updateCookieChecked:o,groups:a,activeAction:r,onClose:s,set:l}=(0,i(6021).Y)(),d=e?"ind_all":"main_all",c=e?"ind_essential":"main_essential",p=e?"ind_close_icon":"main_close_icon",h=e?"ind_custom":"main_custom",u={buttonClickedAll:d,buttonClickedEssentials:c,buttonClickedCloseIcon:p,buttonClickedCustom:h,acceptAll:(0,i(7936).hb)((async()=>{await(0,i(5276).P)(),l((e=>{let{updateGroupChecked:t}=e;a.forEach((e=>t(e.id,!0)))})),await(0,i(5276).P)(),t(!1,d)}),[d]),acceptEssentials:(0,i(7936).hb)((e=>{void 0===e&&(e=!1),a.forEach((e=>{let{isEssential:t,id:i,items:a}=e;if(t)n(i,!0);else for(const{legalBasis:e,id:t}of a)o(i,t,"legitimate-interest"===e)})),t(!1,!0===e?p:c)}),[c]),acceptIndividual:(0,i(7936).hb)((()=>t(!1,h)),[h]),openIndividualPrivacy:(0,i(7936).hb)((()=>l({individualPrivacyOpen:!0})),[l])};return{...u,closeIcon:(0,i(7936).hb)((()=>{r?s():u.acceptEssentials(!0)}),[r,s,u.acceptEssentials])}}i.d(t,{C:()=>n})},4265:(e,t,i)=>{function n(){return(0,i(7899).o)().extend(...i(360).Z)}i.d(t,{y:()=>n})},2334:(e,t,i)=>{function n(e){var t;const n=(0,i(6021).Y)(),{id:o,items:a,isEssential:r}=e,{previewCheckboxActiveState:s,consent:l,activeAction:d}=n,c=r||"history"===d,p=s||r||!!l[o];return{isDisabled:c,isChecked:p,isPartial:!r&&(null==(t=l[o])?void 0:t.length)&&JSON.stringify(a.map((e=>{let{id:t}=e;return t})).sort())!==JSON.stringify(l[o].sort()||[]),onToggle:(0,i(7936).hb)((e=>n.updateGroupChecked(o,e)),[n,o,p])}}i.d(t,{C:()=>n})},2273:(e,t,i)=>{function n(e){const{groups:t}=(0,i(9003).b)();let n=t.map((e=>{let{items:t}=e;return[...t]})).flat();return e&&(n=n.map(e).filter(Boolean)),n}i.d(t,{R:()=>n})},4948:(e,t,i)=>{i.d(t,{k:()=>o});const n=e=>{let{children:t}=e;return(0,i(6425).Y)(i(7936).FK,{children:t})},o=e=>{let{promise:t,children:o,suspenseProbs:a}=e;const r=(0,i(7936).Kr)((()=>(0,i(1453).g)((t||Promise.resolve()).then((()=>n)),void 0,a)),[t]);return(0,i(6425).Y)(r,{children:o})}},360:(e,t,i)=>{i.d(t,{Z:()=>l});var n=i(5263),o=i(1685),a=i.n(o);const r=(e,t)=>{let i,o,r;t?r=t({width:0,height:0,scrollbar:!1,scrolledTop:!1,scrolledBottom:!1},{width:n.dD,height:n.dD}):(i=e("width"),o=e("height"));const s=[],l=()=>s.forEach(((e,t,i)=>{e(),i.splice(t,1)})),d=(e,t)=>{let n;void 0===t&&(t=[]);const d=()=>{e&&(a().clear(n),n=a().measure((()=>{const{width:t,height:n}=e.getBoundingClientRect(),{clientHeight:s,scrollHeight:l,scrollTop:d,offsetHeight:c}=e,p=s<l,h=Math.ceil(d+c+3)>=l;(0!==t||0!==n||e.offsetParent)&&a().mutate((()=>{r?r[1]({width:t,height:n,scrollbar:p,scrolledTop:0===d,scrolledBottom:h}):(e.style.setProperty(i,`${t}px`),e.style.setProperty(o,`${n}px`))}))})))};for(const i of[e,...t]){if(!i)continue;i.addEventListener("animationend",d),i.addEventListener("scroll",d);const e=new ResizeObserver(d);e.observe(i),s.push((()=>{e.disconnect(),i.removeEventListener("animationend",d),i.removeEventListener("scroll",d)}))}return l};return t?[d,r[0],l]:[d,{width:i,height:o},l]},s=(e,t)=>`rgba(${e("r")}, ${e("g")}, ${e("b")}, calc(${t()}/100))`,l=[Symbol("extendBannerStylesheet"),(e,t)=>{let{computed:i,rule:o,boolIf:a,boolNot:l,boolSwitch:d,jsx:c,variable:p,className:h,vars:u,varName:g,plugin:m}=e,{unsetDialogStyles:b,customize:{activeAction:f,pageRequestUuid4:y},boolLargeOrMobile:x,isMobile:v,layout:{dialogPosition:C,dialogMaxWidth:w,dialogMargin:k,dialogBorderRadius:S,bannerPosition:O,overlay:B,overlayBg:D,overlayBgAlpha:I,overlayBlur:R},design:{boxShadowEnabled:$,boxShadowColor:L,boxShadowOffsetX:Y,boxShadowOffsetY:A,boxShadowBlurRadius:F,boxShadowSpreadRadius:W,boxShadowColorAlpha:_,fontSize:E,borderWidth:P,borderColor:N,textAlign:T,fontInheritFamily:G,fontFamily:z,fontWeight:V,fontColor:M},mobile:H,layout:K,individualLayout:j}=t;const U={headline:h(),description:h(),firstButton:h()},J=r(g,u),Q=r(g,u),Z=r(g,u),X=r(g,u),q=r(g,u),ee=p(f,(0,n.$S)(f,["history"])),te=p(!1,void 0,"individual"),{isDialog:ie,isBanner:ne}=i([v,K.type],(e=>{let[t,i]=e;const n=t?"banner":i;return{type:n,isDialog:"dialog"===n,isBanner:"banner"===n}})),oe=i([C],(e=>{let[t]=e;return[t.startsWith("top")?"flex-start":t.startsWith("bottom")?"flex-end":"center",t.endsWith("Center")?"center":t.endsWith("Left")?"flex-start":"flex-end"]}),"dialogAlign");let ae="none";ae=a(B,`blur(${R()})`);const[re]=c("div",{classNames:"bann3r",position:"fixed",top:0,left:0,right:0,bottom:0,zIndex:999999,filter:"none",maxWidth:"100vw",maxHeight:"100vh",fontSize:E("l"),background:a(B,s(D,I)),pointerEvents:a(B,"all","none"),backdropFilter:ae,transform:"translateZ(0)"}),[se]=c("dialog",{classNames:["align",b],display:"flex",width:"100%",height:"100%",alignItems:a(ie,oe(0)),justifyContent:a(ie,oe(1))},{tabIndex:0,"aria-labelledby":U.headline,"aria-describedby":U.description}),le=a({when:ie,then:{when:[te,l(j.inheritDialogMaxWidth)],then:j.dialogMaxWidth(),or:w()},or:"100%"}),{alignment:de}=H,ce=`${x(P,a)} solid ${N()}`,pe=a(ie,S()),[,he]=o({classNames:"inner",pointerEvents:"all",transition:"width 500ms, max-width 500ms",overflow:"hidden",maxWidth:le,width:le,textAlign:T("val"),fontFamily:a(G,"inherit",z()),fontWeight:V(),color:M("hex"),margin:a({when:[ie,l(C["is-middlecenter"])],then:k(),or:a(ie,"10px")}),borderRadius:pe,boxShadow:a($,`${Y()} ${A()} ${F()} ${W()} rgba(${L("r")} ${L("g")} ${L("b")} / ${_()})`),alignSelf:a({when:v,then:d([[de("is-bottom"),"flex-end"],[de("is-top"),"flex-start"],[de("is-center"),"center"]]),or:{when:ne,then:d([[O("is-top"),"flex-start"],[O("is-bottom"),"flex-end"]])}}),borderTop:a({when:[ne,O("is-bottom")],then:ce}),borderBottom:a({when:[ne,O("is-top")],then:ce})}),ue={boxSizing:"border-box",backfaceVisibility:"initial",textTransform:"initial","-webkit-text-size-adjust":"100%"};o({forceSelector:`#${y}, #${y} *`,...ue}),m("modifyRule",(e=>{if("unset"===e.all)for(const t in ue)Object.prototype.hasOwnProperty.call(e,t)||(e[t]=ue[t])}));const ge=`${a(ie,P("l"),"0px")} solid ${N()}`;return{a11yIds:U,isDialog:ie,isBanner:ne,activeAction:ee,dimsOverlay:J,dimsContent:Q,dimsHeader:Z,dimsFooter:X,dimsRightSidebar:q,individualPrivacyOpen:te,Dialog:se,Overlay:re,inner:he,footerBorderStyle:{borderBottomLeftRadius:pe,borderBottomRightRadius:pe,borderLeft:ge,borderRight:ge,borderBottom:ge},headerBorderStyle:{borderTopLeftRadius:pe,borderTopRightRadius:pe,borderLeft:ge,borderRight:ge,borderTop:ge}}}]},984:(e,t,i)=>{i.d(t,{C:()=>n});const n=[Symbol("extendCommonGroupsStylesheet"),(e,t)=>{let{jsx:i,boolIf:n,boolNot:o}=e,{group:a,design:r,decision:s,bodyDesign:l,boolLargeOrMobile:d}=t;const[c]=i("fieldset",{classNames:"dotted-groups",all:"unset",marginTop:"10px",lineBreak:"anywhere",lineHeight:2,pseudos:{">span,>label":{paddingRight:"10px",fontSize:n({when:l.dottedGroupsInheritFontSize(),then:d(r.fontSize,n),or:d(l.dottedGroupsFontSize,n)}),whiteSpace:"nowrap",display:"inline-block"},">span>i":{color:l.dottedGroupsBulletColor()},">span>i::after":{paddingRight:"5px",display:"inline-block",content:"'●'"},">span>span":{verticalAlign:"middle",cursor:n(s.groupsFirstView,"pointer")}}}),[p]=i("div",{classNames:"groups",marginTop:"10px",clear:"both",pseudos:{">div:not(:last-of-type)":{marginBottom:d(a.groupSpacing,n)}}}),[h]=i("div",{classNames:"group",background:n(o(a.groupInheritBg),a.groupBg()),padding:d(a.groupPadding,n),borderRadius:a.groupBorderRadius(),textAlign:"left",borderColor:a.groupBorderColor(),borderStyle:"solid",borderWidth:d(a.groupBorderWidth,n)}),[u]=i("fieldset",{classNames:"group-inner",all:"unset",textAlign:"left",color:a.headlineFontColor(),fontSize:d(a.headlineFontSize,n),fontWeight:a.headlineFontWeight()}),[g]=i("div",{classNames:"group-description",color:a.descriptionFontColor(),fontSize:d(a.descriptionFontSize,n),marginTop:"5px"}),[m]=i("div",{classNames:"cookie",marginTop:"10px",pseudos:{">label:first-of-type":{display:"block",marginBottom:"10px"}}}),[b]=i("div",{classNames:"cookie-prop",borderStyle:"solid",borderColor:a.groupBorderColor(),borderWidth:"0px",borderLeftWidth:d(a.groupBorderWidth,n),paddingLeft:"15px",pseudos:{">span>a":{wordBreak:"break-all"}}});return{DottedGroupList:c,GroupList:p,Group:h,GroupInner:u,GroupDescription:g,Cookie:m,CookieProperty:b}}]},8499:(e,t,i)=>{i.d(t,{Iy:()=>n,_2:()=>a,kt:()=>o});const n="stylesheet-created",o="stylesheet-toggle",a="css-var-update-"}}]);
//# sourceMappingURL=https://sourcemap.devowl.io/real-cookie-banner/4.7.15/e27a026e149d98c4a80fc77901f2dab1/banner_tcf-pro-220.pro.js.map
