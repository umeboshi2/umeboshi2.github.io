(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{415:function(e,n,t){"use strict";var r=t(423),o=t(424).EventEmitter;function i(e,n){var t=this;o.call(t),arguments.length<2&&(n=e,e=void 0);var r,a,u,l=[],c=[],s=!1,d=!1,f=!1,p=!0,b=!0,v={container:document.createElement("div"),collapseExpand:document.createElement("div"),name:document.createElement("div"),separator:document.createElement("div"),value:document.createElement("div"),delete:document.createElement("div"),children:document.createElement("div"),insert:document.createElement("div")};function m(){var e="object"==u||"array"==u;c.forEach((function(e){e.refresh()})),v.collapseExpand.style.display=e?"":"none",s&&e?y():h()}function h(e){e&&c.forEach((function(e){e.collapse(!0)})),s=!1,v.children.style.display="none",v.collapseExpand.className="jv-expand",v.container.classList.add("jv-collapsed"),v.container.classList.remove("jv-expanded")}function y(e){var n;n="object"==u?Object.keys(a):"array"==u?a.map((function(e,n){return n})):[];for(var t=c.length-1;t>=0;t--){var r=c[t];-1==n.indexOf(r.name)&&(c.splice(t,1),k(r))}if("object"!=u&&"array"!=u)return h();n.forEach((function(e){g(e,a[e])})),e&&c.forEach((function(e){e.expand(!0)})),s=!0,v.children.style.display="",v.collapseExpand.className="jv-collapse",v.container.classList.add("jv-expanded"),v.container.classList.remove("jv-collapsed")}function w(e){var n=typeof e,o=r;if(e!==r){if("string"!=n&&"number"!=n)throw new Error("Name must be either string or number, "+e);v.name.innerText=e,r=e,t.emit("rename",t,o,e)}}function j(e){var n,o=a;switch(u=function(e){var n=typeof e;if("object"==n){if(null===e)return"null";if(Array.isArray(e))return"array"}return n}(e)){case"null":n="null";break;case"object":n="Object["+Object.keys(e).length+"]";break;case"array":n="Array["+e.length+"]";break;default:n=e}v.value.innerText=n,v.value.className="value "+u,e!==a&&(a=e,"array"!=u&&"object"!=u||(b=!1,"array"==u&&(p=!1)),m(),t.emit("change",r,o,e))}function g(e,n){for(var t,r=0,o=c.length;r<o;r++)if(c[r].name==e){t=c[r];break}return t?t.value=n:((t=new i(e,n)).once("rename",E),t.on("delete",P),t.on("change",C),c.push(t)),v.children.appendChild(t.dom),t}function k(e){e.dom.parentNode&&v.children.removeChild(e.dom),e.destroy(),e.removeAllListeners()}function _(e){var n="name"==e?p:b,t=v[e];n&&("value"==e&&"string"==u&&(t.innerText='"'+a+'"'),"name"==e&&(d=!0),"value"==e&&(f=!0),t.classList.add("edit"),t.setAttribute("contenteditable",!0),t.focus(),document.execCommand("selectAll",!1,null))}function x(e){var n=v[e];if("name"==e){if(!d)return;d=!1}if("value"==e){if(!f)return;f=!1}if("name"==e)w(n.innerText);else try{j(JSON.parse(n.innerText))}catch(e){j(n.innerText)}n.classList.remove("edit"),n.removeAttribute("contenteditable")}function O(e,n){switch(n.key){case"Escape":case"Enter":x(e)}}function V(e,n){"Tab"==n.key&&(x(e),"name"==e?(n.preventDefault(),_("value")):x(e))}function E(e,n,t){t&&"array"!=u&&!(t in a)?(a[t]=e.value,delete a[n]):void 0===n?k(e):e.name=n,e.once("rename",E)}function C(e,n,o,i){i||(a[e]=o),t.emit("change",r+"."+e,n,o,!0)}function P(e){var n=e.name;"array"==u?a.splice(n,1):delete a[n],m()}function M(e,n,t){e.addEventListener(n,t),l.push({element:e,name:n,fn:t})}Object.defineProperties(t,{dom:{value:v.container,enumerable:!0},name:{get:function(){return r},set:w,enumerable:!0},value:{get:function(){return a},set:j,enumerable:!0},type:{get:function(){return u},enumerable:!0},nameEditable:{get:function(){return p},set:function(e){p=!!e},enumerable:!0},valueEditable:{get:function(){return b},set:function(e){b=!!e},enumerable:!0},refresh:{value:m,enumerable:!0},collapse:{value:h,enumerable:!0},expand:{value:y,enumerable:!0},destroy:{value:function(){var e,n;for(;n=l.pop();)n.element.removeEventListener(n.name,n.fn);for(;e=c.pop();)k(e)},enumerable:!0},editName:{value:_.bind(null,"name"),enumerable:!0},editValue:{value:_.bind(null,"value"),enumerable:!0}}),Object.keys(v).forEach((function(e){var n=v[e];"container"!=e&&(n.className=e,v.container.appendChild(n))})),v.container.className="jsonView",M(v.collapseExpand,"click",(function(){s?h():y()})),M(v.value,"click",y.bind(null,!1)),M(v.name,"click",y.bind(null,!1)),M(v.name,"dblclick",_.bind(null,"name")),M(v.name,"blur",x.bind(null,"name")),M(v.name,"keypress",O.bind(null,"name")),M(v.name,"keydown",V.bind(null,"name")),M(v.value,"dblclick",_.bind(null,"value")),M(v.value,"blur",x.bind(null,"value")),M(v.value,"keypress",O.bind(null,"value")),M(v.value,"keydown",V.bind(null,"value")),M(v.value,"keydown",(function(e){var n,t=0;if("number"!=u)return;switch(e.key){case"ArrowDown":case"Down":t=-1;break;case"ArrowUp":case"Up":t=1}e.shiftKey&&(t*=10);(e.ctrlKey||e.metaKey)&&(t/=10);t&&(n=parseFloat(v.value.innerText),isNaN(n)||j(Number((n+t).toFixed(10))))})),M(v.insert,"click",(function(){var e=g("array"==u?a.length:void 0,null);"array"==u?(a.push(null),e.editValue()):e.editName()})),M(v.delete,"click",(function(){t.emit("delete",t)})),w(e),j(n)}e.exports=i,r.inherits(i,o)},419:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r,o=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}(),i=(u(t(4)),u(t(5))),a=u(t(415));function u(e){return e&&e.__esModule?e:{default:e}}t(420),r=function(e){function n(){return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),function(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(n,e),o(n,[{key:"options",value:function(){return{jviewSelector:".jsonview"}}},{key:"ui",value:function(){return{jsonView:this.getOption("jviewSelector")}}},{key:"onDomRefresh",value:function(){var e;return e=this.view.model.toJSON(),this.view.jsonView=new a.default(e),this.ui.jsonView.prepend(this.view.jsonView.dom)}}]),n}(i.default.Behavior),n.default=r},420:function(e,n,t){var r=t(421);"string"==typeof r&&(r=[[e.i,r,""]]);var o={insert:"head",singleton:!1};t(417)(r,o);r.locals&&(e.exports=r.locals)},421:function(e,n,t){(e.exports=t(416)(!1)).push([e.i,'.jsonView{\n    margin-left: 20px;\n    font-family: Consolas, "Lucida Console", Menlo, "dejavu sans mono", monospace;\n    font-size: 16px;\n    line-height: 16px;\n    padding: 2px;\n    cursor: default;\n    color: cornsilk;\n    white-space: nowrap;\n    -webkit-user-select: none;\n}\n\n.jsonView>div{\n    display: inline-block;\n}\n\n.jsonView>.children, .jsonView.insert{\n    display: block;\n}\n\n.jsonView>.name{\n    color: mistyrose;\n}\n\n.jsonView>.separator:before{\n    content: ":";\n}\n\n.jsonView>.separator {\n    padding-right: 5px;\n}\n\n.jsonView>.value.null{\n    color: rgb(128, 128, 128);\n}\n\n.jsonView>.value.boolean, .jsonView>.value.number{\n    color: lightseagreen;\n}\n\n.jsonView>.value.string:not(.edit):before, .jsonView>.value.string:not(.edit):after{\n    content: "\\"";\n}\n\n.jsonView>.value.string {\n    color: lightsalmon;\n}\n\n.jsonView>.name:hover, .jsonView>.value:hover{\n    background-color: rgba(56, 121, 217, 0.1);\n}\n\n.jsonView>.jv-expand, .jsonView>.jv-collapse{\n    min-width: 20px;\n    margin-left: -20px;\n    cursor: pointer;\n}\n\n.jsonView>.jv-expand:before{\n    content: \'\\25B6\';\n}\n\n.jsonView>.jv-collapse:before{\n    content: \'\\25BC\';\n}\n\n.jsonView>.edit{\n    padding: 0px 5px 0px 5px;\n    white-space: nowrap;\n    overflow: hidden;\n    background-color: transparent;\n}\n\n.jsonView>.edit br{\n    display: none;\n}\n\n.jsonView>.edit *{\n    display: inline;\n    white-space: nowrap;\n}\n\n.jsonView>.value.edit{\n    color: rgb(0, 0, 0);\n}\n\n.jsonView>.delete:before{\n    content: \'X\';\n}\n\n.jsonView>.delete{\n    opacity: 0;\n    display: inline;\n    padding: 3px;\n    margin-left: 20px;\n    cursor: pointer;\n    color: rgb(150, 150, 150);\n}\n\n.jsonView>.delete:hover{\n    opacity: 1;\n    color: rgb(0, 0, 0);\n    background: rgb(220, 220, 220);\n}\n\n.jsonView>.insert:before{\n    content: \'+\';\n}\n\n.jsonView>.insert{\n    display: none;\n    color: rgb(150, 150, 150);\n    cursor: pointer;\n}\n\n.jsonView.jv-expanded>.insert, .jsonView.jv-expanded>.insert{\n    display: inline-block;\n    margin-left: 20px;\n    padding: 3px;\n}\n\n.jsonView>.insert:hover{\n    color: rgb(0, 0, 0);\n    background: rgb(220, 220, 220);\n}\n',""])},488:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r,o,i=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}(),a=p(t(4)),u=p(t(5)),l=p(t(15)),c=(p(t(28)),p(t(1)),p(t(419))),s=p(t(489)),d=p(t(490)),f=p(t(491));function p(e){return e&&e.__esModule?e:{default:e}}r=a.default.Radio.channel("pmc"),o=function(){var e=function(e){function n(){return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),function(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(n,e),i(n,[{key:"templateContext",value:function(){return{articleMeta:this.model.getFront()["article-meta"]}}},{key:"onRender",value:function(){return this.ui.jsonView.hide()}},{key:"pmcAnchorClicked",value:function(e){return e.preventDefault()}},{key:"deleteBtnClicked",value:function(e){var n=this;return r.request("get-fm-collection").get(this.model.id).destroy().done((function(){return n.trigger("model:destroyed")}))}}]),n}(u.default.View);return e.prototype.behaviors=[c.default],e.prototype.template=l.default.renderable((function(e){var n,t,r;return r=e.articleMeta,n=(0,s.default)(e),t=(0,d.default)(e.id),l.default.div(".card",(function(){return l.default.div(".card-body",(function(){var e,o,i,a,u;if(l.default.h5(".card-title",n.title),l.default.div(".small",n.journal),l.default.a(".pmc-anchor.small",{href:t},"(PMC)"),(null!=n?n.doi:void 0)&&l.default.a(".small",{href:(0,f.default)(n.doi),target:"_blank"},(function(){return l.default.text(" (doi:"+n.doi+")")})),l.default.button(".destroy-btn.btn.btn-outline-danger.btn-sm","Delete"),null!=r?r.abstract:void 0){if(e=r.abstract,l.default.div(".card-text","Abstract"),null!=e?e.sec:void 0)for(o=0,a=(u=r.abstract.sec).length;o<a;o++)i=u[o],l.default.h6(".card-text.small",i.title),l.default.p(".card-text.small",i.p);else l.default.div(".card-text.small",null!=e?e.p:void 0);return l.default.div(".abstract-container")}})),l.default.div(".jsonview")}))})),e.prototype.ui={pmcAnchor:".pmc-anchor",deleteBtn:".destroy-btn",jsonView:".jsonview"},e.prototype.events={"click @ui.pmcAnchor":"pmcAnchorClicked","click @ui.deleteBtn":"deleteBtnClicked"},e}.call(void 0),n.default=o},489:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r,o,i=u(t(4)),a=(u(t(5)),u(t(15)),u(t(28)),u(t(1)));u(t(157)),u(t(419)),u(t(415));function u(e){return e&&e.__esModule?e:{default:e}}i.default.Radio.channel("pmc"),r=function(e){var n;return"Not Found",a.default.has(e,"abstract")?((null!=(n=e.abstract)?n.p:void 0)&&n.p,a.default.has(n,"sec")):n="Not Found",n},o=function(e){var n,t,o,i,a,u,l,c,s;return(null!=(u=e.content["OAI-PMH"])?u.error:void 0)?{}:(e=u.GetRecord.record.metadata.article.front,n={},s="journal-title",i="Not Found",(t="journal-title-group")in(o=e["journal-meta"])?i=o[t][s]:s in o&&(i=o[s]),n.journal=i,l="Not Found",l=(null!=(c=(a=e["article-meta"])["title-group"]["article-title"])?c.__text:void 0)?c.__text:c,n.title=l,a["article-id"].forEach((function(e){var t;if("doi"===(null!=e?e["_pub-id-type"]:void 0))return t=e.__text,n.doi=t})),n.abstract=r(a),n)},n.default=o},490:function(e,n,t){"use strict";var r;Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e){return r+"PMC"+e+"/"},r="https://www.ncbi.nlm.nih.gov/pmc/articles/"},491:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e){return"https://dx.doi.org/","https://dx.doi.org/"+e}},677:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r,o,i,a=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}(),u=p(t(4)),l=p(t(5)),c=p(t(15)),s=(p(t(28)),p(t(1))),d=(p(t(157)),p(t(678))),f=p(t(488));function p(e){return e&&e.__esModule?e:{default:e}}function b(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function v(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}function m(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}r=u.default.Radio.channel("pmc"),i=function(){var e=function(e){function n(){return b(this,n),v(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return m(n,e),a(n,[{key:"buttonClicked",value:function(){var e,n;if(n=this,!(e=this.model).get("content"))return e.fetch().done((function(){var t,o;return o=Number(e.get("id")),t=e.get("content"),r.request("save-fm-content",o,t).then((function(){var e;return(e=r.request("get-fm-collection")).fetch().done((function(){var t,r;return t=e.get(o),r=new f.default({model:t}),n.showChildView("content",r),n.ui.button.hide()}))}))}))}}]),n}(l.default.View);return e.prototype.template=c.default.renderable((function(e){return c.default.text("PMCID: PMC"+e.id+" "),(null!=e?e.content:void 0)||(".btn.btn-outline-warning.btn-sm",c.default.button(".dl-btn.btn.btn-outline-warning.btn-sm.fa.fa-download",(function(){return" Download Front Matter"}))),c.default.div(".content")})),e.prototype.ui={content:".content",button:".dl-btn"},e.prototype.regions={content:"@ui.content",searchInput:"@ui.searchInput"},e.prototype.events={"click @ui.button":"buttonClicked"},e}.call(void 0),o=function(){var e=function(e){function n(){return b(this,n),v(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return m(n,e),a(n,[{key:"onRender",value:function(){return this.showChildView("searchInput",new d.default)}},{key:"searchClicked",value:function(e){return this.searchTerm(e.term)}},{key:"searchTerm",value:function(e){var n,t=this;return console.log("searchTerm",e),(n=r.request("make-search-model",e)).fetch().done((function(){var e,o,a,c;return o=new u.default.Collection([]),e=r.request("get-fm-collection"),a=n.get("eSearchResult"),s.default.map(a.IdList.Id,Number).forEach((function(t){var i;return i=e.get(t),n=null!=i?i:r.request("make-remote-model",t),o.add(n)})),c=new l.default.CollectionView({collection:o,childView:i}),t.showChildView("content",c)}))}}]),n}(l.default.View);return e.prototype.template=c.default.renderable((function(e){return c.default.div(".search-input"),c.default.div(".content")})),e.prototype.ui={searchInput:".search-input",content:".content",button:"button",input:"input"},e.prototype.regions={content:"@ui.content",searchInput:"@ui.searchInput"},e.prototype.childViewEvents={"search:clicked":"searchClicked"},e}.call(void 0),n.default=o},678:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r,o=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}(),i=(u(t(4)),u(t(5))),a=u(t(15));u(t(28)),u(t(1));function u(e){return e&&e.__esModule?e:{default:e}}r=function(){var e=function(e){function n(){return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),function(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(n,e),o(n,[{key:"buttonClicked",value:function(){var e;if(e=this.ui.input.val().trim())return this.trigger("search:clicked",{term:e})}}]),n}(i.default.View);return e.prototype.template=a.default.renderable((function(e){return a.default.div(".input-group",(function(){return a.default.div(".input-group-prepend",(function(){return a.default.button(".input-group-text.btn.btn-outline-warning","Search")})),a.default.input(".form-control",{type:"text",placeholder:"Enter search term"})}))})),e.prototype.ui={button:"button",input:"input"},e.prototype.events={"click @ui.button":"buttonClicked"},e}.call(void 0),n.default=r}}]);
//# sourceMappingURL=pmc-view-search-pmc-8c6227fe08b2ce2a891c.js.map