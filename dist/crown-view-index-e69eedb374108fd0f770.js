(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{290:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i,o,r,u,l,a,s,f=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),d=p(n(1)),c=p(n(2)),h=p(n(4));p(n(19));function p(e){return e&&e.__esModule?e:{default:e}}function w(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function g(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function b(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}i=n(110),n(111),a=function(e){return e.split(".md")[0]},l=function(e){return"#pages/blog/cv19/"+a(e)},o=function(){var e=function(e){function t(){return w(this,t),g(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return b(t,e),t}(c.default.View);return e.prototype.template=h.default.renderable((function(e){return h.default.ul((function(){var t,n,i,o,r;for(r=[],t=0,n=(o=e.links).length;t<n;t++)i=o[t],r.push(h.default.li((function(){return i.startsWith("#pages")?h.default.span(".badge.badge-dark",(function(){return h.default.a({href:i},(function(){return h.default.text(i.split("#pages/blog/cv19/")[1])}))})):h.default.a({href:i},i)})));return r}))})),e}.call(void 0),u=function(){var e=function(e){function t(){return w(this,t),g(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return b(t,e),f(t,[{key:"linkBtnClicked",value:function(e){var t;return(t=this.getRegion("linksView")).hasView()?(t.empty(),this.ui.toggleIcon.removeClass("fa-toggle-up"),this.ui.toggleIcon.addClass("fa-toggle-down")):(this.showListView(),this.ui.toggleIcon.removeClass("fa-toggle-down"),this.ui.toggleIcon.addClass("fa-toggle-up"))}},{key:"showListView",value:function(){var e;return this.model.get("links"),this.model.get("name"),e=new o({model:this.model}),this.showChildView("linksView",e)}}]),t}(c.default.View);return e.prototype.template=h.default.renderable((function(e){return h.default.div(".row.card",(function(){return h.default.div(".card-body",(function(){return h.default.button(".links-btn.btn.btn-dark.btn-sm",(function(){return h.default.i(".fa.fa-toggle-down.toggle-icon")})),h.default.a({href:l(e.name)},a(e.name))})),h.default.div(".links-view")}))})),e.prototype.ui={linksBtn:".links-btn",linksView:".links-view",toggleIcon:".toggle-icon"},e.prototype.regions={linksView:"@ui.linksView"},e.prototype.events={"click @ui.linksBtn":"linkBtnClicked"},e}.call(void 0),s=h.default.renderable((function(e){return h.default.div(".row.listview-header",(function(){return h.default.h1("Index")})),h.default.button(".refresh-btn.btn.btn-link.btn-sm","Refresh"),h.default.div(".index-view")})),r=function(){var e=function(e){function t(){return w(this,t),g(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return b(t,e),f(t,[{key:"showIndexView",value:function(){var e;return e=new c.default.CollectionView({childView:u,collection:new d.default.Collection(this.model.get("pages"))}),this.showChildView("indexView",e)}},{key:"onRender",value:function(){return this.showIndexView()}},{key:"refreshBtnClicked",value:function(){var e=this;return this.ui.refreshBtn.removeClass("btn-link"),this.ui.refreshBtn.addClass("btn-warning"),this.model.fetch({data:{nocache:Date.now()}}).done((function(){return e.getRegion("indexView").empty(),e.showIndexView(),e.ui.refreshBtn.removeClass("btn-warning"),e.ui.refreshBtn.addClass("btn-link")}))}},{key:"onDomRefresh2",value:function(){return this.jsonView=new i(this.model.toJSON()),this.ui.jsonView.prepend(this.jsonView.dom)}}]),t}(c.default.View);return e.prototype.template=s,e.prototype.ui={indexView:".index-view",refreshBtn:".refresh-btn"},e.prototype.regions={indexView:"@ui.indexView"},e.prototype.events={"click @ui.refreshBtn":"refreshBtnClicked"},e}.call(void 0),t.default=r}}]);
//# sourceMappingURL=crown-view-index-e69eedb374108fd0f770.js.map