(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{132:function(e,t,n){"use strict";var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var u,l,s,c,f,d,p,h,g,y,v,b,m,w;u=n(3),l=n(0),d=n(1),m=n(2),v=n(52),n(10).default,h=n(61).default,p=l.Radio.channel("messages"),g=m.renderable(function(e){return".btn.btn-sm",m.li(".list-group-item.bg-body-d5",function(){return m.span(function(){return m.a({href:""},e.person.name)})})}),y=m.renderable(function(){return m.div(".listview-header",function(){return m.text("US Gov Roles")}),m.div(".paginate-bar"),m.div(".navbox"),m.ul(".list-group")}),b=m.renderable(function(){return m.div(".btn-group",function(){return m.button(".prev.btn.btn-secondary",{type:"button"},function(){return m.i(".fa.fa-arrow-left")}),m.button(".next.btn.btn-secondary",{type:"button"},function(){return m.i(".fa.fa-arrow-right")})})}),function(){var e=function(e){function t(){o(this,t);var e=a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments));return e.keydownHandler=e.keydownHandler.bind(e),e}return i(t,d.View),r(t,[{key:"templateContext",value:function(){return{collection:this.collection}}},{key:"_onFirstPage",value:function(){var e;return 0===(e=this.collection.state).currentPage-e.firstPage}},{key:"updateNavButtons",value:function(){if(this._onFirstPage()?this.ui.prevButton.hide():this.ui.prevButton.show(),this.collection.state.currentPage!==this.collection.state.lastPage?this.ui.nextButton.show():this.ui.nextButton.hide(),0===this.collection.state.totalRecords)return this.ui.prevButton.hide(),this.ui.nextButton.hide()}},{key:"handleKeyCommand",value:function(e){if("prev"===e||"next"===e)return this.getAnotherPage(e)}},{key:"keydownHandler",value:function(e){var n,r,o,a;for(n in function(e,t){if(!(e instanceof t))throw new Error("Bound instance method accessed before binding")}(this,t),o=[],r=this.keyCommands)a=r[n],e.keyCode===a?o.push(this.handleKeyCommand(n)):o.push(void 0);return o}},{key:"onRender",value:function(){var e=this;return this.updateNavButtons(),this.collection.on("pageable:state:change",function(){return e.updateNavButtons()}),u("html").keydown(this.keydownHandler)}},{key:"onBeforeDestroy",value:function(){return this.collection.off("pageable:state:change"),u("html").unbind("keydown",this.keydownHandler)}},{key:"getAnotherPage",value:function(e){var t,n;n=(t=this.collection.state.currentPage)===this.collection.state.lastPage,"prev"===e&&t?this.collection.getPreviousPage():"next"!==e||n||this.collection.getNextPage()}},{key:"getPreviousPage",value:function(){return this.getAnotherPage("prev")}},{key:"getNextPage",value:function(){return this.getAnotherPage("next")}}]),t}();return e.prototype.template=b,e.prototype.ui={prevButton:".prev",nextButton:".next"},e.prototype.events={"click @ui.prevButton":"getPreviousPage","click @ui.nextButton":"getNextPage"},e.prototype.keyCommands={prev:37,next:39},e}.call(void 0),c=function(){var e=function(e){function t(){return o(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,d.View),r(t,[{key:"showRole",value:function(e){return e.preventDefault(),p.request("success","Cool!")}}]),t}();return e.prototype.template=g,e.prototype.ui={item:".list-group-item",link:"a"},e.prototype.events={"click @ui.link":"showRole"},e}.call(void 0),s=function(){var e=function(e){function t(){return o(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,d.CollectionView),t}();return e.prototype.childView=c,e}.call(void 0),f=function(){var e=function(e){function t(){return o(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,d.View),r(t,[{key:"onRender",value:function(){var e;return e=new s({collection:this.collection}),this.showChildView("itemList",e),e=new h({collection:this.collection,setKeyHandler:!0}),this.showChildView("paginateBar",e)}}]),t}();return e.prototype.template=y,e.prototype.ui={header:".listview-header",itemList:".list-group",paginateBar:".paginate-bar"},e.prototype.regions={itemList:"@ui.itemList",paginateBar:"@ui.paginateBar",navBox:".navbox"},e}.call(void 0),w=m.renderable(function(e){return m.div(".row.listview-list-entry",function(){return m.raw(v("# "+e.appName+" started."))})}),function(){var e=function(e){function t(){return o(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,d.View),t}();return e.prototype.template=w,e.prototype.templateContext={appName:"usgov"},e}.call(void 0),e.exports=f},61:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=l(n(3)),a=l(n(0)),i=l(n(1)),u=l(n(2));function l(e){return e&&e.__esModule?e:{default:e}}a.default.Radio.channel("global"),a.default.Radio.channel("messages"),t.default=function(){var e=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments));return e.keydownHandler=e.keydownHandler.bind(e),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.default.View),r(t,[{key:"templateContext",value:function(){return{collection:this.collection}}},{key:"onDomRefresh",value:function(){return this.updateNavButtons()}},{key:"turnPage",value:function(e){var t;return e.preventDefault(),t=(0,o.default)(e.target).attr("data-pagenumber"),this.collection.getPage(Number(t)),this.updateNavButtons()}},{key:"updateNavButtons",value:function(){var e,t,n,r;return r=this.collection.state,n=this.ui.prevButton.parent(),r.currentPage===r.firstPage?n.hasClass("disabled")||n.addClass("disabled"):n.hasClass("disabled")&&n.removeClass("disabled"),t=this.ui.nextButton.parent(),r.currentPage===r.lastPage?t.hasClass("disabled")||t.addClass("disabled"):t.addClass("disabled")&&t.removeClass("disabled"),this.ui.numberedPage.parent().removeClass("active"),this.ui.numberedPage.removeClass("text-white"),this.ui.numberedPage.addClass("text-dark"),(e=(0,o.default)('[data-pagenumber="'+r.currentPage+'"]')).parent().addClass("active"),e.removeClass("text-dark"),e.addClass("text-white")}},{key:"getAnotherPage",value:function(e){var t,n,r,o;if(n=(o=this.collection.state).currentPage===o.lastPage,t=o.currentPage===o.firstPage,"prev"!==e||t){if("next"!==e||n){if(n)return;throw new Error("bad direction '"+e+"'")}r=this.collection.getNextPage()}else o.currentPage!==o.firstPage&&(r=this.collection.getPreviousPage());return this.updateNavButtons(),r}},{key:"getPreviousPage",value:function(){return this.getAnotherPage("prev")}},{key:"getNextPage",value:function(){return this.getAnotherPage("next")}},{key:"onRender",value:function(){if(this.getOption("setKeyHandler"))return this.onRenderHandleKeys()}},{key:"onBeforeDestroy",value:function(){if(this.getOption("setKeyHandler"))return this.onBeforeDestroyHandleKeys()}},{key:"handleKeyCommand",value:function(e){if("prev"===e||"next"===e)return this.getAnotherPage(e)}},{key:"keydownHandler",value:function(e){var n,r,o,a;for(n in function(e,t){if(!(e instanceof t))throw new Error("Bound instance method accessed before binding")}(this,t),o=[],r=this.keycommands)a=r[n],e.keyCode===a?o.push(this.handleKeyCommand(n)):o.push(void 0);return o}},{key:"onRenderHandleKeys",value:function(){return(0,o.default)("html").keydown(this.keydownHandler)}},{key:"onBeforeDestroyHandleKeys",value:function(){return(0,o.default)("html").unbind("keydown",this.keydownHandler)}}]),t}();return e.prototype.tagName="ul",e.prototype.className="pagination",e.prototype.template=u.default.renderable(function(e){var t,n,r,o,i,l,s;for((s=e instanceof a.default.Collection?e.state:e.collection.state).totalPages,t=s.firstPage,r=s.lastPage,u.default.li(".page-item",function(){return u.default.a(".prev.page-link.bg-body-d5",function(){return u.default.i(".fa.fa-arrow-left")})}),o=n=i=t,l=r;i<=l?n<=l:n>=l;o=i<=l?++n:--n)u.default.li(".page-item",function(){return u.default.a(".numbered-page.page-link.bg-body-d5.text-dark",{href:"#",data:{pageNumber:o}},o)});return u.default.li(".page-item",function(){return u.default.a(".next.page-link.bg-body-d5",function(){return u.default.i(".fa.fa-arrow-right")})})}),e.prototype.ui={numberedPage:".numbered-page",prevButton:".prev",nextButton:".next"},e.prototype.events={"click @ui.numberedPage":"turnPage","click @ui.prevButton":"getPreviousPage","click @ui.nextButton":"getNextPage"},e.prototype.keycommands={prev:37,next:39},e}.call(void 0)}}]);
//# sourceMappingURL=usgov-view-index-b7ab90e12624720e3668.js.map