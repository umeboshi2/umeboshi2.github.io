(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{322:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=(p(n(5)),p(n(1))),a=p(n(2)),i=p(n(4)),l=n(128),u=p(n(139)),f=p(n(155));n(156);n(157),n(158),n(159),n(160);var c,d;p(n(19));function p(e){return e&&e.__esModule?e:{default:e}}o.default.Radio.channel("global"),o.default.Radio.channel("messages"),o.default.Radio.channel("crown"),d=function(e){return"exec_order_2020-"+e+".pdf"},c=function(){var e=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"onBeforeDestroy",value:function(){this.fullCalendar.destroy()}},{key:"onDomRefresh",value:function(){var e,t,n,r;return r=this.model.get("events"),t=[],r.forEach((function(e){return e.extendedProps={link:e.link},t.push(e)})),e=function(e){var t;return e.event.id,t=e.event.extendedProps.link,window.open(t,"_blank")},n=new Date,this.fullCalendar=new l.Calendar(this.ui.calendar.get(0),{plugins:[u.default,f.default],defaultDate:n,header:{left:"prev, next",center:"title",right:"dayGridMonth, timeGridWeek, timeGridDay"},events:t,eventClick:e}),this.fullCalendar.render()}}]),t}(a.default.View);return e.prototype.template=i.default.renderable((function(e){return i.default.div("#maincalendar.col-sm-10.offset-sm-1")})),e.prototype.ui={calendar:"#maincalendar",loading:"#loading",header:".fc-toolbar",daytop:".fc-day-top"},e.prototype.options={minicalendar:!1,layout:!1},e}.call(void 0),t.default=c}}]);
//# sourceMappingURL=crown-view-coh-calendar-cbf60bdcfa9858eb7261.js.map