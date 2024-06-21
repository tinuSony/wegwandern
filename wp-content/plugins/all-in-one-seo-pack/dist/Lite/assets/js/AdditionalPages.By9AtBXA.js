import{D as I,a as M,u as F,e as N}from"./links.C2upUfsO.js";import{W as E}from"./WpTable.D4QfcWP2.js";import{D as T}from"./Date.BuX8UpcY.js";import{_ as $}from"./default-i18n.Bd0Z306Z.js";import{s as S,k as z,q as V}from"./helpers.D2xRWOvn.js";import{B as Y}from"./DatePicker.Ds0FlmSm.js";import{C as B,c as W,e as J}from"./Caret.iRBf3wcH.js";import{C as O}from"./Index.CI2PYaF7.js";import{S as H}from"./Exclamation.DKtT8kuH.js";import{x as u,o as c,c as v,a,t as l,d as h,C as n,m as r,F as j,l as f,H as R,D as g,G as C}from"./vue.esm-bundler.CWQFYt9y.js";import{_ as q}from"./_plugin-vue_export-helper.BN1snXvA.js";import{C as K}from"./Table._qU3COyQ.js";import{C as Q}from"./Card.BF8YEwxA.js";import{C as G}from"./Tooltip.Jp05nfCy.js";import{S as X}from"./index.BQgiQQKQ.js";import"./constants.DpuIWwJ9.js";import"./get.BT85ybc8.js";import"./toString.XwB3Xa5p.js";import"./isUndefined.CwgbffFV.js";import"./_getTag.CQI1SwGE.js";import"./debounce.DX0w6jjQ.js";import"./toNumber.LBtMnsWu.js";import"./_baseTrim.BYZhh0MR.js";import"./numbers.zAmItkHM.js";import"./Slide.CRIn0kdn.js";const Z=""+window.__aioseoDynamicImportPreload__("images/import-from-csv.OyzQxKAE.png"),D={page:{url:null,priority:{label:"0.7",value:"0.7"},frequency:{label:$("weekly","all-in-one-seo-pack"),value:"weekly"},lastModified:I.now().toFormat("MM/dd/yyyy")}},ee={setup(){return{optionsStore:M(),rootStore:F()}},emits:["cancel","process-page-add-and-update","process-page-edit"],mixins:[T],components:{BaseDatePicker:Y,CoreAlert:B,CoreModal:O,SvgCircleCheck:W,SvgCircleClose:J,SvgCircleExclamation:H},data(){return{csvFileImage:Z,priorityOptionsValues:[],frequencyOptionsValues:[],filename:"",file:"",loading:!1,showImportModal:!1,page:S(D.page),errors:{url:{invalid:null,exists:null},upload:!1},isLoading:!1,strings:{placeholder:this.$t.sprintf(this.$t.__("Enter a page URL, e.g. %1$s",this.$td),`${this.rootStore.aioseo.urls.home}/new-page`),pageUrl:this.$t.__("Page URL",this.$td),priority:this.$t.__("Priority",this.$td),frequency:this.$t.__("Frequency",this.$td),lastModified:this.$t.__("Last Modified",this.$td),addPage:this.$t.__("Add Page",this.$td),importFromCSV:this.$t.__("Import from CSV",this.$td),saveChanges:this.$t.__("Update Page",this.$td),cancel:this.$t.__("Cancel",this.$td),importAdditionalPages:this.$t.__("Import Additional Pages",this.$td),modalDescription:this.$t.sprintf(this.$t.__("You can import additional page URL's to your sitemap using a CSV file. The following 4 columns are required: %1$sPage URL, Priority, Frequency, Date Modified.%2$s",this.$td),"<strong>","</strong>"),downloadSampleFile:this.$t.__("Download Sample CSV File",this.$td),imgAltText:this.$t.__("CSV example file",this.$td),fileUploadPlaceholder:this.$t.__("Import from CSV file...",this.$td),chooseAFile:this.$t.__("Choose a File",this.$td),import:this.$t.__("Import",this.$td),csvFileTypeRequired:this.$t.__("The file that you've currently selected is not a CSV file.",this.$td),invalidCSV:this.$t.__("Unable to read CSV file. Please check if the file is valid and try again.",this.$td),errors:{url:{invalid:this.$t.__("Please enter a valid URL.",this.$td),exists:this.$t.__("URL already exists.",this.$td)}}},sampleCSVData:`Page URL,Priority,Frequency,Date Modified\r
https://aioseo.com/pricing/,0.0,weekly,01/30/2022`}},methods:{getAssetUrl:z,updateAdditionalPages(t){this.optionsStore.options.sitemap.general.additionalPages.pages=t},addPage(){const t=this.optionsStore.options.sitemap.general.additionalPages.pages;t.unshift(JSON.stringify(this.page)),this.updateAdditionalPages(t),this.page=S(D.page),this.errors.url.invalid=null,this.$emit("process-page-add-and-update")},editPage(t,s){if(this.page[t]=s,!V(this.page.url)&&this.page.url){this.errors.url.invalid=!0;return}if(this.pageExists(this.page.url)&&!this.inTable){this.errors.url.invalid=!1,this.errors.url.exists=!0;return}this.errors.url.invalid=!1,this.errors.url.exists=!1,this.inTable&&this.$emit("process-page-edit",this.page)},updatePage(t){const s=this.optionsStore.options.sitemap.general.additionalPages.pages;s[this.getPaginatedIndex(t)]=JSON.stringify(this.page),this.updateAdditionalPages(s),this.$emit("process-page-add-and-update"),this.$emit("cancel",!0)},pageExists(t){return this.getParsedPages().some(({url:s})=>s===t)},reset(){this.errors.upload=!1,this.filename="",this.file=""},triggerFileUpload(){this.reset(),this.$refs.file.$el.querySelector("input").focus(),this.$refs.file.$el.querySelector("input").click()},async submitFile(){this.loading=!0;try{const t=await this.parseFile(),s=this.optionsStore.options.sitemap.general.additionalPages.pages;t.forEach(o=>{const m=this.prepareAdditionalPage(o);m&&s.unshift(JSON.stringify(m))}),this.updateAdditionalPages(s)}catch{this.errors.upload=this.strings.invalidCSV}this.reset(),this.page=S(D.page),this.showImportModal=!1,this.loading=!1},prepareAdditionalPage(t){const s=S(D.page);return t.forEach(o=>{try{if(V(o)&&!this.pageExists(o)){s.url=o;return}if(this.priorityOptionsValues.includes(o)){s.priority.label=s.priority.value=o;return}if(this.frequencyOptionsValues.includes(o.toLowerCase())){s.frequency.label=s.frequency.value=o.toLowerCase();return}isNaN(T.parse(o))||(s.lastModified=o)}catch{}}),s.url!==null?s:!1},parseFile(){const t=new FileReader;return t.readAsText(this.file),new Promise((s,o)=>{t.onerror=()=>{t.abort(),o(new DOMException)},t.onload=()=>{const e=t.result.split(/[\r\n]/).map(i=>i.split(","));s(e)}})},handleFileUpload(){this.file=this.$refs.file.$el.querySelector("input").files[0],this.file&&(this.filename=this.file.name,this.file.type!=="text/csv"&&(this.errors.upload=this.strings.csvFileTypeRequired))},closeImportModal(){this.reset(),this.showImportModal=!1},isDisabledDate(t){return t>I.now()}},computed:{importValidated(){return this.file.type==="text/csv"}},props:{inTable:Boolean,row:Object,index:Number,getPaginatedIndex:Function,getParsedPages:Function,rowPage:{type:Object,default(){return{}}},editedPage:{type:Object,default(){return{}}}},mounted(){this.priorityOptionsValues=this.$constants.PRIORITY_OPTIONS.map(t=>t.value),this.frequencyOptionsValues=this.$constants.FREQUENCY_OPTIONS.map(t=>t.value),this.inTable&&(this.page=this.rowPage!==this.editedPage?this.rowPage:this.editedPage)}},te={key:0,class:"page-input-header"},se={class:"page-url"},ie={class:"page-priority"},oe={class:"page-frequency"},ae={class:"page-last-modified"},le={class:"page-row"},re={class:"page-url"},ne={class:"append-icon"},de={class:"page-priority"},ue={class:"page-frequency"},ge={class:"page-last-modified"},pe={class:"page-input-footer"},ce={key:0},he={key:1},me={class:"aioseo-modal-body import-additional-pages"},_e={class:"alert"},fe=["innerHTML"],Pe=["href"],ye=["src","alt"],be={class:"file-upload"};function ve(t,s,o,m,e,i){const w=u("svg-circle-close"),k=u("svg-circle-check"),A=u("svg-circle-exclamation"),P=u("base-input"),y=u("core-alert"),b=u("base-select"),L=u("base-date-picker"),_=u("base-button"),p=u("core-modal");return c(),v("div",{class:R(["additional-pages-input",{"in-table":o.inTable}])},[o.inTable?h("",!0):(c(),v("div",te,[a("div",se,l(e.strings.pageUrl),1),a("div",ie,l(e.strings.priority),1),a("div",oe,l(e.strings.frequency),1),a("div",ae,l(e.strings.lastModified),1)])),a("div",le,[a("div",re,[n(P,{modelValue:e.page.url,onKeyup:s[0]||(s[0]=d=>i.editPage("url",d.target.value)),size:"medium",placeholder:e.strings.placeholder,class:R(this.errors.url.invalid&&"aioseo-error"||this.page.url&&this.errors.url.exists&&"aioseo-warning"||this.page.url&&"aioseo-active")},{"append-icon":r(()=>[a("div",ne,[e.isLoading?h("",!0):(c(),v(j,{key:0},[e.errors.url.invalid?(c(),f(w,{key:0})):h("",!0),!e.errors.url.invalid&&!e.errors.url.exists&&e.page.url?(c(),f(k,{key:1})):h("",!0),e.errors.url.exists&&e.page.url?(c(),f(A,{key:2})):h("",!0)],64))])]),_:1},8,["modelValue","placeholder","class"]),this.errors.url.invalid?(c(),f(y,{key:0,type:"red",size:"small"},{default:r(()=>[g(l(e.strings.errors.url.invalid),1)]),_:1})):h("",!0),this.errors.url.exists?(c(),f(y,{key:1,type:"yellow",size:"small"},{default:r(()=>[g(l(e.strings.errors.url.exists),1)]),_:1})):h("",!0)]),a("div",de,[n(b,{size:"medium",modelValue:e.page.priority,"onUpdate:modelValue":s[1]||(s[1]=d=>i.editPage("priority",d)),options:t.$constants.PRIORITY_OPTIONS},null,8,["modelValue","options"])]),a("div",ue,[n(b,{size:"medium",modelValue:e.page.frequency,"onUpdate:modelValue":s[2]||(s[2]=d=>i.editPage("frequency",d)),options:t.$constants.FREQUENCY_OPTIONS},null,8,["modelValue","options"])]),a("div",ge,[n(L,{type:"datetime",size:"large",dateFormat:"m/d/Y H:i:s",defaultValue:t.dateStringToLocalJs(e.page.lastModified),onChange:s[3]||(s[3]=d=>i.editPage("lastModified",t.dateJsToLocal(d,"MM/dd/yyyy HH:mm:ss"))),isDisabledDate:i.isDisabledDate},null,8,["defaultValue","isDisabledDate"])])]),a("div",pe,[o.inTable?(c(),v("div",ce,[n(_,{type:"blue",size:"medium",onClick:s[4]||(s[4]=d=>i.updatePage(o.index)),disabled:e.errors.url.invalid||e.errors.url.exists||!e.page.url},{default:r(()=>[g(l(e.strings.saveChanges),1)]),_:1},8,["disabled"]),n(_,{type:"gray",size:"medium",onClick:s[5]||(s[5]=d=>t.$emit("cancel",!0))},{default:r(()=>[g(l(e.strings.cancel),1)]),_:1})])):h("",!0),o.inTable?h("",!0):(c(),v("div",he,[n(_,{type:"blue",size:"small-table",onClick:i.addPage,disabled:e.errors.url.invalid||e.errors.url.exists||!e.page.url},{default:r(()=>[g(l(e.strings.addPage),1)]),_:1},8,["onClick","disabled"]),n(_,{type:"black",size:"small-table",onClick:s[6]||(s[6]=d=>e.showImportModal=!0)},{default:r(()=>[g(l(e.strings.importFromCSV),1)]),_:1})]))]),n(p,{show:e.showImportModal,onClose:i.closeImportModal,classes:["aioseo-add-additional-pages-modal"]},{headerTitle:r(()=>[g(l(e.strings.importAdditionalPages),1)]),body:r(()=>[a("div",me,[a("div",_e,[a("p",{innerHTML:e.strings.modalDescription},null,8,fe),a("a",{download:"aioseo-additional-pages-sample.csv",href:"data:text/csv;charset=utf-8,"+e.sampleCSVData},l(e.strings.downloadSampleFile),9,Pe)]),a("img",{src:i.getAssetUrl(e.csvFileImage),alt:e.strings.imgAltText},null,8,ye),e.errors.upload?(c(),f(y,{key:0,type:"red",class:"import-error"},{default:r(()=>[n(w),g(" "+l(e.errors.upload),1)]),_:1})):h("",!0),a("div",be,[n(P,{modelValue:e.filename,"onUpdate:modelValue":s[7]||(s[7]=d=>e.filename=d),size:"medium",onFocus:i.triggerFileUpload,placeholder:e.strings.fileUploadPlaceholder,class:R({"aioseo-error":e.errors.upload})},null,8,["modelValue","onFocus","placeholder","class"]),n(_,{type:"black",size:"medium",onClick:i.triggerFileUpload},{default:r(()=>[g(l(e.strings.chooseAFile),1)]),_:1},8,["onClick"])]),n(P,{type:"file",value:e.file,"onUpdate:modelValue":i.handleFileUpload,ref:"file"},null,8,["value","onUpdate:modelValue"]),n(_,{type:"blue",size:"medium",class:"import",onClick:i.submitFile,disabled:!e.file||!i.importValidated,loading:e.loading},{default:r(()=>[g(l(e.strings.import),1)]),_:1},8,["onClick","disabled","loading"])])]),_:1},8,["show","onClose"])],2)}const we=q(ee,[["render",ve]]),ke={setup(){return{optionsStore:M(),rootStore:F(),settingsStore:N()}},mixins:[E],components:{AddAdditionalPage:we,CoreWpTable:K,CoreCard:Q,CoreTooltip:G,CoreModal:O,SvgTrash:X},data(){return{tableId:"sitemap-additional-pages",changeItemsPerPageSlug:"sitemapAdditionalPages",page:{},editedPage:{},resultsPerPage:10,searchResults:null,deletingRow:!1,activeRow:-1,showDeleteModal:!1,shouldDeleteURL:null,selectedRows:null,bulkOptions:[{label:this.$t.__("Delete",this.$td),value:"delete"}],strings:{searchUrls:this.$t.__("Search URLs",this.$td),edit:this.$t.__("Edit",this.$td),delete:this.$t.__("Delete",this.$td),additionalPages:this.$t.__("Additional Pages",this.$td),additionalPagesTooltip:this.$t.__("You can use this section to add any URLs to your sitemap which aren't a part of your WordPress installation. For example, if you have a contact form that you would like to be included on your sitemap you can enter the information manually.",this.$td),areYouSureDeleteLink:this.$t.__("Are you sure you want to delete this page?",this.$td),areYouSureDeleteLinks:this.$t.__("Are you sure you want to delete these pages?",this.$td),thisWillRemoveLink:this.$t.__("This will permanently remove this page from the additional pages sitemap.",this.$td),thisWillRemoveLinks:this.$t.__("This will permanently remove the selected pages from the additional pages sitemap.",this.$td),yesDeleteLink:this.$t.__("Delete Page",this.$td),yesDeleteLinks:this.$t.__("Delete Selected Pages",this.$td),noChangedMind:this.$t.__("No, I changed my mind",this.$td)}}},computed:{currentPages(){return this.searchResults||this.getParsedPages()},rows(){const t=this.currentPages.map(o=>({url:o.url,priority:o.priority&&o.priority.label?o.priority.label:"",frequency:o.frequency&&o.frequency.label?o.frequency.label:"",lastModified:o.lastModified})),s=this.pageNumber===1?0:(this.pageNumber-1)*this.resultsPerPage;return t.slice(s,s+this.resultsPerPage)},totals(){return{page:1,pages:Math.ceil(this.currentPages.length/this.resultsPerPage),total:this.currentPages.length}},columns(){return[{slug:"url",label:this.$t.__("Page URL",this.$td)},{slug:"priority",label:this.$t.__("Priority",this.$td),width:"90px"},{slug:"frequency",label:this.$t.__("Frequency",this.$td),width:"90px"},{slug:"lastModified",label:this.$t.__("Last Modified",this.$td),width:"180px"},{slug:"page-actions",label:"",width:"40px"}]},areYouSureDeleteLink(){return Array.isArray(this.shouldDeleteURL)?this.strings.areYouSureDeleteLinks:this.strings.areYouSureDeleteLink},yesDeleteLink(){return Array.isArray(this.shouldDeleteURL)?this.strings.yesDeleteLinks:this.strings.yesDeleteLink},thisWillRemoveLink(){return Array.isArray(this.shouldDeleteURL)?this.strings.thisWillRemoveLinks:this.strings.thisWillRemoveLink}},methods:{fetchData(){return Promise.resolve()},processSearch(t){if(this.$refs.table.editRow(null),this.pageNumber=1,t===""){this.searchResults=null,this.searchTerm=null;return}t||(t=this.searchTerm),this.wpTableLoading=!0,this.searchResults=this.getParsedPages().filter(s=>s.url.includes(t)),this.searchTerm=t,this.wpTableLoading=!1},processBulkAction({action:t,selectedRows:s}){s.length&&t==="delete"&&(this.showDeleteModal=!0,this.shouldDeleteURL=s)},processPageDelete(){this.wpTableLoading=!0,Array.isArray(this.shouldDeleteURL)?this.shouldDeleteURL.forEach(t=>{this.deletePage(t)}):this.deletePage(this.shouldDeleteURL),this.showDeleteModal=!1,this.wpTableLoading=!1},deletePage(t){const s=[];this.getParsedPages().forEach(o=>{o.url!==t&&s.push(JSON.stringify(o))}),this.optionsStore.options.sitemap.general.additionalPages.pages=s,this.searchResults&&this.processSearch()},maybeProcessDelete(t){this.showDeleteModal=!0,this.shouldDeleteURL=t},processPageEdit(t){this.editedPage=t},processPageAddAndUpdate(){this.processSearch(this.searchTerm||"")},rowPage(t){return this.searchResults?this.searchResults[this.getPaginatedIndex(t)]:this.getParsedPages()[this.getPaginatedIndex(t)]},getPaginatedIndex(t){return(this.pageNumber-1)*this.resultsPerPage+t},getParsedPages(){return this.optionsStore.options.sitemap.general.additionalPages.pages.map(t=>JSON.parse(t))}}},Se={class:"aioseo-additional-pages"},Ce=["onClick"],De={class:"row-actions"},Ae=["onClick"],Le=["onClick"],Ue={class:"page-actions"},Re={class:"aioseo-modal-body delete"},xe={class:"reset-description"};function Te(t,s,o,m,e,i){const w=u("base-toggle"),k=u("add-additional-page"),A=u("svg-trash"),P=u("core-tooltip"),y=u("core-wp-table"),b=u("base-button"),L=u("core-modal"),_=u("core-card");return m.optionsStore.options.sitemap.general.enable?(c(),f(_,{key:0,slug:"additionalPages",toggles:m.optionsStore.options.sitemap.general.additionalPages.enable},{header:r(()=>[n(w,{modelValue:m.optionsStore.options.sitemap.general.additionalPages.enable,"onUpdate:modelValue":s[0]||(s[0]=p=>m.optionsStore.options.sitemap.general.additionalPages.enable=p)},null,8,["modelValue"]),a("span",null,l(e.strings.additionalPages),1)]),tooltip:r(()=>[g(l(e.strings.additionalPagesTooltip),1)]),default:r(()=>[a("div",Se,[n(k,{getPaginatedIndex:i.getPaginatedIndex,getParsedPages:i.getParsedPages,onProcessPageAddAndUpdate:i.processPageAddAndUpdate},null,8,["getPaginatedIndex","getParsedPages","onProcessPageAddAndUpdate"]),(c(),f(y,{ref:"table",class:"additional-pages-table",id:e.tableId,"bulk-options":e.bulkOptions,columns:i.columns,"initial-items-per-page":m.settingsStore.settings.tablePagination.sitemapAdditionalPages,"initial-page-number":t.pageNumber,key:t.wpTableKey,loading:t.wpTableLoading,rows:i.rows,"search-label":e.strings.searchUrls,"show-search":!0,totals:i.totals,"show-items-per-page":"",onPaginate:t.processPagination,onProcessBulkAction:i.processBulkAction,onProcessChangeItemsPerPage:t.processChangeItemsPerPage,onSearch:i.processSearch,onSortColumn:t.processSort},{url:r(({row:p,index:d,editRow:U})=>[a("a",{class:"post-title",href:"#",onClick:C(x=>U(d),["prevent","stop"])},l(p.url),9,Ce),a("div",De,[a("span",null,[a("a",{class:"edit",href:"#",onClick:C(x=>U(d),["prevent","stop"])},[a("span",null,l(e.strings.edit),1)],8,Ae),g(" | ")]),a("span",null,[a("a",{class:"delete",href:"#",onClick:C(x=>i.maybeProcessDelete(p.url),["prevent","stop"])},[a("span",null,l(e.strings.delete),1)],8,Le)])])]),"edit-row":r(({index:p,editRow:d})=>[n(k,{index:p,rowPage:i.rowPage(p),editedPage:e.editedPage,getPaginatedIndex:i.getPaginatedIndex,getParsedPages:i.getParsedPages,inTable:"",onCancel:U=>d(null),onProcessPageAddAndUpdate:i.processPageAddAndUpdate,onProcessPageEdit:i.processPageEdit},null,8,["index","rowPage","editedPage","getPaginatedIndex","getParsedPages","onCancel","onProcessPageAddAndUpdate","onProcessPageEdit"])]),"page-actions":r(({row:p})=>[a("div",Ue,[n(P,{type:"action"},{tooltip:r(()=>[g(l(e.strings.delete),1)]),default:r(()=>[n(A,{onClick:d=>i.maybeProcessDelete(p.url)},null,8,["onClick"])]),_:2},1024)])]),_:1},8,["id","bulk-options","columns","initial-items-per-page","initial-page-number","loading","rows","search-label","totals","onPaginate","onProcessBulkAction","onProcessChangeItemsPerPage","onSearch","onSortColumn"])),n(L,{show:e.showDeleteModal,"no-header":"",onClose:s[3]||(s[3]=p=>e.showDeleteModal=!1),classes:["aioseo-additional-pages-modal"]},{body:r(()=>[a("div",Re,[a("button",{class:"close",onClick:s[1]||(s[1]=C(p=>e.showDeleteModal=!1,["stop"]))}),a("h3",null,l(i.areYouSureDeleteLink),1),a("div",xe,l(e.strings.thisWillRemoveLink),1),n(b,{type:"blue",size:"medium",onClick:i.processPageDelete,loading:e.deletingRow},{default:r(()=>[g(l(i.yesDeleteLink),1)]),_:1},8,["onClick","loading"]),n(b,{type:"gray",size:"medium",onClick:s[2]||(s[2]=p=>e.showDeleteModal=!1)},{default:r(()=>[g(l(e.strings.noChangedMind),1)]),_:1})])]),_:1},8,["show"])])]),_:1},8,["toggles"])):h("",!0)}const ot=q(ke,[["render",Te]]);export{ot as default};
