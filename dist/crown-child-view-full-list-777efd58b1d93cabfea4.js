(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{120:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,r=l(n(1)),a=l(n(2)),i=l(n(4)),u=(l(n(84)),l(n(5)),l(n(96)));l(n(0));function l(e){return e&&e.__esModule?e:{default:e}}r.default.Radio.channel("global"),o=function(){var e=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t}(a.default.View);return e.prototype.tagName="p",e.prototype.template=i.default.renderable((function(e){var t,n,o,r,a,l;if(i.default.text(u.default.utc(e.start).format("MMMM D, YYYY")),i.default.text(", "),(null!=e?e.pretext:void 0)&&i.default.small((function(){return i.default.text(e.pretext),i.default.text(" ")})),(null!=e?e.journal:void 0)&&(i.default.text(e.journal),i.default.text(", ")),(null!=e?e.authors:void 0)&&(i.default.text(e.authors),i.default.text(", ")),i.default.a({href:e.link},e.title),null!=e&&null!=(r=e.extra)?r.length:void 0){for(l=[],t=0,o=(a=e.extra).length;t<o;t++)n=a[t],i.default.text(", "),l.push(i.default.a({href:n.link},n.name));return l}})),e}.call(void 0),t.default=o},497:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,r,a,i,u,l,c=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),f=(h(n(5)),h(n(1))),s=h(n(2)),p=h(n(4)),d=(h(n(96)),h(n(120)));function h(e){return e&&e.__esModule?e:{default:e}}function v(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function y(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function b(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}f.default.Radio.channel("global"),f.default.Radio.channel("messages"),o=f.default.Radio.channel("crown"),l=o.request("get-event-manager","events"),r=function(){var e=function(e){function t(){return v(this,t),y(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return b(t,e),t}(d.default);return e.prototype.className="list-group-item",e}.call(void 0),a=function(){var e=function(e){function t(){return v(this,t),y(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return b(t,e),t}(s.default.CollectionView);return e.prototype.className="list-group",e}.call(void 0),u=function(){var e=function(e){function t(){return v(this,t),y(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return b(t,e),c(t,[{key:"onRender",value:function(){var e,t,n;return t=this.model.get("name"),e=l.getEventData(t).get("events"),n=new a({childView:r,collection:new f.default.Collection(e),viewComparator:"start"}),this.showChildView("eventsList",n)}}]),t}(s.default.View);return e.prototype.className="list-group-item",e.prototype.template=p.default.renderable((function(e){return p.default.h4(e.name),p.default.div(".events-container")})),e.prototype.ui={eventsList:".events-container"},e.prototype.regions={eventsList:"@ui.eventsList"},e}.call(void 0),i=function(){var e=function(e){function t(){return v(this,t),y(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return b(t,e),c(t,[{key:"clearCalendar",value:function(){return[]}},{key:"onRender",value:function(){var e,t;return e=l.getSelectedTopics(),t=new a({collection:e,childView:u,viewComparator:"topic"}),this.showChildView("eventsList",t)}},{key:"resetTopics",value:function(){return console.log("reset topics"),this.render()}}]),t}(s.default.View);return e.prototype.template=p.default.renderable((function(e){return p.default.div(".events-container")})),e.prototype.ui={clearBtn:".btn-clear",eventsList:".events-container",calendar:".maincalendar"},e.prototype.regions={eventsList:"@ui.eventsList"},e.prototype.events={"click @ui.clearBtn":"clearCalendar"},e}.call(void 0),t.default=i}}]);
//# sourceMappingURL=crown-child-view-full-list-777efd58b1d93cabfea4.js.map