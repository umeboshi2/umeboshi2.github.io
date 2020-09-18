(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{100:function(e,n,t){(e.exports=t(87)(!1)).push([e.i,'.jsonView{\n    margin-left: 20px;\n    font-family: Consolas, "Lucida Console", Menlo, "dejavu sans mono", monospace;\n    font-size: 16px;\n    line-height: 16px;\n    padding: 2px;\n    cursor: default;\n    color: cornsilk;\n    white-space: nowrap;\n    -webkit-user-select: none;\n}\n\n.jsonView>div{\n    display: inline-block;\n}\n\n.jsonView>.children, .jsonView.insert{\n    display: block;\n}\n\n.jsonView>.name{\n    color: mistyrose;\n}\n\n.jsonView>.separator:before{\n    content: ":";\n}\n\n.jsonView>.separator {\n    padding-right: 5px;\n}\n\n.jsonView>.value.null{\n    color: rgb(128, 128, 128);\n}\n\n.jsonView>.value.boolean, .jsonView>.value.number{\n    color: lightseagreen;\n}\n\n.jsonView>.value.string:not(.edit):before, .jsonView>.value.string:not(.edit):after{\n    content: "\\"";\n}\n\n.jsonView>.value.string {\n    color: lightsalmon;\n}\n\n.jsonView>.name:hover, .jsonView>.value:hover{\n    background-color: rgba(56, 121, 217, 0.1);\n}\n\n.jsonView>.jv-expand, .jsonView>.jv-collapse{\n    min-width: 20px;\n    margin-left: -20px;\n    cursor: pointer;\n}\n\n.jsonView>.jv-expand:before{\n    content: \'\\25B6\';\n}\n\n.jsonView>.jv-collapse:before{\n    content: \'\\25BC\';\n}\n\n.jsonView>.edit{\n    padding: 0px 5px 0px 5px;\n    white-space: nowrap;\n    overflow: hidden;\n    background-color: transparent;\n}\n\n.jsonView>.edit br{\n    display: none;\n}\n\n.jsonView>.edit *{\n    display: inline;\n    white-space: nowrap;\n}\n\n.jsonView>.value.edit{\n    color: rgb(0, 0, 0);\n}\n\n.jsonView>.delete:before{\n    content: \'X\';\n}\n\n.jsonView>.delete{\n    opacity: 0;\n    display: inline;\n    padding: 3px;\n    margin-left: 20px;\n    cursor: pointer;\n    color: rgb(150, 150, 150);\n}\n\n.jsonView>.delete:hover{\n    opacity: 1;\n    color: rgb(0, 0, 0);\n    background: rgb(220, 220, 220);\n}\n\n.jsonView>.insert:before{\n    content: \'+\';\n}\n\n.jsonView>.insert{\n    display: none;\n    color: rgb(150, 150, 150);\n    cursor: pointer;\n}\n\n.jsonView.jv-expanded>.insert, .jsonView.jv-expanded>.insert{\n    display: inline-block;\n    margin-left: 20px;\n    padding: 3px;\n}\n\n.jsonView>.insert:hover{\n    color: rgb(0, 0, 0);\n    background: rgb(220, 220, 220);\n}\n',""])},116:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o,i=t(4),r=(o=i)&&o.__esModule?o:{default:o};n.default=r.default.renderable((function(e){return r.default.div(".listview-header",(function(){return r.default.img(".mr-3.mb-1",{src:e.leftIcon,style:"height:2rem;width:2rem"}),r.default.text(e.text),r.default.img(".ml-3.mb-1",{src:e.rightIcon,style:"height:2rem;width:2rem"})}))}))},133:function(e,n,t){"use strict";e.exports=[{id:"plague_ship_librivox",name:"Plague Ship"},{id:"projectmastodon_pc_librivox",name:"Project Mastodon"},{id:"voyagetoarcturus_mn_librivox",name:"Voyage to Arcturus"},{id:"voodoo_planet_mn_librivox",name:"Voodoo Planet"},{id:"talents_inc_mn_librivox",name:"Talents Inc."},{id:"people_minus_x_1511_librivox",name:"People Minux X"},{id:"time_crime_1305_librivox",name:"Time Crime"},{id:"my_man_jeeves_librivox",name:"My Man Jeeves"}]},183:function(e,n,t){e.exports=t(184)},184:function(e,n,t){e.exports=t.p+"f77f45d1e9fad82237bc3048dbfbbd62.svg"},185:function(e,n,t){e.exports=t(186)},186:function(e,n,t){e.exports=t.p+"0f3121169aedcca13eb16e0fcafac2e0.svg"},448:function(e,n,t){"use strict";var o,i,r,s,a,l,c,u,p,f,d,w,b=function(){function e(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(n,t,o){return t&&e(n.prototype,t),o&&e(n,o),n}}();function v(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function m(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}function h(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}o=t(1),l=t(2),w=t(4),t(85),d=t(183),c=t(185),u=t(449),t(19).navigate_to_url,s=t(97),t(133),p=t(116).default,f=[{id:"otrr",name:"Old Time Radio"},{id:"librivox",name:"Librivox Audiobooks"},{id:"scifi",name:"SciFi Movies"},{id:"misc",name:"Misc Stuff"}],i=function(){var e=function(e){function n(){return v(this,n),m(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return h(n,e),b(n,[{key:"linkClicked",value:function(e){return console.log("show",this.model.id)}}]),n}(l.View);return e.prototype.className="col-md-4",e.prototype.template=w.renderable((function(e){return w.div(".listview-list-entry",(function(){return w.a({href:"#netark/"+e.id+"/list"},e.name)}))})),e.prototype.ui={link:"a"},e.prototype.events={"click @ui.link":"linkClicked"},e}.call(void 0),r=function(){var e=function(e){function n(){return v(this,n),m(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return h(n,e),n}(l.CollectionView);return e.prototype.className="row",e.prototype.childView=i,e}.call(void 0),function(){var e=function(e){function n(){return v(this,n),m(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return h(n,e),n}(l.View);return e.prototype.template=w.renderable((function(e){return w.div(".jsonview.listview-list-entry",{style:"overflow:auto"})})),e.prototype.behaviors={HasJsonView:{behaviorClass:s}},e}.call(void 0),a=function(){var e=function(e){function n(){return v(this,n),m(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return h(n,e),b(n,[{key:"onRender",value:function(){var e,n;return e=new o.Collection(f),console.log("Collection",e),n=new r({collection:e}),this.showChildView("itemList",n)}}]),n}(l.View);return e.prototype.template=w.renderable((function(){return p({text:"Internet Archive",leftIcon:d,rightIcon:c}),w.div(".row.col-sm-4.offset-sm-4",(function(){return w.img({src:u}),w.span("This is an experimental app. Many parts will not work properly.")})),w.div(".items")})),e.prototype.ui={itemList:".items"},e.prototype.regions={itemList:"@ui.itemList"},e.prototype.templateContext={appName:"netark"},e}.call(void 0),e.exports=a},449:function(e,n,t){e.exports=t(450)},450:function(e,n,t){e.exports=t.p+"61ad64b3284fe94170f372e670b86be3.svg"},97:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o,i=function(){function e(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(n,t,o){return t&&e(n.prototype,t),o&&e(n,o),n}}(),r=(a(t(1)),a(t(2))),s=a(t(92));function a(e){return e&&e.__esModule?e:{default:e}}t(98),o=function(e){function n(){return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),function(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(n,e),i(n,[{key:"options",value:function(){return{jviewSelector:".jsonview"}}},{key:"ui",value:function(){return{jsonView:this.getOption("jviewSelector")}}},{key:"onDomRefresh",value:function(){var e;return e=this.view.model.toJSON(),this.view.jsonView=new s.default(e),this.ui.jsonView.prepend(this.view.jsonView.dom)}}]),n}(r.default.Behavior),n.default=o},98:function(e,n,t){var o=t(100);"string"==typeof o&&(o=[[e.i,o,""]]);var i={insert:"head",singleton:!1};t(88)(o,i);o.locals&&(e.exports=o.locals)}}]);
//# sourceMappingURL=netark-view-index-9c7647213d57966e77ef.js.map