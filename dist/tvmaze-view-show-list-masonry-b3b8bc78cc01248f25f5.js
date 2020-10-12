/*! For license information please see tvmaze-view-show-list-masonry-b3b8bc78cc01248f25f5.js.LICENSE */
(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{433:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,r=n(34),i=(o=r)&&o.__esModule?o:{default:o};t.default=i.default.renderable((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"5x";return i.default.span(".fa-stack.fa-"+e,(function(){return i.default.i(".fa.fa-image.fa-stack-1x"),i.default.i(".fa.fa-ban.fa-stack-2x.text-danger")}))}))},439:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=u(n(31)),i=n(2),a=n(7),s=u(n(34));function u(e){return e&&e.__esModule?e:{default:e}}var l;l=function(){var e=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments));return e.keydownHandler=e.keydownHandler.bind(e),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"options",value:function(){return{setKeyHandler:!1,barLength:15,barStopAt:7}}},{key:"templateContext",value:function(){return{collection:this.collection,barLength:this.getOption("barLength"),barStopAt:this.getOption("barStopAt")}}},{key:"onDomRefresh",value:function(){return this.updateNavButtons()}},{key:"turnPage",value:function(e){var t;return e.preventDefault(),t=(0,r.default)(e.target).attr("data-pagenumber"),this.collection.getPage(Number(t)),this.updateNavButtons()}},{key:"updateNavButtons",value:function(){var e,t,n;return n=this.collection.state,t=this.ui.prevButton.parent(),n.currentPage===n.firstPage?t.hasClass("disabled")||t.addClass("disabled"):t.hasClass("disabled")&&t.removeClass("disabled"),e=this.ui.nextButton.parent(),n.currentPage===n.lastPage?e.hasClass("disabled")||e.addClass("disabled"):e.addClass("disabled")&&e.removeClass("disabled"),this.ui.numberedPage.parent().removeClass("active"),(0,r.default)('[data-pagenumber="'+n.currentPage+'"]').parent().addClass("active")}},{key:"getAnotherPage",value:function(e){var t,n,o,r;if(n=(r=this.collection.state).currentPage===r.lastPage,t=r.currentPage===r.firstPage,"prev"!==e||t){if("next"!==e||n){if(n)return;throw new Error("bad direction '"+e+"'")}o=this.collection.getNextPage()}else r.currentPage!==r.firstPage&&(o=this.collection.getPreviousPage());return this.updateNavButtons(),o}},{key:"getPreviousPage",value:function(){return this.getAnotherPage("prev")}},{key:"getNextPage",value:function(){return this.getAnotherPage("next")}},{key:"onRender",value:function(){if(this.getOption("setKeyHandler"))return this.onRenderHandleKeys()}},{key:"onBeforeDestroy",value:function(){if(this.getOption("setKeyHandler"))return this.onBeforeDestroyHandleKeys()}},{key:"handleKeyCommand",value:function(e){if("prev"===e||"next"===e)return this.getAnotherPage(e)}},{key:"keydownHandler",value:function(e){var n,o,r,i;for(n in function(e,t){if(!(e instanceof t))throw new Error("Bound instance method accessed before binding")}(this,t),r=[],o=this.keycommands)i=o[n],e.keyCode===i?r.push(this.handleKeyCommand(n)):r.push(void 0);return r}},{key:"onRenderHandleKeys",value:function(){return(0,r.default)("html").keydown(this.keydownHandler)}},{key:"onBeforeDestroyHandleKeys",value:function(){return(0,r.default)("html").unbind("keydown",this.keydownHandler)}}]),t}(a.View);return e.prototype.tagName="ul",e.prototype.className="pagination",e.prototype.template=s.default.renderable((function(e){var t,n,o,r,a,u,l,c,f,d,p;for(o=(d=e instanceof i.Collection?e.state:e.collection.state).firstPage,t=!1,(a=d.lastPage)>e.barLength&&(t=!0,p=e.barStopAt,f=a-e.barStopAt),s.default.li(".page-item",(function(){return s.default.a(".prev.page-link",(function(){return s.default.i(".fa.fa-arrow-left")}))})),n=!1,u=r=l=o,c=a;l<=c?r<=c:r>=c;u=l<=c?++r:--r)t&&u>=p&&u<=f?n||(n=!0,s.default.li(".page-item",(function(){return s.default.a(".ellipsis-page.page-link","...")}))):s.default.li(".page-item",(function(){return s.default.a(".numbered-page.page-link",{href:"#",data:{pageNumber:u}},u)}));return s.default.li(".page-item",(function(){return s.default.a(".next.page-link",(function(){return s.default.i(".fa.fa-arrow-right")}))}))})),e.prototype.ui={numberedPage:".numbered-page",prevButton:".prev",nextButton:".next"},e.prototype.events={"click @ui.numberedPage":"turnPage","click @ui.prevButton":"getPreviousPage","click @ui.nextButton":"getNextPage"},e.prototype.keycommands={prev:37,next:39},e}.call(void 0),t.default=l},588:function(e,t,n){var o,r;!function(i,a){"use strict";o=[n(602)],void 0===(r=function(e){return function(e,t){var n=e.jQuery,o=e.console;function r(e,t){for(var n in t)e[n]=t[n];return e}var i=Array.prototype.slice;function a(e,t,s){if(!(this instanceof a))return new a(e,t,s);var u,l=e;("string"==typeof e&&(l=document.querySelectorAll(e)),l)?(this.elements=(u=l,Array.isArray(u)?u:"object"==typeof u&&"number"==typeof u.length?i.call(u):[u]),this.options=r({},this.options),"function"==typeof t?s=t:r(this.options,t),s&&this.on("always",s),this.getImages(),n&&(this.jqDeferred=new n.Deferred),setTimeout(this.check.bind(this))):o.error("Bad element for imagesLoaded "+(l||e))}a.prototype=Object.create(t.prototype),a.prototype.options={},a.prototype.getImages=function(){this.images=[],this.elements.forEach(this.addElementImages,this)},a.prototype.addElementImages=function(e){"IMG"==e.nodeName&&this.addImage(e),!0===this.options.background&&this.addElementBackgroundImages(e);var t=e.nodeType;if(t&&s[t]){for(var n=e.querySelectorAll("img"),o=0;o<n.length;o++){var r=n[o];this.addImage(r)}if("string"==typeof this.options.background){var i=e.querySelectorAll(this.options.background);for(o=0;o<i.length;o++){var a=i[o];this.addElementBackgroundImages(a)}}}};var s={1:!0,9:!0,11:!0};function u(e){this.img=e}function l(e,t){this.url=e,this.element=t,this.img=new Image}return a.prototype.addElementBackgroundImages=function(e){var t=getComputedStyle(e);if(t)for(var n=/url\((['"])?(.*?)\1\)/gi,o=n.exec(t.backgroundImage);null!==o;){var r=o&&o[2];r&&this.addBackground(r,e),o=n.exec(t.backgroundImage)}},a.prototype.addImage=function(e){var t=new u(e);this.images.push(t)},a.prototype.addBackground=function(e,t){var n=new l(e,t);this.images.push(n)},a.prototype.check=function(){var e=this;function t(t,n,o){setTimeout((function(){e.progress(t,n,o)}))}this.progressedCount=0,this.hasAnyBroken=!1,this.images.length?this.images.forEach((function(e){e.once("progress",t),e.check()})):this.complete()},a.prototype.progress=function(e,t,n){this.progressedCount++,this.hasAnyBroken=this.hasAnyBroken||!e.isLoaded,this.emitEvent("progress",[this,e,t]),this.jqDeferred&&this.jqDeferred.notify&&this.jqDeferred.notify(this,e),this.progressedCount==this.images.length&&this.complete(),this.options.debug&&o&&o.log("progress: "+n,e,t)},a.prototype.complete=function(){var e=this.hasAnyBroken?"fail":"done";if(this.isComplete=!0,this.emitEvent(e,[this]),this.emitEvent("always",[this]),this.jqDeferred){var t=this.hasAnyBroken?"reject":"resolve";this.jqDeferred[t](this)}},u.prototype=Object.create(t.prototype),u.prototype.check=function(){this.getIsImageComplete()?this.confirm(0!==this.img.naturalWidth,"naturalWidth"):(this.proxyImage=new Image,this.proxyImage.addEventListener("load",this),this.proxyImage.addEventListener("error",this),this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.proxyImage.src=this.img.src)},u.prototype.getIsImageComplete=function(){return this.img.complete&&this.img.naturalWidth},u.prototype.confirm=function(e,t){this.isLoaded=e,this.emitEvent("progress",[this,this.img,t])},u.prototype.handleEvent=function(e){var t="on"+e.type;this[t]&&this[t](e)},u.prototype.onload=function(){this.confirm(!0,"onload"),this.unbindEvents()},u.prototype.onerror=function(){this.confirm(!1,"onerror"),this.unbindEvents()},u.prototype.unbindEvents=function(){this.proxyImage.removeEventListener("load",this),this.proxyImage.removeEventListener("error",this),this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},l.prototype=Object.create(u.prototype),l.prototype.check=function(){this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.img.src=this.url,this.getIsImageComplete()&&(this.confirm(0!==this.img.naturalWidth,"naturalWidth"),this.unbindEvents())},l.prototype.unbindEvents=function(){this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},l.prototype.confirm=function(e,t){this.isLoaded=e,this.emitEvent("progress",[this,this.element,t])},a.makeJQueryPlugin=function(t){(t=t||e.jQuery)&&((n=t).fn.imagesLoaded=function(e,t){return new a(this,e,t).jqDeferred.promise(n(this))})},a.makeJQueryPlugin(),a}(i,e)}.apply(t,o))||(e.exports=r)}("undefined"!=typeof window?window:this)},590:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,r,i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a=l(n(2)),s=l(n(7)),u=l(n(34));function l(e){return e&&e.__esModule?e:{default:e}}r=a.default.Radio.channel("messages"),o=u.default.renderable((function(e){return u.default.div(".modal-content",(function(){return u.default.div(".modal-header",(function(){return u.default.h3(".modal-title",(function(){return u.default.text("Do you really want to delete "+e.content.name+"?"),u.default.img({src:e.content.image.medium})})),u.default.button(".close",{type:"button",data:{dismiss:"modal"}},(function(){return u.default.span({"aria-hidden":"true"},(function(){return u.default.raw("&times")}))}))})),u.default.div(".modal-body",(function(){return u.default.div("#selected-children")})),u.default.div(".modal-footer",(function(){return u.default.button(".confirm-delete.btn.btn-primary",{type:"button",data:{dismiss:"modal"}},(function(){return u.default.i(".fa.fa-check"),u.default.text("OK")})),u.default.button(".cancel-delete.btn.btn-danger",{type:"button",data:{dismiss:"modal"}},(function(){return u.default.i(".fa.fa-close"),u.default.text("Cancel")}))}))}))})),t.default=function(){var e=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),i(t,[{key:"events",value:function(){return{"click @ui.confirmDelete":"confirmDelete"}}},{key:"confirmDelete",value:function(){var e,t;return e=this.model.get("name"),(t=this.model.destroy()).done((function(){return r.request("success",e+" deleted.")})),t.fail((function(){return r.request("danger",e+" NOT deleted.")}))}}]),t}(s.default.View);return e.prototype.template=o,e.prototype.className="modal-dialog",e.prototype.ui={confirmDelete:".confirm-delete",cancelButton:".cancel-delete"},e}.call(void 0)},607:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i=n(7),a=u(n(601)),s=u(n(588));function u(e){return e&&e.__esModule?e:{default:e}}o=function(){var e=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"ui",value:function(){return{list:this.getOption("listContainer")}}},{key:"setMasonry",value:function(){var e,t;return e=this.getOption("listContainer"),t=this.getOption("masonryOptions"),this.view.masonry=new a.default(e,t)}},{key:"setMasonryLayout",value:function(){var e,t,n=this;return t=this.getOption("masonryOptions"),e=this.$(t.itemSelector),(0,s.default)(e,(function(){return setTimeout((function(){return n.view.masonry.reloadItems(),n.view.masonry.layout()}),700)}))}},{key:"onBeforeDestroy",value:function(){return this.view.masonry.destroy()}},{key:"onDomRefresh",value:function(){var e;if(this.setMasonry(),this.setMasonryLayout(),null!=(e=this.view)?e.afterDomRefresh:void 0)return this.view.afterDomRefresh()}},{key:"collectionEvents",value:function(){var e;return e={},this.getOption("hasPageableCollection")&&(e["pageable:state:change"]="setMasonryLayout"),e}}]),t}(i.Behavior);return e.prototype.options={listContainer:".list-container",hasPageableCollection:!1,masonryOptions:{gutter:1,isInitLayout:!1,itemSelector:".item",columnWidth:10,horizontalOrder:!0}},e.prototype.regions={list:"@ui.list"},e}.call(void 0),t.default=o},613:function(e,t,n){"use strict";var o,r,i,a,s;s=n(34),n(432),a=n(433).default,r="width:20%;border-style:solid;border-width:3px",o="col-md-3.bg-body-d5",i=s.renderable((function(e){var t;return r=e.divStyle||r,o=e.cardClasses||o,t="#tvmaze/view/show/"+e.id,".btn.btn-sm",s.div(".show-item.card."+o,{style:r},(function(){return s.div(".card-header",(function(){var t;return s.strong(".card-title",null!=e&&null!=(t=e.content)?t.name:void 0)})),s.div(".card-block",(function(){return s.a({href:t},(function(){var t,n,o,r;return(null!=(t=e.content)&&null!=(n=t.image)?n.medium:void 0)?s.img(".card-img-bottom",{src:null!=(o=e.content)&&null!=(r=o.image)?r.medium:void 0}):a("4x")}))}))}))})),e.exports=i},914:function(e,t,n){"use strict";var o,r,i,a,s,u,l,c,f,d,p,h,y,m,g,v=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();function b(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function w(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function k(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}n(31),o=n(2),c=n(7),m=n(34),h=n(432),i=n(607).default,n(433).default,f=n(439).default,y=n(429).default,r=n(590).default,d=n(613),l=o.Radio.channel("global"),o.Radio.channel("messages"),p=m.renderable((function(){return console.log("SHOW ME"),m.div(".listview-header",(function(){return m.text("TV Shows")})),m.nav(".paginate-bar"),m.button(".flat-list.btn.btn-info","Show flat list"),m.div(".show-list")})),s=function(){var e=function(e){function t(){return b(this,t),w(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return k(t,e),v(t,[{key:"showRole",value:function(e){return e.preventDefault(),y("#tvmaze/shows/view/"+this.model.id)}},{key:"_show_modal",value:function(e,t){var n;return(n=l.request("main:app:object").getView().getRegion("modal")).backdrop=t,n.show(e)}},{key:"deleteItem",value:function(){var e;return e=new r({model:this.model}),this._show_modal(e,!0)}}]),t}(c.View);return e.prototype.template=d,e.prototype.ui={item:".show-item",link:"a",deleteItem:".delete-item"},e.prototype.events={"click @ui.link":"showRole","click @ui.deleteItem":"deleteItem"},e}.call(void 0),a=function(){var e=function(e){function t(){return b(this,t),w(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return k(t,e),t}(c.CollectionView);return e.prototype.childView=s,e}.call(void 0),u=function(){var e=function(e){function t(){return b(this,t),w(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return k(t,e),v(t,[{key:"ui",value:function(){return{header:".listview-header",itemList:".show-list",flatListButton:".flat-list",paginateBar:".paginate-bar"}}},{key:"onRender",value:function(){var e,t;return t=new a({collection:this.collection}),this.showChildView("itemList",t),e=new f({collection:this.collection}),this.showChildView("paginateBar",e)}},{key:"onBeforeDestroy",value:function(){return this.collection.off("pageable:state:change")}},{key:"showFlatList",value:function(){return y("#tvmaze/shows/flat")}}]),t}(c.View);return e.prototype.template=p,e.prototype.options={listContainer:".show-list"},e.prototype.regions={paginateBar:"@ui.paginateBar",itemList:"@ui.itemList"},e.prototype.events={"click @ui.flatListButton":"showFlatList"},e.prototype.behaviors={HasMasonryView:{behaviorClass:i,listContainer:".show-list",hasPageableCollection:!0,masonryOptions:{itemSelector:".show-item",isInitLayout:!1,horizontalOrder:!0,columnWidth:100,stagger:30}}},e}.call(void 0),g=m.renderable((function(e){return m.div(".row.listview-list-entry",(function(){return m.raw(h("# "+e.appName+" started."))}))})),function(){var e=function(e){function t(){return b(this,t),w(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return k(t,e),t}(c.View);return e.prototype.template=g,e.prototype.templateContext={appName:"tvmaze"},e}.call(void 0),e.exports=u}}]);
//# sourceMappingURL=tvmaze-view-show-list-masonry-b3b8bc78cc01248f25f5.js.map