(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{1102:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,r,i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),l=(f(n(37)),n(4)),a=n(8),c=f(n(40)),u=f(n(736)),s=(f(n(757)),f(n(780)),f(n(234)));function f(e){return e&&e.__esModule?e:{default:e}}function d(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}l.Radio.channel("global"),o=l.Radio.channel("crown"),s.default.eventIndex,o.request("get-event-manager","topics"),r=function(){var e=function(e){function t(){return d(this,t),p(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),i(t,[{key:"onRender",value:function(){return this.ui.timeline.hide()}}]),t}(a.View);return e.prototype.tagName="ul",e.prototype.className="nav nav-pills",e.prototype.template=c.default.renderable((function(){return c.default.li(".show-available.nav-item",(function(){return c.default.a(".nav-link.fa.fa-circle-o",(function(){return c.default.text("Show available")}))})),c.default.li(".show-selected.nav-item",(function(){return c.default.a(".nav-link.fa.fa-check",(function(){return c.default.text("Show selected")}))})),c.default.li(".list-events.nav-item",(function(){return c.default.a(".nav-link.fa.fa-list",(function(){return c.default.text("List Events")}))})),c.default.li(".calendar.nav-item",(function(){return c.default.a(".nav-link.fa.fa-calendar",(function(){return c.default.text("Calendar")}))})),c.default.li(".timeline.nav-item",(function(){return c.default.a(".nav-link.fa.fa-road",(function(){return c.default.text("Timeline")}))})),c.default.li(".topic-colors.nav-item",(function(){return c.default.a(".nav-link.fa.fa-paint-brush",(function(){return c.default.text("Topic Colors")}))}))})),e.prototype.ui={showSelected:".show-selected",showAvail:".show-available",listEvents:".list-events",calendar:".calendar",timeline:".timeline",topicColors:".topic-colors"},e.prototype.triggers={"click @ui.showSelected":"select:clicked","click @ui.showCategories":"categories:clicked","click @ui.showAvail":"available:clicked","click @ui.listEvents":"list:clicked","click @ui.calendar":"calendar:clicked","click @ui.timeline":"timeline: clicked","click @ui.topicColors":"topic:colors:clicked"},e.prototype.behaviors=[u.default],e}.call(void 0),t.default=r},589:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,r,i,l=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a=n(4),c=n(8),u=n(236),s=(o=u)&&o.__esModule?o:{default:o};function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}i=a.Radio.channel("global"),r=function(){var e=function(e){function t(){return f(this,t),d(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),l(t,[{key:"emptyModal",value:function(){return i.request("main:app:object").getView().getRegion("modal").empty()}}]),t}(c.View);return e.prototype.behaviors=[s.default],e}.call(void 0),t.default=r},780:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});n(4),n(8);var o,r=l(n(40)),i=(l(n(757)),l(n(589)));function l(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}o=function(){var e=function(e){function t(){return a(this,t),c(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t}(i.default);return e.prototype.template=r.default.renderable((function(){return r.default.div(".modal-dialog.modal-md",(function(){return r.default.div(".modal-content",(function(){return r.default.h3(".header"),r.default.div(".content"),r.default.div(".row",(function(){return r.default.button(".close-btn.btn.btn-warning.fa.fa-close.mr-auto",{data:{dismiss:"modal"}},"Close"),r.default.button(".ok-button.btn.btn-success.fa.fa-check.ml-auto","Ok")}))}))}))})),e.prototype.ui={closeBtn:".close-btn",okBtn:".ok-button",header:".header",content:".content"},e.prototype.regions={content:"@ui.content"},e.prototype.events={"click @ui.okBtn":"okBtnClicked","click @ui.closeBtn":"emptyModal"},e}.call(void 0),t.default=o},835:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=(p(n(37)),n(4)),i=n(8),l=p(n(40)),a=p(n(594)),c=p(n(588)),u=p(n(757)),s=(p(n(780)),p(n(234))),f=p(n(1102)),d=p(n(1103));function p(e){return e&&e.__esModule?e:{default:e}}function h(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function b(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function v(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var y,w,g,m,k,_,C,O;w=r.Radio.channel("global"),y=r.Radio.channel("crown"),s.default.eventIndex,O=y.request("get-event-manager","topics"),m=function(){var e=function(e){function t(){return h(this,t),b(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return v(t,e),t}(a.default);return e.prototype.mode="client",e.prototype.state={sortKey:"name",pageSize:10},e.prototype.comparator="name",e}.call(void 0),_=function(){var e=function(e){function t(){return h(this,t),b(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return v(t,e),t}(u.default);return e.prototype.className="form-group form-check border border-primary rounded",e}.call(void 0),k=function(){var e=function(e){function t(){return h(this,t),b(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return v(t,e),o(t,[{key:"childToggled",value:function(){return this.trigger("child:toggled")}}]),t}(i.CollectionView);return e.prototype.template=l.default.renderable((function(){return l.default.div(".topics")})),e.prototype.childView=_,e.prototype.childViewContainer=".topics",e.prototype.viewComparator="name",e.prototype.childViewEvents={toggled:"childToggled"},e.prototype.behaviors={HasMasonryView:{behaviorClass:d.default,listContainer:".topics",hasPageableCollection:!0,masonryOptions:{itemSelector:".form-check",isInitLayout:!0,horizontalOrder:!0,columnWidth:15,stagger:30}}},e}.call(void 0),C=function(){var e=function(e){function t(){h(this,t);var e=b(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments));return e.onRender=e.onRender.bind(e),e}return v(t,e),o(t,[{key:"onRender",value:function(){var e,n;return function(e,t){if(!(e instanceof t))throw new Error("Bound instance method accessed before binding")}(this,t),e=new c.default({collection:this.collection}),this.showChildView("paginateBar",e),n=new k({collection:this.collection}),this.showChildView("content",n)}}]),t}(i.View);return e.prototype.template=l.default.renderable((function(){return l.default.div(".paginate-bar"),l.default.div(".content")})),e.prototype.ui={paginateBar:".paginate-bar",content:".content"},e.prototype.regions={paginateBar:"@ui.paginateBar",content:"@ui.content"},e.prototype.childViewTriggers={"child:toggled":"child:toggled"},e}.call(void 0),g=function(){var e=function(e){function t(){return h(this,t),b(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return v(t,e),o(t,[{key:"initialize",value:function(e){return O.initAll()}},{key:"childToggled",value:function(){var e,t=this;return e=O.determineCategories(),Promise.all(e.promises).then((function(){return console.log("there were "+e.promises.length+" promises."),t.render()}))}},{key:"onRender",value:function(){var e;return e=new f.default,this.showChildView("buttonBar",e),this[this.contentMap[this.contentTopic]]()}},{key:"selectClicked",value:function(){var e,t;return this.contentTopic="selected",t=O.collections.topics,e=new C({collection:new m(t.filter({selected:!0}))}),this.showChildView("content",e)}},{key:"availableClicked",value:function(){var e,t;return this.contentTopic="available",t=O.collections.topics,e=new C({collection:new m(t.filter({selected:!1}))}),this.showChildView("content",e)}},{key:"listClicked",value:function(){var e=this;return this.contentTopic="listEvents",Promise.all([n.e(3),n.e(19)]).then(function(){var t;return t=new(0,n(1236).default)({model:e.model}),e.showChildView("content",t)}.bind(null,n)).catch(n.oe)}},{key:"calendarClicked",value:function(){var e=this;return this.contentTopic="calendar",Promise.all([n.e(3),n.e(54),n.e(18)]).then(function(){var t;return t=new(0,n(1237).default)({model:e.model}),e.showChildView("content",t)}.bind(null,n)).catch(n.oe)}},{key:"topicColorsClicked",value:function(){var e=this;return console.log("topicColorsClicked"),this.contentTopic="colors",Promise.all([n.e(8),n.e(20)]).then(function(){var t;return t=new(0,n(1243).default)({model:w.request("get-topic-colors")}),e.showChildView("content",t)}.bind(null,n)).catch(n.oe)}}]),t}(i.View);return e.prototype.template=l.default.renderable((function(){return l.default.div(".text-center.listview-header",(function(){return l.default.text("Topic Events")})),l.default.div(".row.button-bar"),l.default.div(".content")})),e.prototype.ui={buttonBar:".button-bar",content:".content"},e.prototype.regions={content:"@ui.content",buttonBar:"@ui.buttonBar"},e.prototype.childViewEvents={"child:toggled":"childToggled","select:clicked":"selectClicked","available:clicked":"availableClicked","list:clicked":"listClicked","calendar:clicked":"calendarClicked","topic:colors:clicked":"topicColorsClicked"},e.prototype.contentMap={selected:"selectClicked",available:"availableClicked",listEvents:"listClicked",calendar:"calendarClicked",colors:"topicColorsClicked"},e.prototype.contentTopic="available",e}.call(void 0),t.default=g}}]);
//# sourceMappingURL=crown-view-events-f2db7d860830318e0c41.js.map