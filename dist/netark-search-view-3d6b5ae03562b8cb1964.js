(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{125:function(e,n,t){"use strict";e.exports=[{id:"plague_ship_librivox",name:"Plague Ship"},{id:"projectmastodon_pc_librivox",name:"Project Mastodon"},{id:"voyagetoarcturus_mn_librivox",name:"Voyage to Arcturus"},{id:"voodoo_planet_mn_librivox",name:"Voodoo Planet"},{id:"talents_inc_mn_librivox",name:"Talents Inc."},{id:"people_minus_x_1511_librivox",name:"People Minux X"},{id:"time_crime_1305_librivox",name:"Time Crime"},{id:"my_man_jeeves_librivox",name:"My Man Jeeves"}]},148:function(e,n,t){e.exports=t(149)},149:function(e,n,t){e.exports=t.p+"f77f45d1e9fad82237bc3048dbfbbd62.svg"},150:function(e,n,t){e.exports=t(151)},151:function(e,n,t){e.exports=t.p+"0f3121169aedcca13eb16e0fcafac2e0.svg"},337:function(e,n,t){"use strict";var r,o,i,a,l,u,c,s,p,d,f,v,m,b,h,y=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}();function w(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function j(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}function g(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}o=t(1),c=t(2),h=t(4),t(83),i=t(94).default;var _=t(88);v=_.form_group_input_div,b=t(148),f=t(150),m=t(27).default,a=t(89).default,t(125),r=o.Radio.channel("netark"),function(){var e=function(e){function n(){return w(this,n),j(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return g(n,e),n}(o.Model);return e.prototype.url="/api/dev/proxy/https://archive.org/advancedsearch.php",e}.call(void 0),l=function(){var e=function(e){function n(){return w(this,n),j(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return g(n,e),n}(c.View);return e.prototype.template=h.renderable((function(e){return h.div(".jsonview.listview-list-entry",{style:"overflow:auto"})})),e.prototype.behaviors={HasJsonView:{behaviorClass:a}},e}.call(void 0),d=function(){var e=function(e){function n(){return w(this,n),j(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return g(n,e),y(n,[{key:"createModel",value:function(){return new o.Model}},{key:"updateModel",value:function(){return console.log("model",this.model,this.ui),this.model.set("query",this.ui.query.val())}},{key:"saveModel",value:function(){return console.log("model",this.model),this.trigger("save:form:success",this.model)}}]),n}(i);return e.prototype.template=h.renderable((function(){return h.form((function(){return v({input_id:"input_query",label:"query",input_attributes:{"data-validation":"query"}}),h.input(".btn.btn-primary",{type:"submit",value:"Search"})}))})),e.prototype.ui={query:"#input_query"},e}.call(void 0),s=function(){var e=function(e){function n(){return w(this,n),j(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return g(n,e),y(n,[{key:"onRender",value:function(){var e;return e=new l({model:this.model}),this.showChildView("objectView",e)}},{key:"buttonClicked",value:function(){var e;return e=this.model.get("identifier"),m("#netark/view/"+e)}}]),n}(c.View);return e.prototype.template=h.renderable((function(e){return h.div(".listview-list-entry",(function(){return h.div(e.title),h.div(e.description),h.button(".btn.btn-sm.btn-info","Select"),h.div(".object-view")}))})),e.prototype.ui={objectView:".object-view"},e.prototype.regions={objectView:"@ui.objectView"},e.prototype.events={"click button":"buttonClicked"},e}.call(void 0),p=function(){var e=function(e){function n(){return w(this,n),j(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return g(n,e),y(n,[{key:"onRender",value:function(){var e,n;return e=this.collection,n=new c.CollectionView({childView:s,collection:e}),this.showChildView("itemList",n)}}]),n}(c.View);return e.prototype.template=h.renderable((function(){return h.div(".items")})),e.prototype.ui={itemList:".items"},e.prototype.regions={itemList:"@ui.itemList"},e}.call(void 0),u=function(){var e=function(e){function n(){return w(this,n),j(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return g(n,e),y(n,[{key:"onRender",value:function(){var e;return e=new d,this.showChildView("searchForm",e)}},{key:"childViewEvents",value:function(){return{"save:form:success":"getResults"}}},{key:"getResults",value:function(e){var n,t,o=this;return console.log("getResults",e),n=r.request("SearchResults"),(t=new n).query=e.get("query"),t.fetch().done((function(){var e;return console.log("SSSSSS",t),e=new p({collection:t}),window.searchResults=t,o.showChildView("results",e)}))}}]),n}(c.View);return e.prototype.template=h.renderable((function(){return h.div(".listview-header",(function(){return h.img(".mr-3.mb-1",{src:b,style:"height:2rem;width:2rem"}),h.text("Search the Internet Archive"),h.img(".ml-3.mb-1",{src:f,style:"height:2rem;width:2rem"})})),h.div(".search-form"),h.div(".results")})),e.prototype.ui={searchForm:".search-form",results:".results"},e.prototype.regions={searchForm:"@ui.searchForm",results:"@ui.results"},e}.call(void 0),e.exports=u},86:function(e,n,t){"use strict";var r=t(90),o=t(91).EventEmitter;function i(e,n){var t=this;o.call(t),arguments.length<2&&(n=e,e=void 0);var r,a,l,u=[],c=[],s=!1,p=!1,d=!1,f=!0,v=!0,m={container:document.createElement("div"),collapseExpand:document.createElement("div"),name:document.createElement("div"),separator:document.createElement("div"),value:document.createElement("div"),delete:document.createElement("div"),children:document.createElement("div"),insert:document.createElement("div")};function b(){var e="object"==l||"array"==l;c.forEach((function(e){e.refresh()})),m.collapseExpand.style.display=e?"":"none",s&&e?y():h()}function h(e){e&&c.forEach((function(e){e.collapse(!0)})),s=!1,m.children.style.display="none",m.collapseExpand.className="jv-expand",m.container.classList.add("jv-collapsed"),m.container.classList.remove("jv-expanded")}function y(e){var n;n="object"==l?Object.keys(a):"array"==l?a.map((function(e,n){return n})):[];for(var t=c.length-1;t>=0;t--){var r=c[t];-1==n.indexOf(r.name)&&(c.splice(t,1),_(r))}if("object"!=l&&"array"!=l)return h();n.forEach((function(e){g(e,a[e])})),e&&c.forEach((function(e){e.expand(!0)})),s=!0,m.children.style.display="",m.collapseExpand.className="jv-collapse",m.container.classList.add("jv-expanded"),m.container.classList.remove("jv-collapsed")}function w(e){var n=typeof e,o=r;if(e!==r){if("string"!=n&&"number"!=n)throw new Error("Name must be either string or number, "+e);m.name.innerText=e,r=e,t.emit("rename",t,o,e)}}function j(e){var n,o=a;switch(l=function(e){var n=typeof e;if("object"==n){if(null===e)return"null";if(Array.isArray(e))return"array"}return n}(e)){case"null":n="null";break;case"object":n="Object["+Object.keys(e).length+"]";break;case"array":n="Array["+e.length+"]";break;default:n=e}m.value.innerText=n,m.value.className="value "+l,e!==a&&(a=e,"array"!=l&&"object"!=l||(v=!1,"array"==l&&(f=!1)),b(),t.emit("change",r,o,e))}function g(e,n){for(var t,r=0,o=c.length;r<o;r++)if(c[r].name==e){t=c[r];break}return t?t.value=n:((t=new i(e,n)).once("rename",E),t.on("delete",C),t.on("change",P),c.push(t)),m.children.appendChild(t.dom),t}function _(e){e.dom.parentNode&&m.children.removeChild(e.dom),e.destroy(),e.removeAllListeners()}function x(e){var n="name"==e?f:v,t=m[e];n&&("value"==e&&"string"==l&&(t.innerText='"'+a+'"'),"name"==e&&(p=!0),"value"==e&&(d=!0),t.classList.add("edit"),t.setAttribute("contenteditable",!0),t.focus(),document.execCommand("selectAll",!1,null))}function V(e){var n=m[e];if("name"==e){if(!p)return;p=!1}if("value"==e){if(!d)return;d=!1}if("name"==e)w(n.innerText);else try{j(JSON.parse(n.innerText))}catch(e){j(n.innerText)}n.classList.remove("edit"),n.removeAttribute("contenteditable")}function k(e,n){switch(n.key){case"Escape":case"Enter":V(e)}}function O(e,n){"Tab"==n.key&&(V(e),"name"==e?(n.preventDefault(),x("value")):V(e))}function E(e,n,t){t&&"array"!=l&&!(t in a)?(a[t]=e.value,delete a[n]):void 0===n?_(e):e.name=n,e.once("rename",E)}function P(e,n,o,i){i||(a[e]=o),t.emit("change",r+"."+e,n,o,!0)}function C(e){var n=e.name;"array"==l?a.splice(n,1):delete a[n],b()}function S(e,n,t){e.addEventListener(n,t),u.push({element:e,name:n,fn:t})}Object.defineProperties(t,{dom:{value:m.container,enumerable:!0},name:{get:function(){return r},set:w,enumerable:!0},value:{get:function(){return a},set:j,enumerable:!0},type:{get:function(){return l},enumerable:!0},nameEditable:{get:function(){return f},set:function(e){f=!!e},enumerable:!0},valueEditable:{get:function(){return v},set:function(e){v=!!e},enumerable:!0},refresh:{value:b,enumerable:!0},collapse:{value:h,enumerable:!0},expand:{value:y,enumerable:!0},destroy:{value:function(){var e,n;for(;n=u.pop();)n.element.removeEventListener(n.name,n.fn);for(;e=c.pop();)_(e)},enumerable:!0},editName:{value:x.bind(null,"name"),enumerable:!0},editValue:{value:x.bind(null,"value"),enumerable:!0}}),Object.keys(m).forEach((function(e){var n=m[e];"container"!=e&&(n.className=e,m.container.appendChild(n))})),m.container.className="jsonView",S(m.collapseExpand,"click",(function(){s?h():y()})),S(m.value,"click",y.bind(null,!1)),S(m.name,"click",y.bind(null,!1)),S(m.name,"dblclick",x.bind(null,"name")),S(m.name,"blur",V.bind(null,"name")),S(m.name,"keypress",k.bind(null,"name")),S(m.name,"keydown",O.bind(null,"name")),S(m.value,"dblclick",x.bind(null,"value")),S(m.value,"blur",V.bind(null,"value")),S(m.value,"keypress",k.bind(null,"value")),S(m.value,"keydown",O.bind(null,"value")),S(m.value,"keydown",(function(e){var n,t=0;if("number"!=l)return;switch(e.key){case"ArrowDown":case"Down":t=-1;break;case"ArrowUp":case"Up":t=1}e.shiftKey&&(t*=10);(e.ctrlKey||e.metaKey)&&(t/=10);t&&(n=parseFloat(m.value.innerText),isNaN(n)||j(Number((n+t).toFixed(10))))})),S(m.insert,"click",(function(){var e=g("array"==l?a.length:void 0,null);"array"==l?(a.push(null),e.editValue()):e.editName()})),S(m.delete,"click",(function(){t.emit("delete",t)})),w(e),j(n)}e.exports=i,r.inherits(i,o)},89:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r,o=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}(),i=(l(t(1)),l(t(2))),a=l(t(86));function l(e){return e&&e.__esModule?e:{default:e}}t(92),r=function(e){function n(){return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),function(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(n,e),o(n,[{key:"options",value:function(){return{jviewSelector:".jsonview"}}},{key:"ui",value:function(){return{jsonView:this.getOption("jviewSelector")}}},{key:"onDomRefresh",value:function(){var e;return e=this.view.model.toJSON(),this.view.jsonView=new a.default(e),this.ui.jsonView.prepend(this.view.jsonView.dom)}}]),n}(i.default.Behavior),n.default=r},92:function(e,n,t){var r=t(93);"string"==typeof r&&(r=[[e.i,r,""]]);var o={insert:"head",singleton:!1};t(85)(r,o);r.locals&&(e.exports=r.locals)},93:function(e,n,t){(e.exports=t(84)(!1)).push([e.i,'.jsonView{\n    margin-left: 20px;\n    font-family: Consolas, "Lucida Console", Menlo, "dejavu sans mono", monospace;\n    font-size: 16px;\n    line-height: 16px;\n    padding: 2px;\n    cursor: default;\n    color: cornsilk;\n    white-space: nowrap;\n    -webkit-user-select: none;\n}\n\n.jsonView>div{\n    display: inline-block;\n}\n\n.jsonView>.children, .jsonView.insert{\n    display: block;\n}\n\n.jsonView>.name{\n    color: mistyrose;\n}\n\n.jsonView>.separator:before{\n    content: ":";\n}\n\n.jsonView>.separator {\n    padding-right: 5px;\n}\n\n.jsonView>.value.null{\n    color: rgb(128, 128, 128);\n}\n\n.jsonView>.value.boolean, .jsonView>.value.number{\n    color: lightseagreen;\n}\n\n.jsonView>.value.string:not(.edit):before, .jsonView>.value.string:not(.edit):after{\n    content: "\\"";\n}\n\n.jsonView>.value.string {\n    color: lightsalmon;\n}\n\n.jsonView>.name:hover, .jsonView>.value:hover{\n    background-color: rgba(56, 121, 217, 0.1);\n}\n\n.jsonView>.jv-expand, .jsonView>.jv-collapse{\n    min-width: 20px;\n    margin-left: -20px;\n    cursor: pointer;\n}\n\n.jsonView>.jv-expand:before{\n    content: \'\\25B6\';\n}\n\n.jsonView>.jv-collapse:before{\n    content: \'\\25BC\';\n}\n\n.jsonView>.edit{\n    padding: 0px 5px 0px 5px;\n    white-space: nowrap;\n    overflow: hidden;\n    background-color: transparent;\n}\n\n.jsonView>.edit br{\n    display: none;\n}\n\n.jsonView>.edit *{\n    display: inline;\n    white-space: nowrap;\n}\n\n.jsonView>.value.edit{\n    color: rgb(0, 0, 0);\n}\n\n.jsonView>.delete:before{\n    content: \'X\';\n}\n\n.jsonView>.delete{\n    opacity: 0;\n    display: inline;\n    padding: 3px;\n    margin-left: 20px;\n    cursor: pointer;\n    color: rgb(150, 150, 150);\n}\n\n.jsonView>.delete:hover{\n    opacity: 1;\n    color: rgb(0, 0, 0);\n    background: rgb(220, 220, 220);\n}\n\n.jsonView>.insert:before{\n    content: \'+\';\n}\n\n.jsonView>.insert{\n    display: none;\n    color: rgb(150, 150, 150);\n    cursor: pointer;\n}\n\n.jsonView.jv-expanded>.insert, .jsonView.jv-expanded>.insert{\n    display: inline-block;\n    margin-left: 20px;\n    padding: 3px;\n}\n\n.jsonView>.insert:hover{\n    color: rgb(0, 0, 0);\n    background: rgb(220, 220, 220);\n}\n',""])}}]);
//# sourceMappingURL=netark-search-view-3d6b5ae03562b8cb1964.js.map