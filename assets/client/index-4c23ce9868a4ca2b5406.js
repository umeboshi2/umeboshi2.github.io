webpackJsonp([1],{"4svf":function(e,t,n){"use strict";var r,o,i,a,u,s,l,c;r=n("aGLy"),n("y11e"),n("2mEY"),n("EarI"),n("SiCa"),u=n("X484"),n("HSzx"),n("qYnM"),o=n("EtUx"),l=n("7YgM"),c=new r.Model(l),i=n("H97n"),a=r.Radio.channel("global"),r.Radio.channel("messages"),s=new u({appConfig:i}),a.request("main:app:route"),s.on("before:start",function(){var e;return e=a.request("main:app:get-theme"),e=e||"vanilla",a.request("main:app:switch-theme",e)}),s.on("start",function(){}),s.start({state:{currentUser:null}}),e.exports=s},"7YgM":function(e,t){e.exports={name:"umeboshi2.github.io",version:"0.1.0",description:"Github Website",main:"index.js",scripts:{test:'echo "Error: no test specified" && exit 1'},author:"joseph.rawson.works@gmail.com",license:"UNLICENSED",devDependencies:{"amd-define-factory-patcher-loader":"^1.0.0","applet-bumblr":"github:umeboshi2/applet-bumblr","babel-core":"^6.26.0","babel-minify-webpack-plugin":"^0.3.0","babel-preset-env":"^1.6.1",bootstrap:"^3.3.7","chunk-manifest-webpack-plugin":"^1.1.2","clean-webpack-plugin":"^0.1.18","coffee-loader":"github:vladflip/coffee-loader#transpile-option",coffeescript:"^2.2.1","compression-webpack-plugin":"^1.1.6","css-loader":"^0.28.9","exports-loader":"^0.7.0","expose-loader":"^0.7.4","extract-text-webpack-plugin":"^3.0.2","file-loader":"^1.1.6","google-fonts-webpack-plugin":"^0.4.4",gulp:"^3.9.1","gulp-coffee":"^3.0.2","gulp-concat":"^2.6.1","gulp-nodemon":"^2.2.1","gulp-size":"^3.0.0","gulp-sourcemaps":"^2.6.4","gulp-uglify":"^3.0.0","gulp-util":"^3.0.8","imports-loader":"^0.7.1","js-beautify":"^1.7.5",octokat:"^0.9.2","raw-loader":"^0.5.1","resolve-url-loader":"^2.2.1","sass-loader":"^6.0.6",shelljs:"^0.8.1","stats-webpack-plugin":"^0.6.2","style-loader":"^0.20.2",tbirds:"^0.3.25","url-loader":"^0.6.2",webpack:"^3.11.0","webpack-bundle-tracker":"^0.2.1","webpack-manifest-plugin":"^1.3.2"}}},"CR+N":function(e,t,n){function r(e){var t=o[e];return t?n.e(t[1]).then(function(){return n(t[0])}):Promise.reject(new Error("Cannot find module '"+e+"'."))}var o={"./frontdoor/main":["dKNP",0],"./github/main":["DEP7",0]};r.keys=function(){return Object.keys(o)},r.id="CR+N",e.exports=r},EarI:function(e,t){function n(e){if(e=String(e),!(e.length>100)){var t=/^((?:\d+)?\-?\d?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(e);if(t){var n=parseFloat(t[1]);switch((t[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return n*p;case"weeks":case"week":case"w":return n*c;case"days":case"day":case"d":return n*l;case"hours":case"hour":case"hrs":case"hr":case"h":return n*s;case"minutes":case"minute":case"mins":case"min":case"m":return n*u;case"seconds":case"second":case"secs":case"sec":case"s":return n*a;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return n;default:return}}}}function r(e){var t=Math.abs(e);return t>=l?Math.round(e/l)+"d":t>=s?Math.round(e/s)+"h":t>=u?Math.round(e/u)+"m":t>=a?Math.round(e/a)+"s":e+"ms"}function o(e){var t=Math.abs(e);return t>=l?i(e,t,l,"day"):t>=s?i(e,t,s,"hour"):t>=u?i(e,t,u,"minute"):t>=a?i(e,t,a,"second"):e+" ms"}function i(e,t,n,r){var o=t>=1.5*n;return Math.round(e/n)+" "+r+(o?"s":"")}var a=1e3,u=60*a,s=60*u,l=24*s,c=7*l,p=365.25*l;e.exports=function(e,t){t=t||{};var i=typeof e;if("string"===i&&e.length>0)return n(e);if("number"===i&&!1===isNaN(e))return t.long?o(e):r(e);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))}},EtUx:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a,u,s,l,c;a=n("aGLy"),s=n("y11e"),c=n("2mEY"),n("EarI"),n("SiCa"),n("X484"),n("qYnM"),l=n("7YgM"),new a.Model(l),n("H97n"),a.Radio.channel("global"),a.Radio.channel("messages"),u=function(){var e=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),t}(s.View);return e.prototype.template=c.renderable(function(e){return".col-sm-2.col-sm-offset-10",".col-sm-2.col-sm-offset-1",c.div(".col-sm-10.col-sm-offset-1",function(){return c.table(".table",function(){return c.tr(function(){return c.td("Some message here"),c.td("Time expired for "+e.token.name),c.td("Version: "+e.version)})})})}),e}.call(void 0),e.exports=u},GPUo:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a,u,s,l,c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),p=function e(t,n,r){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,n);if(void 0===o){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,n,r)}if("value"in o)return o.value;var a=o.get;if(void 0!==a)return a.call(r)};n("4kSj"),l=n("rdLu"),a=n("aGLy"),n("y11e"),a.Radio.channel("global"),a.Radio.channel("messages"),u=a.Radio.channel("static-documents"),s=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),c(t,[{key:"url",value:function(){return"/assets/documents/"+this.id+".md"}},{key:"fetch",value:function(e){return e=l.extend(e||{},{dataType:"text"}),p(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"fetch",this).call(this,e)}},{key:"parse",value:function(e){return{content:e}}}]),t}(a.Model),u.reply("get-document",function(e){return new s({id:e})}),e.exports={StaticDocument:s}},GSVz:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a,u,s,l,c,p,f,h,y,d,b,v,g,m,w,_,O,k,j=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();a=n("4kSj"),u=n("aGLy"),f=n("y11e"),w=n("HWfR"),k=n("2mEY"),p=u.Radio.channel("global"),u.Radio.channel("messages"),d=function(){var e=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),t}(u.Model);return e.prototype.defaults={label:"App Label",url:"#app",single_applet:!1,applets:[],urls:[]},e}.call(void 0),b=function(){var e=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),t}(u.Collection);return e.prototype.model=d,e}.call(void 0),O=new b,p.reply("navbar-entries",function(){return O}),p.reply("new-navbar-entry",function(){return new d}),p.reply("add-navbar-entry",function(e){return O.add(e)}),p.reply("add-navbar-entries",function(e){return O.add(e)}),_=k.renderable(function(e){return k.button(".navbar-toggle",{type:"button","data-toggle":"collapse","data-target":"#"+e},function(){return k.span(".sr-only","Toggle Navigation"),k.span(".icon-bar"),k.span(".icon-bar"),k.span(".icon-bar")})}),s=function(){var e=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),j(t,[{key:"templateContext",value:function(){var e;return e=p.request("main:app:object"),{app:e,currentUser:e.getState("currentUser")}}},{key:"set_active",value:function(){return this.$el.addClass("active")}},{key:"unset_active",value:function(){return this.$el.removeClass("active"),this.$el.removeClass("open")}}]),t}(f.View);return e.prototype.model=d,e.prototype.tagName="li",e.prototype.ui={entry:".navbar-entry"},e.prototype.triggers={"click @ui.entry":"click:entry"},e}.call(void 0),m=function(){var e=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),t}(s);return e.prototype.template=k.renderable(function(e){return k.a(".navbar-entry",{href:e.url},e.label)}),e}.call(void 0),c=function(){var e=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),t}(s);return e.prototype.className="dropdown",e.prototype.template=k.renderable(function(e){return k.a(".dropdown-toggle",{role:"button","data-toggle":"dropdown"},function(){return k.text(e.label),k.b(".caret")}),k.ul(".dropdown-menu",function(){var t,n,r,o,i;for(o=e.menu,i=[],t=0,n=o.length;t<n;t++)null!=(r=o[t])&&r.needUser&&!e.currentUser||i.push(k.li(function(){return k.a(".navbar-entry",{href:r.url},r.label)}));return i})}),e}.call(void 0),v=function(){var e=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),j(t,[{key:"childView",value:function(e){return e.has("menu")&&e.get("menu")?c:m}},{key:"setAllInactive",value:function(){return this.children.each(function(e){return e.unset_active()})}},{key:"onChildviewClickEntry",value:function(e,t){return this.setAllInactive(),e.set_active(),this.navigateOnClickEntry(e,t)}},{key:"navigateOnClickEntry",value:function(e,t){var n,r,o;return o=t.target,n=a(o).attr("href"),""===n.split("/")[0]?window.location=n:(r=p.request("main-router"),r.navigate(n,{trigger:!0}))}}]),t}(f.CollectionView);return e.prototype.tagName="ul",e.prototype.className="nav navbar-nav nav-pills",e}.call(void 0),y=function(){var e=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),j(t,[{key:"onRender",value:function(){var e;return e=new v({collection:this.collection}),this.showChildView("list",e)}},{key:"setAllInactive",value:function(){var e;return e=this.getChildView("list"),e.setAllInactive()}}]),t}(f.View);return e.prototype.regions={list:"#navbar-entries",userMenu:"#user-menu",search:"#form-search-container"},e.prototype.template=k.renderable(function(e){return k.div("#navbar-view-collapse.collapse.navbar-collapse",function(){return k.div("#navbar-entries"),k.ul("#user-menu.nav.navbar-nav.navbar-right"),k.div("#form-search-container")})}),e}.call(void 0),g=function(){var e=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),t}(f.View);return e.prototype.template=k.renderable(function(e){return _("navbar-view-collapse"),k.a(".navbar-brand",{href:e.url},e.label)}),e.prototype.ui={brand:".navbar-brand"},e.prototype.triggers={"click @ui.brand":"click:brand"},e}.call(void 0),l=function(){var e=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),j(t,[{key:"onRender",value:function(){var e,t,n,r,o,i,a,s,l;if(this.model.get("hasUser"))for(e=p.request("main:app:object"),t=e.getState("currentUser"),s=[],l=this.model.get("navbarEntries"),i=0,a=l.length;i<a;i++)null!=(n=l[i])&&n.needUser&&!t||s.push(n);else s=this.model.get("navbarEntries");return r=new y({collection:new u.Collection(s)}),this.showChildView("entries",r),o=new g({model:new u.Model(this.model.get("brand"))}),this.showChildView("header",o)}},{key:"onChildviewClickBrand",value:function(e,t){var n;return n=this.getChildView("entries"),n.setAllInactive(),this.navigateOnClickEntry(e,t)}},{key:"navigateOnClickEntry",value:function(e,t){var n,r,o;return o=t.target,n=a(o).attr("href"),""===n.split("/")[0]?window.location=n:(r=p.request("main-router"),r.navigate(n,{trigger:!0}))}}]),t}(f.View);return e.prototype.template=k.renderable(function(e){return k.nav("#navbar-view.navbar.navbar-static-top.navbar-light.bg-primary",{xmlns:"http://www.w3.org/1999/xhtml","xml:lang":"en",role:"navigation"},function(){return k.div(".container",function(){return k.div(".navbar-header"),k.div("#navbar-entries")})})}),e.prototype.regions={header:".navbar-header",usermenu:"#user-menu",mainmenu:"#main-menu",entries:"#navbar-entries"},e}.call(void 0),h=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),j(t,[{key:"onBeforeStart",value:function(){var e,t;if(e=this.options.appConfig,t=this.options.parentApp.getView().getRegion("navbar"),this.setRegion(t),e.hasUser)return this.addChildApp("user-menu",{AppClass:e.userMenuApp,startWithParent:!0,appConfig:e,parentApp:this})}},{key:"onStart",value:function(){return this.initPage()}},{key:"initPage",value:function(){var e,t;return e=this.options.parentApp.options.appConfig,t=new l({model:new u.Model(e)}),this.showView(t)}}]),t}(w.App),e.exports=h},H97n:function(e,t,n){"use strict";var r,o;r=n("tpG2"),o={label:"Misc Applets",menu:[{label:"Themes",url:"#frontdoor/themes"}]},r.navbarEntries=[{label:"Bumblr",url:"#bumblr"},o],e.exports=r},HSzx:function(e,t,n){"use strict";e.exports=function(e){return 0===Object.keys(e).length&&e.constructor===Object}},HbAm:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a,u,s,l,c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),p=function e(t,n,r){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,n);if(void 0===o){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,n,r)}if("value"in o)return o.value;var a=o.get;if(void 0!==a)return a.call(r)};a=n("4kSj"),l=n("y11e"),s=Backbone.Radio.channel("global"),u=function(){var e=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),c(t,[{key:"getEl",value:function(e){var t;return t=a(e),t.attr("class","modal"),t}},{key:"show",value:function(e){return p(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"show",this).call(this,e),this.$el.modal({backdrop:this.backdrop,keyboard:this.keyboard}),this.$el.modal("show")}}]),t}(l.Region);return e.prototype.el="#modal",e.prototype.backdrop=!1,e.prototype.keyboard=!1,e}.call(void 0),s.reply("main:app:show-modal",function(e,t){var n,r,o;return n=s.request("main:app:object"),r=n.getView(),o=r.regions.modal,o.backdrop=!!(null!=t?t.backdrop:void 0),o.show(e)}),e.exports=u},IS1s:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a,u,s,l,c,p,f=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),h=[].indexOf;s=n("y11e"),u=Backbone.Radio.channel("global"),l=Backbone.Radio.channel("messages"),p={},u.reply("main:applet:unregister",function(e){return delete p[e]}),u.reply("main:applet:register",function(e,t){return p[e]=t}),u.reply("main:applet:get-applet",function(e){return p[e]}),c=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),f(t,[{key:"loadFrontDoor",value:function(){var e,t,r;return t=u.request("main:app:config"),e=(null!=t?t.frontdoorApplet:void 0)||"frontdoor",r=n("CR+N")("./"+e+"/main"),r.then(function(n){var r;if(r=new n({appConfig:t,isFrontdoorApplet:!0}),u.request("main:applet:register",e,r),r.start(),!Backbone.history.started)return Backbone.history.start()})}},{key:"_handle_route",value:function(e,t){var r,o;if(r=u.request("main:app:config"),e||(console.warn("No applet recognized",e),e="frontdoor"),h.call(Object.keys(r.appletRoutes),e)>=0&&(e=r.appletRoutes[e],console.log("Using defined appletRoute",e)),h.call(Object.keys(p),e)>=0)throw new Error("Unhandled applet path #"+e+"/"+t);return o=n("CR+N")("./"+e+"/main"),o.then(function(t){var n;return n=new t({appConfig:r}),u.request("main:applet:register",e,n),n.start(),Backbone.history.loadUrl()}).catch(function(n){if(n.message.startsWith("Cannot find module"))return l.request("warning","Bad route "+e+", "+t+"!!");if(n.message.startsWith("Unhandled applet"))return l.request("warning",n.message);throw n})}},{key:"routeApplet",value:function(e,t){var n;try{return this._handle_route(e,t)}catch(e){if(n=e,n.message.startsWith("Unhandled applet"))return l.request("warning",n.message)}}},{key:"directLink",value:function(e){}}]),t}(s.Object),a=function(){var e=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),f(t,[{key:"onRoute",value:function(e,t,n){var r;"directLink"===e&&(2===n.length?(r=null!==n[1]?"http"+n.join("?"):"http"+n[0],window.open(r,"_blank")):console.log("unhandled directLink"))}}]),t}(s.AppRouter);return e.prototype.appRoutes={"http*remainder":"directLink",":applet":"routeApplet",":applet/*path":"routeApplet"},e}.call(void 0),u.reply("main:app:route",function(){var e,t;return e=new c,t=new a({controller:e}),u.reply("main-controller",function(){return e}),u.reply("main-router",function(){return t})}),e.exports={RequireController:c,AppletRouter:a}},SiCa:function(e,t,n){"use strict";var r;r=n("aGLy"),e.exports=function(e){var t;return""===e.split("/")[0]?window.location=e:(t=new r.Router,t.navigate(e,{trigger:!0}))}},X484:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a,u,s,l,c,p,f,h,y,d=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();a=n("aGLy"),l=n("y11e"),h=n("HWfR"),n("2mEY"),c=n("u+5S"),p=n("GSVz"),s=n("oSBz"),u=a.Radio.channel("global"),f=function(){var e=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),t}(a.Model);return e.prototype.defaults={startHistory:!0,appConfig:{}},e}.call(void 0),u=a.Radio.channel("global"),y=function(){var e=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),d(t,[{key:"onBeforeStart",value:function(){var e,t,n,r=this;if(e=this.options.appConfig,u.reply("main:app:object",function(){return r}),u.reply("main:app:config",function(){return e}),this.setRegion(new l.Region({el:(null!=e?e.appRegion:void 0)||"body"})),t=!0,null!=e.useMessages&&!1===e.useMessages&&(t=!1),t&&this.addChildApp("messages",{AppClass:c,startWithParent:!0,parentApp:this}),n=!0,null!=e.useNavbar&&!1===e.useNavbar&&(n=!1),n)return this.addChildApp("navbar",{AppClass:p,startWithParent:!0,appConfig:e,parentApp:this})}},{key:"initPage",value:function(){var e,t,n;return t=this.options.appConfig,e=(null!=t?t.layout:void 0)||s,t.layoutOptions,n=new e(t.layoutOptions),this.showView(n)}},{key:"onStart",value:function(){var e;if(this.initPage(),this.getState("startHistory"))return e=u.request("main-controller"),e.loadFrontDoor()}}]),t}(h.App);return e.prototype.StateModel=f,e.prototype.options={appConfig:{}},e}.call(void 0),e.exports=y},oSBz:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a,u,s,l;u=n("y11e"),l=n("2mEY"),s=n("HbAm"),a=function(){var e=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),t}(u.View);return e.prototype.template=l.renderable(function(){return l.div("#navbar-view-container"),l.div(".container-fluid",function(){return l.div(".row",function(){return l.div(".col-sm-10.col-sm-offset-1",function(){return l.div("#messages")})}),l.div("#applet-content.row"),l.div("#footer.row")}),l.div("#modal")}),e.prototype.regions={messages:"#messages",navbar:"#navbar-view-container",modal:s,applet:"#applet-content",footer:"#footer"},e}.call(void 0),e.exports=a},"p2/H":function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a,u,s,l,c,p,f,h,y,d;for(a=n("aGLy"),a.Radio.channel("global"),l=a.Radio.channel("messages"),u=function(){var e=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),t}(a.Model);return e.prototype.defaults={level:"info"},e}.call(void 0),s=function(){var e=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),t}(a.Collection);return e.prototype.model=u,e}.call(void 0),y=new s,l.reply("messages",function(){return y}),c=function(e,t){var n,r,o=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:6e3;return r=new u({content:e,level:t,icon:o}),"danger"!==t&&(n=function(){return y.remove(r)},setTimeout(n,i)),y.add(r)},l.reply("display-message",function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"info",n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return console.warn("icon",n),c(e,t,n)}),d=["success","info","warning","danger"],p=0,f=d.length;p<f;p++)h=d[p],function(e){l.reply(e,function(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return c(t,e,n)})}(h);l.reply("delete-message",function(e){return y.remove(e)}),e.exports={BaseMessageCollection:s}},"qF/v":function(e,t,n){"use strict";var r;r=n("oSBz"),e.exports={appRegion:"body",layout:r,layoutOptions:{},useMessages:!0,useNavbar:!0,brand:{label:"TBirds",url:"#"},frontdoorApplet:"frontdoor",hasUser:!1,userMenuApp:void 0,needLogin:!1,loginUrl:"/#frontdoor/login",guestUserName:"Guest",navbarEntries:[],appletRoutes:{pages:"frontdoor"}}},qYnM:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a,u,s,l,c,p,f,h;a=n("4kSj"),n("rdLu"),u=n("aGLy"),p=n("y11e"),n("K3J8"),n("IS1s"),l=n("toVQ"),n("GPUo"),c=u.Radio.channel("global"),u.Radio.channel("messages"),c.reply("main:app:switch-theme",function(e){var t,n;return t="assets/stylesheets/bootstrap-"+e+".css",n=a('head link[href^="assets/stylesheets/bootstrap-"]'),n.attr("href",t)}),c.reply("main:app:set-theme",function(e){return localStorage.setItem("main-theme",e)}),c.reply("main:app:get-theme",function(){return localStorage.getItem("main-theme")}),f=function(e){var t,n,r,o;return n=encodeURIComponent(e.data),o=e.type+","+n,r=e.filename||"exported",t=document.createElement("a"),t.id=e.el_id||"exported-file-anchor",t.href=o,t.download=r,t.innerHTML="Download "+r,t.style.display="none",document.body.appendChild(t),t.click(),document.body.removeChild(t)},c.reply("export-to-file",function(e){return f(e)}),s=function(){var e=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),t}(p.View);return e.prototype.behaviors=[l],e.prototype.ui={close_btn:"#close-modal div"},e}.call(void 0),c.reply("main:app:BaseModalView",function(){return s}),h=function(e){var t,n,r=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return t=c.request("main:app:object"),n=t.getView().getRegion("modal"),n.backdrop=r,n.show(e)},c.reply("show-modal",function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return console.warn("show-modal",t),h(e,!1)}),e.exports={}},toVQ:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a,u,s,l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=function(e,t){if(!(e instanceof t))throw new Error("Bound instance method accessed before binding")};a=n("4kSj"),n("aGLy"),s=n("y11e"),u=function(){var e=function(e){function t(){r(this,t);var e=o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments));return e.keydownHandler=e.keydownHandler.bind(e),e}return i(t,e),l(t,[{key:"keydownHandler",value:function(e){if(c(this,t),27===e.keyCode)return this.ui.close_btn.children().click(),a("html").unbind("keydown",this.keydownHandler)}},{key:"onDomRefresh",value:function(){return a("html").keydown(this.keydownHandler)}},{key:"onBeforeDestroy",value:function(){return a("html").unbind("keydown",this.keydownHandler)}}]),t}(s.Behavior);return e.prototype.events={"click @ui.close_btn":"onBeforeDestroy"},e}.call(void 0),e.exports=u},tpG2:function(e,t,n){"use strict";var r;r=n("qF/v"),r.hasUser=!1,r.brand.label="Github Website",r.brand.url="#",r.authToken={},r.authToken.refreshInterval="5m",r.authToken.refreshIntervalMultiple=3,r.authToken.loginUrl="#frontdoor/login",r.appRegion="#root-div",e.exports=r},"u+5S":function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a,u,s,l,c,p,f,h,y,d=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();a=n("aGLy"),u=n("y11e"),f=n("HWfR"),y=n("2mEY"),a.Radio.channel("global"),s=a.Radio.channel("messages"),n("p2/H"),h=y.renderable(function(e){var t;return t=e.level,"error"===t&&(t="danger"),y.div(".alert.alert-"+t,function(){var t;return y.button(".close",{type:"button","aria-hidden":!0},function(){return y.raw("&times;")}),e.icon&&(t=e.icon.startsWith("fa-")?".fa."+e.icon:".glyphicon.glyphicon-"+e.icon,y.span(t),y.raw("&nbsp;&nbsp")),y.text(e.content)})}),l=function(){var e=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),d(t,[{key:"destroy_message",value:function(){return s.request("delete-message",this.model)}}]),t}(u.View);return e.prototype.template=y.renderable(function(e){return"function"==typeof e.content?e.content(e):h(e)}),e.prototype.ui={close_button:"button.close"},e.prototype.events={"click @ui.close_button":"destroy_message"},e}.call(void 0),p=function(){var e=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),t}(u.CollectionView);return e.prototype.childView=l,e}.call(void 0),c=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),d(t,[{key:"onBeforeStart",value:function(){return this.collection=s.request("messages"),this.setRegion(this.options.parentApp.getView().getRegion("messages"))}},{key:"onStart",value:function(){return this.initPage()}},{key:"initPage",value:function(){var e;return e=new p({collection:this.collection}),this.showView(e)}}]),t}(f.App),e.exports=c}},["4svf"]);