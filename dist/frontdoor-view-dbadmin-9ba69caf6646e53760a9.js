(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{105:function(e,t,n){"use strict";n.r(t),t.default=function(e){var t,n,r,i;return n=encodeURIComponent(e.data),i=`${e.type},${n}`,r=e.filename||"exported",(t=document.createElement("a")).id=e.elId||"exported-file-anchor",t.href=i,t.download=r,t.innerHTML=`Download ${r}`,t.style.display="none",document.body.appendChild(t),t.click(),document.body.removeChild(t)}},106:function(e,t){(function(t){e.exports=t}).call(this,{})},107:function(e,t,n){var r,i=i||function(e){"use strict";if(!(void 0===e||"undefined"!=typeof navigator&&/MSIE [1-9]\./.test(navigator.userAgent))){var t=function(){return e.URL||e.webkitURL||e},n=e.document.createElementNS("http://www.w3.org/1999/xhtml","a"),r="download"in n,i=/constructor/i.test(e.HTMLElement)||e.safari,o=/CriOS\/[\d]+/.test(navigator.userAgent),s=function(t){(e.setImmediate||e.setTimeout)(function(){throw t},0)},a=function(e){setTimeout(function(){"string"==typeof e?t().revokeObjectURL(e):e.remove()},4e4)},u=function(e){return/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob([String.fromCharCode(65279),e],{type:e.type}):e},l=function(l,c,d){d||(l=u(l));var h,p=this,f="application/octet-stream"===l.type,v=function(){!function(e,t,n){for(var r=(t=[].concat(t)).length;r--;){var i=e["on"+t[r]];if("function"==typeof i)try{i.call(e,n||e)}catch(e){s(e)}}}(p,"writestart progress write writeend".split(" "))};if(p.readyState=p.INIT,r)return h=t().createObjectURL(l),void setTimeout(function(){var e,t;n.href=h,n.download=c,e=n,t=new MouseEvent("click"),e.dispatchEvent(t),v(),a(h),p.readyState=p.DONE});!function(){if((o||f&&i)&&e.FileReader){var n=new FileReader;return n.onloadend=function(){var t=o?n.result:n.result.replace(/^data:[^;]*;/,"data:attachment/file;");e.open(t,"_blank")||(e.location.href=t),t=void 0,p.readyState=p.DONE,v()},n.readAsDataURL(l),void(p.readyState=p.INIT)}h||(h=t().createObjectURL(l)),f?e.location.href=h:e.open(h,"_blank")||(e.location.href=h);p.readyState=p.DONE,v(),a(h)}()},c=l.prototype;return"undefined"!=typeof navigator&&navigator.msSaveOrOpenBlob?function(e,t,n){return t=t||e.name||"download",n||(e=u(e)),navigator.msSaveOrOpenBlob(e,t)}:(c.abort=function(){},c.readyState=c.INIT=0,c.WRITING=1,c.DONE=2,c.error=c.onwritestart=c.onprogress=c.onwrite=c.onabort=c.onerror=c.onwriteend=null,function(e,t,n){return new l(e,t||e.name||"download",n)})}}("undefined"!=typeof self&&self||"undefined"!=typeof window&&window||this.content);
/*! @source http://purl.eligrey.com/github/FileSaver.js/blob/master/FileSaver.js */void 0!==e&&e.exports?e.exports.saveAs=i:null!==n(64)&&null!==n(106)&&(void 0===(r=function(){return i}.call(t,n,t,e))||(e.exports=r))},163:function(e,t,n){var r,i,o,s,a,u,l,c,d,h,p,f=function(e,t){if(!(e instanceof t))throw new Error("Bound instance method accessed before binding")};n(4),r=n(0),c=n(2),p=n(1),a=n(80),n(79),o=n(107),n(105).default,u=r.Radio.channel("global"),d=r.Radio.channel("messages"),r.Radio.channel("ebcsv"),p.renderable(function(e){return p.div(".listview-list-entry",function(){return p.h2(e.name),p.div(".btn-group",function(){return p.button(".view.btn.btn-success",{type:"button"},"View"),p.button(".export.btn.btn-primary",{type:"button"},"Export"),p.button(".import.btn.btn-info",{type:"button"},"Import")}),p.div(".dbview")})}),h=p.renderable(function(e){return p.div(".card",function(){return p.div(".card-header",function(){return p.h2(e.name)}),p.div(".card-body",function(){return p.div(".file-status",function(){return p.text("Drop a .json exported database to import.")}),p.button(".view.btn.btn-success",{type:"button"},"View"),p.button(".export.btn.btn-primary",{type:"button"},"Export"),p.div(".import.btn.btn-info",{type:"button",style:"display:none"},function(){return p.text("Import Database")}),p.input(".db-file-input.input",{type:"file"}),p.button(".import-chosen.btn.btn-info",{style:"display:none"},function(){return p.text("Import input file")}),p.div(".dbview")})})}),i=function(){class e extends c.View{onDomRefresh(){var e;return e=this.model.toJSON(),this.jsonView=new a(e),this.ui.body.prepend(this.jsonView.dom)}}return e.prototype.template=p.renderable(function(e){return p.div(function(){return p.div(".body")})}),e.prototype.ui={body:".body"},e}.call(this),s=function(){class e extends c.View{constructor(){super(...arguments),this.fileReaderOnLoad=this.fileReaderOnLoad.bind(this)}fileInputClicked(e){return this.ui.fileInput.val(null),this.ui.importChosenButton.hide()}fileInputChanged(e){return this.ui.importChosenButton.show()}handleDrop(e){var t,n;return e.preventDefault(),this.$el.css("border","0px"),t=e.originalEvent.dataTransfer.files[0],this.droppedFile=t,n=`File: ${t.name}`,this.ui.fileStatus.text(n),this.ui.importButton.show()}handleDragOver(e){return e.preventDefault(),e.stopPropagation()}handleDragEnter(e){return e.stopPropagation(),e.preventDefault(),this.$el.css("border","2px dotted")}handleDragExit(e){return e.stopPropagation(),e.preventDefault(),this.$el.css("border","0px")}_exportDatabase(){return this.model.get("conn").export()}viewDatabase(){return this._exportDatabase().then(e=>{var t;return t=new i({model:new r.Model({data:e})}),this.showChildView("dbView",t),this.ui.viewButton.hide()})}exportDatabase(){return this._exportDatabase().then(e=>{var t,n,r;return n=this.model.get("name"),r={type:"data:text/json;charset=utf-8",data:JSON.stringify(e),filename:`${n}-idb.json`},t=new Blob([r.data],{type:r.type}),o.saveAs(t,r.filename),d.request("primary",`Exported Database ${n}`)})}fileReaderOnLoad(t){var n;return f(this,e),n=JSON.parse(t.target.result),this.ui.fileStatus.text("Database file loaded, now importing...."),this.model.get("conn").import(n).then(()=>this.viewDatabase())}importDatabase(){var e;return d.request("info",`Import Database ${this.model.get("name")}`),this.ui.fileStatus.text("Reading dabase file....."),(e=new FileReader).onload=this.fileReaderOnLoad,e.readAsText(this.droppedFile),this.ui.importButton.hide()}}return e.prototype.template=h,e.prototype.ui={viewButton:".view",exportButton:".export",importButton:".import",dbView:".dbview",fileInput:".db-file-input",importChosenButton:".import-chosen",fileStatus:".file-status"},e.prototype.regions={dbView:"@ui.dbView"},e.prototype.events={dragover:"handleDragOver",dragenter:"handleDragEnter",dragexit:"handleDragExit",drop:"handleDrop","click @ui.viewButton":"viewDatabase","click @ui.exportButton":"exportDatabase","click @ui.importButton":"importDatabase","click @ui.importChosenButton":"importChosenFile","click @ui.fileInput":"fileInputClicked","change @ui.fileInput":"fileInputChanged"},e}.call(this),l=function(){class e extends r.Marionette.View{onRender(){var e,t,n;return e=u.request("main:app:object"),t=e.getState("dbConn"),this.collection=new r.Collection,n=new c.CollectionView({collection:this.collection,childView:s}),this.showChildView("body",n),Object.keys(t).forEach(e=>this.collection.add({id:e,name:e,conn:t[e]}))}}return e.prototype.regions={body:".body"},e.prototype.template=p.renderable(function(e){return p.div(".listview-header",function(){return p.text("Indexed Database Admin")}),p.div(".body")}),e}.call(this),e.exports=l},49:function(e,t){var n,r,i=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function a(e){if(n===setTimeout)return setTimeout(e,0);if((n===o||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:o}catch(e){n=o}try{r="function"==typeof clearTimeout?clearTimeout:s}catch(e){r=s}}();var u,l=[],c=!1,d=-1;function h(){c&&u&&(c=!1,u.length?l=u.concat(l):d=-1,l.length&&p())}function p(){if(!c){var e=a(h);c=!0;for(var t=l.length;t;){for(u=l,l=[];++d<t;)u&&u[d].run();d=-1,t=l.length}u=null,c=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===s||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function f(e,t){this.fun=e,this.array=t}function v(){}i.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];l.push(new f(e,t)),1!==l.length||c||a(p)},f.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=v,i.addListener=v,i.once=v,i.off=v,i.removeListener=v,i.removeAllListeners=v,i.emit=v,i.prependListener=v,i.prependOnceListener=v,i.listeners=function(e){return[]},i.binding=function(e){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},54:function(e,t){function n(){this._events=this._events||{},this._maxListeners=this._maxListeners||void 0}function r(e){return"function"==typeof e}function i(e){return"object"==typeof e&&null!==e}function o(e){return void 0===e}e.exports=n,n.EventEmitter=n,n.prototype._events=void 0,n.prototype._maxListeners=void 0,n.defaultMaxListeners=10,n.prototype.setMaxListeners=function(e){if("number"!=typeof e||e<0||isNaN(e))throw TypeError("n must be a positive number");return this._maxListeners=e,this},n.prototype.emit=function(e){var t,n,s,a,u,l;if(this._events||(this._events={}),"error"===e&&(!this._events.error||i(this._events.error)&&!this._events.error.length)){if((t=arguments[1])instanceof Error)throw t;var c=new Error('Uncaught, unspecified "error" event. ('+t+")");throw c.context=t,c}if(o(n=this._events[e]))return!1;if(r(n))switch(arguments.length){case 1:n.call(this);break;case 2:n.call(this,arguments[1]);break;case 3:n.call(this,arguments[1],arguments[2]);break;default:a=Array.prototype.slice.call(arguments,1),n.apply(this,a)}else if(i(n))for(a=Array.prototype.slice.call(arguments,1),s=(l=n.slice()).length,u=0;u<s;u++)l[u].apply(this,a);return!0},n.prototype.addListener=function(e,t){var s;if(!r(t))throw TypeError("listener must be a function");return this._events||(this._events={}),this._events.newListener&&this.emit("newListener",e,r(t.listener)?t.listener:t),this._events[e]?i(this._events[e])?this._events[e].push(t):this._events[e]=[this._events[e],t]:this._events[e]=t,i(this._events[e])&&!this._events[e].warned&&(s=o(this._maxListeners)?n.defaultMaxListeners:this._maxListeners)&&s>0&&this._events[e].length>s&&(this._events[e].warned=!0,console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.",this._events[e].length),"function"==typeof console.trace&&console.trace()),this},n.prototype.on=n.prototype.addListener,n.prototype.once=function(e,t){if(!r(t))throw TypeError("listener must be a function");var n=!1;function i(){this.removeListener(e,i),n||(n=!0,t.apply(this,arguments))}return i.listener=t,this.on(e,i),this},n.prototype.removeListener=function(e,t){var n,o,s,a;if(!r(t))throw TypeError("listener must be a function");if(!this._events||!this._events[e])return this;if(s=(n=this._events[e]).length,o=-1,n===t||r(n.listener)&&n.listener===t)delete this._events[e],this._events.removeListener&&this.emit("removeListener",e,t);else if(i(n)){for(a=s;a-- >0;)if(n[a]===t||n[a].listener&&n[a].listener===t){o=a;break}if(o<0)return this;1===n.length?(n.length=0,delete this._events[e]):n.splice(o,1),this._events.removeListener&&this.emit("removeListener",e,t)}return this},n.prototype.removeAllListeners=function(e){var t,n;if(!this._events)return this;if(!this._events.removeListener)return 0===arguments.length?this._events={}:this._events[e]&&delete this._events[e],this;if(0===arguments.length){for(t in this._events)"removeListener"!==t&&this.removeAllListeners(t);return this.removeAllListeners("removeListener"),this._events={},this}if(r(n=this._events[e]))this.removeListener(e,n);else if(n)for(;n.length;)this.removeListener(e,n[n.length-1]);return delete this._events[e],this},n.prototype.listeners=function(e){return this._events&&this._events[e]?r(this._events[e])?[this._events[e]]:this._events[e].slice():[]},n.prototype.listenerCount=function(e){if(this._events){var t=this._events[e];if(r(t))return 1;if(t)return t.length}return 0},n.listenerCount=function(e,t){return e.listenerCount(t)}},64:function(e,t){e.exports=function(){throw new Error("define cannot be used indirect")}}}]);