(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{416:function(e,n,t){"use strict";var r=t(424),i=t(425).EventEmitter;function o(e,n){var t=this;i.call(t),arguments.length<2&&(n=e,e=void 0);var r,a,l,u=[],s=[],c=!1,d=!1,f=!1,p=!0,v=!0,m={container:document.createElement("div"),collapseExpand:document.createElement("div"),name:document.createElement("div"),separator:document.createElement("div"),value:document.createElement("div"),delete:document.createElement("div"),children:document.createElement("div"),insert:document.createElement("div")};function b(){var e="object"==l||"array"==l;s.forEach((function(e){e.refresh()})),m.collapseExpand.style.display=e?"":"none",c&&e?w():h()}function h(e){e&&s.forEach((function(e){e.collapse(!0)})),c=!1,m.children.style.display="none",m.collapseExpand.className="jv-expand",m.container.classList.add("jv-collapsed"),m.container.classList.remove("jv-expanded")}function w(e){var n;n="object"==l?Object.keys(a):"array"==l?a.map((function(e,n){return n})):[];for(var t=s.length-1;t>=0;t--){var r=s[t];-1==n.indexOf(r.name)&&(s.splice(t,1),k(r))}if("object"!=l&&"array"!=l)return h();n.forEach((function(e){j(e,a[e])})),e&&s.forEach((function(e){e.expand(!0)})),c=!0,m.children.style.display="",m.collapseExpand.className="jv-collapse",m.container.classList.add("jv-expanded"),m.container.classList.remove("jv-collapsed")}function g(e){var n=typeof e,i=r;if(e!==r){if("string"!=n&&"number"!=n)throw new Error("Name must be either string or number, "+e);m.name.innerText=e,r=e,t.emit("rename",t,i,e)}}function y(e){var n,i=a;switch(l=function(e){var n=typeof e;if("object"==n){if(null===e)return"null";if(Array.isArray(e))return"array"}return n}(e)){case"null":n="null";break;case"object":n="Object["+Object.keys(e).length+"]";break;case"array":n="Array["+e.length+"]";break;default:n=e}m.value.innerText=n,m.value.className="value "+l,e!==a&&(a=e,"array"!=l&&"object"!=l||(v=!1,"array"==l&&(p=!1)),b(),t.emit("change",r,i,e))}function j(e,n){for(var t,r=0,i=s.length;r<i;r++)if(s[r].name==e){t=s[r];break}return t?t.value=n:((t=new o(e,n)).once("rename",_),t.on("delete",B),t.on("change",O),s.push(t)),m.children.appendChild(t.dom),t}function k(e){e.dom.parentNode&&m.children.removeChild(e.dom),e.destroy(),e.removeAllListeners()}function V(e){var n="name"==e?p:v,t=m[e];n&&("value"==e&&"string"==l&&(t.innerText='"'+a+'"'),"name"==e&&(d=!0),"value"==e&&(f=!0),t.classList.add("edit"),t.setAttribute("contenteditable",!0),t.focus(),document.execCommand("selectAll",!1,null))}function x(e){var n=m[e];if("name"==e){if(!d)return;d=!1}if("value"==e){if(!f)return;f=!1}if("name"==e)g(n.innerText);else try{y(JSON.parse(n.innerText))}catch(e){y(n.innerText)}n.classList.remove("edit"),n.removeAttribute("contenteditable")}function E(e,n){switch(n.key){case"Escape":case"Enter":x(e)}}function C(e,n){"Tab"==n.key&&(x(e),"name"==e?(n.preventDefault(),V("value")):x(e))}function _(e,n,t){t&&"array"!=l&&!(t in a)?(a[t]=e.value,delete a[n]):void 0===n?k(e):e.name=n,e.once("rename",_)}function O(e,n,i,o){o||(a[e]=i),t.emit("change",r+"."+e,n,i,!0)}function B(e){var n=e.name;"array"==l?a.splice(n,1):delete a[n],b()}function N(e,n,t){e.addEventListener(n,t),u.push({element:e,name:n,fn:t})}Object.defineProperties(t,{dom:{value:m.container,enumerable:!0},name:{get:function(){return r},set:g,enumerable:!0},value:{get:function(){return a},set:y,enumerable:!0},type:{get:function(){return l},enumerable:!0},nameEditable:{get:function(){return p},set:function(e){p=!!e},enumerable:!0},valueEditable:{get:function(){return v},set:function(e){v=!!e},enumerable:!0},refresh:{value:b,enumerable:!0},collapse:{value:h,enumerable:!0},expand:{value:w,enumerable:!0},destroy:{value:function(){var e,n;for(;n=u.pop();)n.element.removeEventListener(n.name,n.fn);for(;e=s.pop();)k(e)},enumerable:!0},editName:{value:V.bind(null,"name"),enumerable:!0},editValue:{value:V.bind(null,"value"),enumerable:!0}}),Object.keys(m).forEach((function(e){var n=m[e];"container"!=e&&(n.className=e,m.container.appendChild(n))})),m.container.className="jsonView",N(m.collapseExpand,"click",(function(){c?h():w()})),N(m.value,"click",w.bind(null,!1)),N(m.name,"click",w.bind(null,!1)),N(m.name,"dblclick",V.bind(null,"name")),N(m.name,"blur",x.bind(null,"name")),N(m.name,"keypress",E.bind(null,"name")),N(m.name,"keydown",C.bind(null,"name")),N(m.value,"dblclick",V.bind(null,"value")),N(m.value,"blur",x.bind(null,"value")),N(m.value,"keypress",E.bind(null,"value")),N(m.value,"keydown",C.bind(null,"value")),N(m.value,"keydown",(function(e){var n,t=0;if("number"!=l)return;switch(e.key){case"ArrowDown":case"Down":t=-1;break;case"ArrowUp":case"Up":t=1}e.shiftKey&&(t*=10);(e.ctrlKey||e.metaKey)&&(t/=10);t&&(n=parseFloat(m.value.innerText),isNaN(n)||y(Number((n+t).toFixed(10))))})),N(m.insert,"click",(function(){var e=j("array"==l?a.length:void 0,null);"array"==l?(a.push(null),e.editValue()):e.editName()})),N(m.delete,"click",(function(){t.emit("delete",t)})),g(e),y(n)}e.exports=o,r.inherits(o,i)},417:function(e,n,t){var r=t(412),i=t(418);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var o={insert:"head",singleton:!1};r(i,o);e.exports=i.locals||{}},418:function(e,n,t){(e.exports=t(413)(!1)).push([e.i,'.jsonView{\n    margin-left: 20px;\n    font-family: Consolas, "Lucida Console", Menlo, "dejavu sans mono", monospace;\n    font-size: 16px;\n    line-height: 16px;\n    padding: 2px;\n    cursor: default;\n    color: cornsilk;\n    white-space: nowrap;\n    -webkit-user-select: none;\n}\n\n.jsonView>div{\n    display: inline-block;\n}\n\n.jsonView>.children, .jsonView.insert{\n    display: block;\n}\n\n.jsonView>.name{\n    color: mistyrose;\n}\n\n.jsonView>.separator:before{\n    content: ":";\n}\n\n.jsonView>.separator {\n    padding-right: 5px;\n}\n\n.jsonView>.value.null{\n    color: rgb(128, 128, 128);\n}\n\n.jsonView>.value.boolean, .jsonView>.value.number{\n    color: lightseagreen;\n}\n\n.jsonView>.value.string:not(.edit):before, .jsonView>.value.string:not(.edit):after{\n    content: "\\"";\n}\n\n.jsonView>.value.string {\n    color: lightsalmon;\n}\n\n.jsonView>.name:hover, .jsonView>.value:hover{\n    background-color: rgba(56, 121, 217, 0.1);\n}\n\n.jsonView>.jv-expand, .jsonView>.jv-collapse{\n    min-width: 20px;\n    margin-left: -20px;\n    cursor: pointer;\n}\n\n.jsonView>.jv-expand:before{\n    content: \'\\25B6\';\n}\n\n.jsonView>.jv-collapse:before{\n    content: \'\\25BC\';\n}\n\n.jsonView>.edit{\n    padding: 0px 5px 0px 5px;\n    white-space: nowrap;\n    overflow: hidden;\n    background-color: transparent;\n}\n\n.jsonView>.edit br{\n    display: none;\n}\n\n.jsonView>.edit *{\n    display: inline;\n    white-space: nowrap;\n}\n\n.jsonView>.value.edit{\n    color: rgb(0, 0, 0);\n}\n\n.jsonView>.delete:before{\n    content: \'X\';\n}\n\n.jsonView>.delete{\n    opacity: 0;\n    display: inline;\n    padding: 3px;\n    margin-left: 20px;\n    cursor: pointer;\n    color: rgb(150, 150, 150);\n}\n\n.jsonView>.delete:hover{\n    opacity: 1;\n    color: rgb(0, 0, 0);\n    background: rgb(220, 220, 220);\n}\n\n.jsonView>.insert:before{\n    content: \'+\';\n}\n\n.jsonView>.insert{\n    display: none;\n    color: rgb(150, 150, 150);\n    cursor: pointer;\n}\n\n.jsonView.jv-expanded>.insert, .jsonView.jv-expanded>.insert{\n    display: inline-block;\n    margin-left: 20px;\n    padding: 3px;\n}\n\n.jsonView>.insert:hover{\n    color: rgb(0, 0, 0);\n    background: rgb(220, 220, 220);\n}\n',""])},575:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r,i,o,a,l,u=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}(),s=t(6),c=t(7),d=p(t(34)),f=p(t(416));function p(e){return e&&e.__esModule?e:{default:e}}function v(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function m(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}function b(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}t(417),l=function(e){return e.split(".md")[0]},a=function(e){return"#pages/blog/cv19/"+l(e)},r=function(){var e=function(e){function n(){return v(this,n),m(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return b(n,e),n}(c.View);return e.prototype.template=d.default.renderable((function(e){return d.default.ul((function(){var n,t,r,i,o;for(o=[],n=0,t=(i=e.links).length;n<t;n++)r=i[n],o.push(d.default.li((function(){return r.startsWith("#pages")?d.default.span(".badge.badge-dark",(function(){return d.default.a({href:r},(function(){return d.default.text(r.split("#pages/blog/cv19/")[1])}))})):d.default.a({href:r},r)})));return o}))})),e}.call(void 0),o=function(){var e=function(e){function n(){return v(this,n),m(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return b(n,e),u(n,[{key:"linkBtnClicked",value:function(){var e;return(e=this.getRegion("linksView")).hasView()?(e.empty(),this.ui.toggleIcon.removeClass("fa-toggle-up"),this.ui.toggleIcon.addClass("fa-toggle-down")):(this.showListView(),this.ui.toggleIcon.removeClass("fa-toggle-down"),this.ui.toggleIcon.addClass("fa-toggle-up"))}},{key:"showListView",value:function(){var e;return e=new r({model:this.model}),this.showChildView("linksView",e)}}]),n}(c.View);return e.prototype.template=d.default.renderable((function(e){return d.default.div(".row.card",(function(){return d.default.div(".card-body",(function(){return d.default.button(".links-btn.btn.btn-dark.btn-sm",(function(){return d.default.i(".fa.fa-toggle-down.toggle-icon")})),d.default.a({href:a(e.name)},l(e.name))})),d.default.div(".links-view")}))})),e.prototype.ui={linksBtn:".links-btn",linksView:".links-view",toggleIcon:".toggle-icon"},e.prototype.regions={linksView:"@ui.linksView"},e.prototype.events={"click @ui.linksBtn":"linkBtnClicked"},e}.call(void 0),i=function(){var e=function(e){function n(){return v(this,n),m(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return b(n,e),u(n,[{key:"showIndexView",value:function(){var e;return e=new c.CollectionView({childView:o,collection:new s.Collection(this.model.get("pages"))}),this.showChildView("indexView",e)}},{key:"onRender",value:function(){return this.showIndexView()}},{key:"refreshBtnClicked",value:function(){var e=this;return this.ui.refreshBtn.removeClass("btn-link"),this.ui.refreshBtn.addClass("btn-warning"),this.model.fetch({data:{nocache:Date.now()}}).done((function(){return e.getRegion("indexView").empty(),e.showIndexView(),e.ui.refreshBtn.removeClass("btn-warning"),e.ui.refreshBtn.addClass("btn-link")}))}},{key:"onDomRefresh2",value:function(){return this.jsonView=new f.default(this.model.toJSON()),this.ui.jsonView.prepend(this.jsonView.dom)}}]),n}(c.View);return e.prototype.template=d.default.renderable((function(){return d.default.div(".listview-header.text-center",(function(){return d.default.h1("Index")})),d.default.button(".refresh-btn.btn.btn-link.btn-sm","Refresh"),d.default.div(".index-view")})),e.prototype.ui={indexView:".index-view",refreshBtn:".refresh-btn"},e.prototype.regions={indexView:"@ui.indexView"},e.prototype.events={"click @ui.refreshBtn":"refreshBtnClicked"},e}.call(void 0),n.default=i}}]);
//# sourceMappingURL=crown-view-index-c311ce83f488af10b510.js.map