(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{418:function(e,t,n){var o=n(419);"string"==typeof o&&(o=[[e.i,o,""]]);var r={insert:"head",singleton:!1};n(413)(o,r);o.locals&&(e.exports=o.locals)},419:function(e,t,n){(e.exports=n(412)(!1)).push([e.i,'.jsonView{\n    margin-left: 20px;\n    font-family: Consolas, "Lucida Console", Menlo, "dejavu sans mono", monospace;\n    font-size: 16px;\n    line-height: 16px;\n    padding: 2px;\n    cursor: default;\n    color: cornsilk;\n    white-space: nowrap;\n    -webkit-user-select: none;\n}\n\n.jsonView>div{\n    display: inline-block;\n}\n\n.jsonView>.children, .jsonView.insert{\n    display: block;\n}\n\n.jsonView>.name{\n    color: mistyrose;\n}\n\n.jsonView>.separator:before{\n    content: ":";\n}\n\n.jsonView>.separator {\n    padding-right: 5px;\n}\n\n.jsonView>.value.null{\n    color: rgb(128, 128, 128);\n}\n\n.jsonView>.value.boolean, .jsonView>.value.number{\n    color: lightseagreen;\n}\n\n.jsonView>.value.string:not(.edit):before, .jsonView>.value.string:not(.edit):after{\n    content: "\\"";\n}\n\n.jsonView>.value.string {\n    color: lightsalmon;\n}\n\n.jsonView>.name:hover, .jsonView>.value:hover{\n    background-color: rgba(56, 121, 217, 0.1);\n}\n\n.jsonView>.jv-expand, .jsonView>.jv-collapse{\n    min-width: 20px;\n    margin-left: -20px;\n    cursor: pointer;\n}\n\n.jsonView>.jv-expand:before{\n    content: \'\\25B6\';\n}\n\n.jsonView>.jv-collapse:before{\n    content: \'\\25BC\';\n}\n\n.jsonView>.edit{\n    padding: 0px 5px 0px 5px;\n    white-space: nowrap;\n    overflow: hidden;\n    background-color: transparent;\n}\n\n.jsonView>.edit br{\n    display: none;\n}\n\n.jsonView>.edit *{\n    display: inline;\n    white-space: nowrap;\n}\n\n.jsonView>.value.edit{\n    color: rgb(0, 0, 0);\n}\n\n.jsonView>.delete:before{\n    content: \'X\';\n}\n\n.jsonView>.delete{\n    opacity: 0;\n    display: inline;\n    padding: 3px;\n    margin-left: 20px;\n    cursor: pointer;\n    color: rgb(150, 150, 150);\n}\n\n.jsonView>.delete:hover{\n    opacity: 1;\n    color: rgb(0, 0, 0);\n    background: rgb(220, 220, 220);\n}\n\n.jsonView>.insert:before{\n    content: \'+\';\n}\n\n.jsonView>.insert{\n    display: none;\n    color: rgb(150, 150, 150);\n    cursor: pointer;\n}\n\n.jsonView.jv-expanded>.insert, .jsonView.jv-expanded>.insert{\n    display: inline-block;\n    margin-left: 20px;\n    padding: 3px;\n}\n\n.jsonView>.insert:hover{\n    color: rgb(0, 0, 0);\n    background: rgb(220, 220, 220);\n}\n',""])},421:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,r,i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),u=n(7),a=n(417),l=(o=a)&&o.__esModule?o:{default:o};n(418),r=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),i(t,[{key:"options",value:function(){return{jviewSelector:".jsonview"}}},{key:"ui",value:function(){return{jsonView:this.getOption("jviewSelector")}}},{key:"onDomRefresh",value:function(){var e;return e=this.view.model.toJSON(),this.view.jsonView=new l.default(e),this.ui.jsonView.prepend(this.view.jsonView.dom)}}]),t}(u.Behavior),t.default=r},427:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,r,i,u=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a=n(6),l=n(7),c=n(153),s=(o=c)&&o.__esModule?o:{default:o};i=a.Radio.channel("global"),r=function(){var e=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),u(t,[{key:"emptyModal",value:function(){return i.request("main:app:object").getView().getRegion("modal").empty()}}]),t}(l.View);return e.prototype.behaviors=[s.default],e}.call(void 0),t.default=r},485:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,r,i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),u=n(6),a=n(7),l=h(n(34)),c=n(460),s=h(n(421)),f=h(n(486)),p=h(n(487)),d=h(n(488)),b=h(n(489));function h(e){return e&&e.__esModule?e:{default:e}}o=u.Radio.channel("global"),r=function(){var e=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),i(t,[{key:"onRender",value:function(){return this.ui.jsonView.hide()}},{key:"pmcAnchorClicked",value:function(e){return e.preventDefault()}},{key:"deleteBtnClicked",value:function(){var e=this;return this.model.destroy().done((function(){return e.trigger("model:destroyed")}))}},{key:"abstractBtnClicked",value:function(){return this.ui.abstractCard.toggle()}},{key:"topicsBtnClicked",value:function(){var e;return e=new b.default({model:this.model}),o.request("show-modal",e)}}]),t}(a.View);return e.prototype.behaviors=[s.default],e.prototype.template=l.default.renderable((function(e){var t,n,o;return o=(0,c.JSONPath)("*..article-meta",e)[0],t=(0,f.default)(e),n=(0,p.default)(e.id),l.default.div(".card",(function(){return l.default.div(".card-body",(function(){var e;return l.default.h5(".card-title",t.title),l.default.div(".small",t.journal),l.default.a(".pmc-anchor.small",{href:n},"(PMC)"),(null!=t?t.doi:void 0)&&l.default.a(".small",{href:(0,d.default)(t.doi),target:"_blank"},(function(){return l.default.text(" (doi:"+t.doi+")")})),l.default.span(".destroy-btn.badge.badge-danger",{type:"button"},"Delete"),(null!=o?o.abstract:void 0)&&(e=o.abstract,l.default.span(".abstract-btn.badge.badge-dark",{type:"button"},(function(){return l.default.text("toggle abstract")})),l.default.div(".abstract-card.card-text",{style:"display: none;"},(function(){var t,n,r,i,u,a,c,s,f,p,d,b,h,y;if(l.default.text("Abstract"),null!=e?e.sec:void 0){for(h=[],r=0,a=(f=o.abstract.sec).length;r<a;r++)i=f[r],l.default.h6(".card-text.small",i.title),s=(null!=(p=i.p)?p.__text:void 0)?i.p.__text:i.p,h.push(l.default.p(".card-text.small",s));return h}if(null!=(n=(null!=(d=(t=e).p)?d.__text:void 0)?t.p.__text:t.p)?n.length:void 0)return l.default.div(".card-text.small",n);for(y=[],u=0,c=t.length;u<c;u++)s=(i=t[u]).p,(null!=(b=i.p)?b.__text:void 0)&&(s=i.p.__text),y.push(l.default.p(".card-text.small",s));return y}))),l.default.div(".abstract-container"),l.default.div(".card-footer",(function(){return l.default.span(".topics-btn.badge.badge-dark",{type:"button"},"assign topics")}))})),l.default.div(".jsonview")}))})),e.prototype.ui={pmcAnchor:".pmc-anchor",deleteBtn:".destroy-btn",jsonView:".jsonview",abstractCard:".abstract-card",abstractBtn:".abstract-btn",topicsBtn:".topics-btn"},e.prototype.events={"click @ui.pmcAnchor":"pmcAnchorClicked","click @ui.deleteBtn":"deleteBtnClicked","click @ui.abstractBtn":"abstractBtnClicked","click @ui.topicsBtn":"topicsBtnClicked"},e}.call(void 0),t.default=r},486:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,r,i=n(1),u=((o=i)&&o.__esModule,n(460));r=function(e){var t,n,o;return(null!=(n=(0,u.JSONPath)("*..OAI-PMH",e)[0])?n.error:void 0)?{}:{journal:(0,u.JSONPath)("*..journal-title",n)[0],title:(null!=(o=(0,u.JSONPath)("*..article-title",n)[0])?o.__text:void 0)?o.__text:o,doi:null!=(t=(0,u.JSONPath)('*..article-id[?(@["_pub-id-type"]=="doi")]',n)[0])?t.__text:void 0}},t.default=r},487:function(e,t,n){"use strict";var o;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return o+"PMC"+e+"/"},o="https://www.ncbi.nlm.nih.gov/pmc/articles/"},488:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return"https://dx.doi.org/","https://dx.doi.org/"+e}},489:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,r,i,u=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a=n(6),l=n(7),c=d(n(34)),s=d(n(427)),f=d(n(421)),p=d(n(152));function d(e){return e&&e.__esModule?e:{default:e}}function b(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function h(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function y(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}o=a.Radio.channel("pmc"),i=function(){var e=function(e){function t(){return b(this,t),h(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return y(t,e),t}(l.View);return e.prototype.behaviors=[f.default],e.prototype.template=c.default.renderable((function(){return c.default.div(".jsonview")})),e}.call(void 0),r=function(){var e=function(e){function t(){return b(this,t),h(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return y(t,e),u(t,[{key:"okBtnClicked",value:function(){return console.log("OK clicked")}},{key:"onRender",value:function(){var e,t,n,r;return r=o.request("get-topic-collection"),e=o.request("get-fmtopic-collection"),console.log("topics, fmtopics",r,e),n=this,t=new a.Model({topics:r,fmtopics:e,eventIndex:p.default.eventIndex}),r.fetch().then((function(){return e.fetch()})).then((function(){var o;return console.log("all fetched",r,e),o=new i({model:t}),n.showChildView("content",o)}))}}]),t}(s.default);return e.prototype.template=c.default.renderable((function(e){return console.log("model",e),c.default.div(".modal-dialog.modal-md",(function(){return c.default.div(".modal-content",(function(){return c.default.text("Topics Assigned to pmeid: "+e.id),c.default.div(".content"),c.default.div(".row",(function(){return c.default.button(".close-btn.btn.btn-warning.fa.fa-close.mr-auto",{data:{dismiss:"modal"}},"Close"),c.default.button(".ok-button.btn.btn-success.fa.fa-check.ml-auto","Ok")}))}))}))})),e.prototype.ui={closeBtn:".close-btn",okBtn:".ok-button",content:".content",topicsRegion:".topics"},e.prototype.regions={content:"@ui.content"},e.prototype.events={"click @ui.okBtn":"okBtnClicked","click @ui.closeBtn":"emptyModal"},e}.call(void 0),t.default=r},490:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,r,i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),u=n(7),a=n(34),l=(o=a)&&o.__esModule?o:{default:o};r=function(){var e=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),i(t,[{key:"templateContext",value:function(){return{buttonText:this.getOption("buttonText")||"Search",placeholder:this.getOption("placeholder")||"Enter search term",buttonClass:this.getOption("buttonClass")||".btn.btn-outline-warning"}}},{key:"buttonClicked",value:function(){var e;if(null!=(e=this.ui.input.val().trim()))return this.trigger("input:submit",{value:e})}}]),t}(u.View);return e.prototype.template=l.default.renderable((function(e){return l.default.div(".input-group",(function(){return l.default.div(".input-group-prepend",(function(){return l.default.button(".input-group-text"+e.buttonClass,e.buttonText)})),l.default.input(".form-control",{type:"text",placeholder:e.placeholder})}))})),e.prototype.ui={button:"button",input:"input"},e.prototype.events={"click @ui.button":"buttonClicked"},e}.call(void 0),t.default=r},684:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,r,i,u=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a=n(6),l=n(7),c=d(n(34)),s=d(n(1)),f=d(n(490)),p=d(n(485));function d(e){return e&&e.__esModule?e:{default:e}}function b(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function h(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function y(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}o=a.Radio.channel("pmc"),i=function(){var e=function(e){function t(){return b(this,t),h(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return y(t,e),u(t,[{key:"templateContext",value:function(){return{hasOAIcontent:this.model.hasOAIcontent()}}},{key:"onRender",value:function(){var e;if(this.model.hasOAIcontent())return e=new p.default({model:this.model}),this.showChildView("content",e)}},{key:"buttonClicked",value:function(){var e,t;if(t=this,!(e=this.model).get("content"))return e.fetch().done((function(){var n,r;return r=Number(e.get("id")),n=e.get("content"),o.request("save-fm-content",r,n).then((function(){var e;return(e=o.request("get-fm-collection")).fetch().done((function(){var n,o;return n=e.get(r),t.model=n,o=new p.default({model:n}),t.showChildView("content",o),t.ui.button.hide()}))}))}))}}]),t}(l.View);return e.prototype.template=c.default.renderable((function(e){return c.default.text("PMCID: PMC"+e.id+" "),e.hasOAIcontent||(".btn.btn-outline-warning.btn-sm",c.default.button(".dl-btn.btn.btn-outline-warning.btn-sm.fa.fa-download",(function(){return" Download Front Matter"}))),c.default.div(".content")})),e.prototype.ui={content:".content",button:".dl-btn"},e.prototype.regions={content:"@ui.content"},e.prototype.events={"click @ui.button":"buttonClicked"},e}.call(void 0),r=function(){var e=function(e){function t(){return b(this,t),h(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return y(t,e),u(t,[{key:"onRender",value:function(){var e;return e=new f.default,this.showChildView("searchInput",e)}},{key:"searchClicked",value:function(e){return this.searchTerm(e.value)}},{key:"searchTerm",value:function(e){var t,n=this;return console.log("searchTerm",e),(t=o.request("make-search-model",e)).fetch().done((function(){var e,r,u,c;return r=new a.Collection([]),e=o.request("get-fm-collection"),u=t.get("eSearchResult"),s.default.map(u.IdList.Id,Number).forEach((function(n){var i;return null!=(i=e.get(n))?(console.log("LOCAL model found",i),t=i):t=o.request("make-remote-model",n),r.add(t)})),c=new l.CollectionView({collection:r,childView:i}),n.showChildView("content",c)}))}}]),t}(l.View);return e.prototype.template=c.default.renderable((function(){return c.default.div(".search-input"),c.default.div(".content")})),e.prototype.ui={searchInput:".search-input",content:".content",button:"button",input:"input"},e.prototype.regions={content:"@ui.content",searchInput:"@ui.searchInput"},e.prototype.childViewEvents={"input:submit":"searchClicked"},e}.call(void 0),t.default=r}}]);
//# sourceMappingURL=pmc-view-search-pmc-9ee25211c08520a3877e.js.map