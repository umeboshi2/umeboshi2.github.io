(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{416:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o,r,i=function(){function e(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(n,t,o){return t&&e(n.prototype,t),o&&e(n,o),n}}(),a=t(7),l=t(417),u=(o=l)&&o.__esModule?o:{default:o};t(418),r=function(e){function n(){return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),function(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(n,e),i(n,[{key:"options",value:function(){return{jviewSelector:".jsonview"}}},{key:"ui",value:function(){return{jsonView:this.getOption("jviewSelector")}}},{key:"onDomRefresh",value:function(){var e;return e=this.view.model.toJSON(),this.view.jsonView=new u.default(e),this.ui.jsonView.prepend(this.view.jsonView.dom)}}]),n}(a.Behavior),n.default=r},417:function(e,n,t){"use strict";var o=t(424),r=t(425).EventEmitter;function i(e,n){var t=this;r.call(t),arguments.length<2&&(n=e,e=void 0);var o,a,l,u=[],c=[],s=!1,d=!1,f=!1,p=!0,v=!0,b={container:document.createElement("div"),collapseExpand:document.createElement("div"),name:document.createElement("div"),separator:document.createElement("div"),value:document.createElement("div"),delete:document.createElement("div"),children:document.createElement("div"),insert:document.createElement("div")};function m(){var e="object"==l||"array"==l;c.forEach((function(e){e.refresh()})),b.collapseExpand.style.display=e?"":"none",s&&e?w():h()}function h(e){e&&c.forEach((function(e){e.collapse(!0)})),s=!1,b.children.style.display="none",b.collapseExpand.className="jv-expand",b.container.classList.add("jv-collapsed"),b.container.classList.remove("jv-expanded")}function w(e){var n;n="object"==l?Object.keys(a):"array"==l?a.map((function(e,n){return n})):[];for(var t=c.length-1;t>=0;t--){var o=c[t];-1==n.indexOf(o.name)&&(c.splice(t,1),x(o))}if("object"!=l&&"array"!=l)return h();n.forEach((function(e){j(e,a[e])})),e&&c.forEach((function(e){e.expand(!0)})),s=!0,b.children.style.display="",b.collapseExpand.className="jv-collapse",b.container.classList.add("jv-expanded"),b.container.classList.remove("jv-collapsed")}function y(e){var n=typeof e,r=o;if(e!==o){if("string"!=n&&"number"!=n)throw new Error("Name must be either string or number, "+e);b.name.innerText=e,o=e,t.emit("rename",t,r,e)}}function g(e){var n,r=a;switch(l=function(e){var n=typeof e;if("object"==n){if(null===e)return"null";if(Array.isArray(e))return"array"}return n}(e)){case"null":n="null";break;case"object":n="Object["+Object.keys(e).length+"]";break;case"array":n="Array["+e.length+"]";break;default:n=e}b.value.innerText=n,b.value.className="value "+l,e!==a&&(a=e,"array"!=l&&"object"!=l||(v=!1,"array"==l&&(p=!1)),m(),t.emit("change",o,r,e))}function j(e,n){for(var t,o=0,r=c.length;o<r;o++)if(c[o].name==e){t=c[o];break}return t?t.value=n:((t=new i(e,n)).once("rename",_),t.on("delete",L),t.on("change",D),c.push(t)),b.children.appendChild(t.dom),t}function x(e){e.dom.parentNode&&b.children.removeChild(e.dom),e.destroy(),e.removeAllListeners()}function k(e){var n="name"==e?p:v,t=b[e];n&&("value"==e&&"string"==l&&(t.innerText='"'+a+'"'),"name"==e&&(d=!0),"value"==e&&(f=!0),t.classList.add("edit"),t.setAttribute("contenteditable",!0),t.focus(),document.execCommand("selectAll",!1,null))}function E(e){var n=b[e];if("name"==e){if(!d)return;d=!1}if("value"==e){if(!f)return;f=!1}if("name"==e)y(n.innerText);else try{g(JSON.parse(n.innerText))}catch(e){g(n.innerText)}n.classList.remove("edit"),n.removeAttribute("contenteditable")}function V(e,n){switch(n.key){case"Escape":case"Enter":E(e)}}function O(e,n){"Tab"==n.key&&(E(e),"name"==e?(n.preventDefault(),k("value")):E(e))}function _(e,n,t){t&&"array"!=l&&!(t in a)?(a[t]=e.value,delete a[n]):void 0===n?x(e):e.name=n,e.once("rename",_)}function D(e,n,r,i){i||(a[e]=r),t.emit("change",o+"."+e,n,r,!0)}function L(e){var n=e.name;"array"==l?a.splice(n,1):delete a[n],m()}function R(e,n,t){e.addEventListener(n,t),u.push({element:e,name:n,fn:t})}Object.defineProperties(t,{dom:{value:b.container,enumerable:!0},name:{get:function(){return o},set:y,enumerable:!0},value:{get:function(){return a},set:g,enumerable:!0},type:{get:function(){return l},enumerable:!0},nameEditable:{get:function(){return p},set:function(e){p=!!e},enumerable:!0},valueEditable:{get:function(){return v},set:function(e){v=!!e},enumerable:!0},refresh:{value:m,enumerable:!0},collapse:{value:h,enumerable:!0},expand:{value:w,enumerable:!0},destroy:{value:function(){var e,n;for(;n=u.pop();)n.element.removeEventListener(n.name,n.fn);for(;e=c.pop();)x(e)},enumerable:!0},editName:{value:k.bind(null,"name"),enumerable:!0},editValue:{value:k.bind(null,"value"),enumerable:!0}}),Object.keys(b).forEach((function(e){var n=b[e];"container"!=e&&(n.className=e,b.container.appendChild(n))})),b.container.className="jsonView",R(b.collapseExpand,"click",(function(){s?h():w()})),R(b.value,"click",w.bind(null,!1)),R(b.name,"click",w.bind(null,!1)),R(b.name,"dblclick",k.bind(null,"name")),R(b.name,"blur",E.bind(null,"name")),R(b.name,"keypress",V.bind(null,"name")),R(b.name,"keydown",O.bind(null,"name")),R(b.value,"dblclick",k.bind(null,"value")),R(b.value,"blur",E.bind(null,"value")),R(b.value,"keypress",V.bind(null,"value")),R(b.value,"keydown",O.bind(null,"value")),R(b.value,"keydown",(function(e){var n,t=0;if("number"!=l)return;switch(e.key){case"ArrowDown":case"Down":t=-1;break;case"ArrowUp":case"Up":t=1}e.shiftKey&&(t*=10);(e.ctrlKey||e.metaKey)&&(t/=10);t&&(n=parseFloat(b.value.innerText),isNaN(n)||g(Number((n+t).toFixed(10))))})),R(b.insert,"click",(function(){var e=j("array"==l?a.length:void 0,null);"array"==l?(a.push(null),e.editValue()):e.editName()})),R(b.delete,"click",(function(){t.emit("delete",t)})),y(e),g(n)}e.exports=i,o.inherits(i,r)},418:function(e,n,t){var o=t(412),r=t(419);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var i={insert:"head",singleton:!1};o(r,i);e.exports=r.locals||{}},419:function(e,n,t){(e.exports=t(413)(!1)).push([e.i,'.jsonView{\n    margin-left: 20px;\n    font-family: Consolas, "Lucida Console", Menlo, "dejavu sans mono", monospace;\n    font-size: 16px;\n    line-height: 16px;\n    padding: 2px;\n    cursor: default;\n    color: cornsilk;\n    white-space: nowrap;\n    -webkit-user-select: none;\n}\n\n.jsonView>div{\n    display: inline-block;\n}\n\n.jsonView>.children, .jsonView.insert{\n    display: block;\n}\n\n.jsonView>.name{\n    color: mistyrose;\n}\n\n.jsonView>.separator:before{\n    content: ":";\n}\n\n.jsonView>.separator {\n    padding-right: 5px;\n}\n\n.jsonView>.value.null{\n    color: rgb(128, 128, 128);\n}\n\n.jsonView>.value.boolean, .jsonView>.value.number{\n    color: lightseagreen;\n}\n\n.jsonView>.value.string:not(.edit):before, .jsonView>.value.string:not(.edit):after{\n    content: "\\"";\n}\n\n.jsonView>.value.string {\n    color: lightsalmon;\n}\n\n.jsonView>.name:hover, .jsonView>.value:hover{\n    background-color: rgba(56, 121, 217, 0.1);\n}\n\n.jsonView>.jv-expand, .jsonView>.jv-collapse{\n    min-width: 20px;\n    margin-left: -20px;\n    cursor: pointer;\n}\n\n.jsonView>.jv-expand:before{\n    content: \'\\25B6\';\n}\n\n.jsonView>.jv-collapse:before{\n    content: \'\\25BC\';\n}\n\n.jsonView>.edit{\n    padding: 0px 5px 0px 5px;\n    white-space: nowrap;\n    overflow: hidden;\n    background-color: transparent;\n}\n\n.jsonView>.edit br{\n    display: none;\n}\n\n.jsonView>.edit *{\n    display: inline;\n    white-space: nowrap;\n}\n\n.jsonView>.value.edit{\n    color: rgb(0, 0, 0);\n}\n\n.jsonView>.delete:before{\n    content: \'X\';\n}\n\n.jsonView>.delete{\n    opacity: 0;\n    display: inline;\n    padding: 3px;\n    margin-left: 20px;\n    cursor: pointer;\n    color: rgb(150, 150, 150);\n}\n\n.jsonView>.delete:hover{\n    opacity: 1;\n    color: rgb(0, 0, 0);\n    background: rgb(220, 220, 220);\n}\n\n.jsonView>.insert:before{\n    content: \'+\';\n}\n\n.jsonView>.insert{\n    display: none;\n    color: rgb(150, 150, 150);\n    cursor: pointer;\n}\n\n.jsonView.jv-expanded>.insert, .jsonView.jv-expanded>.insert{\n    display: inline-block;\n    margin-left: 20px;\n    padding: 3px;\n}\n\n.jsonView>.insert:hover{\n    color: rgb(0, 0, 0);\n    background: rgb(220, 220, 220);\n}\n',""])},635:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=function(){function e(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(n,t,o){return t&&e(n.prototype,t),o&&e(n,o),n}}(),r=(c(t(31)),t(6)),i=t(7),a=c(t(34)),l=c(t(636)),u=c(t(416));function c(e){return e&&e.__esModule?e:{default:e}}function s(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function d(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}function f(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}var p,v,b,m,h,w;b=r.Radio.channel("global"),h=r.Radio.channel("messages"),a.default.renderable((function(e){return a.default.div(".listview-list-entry",(function(){return a.default.h2(e.name),a.default.div(".btn-group",(function(){return a.default.button(".view.btn.btn-success",{type:"button"},"View"),a.default.button(".export.btn.btn-primary",{type:"button"},"Export"),a.default.button(".import.btn.btn-info",{type:"button"},"Import")})),a.default.div(".dbview")}))})),w=a.default.renderable((function(e){return a.default.div(".card",(function(){return a.default.div(".card-header",(function(){return a.default.h2(e.name)})),a.default.div(".card-body",(function(){return a.default.div(".file-status",(function(){return a.default.text("Drop a .json exported database to import.")})),a.default.button(".view.btn.btn-success",{type:"button"},"View"),a.default.button(".export.btn.btn-primary",{type:"button"},"Export"),a.default.div(".import.btn.btn-info",{type:"button",style:"display:none"},(function(){return a.default.text("Import Database")})),a.default.input(".db-file-input.input",{type:"file"}),a.default.button(".import-chosen.btn.btn-info",{style:"display:none"},(function(){return a.default.text("Import input file")})),a.default.div(".dbview")}))}))})),p=function(){var e=function(e){function n(){return s(this,n),d(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return f(n,e),n}(i.View);return e.prototype.behaviors=[u.default],e.prototype.template=a.default.renderable((function(){return a.default.div(".jsonview")})),e}.call(void 0),v=function(){var e=function(e){function n(){s(this,n);var e=d(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments));return e.fileReaderOnLoad=e.fileReaderOnLoad.bind(e),e}return f(n,e),o(n,[{key:"fileInputClicked",value:function(){return this.ui.fileInput.val(null),this.ui.importChosenButton.hide()}},{key:"fileInputChanged",value:function(){return this.ui.importChosenButton.show()}},{key:"handleDrop",value:function(){var e,n;return event.preventDefault(),this.$el.css("border","0px"),e=event.originalEvent.dataTransfer.files[0],this.droppedFile=e,n="File: "+e.name,this.ui.fileStatus.text(n),this.ui.importButton.show()}},{key:"handleDragOver",value:function(e){return e.preventDefault(),e.stopPropagation()}},{key:"handleDragEnter",value:function(e){return e.stopPropagation(),e.preventDefault(),this.$el.css("border","2px dotted")}},{key:"handleDragExit",value:function(e){return e.stopPropagation(),e.preventDefault(),this.$el.css("border","0px")}},{key:"_exportDatabase",value:function(){return this.model.get("conn").export()}},{key:"viewDatabase",value:function(){var e=this;return this._exportDatabase().then((function(n){var t;return t=new p({model:new r.Model(n)}),e.showChildView("dbView",t),e.ui.viewButton.hide()}))}},{key:"exportDatabase",value:function(){var e=this;return this._exportDatabase().then((function(n){var t,o,r;return o=e.model.get("name"),r={type:"data:text/json;charset=utf-8",data:JSON.stringify(n),filename:o+"-idb.json"},t=new Blob([r.data],{type:r.type}),l.default.saveAs(t,r.filename),h.request("primary","Exported Database "+o)}))}},{key:"fileReaderOnLoad",value:function(e){var t,o=this;return function(e,n){if(!(e instanceof n))throw new Error("Bound instance method accessed before binding")}(this,n),t=JSON.parse(e.target.result),this.ui.fileStatus.text("Database file loaded, now importing...."),this.model.get("conn").import(t).then((function(){return o.viewDatabase()}))}},{key:"importDatabase",value:function(){var e;return h.request("info","Import Database "+this.model.get("name")),this.ui.fileStatus.text("Reading dabase file....."),(e=new FileReader).onload=this.fileReaderOnLoad,e.readAsText(this.droppedFile),this.ui.importButton.hide()}}]),n}(i.View);return e.prototype.template=w,e.prototype.ui={viewButton:".view",exportButton:".export",importButton:".import",dbView:".dbview",fileInput:".db-file-input",importChosenButton:".import-chosen",fileStatus:".file-status"},e.prototype.regions={dbView:"@ui.dbView"},e.prototype.events={dragover:"handleDragOver",dragenter:"handleDragEnter",dragexit:"handleDragExit",drop:"handleDrop","click @ui.viewButton":"viewDatabase","click @ui.exportButton":"exportDatabase","click @ui.importButton":"importDatabase","click @ui.importChosenButton":"importChosenFile","click @ui.fileInput":"fileInputClicked","change @ui.fileInput":"fileInputChanged"},e}.call(void 0),m=function(){var e=function(e){function n(){return s(this,n),d(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return f(n,e),o(n,[{key:"onRender",value:function(){var e,n,t,o=this;return e=b.request("main:app:object"),n=e.getState("dbConn"),this.collection=new r.Collection,t=new i.CollectionView({collection:this.collection,childView:v}),this.showChildView("body",t),Object.keys(n).forEach((function(e){return o.collection.add({id:e,name:e,conn:n[e]})}))}}]),n}(i.View);return e.prototype.regions={body:".body"},e.prototype.template=a.default.renderable((function(){return a.default.div(".listview-header.text-center",(function(){return a.default.text("Indexed Database Admin")})),a.default.div(".body")})),e}.call(void 0),n.default=m},636:function(e,n,t){(function(t){var o,r,i;r=[],void 0===(i="function"==typeof(o=function(){"use strict";function n(e,n,t){var o=new XMLHttpRequest;o.open("GET",e),o.responseType="blob",o.onload=function(){a(o.response,n,t)},o.onerror=function(){console.error("could not download file")},o.send()}function o(e){var n=new XMLHttpRequest;n.open("HEAD",e,!1);try{n.send()}catch(e){}return 200<=n.status&&299>=n.status}function r(e){try{e.dispatchEvent(new MouseEvent("click"))}catch(t){var n=document.createEvent("MouseEvents");n.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(n)}}var i="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof t&&t.global===t?t:void 0,a=i.saveAs||("object"!=typeof window||window!==i?function(){}:"download"in HTMLAnchorElement.prototype?function(e,t,a){var l=i.URL||i.webkitURL,u=document.createElement("a");t=t||e.name||"download",u.download=t,u.rel="noopener","string"==typeof e?(u.href=e,u.origin===location.origin?r(u):o(u.href)?n(e,t,a):r(u,u.target="_blank")):(u.href=l.createObjectURL(e),setTimeout((function(){l.revokeObjectURL(u.href)}),4e4),setTimeout((function(){r(u)}),0))}:"msSaveOrOpenBlob"in navigator?function(e,t,i){if(t=t||e.name||"download","string"!=typeof e)navigator.msSaveOrOpenBlob(function(e,n){return void 0===n?n={autoBom:!1}:"object"!=typeof n&&(console.warn("Deprecated: Expected third argument to be a object"),n={autoBom:!n}),n.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob(["\ufeff",e],{type:e.type}):e}(e,i),t);else if(o(e))n(e,t,i);else{var a=document.createElement("a");a.href=e,a.target="_blank",setTimeout((function(){r(a)}))}}:function(e,t,o,r){if((r=r||open("","_blank"))&&(r.document.title=r.document.body.innerText="downloading..."),"string"==typeof e)return n(e,t,o);var a="application/octet-stream"===e.type,l=/constructor/i.test(i.HTMLElement)||i.safari,u=/CriOS\/[\d]+/.test(navigator.userAgent);if((u||a&&l)&&"object"==typeof FileReader){var c=new FileReader;c.onloadend=function(){var e=c.result;e=u?e:e.replace(/^data:[^;]*;/,"data:attachment/file;"),r?r.location.href=e:location=e,r=null},c.readAsDataURL(e)}else{var s=i.URL||i.webkitURL,d=s.createObjectURL(e);r?r.location=d:location.href=d,r=null,setTimeout((function(){s.revokeObjectURL(d)}),4e4)}});i.saveAs=a.saveAs=a,e.exports=a})?o.apply(n,r):o)||(e.exports=i)}).call(this,t(49))}}]);
//# sourceMappingURL=frontdoor-view-dbadmin-fbcf8731978472620c45.js.map