(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{339:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o,r,i,a,l,u,c=function(){function e(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(n,t,o){return t&&e(n.prototype,t),o&&e(n,o),n}}(),s=m(t(1)),d=m(t(2)),p=m(t(4)),f=m(t(5)),v=(m(t(0)),m(t(160)),m(t(135)),m(t(92)),m(t(29)),m(t(93)),m(t(86)));function m(e){return e&&e.__esModule?e:{default:e}}function h(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function b(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}function w(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}o=s.default.Radio.channel("pmc"),u=function(e){var n,t,o,r,i,a,l,u,c;return console.log("RECORD",e),n={},c="journal-title",r="Not Found",(t="journal-title-group")in(o=(e=e["OAI-PMH"].GetRecord.record.metadata.article.front)["journal-meta"])?r=o[t][c]:c in o&&(r=o[c]),n.journal=r,l="Not Found",l=(null!=(u=(i=e["article-meta"])["title-group"]["article-title"])?u.__text:void 0)?u.__text:u,n.title=l,n.abstract=null!=(a=i.abstract)?a.p:void 0,n},a=function(){var e=function(e){function n(){return h(this,n),b(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return w(n,e),n}(d.default.View);return e.prototype.template=p.default.renderable((function(e){var n,t,o;for(t in console.log("MODEL",e),o=[],n=u(e))p.default.dt(t),o.push(p.default.dd(n[t]));return o})),e}.call(void 0),i=function(){var e=function(e){function n(){return h(this,n),b(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return w(n,e),c(n,[{key:"onRender",value:function(){var e;if(this.model.get("OAI-PMH"))return e=new a({model:this.model}),this.showChildView("content",e)}},{key:"showInfoBtnClicked",value:function(){var e=this;return this.getRegion("content").hasView()?console.log("view in region"):this.model.fetch().done((function(){var n,t,r;return t=e.model.get("id"),n=JSON.stringify(e.model.toJSON()),r=o.request("save-fm-content",t,n),console.log("lpromise",r),r.then((function(){var n;return(n=o.request("get-fm-collection")).fetch().done((function(){var o,r;return o=n.get(t),r=new a({model:new s.default.Model(o.getContent())}),e.showChildView("content",r)}))}))}))}}]),n}(d.default.View);return e.prototype.template=p.default.renderable((function(e){return p.default.button(".show-info-btn.btn.btn-outline-warning.btn-sm","Info"),p.default.text(e.id),p.default.div(".content")})),e.prototype.ui={showInfoBtn:".show-info-btn",content:".content"},e.prototype.regions={content:"@ui.content"},e.prototype.events={"click @ui.showInfoBtn":"showInfoBtnClicked"},e}.call(void 0),l=function(){var e=function(e){function n(){return h(this,n),b(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return w(n,e),c(n,[{key:"showBtnClicked",value:function(){var e,n,t=this;return this.getRegion("papers").hasView()?console.log("view in region"):(n=new s.default.Collection([]),(e=o.request("get-fm-collection")).fetch().done((function(){var r;return t.model.get("pmc_ids").forEach((function(t){var r,i;return null!=(r=e.get(t))?(console.log("lmodel",r),i=new s.default.Model(r.getContent())):i=o.request("make-remote-model",t),console.log("PMCMODEL "+t,i),n.add(i)})),console.log("fmCollection",e),r=new d.default.CollectionView({collection:n,childView:i}),t.showChildView("papers",r)})))}}]),n}(d.default.View);return e.prototype.tagName="li",e.prototype.className="list-group-item",e.prototype.template=p.default.renderable((function(e){return p.default.button(".show-btn.btn.btn-outline-warning.btn-sm","Show Papers"),p.default.text("    "+e.name),p.default.div(".papers")})),e.prototype.ui={showBtn:".show-btn",papers:".papers"},e.prototype.regions={papers:"@ui.papers"},e.prototype.events={"click @ui.showBtn":"showBtnClicked"},e}.call(void 0),r=function(){var e=function(e){function n(){return h(this,n),b(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return w(n,e),c(n,[{key:"initialize",value:function(){var e,n,t;for(n in this.collection=new s.default.Collection,e=[],t=this.model.get("topics"))t[n].pmc_ids.length?e.push(this.collection.add(t[n])):e.push(void 0);return e}},{key:"onRender",value:function(){var e;return e=new d.default.CollectionView({collection:this.collection,childView:l}),this.showChildView("topics",e)}},{key:"itemClicked",value:function(e){var n,t,o=this;return n=(0,f.default)(e.target).attr("data-id"),(t=new PMCModel({id:n})).fetch().done((function(){var e;return e=t.toJSON(),o.jsonView=new v.default(e),o.ui.jsonView.prepend(o.jsonView.dom)}))}}]),n}(d.default.View);return e.prototype.template=p.default.renderable((function(e){return p.default.div(".jsonview"),p.default.ul(".topics.list-group")})),e.prototype.templateOrig=p.default.renderable((function(e){var n,t,o;for(o in p.default.div(".jsonview"),p.default.div(".topics"),t=[],e.topics)(n=e.topics[o]).pmc_ids.length?t.push(p.default.div(".list-group",{data:{name:n.name}},(function(){var e,t,o,r,i;for(p.default.text(n.name),i=[],e=0,o=(r=n.pmc_ids).length;e<o;e++)t=r[e],i.push(p.default.div(".list-group-item",{data:{id:t}},t));return i}))):t.push(void 0);return t})),e.prototype.ui={jsonView:".jsonview",topics:".topics"},e.prototype.regions={topics:"@ui.topics"},e}.call(void 0),n.default=r},86:function(e,n,t){"use strict";var o=t(89),r=t(90).EventEmitter;function i(e,n){var t=this;r.call(t),arguments.length<2&&(n=e,e=void 0);var o,a,l,u=[],c=[],s=!1,d=!1,p=!1,f=!0,v=!0,m={container:document.createElement("div"),collapseExpand:document.createElement("div"),name:document.createElement("div"),separator:document.createElement("div"),value:document.createElement("div"),delete:document.createElement("div"),children:document.createElement("div"),insert:document.createElement("div")};function h(){var e="object"==l||"array"==l;c.forEach((function(e){e.refresh()})),m.collapseExpand.style.display=e?"":"none",s&&e?w():b()}function b(e){e&&c.forEach((function(e){e.collapse(!0)})),s=!1,m.children.style.display="none",m.collapseExpand.className="jv-expand",m.container.classList.add("jv-collapsed"),m.container.classList.remove("jv-expanded")}function w(e){var n;n="object"==l?Object.keys(a):"array"==l?a.map((function(e,n){return n})):[];for(var t=c.length-1;t>=0;t--){var o=c[t];-1==n.indexOf(o.name)&&(c.splice(t,1),V(o))}if("object"!=l&&"array"!=l)return b();n.forEach((function(e){j(e,a[e])})),e&&c.forEach((function(e){e.expand(!0)})),s=!0,m.children.style.display="",m.collapseExpand.className="jv-collapse",m.container.classList.add("jv-expanded"),m.container.classList.remove("jv-collapsed")}function y(e){var n=typeof e,r=o;if(e!==o){if("string"!=n&&"number"!=n)throw new Error("Name must be either string or number, "+e);m.name.innerText=e,o=e,t.emit("rename",t,r,e)}}function g(e){var n,r=a;switch(l=function(e){var n=typeof e;if("object"==n){if(null===e)return"null";if(Array.isArray(e))return"array"}return n}(e)){case"null":n="null";break;case"object":n="Object["+Object.keys(e).length+"]";break;case"array":n="Array["+e.length+"]";break;default:n=e}m.value.innerText=n,m.value.className="value "+l,e!==a&&(a=e,"array"!=l&&"object"!=l||(v=!1,"array"==l&&(f=!1)),h(),t.emit("change",o,r,e))}function j(e,n){for(var t,o=0,r=c.length;o<r;o++)if(c[o].name==e){t=c[o];break}return t?t.value=n:((t=new i(e,n)).once("rename",E),t.on("delete",N),t.on("change",C),c.push(t)),m.children.appendChild(t.dom),t}function V(e){e.dom.parentNode&&m.children.removeChild(e.dom),e.destroy(),e.removeAllListeners()}function k(e){var n="name"==e?f:v,t=m[e];n&&("value"==e&&"string"==l&&(t.innerText='"'+a+'"'),"name"==e&&(d=!0),"value"==e&&(p=!0),t.classList.add("edit"),t.setAttribute("contenteditable",!0),t.focus(),document.execCommand("selectAll",!1,null))}function x(e){var n=m[e];if("name"==e){if(!d)return;d=!1}if("value"==e){if(!p)return;p=!1}if("name"==e)y(n.innerText);else try{g(JSON.parse(n.innerText))}catch(e){g(n.innerText)}n.classList.remove("edit"),n.removeAttribute("contenteditable")}function _(e,n){switch(n.key){case"Escape":case"Enter":x(e)}}function O(e,n){"Tab"==n.key&&(x(e),"name"==e?(n.preventDefault(),k("value")):x(e))}function E(e,n,t){t&&"array"!=l&&!(t in a)?(a[t]=e.value,delete a[n]):void 0===n?V(e):e.name=n,e.once("rename",E)}function C(e,n,r,i){i||(a[e]=r),t.emit("change",o+"."+e,n,r,!0)}function N(e){var n=e.name;"array"==l?a.splice(n,1):delete a[n],h()}function P(e,n,t){e.addEventListener(n,t),u.push({element:e,name:n,fn:t})}Object.defineProperties(t,{dom:{value:m.container,enumerable:!0},name:{get:function(){return o},set:y,enumerable:!0},value:{get:function(){return a},set:g,enumerable:!0},type:{get:function(){return l},enumerable:!0},nameEditable:{get:function(){return f},set:function(e){f=!!e},enumerable:!0},valueEditable:{get:function(){return v},set:function(e){v=!!e},enumerable:!0},refresh:{value:h,enumerable:!0},collapse:{value:b,enumerable:!0},expand:{value:w,enumerable:!0},destroy:{value:function(){var e,n;for(;n=u.pop();)n.element.removeEventListener(n.name,n.fn);for(;e=c.pop();)V(e)},enumerable:!0},editName:{value:k.bind(null,"name"),enumerable:!0},editValue:{value:k.bind(null,"value"),enumerable:!0}}),Object.keys(m).forEach((function(e){var n=m[e];"container"!=e&&(n.className=e,m.container.appendChild(n))})),m.container.className="jsonView",P(m.collapseExpand,"click",(function(){s?b():w()})),P(m.value,"click",w.bind(null,!1)),P(m.name,"click",w.bind(null,!1)),P(m.name,"dblclick",k.bind(null,"name")),P(m.name,"blur",x.bind(null,"name")),P(m.name,"keypress",_.bind(null,"name")),P(m.name,"keydown",O.bind(null,"name")),P(m.value,"dblclick",k.bind(null,"value")),P(m.value,"blur",x.bind(null,"value")),P(m.value,"keypress",_.bind(null,"value")),P(m.value,"keydown",O.bind(null,"value")),P(m.value,"keydown",(function(e){var n,t=0;if("number"!=l)return;switch(e.key){case"ArrowDown":case"Down":t=-1;break;case"ArrowUp":case"Up":t=1}e.shiftKey&&(t*=10);(e.ctrlKey||e.metaKey)&&(t/=10);t&&(n=parseFloat(m.value.innerText),isNaN(n)||g(Number((n+t).toFixed(10))))})),P(m.insert,"click",(function(){var e=j("array"==l?a.length:void 0,null);"array"==l?(a.push(null),e.editValue()):e.editName()})),P(m.delete,"click",(function(){t.emit("delete",t)})),y(e),g(n)}e.exports=i,o.inherits(i,r)},93:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o,r=function(){function e(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(n,t,o){return t&&e(n.prototype,t),o&&e(n,o),n}}(),i=(l(t(1)),l(t(2))),a=l(t(86));function l(e){return e&&e.__esModule?e:{default:e}}t(94),o=function(e){function n(){return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),function(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(n,e),r(n,[{key:"options",value:function(){return{jviewSelector:".jsonview"}}},{key:"ui",value:function(){return{jsonView:this.getOption("jviewSelector")}}},{key:"onDomRefresh",value:function(){var e;return e=this.view.model.toJSON(),this.view.jsonView=new a.default(e),this.ui.jsonView.prepend(this.view.jsonView.dom)}}]),n}(i.default.Behavior),n.default=o},94:function(e,n,t){var o=t(95);"string"==typeof o&&(o=[[e.i,o,""]]);var r={insert:"head",singleton:!1};t(85)(o,r);o.locals&&(e.exports=o.locals)},95:function(e,n,t){(e.exports=t(84)(!1)).push([e.i,'.jsonView{\n    margin-left: 20px;\n    font-family: Consolas, "Lucida Console", Menlo, "dejavu sans mono", monospace;\n    font-size: 16px;\n    line-height: 16px;\n    padding: 2px;\n    cursor: default;\n    color: cornsilk;\n    white-space: nowrap;\n    -webkit-user-select: none;\n}\n\n.jsonView>div{\n    display: inline-block;\n}\n\n.jsonView>.children, .jsonView.insert{\n    display: block;\n}\n\n.jsonView>.name{\n    color: mistyrose;\n}\n\n.jsonView>.separator:before{\n    content: ":";\n}\n\n.jsonView>.separator {\n    padding-right: 5px;\n}\n\n.jsonView>.value.null{\n    color: rgb(128, 128, 128);\n}\n\n.jsonView>.value.boolean, .jsonView>.value.number{\n    color: lightseagreen;\n}\n\n.jsonView>.value.string:not(.edit):before, .jsonView>.value.string:not(.edit):after{\n    content: "\\"";\n}\n\n.jsonView>.value.string {\n    color: lightsalmon;\n}\n\n.jsonView>.name:hover, .jsonView>.value:hover{\n    background-color: rgba(56, 121, 217, 0.1);\n}\n\n.jsonView>.jv-expand, .jsonView>.jv-collapse{\n    min-width: 20px;\n    margin-left: -20px;\n    cursor: pointer;\n}\n\n.jsonView>.jv-expand:before{\n    content: \'\\25B6\';\n}\n\n.jsonView>.jv-collapse:before{\n    content: \'\\25BC\';\n}\n\n.jsonView>.edit{\n    padding: 0px 5px 0px 5px;\n    white-space: nowrap;\n    overflow: hidden;\n    background-color: transparent;\n}\n\n.jsonView>.edit br{\n    display: none;\n}\n\n.jsonView>.edit *{\n    display: inline;\n    white-space: nowrap;\n}\n\n.jsonView>.value.edit{\n    color: rgb(0, 0, 0);\n}\n\n.jsonView>.delete:before{\n    content: \'X\';\n}\n\n.jsonView>.delete{\n    opacity: 0;\n    display: inline;\n    padding: 3px;\n    margin-left: 20px;\n    cursor: pointer;\n    color: rgb(150, 150, 150);\n}\n\n.jsonView>.delete:hover{\n    opacity: 1;\n    color: rgb(0, 0, 0);\n    background: rgb(220, 220, 220);\n}\n\n.jsonView>.insert:before{\n    content: \'+\';\n}\n\n.jsonView>.insert{\n    display: none;\n    color: rgb(150, 150, 150);\n    cursor: pointer;\n}\n\n.jsonView.jv-expanded>.insert, .jsonView.jv-expanded>.insert{\n    display: inline-block;\n    margin-left: 20px;\n    padding: 3px;\n}\n\n.jsonView>.insert:hover{\n    color: rgb(0, 0, 0);\n    background: rgb(220, 220, 220);\n}\n',""])}}]);
//# sourceMappingURL=pmc-view-index-82aa7a5b9e86da3d3be3.js.map