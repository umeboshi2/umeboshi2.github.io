(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{359:function(e,t,n){"use strict";var o,r,i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),u=d(n(1)),a=d(n(2)),l=d(n(4)),f=d(n(85)),c=d(n(5)),s=(d(n(124)),d(n(360))),p=d(n(361));function d(e){return e&&e.__esModule?e:{default:e}}o=u.default.Radio.channel("global"),r=function(){var e=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),i(t,[{key:"colorLocalLinks",value:function(){var e,t,n,o,r,i;for(i=[],n=0,o=(r=this.ui.anchor).length;n<o;n++)(t=(e=r[n]).hash).startsWith("#pages/")&&(0,c.default)(e).css("color","SkyBlue"),t.startsWith("#crown/")?i.push((0,c.default)(e).css("color","SkyBlue")):i.push(void 0);return i}},{key:"showVidViews",value:function(){var e,t;if((t=this.ui.videoView).length)return e=this,t.each((function(t){var n,o,r,i,u;return n=(o=(0,c.default)(this)).attr("data-id"),i="vid-region-"+t,o.attr("id",i),r=e.addRegion("vid-region-"+t,"#"+i),u=new p.default({id:n}),r.show(u)}))}},{key:"showLinkViews",value:function(){var e,t;if((e=this.ui.linkView).length)return t=this,e.each((function(e){var n,r,i,u;return n=(r=(0,c.default)(this)).attr("data-events"),u=r.attr("data-topics"),(i=o.request("main:app:get-events",n)).fetch().done((function(){var n,o,a,l;return a="region-"+e,r.attr("id",a),l=(o=t.addRegion("region-"+e,"#"+a)).$el.attr("data-title"),n=new s.default({model:i,title:l,topics:u}),o.show(n)}))}))}},{key:"onRender",value:function(){return this.colorLocalLinks(),this.showLinkViews(),this.showVidViews()}}]),t}(a.default.View);return e.prototype.template=l.default.renderable((function(e){return l.default.article(".document-view.content.row",(function(){return l.default.div(".body.col-lg-10.col-lg-offset-1",(function(){return l.default.raw((0,f.default)(e.content))}))}))})),e.prototype.ui={anchor:"a",linkView:".link-view",videoView:".video-view"},e}.call(void 0),e.exports=r},360:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,r,i,u,a=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),l=d(n(1)),f=d(n(2)),c=d(n(4)),s=(d(n(85)),d(n(5)),d(n(124))),p=d(n(0));function d(e){return e&&e.__esModule?e:{default:e}}function h(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function v(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function w(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}l.default.Radio.channel("global"),u=function(e){var t;return null==e?[]:function(){var n,o,r,i;for(i=[],n=0,o=(r=e.split(",")).length;n<o;n++)t=r[n],i.push(t.trim());return i}()},i=function(e,t){var n,o,r,i,a;for(r=[],i=0,a=e.length;i<a;i++)(null!=(n=e[i])?n.topics:void 0)&&("string"===n.topics.typeOf?(console.warn("Use topic list instead of commas."),o=u(n.topics)):o=n.topics,p.default.every(t,(function(e){return p.default.contains(o,e)}))&&r.push(n));return r},o=function(){var e=function(e){function t(){return h(this,t),v(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return w(t,e),t}(f.default.View);return e.prototype.tagName="p",e.prototype.template=c.default.renderable((function(e){var t,n,o,r,i,u;if(c.default.text(s.default.utc(e.start).format("MMMM D, YYYY")),c.default.text(", "),(null!=e?e.pretext:void 0)&&(c.default.text(e.pretext),c.default.text(" ")),(null!=e?e.journal:void 0)&&(c.default.text(e.journal),c.default.text(", ")),(null!=e?e.authors:void 0)&&(c.default.text(e.authors),c.default.text(", ")),c.default.a({href:e.link},e.title),null!=e&&null!=(r=e.extra)?r.length:void 0){for(u=[],t=0,o=(i=e.extra).length;t<o;t++)n=i[t],c.default.text(", "),u.push(c.default.a({href:n.link},n.name));return u}})),e}.call(void 0),r=function(){var e=function(e){function t(){return h(this,t),v(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return w(t,e),a(t,[{key:"templateContext",value:function(){return{viewTitle:this.getOption("title"),viewTopics:this.getOption("topics")}}},{key:"onRender",value:function(){var e,t,n,r,a;return t=this.model.get("events"),(r=u(this.getOption("topics"))).length?(n=i(t,r),e=new l.default.Collection(n)):e=new l.default.Collection(t),a=new f.default.CollectionView({collection:e,viewComparator:"start",childView:o}),this.showChildView("events",a)}}]),t}(f.default.View);return e.prototype.template=c.default.renderable((function(e){return c.default.div((function(){return c.default.h3(".view-header",e.viewTitle),c.default.div(".events-container")}))})),e.prototype.ui={viewHeader:".view-header",events:".events-container"},e.prototype.regions={events:"@ui.events"},e}.call(void 0),t.default=r},361:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,r,i,u=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a=c(n(1)),l=c(n(2)),f=c(n(4));c(n(85)),c(n(5)),c(n(124));function c(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function d(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}a.default.Radio.channel("global"),i=function(e){return"https://www.youtube.com/embed/"+e},r=function(){var e=function(e){function t(){return s(this,t),p(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return d(t,e),u(t,[{key:"template",value:function(){}},{key:"onRender",value:function(){return this.$el.attr("src",i(this.id))}}]),t}(l.default.View);return e.prototype.tagName="iframe",e.prototype.attributes={width:"320",height:"240",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""},e}.call(void 0),o=function(){var e=function(e){function t(){return s(this,t),p(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return d(t,e),u(t,[{key:"showIframe",value:function(){var e;return e=new r({id:this.id}),this.showChildView("videoContainer",e)}}]),t}(l.default.View);return e.prototype.template=f.default.renderable((function(e){return f.default.div(".vid-container"),f.default.button(".video-btn.btn.btn-outline-primary","Show Video")})),e.prototype.ui={videoContainer:".vid-container",videoBtn:".video-btn"},e.prototype.regions={videoContainer:"@ui.videoContainer"},e.prototype.events={"click @ui.videoBtn":"showIframe"},e}.call(void 0),t.default=o}}]);
//# sourceMappingURL=frontdoor-view-page-a26a0cae483f18531af6.js.map