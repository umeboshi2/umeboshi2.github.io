(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{442:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,r=n(7),i=a(n(22)),u=a(n(436));function a(e){return e&&e.__esModule?e:{default:e}}o=function(){var e=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t}(r.View);return e.prototype.tagName="p",e.prototype.template=i.default.renderable((function(e){var t,n,o,r,a,l;if(i.default.text(u.default.utc(e.start).format("MMMM D, YYYY")),i.default.text(", "),(null!=e?e.pretext:void 0)&&i.default.small((function(){return i.default.text(e.pretext),i.default.text(" ")})),(null!=e?e.journal:void 0)&&(i.default.text(e.journal),i.default.text(", ")),(null!=e?e.authors:void 0)&&(i.default.text(e.authors),i.default.text(", ")),i.default.a({href:e.link},e.title),null!=e&&null!=(r=e.extra)?r.length:void 0){for(l=[],t=0,o=(a=e.extra).length;t<o;t++)n=a[t],i.default.text(", "),l.push(i.default.a({href:n.link},n.name));return l}})),e}.call(void 0),t.default=o},627:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,r,i,u=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a=n(6),l=n(7),c=v(n(22)),f=v(n(414)),s=v(n(32)),p=v(n(628)),d=v(n(629)),h=v(n(411));function v(e){return e&&e.__esModule?e:{default:e}}function w(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function y(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function b(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}o=a.Radio.channel("global"),i=function(){var e=function(e){function t(){return w(this,t),y(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return b(t,e),u(t,[{key:"homeBtnClicked",value:function(){return(0,h.default)("#pages/blog/cv19/index")}},{key:"parentBtnClicked",value:function(){var e;return e=this.model.get("parent"),(0,h.default)(e)}}]),t}(l.View);return e.prototype.className="btn-group",e.prototype.template=c.default.renderable((function(){return c.default.button(".home-btn.btn.btn-outline-warning.btn-sm.fa.fa-home","Home"),c.default.button(".parent-bnt.btn.btn-outline-warning.btn-sm.fa.fa-arrow-up","Up")})),e.prototype.ui={homeBtn:".home-btn",parentBtn:".parent-bnt"},e.prototype.events={"click @ui.homeBtn":"homeBtnClicked","click @ui.parentBtn":"parentBtnClicked"},e}.call(void 0),r=function(){var e=function(e){function t(){return w(this,t),y(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return b(t,e),u(t,[{key:"colorLocalLinks",value:function(){var e,t,n,o,r,i;for(i=[],n=0,o=(r=this.ui.anchor).length;n<o;n++)(t=(e=r[n]).hash).startsWith("#pages/")&&(0,s.default)(e).css("color","SkyBlue"),t.startsWith("#crown/")?i.push((0,s.default)(e).css("color","SkyBlue")):i.push(void 0);return i}},{key:"showVidViews",value:function(){var e,t;if((t=this.ui.videoView).length)return e=this,t.each((function(t){var n,o,r,i,u;return n=(o=(0,s.default)(this)).attr("data-id"),o.attr("id",i),i="vid-region-"+t,r=e.addRegion("vid-region-"+t,"#"+i),u=new d.default({id:n}),r.show(u)}))}},{key:"showLinkViews",value:function(){var e,t;if((e=this.ui.linkView).length)return t=this,e.each((function(e){var n,r,i,u;return n=(r=(0,s.default)(this)).attr("data-events"),u=r.attr("data-topics"),(i=o.request("main:app:get-events",n)).fetch().done((function(){var n,o,a,l;return a="region-"+e,r.attr("id",a),l=(o=t.addRegion("region-"+e,"#"+a)).$el.attr("data-title"),n=new p.default({model:i,title:l,topics:u}),o.show(n)}))}))}},{key:"onRender",value:function(){var e;if(this.colorLocalLinks(),this.showLinkViews(),this.showVidViews(),this.ui.menuData.length)return e=new i({model:new a.Model({parent:this.ui.menuData.attr("data-parent")})}),this.showChildView("menuBar",e)}}]),t}(l.View);return e.prototype.template=c.default.renderable((function(e){return c.default.div(".menu-bar"),c.default.article(".document-view.content.row",(function(){return c.default.div(".body.col-lg-10.col-lg-offset-1",(function(){return c.default.raw((0,f.default)(e.content))}))}))})),e.prototype.ui={menuBar:".menu-bar",menuData:".menu-data",anchor:"a",linkView:".link-view",videoView:".video-view"},e.prototype.regions={menuBar:"@ui.menuBar"},e}.call(void 0),t.default=r},628:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,r,i,u=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a=n(6),l=n(7),c=p(n(22)),f=p(n(1)),s=p(n(442));function p(e){return e&&e.__esModule?e:{default:e}}i=function(e){var t;return null==e?[]:function(){var n,o,r,i;for(i=[],n=0,o=(r=e.split(",")).length;n<o;n++)t=r[n],i.push(t.trim());return i}()},r=function(e,t){var n,o,r,u,a;for(r=[],u=0,a=e.length;u<a;u++)(null!=(n=e[u])?n.topics:void 0)&&("string"===n.topics.typeOf?(console.warn("Use topic list instead of commas."),o=i(n.topics)):o=n.topics,f.default.every(t,(function(e){return f.default.contains(o,e)}))&&r.push(n));return r},o=function(){var e=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),u(t,[{key:"templateContext",value:function(){return{viewTitle:this.getOption("title"),viewTopics:this.getOption("topics")}}},{key:"onRender",value:function(){var e,t,n,o,u;return t=this.model.get("events"),(o=i(this.getOption("topics"))).length?(n=r(t,o),e=new a.Collection(n)):e=new a.Collection(t),u=new l.CollectionView({collection:e,viewComparator:"start",childView:s.default}),this.showChildView("events",u)}}]),t}(l.View);return e.prototype.template=c.default.renderable((function(e){return c.default.div((function(){return c.default.h3(".view-header",e.viewTitle),c.default.div(".events-container")}))})),e.prototype.ui={viewHeader:".view-header",events:".events-container"},e.prototype.regions={events:"@ui.events"},e}.call(void 0),t.default=o},629:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,r,i,u,a=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),l=n(7),c=n(22),f=(o=c)&&o.__esModule?o:{default:o};function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function d(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}u=function(e){return"https://www.youtube.com/embed/"+e},i=function(){var e=function(e){function t(){return s(this,t),p(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return d(t,e),a(t,[{key:"template",value:function(){}},{key:"onRender",value:function(){return this.$el.attr("src",u(this.id))}}]),t}(l.View);return e.prototype.tagName="iframe",e.prototype.attributes={width:"320",height:"240",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""},e}.call(void 0),r=function(){var e=function(e){function t(){return s(this,t),p(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return d(t,e),a(t,[{key:"showVideoBtnClicked",value:function(){return this.ui.showVideoBtn.hide(),this.ui.removeVideoBtn.show(),this.showIframe()}},{key:"removeVideoBtnClicked",value:function(){return this.ui.removeVideoBtn.hide(),this.ui.showVideoBtn.show(),this.getRegion("videoContainer").empty()}},{key:"showIframe",value:function(){var e;return e=new i({id:this.id}),this.showChildView("videoContainer",e)}}]),t}(l.View);return e.prototype.template=f.default.renderable((function(){return f.default.div(".vid-container"),f.default.button(".show-video-btn.btn.btn-outline-warning",(function(){return f.default.i(".fa.fa-youtube"),f.default.text(" Show Video")})),f.default.button(".remove-video-btn.btn.btn-outline-danger",{style:"display: none;"},(function(){return f.default.i(".fa.fa-youtube"),f.default.text(" Remove Video")}))})),e.prototype.ui={videoContainer:".vid-container",showVideoBtn:".show-video-btn",removeVideoBtn:".remove-video-btn"},e.prototype.regions={videoContainer:"@ui.videoContainer"},e.prototype.events={"click @ui.showVideoBtn":"showVideoBtnClicked","click @ui.removeVideoBtn":"removeVideoBtnClicked"},e}.call(void 0),t.default=r}}]);
//# sourceMappingURL=frontdoor-view-page-ddc42868c0e65ae0e4fd.js.map