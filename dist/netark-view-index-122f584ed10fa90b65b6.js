(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{437:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,r=n(34),i=(o=r)&&o.__esModule?o:{default:o};t.default=i.default.renderable((function(e){return i.default.div(".listview-header",(function(){return i.default.img(".mr-3.mb-1",{src:e.leftIcon,style:"height:2rem;width:2rem"}),i.default.text(e.text),i.default.img(".ml-3.mb-1",{src:e.rightIcon,style:"height:2rem;width:2rem"})}))}))},477:function(e,t,n){e.exports=n(478)},478:function(e,t,n){e.exports=n.p+"f77f45d1e9fad82237bc3048dbfbbd62.svg"},479:function(e,t,n){e.exports=n(480)},480:function(e,t,n){e.exports=n.p+"0f3121169aedcca13eb16e0fcafac2e0.svg"},655:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,r,i,u,l=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a=n(6),c=n(7),f=b(n(34)),s=b(n(477)),p=b(n(479)),d=b(n(656)),m=b(n(437));function b(e){return e&&e.__esModule?e:{default:e}}function y(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function h(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function v(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}u=[{id:"otrr",name:"Old Time Radio"},{id:"librivox",name:"Librivox Audiobooks"},{id:"scifi",name:"SciFi Movies"},{id:"misc",name:"Misc Stuff"}],o=function(){var e=function(e){function t(){return y(this,t),h(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return v(t,e),l(t,[{key:"linkClicked",value:function(){return console.log("show",this.model.id)}}]),t}(c.View);return e.prototype.className="col-md-4",e.prototype.template=f.default.renderable((function(e){return f.default.div(".listview-list-entry",(function(){return f.default.a({href:"#netark/"+e.id+"/list"},e.name)}))})),e.prototype.ui={link:"a"},e.prototype.events={"click @ui.link":"linkClicked"},e}.call(void 0),r=function(){var e=function(e){function t(){return y(this,t),h(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return v(t,e),t}(c.CollectionView);return e.prototype.className="row",e.prototype.childView=o,e}.call(void 0),i=function(){var e=function(e){function t(){return y(this,t),h(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return v(t,e),l(t,[{key:"onRender",value:function(){var e,t;return e=new a.Collection(u),console.log("Collection",e),t=new r({collection:e}),this.showChildView("itemList",t)}}]),t}(c.View);return e.prototype.template=f.default.renderable((function(){return(0,m.default)({text:"Internet Archive",leftIcon:s.default,rightIcon:p.default}),f.default.div(".row.col-sm-4.offset-sm-4",(function(){return f.default.img({src:d.default}),f.default.span("This is an experimental app. Many parts will not work properly.")})),f.default.div(".items")})),e.prototype.ui={itemList:".items"},e.prototype.regions={itemList:"@ui.itemList"},e.prototype.templateContext={appName:"netark"},e}.call(void 0),t.default=i},656:function(e,t,n){e.exports=n(657)},657:function(e,t,n){e.exports=n.p+"61ad64b3284fe94170f372e670b86be3.svg"}}]);
//# sourceMappingURL=netark-view-index-122f584ed10fa90b65b6.js.map