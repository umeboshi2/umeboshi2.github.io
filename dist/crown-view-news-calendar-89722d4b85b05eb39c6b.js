(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{585:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=p(n(28)),i=p(n(4)),l=p(n(5)),u=p(n(15)),f=n(467),d=p(n(474)),c=p(n(500));n(501);function p(e){return e&&e.__esModule?e:{default:e}}n(502),n(503),n(504),n(505),i.default.Radio.channel("global"),i.default.Radio.channel("messages"),i.default.Radio.channel("crown"),r=function(){var e=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,[{key:"onBeforeDestroy",value:function(){this.fullCalendar.destroy()}},{key:"onDomRefresh",value:function(){var e,t;return e=function(e){var t,n;return t=e.event.id,n=makeOrderUrl(t),window.open(n,"_blank")},t=new Date,this.fullCalendar=new f.Calendar(this.ui.calendar.get(0),{plugins:[d.default,c.default],defaultDate:t,header:{left:"prevYear, nextYear",center:"title",right:"prev, next, dayGridMonth, timeGridWeek, timeGridDay"},events:[],eventClick:e}),this.fullCalendar.render()}}]),t}(l.default.View);return e.prototype.template=u.default.renderable((function(e){return u.default.div("#loading",{style:"display: none;"},(function(){return u.default.h2((function(){return u.default.i(".fa.fa-spinner.fa-spin"),u.default.text("Loading Events")}))})),u.default.div("#maincalendar.col-sm-10.offset-sm-1")})),e.prototype.ui={calendar:"#maincalendar",loading:"#loading",header:".fc-toolbar",daytop:".fc-day-top"},e.prototype.options={minicalendar:!1,layout:!1},e}.call(void 0),t.default=r}}]);
//# sourceMappingURL=crown-view-news-calendar-89722d4b85b05eb39c6b.js.map