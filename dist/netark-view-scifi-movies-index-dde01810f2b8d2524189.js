(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{1156:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,r,i,u=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),l=n(4),a=n(8),f=h(n(40)),c=h(n(1157)),s=h(n(1159)),p=h(n(1161)),d=h(n(748));function h(e){return e&&e.__esModule?e:{default:e}}function y(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function m(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}o=function(){var e=function(e){function t(){return y(this,t),_(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return m(t,e),u(t,[{key:"linkClicked",value:function(){return console.log("show",this.model.id)}}]),t}(a.View);return e.prototype.className="col-md-4",e.prototype.template=f.default.renderable((function(e){return f.default.div(".listview-list-entry",(function(){return f.default.a({href:"#netark/view/"+e.id},e.name)}))})),e.prototype.ui={link:"a"},e.prototype.events={"click @ui.link":"linkClicked"},e}.call(void 0),r=function(){var e=function(e){function t(){return y(this,t),_(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return m(t,e),t}(a.CollectionView);return e.prototype.className="row",e.prototype.childView=o,e}.call(void 0),i=function(){var e=function(e){function t(){return y(this,t),_(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return m(t,e),u(t,[{key:"onRender",value:function(){var e,t;return e=new l.Collection(p.default),t=new r({collection:e}),this.showChildView("itemList",t)}}]),t}(a.View);return e.prototype.template=f.default.renderable((function(){return(0,d.default)({text:"Scifi Movies",leftIcon:c.default,rightIcon:s.default}),f.default.div(".items")})),e.prototype.ui={itemList:".items"},e.prototype.regions={itemList:"@ui.itemList"},e}.call(void 0),t.default=i},1157:function(e,t,n){e.exports=n(1158)},1158:function(e,t,n){e.exports=n.p+"f6f82c8f692328fa73065ebb21e7a8c2.svg"},1159:function(e,t,n){e.exports=n(1160)},1160:function(e,t,n){e.exports=n.p+"286555a636937000a67bde92f54c4466.svg"},1161:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=[{id:"Plan_9_from_Outer_Space_1959",name:"Plan 9 from Outer Space"},{id:"InvasionOfTheBeeGirls",name:"Invasion of the Bee Girls"},{id:"Cosmos_War_of_the_Planets",name:"Cosmos: War of the Planets"}]},748:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,r=n(40),i=(o=r)&&o.__esModule?o:{default:o};t.default=i.default.renderable((function(e){return i.default.div(".listview-header",(function(){return i.default.img(".mr-3.mb-1",{src:e.leftIcon,style:"height:2rem;width:2rem"}),i.default.text(e.text),i.default.img(".ml-3.mb-1",{src:e.rightIcon,style:"height:2rem;width:2rem"})}))}))}}]);
//# sourceMappingURL=netark-view-scifi-movies-index-dde01810f2b8d2524189.js.map