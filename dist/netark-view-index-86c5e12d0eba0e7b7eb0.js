(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{415:function(e,n,t){"use strict";var o=t(423),r=t(424).EventEmitter;function i(e,n){var t=this;r.call(t),arguments.length<2&&(n=e,e=void 0);var o,a,l,c=[],s=[],u=!1,p=!1,d=!1,f=!0,m=!0,v={container:document.createElement("div"),collapseExpand:document.createElement("div"),name:document.createElement("div"),separator:document.createElement("div"),value:document.createElement("div"),delete:document.createElement("div"),children:document.createElement("div"),insert:document.createElement("div")};function b(){var e="object"==l||"array"==l;s.forEach((function(e){e.refresh()})),v.collapseExpand.style.display=e?"":"none",u&&e?h():y()}function y(e){e&&s.forEach((function(e){e.collapse(!0)})),u=!1,v.children.style.display="none",v.collapseExpand.className="jv-expand",v.container.classList.add("jv-collapsed"),v.container.classList.remove("jv-expanded")}function h(e){var n;n="object"==l?Object.keys(a):"array"==l?a.map((function(e,n){return n})):[];for(var t=s.length-1;t>=0;t--){var o=s[t];-1==n.indexOf(o.name)&&(s.splice(t,1),x(o))}if("object"!=l&&"array"!=l)return y();n.forEach((function(e){g(e,a[e])})),e&&s.forEach((function(e){e.expand(!0)})),u=!0,v.children.style.display="",v.collapseExpand.className="jv-collapse",v.container.classList.add("jv-expanded"),v.container.classList.remove("jv-collapsed")}function w(e){var n=typeof e,r=o;if(e!==o){if("string"!=n&&"number"!=n)throw new Error("Name must be either string or number, "+e);v.name.innerText=e,o=e,t.emit("rename",t,r,e)}}function j(e){var n,r=a;switch(l=function(e){var n=typeof e;if("object"==n){if(null===e)return"null";if(Array.isArray(e))return"array"}return n}(e)){case"null":n="null";break;case"object":n="Object["+Object.keys(e).length+"]";break;case"array":n="Array["+e.length+"]";break;default:n=e}v.value.innerText=n,v.value.className="value "+l,e!==a&&(a=e,"array"!=l&&"object"!=l||(m=!1,"array"==l&&(f=!1)),b(),t.emit("change",o,r,e))}function g(e,n){for(var t,o=0,r=s.length;o<r;o++)if(s[o].name==e){t=s[o];break}return t?t.value=n:((t=new i(e,n)).once("rename",E),t.on("delete",P),t.on("change",C),s.push(t)),v.children.appendChild(t.dom),t}function x(e){e.dom.parentNode&&v.children.removeChild(e.dom),e.destroy(),e.removeAllListeners()}function _(e){var n="name"==e?f:m,t=v[e];n&&("value"==e&&"string"==l&&(t.innerText='"'+a+'"'),"name"==e&&(p=!0),"value"==e&&(d=!0),t.classList.add("edit"),t.setAttribute("contenteditable",!0),t.focus(),document.execCommand("selectAll",!1,null))}function k(e){var n=v[e];if("name"==e){if(!p)return;p=!1}if("value"==e){if(!d)return;d=!1}if("name"==e)w(n.innerText);else try{j(JSON.parse(n.innerText))}catch(e){j(n.innerText)}n.classList.remove("edit"),n.removeAttribute("contenteditable")}function V(e,n){switch(n.key){case"Escape":case"Enter":k(e)}}function O(e,n){"Tab"==n.key&&(k(e),"name"==e?(n.preventDefault(),_("value")):k(e))}function E(e,n,t){t&&"array"!=l&&!(t in a)?(a[t]=e.value,delete a[n]):void 0===n?x(e):e.name=n,e.once("rename",E)}function C(e,n,r,i){i||(a[e]=r),t.emit("change",o+"."+e,n,r,!0)}function P(e){var n=e.name;"array"==l?a.splice(n,1):delete a[n],b()}function N(e,n,t){e.addEventListener(n,t),c.push({element:e,name:n,fn:t})}Object.defineProperties(t,{dom:{value:v.container,enumerable:!0},name:{get:function(){return o},set:w,enumerable:!0},value:{get:function(){return a},set:j,enumerable:!0},type:{get:function(){return l},enumerable:!0},nameEditable:{get:function(){return f},set:function(e){f=!!e},enumerable:!0},valueEditable:{get:function(){return m},set:function(e){m=!!e},enumerable:!0},refresh:{value:b,enumerable:!0},collapse:{value:y,enumerable:!0},expand:{value:h,enumerable:!0},destroy:{value:function(){var e,n;for(;n=c.pop();)n.element.removeEventListener(n.name,n.fn);for(;e=s.pop();)x(e)},enumerable:!0},editName:{value:_.bind(null,"name"),enumerable:!0},editValue:{value:_.bind(null,"value"),enumerable:!0}}),Object.keys(v).forEach((function(e){var n=v[e];"container"!=e&&(n.className=e,v.container.appendChild(n))})),v.container.className="jsonView",N(v.collapseExpand,"click",(function(){u?y():h()})),N(v.value,"click",h.bind(null,!1)),N(v.name,"click",h.bind(null,!1)),N(v.name,"dblclick",_.bind(null,"name")),N(v.name,"blur",k.bind(null,"name")),N(v.name,"keypress",V.bind(null,"name")),N(v.name,"keydown",O.bind(null,"name")),N(v.value,"dblclick",_.bind(null,"value")),N(v.value,"blur",k.bind(null,"value")),N(v.value,"keypress",V.bind(null,"value")),N(v.value,"keydown",O.bind(null,"value")),N(v.value,"keydown",(function(e){var n,t=0;if("number"!=l)return;switch(e.key){case"ArrowDown":case"Down":t=-1;break;case"ArrowUp":case"Up":t=1}e.shiftKey&&(t*=10);(e.ctrlKey||e.metaKey)&&(t/=10);t&&(n=parseFloat(v.value.innerText),isNaN(n)||j(Number((n+t).toFixed(10))))})),N(v.insert,"click",(function(){var e=g("array"==l?a.length:void 0,null);"array"==l?(a.push(null),e.editValue()):e.editName()})),N(v.delete,"click",(function(){t.emit("delete",t)})),w(e),j(n)}e.exports=i,o.inherits(i,r)},419:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o,r=function(){function e(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(n,t,o){return t&&e(n.prototype,t),o&&e(n,o),n}}(),i=(l(t(4)),l(t(5))),a=l(t(415));function l(e){return e&&e.__esModule?e:{default:e}}t(420),o=function(e){function n(){return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),function(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(n,e),r(n,[{key:"options",value:function(){return{jviewSelector:".jsonview"}}},{key:"ui",value:function(){return{jsonView:this.getOption("jviewSelector")}}},{key:"onDomRefresh",value:function(){var e;return e=this.view.model.toJSON(),this.view.jsonView=new a.default(e),this.ui.jsonView.prepend(this.view.jsonView.dom)}}]),n}(i.default.Behavior),n.default=o},420:function(e,n,t){var o=t(421);"string"==typeof o&&(o=[[e.i,o,""]]);var r={insert:"head",singleton:!1};t(417)(o,r);o.locals&&(e.exports=o.locals)},421:function(e,n,t){(e.exports=t(416)(!1)).push([e.i,'.jsonView{\n    margin-left: 20px;\n    font-family: Consolas, "Lucida Console", Menlo, "dejavu sans mono", monospace;\n    font-size: 16px;\n    line-height: 16px;\n    padding: 2px;\n    cursor: default;\n    color: cornsilk;\n    white-space: nowrap;\n    -webkit-user-select: none;\n}\n\n.jsonView>div{\n    display: inline-block;\n}\n\n.jsonView>.children, .jsonView.insert{\n    display: block;\n}\n\n.jsonView>.name{\n    color: mistyrose;\n}\n\n.jsonView>.separator:before{\n    content: ":";\n}\n\n.jsonView>.separator {\n    padding-right: 5px;\n}\n\n.jsonView>.value.null{\n    color: rgb(128, 128, 128);\n}\n\n.jsonView>.value.boolean, .jsonView>.value.number{\n    color: lightseagreen;\n}\n\n.jsonView>.value.string:not(.edit):before, .jsonView>.value.string:not(.edit):after{\n    content: "\\"";\n}\n\n.jsonView>.value.string {\n    color: lightsalmon;\n}\n\n.jsonView>.name:hover, .jsonView>.value:hover{\n    background-color: rgba(56, 121, 217, 0.1);\n}\n\n.jsonView>.jv-expand, .jsonView>.jv-collapse{\n    min-width: 20px;\n    margin-left: -20px;\n    cursor: pointer;\n}\n\n.jsonView>.jv-expand:before{\n    content: \'\\25B6\';\n}\n\n.jsonView>.jv-collapse:before{\n    content: \'\\25BC\';\n}\n\n.jsonView>.edit{\n    padding: 0px 5px 0px 5px;\n    white-space: nowrap;\n    overflow: hidden;\n    background-color: transparent;\n}\n\n.jsonView>.edit br{\n    display: none;\n}\n\n.jsonView>.edit *{\n    display: inline;\n    white-space: nowrap;\n}\n\n.jsonView>.value.edit{\n    color: rgb(0, 0, 0);\n}\n\n.jsonView>.delete:before{\n    content: \'X\';\n}\n\n.jsonView>.delete{\n    opacity: 0;\n    display: inline;\n    padding: 3px;\n    margin-left: 20px;\n    cursor: pointer;\n    color: rgb(150, 150, 150);\n}\n\n.jsonView>.delete:hover{\n    opacity: 1;\n    color: rgb(0, 0, 0);\n    background: rgb(220, 220, 220);\n}\n\n.jsonView>.insert:before{\n    content: \'+\';\n}\n\n.jsonView>.insert{\n    display: none;\n    color: rgb(150, 150, 150);\n    cursor: pointer;\n}\n\n.jsonView.jv-expanded>.insert, .jsonView.jv-expanded>.insert{\n    display: inline-block;\n    margin-left: 20px;\n    padding: 3px;\n}\n\n.jsonView>.insert:hover{\n    color: rgb(0, 0, 0);\n    background: rgb(220, 220, 220);\n}\n',""])},442:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o,r=t(15),i=(o=r)&&o.__esModule?o:{default:o};n.default=i.default.renderable((function(e){return i.default.div(".listview-header",(function(){return i.default.img(".mr-3.mb-1",{src:e.leftIcon,style:"height:2rem;width:2rem"}),i.default.text(e.text),i.default.img(".ml-3.mb-1",{src:e.rightIcon,style:"height:2rem;width:2rem"})}))}))},456:function(e,n,t){"use strict";e.exports=[{id:"plague_ship_librivox",name:"Plague Ship"},{id:"projectmastodon_pc_librivox",name:"Project Mastodon"},{id:"voyagetoarcturus_mn_librivox",name:"Voyage to Arcturus"},{id:"voodoo_planet_mn_librivox",name:"Voodoo Planet"},{id:"talents_inc_mn_librivox",name:"Talents Inc."},{id:"people_minus_x_1511_librivox",name:"People Minux X"},{id:"time_crime_1305_librivox",name:"Time Crime"},{id:"my_man_jeeves_librivox",name:"My Man Jeeves"}]},479:function(e,n,t){e.exports=t(480)},480:function(e,n,t){e.exports=t.p+"f77f45d1e9fad82237bc3048dbfbbd62.svg"},481:function(e,n,t){e.exports=t(482)},482:function(e,n,t){e.exports=t.p+"0f3121169aedcca13eb16e0fcafac2e0.svg"},656:function(e,n,t){"use strict";var o,r,i,a,l,c,s,u,p,d,f,m,v=function(){function e(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(n,t,o){return t&&e(n.prototype,t),o&&e(n,o),n}}();function b(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function y(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}function h(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}o=t(4),c=t(5),m=t(15),t(414),f=t(479),s=t(481),u=t(657),t(156).navigate_to_url,a=t(419),t(456),p=t(442).default,d=[{id:"otrr",name:"Old Time Radio"},{id:"librivox",name:"Librivox Audiobooks"},{id:"scifi",name:"SciFi Movies"},{id:"misc",name:"Misc Stuff"}],r=function(){var e=function(e){function n(){return b(this,n),y(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return h(n,e),v(n,[{key:"linkClicked",value:function(e){return console.log("show",this.model.id)}}]),n}(c.View);return e.prototype.className="col-md-4",e.prototype.template=m.renderable((function(e){return m.div(".listview-list-entry",(function(){return m.a({href:"#netark/"+e.id+"/list"},e.name)}))})),e.prototype.ui={link:"a"},e.prototype.events={"click @ui.link":"linkClicked"},e}.call(void 0),i=function(){var e=function(e){function n(){return b(this,n),y(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return h(n,e),n}(c.CollectionView);return e.prototype.className="row",e.prototype.childView=r,e}.call(void 0),function(){var e=function(e){function n(){return b(this,n),y(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return h(n,e),n}(c.View);return e.prototype.template=m.renderable((function(e){return m.div(".jsonview.listview-list-entry",{style:"overflow:auto"})})),e.prototype.behaviors={HasJsonView:{behaviorClass:a}},e}.call(void 0),l=function(){var e=function(e){function n(){return b(this,n),y(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return h(n,e),v(n,[{key:"onRender",value:function(){var e,n;return e=new o.Collection(d),console.log("Collection",e),n=new i({collection:e}),this.showChildView("itemList",n)}}]),n}(c.View);return e.prototype.template=m.renderable((function(){return p({text:"Internet Archive",leftIcon:f,rightIcon:s}),m.div(".row.col-sm-4.offset-sm-4",(function(){return m.img({src:u}),m.span("This is an experimental app. Many parts will not work properly.")})),m.div(".items")})),e.prototype.ui={itemList:".items"},e.prototype.regions={itemList:"@ui.itemList"},e.prototype.templateContext={appName:"netark"},e}.call(void 0),e.exports=l},657:function(e,n,t){e.exports=t(658)},658:function(e,n,t){e.exports=t.p+"61ad64b3284fe94170f372e670b86be3.svg"}}]);
//# sourceMappingURL=netark-view-index-86c5e12d0eba0e7b7eb0.js.map