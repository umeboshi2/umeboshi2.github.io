(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{256:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),i=h(r(4)),a=h(r(1)),d=h(r(2)),o=h(r(3)),u=r(111),l=h(r(145)),s=h(r(257));r(258);r(259),r(261),r(263),r(265);var c,f,p,v;h(r(12));function h(e){return e&&e.__esModule?e:{default:e}}a.default.Radio.channel("global"),a.default.Radio.channel("messages"),a.default.Radio.channel("crown"),v=[{id:1,title:"Executive Orders 2020-1",start:"2020-03-18 00:00",end:"2020-03-31 00:00"},{id:2,title:"Executive Orde20 2020-2",start:"2020-03-28 00:00",end:"2020-03-31 00:00"},{id:3,title:"Executive Orders 2020-3",start:"2020-03-25 00:00",end:"2020-04-30 00:00"},{id:4,title:"Executive Orders 2020-4",start:"2020-04-10 17:00",end:"2020-04-30 00:00"},{id:5,title:"Executive Orders 2020-5",start:"2020-05-01 17:00",end:"2020-05-31 08:00"},{id:6,title:"Executive Orders 2020-6",start:"2020-05-11 08:00",end:"2020-05-26 08:00"},{id:7,title:"Executive Orders 2020-7",start:"2020-05-14 08:00",end:"2020-05-26 08:00"},{id:8,title:"Executive Orders 2020-8",start:"2020-05-18 08:00",end:"2020-05-31 08:00"},{id:9,title:"Executive Orders 2020-9",start:"2020-05-26 08:00",end:"2020-06-15 08:00"},{id:10,title:"Executive Orders 2020-10",start:"2020-06-15 08:00",end:"2020-06-29 08:00"},{id:11,title:"Executive Orders 2020-11",start:"2020-06-29 08:00",end:"2020-07-06 08:00"},{id:12,title:"Executive Orders 2020-12",start:"2020-07-06 08:00",end:"2020-07-20 08:00"},{id:13,title:"Executive Orders 2020-13",start:"2020-07-20 08:00",end:"2020-08-03 08:00"},{id:14,title:"Executive Orders 2020-14",start:"2020-07-31 08:00",end:"2020-08-17 08:00"},{id:15,title:"Executive Orders 2020-15",start:"2020-08-03 08:00",end:"2020-08-17 08:00"},{id:16,title:"Executive Orders 2020-16",start:"2020-08-17 08:00",end:"2020-08-31 08:00"}],f=function(e){return"exec_order_2020-"+e+".pdf"},p=function(e){return"http://www.hattiesburgms.com/wp-content/uploads/","http://www.hattiesburgms.com/wp-content/uploads/"+f(e)},o.default.renderable((function(){return o.default.div(".listview-header","Punching the Clock"),o.default.div("#loading",{style:"display: none;"},(function(){return o.default.h2((function(){return o.default.i(".fa.fa-spinner.fa-spin"),o.default.text("Loading Work Sessions")}))})),o.default.div("#maincalendar")})),c=function(){var e=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),n(t,[{key:"onBeforeDestroy",value:function(){this.fullCalendar.destroy()}},{key:"onDomRefresh",value:function(){var e,t;return e=function(e){var t,r;return t=e.event.id,r=p(t),window.open(r,"_blank")},t=new Date,this.fullCalendar=new u.Calendar(this.ui.calendar.get(0),{plugins:[l.default,s.default],defaultDate:t,header:{left:"prevYear, nextYear",center:"title",right:"prev, next, dayGridMonth, timeGridWeek, timeGridDay"},events:v,eventClick:e}),this.fullCalendar.render()}}]),t}(d.default.View);return e.prototype.template=o.default.renderable((function(e){return o.default.div("#maincalendar.col-sm-10.offset-sm-1")})),e.prototype.ui={calendar:"#maincalendar",loading:"#loading",header:".fc-toolbar",daytop:".fc-day-top"},e.prototype.options={minicalendar:!1,layout:!1},e}.call(void 0),t.default=c}}]);
//# sourceMappingURL=crown-view-calendar-7ef2b856bbebb8aba50e.js.map