(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{473:function(t,e,n){},474:function(t,e,n){t.exports=function(){return new Worker(n.p+"5f4de56d8ab1244b5ba6.worker.js")}},587:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),o=n(6),i=n(7),a=h(n(22)),l=h(n(414)),u=h(n(588)),c=h(n(625)),s=n(467),f=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}(n(472));n(473);var p,d,y=h(n(474)),b=h(n(626));function h(t){return t&&t.__esModule?t:{default:t}}s.Terminal.applyAddon(f),new y.default,d=o.Radio.channel("messages"),p=function(){var t=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),r(e,[{key:"onRender",value:function(){var t,e;return e=new u.default,this.showChildView("toolbar",e),t=new i.View({template:a.default.renderable((function(){return a.default.raw((0,l.default)(b.default))}))}),this.showChildView("intro",t)}},{key:"toolbarClicked",value:function(t){var e;return"create"===(e=t.model.id)?this.createTerminal():"destroy"===e?this.destroyTerminal():d.request("warning","Bad action "+e)}},{key:"createTerminal",value:function(){var t;return t=new c.default,this.showChildView("terminal",t),this.getChildView("terminal").startTerminal()}},{key:"destroyTerminal",value:function(){var t;if(t=this.getChildView("terminal"))return t.terminal.dispose(),t.destroy()}}]),e}(i.View);return t.prototype.template=a.default.renderable((function(){return a.default.div(".row.listview-header.justify-content-center","ELIZA Terminal"),a.default.div(".row.intro"),a.default.div(".row.justify-content-center",(function(){return a.default.div(".terminal-container.col-md-10")})),a.default.div(".row.toolbar")})),t.prototype.templateContext={appName:"eliza"},t.prototype.ui={toolbar:".toolbar",terminal:".terminal-container",intro:".intro"},t.prototype.regions={toolbar:"@ui.toolbar",terminal:"@ui.terminal",intro:"@ui.intro"},t.prototype.childViewEvents={"toolbar:entry:clicked":"toolbarClicked"},t}.call(void 0),e.default=p},588:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),o=n(6),i=n(7),a=m(n(22)),l=n(467),u=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}(n(472));n(473);var c,s,f,p,d,y,b,h=m(n(474));function m(t){return t&&t.__esModule?t:{default:t}}function w(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function v(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function _(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}l.Terminal.applyAddon(u),new h.default;var g=n(411);y=g.navigate_to_url,b=[{id:"destroy",label:"close",icon:".fa.fa-close",buttonClassName:"btn btn-danger text-light"},{id:"create",label:"Talk to Eliza",icon:".fa.fa-terminal.text-light.bg-dark"}],d=a.default.renderable((function(t){return a.default.i(t.icon),a.default.text(" "),a.default.text(t.label)})),s=function(){var t=function(t){function e(){return w(this,e),v(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return _(e,t),r(e,[{key:"className",value:function(){var t;return(t=this.model.get("buttonClassName"))||(t=this.getOption("buttonClassName")||"btn btn-outline-primary"),t}}]),e}(i.View);return t.prototype.tagName="button",t.prototype.triggers={click:"button:clicked"},t.prototype.modelEvents={change:"render"},t}.call(void 0),f=function(){var t=function(t){function e(){return w(this,e),v(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return _(e,t),r(e,[{key:"childViewOptions",value:function(){return{template:this.getOption("entryTemplate"),buttonClassName:this.getOption("buttonClassName")}}}]),e}(i.CollectionView);return t.prototype.childView=s,t.prototype.className="btn-group btn-group-justified",t.prototype.childViewTriggers={"button:clicked":"toolbar:entry:clicked"},t}.call(void 0),p=function(){var t=function(t){function e(){return w(this,e),v(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return _(e,t),r(e,[{key:"onRender",value:function(){var t,e,n;return e=this.getOption("entryTemplate")||d,t=this.getOption("buttonClassName")||"btn btn-outline-primary",n=new f({collection:this.collection,entryTemplate:e,buttonClassName:t}),this.showChildView("entries",n)}},{key:"onChildviewToolbarEntryClicked",value:function(t){return y(t.model.get("url"))}}]),e}(i.View);return t.prototype.template=a.default.renderable((function(){return a.default.div(".toolbar-entries")})),t.prototype.regions={entries:{el:".toolbar-entries"}},t}.call(void 0),c=function(){var t=function(t){function e(){return w(this,e),v(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return _(e,t),e}(p);return t.prototype.collection=new o.Collection(b),t.prototype.childViewTriggers={"toolbar:entry:clicked":"toolbar:entry:clicked"},t.prototype.buttonClassName="btn btn-outline-success",t}.call(void 0),e.default=c},625:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),o=n(7),i=n(467),a=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}(n(472));n(473);var l,u,c,s,f,p=n(474),d=(l=p)&&l.__esModule?l:{default:l};function y(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function b(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function h(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}i.Terminal.applyAddon(a),f=new d.default,u=function(t){function e(){return y(this,e),b(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return h(e,t),r(e,[{key:"prompt",value:function(){this.write("\r\n->")}}]),e}(i.Terminal),s=function(){var t,e;return e=new u,t="",e.on("key",(function(n,r){var o;if(o=!(r.altKey||r.altGraphKey||r.ctrlKey||r.metaKey),13===r.keyCode)return e.write("\r\n"),f.postMessage({content:t}),t="";if(8===r.keyCode){if(t.length)return e.write("\b \b"),t=t.slice(0,-1)}else if(o)return e.write(n),t+=n})),e},c=function(){var t=function(t){function e(){return y(this,e),b(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return h(e,t),r(e,[{key:"startTerminal",value:function(){var t=this;return this.terminal=s(),this.terminal.open(this.el),this.terminal.setOption("fontSize",14),this.terminal.setOption("fontFamily","Mono"),this.terminal.resize(80,15),this.terminal.fit(),console.log("@terminal",this.terminal),f.onmessage=function(e){return t.terminal.write(e.data.content),t.terminal.prompt()},f.postMessage({content:"getInitial"})}},{key:"onBeforeDestroy",value:function(){if(this.terminal)return this.terminal.dispose(),console.log("Terminal disposed.")}}]),e}(o.View);return t.prototype.template=!1,t.prototype.className="my-xterm",t.prototype.ui={terminal:".my-xterm"},t}.call(void 0),e.default=c},626:function(t,e,n){"use strict";n.r(e),e.default='## ELIZA\n\nEliza is a very old program that simulates a conversation, created \nto "demonstrate that the communication between man and machine \nwas superficial" ([wikipedia](https://en.wikipedia.org/wiki/ELIZA)).  The \n[elizabot](https://www.masswerk.at/elizabot/) javascript implementation is \nbeing used in this demo.\n'}}]);
//# sourceMappingURL=eliza-view-index-ed39f56293c7da1a9873.js.map