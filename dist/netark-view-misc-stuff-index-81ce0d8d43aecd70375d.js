(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{438:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,r=n(22),i=(o=r)&&o.__esModule?o:{default:o};t.default=i.default.renderable((function(e){return i.default.div(".listview-header",(function(){return i.default.img(".mr-3.mb-1",{src:e.leftIcon,style:"height:2rem;width:2rem"}),i.default.text(e.text),i.default.img(".ml-3.mb-1",{src:e.rightIcon,style:"height:2rem;width:2rem"})}))}))},480:function(e,t,n){e.exports=n(481)},481:function(e,t,n){e.exports=n.p+"c3265015dcbd60200c37916ae0b1165a.svg"},482:function(e,t,n){e.exports=n(483)},483:function(e,t,n){e.exports=n.p+"ef7dffd4e73274dffdd6d45b441ab4ad.svg"},671:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,r,i,a,l=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),c=n(6),u=n(7),f=_(n(22)),d=_(n(480)),s=_(n(482)),p=_(n(438));function _(e){return e&&e.__esModule?e:{default:e}}function b(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function h(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function y(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}a=n(672),o=function(){var e=function(e){function t(){return b(this,t),h(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return y(t,e),l(t,[{key:"linkClicked",value:function(){return console.log("show",this.model.id)}}]),t}(u.View);return e.prototype.className="col-md-4",e.prototype.template=f.default.renderable((function(e){return f.default.div(".listview-list-entry",(function(){return f.default.a({href:"#netark/view/"+e.id},e.name)}))})),e.prototype.ui={link:"a"},e.prototype.events={"click @ui.link":"linkClicked"},e}.call(void 0),r=function(){var e=function(e){function t(){return b(this,t),h(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return y(t,e),t}(u.CollectionView);return e.prototype.className="row",e.prototype.childView=o,e}.call(void 0),i=function(){var e=function(e){function t(){return b(this,t),h(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return y(t,e),l(t,[{key:"onRender",value:function(){var e,t;return e=new c.Collection(a),t=new r({collection:e}),this.showChildView("itemList",t)}}]),t}(u.View);return e.prototype.template=f.default.renderable((function(){return(0,p.default)({text:"Unsorted Generic Stuff",leftIcon:d.default,rightIcon:s.default}),f.default.div(".items")})),e.prototype.ui={itemList:".items"},e.prototype.regions={itemList:"@ui.itemList"},e.prototype.templateContext={appName:"netark"},e}.call(void 0),t.default=i},672:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=[{id:"1525465954d9d8514a76d8803c30ff32b8bcf1ec496bb8b1fa595d2b8d1cccc12bb09f9dbb",name:"Radio 2 Playlists: Radio 2 Playlist: Radio 2 Rocks"},{id:"0027_March_of_Progress_The_03_35_22_00",name:"The March of Progress"},{id:"OTRR_Planet_Man_Ver2_Singles",name:"Planet Man"},{id:"OTRR_Space_Patrol_Singles",name:"Space Patrol"},{id:"Sci-fiRadio",name:"Sci-fiRadio"},{id:"Speed_Gibson_Of_The_International_Secret_Police",name:"Speed Gibson of the International Secret Police"}]}}]);
//# sourceMappingURL=netark-view-misc-stuff-index-81ce0d8d43aecd70375d.js.map