(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{120:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,r=i(n(1)),a=i(n(2)),u=i(n(4)),l=(i(n(84)),i(n(5)),i(n(95)));i(n(0));function i(e){return e&&e.__esModule?e:{default:e}}r.default.Radio.channel("global"),o=function(){var e=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t}(a.default.View);return e.prototype.tagName="p",e.prototype.template=u.default.renderable((function(e){var t,n,o,r,a,i;if(u.default.text(l.default.utc(e.start).format("MMMM D, YYYY")),u.default.text(", "),(null!=e?e.pretext:void 0)&&u.default.small((function(){return u.default.text(e.pretext),u.default.text(" ")})),(null!=e?e.journal:void 0)&&(u.default.text(e.journal),u.default.text(", ")),(null!=e?e.authors:void 0)&&(u.default.text(e.authors),u.default.text(", ")),u.default.a({href:e.link},e.title),null!=e&&null!=(r=e.extra)?r.length:void 0){for(i=[],t=0,o=(a=e.extra).length;t<o;t++)n=a[t],u.default.text(", "),i.push(u.default.a({href:n.link},n.name));return i}})),e}.call(void 0),t.default=o},489:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=(w(n(5)),w(n(1))),a=w(n(2)),u=w(n(4)),l=w(n(95)),i=w(n(490));n(491);var f,c,s,d,p,h,y,v=w(n(140)),b=w(n(120));function w(e){return e&&e.__esModule?e:{default:e}}function m(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function g(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}s=r.default.Radio.channel("global"),r.default.Radio.channel("messages"),f=r.default.Radio.channel("crown"),y=[],p=function(e){return new Date((0,l.default)(e).utc().format("YYYY-MM-DDTHH:mm:ss"))},h=function(e){return e.startDate=p(e.start),e.endDate=e.startDate,(null!=e?e.end:void 0)&&(e.endDate=p(e.end)),e.color="SkyBlue",e.name=e.title},d=function(){var e=function(e){function t(){return m(this,t),_(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return g(t,e),o(t,[{key:"onRender",value:function(){var e;return e=new a.default.CollectionView({collection:new r.default.Collection(this.model.get("events")),viewComparator:"start",childView:b.default}),this.showChildView("eventsRegion",e)}}]),t}(v.default);return e.prototype.template=u.default.renderable((function(e){return u.default.div(".modal-dialog.modal-md",(function(){return u.default.div(".modal-content",(function(){return u.default.div(".events"),u.default.button(".close-btn.btn.btn-warning.fa.fa-close.ml-auto",{data:{dismiss:"modal"}},"Close")}))}))})),e.prototype.ui={closeBtn:".close-btn",eventsRegion:".events"},e.prototype.regions={eventsRegion:"@ui.eventsRegion"},e.prototype.events={"click @ui.closeBtn":"emptyModal"},e}.call(void 0),c=function(){var e=function(e){function t(){return m(this,t),_(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return g(t,e),o(t,[{key:"onClickDay",value:function(e){var t;if(null!=e?e.events.length:void 0)return t=new d({model:new r.default.Model(e)}),s.request("show-modal",t,!0)}},{key:"onRender",value:function(){return this.calendar=new i.default(this.ui.calendar.get(0),{clickDay:this.onClickDay}),this.resetTopics()}},{key:"resetTopics",value:function(){return y=f.request("get-current-events"),f.request("set-current-events"),y.forEach((function(e){return h(e)})),this.calendar.setDataSource(y)}}]),t}(a.default.View);return e.prototype.template=u.default.renderable((function(e){return u.default.div(".maincalendar")})),e.prototype.ui={calendar:".maincalendar"},e}.call(void 0),t.default=c}}]);
//# sourceMappingURL=crown-child-view-calendar-275e426126d814a73250.js.map