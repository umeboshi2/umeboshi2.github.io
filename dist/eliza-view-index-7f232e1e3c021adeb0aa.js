(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{763:function(t,e,n){t.exports=function(){return new Worker(n.p+"f56726da2d2007487bb3.worker.js")}},889:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r,o,i=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),a=n(3),l=n(8),u=d(n(40)),c=d(n(548)),s=d(n(890)),f=d(n(891)),p=d(n(895));function d(t){return t&&t.__esModule?t:{default:t}}o=a.Radio.channel("messages"),r=function(){var t=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),i(e,[{key:"onRender",value:function(){var t,e;return e=new s.default,this.showChildView("toolbar",e),t=new l.View({template:u.default.renderable((function(){return u.default.raw((0,c.default)(p.default))}))}),this.showChildView("intro",t)}},{key:"toolbarClicked",value:function(t){var e;return"create"===(e=t.model.id)?this.createTerminal():"destroy"===e?this.destroyTerminal():o.request("warning","Bad action "+e)}},{key:"createTerminal",value:function(){var t;return t=new f.default,this.showChildView("terminal",t),this.getChildView("terminal").startTerminal()}},{key:"destroyTerminal",value:function(){var t;if(t=this.getChildView("terminal"))return t.terminal.dispose(),t.destroy()}}]),e}(l.View);return t.prototype.template=u.default.renderable((function(){return u.default.div(".row.listview-header.justify-content-center","ELIZA Terminal"),u.default.div(".row.intro"),u.default.div(".row.justify-content-center",(function(){return u.default.div(".terminal-container.col-md-10")})),u.default.div(".row.toolbar")})),t.prototype.templateContext={appName:"eliza"},t.prototype.ui={toolbar:".toolbar",terminal:".terminal-container",intro:".intro"},t.prototype.regions={toolbar:"@ui.toolbar",terminal:"@ui.terminal",intro:"@ui.intro"},t.prototype.childViewEvents={"toolbar:entry:clicked":"toolbarClicked"},t}.call(void 0),e.default=r},890:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r,o,i,a,l,u,c=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),s=n(3),f=n(8),p=d(n(40));function d(t){return t&&t.__esModule?t:{default:t}}function y(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function b(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function h(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}new(d(n(763)).default),u=[{id:"destroy",label:"close",icon:".fa.fa-close",buttonClassName:"btn btn-danger text-light"},{id:"create",label:"Talk to Eliza",icon:".fa.fa-terminal.text-light.bg-dark"}],l=p.default.renderable((function(t){return p.default.i(t.icon),p.default.text(" "),p.default.text(t.label)})),o=function(){var t=function(t){function e(){return y(this,e),b(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return h(e,t),c(e,[{key:"className",value:function(){var t;return(t=this.model.get("buttonClassName"))||(t=this.getOption("buttonClassName")||"btn btn-outline-primary"),t}}]),e}(f.View);return t.prototype.tagName="button",t.prototype.triggers={click:"button:clicked"},t.prototype.modelEvents={change:"render"},t}.call(void 0),i=function(){var t=function(t){function e(){return y(this,e),b(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return h(e,t),c(e,[{key:"childViewOptions",value:function(){return{template:this.getOption("entryTemplate"),buttonClassName:this.getOption("buttonClassName")}}}]),e}(f.CollectionView);return t.prototype.childView=o,t.prototype.className="btn-group btn-group-justified",t.prototype.childViewTriggers={"button:clicked":"toolbar:entry:clicked"},t}.call(void 0),a=function(){var t=function(t){function e(){return y(this,e),b(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return h(e,t),c(e,[{key:"onRender",value:function(){var t,e,n;return e=this.getOption("entryTemplate")||l,t=this.getOption("buttonClassName")||"btn btn-outline-primary",n=new i({collection:this.collection,entryTemplate:e,buttonClassName:t}),this.showChildView("entries",n)}},{key:"onChildviewToolbarEntryClicked",value:function(t){return s.history.navigate(t.model.get("url"),{trigger:!0})}}]),e}(f.View);return t.prototype.template=p.default.renderable((function(){return p.default.div(".toolbar-entries")})),t.prototype.regions={entries:{el:".toolbar-entries"}},t}.call(void 0),r=function(){var t=function(t){function e(){return y(this,e),b(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return h(e,t),e}(a);return t.prototype.collection=new s.Collection(u),t.prototype.childViewTriggers={"toolbar:entry:clicked":"toolbar:entry:clicked"},t.prototype.buttonClassName="btn btn-outline-success",t}.call(void 0),e.default=r},891:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),o=n(8),i=n(892),a=n(893);n(894);var l,u,c,s,f,p=n(763),d=(l=p)&&l.__esModule?l:{default:l};function y(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function b(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function h(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}f=new d.default,u=function(t){function e(){return y(this,e),b(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return h(e,t),r(e,[{key:"prompt",value:function(){this.write("\r\n->")}}]),e}(i.Terminal),s=function(){var t,e;return e=new u,t="",e.onKey((function(n){var r,o,i;if(r=n.domEvent,o=n.key,i=!(r.altKey||r.altGraphKey||r.ctrlKey||r.metaKey),13===r.keyCode)return e.write("\r\n"),f.postMessage({content:t}),t="";if(8===r.keyCode){if(t.length)return e.write("\b \b"),t=t.slice(0,-1)}else if(i)return e.write(o),t+=o})),e},c=function(){var t=function(t){function e(){return y(this,e),b(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return h(e,t),r(e,[{key:"startTerminal",value:function(){var t=this;return this.terminal=s(),this.fitAddon=new a.FitAddon,this.terminal.loadAddon(this.fitAddon),this.terminal.open(this.el),this.terminal.setOption("fontSize",14),this.terminal.setOption("fontFamily","Mono"),this.terminal.resize(80,15),this.fitAddon.fit(),console.log("@terminal",this.terminal),f.onmessage=function(e){return t.terminal.write(e.data.content),t.terminal.prompt()},f.postMessage({content:"getInitial"})}},{key:"onBeforeDestroy",value:function(){if(this.terminal)return this.terminal.dispose(),console.log("Terminal disposed.")}}]),e}(o.View);return t.prototype.template=!1,t.prototype.className="my-xterm",t.prototype.ui={terminal:".my-xterm"},t}.call(void 0),e.default=c},894:function(t,e,n){},895:function(t,e,n){"use strict";n.r(e),e.default='## ELIZA\n\nEliza is a very old program that simulates a conversation, created \nto "demonstrate that the communication between man and machine \nwas superficial" ([wikipedia](https://en.wikipedia.org/wiki/ELIZA)).  The \n[elizabot](https://www.masswerk.at/elizabot/) javascript implementation is \nbeing used in this demo.\n'}}]);
//# sourceMappingURL=eliza-view-index-7f232e1e3c021adeb0aa.js.map