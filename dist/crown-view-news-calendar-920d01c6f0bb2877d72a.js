(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{580:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=(c(n(32)),n(7)),i=c(n(22)),u=n(455),l=c(n(465)),f=c(n(498));function c(e){return e&&e.__esModule?e:{default:e}}n(499),n(500),n(501),n(502),r=function(){var e=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"onBeforeDestroy",value:function(){this.fullCalendar.destroy()}},{key:"onDomRefresh",value:function(){var e,t;return e=function(e){0},t=new Date,this.fullCalendar=new u.Calendar(this.ui.calendar.get(0),{plugins:[l.default,f.default],defaultDate:t,header:{left:"prevYear, nextYear",center:"title",right:"prev, next, dayGridMonth, timeGridWeek, timeGridDay"},events:[],eventClick:e}),this.fullCalendar.render()}}]),t}(a.View);return e.prototype.template=i.default.renderable((function(){return i.default.div("#loading",{style:"display: none;"},(function(){return i.default.h2((function(){return i.default.i(".fa.fa-spinner.fa-spin"),i.default.text("Loading Events")}))})),i.default.div("#maincalendar.col-sm-10.offset-sm-1")})),e.prototype.ui={calendar:"#maincalendar",loading:"#loading",header:".fc-toolbar",daytop:".fc-day-top"},e.prototype.options={minicalendar:!1,layout:!1},e}.call(void 0),t.default=r}}]);
//# sourceMappingURL=crown-view-news-calendar-920d01c6f0bb2877d72a.js.map