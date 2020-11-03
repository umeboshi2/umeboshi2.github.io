(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{1174:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,r,i,a,u,l,c,s,f,p=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),d=n(4),h=n(8),v=_(n(40)),b=(n(1175),_(n(1176))),y=(_(n(588)),_(n(582))),g=n(234),m=(_(n(739)),n(808)),w=n(828);function _(e){return e&&e.__esModule?e:{default:e}}function j(e){return function(){var t=e.apply(this,arguments);return new Promise((function(e,n){return function o(r,i){try{var a=t[r](i),u=a.value}catch(e){return void n(e)}if(!a.done)return Promise.resolve(u).then((function(e){o("next",e)}),(function(e){o("throw",e)}));e(u)}("next")}))}}function k(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function P(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function O(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}o=d.Radio.channel("pmc"),(u=o.request("get-event-manager")).initAll(),f="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC",l=function(e){var t;return t=e.split(f)[1],Number((0,b.default)(t))},c=function(e){return!!e.startsWith(f)},s=function(){var e,t,n,o,r;for(o in t=g.eventIndex.get("categories"),r=new d.Collection,t)(n=t[o]).pmc_ids.length&&(n.id=n.name,r.add(n));return e=new d.Collection([]),r.each((function(t){return t.get("pmc_ids").forEach((function(t){return e.add({id:t,name:t})}))})),e},a=s(),i=function(){var e=function(e){function t(){return k(this,t),P(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return O(t,e),t}(h.View);return e.prototype.template=v.default.renderable((function(e){return v.default.h5(".text-center","Model Data"),v.default.div(".jsonview")})),e.prototype.behaviors=[y.default],e}.call(void 0),r=function(){var e=function(e){function t(){return k(this,t),P(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}var n;return O(t,e),p(t,[{key:"onRender",value:function(){var e,t=this;return(e=o.request("get-fm-collection")).fetch().then((function(){var n,o,r;return s().each((function(t){if(e.get(t.id))return a.remove(t)})),t.collection.length?(r=new i({model:t.collection}),t.showChildView("content",r),(n=new m.ProgressModel).set("valuemax",t.collection.length),n.set("valuenow",0),r=new m.ProgressView({model:n}),t.showChildView("importProgress",r),t.progressModel=n,t.progressView=r,o=t.collection.length+" models to import.",t.ui.header.text(o)):(t.ui.importBtn.hide(),t.ui.header.text("No models to import."))}))}},{key:"importModel",value:function(e,t){var n,r=this;return(n=o.request("make-remote-model",e.id)).fetch().done((function(){var e,i;return i=Number(n.get("id")),e=n.get("content"),o.request("save-fm-content",i,e).then((function(){return t+=1,r.progressModel.set("valuenow",t),r.progressView.render(),r.triggerMethod("model:imported")}))}))}},{key:"onModelImported",value:function(){var e,t;if(this.collection.length)return t=this.progressModel.get("valuenow"),e=this.collection.pop(),this.importModel(e,t)}},{key:"importBtnClicked",value:function(){return this.onModelImported()}},{key:"updateBtnClicked",value:(n=j(regeneratorRuntime.mark((function e(){var t,n,r,i,a,s,f,p;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(a in t=g.eventIndex.get("categories"),new d.Collection,t)(i=t[a]).pmc_ids.length&&(n=u.collections.categories,(s=n.findWhere({name:i.name})).set("selected",!0));return f=u.fetchEventModels(),p=o.request("get-topic-collection"),e.t0=d.Collection,e.next=8,p.fetch();case 8:return e.t1=e.sent,p=new e.t0(e.t1),r=o.request("get-fmtopic-collection"),e.next=13,r.fetch();case 13:return e.abrupt("return",Promise.all(f).then((function(){return u.getSelectedCategories().pluck("name").forEach((function(e){return u.getEventData(e).get("events").forEach((function(e){var t,n;if(c(e.link))return t=l(e.link),e.topics,e.topics.forEach((n=j(regeneratorRuntime.mark((function e(n){var o,a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o=p.findWhere({name:n}),a=o.id,i={pmcid:t,topic_id:a},null!=r.findWhere(i)){e.next=10;break}return s=new w.FMTopicModel(i),r.add(s),e.next=9,s.save();case 9:return e.abrupt("return",e.sent);case 10:case"end":return e.stop()}}),e,this)}))),function(e){return n.apply(this,arguments)}))}))}))})));case 14:case"end":return e.stop()}}),e,this)}))),function(){return n.apply(this,arguments)})}]),t}(h.View);return e.prototype.template=v.default.renderable((function(e){return v.default.h3(".text-center","Import PMC Data"),v.default.div(".paginate-bar"),v.default.div(".import-progress"),v.default.div(".import-btn.btn.btn-outline-warning","Import Models"),v.default.div(".update-btn.btn.btn-outline-warning","Update Local Models"),v.default.div(".content")})),e.prototype.ui={content:".content",paginateBar:".paginate-bar",importProgress:".import-progress",importBtn:".import-btn",updateBtn:".update-btn",header:"h3"},e.prototype.regions={content:"@ui.content",paginateBar:"@ui.paginateBar",importProgress:"@ui.importProgress",importBtn:"@ui.importBtn"},e.prototype.events={"click @ui.importBtn":"importBtnClicked","click @ui.updateBtn":"updateBtnClicked","model:imported":"onModelImported"},e.prototype.collection=a,e}.call(void 0),t.default=r},1175:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.promisify=o;function o(e){if("function"!=typeof e)throw new TypeError("Argument to promisify must be a function");var t=e["__ES6-PROMISIFY--CUSTOM-ARGUMENTS__"],n=o.Promise||Promise;if("function"!=typeof n)throw new Error("No Promise implementation found; do you need a polyfill?");return function(){for(var o=this,r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];return new n((function(n,r){i.push((function(e){if(e)return r(e);for(var o=arguments.length,i=new Array(o>1?o-1:0),a=1;a<o;a++)i[a-1]=arguments[a];if(1===i.length||!t)return n(i[0]);var u={};i.forEach((function(e,n){var o=t[n];o&&(u[o]=e)})),n(u)})),e.apply(o,i)}))}}o.argumentNames="__ES6-PROMISIFY--CUSTOM-ARGUMENTS__",o.Promise=void 0},1176:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return e.replace(/\/+$/,"")}},582:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,r,i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a=n(8),u=n(585),l=(o=u)&&o.__esModule?o:{default:o};function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}n(583),r=function(e){function t(){return c(this,t),s(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),i(t,[{key:"options",value:function(){return{jviewSelector:".jsonview"}}},{key:"ui",value:function(){return{jsonView:this.getOption("jviewSelector")}}},{key:"onDomRefresh",value:function(){var e;return e=this.view.model.toJSON(),this.view.jsonView=new l.default(e),this.ui.jsonView.prepend(this.view.jsonView.dom)}}]),t}(a.Behavior),t.default=r},583:function(e,t,n){var o=n(580),r=n(584);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var i={insert:"head",singleton:!1};o(r,i);e.exports=r.locals||{}},584:function(e,t,n){(t=n(581)(!1)).push([e.i,'.jsonView{\n    margin-left: 20px;\n    font-family: Consolas, "Lucida Console", Menlo, "dejavu sans mono", monospace;\n    font-size: 16px;\n    line-height: 16px;\n    padding: 2px;\n    cursor: default;\n    color: cornsilk;\n    white-space: nowrap;\n    -webkit-user-select: none;\n}\n\n.jsonView>div{\n    display: inline-block;\n}\n\n.jsonView>.children, .jsonView.insert{\n    display: block;\n}\n\n.jsonView>.name{\n    color: mistyrose;\n}\n\n.jsonView>.separator:before{\n    content: ":";\n}\n\n.jsonView>.separator {\n    padding-right: 5px;\n}\n\n.jsonView>.value.null{\n    color: rgb(128, 128, 128);\n}\n\n.jsonView>.value.boolean, .jsonView>.value.number{\n    color: lightseagreen;\n}\n\n.jsonView>.value.string:not(.edit):before, .jsonView>.value.string:not(.edit):after{\n    content: "\\"";\n}\n\n.jsonView>.value.string {\n    color: lightsalmon;\n}\n\n.jsonView>.name:hover, .jsonView>.value:hover{\n    background-color: rgba(56, 121, 217, 0.1);\n}\n\n.jsonView>.jv-expand, .jsonView>.jv-collapse{\n    min-width: 20px;\n    margin-left: -20px;\n    cursor: pointer;\n}\n\n.jsonView>.jv-expand:before{\n    content: \'\\25B6\';\n}\n\n.jsonView>.jv-collapse:before{\n    content: \'\\25BC\';\n}\n\n.jsonView>.edit{\n    padding: 0px 5px 0px 5px;\n    white-space: nowrap;\n    overflow: hidden;\n    background-color: transparent;\n}\n\n.jsonView>.edit br{\n    display: none;\n}\n\n.jsonView>.edit *{\n    display: inline;\n    white-space: nowrap;\n}\n\n.jsonView>.value.edit{\n    color: rgb(0, 0, 0);\n}\n\n.jsonView>.delete:before{\n    content: \'X\';\n}\n\n.jsonView>.delete{\n    opacity: 0;\n    display: inline;\n    padding: 3px;\n    margin-left: 20px;\n    cursor: pointer;\n    color: rgb(150, 150, 150);\n}\n\n.jsonView>.delete:hover{\n    opacity: 1;\n    color: rgb(0, 0, 0);\n    background: rgb(220, 220, 220);\n}\n\n.jsonView>.insert:before{\n    content: \'+\';\n}\n\n.jsonView>.insert{\n    display: none;\n    color: rgb(150, 150, 150);\n    cursor: pointer;\n}\n\n.jsonView.jv-expanded>.insert, .jsonView.jv-expanded>.insert{\n    display: inline-block;\n    margin-left: 20px;\n    padding: 3px;\n}\n\n.jsonView>.insert:hover{\n    color: rgb(0, 0, 0);\n    background: rgb(220, 220, 220);\n}\n',""]),e.exports=t},588:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=l(n(37)),i=n(4),a=n(8),u=l(n(40));function l(e){return e&&e.__esModule?e:{default:e}}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var f;f=function(){var e=function(e){function t(){c(this,t);var e=s(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments));return e.keydownHandler=e.keydownHandler.bind(e),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"options",value:function(){return{setKeyHandler:!1,barLength:15,barStopAt:7}}},{key:"templateContext",value:function(){return{collection:this.collection,barLength:this.getOption("barLength"),barStopAt:this.getOption("barStopAt")}}},{key:"onDomRefresh",value:function(){return this.updateNavButtons()}},{key:"turnPage",value:function(e){var t;return e.preventDefault(),t=(0,r.default)(e.target).attr("data-pagenumber"),this.collection.getPage(Number(t)),this.updateNavButtons()}},{key:"updateNavButtons",value:function(){var e,t,n;return n=this.collection.state,t=this.ui.prevButton.parent(),n.currentPage===n.firstPage?t.hasClass("disabled")||t.addClass("disabled"):t.hasClass("disabled")&&t.removeClass("disabled"),e=this.ui.nextButton.parent(),n.currentPage===n.lastPage?e.hasClass("disabled")||e.addClass("disabled"):e.addClass("disabled")&&e.removeClass("disabled"),this.ui.numberedPage.parent().removeClass("active"),(0,r.default)('[data-pagenumber="'+n.currentPage+'"]').parent().addClass("active")}},{key:"getAnotherPage",value:function(e){var t,n,o,r;if(n=(r=this.collection.state).currentPage===r.lastPage,t=r.currentPage===r.firstPage,"prev"!==e||t){if("next"!==e||n){if(n)return;throw new Error("bad direction '"+e+"'")}o=this.collection.getNextPage()}else r.currentPage!==r.firstPage&&(o=this.collection.getPreviousPage());return this.updateNavButtons(),o}},{key:"getPreviousPage",value:function(){return this.getAnotherPage("prev")}},{key:"getNextPage",value:function(){return this.getAnotherPage("next")}},{key:"onRender",value:function(){if(this.getOption("setKeyHandler"))return this.onRenderHandleKeys()}},{key:"onBeforeDestroy",value:function(){if(this.getOption("setKeyHandler"))return this.onBeforeDestroyHandleKeys()}},{key:"handleKeyCommand",value:function(e){if("prev"===e||"next"===e)return this.getAnotherPage(e)}},{key:"keydownHandler",value:function(e){var n,o,r,i;for(n in function(e,t){if(!(e instanceof t))throw new Error("Bound instance method accessed before binding")}(this,t),r=[],o=this.keycommands)i=o[n],e.keyCode===i?r.push(this.handleKeyCommand(n)):r.push(void 0);return r}},{key:"onRenderHandleKeys",value:function(){return(0,r.default)("html").keydown(this.keydownHandler)}},{key:"onBeforeDestroyHandleKeys",value:function(){return(0,r.default)("html").unbind("keydown",this.keydownHandler)}}]),t}(a.View);return e.prototype.tagName="ul",e.prototype.className="pagination",e.prototype.template=u.default.renderable((function(e){var t,n,o,r,a,l,c,s,f,p,d;for(o=(p=e instanceof i.Collection?e.state:e.collection.state).firstPage,t=!1,(a=p.lastPage)>e.barLength&&(t=!0,d=e.barStopAt,f=a-e.barStopAt),u.default.li(".page-item",(function(){return u.default.a(".prev.page-link",(function(){return u.default.i(".fa.fa-arrow-left")}))})),n=!1,l=r=c=o,s=a;c<=s?r<=s:r>=s;l=c<=s?++r:--r)t&&l>=d&&l<=f?n||(n=!0,u.default.li(".page-item",(function(){return u.default.a(".ellipsis-page.page-link","...")}))):u.default.li(".page-item",(function(){return u.default.a(".numbered-page.page-link",{href:"#",data:{pageNumber:l}},l)}));return u.default.li(".page-item",(function(){return u.default.a(".next.page-link",(function(){return u.default.i(".fa.fa-arrow-right")}))}))})),e.prototype.ui={numberedPage:".numbered-page",prevButton:".prev",nextButton:".next"},e.prototype.events={"click @ui.numberedPage":"turnPage","click @ui.prevButton":"getPreviousPage","click @ui.nextButton":"getNextPage"},e.prototype.keycommands={prev:37,next:39},e}.call(void 0),t.default=f},589:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,r,i,a=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),u=n(4),l=n(8),c=n(236),s=(o=c)&&o.__esModule?o:{default:o};function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}i=u.Radio.channel("global"),r=function(){var e=function(e){function t(){return f(this,t),p(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,[{key:"emptyModal",value:function(){return i.request("main:app:object").getView().getRegion("modal").empty()}}]),t}(l.View);return e.prototype.behaviors=[s.default],e}.call(void 0),t.default=r},739:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,r,i,a,u,l=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),c=n(4),s=n(8),f=w(n(40)),p=n(734),d=w(n(736)),h=w(n(593)),v=w(n(582)),b=w(n(740)),y=w(n(741)),g=w(n(742)),m=w(n(743));function w(e){return e&&e.__esModule?e:{default:e}}function _(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function j(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function k(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}r=c.Radio.channel("global"),o=c.Radio.channel("pmc"),a=function(){var e=function(e){function t(){return _(this,t),j(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return k(t,e),l(t,[{key:"viewClicked",value:function(){var e;return e=this.model.get("name"),(0,h.default)("#pmc/topics/"+e)}}]),t}(s.View);return e.prototype.tagName="span",e.prototype.className="badge badge-primary",e.prototype.template=f.default.renderable((function(e){return f.default.text(e.name)})),e.prototype.behaviors=[d.default],e.prototype.events={click:"viewClicked"},e}.call(void 0),u=function(){var e=function(e){function t(){return _(this,t),j(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return k(t,e),t}(s.CollectionView);return e.prototype.childView=a,e}.call(void 0),i=function(){var e=function(e){function t(){return _(this,t),j(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return k(t,e),l(t,[{key:"onRender",value:function(){var e,t,n,r,i,a=this;return this.ui.jsonView.hide(),this.ui.topicsBtn.hide(),r=new c.Collection,t=this.model.id,i=o.request("get-topic-collection"),e=o.request("get-fmtopic-collection"),n=[i.fetch(),e.fetch()],Promise.all(n).then((function(){var n;return[],e.filter({pmcid:t}).forEach((function(e){var t,n;return n=e.get("topic_id"),t=i.get(n).get("name"),r.add({id:t,name:t})})),n=new u({collection:r}),a.showChildView("topicsList",n)}))}},{key:"pmcAnchorClicked",value:function(e){return e.preventDefault()}},{key:"deleteBtnClicked",value:function(){var e=this;return this.model.destroy().done((function(){return e.trigger("model:destroyed")}))}},{key:"abstractBtnClicked",value:function(){return this.ui.abstractCard.toggle()}},{key:"topicsBtnClicked",value:function(){var e;return e=new m.default({model:this.model}),r.request("show-modal",e)}}]),t}(s.View);return e.prototype.behaviors=[v.default],e.prototype.template=f.default.renderable((function(e){var t,n,o;return o=(0,p.JSONPath)("*..article-meta",e)[0],t=(0,b.default)(e),n=(0,y.default)(e.id),f.default.div(".card",(function(){return f.default.div(".card-body",(function(){var r;return f.default.h5(".card-title",(function(){return f.default.a({href:"#pmc/view/"+e.id},t.title)})),f.default.div(".small",t.journal),f.default.a(".pmc-anchor.small",{href:n},"(PMC)"),(null!=t?t.doi:void 0)&&f.default.a(".small",{href:(0,g.default)(t.doi),target:"_blank"},(function(){return f.default.text(" (doi:"+t.doi+")")})),f.default.span(".destroy-btn.badge.badge-danger",{type:"button"},"Delete"),(null!=o?o.abstract:void 0)&&(r=o.abstract,f.default.span(".abstract-btn.badge.badge-dark",{type:"button"},(function(){return f.default.text("toggle abstract")})),f.default.div(".abstract-card.card-text",{style:"display: none;"},(function(){var e,t,n,i,a,u,l,c,s,p,d,h,v,b;if(f.default.text("Abstract"),null!=r?r.sec:void 0){for(v=[],n=0,u=(s=o.abstract.sec).length;n<u;n++)i=s[n],f.default.h6(".card-text.small",i.title),c=(null!=(p=i.p)?p.__text:void 0)?i.p.__text:i.p,v.push(f.default.p(".card-text.small",c));return v}if(null!=(t=(null!=(d=(e=r).p)?d.__text:void 0)?e.p.__text:e.p)?t.length:void 0)return f.default.div(".card-text.small",t);for(b=[],a=0,l=e.length;a<l;a++)c=(i=e[a]).p,(null!=(h=i.p)?h.__text:void 0)&&(c=i.p.__text),b.push(f.default.p(".card-text.small",c));return b}))),f.default.div(".abstract-container"),f.default.div(".card-footer",(function(){return f.default.span(".topics-list.small.font-italic"),f.default.span(".topics-btn.badge.badge-dark",{type:"button"},"assign topics")}))})),f.default.div(".jsonview")}))})),e.prototype.ui={pmcAnchor:".pmc-anchor",deleteBtn:".destroy-btn",jsonView:".jsonview",abstractCard:".abstract-card",abstractBtn:".abstract-btn",topicsBtn:".topics-btn",topicsList:".topics-list"},e.prototype.regions={topicsList:"@ui.topicsList"},e.prototype.events={"click @ui.pmcAnchor":"pmcAnchorClicked","click @ui.deleteBtn":"deleteBtnClicked","click @ui.abstractBtn":"abstractBtnClicked","click @ui.topicsBtn":"topicsBtnClicked"},e}.call(void 0),t.default=i},740:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,r,i=n(0),a=((o=i)&&o.__esModule,n(734));r=function(e){var t,n,o;return(null!=(n=(0,a.JSONPath)("*..OAI-PMH",e)[0])?n.error:void 0)?{}:{journal:(0,a.JSONPath)("*..journal-title",n)[0],title:(null!=(o=(0,a.JSONPath)("*..article-title",n)[0])?o.__text:void 0)?o.__text:o,doi:null!=(t=(0,a.JSONPath)('*..article-id[?(@["_pub-id-type"]=="doi")]',n)[0])?t.__text:void 0}},t.default=r},741:function(e,t,n){"use strict";var o;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return o+"PMC"+e+"/"},o="https://www.ncbi.nlm.nih.gov/pmc/articles/"},742:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return"https://dx.doi.org/","https://dx.doi.org/"+e}},743:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,r,i,a=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),u=n(4),l=n(8),c=d(n(40)),s=d(n(589)),f=d(n(582)),p=d(n(234));function d(e){return e&&e.__esModule?e:{default:e}}function h(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function v(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function b(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}o=u.Radio.channel("pmc"),i=function(){var e=function(e){function t(){return h(this,t),v(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return b(t,e),t}(l.View);return e.prototype.behaviors=[f.default],e.prototype.template=c.default.renderable((function(){return c.default.div(".jsonview")})),e}.call(void 0),r=function(){var e=function(e){function t(){return h(this,t),v(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return b(t,e),a(t,[{key:"okBtnClicked",value:function(){return console.log("OK clicked")}},{key:"onRender",value:function(){var e,t,n,r;return r=o.request("get-topic-collection"),e=o.request("get-fmtopic-collection"),console.log("topics, fmtopics",r,e),n=this,t=new u.Model({topics:r,fmtopics:e,eventIndex:p.default.eventIndex}),r.fetch().then((function(){return e.fetch()})).then((function(){var o;return console.log("all fetched",r,e),o=new i({model:t}),n.showChildView("content",o)}))}}]),t}(s.default);return e.prototype.template=c.default.renderable((function(e){return console.log("model",e),c.default.div(".modal-dialog.modal-md",(function(){return c.default.div(".modal-content",(function(){return c.default.text("Topics Assigned to pmeid: "+e.id),c.default.div(".content"),c.default.div(".row",(function(){return c.default.button(".close-btn.btn.btn-warning.fa.fa-close.mr-auto",{data:{dismiss:"modal"}},"Close"),c.default.button(".ok-button.btn.btn-success.fa.fa-check.ml-auto","Ok")}))}))}))})),e.prototype.ui={closeBtn:".close-btn",okBtn:".ok-button",content:".content",topicsRegion:".topics"},e.prototype.regions={content:"@ui.content"},e.prototype.events={"click @ui.okBtn":"okBtnClicked","click @ui.closeBtn":"emptyModal"},e}.call(void 0),t.default=r},808:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ProgressView=t.ProgressModel=void 0;var o,r,i,a=n(4),u=n(8),l=n(40),c=(o=l)&&o.__esModule?o:{default:o};function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function p(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}console.warn("Deprecated: try using tbirds/views/progress instead."),t.ProgressModel=r=function(){var e=function(e){function t(){return s(this,t),f(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return p(t,e),t}(a.Model);return e.prototype.defaults={valuemin:0,valuemax:100,valuenow:0},e}.call(void 0),t.ProgressView=i=function(){var e=function(e){function t(){return s(this,t),f(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return p(t,e),t}(u.View);return e.prototype.template=c.default.renderable((function(e){return c.default.div(".progress",(function(){var t;return t=Math.floor(e.valuenow/e.valuemax*100+.5),c.default.div(".progress-bar.progress-bar-striped",{role:"progressbar",style:"width: "+t+"%"},(function(){return c.default.span({style:"color:black;"},e.valuenow+" of "+e.valuemax+".")}))}))})),e.prototype.modelEvents={change:"render"},e}.call(void 0),t.ProgressModel=r,t.ProgressView=i}}]);
//# sourceMappingURL=pmc-view-import-pmc-data-b7fad0a7b4dae72c8573.js.map