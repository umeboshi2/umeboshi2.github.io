(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{39:function(e,t,n){"use strict";n.r(t);var r,o,c,a,s,i,l,u,d,f,p,h=n(2),b=n.n(h),v=n(3),g=n.n(v),y=n(61),w=n(45),m=(n(0),n(15),n(53),n(60)),x=n(55),j=(n(4),n(59)),O=n(64),S=n.n(O);a=b.a.Radio.channel("global"),r=b.a.Radio.channel("usgov"),u=a.request("main:app:dbConn","usgov"),s=new j.LoveStore(u,"Role"),o=function(){class e extends b.a.Model{}return e.prototype.loveStore=s,e}.call(this),c=function(){class e extends b.a.Collection{}return e.prototype.loveStore=s,e.prototype.model=o,e}.call(this),d=new c,r.reply("get_local_roles",function(){return d}),r.reply("get-role-model",function(){return o}),r.reply("get-role-collection",function(){return c}),l="https://www.govtrack.us/api/v2",i=function(){class e extends S.a{url(){return`${l}/role?current=true`}fetcher(e){var t;return e=e||{},t=this.state.currentPage*this.state.pageSize,e.offset=t,e.dataType="jsonp",super.fetcher(e)}parse(e){return console.log("parse(response)",e),this.state.pageSize=e.meta.limit,this.state.totalRecords=e.meta.total_count,this.state.totalPages=Math.ceil(this.state.totalRecords/this.state.pageSize),this.state.lastPage=this.state.totalPages-1,console.log("@state.totalRecords",this.state.totalRecords,this.state.totalPages),super.parse(e.objects)}}return e.prototype.mode="server",e.prototype.full=!0,e.prototype.baseURL=l,e.prototype.state={firstPage:0,pageSize:20},e.prototype.queryParams={pageSize:"limit",offset:function(){return this.state.currentPage*this.state.pageSize},currentPage:"offset"},e}.call(this),f=new i,r.reply("get-roles-collection",function(){return f}),n(14),n(52),b.a.Radio.channel("global"),b.a.Radio.channel("messages"),b.a.Radio.channel("resources"),p=b.a.Radio.channel("usgov");var R,k,C,_=function(){class e extends m.MainController{view_index(){return this.setupLayoutIfNeeded(),0,Promise.all([n.e(1),n.e(48)]).then((()=>{var e,t;return e=n(194),(t=p.request("get-roles-collection")).fetch().done(()=>{var n;return n=new e({collection:t}),this.layout.showChildView("content",n)})}).bind(null,n)).catch(n.oe)}}return e.prototype.layoutClass=x.a,e}.call(this);b.a.Radio.channel("global"),b.a.Radio.channel("usgov"),C=[{button:"#list-button",label:"List",url:"#usgov",icon:".fa.fa-list"},{button:"#calendar-button",label:"Calendar",url:"#usgov/calendar",icon:".fa.fa-calendar"}],k=function(){class e extends g.a.AppRouter{}return e.prototype.appRoutes={usgov:"view_index"},e}.call(this),R=function(){class e extends y.a{}return e.prototype.Controller=_,e.prototype.Router=k,e.prototype.appletEntries=[{label:`${Object(w.default)("usgov")} Menu`,menu:C}],e}.call(this);t.default=R},45:function(e,t,n){"use strict";n.r(t),t.default=function(e){return e.charAt(0).toUpperCase()+e.slice(1)}},53:function(e,t,n){"use strict";n.r(t);var r,o,c,a,s=n(3),i=n.n(s),l=n(0),u=n.n(l),d=n(14);a=u.a.renderable(function(e){return u.a.i(e.icon),u.a.text(" "),u.a.text(e.label)}),o=function(){class e extends i.a.View{}return e.prototype.tagName="button",e.prototype.attributes={class:"btn btn-secondary"},e.prototype.triggers={click:"button:clicked"},e.prototype.modelEvents={change:"render"},e}.call(this),r=function(){class e extends i.a.CollectionView{childViewOptions(){return{template:this.options.entryTemplate}}onChildviewButtonClicked(e){return this.trigger("toolbar:entry:clicked",e)}}return e.prototype.childView=o,e.prototype.className="btn-group btn-group-justified",e}.call(this),c=function(){class e extends i.a.View{onRender(){var e,t;return e=this.options.entryTemplate||a,t=new r({collection:this.collection,entryTemplate:e}),this.showChildView("entries",t)}onChildviewToolbarEntryClicked(e){return Object(d.default)(e.model.get("url"))}}return e.prototype.template=u.a.renderable(function(){return u.a.div(".toolbar-entries")}),e.prototype.regions={entries:{el:".toolbar-entries"}},e}.call(this),t.default=c},59:function(e,t,n){var r;window,r=function(e,t,n){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}({"./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */function(e,t){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(n=window)}e.exports=n},"./src/driver.coffee":
/*!***************************!*\
  !*** ./src/driver.coffee ***!
  \***************************/
/*! exports provided: LoveStore */function(e,t,n){"use strict";n.r(t);var r=n(/*! backbone */"backbone"),o=n.n(r),c=n(/*! ./sync */"./src/sync.coffee"),a=n(/*! ./store */"./src/store.coffee");n.d(t,"LoveStore",function(){return a.LoveStore});var s,i,l=n(/*! ./utils */"./src/utils.coffee");o.a.LoveStore=a.LoveStore,s=o.a.sync,i=function(e,t={}){var n,r;return n=t.ajaxSync,r=Object(l.getLoveStore)(e),!n&&r?c.sync:s},o.a.sync=function(e,t,n){return i(t,n).apply(this,[e,t,n])}},"./src/store.coffee":
/*!**************************!*\
  !*** ./src/store.coffee ***!
  \**************************/
/*! exports provided: LoveStore */function(e,t,n){"use strict";n.r(t),n.d(t,"LoveStore",function(){return s});var r=n(/*! underscore */"underscore"),o=n(/*! lovefield */"lovefield"),c=n.n(o),a=n(/*! ./utils */"./src/utils.coffee"),s=class{constructor(e,t=""){this.conn=e,this.name=t}_getTable(){return this.conn.getSchema().table(this.name)}create(e){var t,n,r;return r=this._getTable(),e.id||0===e.id||(e.id=Object(a.guid)(),e.set(e.idAttribute,e.id)),t=e.toJSON(),n=r.createRow(t),this.conn.insert().into(r).values([n]).exec()}update(e){var t,n,r;return r=this._getTable(),t=e.toJSON(),n=this.conn.update(r),Object.keys(t).forEach(function(e){return n=n.set(r[e],t[e])}),(n=n.where(r.id.eq(t.id))).exec()}find(e,t){var n,o,c;return c=this._getTable(),o=Object(r.result)(e,"idAttribute"),n=Object(r.result)(e,o),this.conn.select().from(c).where(c.id.eq(n)).exec().then(function(t){return e.set(t[0]),e})}findAll(e,t){var n,r,o;return o=this._getTable(),r=this.conn.select().from(o),t.data&&(n=[],Object.keys(t.data).forEach(function(e){var r;return r=o[e].eq(t.data[e]),n.push(r)}),r=n.length>1?r.where(c.a.op.and(n)):r.where(n[0])),r.exec().then(function(t){return e instanceof Backbone.Collection?e.set(t):e.set(t[0])})}destroy(e,t){var n;return n=this._getTable(),this.conn.delete().from(n).where(n.id.eq(e.id)).exec()}}},"./src/sync.coffee":
/*!*************************!*\
  !*** ./src/sync.coffee ***!
  \*************************/
/*! exports provided: sync */function(e,t,n){"use strict";n.r(t),n.d(t,"sync",function(){return s});var r=n(/*! backbone */"backbone"),o=n.n(r),c=n(/*! underscore */"underscore"),a=n(/*! ./utils */"./src/utils.coffee");var s=function(e,t,n={}){var r,o,s,i,l;l=Object(a.getLoveStore)(t),i=void 0;try{switch(e){case"read":s=Object(c.result)(t,"idAttribute"),i=Object(c.result)(t,s)?l.find(t,n):l.findAll(t,n);break;case"create":i=l.create(t,n);break;case"patch":case"update":i=l.update(t,n);break;case"delete":i=l.destroy(t,n)}}catch(e){o=22===(r=e).code?"Private browsing is unsupported":r.message}return i?(i.done=i.then,i.fail=i.catch,n.success&&n.success.call(t,i,n)):(o=o||"Record Not Found",n.error&&n.error.call(t,o,n)),n.complete&&n.complete.call(t,i),i}},"./src/utils.coffee":
/*!**************************!*\
  !*** ./src/utils.coffee ***!
  \**************************/
/*! exports provided: guid, getLoveConnection, getTableName, getWindow, getLoveStore */function(e,t,n){"use strict";n.r(t),function(e){n.d(t,"guid",function(){return c}),n.d(t,"getLoveConnection",function(){return a}),n.d(t,"getTableName",function(){return s}),n.d(t,"getWindow",function(){return i}),n.d(t,"getLoveStore",function(){return l});var r,o=n(/*! underscore */"underscore");r=function(){return(0|65536*(1+Math.random())).toString(16).substring(1)};var c=function(){return`${r()}${r()}-${r()}-${r()}-${r()}-${r()}${r()}${r()}`},a=function(e){return Object(o.result)(e,"loveConnection")||Object(o.result)(e.collection,"loveConnection")},s=function(e){return Object(o.result)(e,"tableName")||Object(o.result)(e.collection,"tableName")},i=function(){return Object(o.isUndefined)(window)?e:window},l=function(e){return Object(o.result)(e,"loveStore")||Object(o.result)(e.collection,"loveStore")}}.call(this,n(/*! ./../node_modules/webpack/buildin/global.js */"./node_modules/webpack/buildin/global.js"))},0:
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