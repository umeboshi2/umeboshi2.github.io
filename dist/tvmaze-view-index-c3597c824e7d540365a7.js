(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{415:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r,o=t(34),i=(r=o)&&r.__esModule?r:{default:r};n.default=i.default.renderable((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"5x";return i.default.span(".fa-stack.fa-"+e,(function(){return i.default.i(".fa.fa-image.fa-stack-1x"),i.default.i(".fa.fa-ban.fa-stack-2x.text-danger")}))}))},417:function(e,n,t){"use strict";var r=t(423),o=t(424).EventEmitter;function i(e,n){var t=this;o.call(t),arguments.length<2&&(n=e,e=void 0);var r,a,l,u=[],c=[],s=!1,f=!1,d=!1,p=!0,h=!0,m={container:document.createElement("div"),collapseExpand:document.createElement("div"),name:document.createElement("div"),separator:document.createElement("div"),value:document.createElement("div"),delete:document.createElement("div"),children:document.createElement("div"),insert:document.createElement("div")};function v(){var e="object"==l||"array"==l;c.forEach((function(e){e.refresh()})),m.collapseExpand.style.display=e?"":"none",s&&e?y():b()}function b(e){e&&c.forEach((function(e){e.collapse(!0)})),s=!1,m.children.style.display="none",m.collapseExpand.className="jv-expand",m.container.classList.add("jv-collapsed"),m.container.classList.remove("jv-expanded")}function y(e){var n;n="object"==l?Object.keys(a):"array"==l?a.map((function(e,n){return n})):[];for(var t=c.length-1;t>=0;t--){var r=c[t];-1==n.indexOf(r.name)&&(c.splice(t,1),x(r))}if("object"!=l&&"array"!=l)return b();n.forEach((function(e){j(e,a[e])})),e&&c.forEach((function(e){e.expand(!0)})),s=!0,m.children.style.display="",m.collapseExpand.className="jv-collapse",m.container.classList.add("jv-expanded"),m.container.classList.remove("jv-collapsed")}function w(e){var n=typeof e,o=r;if(e!==r){if("string"!=n&&"number"!=n)throw new Error("Name must be either string or number, "+e);m.name.innerText=e,r=e,t.emit("rename",t,o,e)}}function g(e){var n,o=a;switch(l=function(e){var n=typeof e;if("object"==n){if(null===e)return"null";if(Array.isArray(e))return"array"}return n}(e)){case"null":n="null";break;case"object":n="Object["+Object.keys(e).length+"]";break;case"array":n="Array["+e.length+"]";break;default:n=e}m.value.innerText=n,m.value.className="value "+l,e!==a&&(a=e,"array"!=l&&"object"!=l||(h=!1,"array"==l&&(p=!1)),v(),t.emit("change",r,o,e))}function j(e,n){for(var t,r=0,o=c.length;r<o;r++)if(c[r].name==e){t=c[r];break}return t?t.value=n:((t=new i(e,n)).once("rename",E),t.on("delete",P),t.on("change",S),c.push(t)),m.children.appendChild(t.dom),t}function x(e){e.dom.parentNode&&m.children.removeChild(e.dom),e.destroy(),e.removeAllListeners()}function _(e){var n="name"==e?p:h,t=m[e];n&&("value"==e&&"string"==l&&(t.innerText='"'+a+'"'),"name"==e&&(f=!0),"value"==e&&(d=!0),t.classList.add("edit"),t.setAttribute("contenteditable",!0),t.focus(),document.execCommand("selectAll",!1,null))}function k(e){var n=m[e];if("name"==e){if(!f)return;f=!1}if("value"==e){if(!d)return;d=!1}if("name"==e)w(n.innerText);else try{g(JSON.parse(n.innerText))}catch(e){g(n.innerText)}n.classList.remove("edit"),n.removeAttribute("contenteditable")}function O(e,n){switch(n.key){case"Escape":case"Enter":k(e)}}function V(e,n){"Tab"==n.key&&(k(e),"name"==e?(n.preventDefault(),_("value")):k(e))}function E(e,n,t){t&&"array"!=l&&!(t in a)?(a[t]=e.value,delete a[n]):void 0===n?x(e):e.name=n,e.once("rename",E)}function S(e,n,o,i){i||(a[e]=o),t.emit("change",r+"."+e,n,o,!0)}function P(e){var n=e.name;"array"==l?a.splice(n,1):delete a[n],v()}function C(e,n,t){e.addEventListener(n,t),u.push({element:e,name:n,fn:t})}Object.defineProperties(t,{dom:{value:m.container,enumerable:!0},name:{get:function(){return r},set:w,enumerable:!0},value:{get:function(){return a},set:g,enumerable:!0},type:{get:function(){return l},enumerable:!0},nameEditable:{get:function(){return p},set:function(e){p=!!e},enumerable:!0},valueEditable:{get:function(){return h},set:function(e){h=!!e},enumerable:!0},refresh:{value:v,enumerable:!0},collapse:{value:b,enumerable:!0},expand:{value:y,enumerable:!0},destroy:{value:function(){var e,n;for(;n=u.pop();)n.element.removeEventListener(n.name,n.fn);for(;e=c.pop();)x(e)},enumerable:!0},editName:{value:_.bind(null,"name"),enumerable:!0},editValue:{value:_.bind(null,"value"),enumerable:!0}}),Object.keys(m).forEach((function(e){var n=m[e];"container"!=e&&(n.className=e,m.container.appendChild(n))})),m.container.className="jsonView",C(m.collapseExpand,"click",(function(){s?b():y()})),C(m.value,"click",y.bind(null,!1)),C(m.name,"click",y.bind(null,!1)),C(m.name,"dblclick",_.bind(null,"name")),C(m.name,"blur",k.bind(null,"name")),C(m.name,"keypress",O.bind(null,"name")),C(m.name,"keydown",V.bind(null,"name")),C(m.value,"dblclick",_.bind(null,"value")),C(m.value,"blur",k.bind(null,"value")),C(m.value,"keypress",O.bind(null,"value")),C(m.value,"keydown",V.bind(null,"value")),C(m.value,"keydown",(function(e){var n,t=0;if("number"!=l)return;switch(e.key){case"ArrowDown":case"Down":t=-1;break;case"ArrowUp":case"Up":t=1}e.shiftKey&&(t*=10);(e.ctrlKey||e.metaKey)&&(t/=10);t&&(n=parseFloat(m.value.innerText),isNaN(n)||g(Number((n+t).toFixed(10))))})),C(m.insert,"click",(function(){var e=j("array"==l?a.length:void 0,null);"array"==l?(a.push(null),e.editValue()):e.editName()})),C(m.delete,"click",(function(){t.emit("delete",t)})),w(e),g(n)}e.exports=i,r.inherits(i,o)},433:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r,o,i=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}(),a=c(t(6)),l=c(t(7)),u=c(t(34));function c(e){return e&&e.__esModule?e:{default:e}}o=a.default.Radio.channel("messages"),r=u.default.renderable((function(e){return u.default.div(".modal-content",(function(){return u.default.div(".modal-header",(function(){return u.default.h3(".modal-title",(function(){return u.default.text("Do you really want to delete "+e.content.name+"?"),u.default.img({src:e.content.image.medium})})),u.default.button(".close",{type:"button",data:{dismiss:"modal"}},(function(){return u.default.span({"aria-hidden":"true"},(function(){return u.default.raw("&times")}))}))})),u.default.div(".modal-body",(function(){return u.default.div("#selected-children")})),u.default.div(".modal-footer",(function(){return u.default.button(".confirm-delete.btn.btn-primary",{type:"button",data:{dismiss:"modal"}},(function(){return u.default.i(".fa.fa-check"),u.default.text("OK")})),u.default.button(".cancel-delete.btn.btn-danger",{type:"button",data:{dismiss:"modal"}},(function(){return u.default.i(".fa.fa-close"),u.default.text("Cancel")}))}))}))})),n.default=function(){var e=function(e){function n(){return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),function(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(n,e),i(n,[{key:"events",value:function(){return{"click @ui.confirmDelete":"confirmDelete"}}},{key:"confirmDelete",value:function(){var e,n;return e=this.model.get("name"),(n=this.model.destroy()).done((function(){return o.request("success",e+" deleted.")})),n.fail((function(){return o.request("danger",e+" NOT deleted.")}))}}]),n}(l.default.View);return e.prototype.template=r,e.prototype.className="modal-dialog",e.prototype.ui={confirmDelete:".confirm-delete",cancelButton:".cancel-delete"},e}.call(void 0)},460:function(e,n,t){var r=t(490);"string"==typeof r&&(r=[[e.i,r,""]]);var o={insert:"head",singleton:!1};t(413)(r,o);r.locals&&(e.exports=r.locals)},475:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r,o=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}();r=function(e){function n(){return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),function(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(n,e),o(n,[{key:"onSetHeader",value:function(e){return this.ui.header.text(e)}}]),n}(t(7).Behavior),n.default=r},490:function(e,n,t){(e.exports=t(412)(!1)).push([e.i,'.jsonView{\n    margin-left: 20px;\n    font-family: Consolas, "Lucida Console", Menlo, "dejavu sans mono", monospace;\n    font-size: 16px;\n    line-height: 16px;\n    padding: 2px;\n    cursor: default;\n    color: rgb(66, 66, 66);\n    white-space: nowrap;\n    -webkit-user-select: none;\n}\n\n.jsonView>div{\n    display: inline-block;\n}\n\n.jsonView>.children, .jsonView.insert{\n    display: block;\n}\n\n.jsonView>.name{\n    color: rgb(136, 19, 145);\n}\n\n.jsonView>.separator:before{\n    content: ":";\n}\n\n.jsonView>.separator {\n    padding-right: 5px;\n}\n\n.jsonView>.value.null{\n    color: rgb(128, 128, 128);\n}\n\n.jsonView>.value.boolean, .jsonView>.value.number{\n    color: rgb(28, 0, 207);\n}\n\n.jsonView>.value.string:not(.edit):before, .jsonView>.value.string:not(.edit):after{\n    content: "\\"";\n}\n\n.jsonView>.value.string {\n    color: rgb(196, 26, 22);\n}\n\n.jsonView>.name:hover, .jsonView>.value:hover{\n    background-color: rgba(56, 121, 217, 0.1);\n}\n\n.jsonView>.jv-expand, .jsonView>.jv-collapse{\n    min-width: 20px;\n    margin-left: -20px;\n    cursor: pointer;\n}\n\n.jsonView>.jv-expand:before{\n    content: \'\\25B6\';\n}\n\n.jsonView>.jv-collapse:before{\n    content: \'\\25BC\';\n}\n\n.jsonView>.edit{\n    padding: 0px 5px 0px 5px;\n    white-space: nowrap;\n    overflow: hidden;\n    background-color: transparent;\n}\n\n.jsonView>.edit br{\n    display: none;\n}\n\n.jsonView>.edit *{\n    display: inline;\n    white-space: nowrap;\n}\n\n.jsonView>.value.edit{\n    color: rgb(0, 0, 0);\n}\n\n.jsonView>.delete:before{\n    content: \'X\';\n}\n\n.jsonView>.delete{\n    opacity: 0;\n    display: inline;\n    padding: 3px;\n    margin-left: 20px;\n    cursor: pointer;\n    color: rgb(150, 150, 150);\n}\n\n.jsonView>.delete:hover{\n    opacity: 1;\n    color: rgb(0, 0, 0);\n    background: rgb(220, 220, 220);\n}\n\n.jsonView>.insert:before{\n    content: \'+\';\n}\n\n.jsonView>.insert{\n    display: none;\n    color: rgb(150, 150, 150);\n    cursor: pointer;\n}\n\n.jsonView.jv-expanded>.insert, .jsonView.jv-expanded>.insert{\n    display: inline-block;\n    margin-left: 20px;\n    padding: 3px;\n}\n\n.jsonView>.insert:hover{\n    color: rgb(0, 0, 0);\n    background: rgb(220, 220, 220);\n}\n',""])},681:function(e,n,t){"use strict";var r,o,i,a,l,u,c,s,f,d=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}();t(31),r=t(6),a=t(7),f=t(34),s=t(414),t(411).default,t(433).default,l=t(682),u=t(683),r.Radio.channel("global"),r.Radio.channel("messages"),r.Radio.channel("tvmaze"),c=t(684).default,f.renderable((function(e){return".btn.btn-sm",f.li(".list-group-item",(function(){return f.span((function(){return f.a({href:"#tvmaze/view/show/"+e.id},e.content.name)})),f.span(".btn-group.pull-right",(function(){return f.button(".delete-item.btn.btn-sm.btn-danger.fa.fa-close","delete")}))}))})),f.renderable((function(){return f.div(".listview-header",(function(){return f.text("TV Shows")})),f.ul(".list-group")})),o=f.renderable((function(e){return f.article(".document-view.content",(function(){return f.div(".body",(function(){return f.h1("TV Maze API Demo"),f.div(".search-form.listview-list-entry"),f.div(".search-results"),f.raw(s(c))}))}))})),i=function(){var e=function(e){function n(){return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),function(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(n,e),d(n,[{key:"doSomething",value:function(e){var n,t;return(t=this.getChildView("searchResults")).ui.header.is(":visible")||t.ui.header.show(),n=t.collection.length+'  results for "'+e.get("tvshow")+'"',t.triggerMethod("set:header",n)}},{key:"onRender",value:function(){var e,n;return n=new l({collection:this.collection}),this.showChildView("searchForm",n),e=new u({collection:this.collection}),this.showChildView("searchResults",e)}}]),n}(a.View);return e.prototype.template=o,e.prototype.templateContext={appName:"tvmaze"},e.prototype.ui={searchForm:".search-form",searchResults:".search-results"},e.prototype.childViewEvents={"save:form:success":"doSomething"},e.prototype.regions={searchForm:"@ui.searchForm",searchResults:"@ui.searchResults"},e}.call(void 0),e.exports=i},682:function(e,n,t){"use strict";var r,o,i,a,l,u,c,s=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}();t(31),t(1),r=t(6),t(7),c=t(34),t(414),o=t(420).default,t(411).default;var f=t(416);l=f.form_group_input_div,i=r.Radio.channel("messages"),r.Radio.channel("tvmaze"),u=c.renderable((function(){return l({input_id:"input_show",label:"TV Show",input_attributes:{name:"tv_show",placeholder:"tiny toons"}}),c.input(".btn.btn-primary.btn-sm",{type:"submit",value:"Search"}),c.div(".spinner.fa.fa-spinner.fa-spin.text-primary")})),a=function(){var e=function(e){function n(){return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),function(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(n,e),s(n,[{key:"createModel",value:function(){return new r.Model}},{key:"updateModel",value:function(){return this.tvshow=this.ui.tvShow.val(),this.model.set("tvshow",this.tvshow)}},{key:"saveModel",value:function(){var e,n=this;return(e=this.collection.fetch({data:{q:this.tvshow}})).done((function(){return n.trigger("save:form:success",n.model)})),e.fail((function(){return i.request("warning",n.tvshow+" not found."),n.trigger("save:form:failure",n.model)}))}}]),n}(o);return e.prototype.template=u,e.prototype.ui={tvShow:'[name="tv_show"]'},e}.call(void 0),e.exports=a},683:function(e,n,t){"use strict";var r,o,i,a,l,u,c,s,f,d,p,h=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}();function m(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function v(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}function b(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}o=t(6),a=t(7),p=t(34),t(417),t(460),s=t(411).default,f=t(415).default,i=t(475).default,l=o.Radio.channel("messages"),r=o.Radio.channel("tvmaze"),d=p.renderable((function(e){var n;return n=e.show,p.div(".card.bg-body-d5",(function(){return p.div(".row",(function(){return p.div(".col-md-2",(function(){var e;return(null!=(e=n.image)?e.medium:void 0)?p.img(".main-image.card-img-bottom",{src:n.image.medium}):f("5x")})),p.div(".col-md-9",(function(){return p.div(".card-block.bg-body-d10",(function(){return p.h3(".card-title",n.name),p.h4("Premiered: "+new Date(n.premiered).toDateString()),p.raw(n.summary)})),p.button(".select-show.btn.btn-primary",{style:"display:none"},"Select this show")}))}))}))})),c=function(){var e=function(e){function n(){return m(this,n),v(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return b(n,e),h(n,[{key:"inLocalCollection",value:function(){var e;return e=this.model.toJSON().show.id,this.getOption("localCollection").get(e)}},{key:"onRender",value:function(){if(!this.inLocalCollection())return this.ui.selectShow.show()}},{key:"handleImageHover",value:function(){if(this.inLocalCollection())return this.ui.mainImage.css({cursor:"pointer"})}},{key:"viewShow",value:function(){var e;return e=this.model.toJSON().show.id,s("#tvmaze/shows/view/"+e)}},{key:"selectShow",value:function(){var e,n,t;return e=this.model.toJSON().show.id,(n=(t=r.request("get-remote-show",e)).fetch()).done((function(){return r.request("save-local-show",t.toJSON()).then((function(n){return s("#tvmaze/shows/view/"+e)}))})),n.fail((function(){return l.request("danger","Bad move")}))}}]),n}(a.View);return e.prototype.template=d,e.prototype.ui={selectShow:".select-show",mainImage:".main-image"},e.prototype.events={"click @ui.selectShow":"selectShow","mouseenter @ui.mainImage":"handleImageHover","click @ui.mainImage":"viewShow"},e}.call(void 0),u=function(){var e=function(e){function n(){return m(this,n),v(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return b(n,e),h(n,[{key:"onRender",value:function(){var e;return this.ui.header.hide(),e=new a.CollectionView({collection:this.collection,childView:c,childViewOptions:{localCollection:r.request("get-local-tvshows")}}),this.showChildView("itemList",e)}}]),n}(a.View);return e.prototype.template=p.renderable((function(e){return p.div(".listview-header",(function(){return p.text("Matched TV Shows")})),p.div(".show-list")})),e.prototype.ui={header:".listview-header",itemList:".show-list"},e.prototype.regions={itemList:"@ui.itemList"},e.prototype.behaviors={HasHeader:{behaviorClass:i}},e}.call(void 0),e.exports=u},684:function(e,n,t){"use strict";t.r(n),n.default="\n\nYou can **search** for a TV show, or go directly \nto the [list of shows](#tvmaze/shows).\n\n"}}]);
//# sourceMappingURL=tvmaze-view-index-c3597c824e7d540365a7.js.map