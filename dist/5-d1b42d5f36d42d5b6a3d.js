(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{112:function(e,t,n){e.exports=function(){return new Worker(n.p+"8fcdd13cb3c1680eba54.worker.js")}},41:function(e,t,n){"use strict";n.r(t);n(4);var r,o,a,i,l,s,c,u,d,h,f,v,w,p,m,b,y,g,S,x,_,C,L,O,j=n(2),k=n.n(j),N=n(3),z=n.n(N),R=n(61),q=n(45),V=(n(0),n(15),n(53),n(60)),$=n(55),I=(n(14),n(59)),P=n(64),T=n.n(P);i=k.a.Radio.channel("global"),r=k.a.Radio.channel("tvmaze"),s=i.request("main:app:dbConn","tvmaze"),l=new I.LoveStore(s,"TVMazeShow"),u=["id","name","url","self","premiered","runtime","network_name","imdb","status","summary","img_med","img_orig","content"],o=function(){class e extends k.a.Model{toJSON(){var e;return e={},u.forEach(t=>e[t]=this.get(t)),e}}return e.prototype.loveStore=l,e}.call(this),a=function(){class e extends T.a{}return e.prototype.loveStore=l,e.prototype.model=o,e.prototype.mode="client",e}.call(this),c=new a,r.reply("get-local-tvshows",function(){return c}),r.reply("get-local-tvshow-model",function(){return o}),r.reply("get-local-tvshow-collection",function(){return a}),r.reply("save-local-show",function(e){var t,n,r,a,i,l;return t=new o({id:e.id,name:e.name,url:e.url,self:e._links.self.href,premiered:new Date(e.premiered),runtime:(null!=e?e.runtime:void 0)||"",network_name:(null!=e&&null!=(n=e.network)?n.name:void 0)||"NO NETWORK",imdb:(null!=(r=e.externals)?r.imdb:void 0)||"",status:(null!=e?e.status:void 0)||"",summary:(null!=e?e.summary:void 0)||"",img_med:(null!=e&&null!=(a=e.image)?a.medium:void 0)||"",img_orig:(null!=e&&null!=(i=e.image)?i.original:void 0)||"",content:e}),l=!0,t.isNew=function(){return!!l&&(l=!1,!0)},c.add(t),t.save()}),v=k.a.Radio.channel("global"),d=k.a.Radio.channel("tvmaze"),p=v.request("main:app:dbConn","tvmaze"),w=new I.LoveStore(p,"TVMazeEpisode"),m=["id","show_id","name","url","self","season","number","airdate","airtime","runtime","summary","img_med","img_orig","content"],h=function(){class e extends k.a.Model{toJSON(){var e;return e={},m.forEach(t=>e[t]=this.get(t)),e}}return e.prototype.loveStore=w,e}.call(this),f=function(){class e extends k.a.Collection{}return e.prototype.loveStore=w,e.prototype.model=h,e}.call(this),b=new f,d.reply("get-local-episodes",function(){return b}),d.reply("get-local-episode-model",function(){return h}),d.reply("get-local-episode-collection",function(){return f}),d.reply("save-local-episode",function(e){var t,n,r,o,a,i,l,s,c;return t=new h({id:e.id,show_id:e.show_id,name:e.content.name,url:e.content.url,self:null!=(n=e.content._links)?n.self.href:void 0,season:e.content.season,number:e.content.number,airdate:new Date(e.content.airdate),airtime:e.content.airtime,runtime:(null!=(r=e.content)?r.runtime:void 0)||"",summary:(null!=(o=e.content)?o.summary:void 0)||"",img_med:(null!=(a=e.content)&&null!=(i=a.image)?i.medium:void 0)||"",img_orig:(null!=(l=e.content)&&null!=(s=l.image)?s.original:void 0)||"",content:e.content}),c=!0,t.isNew=function(){return!!c&&(c=!1,!0)},b.add(t),t.save()}),k.a.Radio.channel("global"),y=k.a.Radio.channel("tvmaze"),L="//api.tvmaze.com",C=class extends k.a.Model{url(){var e;return e=this.searchName,`${L}/singlesearch/shows?q=${e}`}},y.reply("single-show-search",function(e){var t;return(t=new C).searchName=e,t}),_=class extends k.a.Collection{url(){return`${L}/search/shows`}},y.reply("new-tv-show-search",function(e){return new _(e=e||{})}),y.reply("tv-show-search-collection",function(){return _}),y.reply("search-tv-shows",function(e){return new _}),x=class extends k.a.Model{urlRoot(){return`${L}/shows`}},y.reply("get-remote-show",function(e){return new x({id:e})}),g=class extends k.a.Model{url(){return this.get("_links").self.href}},S=function(){class e extends k.a.Collection{url(){return`${L}/shows/${this.showId}/episodes`}}return e.prototype.model=g,e}.call(this),y.reply("get-remote-episodes",function(e){var t;return(t=new S).showId=e,t}),n(52),k.a.Radio.channel("global"),k.a.Radio.channel("messages"),k.a.Radio.channel("resources"),O=k.a.Radio.channel("tvmaze");var M,E,A,D,J,F=function(){class e extends V.MainController{viewIndex(){return this.setupLayoutIfNeeded(),Promise.all([n.e(1),n.e(10),n.e(12),n.e(47)]).then((()=>{var e,t,r;return r=O.request("get-local-tvshows"),e=O.request("tv-show-search-collection"),t=n(202),r.fetch().then(()=>{var n;return n=new t({collection:new e}),this.layout.showChildView("content",n)})}).bind(null,n)).catch(n.oe)}viewShowList(){return this.viewShowListCards()}viewShowListCards(){var e;return this.setupLayoutIfNeeded(),e=O.request("get-local-tvshows"),Promise.all([n.e(1),n.e(46)]).then((()=>{var t;return t=n(201),this._loadView(t,e,"tvshow")}).bind(null,n)).catch(n.oe)}viewShowListPackery(){var e;return this.setupLayoutIfNeeded(),e=O.request("get-local-tvshows"),Promise.all([n.e(1),n.e(11),n.e(18),n.e(45)]).then((()=>{var t;return t=n(200),this._loadView(t,e,"tvshow")}).bind(null,n)).catch(n.oe)}viewShowListMasonry(){var e;return this.setupLayoutIfNeeded(),e=O.request("get-local-tvshows"),Promise.all([n.e(1),n.e(11),n.e(44)]).then((()=>{var t;return t=n(199),this._loadView(t,e,"tvshow")}).bind(null,n)).catch(n.oe)}viewShowListFlat(){var e;return this.setupLayoutIfNeeded(),e=O.request("get-local-tvshows"),window.tvshows=e,Promise.all([n.e(1),n.e(43)]).then((()=>{var t;return t=n(198),e.fetch().done(()=>{var n;return n=new t({collection:e}),this.layout.showChildView("content",n)})}).bind(null,n)).catch(n.oe)}viewSearchShow(){return this.setupLayoutIfNeeded(),Promise.all([n.e(1),n.e(10),n.e(42)]).then((()=>{var e;return e=new(n(197)),this.layout.showChildView("content",e)}).bind(null,n)).catch(n.oe)}viewShow(e){return this.setupLayoutIfNeeded(),Promise.all([n.e(1),n.e(10),n.e(12),n.e(41)]).then((()=>{var t,r;return t=n(196),r=new(O.request("get-local-tvshow-model"))({id:e}),this._loadView(t,r,"tvshow")}).bind(null,n)).catch(n.oe)}importSampleData(){return this.setupLayoutIfNeeded(),Promise.all([n.e(1),n.e(40)]).then((()=>{var e,t;return t=O.request("get-local-tvshows"),O.request("tv-show-search-collection"),e=n(195),t.fetch().then(()=>{var t;return t=new e,this.layout.showChildView("content",t)})}).bind(null,n)).catch(n.oe)}viewCalendar(){return this.setupLayoutIfNeeded(),Promise.all([n.e(17),n.e(39)]).then((()=>{var e,t;return t=O.request("get-local-tvshows"),O.request("tv-show-search-collection"),e=n(194),t.fetch().then(()=>{var t;return t=new e,this.layout.showChildView("content",t)})}).bind(null,n)).catch(n.oe)}}return e.prototype.layoutClass=$.a,e}.call(this);n(112);k.a.Radio.channel("global"),M=k.a.Radio.channel("tvmaze"),D=[{label:"List Shows",url:"#tvmaze/shows",icon:".fa.fa-list"},{label:"Search Show",url:"#tvmaze/searchshow",icon:".fa.fa-search"},{label:"Import Sample Data",url:"#tvmaze/import-sample-data",icon:".fa.fa-download"},{label:"Calendar",url:"#tvmaze/calendar",icon:".fa.fa-calendar"}],A=function(){class e extends z.a.AppRouter{}return e.prototype.appRoutes={tvmaze:"viewIndex","tvmaze/searchshow":"viewSearchShow","tvmaze/shows":"viewShowList","tvmaze/shows/flat":"viewShowListFlat","tvmaze/shows/view/:id":"viewShow","tvmaze/import-sample-data":"importSampleData","tvmaze/calendar":"viewCalendar"},e}.call(this),E=function(){class e extends R.a{}return e.prototype.Controller=F,e.prototype.Router=A,e.prototype.appletEntries=[{label:`${Object(q.default)("tvmaze")} Menu`,menu:D},{label:"List Shows",url:"#tvmaze/shows"}],e}.call(this),J=void 0,M.reply("maincalendar:set-date",function(e){return J=e.fullCalendar("getDate")}),M.reply("maincalendar:get-date",function(){return J});t.default=E},45:function(e,t,n){"use strict";n.r(t),t.default=function(e){return e.charAt(0).toUpperCase()+e.slice(1)}},53:function(e,t,n){"use strict";n.r(t);var r,o,a,i,l=n(3),s=n.n(l),c=n(0),u=n.n(c),d=n(14);i=u.a.renderable(function(e){return u.a.i(e.icon),u.a.text(" "),u.a.text(e.label)}),o=function(){class e extends s.a.View{}return e.prototype.tagName="button",e.prototype.attributes={class:"btn btn-secondary"},e.prototype.triggers={click:"button:clicked"},e.prototype.modelEvents={change:"render"},e}.call(this),r=function(){class e extends s.a.CollectionView{childViewOptions(){return{template:this.options.entryTemplate}}onChildviewButtonClicked(e){return this.trigger("toolbar:entry:clicked",e)}}return e.prototype.childView=o,e.prototype.className="btn-group btn-group-justified",e}.call(this),a=function(){class e extends s.a.View{onRender(){var e,t;return e=this.options.entryTemplate||i,t=new r({collection:this.collection,entryTemplate:e}),this.showChildView("entries",t)}onChildviewToolbarEntryClicked(e){return Object(d.default)(e.model.get("url"))}}return e.prototype.template=u.a.renderable(function(){return u.a.div(".toolbar-entries")}),e.prototype.regions={entries:{el:".toolbar-entries"}},e}.call(this),t.default=a},59:function(e,t,n){var r;window,r=function(e,t,n){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}({"./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */function(e,t){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(n=window)}e.exports=n},"./src/driver.coffee":
/*!***************************!*\
  !*** ./src/driver.coffee ***!
  \***************************/
/*! exports provided: LoveStore */function(e,t,n){"use strict";n.r(t);var r=n(/*! backbone */"backbone"),o=n.n(r),a=n(/*! ./sync */"./src/sync.coffee"),i=n(/*! ./store */"./src/store.coffee");n.d(t,"LoveStore",function(){return i.LoveStore});var l,s,c=n(/*! ./utils */"./src/utils.coffee");o.a.LoveStore=i.LoveStore,l=o.a.sync,s=function(e,t={}){var n,r;return n=t.ajaxSync,r=Object(c.getLoveStore)(e),!n&&r?a.sync:l},o.a.sync=function(e,t,n){return s(t,n).apply(this,[e,t,n])}},"./src/store.coffee":
/*!**************************!*\
  !*** ./src/store.coffee ***!
  \**************************/
/*! exports provided: LoveStore */function(e,t,n){"use strict";n.r(t),n.d(t,"LoveStore",function(){return l});var r=n(/*! underscore */"underscore"),o=n(/*! lovefield */"lovefield"),a=n.n(o),i=n(/*! ./utils */"./src/utils.coffee"),l=class{constructor(e,t=""){this.conn=e,this.name=t}_getTable(){return this.conn.getSchema().table(this.name)}create(e){var t,n,r;return r=this._getTable(),e.id||0===e.id||(e.id=Object(i.guid)(),e.set(e.idAttribute,e.id)),t=e.toJSON(),n=r.createRow(t),this.conn.insert().into(r).values([n]).exec()}update(e){var t,n,r;return r=this._getTable(),t=e.toJSON(),n=this.conn.update(r),Object.keys(t).forEach(function(e){return n=n.set(r[e],t[e])}),(n=n.where(r.id.eq(t.id))).exec()}find(e,t){var n,o,a;return a=this._getTable(),o=Object(r.result)(e,"idAttribute"),n=Object(r.result)(e,o),this.conn.select().from(a).where(a.id.eq(n)).exec().then(function(t){return e.set(t[0]),e})}findAll(e,t){var n,r,o;return o=this._getTable(),r=this.conn.select().from(o),t.data&&(n=[],Object.keys(t.data).forEach(function(e){var r;return r=o[e].eq(t.data[e]),n.push(r)}),r=n.length>1?r.where(a.a.op.and(n)):r.where(n[0])),r.exec().then(function(t){return e instanceof Backbone.Collection?e.set(t):e.set(t[0])})}destroy(e,t){var n;return n=this._getTable(),this.conn.delete().from(n).where(n.id.eq(e.id)).exec()}}},"./src/sync.coffee":
/*!*************************!*\
  !*** ./src/sync.coffee ***!
  \*************************/
/*! exports provided: sync */function(e,t,n){"use strict";n.r(t),n.d(t,"sync",function(){return l});var r=n(/*! backbone */"backbone"),o=n.n(r),a=n(/*! underscore */"underscore"),i=n(/*! ./utils */"./src/utils.coffee");var l=function(e,t,n={}){var r,o,l,s,c;c=Object(i.getLoveStore)(t),s=void 0;try{switch(e){case"read":l=Object(a.result)(t,"idAttribute"),s=Object(a.result)(t,l)?c.find(t,n):c.findAll(t,n);break;case"create":s=c.create(t,n);break;case"patch":case"update":s=c.update(t,n);break;case"delete":s=c.destroy(t,n)}}catch(e){o=22===(r=e).code?"Private browsing is unsupported":r.message}return s?(s.done=s.then,s.fail=s.catch,n.success&&n.success.call(t,s,n)):(o=o||"Record Not Found",n.error&&n.error.call(t,o,n)),n.complete&&n.complete.call(t,s),s}},"./src/utils.coffee":
/*!**************************!*\
  !*** ./src/utils.coffee ***!
  \**************************/
/*! exports provided: guid, getLoveConnection, getTableName, getWindow, getLoveStore */function(e,t,n){"use strict";n.r(t),function(e){n.d(t,"guid",function(){return a}),n.d(t,"getLoveConnection",function(){return i}),n.d(t,"getTableName",function(){return l}),n.d(t,"getWindow",function(){return s}),n.d(t,"getLoveStore",function(){return c});var r,o=n(/*! underscore */"underscore");r=function(){return(0|65536*(1+Math.random())).toString(16).substring(1)};var a=function(){return`${r()}${r()}-${r()}-${r()}-${r()}-${r()}${r()}${r()}`},i=function(e){return Object(o.result)(e,"loveConnection")||Object(o.result)(e.collection,"loveConnection")},l=function(e){return Object(o.result)(e,"tableName")||Object(o.result)(e.collection,"tableName")},s=function(){return Object(o.isUndefined)(window)?e:window},c=function(e){return Object(o.result)(e,"loveStore")||Object(o.result)(e.collection,"loveStore")}}.call(this,n(/*! ./../node_modules/webpack/buildin/global.js */"./node_modules/webpack/buildin/global.js"))},0:
/*!*********************************!*\
  !*** multi ./src/driver.coffee ***!
  \*********************************/
/*! no static exports found */function(e,t,n){e.exports=n(/*! ./src/driver.coffee */"./src/driver.coffee")},backbone:
/*!**************************************************************************************************!*\
  !*** external {"amd":"backbone","commonjs":"backbone","commonjs2":"backbone","root":"Backbone"} ***!
  \**************************************************************************************************/
/*! no static exports found */function(t,n){t.exports=e},lovefield:
/*!***********************************************************************************************!*\
  !*** external {"amd":"lovefield","commonjs":"lovefield","commonjs2":"lovefield","root":"lf"} ***!
  \***********************************************************************************************/
/*! no static exports found */function(e,n){e.exports=t},underscore:
/*!*************************************************************************************************!*\
  !*** external {"amd":"underscore","commonjs":"underscore","commonjs2":"underscore","root":"_"} ***!
  \*************************************************************************************************/
/*! no static exports found */function(e,t){e.exports=n}})},e.exports=r(n(2),n(1),n(7))}}]);
//# sourceMappingURL=5-d1b42d5f36d42d5b6a3d.js.map