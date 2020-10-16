(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{1012:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o,r,i,a=function(){function e(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(n,t,o){return t&&e(n.prototype,t),o&&e(n,o),n}}(),l=t(3),u=t(8),c=f(t(40)),s=f(t(37)),d=f(t(1013));function f(e){return e&&e.__esModule?e:{default:e}}function p(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function v(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}function m(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}o=l.Radio.channel("pmc"),i=function(){var e=function(e){function n(){return p(this,n),v(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return m(n,e),a(n,[{key:"onRender",value:function(){var e,n,t;if(!this.getRegion("papers").hasView())return n=new l.Collection([]),e=o.request("get-fm-collection"),this.model.get("pmc_ids").forEach((function(t){var r,i,a;return i=!1,null!=(r=e.get(t))?(a=r,i=!0):a=o.request("make-remote-model",t),a.isLocal=function(){return i},n.add(a)})),t=new u.CollectionView({collection:n,childView:d.default}),this.showChildView("papers",t)}}]),n}(u.View);return e.prototype.className="list-group",e.prototype.template=c.default.renderable((function(e){return c.default.h3(e.name),c.default.div(".papers")})),e.prototype.ui={showBtn:".show-btn",papers:".papers"},e.prototype.regions={papers:"@ui.papers"},e.prototype.events={"click @ui.showBtn":"showBtnClicked"},e}.call(void 0),r=function(){var e=function(e){function n(){return p(this,n),v(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return m(n,e),a(n,[{key:"selectChanged",value:function(e){var n,t,r;return r=(0,s.default)(e.target).val(),n=this.getRegion("content"),r?(t=this.model.get("categories")[r],o.request("get-fm-collection").fetch().done((function(){var e;return e=new i({model:new l.Model(t)}),n.show(e)}))):n.empty()}}]),n}(u.View);return e.prototype.template=c.default.renderable((function(e){return c.default.div(".input-group",(function(){return c.default.div(".input-group-prepend",(function(){return c.default.button(".input-group-text.btn.btn-outline-warning",{for:"select-category"},"Category")})),c.default.select("#select-category.custom-select",(function(){var n,t;for(n in c.default.option({value:"",selected:""},"(no category)"),t=[],e.categories)e.categories[n].pmc_ids.length?t.push(c.default.option({value:n},n)):t.push(void 0);return t}))})),c.default.div(".content")})),e.prototype.ui={select:"select",content:".content",button:"button"},e.prototype.regions={content:"@ui.content"},e.prototype.events={"change @ui.select":"selectChanged","click @ui.button":"buttonClicked"},e}.call(void 0),n.default=r},1013:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=function(){function e(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(n,t,o){return t&&e(n.prototype,t),o&&e(n,o),n}}(),r=c(t(3)),i=c(t(8)),a=c(t(40)),l=c(t(0)),u=c(t(538));function c(e){return e&&e.__esModule?e:{default:e}}function s(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function d(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}function f(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}var p,v,m,b,h,y,w=[].indexOf;p=r.default.Radio.channel("pmc"),h=function(e){return"https://www.ncbi.nlm.nih.gov/pmc/articles/PMC"+e+"/"},b=function(e){return"https://dx.doi.org/","https://dx.doi.org/"+e},y=function(e){var n,t,o,r,i,a,l,u,c;return e=e.content["OAI-PMH"].GetRecord.record.metadata.article.front,n={},c="journal-title",r="Not Found",(t="journal-title-group")in(o=e["journal-meta"])?r=o[t][c]:c in o&&(r=o[c]),n.journal=r,l="Not Found",l=(null!=(u=(i=e["article-meta"])["title-group"]["article-title"])?u.__text:void 0)?u.__text:u,n.title=l,i["article-id"].forEach((function(e){var t;if("doi"===(null!=e?e["_pub-id-type"]:void 0))return t=e.__text,n.doi=t})),n.abstract=null!=(a=i.abstract)?a.p:void 0,n},m=function(){var e=function(e){function n(){return s(this,n),d(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return f(n,e),o(n,[{key:"onRender",value:function(){return this.ui.jsonView.hide()}},{key:"pmcAnchorClicked",value:function(e){return e.preventDefault()}},{key:"deleteBtnClicked",value:function(){var e=this;return p.request("get-fm-collection").get(this.model.id).destroy().done((function(){return e.trigger("model:destroyed")}))}}]),n}(i.default.View);return e.prototype.behaviors=[u.default],e.prototype.template=a.default.renderable((function(e){var n,t;return n=y(e),t=h(e.id),a.default.div(".card",(function(){return a.default.div(".card-body",(function(){if(a.default.div(".card-title",n.title),a.default.div(".small",n.journal),a.default.a(".pmc-anchor.small",{href:t},"(PMC)"),(null!=n?n.doi:void 0)&&a.default.a(".small",{href:b(n.doi),target:"_blank"},(function(){return a.default.text(" (doi:"+n.doi+")")})),a.default.button(".destroy-btn.btn.btn-outline-danger.btn-sm","Delete"),null!=n?n.abstract:void 0)return a.default.p(".card-text.small",n.abstract)})),a.default.div(".jsonview")}))})),e.prototype.ui={pmcAnchor:".pmc-anchor",deleteBtn:".destroy-btn",jsonView:".jsonview"},e.prototype.events={"click @ui.pmcAnchor":"pmcAnchorClicked","click @ui.deleteBtn":"deleteBtnClicked"},e}.call(void 0),v=function(){var e=function(e){function n(){return s(this,n),d(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return f(n,e),o(n,[{key:"templateContext",value:function(){return{local:this.model.hasOAIcontent()}}},{key:"onRender",value:function(){var e,n;if("OAI-PMH",null!=(e=this.model.get("content"))&&w.call(l.default.keys(e),"OAI-PMH")>=0)return n=new m({model:this.model}),this.showChildView("content",n)}},{key:"onModelDestroyed",value:function(){return this.getRegion("content").empty()}},{key:"showInfoBtnClicked",value:function(){var e,n,t;if(!this.getRegion("content").hasView())return this.model=p.request("make-remote-model",Number(this.model.get("id"))),e=this.model.fetch(),t=this,n=this.model,e.done((function(){var e,o;return o=n.get("id"),e=n.get("content"),p.request("save-fm-content",o,e).then((function(){var e;return(e=p.request("get-fm-collection")).fetch().done((function(){var n,r;return n=e.get(o),r=new m({model:n}),t.showChildView("content",r),t.ui.showInfoBtn.hide()}))}))}))}}]),n}(i.default.View);return e.prototype.template=a.default.renderable((function(e){return a.default.text("PMCID: PMC"+e.id+" "),e.local||(".btn.btn-outline-warning.btn-sm",a.default.button(".show-info-btn.btn.btn-outline-warning.btn-sm.fa.fa-download",(function(){return" Download Front Matter"}))),a.default.div(".content")})),e.prototype.ui={showInfoBtn:".show-info-btn",content:".content"},e.prototype.regions={content:"@ui.content"},e.prototype.childViewEvents={"model:destroyed":"onModelDestroyed"},e.prototype.events={"click @ui.showInfoBtn":"showInfoBtnClicked"},e}.call(void 0),n.default=v},538:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o,r,i=function(){function e(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(n,t,o){return t&&e(n.prototype,t),o&&e(n,o),n}}(),a=t(8),l=t(541),u=(o=l)&&o.__esModule?o:{default:o};t(539),r=function(e){function n(){return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),function(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(n,e),i(n,[{key:"options",value:function(){return{jviewSelector:".jsonview"}}},{key:"ui",value:function(){return{jsonView:this.getOption("jviewSelector")}}},{key:"onDomRefresh",value:function(){var e;return e=this.view.model.toJSON(),this.view.jsonView=new u.default(e),this.ui.jsonView.prepend(this.view.jsonView.dom)}}]),n}(a.Behavior),n.default=r},539:function(e,n,t){var o=t(535),r=t(540);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var i={insert:"head",singleton:!1};o(r,i);e.exports=r.locals||{}},540:function(e,n,t){(e.exports=t(536)(!1)).push([e.i,'.jsonView{\n    margin-left: 20px;\n    font-family: Consolas, "Lucida Console", Menlo, "dejavu sans mono", monospace;\n    font-size: 16px;\n    line-height: 16px;\n    padding: 2px;\n    cursor: default;\n    color: cornsilk;\n    white-space: nowrap;\n    -webkit-user-select: none;\n}\n\n.jsonView>div{\n    display: inline-block;\n}\n\n.jsonView>.children, .jsonView.insert{\n    display: block;\n}\n\n.jsonView>.name{\n    color: mistyrose;\n}\n\n.jsonView>.separator:before{\n    content: ":";\n}\n\n.jsonView>.separator {\n    padding-right: 5px;\n}\n\n.jsonView>.value.null{\n    color: rgb(128, 128, 128);\n}\n\n.jsonView>.value.boolean, .jsonView>.value.number{\n    color: lightseagreen;\n}\n\n.jsonView>.value.string:not(.edit):before, .jsonView>.value.string:not(.edit):after{\n    content: "\\"";\n}\n\n.jsonView>.value.string {\n    color: lightsalmon;\n}\n\n.jsonView>.name:hover, .jsonView>.value:hover{\n    background-color: rgba(56, 121, 217, 0.1);\n}\n\n.jsonView>.jv-expand, .jsonView>.jv-collapse{\n    min-width: 20px;\n    margin-left: -20px;\n    cursor: pointer;\n}\n\n.jsonView>.jv-expand:before{\n    content: \'\\25B6\';\n}\n\n.jsonView>.jv-collapse:before{\n    content: \'\\25BC\';\n}\n\n.jsonView>.edit{\n    padding: 0px 5px 0px 5px;\n    white-space: nowrap;\n    overflow: hidden;\n    background-color: transparent;\n}\n\n.jsonView>.edit br{\n    display: none;\n}\n\n.jsonView>.edit *{\n    display: inline;\n    white-space: nowrap;\n}\n\n.jsonView>.value.edit{\n    color: rgb(0, 0, 0);\n}\n\n.jsonView>.delete:before{\n    content: \'X\';\n}\n\n.jsonView>.delete{\n    opacity: 0;\n    display: inline;\n    padding: 3px;\n    margin-left: 20px;\n    cursor: pointer;\n    color: rgb(150, 150, 150);\n}\n\n.jsonView>.delete:hover{\n    opacity: 1;\n    color: rgb(0, 0, 0);\n    background: rgb(220, 220, 220);\n}\n\n.jsonView>.insert:before{\n    content: \'+\';\n}\n\n.jsonView>.insert{\n    display: none;\n    color: rgb(150, 150, 150);\n    cursor: pointer;\n}\n\n.jsonView.jv-expanded>.insert, .jsonView.jv-expanded>.insert{\n    display: inline-block;\n    margin-left: 20px;\n    padding: 3px;\n}\n\n.jsonView>.insert:hover{\n    color: rgb(0, 0, 0);\n    background: rgb(220, 220, 220);\n}\n',""])},541:function(e,n,t){"use strict";var o=t(552),r=t(553).EventEmitter;function i(e,n){var t=this;r.call(t),arguments.length<2&&(n=e,e=void 0);var o,a,l,u=[],c=[],s=!1,d=!1,f=!1,p=!0,v=!0,m={container:document.createElement("div"),collapseExpand:document.createElement("div"),name:document.createElement("div"),separator:document.createElement("div"),value:document.createElement("div"),delete:document.createElement("div"),children:document.createElement("div"),insert:document.createElement("div")};function b(){var e="object"==l||"array"==l;c.forEach((function(e){e.refresh()})),m.collapseExpand.style.display=e?"":"none",s&&e?y():h()}function h(e){e&&c.forEach((function(e){e.collapse(!0)})),s=!1,m.children.style.display="none",m.collapseExpand.className="jv-expand",m.container.classList.add("jv-collapsed"),m.container.classList.remove("jv-expanded")}function y(e){var n;n="object"==l?Object.keys(a):"array"==l?a.map((function(e,n){return n})):[];for(var t=c.length-1;t>=0;t--){var o=c[t];-1==n.indexOf(o.name)&&(c.splice(t,1),k(o))}if("object"!=l&&"array"!=l)return h();n.forEach((function(e){j(e,a[e])})),e&&c.forEach((function(e){e.expand(!0)})),s=!0,m.children.style.display="",m.collapseExpand.className="jv-collapse",m.container.classList.add("jv-expanded"),m.container.classList.remove("jv-collapsed")}function w(e){var n=typeof e,r=o;if(e!==o){if("string"!=n&&"number"!=n)throw new Error("Name must be either string or number, "+e);m.name.innerText=e,o=e,t.emit("rename",t,r,e)}}function g(e){var n,r=a;switch(l=function(e){var n=typeof e;if("object"==n){if(null===e)return"null";if(Array.isArray(e))return"array"}return n}(e)){case"null":n="null";break;case"object":n="Object["+Object.keys(e).length+"]";break;case"array":n="Array["+e.length+"]";break;default:n=e}m.value.innerText=n,m.value.className="value "+l,e!==a&&(a=e,"array"!=l&&"object"!=l||(v=!1,"array"==l&&(p=!1)),b(),t.emit("change",o,r,e))}function j(e,n){for(var t,o=0,r=c.length;o<r;o++)if(c[o].name==e){t=c[o];break}return t?t.value=n:((t=new i(e,n)).once("rename",E),t.on("delete",P),t.on("change",C),c.push(t)),m.children.appendChild(t.dom),t}function k(e){e.dom.parentNode&&m.children.removeChild(e.dom),e.destroy(),e.removeAllListeners()}function x(e){var n="name"==e?p:v,t=m[e];n&&("value"==e&&"string"==l&&(t.innerText='"'+a+'"'),"name"==e&&(d=!0),"value"==e&&(f=!0),t.classList.add("edit"),t.setAttribute("contenteditable",!0),t.focus(),document.execCommand("selectAll",!1,null))}function _(e){var n=m[e];if("name"==e){if(!d)return;d=!1}if("value"==e){if(!f)return;f=!1}if("name"==e)w(n.innerText);else try{g(JSON.parse(n.innerText))}catch(e){g(n.innerText)}n.classList.remove("edit"),n.removeAttribute("contenteditable")}function V(e,n){switch(n.key){case"Escape":case"Enter":_(e)}}function O(e,n){"Tab"==n.key&&(_(e),"name"==e?(n.preventDefault(),x("value")):_(e))}function E(e,n,t){t&&"array"!=l&&!(t in a)?(a[t]=e.value,delete a[n]):void 0===n?k(e):e.name=n,e.once("rename",E)}function C(e,n,r,i){i||(a[e]=r),t.emit("change",o+"."+e,n,r,!0)}function P(e){var n=e.name;"array"==l?a.splice(n,1):delete a[n],b()}function M(e,n,t){e.addEventListener(n,t),u.push({element:e,name:n,fn:t})}Object.defineProperties(t,{dom:{value:m.container,enumerable:!0},name:{get:function(){return o},set:w,enumerable:!0},value:{get:function(){return a},set:g,enumerable:!0},type:{get:function(){return l},enumerable:!0},nameEditable:{get:function(){return p},set:function(e){p=!!e},enumerable:!0},valueEditable:{get:function(){return v},set:function(e){v=!!e},enumerable:!0},refresh:{value:b,enumerable:!0},collapse:{value:h,enumerable:!0},expand:{value:y,enumerable:!0},destroy:{value:function(){var e,n;for(;n=u.pop();)n.element.removeEventListener(n.name,n.fn);for(;e=c.pop();)k(e)},enumerable:!0},editName:{value:x.bind(null,"name"),enumerable:!0},editValue:{value:x.bind(null,"value"),enumerable:!0}}),Object.keys(m).forEach((function(e){var n=m[e];"container"!=e&&(n.className=e,m.container.appendChild(n))})),m.container.className="jsonView",M(m.collapseExpand,"click",(function(){s?h():y()})),M(m.value,"click",y.bind(null,!1)),M(m.name,"click",y.bind(null,!1)),M(m.name,"dblclick",x.bind(null,"name")),M(m.name,"blur",_.bind(null,"name")),M(m.name,"keypress",V.bind(null,"name")),M(m.name,"keydown",O.bind(null,"name")),M(m.value,"dblclick",x.bind(null,"value")),M(m.value,"blur",_.bind(null,"value")),M(m.value,"keypress",V.bind(null,"value")),M(m.value,"keydown",O.bind(null,"value")),M(m.value,"keydown",(function(e){var n,t=0;if("number"!=l)return;switch(e.key){case"ArrowDown":case"Down":t=-1;break;case"ArrowUp":case"Up":t=1}e.shiftKey&&(t*=10);(e.ctrlKey||e.metaKey)&&(t/=10);t&&(n=parseFloat(m.value.innerText),isNaN(n)||g(Number((n+t).toFixed(10))))})),M(m.insert,"click",(function(){var e=j("array"==l?a.length:void 0,null);"array"==l?(a.push(null),e.editValue()):e.editName()})),M(m.delete,"click",(function(){t.emit("delete",t)})),w(e),g(n)}e.exports=i,o.inherits(i,r)}}]);
//# sourceMappingURL=pmc-view-sitetopics-0a5158d6c61a261c4403.js.map