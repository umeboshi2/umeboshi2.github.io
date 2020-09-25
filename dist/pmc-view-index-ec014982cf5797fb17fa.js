(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{418:function(e,t,n){var o=n(419);"string"==typeof o&&(o=[[e.i,o,""]]);var r={insert:"head",singleton:!1};n(413)(o,r);o.locals&&(e.exports=o.locals)},419:function(e,t,n){(e.exports=n(412)(!1)).push([e.i,'.jsonView{\n    margin-left: 20px;\n    font-family: Consolas, "Lucida Console", Menlo, "dejavu sans mono", monospace;\n    font-size: 16px;\n    line-height: 16px;\n    padding: 2px;\n    cursor: default;\n    color: cornsilk;\n    white-space: nowrap;\n    -webkit-user-select: none;\n}\n\n.jsonView>div{\n    display: inline-block;\n}\n\n.jsonView>.children, .jsonView.insert{\n    display: block;\n}\n\n.jsonView>.name{\n    color: mistyrose;\n}\n\n.jsonView>.separator:before{\n    content: ":";\n}\n\n.jsonView>.separator {\n    padding-right: 5px;\n}\n\n.jsonView>.value.null{\n    color: rgb(128, 128, 128);\n}\n\n.jsonView>.value.boolean, .jsonView>.value.number{\n    color: lightseagreen;\n}\n\n.jsonView>.value.string:not(.edit):before, .jsonView>.value.string:not(.edit):after{\n    content: "\\"";\n}\n\n.jsonView>.value.string {\n    color: lightsalmon;\n}\n\n.jsonView>.name:hover, .jsonView>.value:hover{\n    background-color: rgba(56, 121, 217, 0.1);\n}\n\n.jsonView>.jv-expand, .jsonView>.jv-collapse{\n    min-width: 20px;\n    margin-left: -20px;\n    cursor: pointer;\n}\n\n.jsonView>.jv-expand:before{\n    content: \'\\25B6\';\n}\n\n.jsonView>.jv-collapse:before{\n    content: \'\\25BC\';\n}\n\n.jsonView>.edit{\n    padding: 0px 5px 0px 5px;\n    white-space: nowrap;\n    overflow: hidden;\n    background-color: transparent;\n}\n\n.jsonView>.edit br{\n    display: none;\n}\n\n.jsonView>.edit *{\n    display: inline;\n    white-space: nowrap;\n}\n\n.jsonView>.value.edit{\n    color: rgb(0, 0, 0);\n}\n\n.jsonView>.delete:before{\n    content: \'X\';\n}\n\n.jsonView>.delete{\n    opacity: 0;\n    display: inline;\n    padding: 3px;\n    margin-left: 20px;\n    cursor: pointer;\n    color: rgb(150, 150, 150);\n}\n\n.jsonView>.delete:hover{\n    opacity: 1;\n    color: rgb(0, 0, 0);\n    background: rgb(220, 220, 220);\n}\n\n.jsonView>.insert:before{\n    content: \'+\';\n}\n\n.jsonView>.insert{\n    display: none;\n    color: rgb(150, 150, 150);\n    cursor: pointer;\n}\n\n.jsonView.jv-expanded>.insert, .jsonView.jv-expanded>.insert{\n    display: inline-block;\n    margin-left: 20px;\n    padding: 3px;\n}\n\n.jsonView>.insert:hover{\n    color: rgb(0, 0, 0);\n    background: rgb(220, 220, 220);\n}\n',""])},421:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,r,i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a=n(7),u=n(417),l=(o=u)&&o.__esModule?o:{default:o};n(418),r=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),i(t,[{key:"options",value:function(){return{jviewSelector:".jsonview"}}},{key:"ui",value:function(){return{jsonView:this.getOption("jviewSelector")}}},{key:"onDomRefresh",value:function(){var e;return e=this.view.model.toJSON(),this.view.jsonView=new l.default(e),this.ui.jsonView.prepend(this.view.jsonView.dom)}}]),t}(a.Behavior),t.default=r},422:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=l(n(32)),i=l(n(6)),a=n(7),u=l(n(22));function l(e){return e&&e.__esModule?e:{default:e}}i.default.Radio.channel("global"),i.default.Radio.channel("messages"),t.default=function(){var e=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments));return e.keydownHandler=e.keydownHandler.bind(e),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"options",value:function(){return{setKeyHandler:!1,barLength:15,barStopAt:7}}},{key:"templateContext",value:function(){return{collection:this.collection,barLength:this.getOption("barLength"),barStopAt:this.getOption("barStopAt")}}},{key:"onDomRefresh",value:function(){return this.updateNavButtons()}},{key:"turnPage",value:function(e){var t;return e.preventDefault(),t=(0,r.default)(e.target).attr("data-pagenumber"),this.collection.getPage(Number(t)),this.updateNavButtons()}},{key:"updateNavButtons",value:function(){var e,t,n;return n=this.collection.state,t=this.ui.prevButton.parent(),n.currentPage===n.firstPage?t.hasClass("disabled")||t.addClass("disabled"):t.hasClass("disabled")&&t.removeClass("disabled"),e=this.ui.nextButton.parent(),n.currentPage===n.lastPage?e.hasClass("disabled")||e.addClass("disabled"):e.addClass("disabled")&&e.removeClass("disabled"),this.ui.numberedPage.parent().removeClass("active"),(0,r.default)('[data-pagenumber="'+n.currentPage+'"]').parent().addClass("active")}},{key:"getAnotherPage",value:function(e){var t,n,o,r;if(n=(r=this.collection.state).currentPage===r.lastPage,t=r.currentPage===r.firstPage,"prev"!==e||t){if("next"!==e||n){if(n)return;throw new Error("bad direction '"+e+"'")}o=this.collection.getNextPage()}else r.currentPage!==r.firstPage&&(o=this.collection.getPreviousPage());return this.updateNavButtons(),o}},{key:"getPreviousPage",value:function(){return this.getAnotherPage("prev")}},{key:"getNextPage",value:function(){return this.getAnotherPage("next")}},{key:"onRender",value:function(){if(this.getOption("setKeyHandler"))return this.onRenderHandleKeys()}},{key:"onBeforeDestroy",value:function(){if(this.getOption("setKeyHandler"))return this.onBeforeDestroyHandleKeys()}},{key:"handleKeyCommand",value:function(e){if("prev"===e||"next"===e)return this.getAnotherPage(e)}},{key:"keydownHandler",value:function(e){var n,o,r,i;for(n in function(e,t){if(!(e instanceof t))throw new Error("Bound instance method accessed before binding")}(this,t),r=[],o=this.keycommands)i=o[n],e.keyCode===i?r.push(this.handleKeyCommand(n)):r.push(void 0);return r}},{key:"onRenderHandleKeys",value:function(){return(0,r.default)("html").keydown(this.keydownHandler)}},{key:"onBeforeDestroyHandleKeys",value:function(){return(0,r.default)("html").unbind("keydown",this.keydownHandler)}}]),t}(a.View);return e.prototype.tagName="ul",e.prototype.className="pagination",e.prototype.template=u.default.renderable((function(e){var t,n,o,r,a,l,c,s,f,d,p;for((d=e instanceof i.default.Collection?e.state:e.collection.state).totalPages,o=d.firstPage,t=!1,(a=d.lastPage)>e.barLength&&(t=!0,p=e.barStopAt,f=a-e.barStopAt),u.default.li(".page-item",(function(){return u.default.a(".prev.page-link",(function(){return u.default.i(".fa.fa-arrow-left")}))})),n=!1,l=r=c=o,s=a;c<=s?r<=s:r>=s;l=c<=s?++r:--r)t&&l>=p&&l<=f?n||(n=!0,u.default.li(".page-item",(function(){return u.default.a(".ellipsis-page.page-link","...")}))):u.default.li(".page-item",(function(){return u.default.a(".numbered-page.page-link",{href:"#",data:{pageNumber:l}},l)}));return u.default.li(".page-item",(function(){return u.default.a(".next.page-link",(function(){return u.default.i(".fa.fa-arrow-right")}))}))})),e.prototype.ui={numberedPage:".numbered-page",prevButton:".prev",nextButton:".next"},e.prototype.events={"click @ui.numberedPage":"turnPage","click @ui.prevButton":"getPreviousPage","click @ui.nextButton":"getNextPage"},e.prototype.keycommands={prev:37,next:39},e}.call(void 0)},437:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,r,i,a=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),u=n(6),l=n(7),c=n(158),s=(o=c)&&o.__esModule?o:{default:o};i=u.Radio.channel("global"),r=function(){var e=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,[{key:"emptyModal",value:function(){return i.request("main:app:object").getView().getRegion("modal").empty()}}]),t}(l.View);return e.prototype.behaviors=[s.default],e}.call(void 0),t.default=r},484:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,r,i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a=n(6),u=n(7),l=h(n(22)),c=n(459),s=h(n(421)),f=h(n(485)),d=h(n(486)),p=h(n(487)),b=h(n(488));function h(e){return e&&e.__esModule?e:{default:e}}o=a.Radio.channel("global"),r=function(){var e=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),i(t,[{key:"onRender",value:function(){return this.ui.jsonView.hide()}},{key:"pmcAnchorClicked",value:function(e){return e.preventDefault()}},{key:"deleteBtnClicked",value:function(){var e=this;return this.model.destroy().done((function(){return e.trigger("model:destroyed")}))}},{key:"abstractBtnClicked",value:function(){return this.ui.abstractCard.toggle()}},{key:"topicsBtnClicked",value:function(){var e;return e=new b.default({model:this.model}),o.request("show-modal",e)}}]),t}(u.View);return e.prototype.behaviors=[s.default],e.prototype.template=l.default.renderable((function(e){var t,n,o;return o=(0,c.JSONPath)("*..article-meta",e)[0],t=(0,f.default)(e),n=(0,d.default)(e.id),l.default.div(".card",(function(){return l.default.div(".card-body",(function(){var e;return l.default.h5(".card-title",t.title),l.default.div(".small",t.journal),l.default.a(".pmc-anchor.small",{href:n},"(PMC)"),(null!=t?t.doi:void 0)&&l.default.a(".small",{href:(0,p.default)(t.doi),target:"_blank"},(function(){return l.default.text(" (doi:"+t.doi+")")})),l.default.span(".destroy-btn.badge.badge-danger",{type:"button"},"Delete"),(null!=o?o.abstract:void 0)&&(e=o.abstract,l.default.span(".abstract-btn.badge.badge-dark",{type:"button"},(function(){return l.default.text("toggle abstract")})),l.default.div(".abstract-card.card-text",{style:"display: none;"},(function(){var t,n,r,i,a,u,c,s,f,d,p,b,h,y;if(l.default.text("Abstract"),null!=e?e.sec:void 0){for(h=[],r=0,u=(f=o.abstract.sec).length;r<u;r++)i=f[r],l.default.h6(".card-text.small",i.title),s=(null!=(d=i.p)?d.__text:void 0)?i.p.__text:i.p,h.push(l.default.p(".card-text.small",s));return h}if(null!=(n=(null!=(p=(t=e).p)?p.__text:void 0)?t.p.__text:t.p)?n.length:void 0)return l.default.div(".card-text.small",n);for(y=[],a=0,c=t.length;a<c;a++)s=(i=t[a]).p,(null!=(b=i.p)?b.__text:void 0)&&(s=i.p.__text),y.push(l.default.p(".card-text.small",s));return y}))),l.default.div(".abstract-container"),l.default.div(".card-footer",(function(){return l.default.span(".topics-btn.badge.badge-dark",{type:"button"},"assign topics")}))})),l.default.div(".jsonview")}))})),e.prototype.ui={pmcAnchor:".pmc-anchor",deleteBtn:".destroy-btn",jsonView:".jsonview",abstractCard:".abstract-card",abstractBtn:".abstract-btn",topicsBtn:".topics-btn"},e.prototype.events={"click @ui.pmcAnchor":"pmcAnchorClicked","click @ui.deleteBtn":"deleteBtnClicked","click @ui.abstractBtn":"abstractBtnClicked","click @ui.topicsBtn":"topicsBtnClicked"},e}.call(void 0),t.default=r},485:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,r,i=n(1),a=((o=i)&&o.__esModule,n(459));r=function(e){var t,n,o;return(null!=(n=(0,a.JSONPath)("*..OAI-PMH",e)[0])?n.error:void 0)?{}:{journal:(0,a.JSONPath)("*..journal-title",n)[0],title:(null!=(o=(0,a.JSONPath)("*..article-title",n)[0])?o.__text:void 0)?o.__text:o,doi:null!=(t=(0,a.JSONPath)('*..article-id[?(@["_pub-id-type"]=="doi")]',n)[0])?t.__text:void 0}},t.default=r},486:function(e,t,n){"use strict";var o;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return o+"PMC"+e+"/"},o="https://www.ncbi.nlm.nih.gov/pmc/articles/"},487:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return"https://dx.doi.org/","https://dx.doi.org/"+e}},488:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,r,i,a=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),u=n(6),l=n(7),c=p(n(22)),s=p(n(437)),f=p(n(421)),d=p(n(156));function p(e){return e&&e.__esModule?e:{default:e}}function b(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function h(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function y(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}o=u.Radio.channel("pmc"),i=function(){var e=function(e){function t(){return b(this,t),h(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return y(t,e),t}(l.View);return e.prototype.behaviors=[f.default],e.prototype.template=c.default.renderable((function(){return c.default.div(".jsonview")})),e}.call(void 0),r=function(){var e=function(e){function t(){return b(this,t),h(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return y(t,e),a(t,[{key:"okBtnClicked",value:function(){return console.log("OK clicked")}},{key:"onRender",value:function(){var e,t,n,r;return r=o.request("get-topic-collection"),e=o.request("get-fmtopic-collection"),console.log("topics, fmtopics",r,e),n=this,t=new u.Model({topics:r,fmtopics:e,eventIndex:d.default.eventIndex}),r.fetch().then((function(){return e.fetch()})).then((function(){var o;return console.log("all fetched",r,e),o=new i({model:t}),n.showChildView("content",o)}))}}]),t}(s.default);return e.prototype.template=c.default.renderable((function(e){return console.log("model",e),c.default.div(".modal-dialog.modal-md",(function(){return c.default.div(".modal-content",(function(){return c.default.text("Topics Assigned to pmeid: "+e.id),c.default.div(".content"),c.default.div(".row",(function(){return c.default.button(".close-btn.btn.btn-warning.fa.fa-close.mr-auto",{data:{dismiss:"modal"}},"Close"),c.default.button(".ok-button.btn.btn-success.fa.fa-check.ml-auto","Ok")}))}))}))})),e.prototype.ui={closeBtn:".close-btn",okBtn:".ok-button",content:".content",topicsRegion:".topics"},e.prototype.regions={content:"@ui.content"},e.prototype.events={"click @ui.okBtn":"okBtnClicked","click @ui.closeBtn":"emptyModal"},e}.call(void 0),t.default=r},675:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,r,i,a=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),u=n(6),l=n(7),c=d(n(22)),s=d(n(422)),f=d(n(484));function d(e){return e&&e.__esModule?e:{default:e}}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function b(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function h(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}o=u.Radio.channel("pmc"),i=function(){var e=function(e){function t(){return p(this,t),b(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return h(t,e),a(t,[{key:"templateContext",value:function(){return{hasOAIcontent:this.model.hasOAIcontent()}}},{key:"onRender",value:function(){var e;if(this.model.hasOAIcontent())return e=new f.default({model:this.model}),this.showChildView("content",e)}}]),t}(l.View);return e.prototype.template=c.default.renderable((function(e){return e.hasOAIcontent||c.default.div(e.id),c.default.div(".content")})),e.prototype.ui={content:".content"},e.prototype.regions={content:"@ui.content"},e}.call(void 0),r=function(){var e=function(e){function t(){return p(this,t),b(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return h(t,e),a(t,[{key:"onRender",value:function(){var e,t=this;return(e=o.request("make-fm-pageable")).fetch().done((function(){var n,o;return n=new s.default({collection:e}),t.showChildView("paginateBar",n),o=new l.CollectionView({collection:e,childView:i}),t.showChildView("content",o)}))}}]),t}(l.View);return e.prototype.template=c.default.renderable((function(){return c.default.h3(".text-center","Local PMC Papers"),c.default.div(".paginate-bar"),c.default.div(".content")})),e.prototype.ui={content:".content",paginateBar:".paginate-bar"},e.prototype.regions={content:"@ui.content",paginateBar:"@ui.paginateBar"},e}.call(void 0),t.default=r}}]);
//# sourceMappingURL=pmc-view-index-ec014982cf5797fb17fa.js.map