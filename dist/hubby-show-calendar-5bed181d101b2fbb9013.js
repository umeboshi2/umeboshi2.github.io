(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{310:function(e,t,n){"use strict";var r,o,i,a,u,l,c,s,f,d,p,h=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();r=n(4),o=n(1),a=n(2),n(157);var y=n(79);l=y.apiroot,n(159),i=o.Radio.channel("hubby"),p=n(3),f=p.renderable((function(){return p.div(".listview-header","Meetings"),p.div("#loading",(function(){return p.h2((function(){return p.i(".fa.fa-spinner.fa-spin"),p.text("Loading Meetings")}))})),p.div("#maincalendar")})),d=function(e,t){return e.url="#hubby/viewmeeting/"+e.id,t.css({cursor:"pointer","font-size":"0.9em","font-family":"Rambla"})},c=function(e,t){return console.log(" -> HubChannel.request 'maincalendar:set-date'"),i.request("maincalendar:set-date")},s=function(e){var t,n;return n=r("#loading"),t=r(".fc-toolbar"),e?(n.show(),t.hide()):(n.hide(),t.show())},u=function(){var e=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),h(t,[{key:"onBeforeDestroy",value:function(){return this.ui.calendar.fullCalendar("destroy"),console.log("calendar destroyed")}},{key:"onDomRefresh",value:function(){var e,t,n=this;return e=function(e){var t,r;return n.options.minicalendar?(t={layout:n.options.layout,region:"meeting",id:e.id},i.request("view-meeting",t)):(r="#hubby/viewmeeting/"+e.id,o.history.navigate(r,{trigger:!0}))},t=i.request("maincalendar:get-date"),this.ui.calendar.fullCalendar({defaultDate:t,header:{left:"prevYear, nextYear",center:"title",right:"prev, next"},theme:!1,defaultView:"month",eventSources:[{url:l+"/hubcal"}],eventRender:d,viewRender:c,loading:s,eventClick:e}),console.log("we should either be fetching events, or refetching")}}]),t}(a.View);return e.prototype.template=f,e.prototype.ui={calendar:"#maincalendar",loading:"#loading",header:".fc-toolbar",daytop:".fc-day-top"},e.prototype.options={minicalendar:!1,layout:!1},e}.call(void 0),e.exports=u}}]);
//# sourceMappingURL=hubby-show-calendar-5bed181d101b2fbb9013.js.map