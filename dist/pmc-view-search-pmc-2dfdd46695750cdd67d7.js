(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{1172:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,r,i,u=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a=n(4),l=n(8),c=d(n(40)),s=d(n(0)),f=d(n(807)),p=d(n(739));function d(e){return e&&e.__esModule?e:{default:e}}function b(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function h(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function v(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}o=a.Radio.channel("pmc"),i=function(){var e=function(e){function t(){return b(this,t),h(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return v(t,e),u(t,[{key:"templateContext",value:function(){return{hasOAIcontent:this.model.hasOAIcontent()}}},{key:"onRender",value:function(){var e;if(this.model.hasOAIcontent())return e=new p.default({model:this.model}),this.showChildView("content",e)}},{key:"buttonClicked",value:function(){var e,t;if(t=this,!(e=this.model).get("content"))return e.fetch().done((function(){var n,r;return r=Number(e.get("id")),n=e.get("content"),o.request("save-fm-content",r,n).then((function(){var e;return(e=o.request("get-fm-collection")).fetch().done((function(){var n,o;return n=e.get(r),t.model=n,o=new p.default({model:n}),t.showChildView("content",o),t.ui.button.hide()}))}))}))}}]),t}(l.View);return e.prototype.template=c.default.renderable((function(e){return c.default.text("PMCID: PMC"+e.id+" "),e.hasOAIcontent||(".btn.btn-outline-warning.btn-sm",c.default.button(".dl-btn.btn.btn-outline-warning.btn-sm.fa.fa-download",(function(){return" Download Front Matter"}))),c.default.div(".content")})),e.prototype.ui={content:".content",button:".dl-btn"},e.prototype.regions={content:"@ui.content"},e.prototype.events={"click @ui.button":"buttonClicked"},e}.call(void 0),r=function(){var e=function(e){function t(){return b(this,t),h(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return v(t,e),u(t,[{key:"onRender",value:function(){var e;return e=new f.default,this.showChildView("searchInput",e)}},{key:"searchClicked",value:function(e){return this.searchTerm(e.value)}},{key:"searchTerm",value:function(e){var t,n=this;return console.log("searchTerm",e),(t=o.request("make-search-model",e)).fetch().done((function(){var e,r,u,c;return r=new a.Collection([]),e=o.request("get-fm-collection"),u=t.get("eSearchResult"),s.default.map(u.IdList.Id,Number).forEach((function(n){var i;return null!=(i=e.get(n))?(console.log("LOCAL model found",i),t=i):t=o.request("make-remote-model",n),r.add(t)})),c=new l.CollectionView({collection:r,childView:i}),n.showChildView("content",c)}))}}]),t}(l.View);return e.prototype.template=c.default.renderable((function(){return c.default.div(".search-input"),c.default.div(".content")})),e.prototype.ui={searchInput:".search-input",content:".content",button:"button",input:"input"},e.prototype.regions={content:"@ui.content",searchInput:"@ui.searchInput"},e.prototype.childViewEvents={"input:submit":"searchClicked"},e}.call(void 0),t.default=r},582:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,r,i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),u=n(8),a=n(585),l=(o=a)&&o.__esModule?o:{default:o};function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}n(583),r=function(e){function t(){return c(this,t),s(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),i(t,[{key:"options",value:function(){return{jviewSelector:".jsonview"}}},{key:"ui",value:function(){return{jsonView:this.getOption("jviewSelector")}}},{key:"onDomRefresh",value:function(){var e;return e=this.view.model.toJSON(),this.view.jsonView=new l.default(e),this.ui.jsonView.prepend(this.view.jsonView.dom)}}]),t}(u.Behavior),t.default=r},583:function(e,t,n){var o=n(580),r=n(584);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var i={insert:"head",singleton:!1};o(r,i);e.exports=r.locals||{}},584:function(e,t,n){(t=n(581)(!1)).push([e.i,'.jsonView{\n    margin-left: 20px;\n    font-family: Consolas, "Lucida Console", Menlo, "dejavu sans mono", monospace;\n    font-size: 16px;\n    line-height: 16px;\n    padding: 2px;\n    cursor: default;\n    color: cornsilk;\n    white-space: nowrap;\n    -webkit-user-select: none;\n}\n\n.jsonView>div{\n    display: inline-block;\n}\n\n.jsonView>.children, .jsonView.insert{\n    display: block;\n}\n\n.jsonView>.name{\n    color: mistyrose;\n}\n\n.jsonView>.separator:before{\n    content: ":";\n}\n\n.jsonView>.separator {\n    padding-right: 5px;\n}\n\n.jsonView>.value.null{\n    color: rgb(128, 128, 128);\n}\n\n.jsonView>.value.boolean, .jsonView>.value.number{\n    color: lightseagreen;\n}\n\n.jsonView>.value.string:not(.edit):before, .jsonView>.value.string:not(.edit):after{\n    content: "\\"";\n}\n\n.jsonView>.value.string {\n    color: lightsalmon;\n}\n\n.jsonView>.name:hover, .jsonView>.value:hover{\n    background-color: rgba(56, 121, 217, 0.1);\n}\n\n.jsonView>.jv-expand, .jsonView>.jv-collapse{\n    min-width: 20px;\n    margin-left: -20px;\n    cursor: pointer;\n}\n\n.jsonView>.jv-expand:before{\n    content: \'\\25B6\';\n}\n\n.jsonView>.jv-collapse:before{\n    content: \'\\25BC\';\n}\n\n.jsonView>.edit{\n    padding: 0px 5px 0px 5px;\n    white-space: nowrap;\n    overflow: hidden;\n    background-color: transparent;\n}\n\n.jsonView>.edit br{\n    display: none;\n}\n\n.jsonView>.edit *{\n    display: inline;\n    white-space: nowrap;\n}\n\n.jsonView>.value.edit{\n    color: rgb(0, 0, 0);\n}\n\n.jsonView>.delete:before{\n    content: \'X\';\n}\n\n.jsonView>.delete{\n    opacity: 0;\n    display: inline;\n    padding: 3px;\n    margin-left: 20px;\n    cursor: pointer;\n    color: rgb(150, 150, 150);\n}\n\n.jsonView>.delete:hover{\n    opacity: 1;\n    color: rgb(0, 0, 0);\n    background: rgb(220, 220, 220);\n}\n\n.jsonView>.insert:before{\n    content: \'+\';\n}\n\n.jsonView>.insert{\n    display: none;\n    color: rgb(150, 150, 150);\n    cursor: pointer;\n}\n\n.jsonView.jv-expanded>.insert, .jsonView.jv-expanded>.insert{\n    display: inline-block;\n    margin-left: 20px;\n    padding: 3px;\n}\n\n.jsonView>.insert:hover{\n    color: rgb(0, 0, 0);\n    background: rgb(220, 220, 220);\n}\n',""]),e.exports=t},589:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,r,i,u=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a=n(4),l=n(8),c=n(236),s=(o=c)&&o.__esModule?o:{default:o};function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}i=a.Radio.channel("global"),r=function(){var e=function(e){function t(){return f(this,t),p(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),u(t,[{key:"emptyModal",value:function(){return i.request("main:app:object").getView().getRegion("modal").empty()}}]),t}(l.View);return e.prototype.behaviors=[s.default],e}.call(void 0),t.default=r},739:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,r,i,u,a,l=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),c=n(4),s=n(8),f=g(n(40)),p=n(734),d=g(n(736)),b=g(n(593)),h=g(n(582)),v=g(n(740)),y=g(n(741)),w=g(n(742)),m=g(n(743));function g(e){return e&&e.__esModule?e:{default:e}}function _(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function j(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function O(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}r=c.Radio.channel("global"),o=c.Radio.channel("pmc"),u=function(){var e=function(e){function t(){return _(this,t),j(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return O(t,e),l(t,[{key:"viewClicked",value:function(){var e;return e=this.model.get("name"),(0,b.default)("#pmc/topics/"+e)}}]),t}(s.View);return e.prototype.tagName="span",e.prototype.className="badge badge-primary",e.prototype.template=f.default.renderable((function(e){return f.default.text(e.name)})),e.prototype.behaviors=[d.default],e.prototype.events={click:"viewClicked"},e}.call(void 0),a=function(){var e=function(e){function t(){return _(this,t),j(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return O(t,e),t}(s.CollectionView);return e.prototype.childView=u,e}.call(void 0),i=function(){var e=function(e){function t(){return _(this,t),j(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return O(t,e),l(t,[{key:"onRender",value:function(){var e,t,n,r,i,u=this;return this.ui.jsonView.hide(),this.ui.topicsBtn.hide(),r=new c.Collection,t=this.model.id,i=o.request("get-topic-collection"),e=o.request("get-fmtopic-collection"),n=[i.fetch(),e.fetch()],Promise.all(n).then((function(){var n;return[],e.filter({pmcid:t}).forEach((function(e){var t,n;return n=e.get("topic_id"),t=i.get(n).get("name"),r.add({id:t,name:t})})),n=new a({collection:r}),u.showChildView("topicsList",n)}))}},{key:"pmcAnchorClicked",value:function(e){return e.preventDefault()}},{key:"deleteBtnClicked",value:function(){var e=this;return this.model.destroy().done((function(){return e.trigger("model:destroyed")}))}},{key:"abstractBtnClicked",value:function(){return this.ui.abstractCard.toggle()}},{key:"topicsBtnClicked",value:function(){var e;return e=new m.default({model:this.model}),r.request("show-modal",e)}}]),t}(s.View);return e.prototype.behaviors=[h.default],e.prototype.template=f.default.renderable((function(e){var t,n,o;return o=(0,p.JSONPath)("*..article-meta",e)[0],t=(0,v.default)(e),n=(0,y.default)(e.id),f.default.div(".card",(function(){return f.default.div(".card-body",(function(){var r;return f.default.h5(".card-title",(function(){return f.default.a({href:"#pmc/view/"+e.id},t.title)})),f.default.div(".small",t.journal),f.default.a(".pmc-anchor.small",{href:n},"(PMC)"),(null!=t?t.doi:void 0)&&f.default.a(".small",{href:(0,w.default)(t.doi),target:"_blank"},(function(){return f.default.text(" (doi:"+t.doi+")")})),f.default.span(".destroy-btn.badge.badge-danger",{type:"button"},"Delete"),(null!=o?o.abstract:void 0)&&(r=o.abstract,f.default.span(".abstract-btn.badge.badge-dark",{type:"button"},(function(){return f.default.text("toggle abstract")})),f.default.div(".abstract-card.card-text",{style:"display: none;"},(function(){var e,t,n,i,u,a,l,c,s,p,d,b,h,v;if(f.default.text("Abstract"),null!=r?r.sec:void 0){for(h=[],n=0,a=(s=o.abstract.sec).length;n<a;n++)i=s[n],f.default.h6(".card-text.small",i.title),c=(null!=(p=i.p)?p.__text:void 0)?i.p.__text:i.p,h.push(f.default.p(".card-text.small",c));return h}if(null!=(t=(null!=(d=(e=r).p)?d.__text:void 0)?e.p.__text:e.p)?t.length:void 0)return f.default.div(".card-text.small",t);for(v=[],u=0,l=e.length;u<l;u++)c=(i=e[u]).p,(null!=(b=i.p)?b.__text:void 0)&&(c=i.p.__text),v.push(f.default.p(".card-text.small",c));return v}))),f.default.div(".abstract-container"),f.default.div(".card-footer",(function(){return f.default.span(".topics-list.small.font-italic"),f.default.span(".topics-btn.badge.badge-dark",{type:"button"},"assign topics")}))})),f.default.div(".jsonview")}))})),e.prototype.ui={pmcAnchor:".pmc-anchor",deleteBtn:".destroy-btn",jsonView:".jsonview",abstractCard:".abstract-card",abstractBtn:".abstract-btn",topicsBtn:".topics-btn",topicsList:".topics-list"},e.prototype.regions={topicsList:"@ui.topicsList"},e.prototype.events={"click @ui.pmcAnchor":"pmcAnchorClicked","click @ui.deleteBtn":"deleteBtnClicked","click @ui.abstractBtn":"abstractBtnClicked","click @ui.topicsBtn":"topicsBtnClicked"},e}.call(void 0),t.default=i},740:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,r,i=n(0),u=((o=i)&&o.__esModule,n(734));r=function(e){var t,n,o;return(null!=(n=(0,u.JSONPath)("*..OAI-PMH",e)[0])?n.error:void 0)?{}:{journal:(0,u.JSONPath)("*..journal-title",n)[0],title:(null!=(o=(0,u.JSONPath)("*..article-title",n)[0])?o.__text:void 0)?o.__text:o,doi:null!=(t=(0,u.JSONPath)('*..article-id[?(@["_pub-id-type"]=="doi")]',n)[0])?t.__text:void 0}},t.default=r},741:function(e,t,n){"use strict";var o;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return o+"PMC"+e+"/"},o="https://www.ncbi.nlm.nih.gov/pmc/articles/"},742:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return"https://dx.doi.org/","https://dx.doi.org/"+e}},743:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,r,i,u=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a=n(4),l=n(8),c=d(n(40)),s=d(n(589)),f=d(n(582)),p=d(n(234));function d(e){return e&&e.__esModule?e:{default:e}}function b(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function h(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function v(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}o=a.Radio.channel("pmc"),i=function(){var e=function(e){function t(){return b(this,t),h(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return v(t,e),t}(l.View);return e.prototype.behaviors=[f.default],e.prototype.template=c.default.renderable((function(){return c.default.div(".jsonview")})),e}.call(void 0),r=function(){var e=function(e){function t(){return b(this,t),h(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return v(t,e),u(t,[{key:"okBtnClicked",value:function(){return console.log("OK clicked")}},{key:"onRender",value:function(){var e,t,n,r;return r=o.request("get-topic-collection"),e=o.request("get-fmtopic-collection"),console.log("topics, fmtopics",r,e),n=this,t=new a.Model({topics:r,fmtopics:e,eventIndex:p.default.eventIndex}),r.fetch().then((function(){return e.fetch()})).then((function(){var o;return console.log("all fetched",r,e),o=new i({model:t}),n.showChildView("content",o)}))}}]),t}(s.default);return e.prototype.template=c.default.renderable((function(e){return console.log("model",e),c.default.div(".modal-dialog.modal-md",(function(){return c.default.div(".modal-content",(function(){return c.default.text("Topics Assigned to pmeid: "+e.id),c.default.div(".content"),c.default.div(".row",(function(){return c.default.button(".close-btn.btn.btn-warning.fa.fa-close.mr-auto",{data:{dismiss:"modal"}},"Close"),c.default.button(".ok-button.btn.btn-success.fa.fa-check.ml-auto","Ok")}))}))}))})),e.prototype.ui={closeBtn:".close-btn",okBtn:".ok-button",content:".content",topicsRegion:".topics"},e.prototype.regions={content:"@ui.content"},e.prototype.events={"click @ui.okBtn":"okBtnClicked","click @ui.closeBtn":"emptyModal"},e}.call(void 0),t.default=r},807:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,r,i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),u=n(8),a=n(40),l=(o=a)&&o.__esModule?o:{default:o};function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}r=function(){var e=function(e){function t(){return c(this,t),s(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),i(t,[{key:"templateContext",value:function(){return{buttonText:this.getOption("buttonText")||"Search",placeholder:this.getOption("placeholder")||"Enter search term",buttonClass:this.getOption("buttonClass")||".btn.btn-outline-warning"}}},{key:"buttonClicked",value:function(){var e;if(null!=(e=this.ui.input.val().trim()))return this.trigger("input:submit",{value:e})}}]),t}(u.View);return e.prototype.template=l.default.renderable((function(e){return l.default.div(".input-group",(function(){return l.default.div(".input-group-prepend",(function(){return l.default.button(".input-group-text"+e.buttonClass,e.buttonText)})),l.default.input(".form-control",{type:"text",placeholder:e.placeholder})}))})),e.prototype.ui={button:"button",input:"input"},e.prototype.events={"click @ui.button":"buttonClicked"},e}.call(void 0),t.default=r}}]);
//# sourceMappingURL=pmc-view-search-pmc-2dfdd46695750cdd67d7.js.map