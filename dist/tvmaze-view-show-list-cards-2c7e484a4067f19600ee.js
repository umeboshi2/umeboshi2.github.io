(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{105:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o,a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=s(n(1)),u=s(n(2)),l=s(n(4));function s(e){return e&&e.__esModule?e:{default:e}}o=i.default.Radio.channel("messages"),r=l.default.renderable((function(e){return l.default.div(".modal-content",(function(){return l.default.div(".modal-header",(function(){return l.default.h3(".modal-title",(function(){return l.default.text("Do you really want to delete "+e.content.name+"?"),l.default.img({src:e.content.image.medium})})),l.default.button(".close",{type:"button",data:{dismiss:"modal"}},(function(){return l.default.span({"aria-hidden":"true"},(function(){return l.default.raw("&times")}))}))})),l.default.div(".modal-body",(function(){return l.default.div("#selected-children")})),l.default.div(".modal-footer",(function(){return l.default.button(".confirm-delete.btn.btn-primary",{type:"button",data:{dismiss:"modal"}},(function(){return l.default.i(".fa.fa-check"),l.default.text("OK")})),l.default.button(".cancel-delete.btn.btn-danger",{type:"button",data:{dismiss:"modal"}},(function(){return l.default.i(".fa.fa-close"),l.default.text("Cancel")}))}))}))})),t.default=function(){var e=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,[{key:"events",value:function(){return{"click @ui.confirmDelete":"confirmDelete"}}},{key:"confirmDelete",value:function(){var e,t;return e=this.model.get("name"),(t=this.model.destroy()).done((function(){return o.request("success",e+" deleted.")})),t.fail((function(){return o.request("danger",e+" NOT deleted.")}))}}]),t}(u.default.View);return e.prototype.template=r,e.prototype.className="modal-dialog",e.prototype.ui={confirmDelete:".confirm-delete",cancelButton:".cancel-delete"},e}.call(void 0)},124:function(e,t,n){"use strict";var r,o,a,i,u;u=n(4),n(85),i=n(87).default,o="width:20%;border-style:solid;border-width:3px",r="col-md-3.bg-body-d5",a=u.renderable((function(e){var t;return o=e.divStyle||o,r=e.cardClasses||r,t="#tvmaze/view/show/"+e.id,".btn.btn-sm",u.div(".show-item.card."+r,{style:o},(function(){return u.div(".card-header",(function(){var t;return u.strong(".card-title",null!=e&&null!=(t=e.content)?t.name:void 0)})),u.div(".card-block",(function(){return u.a({href:t},(function(){var t,n,r,o;return(null!=(t=e.content)&&null!=(n=t.image)?n.medium:void 0)?u.img(".card-img-bottom",{src:null!=(r=e.content)&&null!=(o=r.image)?o.medium:void 0}):i("4x")}))}))}))})),e.exports=a},417:function(e,t,n){"use strict";var r,o,a,i,u,l,s,c,d,f,p,h,y=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();function b(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function m(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function g(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}n(5),r=n(1),s=n(2),h=n(4),n(85),n(87).default,c=n(97).default,p=n(19).default,o=n(105).default,d=n(124),l=r.Radio.channel("global"),r.Radio.channel("messages"),f=h.renderable((function(){return h.div(".listview-header",(function(){return h.text("TV Shows")})),h.nav(".paginate-bar"),h.button(".flat-list.btn.btn-info","Show flat list"),h.div(".show-list")})),i=function(){var e=function(e){function t(){return b(this,t),m(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return g(t,e),y(t,[{key:"showRole",value:function(e){return e.preventDefault(),p("#tvmaze/shows/view/"+this.model.id)}},{key:"_show_modal",value:function(e,t){var n;return(n=l.request("main:app:object").getView().getRegion("modal")).backdrop=t,n.show(e)}},{key:"deleteItem",value:function(){var e;return e=new o({model:this.model}),this._show_modal(e,!0)}}]),t}(s.View);return e.prototype.template=d,e.prototype.templateContext={divStyle:"border-style:solid;border-width:3px",cardClasses:".bg-body-d5"},e.prototype.className="col-md-2",e.prototype.ui={item:".show-item",link:"a",deleteItem:".delete-item"},e.prototype.events={"click @ui.link":"showRole","click @ui.deleteItem":"deleteItem"},e}.call(void 0),a=function(){var e=function(e){function t(){return b(this,t),m(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return g(t,e),t}(s.CollectionView);return e.prototype.childView=i,e.prototype.className="row",e}.call(void 0),u=function(){var e=function(e){function t(){return b(this,t),m(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return g(t,e),y(t,[{key:"ui",value:function(){return{header:".listview-header",itemList:".show-list",flatListButton:".flat-list",paginateBar:".paginate-bar"}}},{key:"onRender",value:function(){var e,t;return t=new a({collection:this.collection}),this.showChildView("itemList",t),e=new c({collection:this.collection}),this.showChildView("paginateBar",e)}},{key:"onBeforeDestroy",value:function(){return this.collection.off("pageable:state:change")}},{key:"showFlatList",value:function(){return p("#tvmaze/shows/flat")}}]),t}(s.View);return e.prototype.template=f,e.prototype.options={listContainer:".show-list"},e.prototype.regions={paginateBar:"@ui.paginateBar",itemList:"@ui.itemList"},e.prototype.events={"click @ui.flatListButton":"showFlatList"},e}.call(void 0),e.exports=u},87:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=n(4),a=(r=o)&&r.__esModule?r:{default:r};t.default=a.default.renderable((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"5x";return a.default.span(".fa-stack.fa-"+e,(function(){return a.default.i(".fa.fa-image.fa-stack-1x"),a.default.i(".fa.fa-ban.fa-stack-2x.text-danger")}))}))},97:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=l(n(5)),a=l(n(1)),i=n(2),u=l(n(4));function l(e){return e&&e.__esModule?e:{default:e}}a.default.Radio.channel("global"),a.default.Radio.channel("messages"),t.default=function(){var e=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments));return e.keydownHandler=e.keydownHandler.bind(e),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"options",value:function(){return{setKeyHandler:!1,barLength:15,barStopAt:7}}},{key:"templateContext",value:function(){return{collection:this.collection,barLength:this.getOption("barLength"),barStopAt:this.getOption("barStopAt")}}},{key:"onDomRefresh",value:function(){return this.updateNavButtons()}},{key:"turnPage",value:function(e){var t;return e.preventDefault(),t=(0,o.default)(e.target).attr("data-pagenumber"),this.collection.getPage(Number(t)),this.updateNavButtons()}},{key:"updateNavButtons",value:function(){var e,t,n,r;return r=this.collection.state,n=this.ui.prevButton.parent(),r.currentPage===r.firstPage?n.hasClass("disabled")||n.addClass("disabled"):n.hasClass("disabled")&&n.removeClass("disabled"),t=this.ui.nextButton.parent(),r.currentPage===r.lastPage?t.hasClass("disabled")||t.addClass("disabled"):t.addClass("disabled")&&t.removeClass("disabled"),this.ui.numberedPage.parent().removeClass("active"),this.ui.numberedPage.removeClass("text-white"),this.ui.numberedPage.addClass("text-dark"),(e=(0,o.default)('[data-pagenumber="'+r.currentPage+'"]')).parent().addClass("active"),e.removeClass("text-dark"),e.addClass("text-white")}},{key:"getAnotherPage",value:function(e){var t,n,r,o;if(n=(o=this.collection.state).currentPage===o.lastPage,t=o.currentPage===o.firstPage,"prev"!==e||t){if("next"!==e||n){if(n)return;throw new Error("bad direction '"+e+"'")}r=this.collection.getNextPage()}else o.currentPage!==o.firstPage&&(r=this.collection.getPreviousPage());return this.updateNavButtons(),r}},{key:"getPreviousPage",value:function(){return this.getAnotherPage("prev")}},{key:"getNextPage",value:function(){return this.getAnotherPage("next")}},{key:"onRender",value:function(){if(this.getOption("setKeyHandler"))return this.onRenderHandleKeys()}},{key:"onBeforeDestroy",value:function(){if(this.getOption("setKeyHandler"))return this.onBeforeDestroyHandleKeys()}},{key:"handleKeyCommand",value:function(e){if("prev"===e||"next"===e)return this.getAnotherPage(e)}},{key:"keydownHandler",value:function(e){var n,r,o,a;for(n in function(e,t){if(!(e instanceof t))throw new Error("Bound instance method accessed before binding")}(this,t),o=[],r=this.keycommands)a=r[n],e.keyCode===a?o.push(this.handleKeyCommand(n)):o.push(void 0);return o}},{key:"onRenderHandleKeys",value:function(){return(0,o.default)("html").keydown(this.keydownHandler)}},{key:"onBeforeDestroyHandleKeys",value:function(){return(0,o.default)("html").unbind("keydown",this.keydownHandler)}}]),t}(i.View);return e.prototype.tagName="ul",e.prototype.className="pagination",e.prototype.template=u.default.renderable((function(e){var t,n,r,o,i,l,s,c,d,f,p;for((f=e instanceof a.default.Collection?e.state:e.collection.state).totalPages,r=f.firstPage,t=!1,(i=f.lastPage)>e.barLength&&(t=!0,p=e.barStopAt,d=i-e.barStopAt),u.default.li(".page-item",(function(){return u.default.a(".prev.page-link.bg-body-d5",(function(){return u.default.i(".fa.fa-arrow-left")}))})),n=!1,l=o=s=r,c=i;s<=c?o<=c:o>=c;l=s<=c?++o:--o)t&&l>=p&&l<=d?n||(n=!0,u.default.li(".page-item",(function(){return u.default.a(".ellipsis-page.page-link.bg-body-d5.text-dark","...")}))):u.default.li(".page-item",(function(){return u.default.a(".numbered-page.page-link.bg-body-d5.text-dark",{href:"#",data:{pageNumber:l}},l)}));return u.default.li(".page-item",(function(){return u.default.a(".next.page-link.bg-body-d5",(function(){return u.default.i(".fa.fa-arrow-right")}))}))})),e.prototype.ui={numberedPage:".numbered-page",prevButton:".prev",nextButton:".next"},e.prototype.events={"click @ui.numberedPage":"turnPage","click @ui.prevButton":"getPreviousPage","click @ui.nextButton":"getNextPage"},e.prototype.keycommands={prev:37,next:39},e}.call(void 0)}}]);
//# sourceMappingURL=tvmaze-view-show-list-cards-2c7e484a4067f19600ee.js.map