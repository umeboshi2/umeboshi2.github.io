(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{185:function(t,e,n){var i,r,o,a,s,l,u,d,c,h,p,m,g,f,v,y;n(4),i=n(1),d=n(3),v=n(2),g=n(48),o=n(84).default,n(51).default,c=n(62).default,f=n(13).default,r=n(57).default,h=n(70),u=i.Radio.channel("global"),i.Radio.channel("messages"),p=".show-list",m=v.renderable(function(){return console.log("SHOW ME"),v.div(".listview-header",function(){return v.text("TV Shows")}),v.nav(".paginate-bar"),v.button(".flat-list.btn.btn-info","Show flat list"),v.div(p)}),s=function(){class t extends d.View{showRole(t){return t.preventDefault(),f(`#tvmaze/shows/view/${this.model.id}`)}_show_modal(t,e){var n;return(n=u.request("main:app:object").getView().getRegion("modal")).backdrop=e,n.show(t)}deleteItem(){var t;return t=new r({model:this.model}),this._show_modal(t,!0)}}return t.prototype.template=h,t.prototype.ui={item:".show-item",link:"a",deleteItem:".delete-item"},t.prototype.events={"click @ui.link":"showRole","click @ui.deleteItem":"deleteItem"},t}.call(this),a=function(){class t extends d.CollectionView{}return t.prototype.childView=s,t}.call(this),l=function(){class t extends d.View{ui(){return{header:".listview-header",itemList:p,flatListButton:".flat-list",paginateBar:".paginate-bar"}}onRender(){var t,e;return e=new a({collection:this.collection}),this.showChildView("itemList",e),t=new c({collection:this.collection}),this.showChildView("paginateBar",t)}onBeforeDestroy(){return this.collection.off("pageable:state:change")}showFlatList(){return f("#tvmaze/shows/flat")}}return t.prototype.template=m,t.prototype.options={listContainer:p},t.prototype.regions={paginateBar:"@ui.paginateBar",itemList:"@ui.itemList"},t.prototype.events={"click @ui.flatListButton":"showFlatList"},t.prototype.behaviors={HasMasonryView:{behaviorClass:o,listContainer:p,hasPageableCollection:!0,masonryOptions:{itemSelector:".show-item",isInitLayout:!1,horizontalOrder:!0,columnWidth:100,stagger:30}}},t}.call(this),y=v.renderable(function(t){return v.div(".row.listview-list-entry",function(){return v.raw(g(`# ${t.appName} started.`))})}),function(){class t extends d.View{}return t.prototype.template=y,t.prototype.templateContext={appName:"tvmaze"},t}.call(this),t.exports=l},51:function(t,e,n){"use strict";n.r(e);var i=n(2),r=n.n(i);e.default=r.a.renderable(function(t="5x"){return r.a.span(`.fa-stack.fa-${t}`,function(){return r.a.i(".fa.fa-image.fa-stack-1x"),r.a.i(".fa.fa-ban.fa-stack-2x.text-danger")})})},52:function(t,e,n){var i,r;
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
!function(o,a){"use strict";i=[n(64)],void 0===(r=function(t){return function(t,e){var n=t.jQuery,i=t.console;function r(t,e){for(var n in e)t[n]=e[n];return t}var o=Array.prototype.slice;function a(t,e,s){if(!(this instanceof a))return new a(t,e,s);var l=t;"string"==typeof t&&(l=document.querySelectorAll(t)),l?(this.elements=function(t){if(Array.isArray(t))return t;if("object"==typeof t&&"number"==typeof t.length)return o.call(t);return[t]}(l),this.options=r({},this.options),"function"==typeof e?s=e:r(this.options,e),s&&this.on("always",s),this.getImages(),n&&(this.jqDeferred=new n.Deferred),setTimeout(this.check.bind(this))):i.error("Bad element for imagesLoaded "+(l||t))}a.prototype=Object.create(e.prototype),a.prototype.options={},a.prototype.getImages=function(){this.images=[],this.elements.forEach(this.addElementImages,this)},a.prototype.addElementImages=function(t){"IMG"==t.nodeName&&this.addImage(t),!0===this.options.background&&this.addElementBackgroundImages(t);var e=t.nodeType;if(e&&s[e]){for(var n=t.querySelectorAll("img"),i=0;i<n.length;i++){var r=n[i];this.addImage(r)}if("string"==typeof this.options.background){var o=t.querySelectorAll(this.options.background);for(i=0;i<o.length;i++){var a=o[i];this.addElementBackgroundImages(a)}}}};var s={1:!0,9:!0,11:!0};function l(t){this.img=t}function u(t,e){this.url=t,this.element=e,this.img=new Image}return a.prototype.addElementBackgroundImages=function(t){var e=getComputedStyle(t);if(e)for(var n=/url\((['"])?(.*?)\1\)/gi,i=n.exec(e.backgroundImage);null!==i;){var r=i&&i[2];r&&this.addBackground(r,t),i=n.exec(e.backgroundImage)}},a.prototype.addImage=function(t){var e=new l(t);this.images.push(e)},a.prototype.addBackground=function(t,e){var n=new u(t,e);this.images.push(n)},a.prototype.check=function(){var t=this;function e(e,n,i){setTimeout(function(){t.progress(e,n,i)})}this.progressedCount=0,this.hasAnyBroken=!1,this.images.length?this.images.forEach(function(t){t.once("progress",e),t.check()}):this.complete()},a.prototype.progress=function(t,e,n){this.progressedCount++,this.hasAnyBroken=this.hasAnyBroken||!t.isLoaded,this.emitEvent("progress",[this,t,e]),this.jqDeferred&&this.jqDeferred.notify&&this.jqDeferred.notify(this,t),this.progressedCount==this.images.length&&this.complete(),this.options.debug&&i&&i.log("progress: "+n,t,e)},a.prototype.complete=function(){var t=this.hasAnyBroken?"fail":"done";if(this.isComplete=!0,this.emitEvent(t,[this]),this.emitEvent("always",[this]),this.jqDeferred){var e=this.hasAnyBroken?"reject":"resolve";this.jqDeferred[e](this)}},l.prototype=Object.create(e.prototype),l.prototype.check=function(){this.getIsImageComplete()?this.confirm(0!==this.img.naturalWidth,"naturalWidth"):(this.proxyImage=new Image,this.proxyImage.addEventListener("load",this),this.proxyImage.addEventListener("error",this),this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.proxyImage.src=this.img.src)},l.prototype.getIsImageComplete=function(){return this.img.complete&&this.img.naturalWidth},l.prototype.confirm=function(t,e){this.isLoaded=t,this.emitEvent("progress",[this,this.img,e])},l.prototype.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},l.prototype.onload=function(){this.confirm(!0,"onload"),this.unbindEvents()},l.prototype.onerror=function(){this.confirm(!1,"onerror"),this.unbindEvents()},l.prototype.unbindEvents=function(){this.proxyImage.removeEventListener("load",this),this.proxyImage.removeEventListener("error",this),this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},u.prototype=Object.create(l.prototype),u.prototype.check=function(){this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.img.src=this.url,this.getIsImageComplete()&&(this.confirm(0!==this.img.naturalWidth,"naturalWidth"),this.unbindEvents())},u.prototype.unbindEvents=function(){this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},u.prototype.confirm=function(t,e){this.isLoaded=t,this.emitEvent("progress",[this,this.element,e])},a.makeJQueryPlugin=function(e){(e=e||t.jQuery)&&((n=e).fn.imagesLoaded=function(t,e){return new a(this,t,e).jqDeferred.promise(n(this))})},a.makeJQueryPlugin(),a}(o,t)}.apply(e,i))||(t.exports=r)}("undefined"!=typeof window?window:this)},57:function(t,e,n){"use strict";n.r(e);var i,r,o=n(1),a=n.n(o),s=n(3),l=n.n(s),u=n(2),d=n.n(u);r=a.a.Radio.channel("messages"),i=d.a.renderable(function(t){return d.a.div(".modal-content",function(){return d.a.div(".modal-header",function(){return d.a.h3(".modal-title",function(){return d.a.text(`Do you really want to delete ${t.content.name}?`),d.a.img({src:t.content.image.medium})}),d.a.button(".close",{type:"button",data:{dismiss:"modal"}},function(){return d.a.span({"aria-hidden":"true"},function(){return d.a.raw("&times")})})}),d.a.div(".modal-body",function(){return d.a.div("#selected-children")}),d.a.div(".modal-footer",function(){return d.a.button(".confirm-delete.btn.btn-primary",{type:"button",data:{dismiss:"modal"}},function(){return d.a.i(".fa.fa-check"),d.a.text("OK")}),d.a.button(".cancel-delete.btn.btn-danger",{type:"button",data:{dismiss:"modal"}},function(){return d.a.i(".fa.fa-close"),d.a.text("Cancel")})})})}),e.default=function(){class t extends l.a.View{events(){return{"click @ui.confirmDelete":"confirmDelete"}}confirmDelete(){var t,e;return t=this.model.get("name"),(e=this.model.destroy()).done(function(){return r.request("success",`${t} deleted.`)}),e.fail(function(){return r.request("danger",`${t} NOT deleted.`)})}}return t.prototype.template=i,t.prototype.className="modal-dialog",t.prototype.ui={confirmDelete:".confirm-delete",cancelButton:".cancel-delete"},t}.call(this)},62:function(t,e,n){"use strict";n.r(e);var i=n(4),r=n.n(i),o=n(1),a=n.n(o),s=n(3),l=n.n(s),u=n(2),d=n.n(u);a.a.Radio.channel("global"),a.a.Radio.channel("messages"),e.default=function(){class t extends l.a.View{templateContext(){return{collection:this.collection}}onDomRefresh(){return this.updateNavButtons()}turnPage(t){var e;return t.preventDefault(),e=r()(t.target).attr("data-pagenumber"),console.log("pageNumber",e),this.collection.getPage(Number(e)),this.updateNavButtons()}updateNavButtons(){var t,e,n,i;return i=this.collection.state,n=this.ui.prevButton.parent(),i.currentPage===i.firstPage?n.hasClass("disabled")||n.addClass("disabled"):n.hasClass("disabled")&&n.removeClass("disabled"),e=this.ui.nextButton.parent(),i.currentPage===i.lastPage?(console.log("On last page"),e.hasClass("disabled")||e.addClass("disabled")):e.addClass("disabled")&&e.removeClass("disabled"),this.ui.numberedPage.parent().removeClass("active"),this.ui.numberedPage.removeClass("text-white"),this.ui.numberedPage.addClass("text-dark"),(t=r()(`[data-pagenumber="${i.currentPage}"]`)).parent().addClass("active"),t.removeClass("text-dark"),t.addClass("text-white")}getAnotherPage(t){var e,n;if(e=(n=this.collection.state).currentPage===n.lastPage,"prev"===t&&n.currentPage)this.collection.getPreviousPage();else{if("next"!==t||e)throw new Error(`bad direction '${t}'`);this.collection.getNextPage()}return this.updateNavButtons()}getPreviousPage(){return this.getAnotherPage("prev")}getNextPage(){return this.getAnotherPage("next")}}return t.prototype.tagName="ul",t.prototype.className="pagination",t.prototype.template=d.a.renderable(function(t){var e,n,i,r,o,a,s;for((s=t.collection.state).totalPages,e=s.firstPage,i=s.lastPage,d.a.li(".page-item",function(){return d.a.a(".prev.page-link.bg-body-d5",function(){return d.a.i(".fa.fa-arrow-left")})}),r=n=o=e,a=i;o<=a?n<=a:n>=a;r=o<=a?++n:--n)d.a.li(".page-item",function(){return d.a.a(".numbered-page.page-link.bg-body-d5.text-dark",{href:"#",data:{pageNumber:r}},r)});return d.a.li(".page-item",function(){return d.a.a(".next.page-link.bg-body-d5",function(){return d.a.i(".fa.fa-arrow-right")})})}),t.prototype.ui={numberedPage:".numbered-page",prevButton:".prev",nextButton:".next"},t.prototype.events={"click @ui.numberedPage":"turnPage","click @ui.prevButton":"getPreviousPage","click @ui.nextButton":"getNextPage"},t}.call(this)},70:function(t,e,n){var i,r,o,a,s;s=n(2),n(48),a=n(51).default,r="width:20%;border-style:solid;border-width:3px",i="col-sm-3.bg-body-d5",o=s.renderable(function(t){var e;return r=t.divStyle||r,i=t.cardClasses||i,e=`#tvmaze/view/show/${t.id}`,".btn.btn-sm",s.div(`.show-item.card.${i}`,{style:r},function(){return s.div(".card-header",function(){var e;return s.strong(".card-title",null!=t&&null!=(e=t.content)?e.name:void 0)}),s.div(".card-block",function(){return s.a({href:e},function(){var e,n,i,r;return(null!=(e=t.content)&&null!=(n=e.image)?n.medium:void 0)?s.img(".card-img-bottom",{src:null!=(i=t.content)&&null!=(r=i.image)?r.medium:void 0}):a("4x")})})})}),t.exports=o},84:function(t,e,n){"use strict";n.r(e);n(1);var i,r=n(3),o=n.n(r),a=n(50),s=n.n(a),l=n(52),u=n.n(l);i=function(){class t extends o.a.Behavior{ui(){return{list:this.getOption("listContainer")}}setMasonry(){var t,e;return t=this.getOption("listContainer"),e=this.getOption("masonryOptions"),this.view.masonry=new s.a(t,e)}setMasonryLayout(){var t,e;return e=this.getOption("masonryOptions"),t=this.$(e.itemSelector),u()(t,()=>setTimeout(()=>(this.view.masonry.reloadItems(),this.view.masonry.layout()),700))}onBeforeDestroy(){return this.view.masonry.destroy()}onDomRefresh(){var t;if(this.setMasonry(),this.setMasonryLayout(),null!=(t=this.view)?t.afterDomRefresh:void 0)return this.view.afterDomRefresh()}collectionEvents(){var t;return t={},this.getOption("hasPageableCollection")&&(t["pageable:state:change"]="setMasonryLayout"),t}}return t.prototype.options={listContainer:".list-container",hasPageableCollection:!1,masonryOptions:{gutter:1,isInitLayout:!1,itemSelector:".item",columnWidth:10,horizontalOrder:!0}},t.prototype.regions={list:"@ui.list"},t}.call(this),e.default=i}}]);