(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{179:function(e,t){e.exports="You can **search** for a TV show, or choose from this \n<a href=\"#pages/sample-moviedb-tvshows\" class='sample-list-anchor'>list:</a>\n\n"},184:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o,i,a,u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=f(n(0)),c=f(n(1)),s=f(n(2));function f(e){return e&&e.__esModule?e:{default:e}}o=l.default.Radio.channel("messages"),a=s.default.renderable(function(e){return s.default.h3(".modal-title",function(){return s.default.text("Do you really want to delete this?")}),s.default.button(".close",{type:"button",data:{dismiss:"modal"}},function(){return s.default.span({"aria-hidden":"true"},function(){return s.default.raw("&times")})})}),i=s.default.renderable(function(e){return s.default.div()}),r=s.default.renderable(function(e){return s.default.div(".modal-content",function(){return s.default.div(".modal-header",function(){return(e.headerTemplate||a)(e)}),s.default.div(".modal-body",function(){return(e.modalBodyTemplate||i)(e)}),s.default.div(".modal-footer",function(){return s.default.button(".confirm-delete.btn.btn-primary",{type:"button",data:{dismiss:"modal"}},function(){return s.default.i(".fa.fa-check"),s.default.text("OK")}),s.default.button(".cancel-delete.btn.btn-danger",{type:"button",data:{dismiss:"modal"}},function(){return s.default.i(".fa.fa-close"),s.default.text("Cancel")})})})}),t.default=function(){var e=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,c.default.View),u(t,[{key:"events",value:function(){return{"click @ui.confirmDelete":"confirmDelete"}}},{key:"confirmDelete",value:function(){var e,t;return e=this.model.get("name"),(t=this.model.destroy()).done(function(){return o.request("success",e+" deleted.")}),t.fail(function(){return o.request("danger",e+" NOT deleted.")})}}]),t}();return e.prototype.template=r,e.prototype.className="modal-dialog",e.prototype.ui={confirmDelete:".confirm-delete",cancelButton:".cancel-delete"},e}.call(void 0)},185:function(e,t,n){"use strict";var r,o,i,a,u,l,c,s,f,d,p,h,v,b,m,y=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();n(3),r=n(0),a=n(1),h=n(2),f=n(52),n(10).default,u=n(61).default,n(184).default,l=n(95),c=n(93);var w=n(92);b=w.tvSearchForm,r.Radio.channel("global"),r.Radio.channel("messages"),r.Radio.channel("moviedb"),s=n(179),v="https://www.themoviedb.org/static_cache/v4/logos/powered-by-square-green-11c0c7f8e03c4f44aa54d5e91d9531aa9860a9161c49f5fa741b730c5b21a1f2.svg",n(91);var g=n(60);d=g.posterImage,m=g.tvShowDescription,p=h.renderable(function(e){return h.div(".card.bg-body-d10",function(){return h.div(".row",function(){return h.div(".col-lg-3",function(){return d(e),h.button(".select-result.btn.btn-primary",{style:"display:none"},"Select this show")}),h.div(".card-block.col-lg-8.ml-2",function(){return m(e)})})})}),o=h.renderable(function(e){return h.article(".document-view.content",function(){return h.div(".body",function(){return h.div(".listview-header.bg-moviedb-logo",function(){return h.a({href:"https://developers.themoviedb.org",target:"_blank"},function(){return h.h1(".d-inline.color-moviedb-logo","TheMovieDb API Demo"),h.img(".bg-moviedb-logo.d-inline",{src:v,style:"max-width:4rem;"})})}),h.raw(f(s)),h.div(".search-form.listview-list-entry"),h.div(".paginate-bar"),h.div(".search-results")})})}),i=function(){var e=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.View),y(t,[{key:"doSomething",value:function(e){var t,n,r,o;return(o=this.getChildView("searchResults")).ui.header.is(":visible")||o.ui.header.show(),t=o.collection.state.totalRecords+'  results for "'+e.get("query")+'"',o.triggerMethod("set:header",t),r=this.getRegion("paginateBar"),this.collection.state.totalPages>1?(n=new u({collection:this.collection,setKeyHandler:!0}),r.show(n)):r.hasView()?r.empty():void 0}},{key:"onRender",value:function(){var e,t;return t=new l({collection:this.collection,template:b}),this.showChildView("searchForm",t),e=new c({collection:this.collection,entryTemplate:p,entryUrlRoot:"#moviedb/tv/shows/view"}),this.showChildView("searchResults",e),window.listAnchor=this.ui.sampleListAnchor,console.log("sampleListAnchor",this.ui.sampleListAnchor)}}]),t}();return e.prototype.template=o,e.prototype.templateContext={appName:"moviedb"},e.prototype.ui={searchForm:".search-form",paginateBar:".paginate-bar",searchResults:".search-results",sampleListAnchor:".sample-list-anchor"},e.prototype.childViewEvents={"save:form:success":"doSomething"},e.prototype.regions={searchForm:"@ui.searchForm",paginateBar:"@ui.paginateBar",searchResults:"@ui.searchResults"},e}.call(void 0),e.exports=i},60:function(e,t,n){"use strict";var r,o,i,a,u,l,c,s,f,d;n(3),n(0),n(1),f=n(2),a=n(53).default,l=f.renderable(function(e){var t,n,r,o;return r=e.noImageSize||"5x",t=e.imgClass||".mr-3",n=e.imgWidth||200,(null!=e?e.poster_path:void 0)?(o="https://image.tmdb.org/t/p/w"+n+e.poster_path,f.img(t,{src:o,style:"width:"+n+"px"})):a(r)}),d=f.renderable(function(e){var t,n;return f.h3(".mt-0",e.name),"Invalid Date"!==(n=new Date(e.first_air_date).toDateString())&&f.h5("Premiered: "+n),"Invalid Date"!==(t=new Date(e.last_air_date).toDateString())&&f.h5("Ended: "+t),f.input(".rating",{type:"number",style:"display:none",value:e.vote_average}),f.p(e.overview)}),r=f.renderable(function(e){var t,n;return f.h3(".mt-0",e.title),(null!=e?e.tagline:void 0)&&f.h5(""+e.tagline),"Invalid Date"!==(n=new Date(e.release_date).toDateString())&&f.h5("Released: "+n),"Invalid Date"!==(t=new Date(e.last_air_date).toDateString())&&f.h4("Ended: "+t),f.input(".rating",{type:"number",style:"display:none",value:e.vote_average}),f.p(e.overview)}),u=f.renderable(function(){return f.div(".jsonview.listview-list-entry",{style:"overflow:auto"})}),s=f.renderable(function(e){return f.div(".card.bg-body-d5",function(){return f.div(".row",function(){return f.div(".col-lg-3",function(){return l(e)}),f.div(".card-block.col-lg-8",function(){return d(e)})})})}),c=f.renderable(function(e){return s(e),f.div(".seasons-row.row"),f.div(".row",function(){return f.div(".col-md-12",function(){return u()})})}),i=f.renderable(function(e){return f.div(".card.bg-body-d5",function(){return f.div(".row",function(){return f.div(".col-lg-3",function(){return l(e)}),f.div(".card-block.col-lg-8",function(){return r(e)})})})}),o=f.renderable(function(e){return i(e),f.div(".row",function(){return f.div(".col-md-12",function(){return u()})})}),e.exports={posterImage:l,tvShowDescription:d,objectJsonTemplate:u,showTemplateCard:s,showTemplate:c,movieTemplateCard:i,movieTemplate:o}},91:function(e,t,n){},92:function(e,t,n){"use strict";var r,o,i,a;i=n(2);var u=n(51);r=u.form_group_input_div,a=i.renderable(function(){return r({input_id:"input_query",label:"TV Show",input_attributes:{name:"query",placeholder:"Enter a TV show","data-validation":"query"}}),i.input(".submit-btn.btn.btn-primary.btn-sm",{type:"submit",value:"Search"}),i.div(".spinner.fa.fa-spinner.fa-spin.text-primary")}),o=i.renderable(function(){return r({input_id:"input_query",label:"Movie Search",input_attributes:{name:"query",placeholder:'Enter a query such as "gone with the wine"'}}),i.input(".submit-btn.btn.btn-primary.btn-sm",{type:"submit",value:"Search"}),i.div(".spinner.fa.fa-spinner.fa-spin.text-primary")}),e.exports={tvSearchForm:a,movieSearchForm:o}},93:function(e,t,n){"use strict";var r,o,i,a,u,l,c,s,f=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();function d(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function h(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}r=n(3),o=n(0),a=n(1),s=n(2),n(57),n(56),window.jQuery=r,n(117),n(116),n(115),n(114),c=n(10).default,n(53).default,i=n(82).default;var v=n(60);v.posterImage,v.tvShowDescription,o.Radio.channel("messages"),o.Radio.channel("moviedb"),u=function(){var e=function(e){function t(){return d(this,t),p(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return h(t,a.View),f(t,[{key:"inLocalCollection",value:function(){var e;return e=this.model.toJSON().show.id,this.getOption("localCollection").get(e)}},{key:"onRender",value:function(){return this.ui.selectResult.show(),this.model.get("vote_average"),this.ui.rating.rating({min:1,max:10,theme:"krajee-fa",readonly:!0,size:"xs"})}},{key:"handleImageHover",value:function(){return this.ui.mainImage.css({cursor:"pointer"})}},{key:"selectResult",value:function(){var e,t;return e=this.model.toJSON().id,t=this.getOption("entryUrlRoot"),c(t+"/"+e)}}]),t}();return e.prototype.ui={selectResult:".select-result",rating:".rating"},e.prototype.events={"click @ui.selectResult":"selectResult"},e}.call(void 0),l=function(){var e=function(e){function t(){return d(this,t),p(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return h(t,a.View),f(t,[{key:"onRender",value:function(){var e;return this.ui.header.hide(),e=new a.CollectionView({collection:this.collection,childView:u,childViewOptions:{localCollection:new o.Collection,entryUrlRoot:this.getOption("entryUrlRoot"),template:this.getOption("entryTemplate")}}),this.showChildView("itemList",e)}}]),t}();return e.prototype.template=s.renderable(function(e){return s.div(".results-header.listview-header",function(){return s.text("Matched Movies")}),s.div(".result-list")}),e.prototype.ui={header:".results-header",itemList:".result-list"},e.prototype.regions={itemList:"@ui.itemList"},e.prototype.behaviors={HasHeader:{behaviorClass:i}},e}.call(void 0),e.exports=l},94:function(e,t,n){"use strict";var r,o;n(3),n(4),(r=n(0)).Radio.channel("messages"),r.Radio.channel("moviedb"),o=function(){var e=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.Model),t}();return e.prototype.validation={query:{required:!0,minLength:11}},e}.call(void 0),e.exports=o},95:function(e,t,n){"use strict";var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var o,i,a,u,l,c;n(3),c=n(4),o=n(0),n(1),n(2),n(52),n(64),i=n(55).default,n(51).form_group_input_div,u=n(94),a=o.Radio.channel("messages"),o.Radio.channel("moviedb"),l=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments));return e.autoClickSubmit=e.autoClickSubmit.bind(e),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i),r(t,[{key:"ui",value:function(){return{query:'[name="query"]'}}},{key:"initialize",value:function(e){return function e(t,n,r){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,n);if(void 0===o){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,n,r)}if("value"in o)return o.value;var a=o.get;return void 0!==a?a.call(r):void 0}(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"initialize",this).call(this,e)}},{key:"initializeAutoSubmit",value:function(e){var t=this;return this.autoClickSubmitOnce=c.once(this.autoClickSubmit),setTimeout(function(){return t.autoClickSubmitOnce()},1e3)}},{key:"createModel",value:function(){return console.log("UIUI",this.ui),new u}},{key:"updateModel",value:function(){return this.model.set("query",this.ui.query.val())}},{key:"saveModel",value:function(){var e,t=this;return this.model.get("query"),this.collection.queryParams.query=this.model.get("query"),(e=this.collection.fetch()).done(function(){return console.log("saveModel response",e,t.collection),t.trigger("save:form:success",t.model)}),e.fail(function(){return a.request("warning",t.tvshow+" not found."),t.trigger("save:form:failure",t.model)})}},{key:"autoClickSubmit",value:function(){return function(e,t){if(!(e instanceof t))throw new Error("Bound instance method accessed before binding")}(this,t),this.ui.submitButton.click(),console.log("Submit clicked")}}]),t}(),e.exports=l}}]);
//# sourceMappingURL=moviedb-view-index-e73d62a6b092f37153ed.js.map