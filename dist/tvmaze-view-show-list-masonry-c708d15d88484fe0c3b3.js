(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{200:function(e,t,n){var i,r,o,a,s,l,d,u,c,h,p,m,g,f,y,v;n(4),i=n(2),u=n(3),y=n(0),g=n(44),o=n(80).default,n(46).default,c=n(50).default,f=n(14).default,r=n(56).default,h=n(69),d=i.Radio.channel("global"),i.Radio.channel("messages"),p=".show-list",m=y.renderable(function(){return console.log("SHOW ME"),y.div(".listview-header",function(){return y.text("TV Shows")}),y.nav(".paginate-bar"),y.button(".flat-list.btn.btn-info","Show flat list"),y.div(p)}),s=function(){class e extends u.View{showRole(e){return e.preventDefault(),f(`#tvmaze/shows/view/${this.model.id}`)}_show_modal(e,t){var n;return(n=d.request("main:app:object").getView().getRegion("modal")).backdrop=t,n.show(e)}deleteItem(){var e;return e=new r({model:this.model}),this._show_modal(e,!0)}}return e.prototype.template=h,e.prototype.ui={item:".show-item",link:"a",deleteItem:".delete-item"},e.prototype.events={"click @ui.link":"showRole","click @ui.deleteItem":"deleteItem"},e}.call(this),a=function(){class e extends u.CollectionView{}return e.prototype.childView=s,e}.call(this),l=function(){class e extends u.View{ui(){return{header:".listview-header",itemList:p,flatListButton:".flat-list",paginateBar:".paginate-bar"}}onRender(){var e,t;return t=new a({collection:this.collection}),this.showChildView("itemList",t),e=new c({collection:this.collection}),this.showChildView("paginateBar",e)}onBeforeDestroy(){return this.collection.off("pageable:state:change")}showFlatList(){return f("#tvmaze/shows/flat")}}return e.prototype.template=m,e.prototype.options={listContainer:p},e.prototype.regions={paginateBar:"@ui.paginateBar",itemList:"@ui.itemList"},e.prototype.events={"click @ui.flatListButton":"showFlatList"},e.prototype.behaviors={HasMasonryView:{behaviorClass:o,listContainer:p,hasPageableCollection:!0,masonryOptions:{itemSelector:".show-item",isInitLayout:!1,horizontalOrder:!0,columnWidth:100,stagger:30}}},e}.call(this),v=y.renderable(function(e){return y.div(".row.listview-list-entry",function(){return y.raw(g(`# ${e.appName} started.`))})}),function(){class e extends u.View{}return e.prototype.template=v,e.prototype.templateContext={appName:"tvmaze"},e}.call(this),e.exports=l},46:function(e,t,n){"use strict";n.r(t);var i=n(0),r=n.n(i);t.default=r.a.renderable(function(e="5x"){return r.a.span(`.fa-stack.fa-${e}`,function(){return r.a.i(".fa.fa-image.fa-stack-1x"),r.a.i(".fa.fa-ban.fa-stack-2x.text-danger")})})},48:function(e,t,n){var i,r;
/*!
 * imagesLoaded v4.1.4
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */
/*!
 * imagesLoaded v4.1.4
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */
!function(o,a){"use strict";i=[n(63)],void 0===(r=function(e){return function(e,t){var n=e.jQuery,i=e.console;function r(e,t){for(var n in t)e[n]=t[n];return e}var o=Array.prototype.slice;function a(e,t,s){if(!(this instanceof a))return new a(e,t,s);var l=e;"string"==typeof e&&(l=document.querySelectorAll(e)),l?(this.elements=function(e){if(Array.isArray(e))return e;if("object"==typeof e&&"number"==typeof e.length)return o.call(e);return[e]}(l),this.options=r({},this.options),"function"==typeof t?s=t:r(this.options,t),s&&this.on("always",s),this.getImages(),n&&(this.jqDeferred=new n.Deferred),setTimeout(this.check.bind(this))):i.error("Bad element for imagesLoaded "+(l||e))}a.prototype=Object.create(t.prototype),a.prototype.options={},a.prototype.getImages=function(){this.images=[],this.elements.forEach(this.addElementImages,this)},a.prototype.addElementImages=function(e){"IMG"==e.nodeName&&this.addImage(e),!0===this.options.background&&this.addElementBackgroundImages(e);var t=e.nodeType;if(t&&s[t]){for(var n=e.querySelectorAll("img"),i=0;i<n.length;i++){var r=n[i];this.addImage(r)}if("string"==typeof this.options.background){var o=e.querySelectorAll(this.options.background);for(i=0;i<o.length;i++){var a=o[i];this.addElementBackgroundImages(a)}}}};var s={1:!0,9:!0,11:!0};function l(e){this.img=e}function d(e,t){this.url=e,this.element=t,this.img=new Image}return a.prototype.addElementBackgroundImages=function(e){var t=getComputedStyle(e);if(t)for(var n=/url\((['"])?(.*?)\1\)/gi,i=n.exec(t.backgroundImage);null!==i;){var r=i&&i[2];r&&this.addBackground(r,e),i=n.exec(t.backgroundImage)}},a.prototype.addImage=function(e){var t=new l(e);this.images.push(t)},a.prototype.addBackground=function(e,t){var n=new d(e,t);this.images.push(n)},a.prototype.check=function(){var e=this;function t(t,n,i){setTimeout(function(){e.progress(t,n,i)})}this.progressedCount=0,this.hasAnyBroken=!1,this.images.length?this.images.forEach(function(e){e.once("progress",t),e.check()}):this.complete()},a.prototype.progress=function(e,t,n){this.progressedCount++,this.hasAnyBroken=this.hasAnyBroken||!e.isLoaded,this.emitEvent("progress",[this,e,t]),this.jqDeferred&&this.jqDeferred.notify&&this.jqDeferred.notify(this,e),this.progressedCount==this.images.length&&this.complete(),this.options.debug&&i&&i.log("progress: "+n,e,t)},a.prototype.complete=function(){var e=this.hasAnyBroken?"fail":"done";if(this.isComplete=!0,this.emitEvent(e,[this]),this.emitEvent("always",[this]),this.jqDeferred){var t=this.hasAnyBroken?"reject":"resolve";this.jqDeferred[t](this)}},l.prototype=Object.create(t.prototype),l.prototype.check=function(){this.getIsImageComplete()?this.confirm(0!==this.img.naturalWidth,"naturalWidth"):(this.proxyImage=new Image,this.proxyImage.addEventListener("load",this),this.proxyImage.addEventListener("error",this),this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.proxyImage.src=this.img.src)},l.prototype.getIsImageComplete=function(){return this.img.complete&&this.img.naturalWidth},l.prototype.confirm=function(e,t){this.isLoaded=e,this.emitEvent("progress",[this,this.img,t])},l.prototype.handleEvent=function(e){var t="on"+e.type;this[t]&&this[t](e)},l.prototype.onload=function(){this.confirm(!0,"onload"),this.unbindEvents()},l.prototype.onerror=function(){this.confirm(!1,"onerror"),this.unbindEvents()},l.prototype.unbindEvents=function(){this.proxyImage.removeEventListener("load",this),this.proxyImage.removeEventListener("error",this),this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},d.prototype=Object.create(l.prototype),d.prototype.check=function(){this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.img.src=this.url,this.getIsImageComplete()&&(this.confirm(0!==this.img.naturalWidth,"naturalWidth"),this.unbindEvents())},d.prototype.unbindEvents=function(){this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},d.prototype.confirm=function(e,t){this.isLoaded=e,this.emitEvent("progress",[this,this.element,t])},a.makeJQueryPlugin=function(t){(t=t||e.jQuery)&&((n=t).fn.imagesLoaded=function(e,t){return new a(this,e,t).jqDeferred.promise(n(this))})},a.makeJQueryPlugin(),a}(o,e)}.apply(t,i))||(e.exports=r)}("undefined"!=typeof window?window:this)},50:function(e,t,n){"use strict";n.r(t);var i=n(4),r=n.n(i),o=n(2),a=n.n(o),s=n(3),l=n.n(s),d=n(0),u=n.n(d),c=function(e,t){if(!(e instanceof t))throw new Error("Bound instance method accessed before binding")};a.a.Radio.channel("global"),a.a.Radio.channel("messages"),t.default=function(){class e extends l.a.View{constructor(){super(...arguments),this.keydownHandler=this.keydownHandler.bind(this)}templateContext(){return{collection:this.collection}}onDomRefresh(){return this.updateNavButtons()}turnPage(e){var t;return e.preventDefault(),t=r()(e.target).attr("data-pagenumber"),this.collection.getPage(Number(t)),this.updateNavButtons()}updateNavButtons(){var e,t,n,i;return i=this.collection.state,n=this.ui.prevButton.parent(),i.currentPage===i.firstPage?n.hasClass("disabled")||n.addClass("disabled"):n.hasClass("disabled")&&n.removeClass("disabled"),t=this.ui.nextButton.parent(),i.currentPage===i.lastPage?t.hasClass("disabled")||t.addClass("disabled"):t.addClass("disabled")&&t.removeClass("disabled"),this.ui.numberedPage.parent().removeClass("active"),this.ui.numberedPage.removeClass("text-white"),this.ui.numberedPage.addClass("text-dark"),(e=r()(`[data-pagenumber="${i.currentPage}"]`)).parent().addClass("active"),e.removeClass("text-dark"),e.addClass("text-white")}getAnotherPage(e){var t,n,i,r;if(n=(r=this.collection.state).currentPage===r.lastPage,t=r.currentPage===r.firstPage,"prev"!==e||t){if("next"!==e||n){if(n)return;throw new Error(`bad direction '${e}'`)}i=this.collection.getNextPage()}else r.currentPage!==r.firstPage&&(i=this.collection.getPreviousPage());return this.updateNavButtons(),i}getPreviousPage(){return this.getAnotherPage("prev")}getNextPage(){return this.getAnotherPage("next")}onRender(){if(this.getOption("setKeyHandler"))return this.onRenderHandleKeys()}onBeforeDestroy(){if(this.getOption("setKeyHandler"))return this.onBeforeDestroyHandleKeys()}handleKeyCommand(e){if("prev"===e||"next"===e)return this.getAnotherPage(e)}keydownHandler(t){var n,i,r,o;for(n in c(this,e),r=[],i=this.keycommands)o=i[n],t.keyCode===o?r.push(this.handleKeyCommand(n)):r.push(void 0);return r}onRenderHandleKeys(){return r()("html").keydown(this.keydownHandler)}onBeforeDestroyHandleKeys(){return r()("html").unbind("keydown",this.keydownHandler)}}return e.prototype.tagName="ul",e.prototype.className="pagination",e.prototype.template=u.a.renderable(function(e){var t,n,i,r,o,s,l;for((l=e instanceof a.a.Collection?e.state:e.collection.state).totalPages,t=l.firstPage,i=l.lastPage,u.a.li(".page-item",function(){return u.a.a(".prev.page-link.bg-body-d5",function(){return u.a.i(".fa.fa-arrow-left")})}),r=n=o=t,s=i;o<=s?n<=s:n>=s;r=o<=s?++n:--n)u.a.li(".page-item",function(){return u.a.a(".numbered-page.page-link.bg-body-d5.text-dark",{href:"#",data:{pageNumber:r}},r)});return u.a.li(".page-item",function(){return u.a.a(".next.page-link.bg-body-d5",function(){return u.a.i(".fa.fa-arrow-right")})})}),e.prototype.ui={numberedPage:".numbered-page",prevButton:".prev",nextButton:".next"},e.prototype.events={"click @ui.numberedPage":"turnPage","click @ui.prevButton":"getPreviousPage","click @ui.nextButton":"getNextPage"},e.prototype.keycommands={prev:37,next:39},e}.call(this)},56:function(e,t,n){"use strict";n.r(t);var i,r,o=n(2),a=n.n(o),s=n(3),l=n.n(s),d=n(0),u=n.n(d);r=a.a.Radio.channel("messages"),i=u.a.renderable(function(e){return u.a.div(".modal-content",function(){return u.a.div(".modal-header",function(){return u.a.h3(".modal-title",function(){return u.a.text(`Do you really want to delete ${e.content.name}?`),u.a.img({src:e.content.image.medium})}),u.a.button(".close",{type:"button",data:{dismiss:"modal"}},function(){return u.a.span({"aria-hidden":"true"},function(){return u.a.raw("&times")})})}),u.a.div(".modal-body",function(){return u.a.div("#selected-children")}),u.a.div(".modal-footer",function(){return u.a.button(".confirm-delete.btn.btn-primary",{type:"button",data:{dismiss:"modal"}},function(){return u.a.i(".fa.fa-check"),u.a.text("OK")}),u.a.button(".cancel-delete.btn.btn-danger",{type:"button",data:{dismiss:"modal"}},function(){return u.a.i(".fa.fa-close"),u.a.text("Cancel")})})})}),t.default=function(){class e extends l.a.View{events(){return{"click @ui.confirmDelete":"confirmDelete"}}confirmDelete(){var e,t;return e=this.model.get("name"),(t=this.model.destroy()).done(function(){return r.request("success",`${e} deleted.`)}),t.fail(function(){return r.request("danger",`${e} NOT deleted.`)})}}return e.prototype.template=i,e.prototype.className="modal-dialog",e.prototype.ui={confirmDelete:".confirm-delete",cancelButton:".cancel-delete"},e}.call(this)},69:function(e,t,n){var i,r,o,a,s;s=n(0),n(44),a=n(46).default,r="width:20%;border-style:solid;border-width:3px",i="col-md-3.bg-body-d5",o=s.renderable(function(e){var t;return r=e.divStyle||r,i=e.cardClasses||i,t=`#tvmaze/view/show/${e.id}`,".btn.btn-sm",s.div(`.show-item.card.${i}`,{style:r},function(){return s.div(".card-header",function(){var t;return s.strong(".card-title",null!=e&&null!=(t=e.content)?t.name:void 0)}),s.div(".card-block",function(){return s.a({href:t},function(){var t,n,i,r;return(null!=(t=e.content)&&null!=(n=t.image)?n.medium:void 0)?s.img(".card-img-bottom",{src:null!=(i=e.content)&&null!=(r=i.image)?r.medium:void 0}):a("4x")})})})}),e.exports=o},80:function(e,t,n){"use strict";n.r(t);n(2);var i,r=n(3),o=n.n(r),a=n(47),s=n.n(a),l=n(48),d=n.n(l);i=function(){class e extends o.a.Behavior{ui(){return{list:this.getOption("listContainer")}}setMasonry(){var e,t;return e=this.getOption("listContainer"),t=this.getOption("masonryOptions"),this.view.masonry=new s.a(e,t)}setMasonryLayout(){var e,t;return t=this.getOption("masonryOptions"),e=this.$(t.itemSelector),d()(e,()=>setTimeout(()=>(this.view.masonry.reloadItems(),this.view.masonry.layout()),700))}onBeforeDestroy(){return this.view.masonry.destroy()}onDomRefresh(){var e;if(this.setMasonry(),this.setMasonryLayout(),null!=(e=this.view)?e.afterDomRefresh:void 0)return this.view.afterDomRefresh()}collectionEvents(){var e;return e={},this.getOption("hasPageableCollection")&&(e["pageable:state:change"]="setMasonryLayout"),e}}return e.prototype.options={listContainer:".list-container",hasPageableCollection:!1,masonryOptions:{gutter:1,isInitLayout:!1,itemSelector:".item",columnWidth:10,horizontalOrder:!0}},e.prototype.regions={list:"@ui.list"},e}.call(this),t.default=i}}]);