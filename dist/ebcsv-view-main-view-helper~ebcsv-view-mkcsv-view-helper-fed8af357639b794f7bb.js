(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{107:function(e,t,n){"use strict";var o,r,i,a,u=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();n(0),r=n(1),i=n(58),a=n(59),o=function(){var e=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.Behavior),u(t,[{key:"ui",value:function(){return{list:this.getOption("listContainer")}}},{key:"setMasonry",value:function(){var e,t;return e=this.getOption("listContainer"),t=this.getOption("masonryOptions"),this.view.masonry=new i(e,t)}},{key:"setMasonryLayout",value:function(){var e,t,n=this;return t=this.getOption("masonryOptions"),e=this.$(t.itemSelector),a(e,function(){return n.view.masonry.reloadItems(),n.view.masonry.layout()})}},{key:"onBeforeDestroy",value:function(){return this.view.masonry.destroy()}},{key:"onDomRefresh",value:function(){var e;if(this.setMasonry(),this.setMasonryLayout(),null!=(e=this.view)?e.afterDomRefresh:void 0)return this.view.afterDomRefresh()}}]),t}();return e.prototype.options={listContainer:".list-container",channel:"global",masonryOptions:{gutter:1,isInitLayout:!1,itemSelector:".item",columnWidth:10,horizontalOrder:!0}},e.prototype.regions={list:"@ui.list"},e}.call(void 0),e.exports=o},108:function(e,t,n){"use strict";var o,r,i,a,u,s,l,c,f=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function h(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}o=n(0),s=n(1),c=n(2);var m=n(51);m.make_field_input,m.make_field_select;var _=n(62);l=_.modal_close_button,u=o.Radio.channel("global"),o.Radio.channel("messages"),o.Radio.channel("ebcsv"),r=u.request("main:app:BaseModalView"),a=function(){var e=function(e){function t(){return p(this,t),d(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return h(t,r),t}();return e.prototype.template=c.renderable(function(e){return e.mainsection,c.div(".modal-dialog",function(){return c.div(".modal-content",function(){return c.div(".modal-body",function(){return c.img({src:e.image_src})}),c.div(".modal-footer",function(){return c.ul(".list-inline",function(){return"btn.btn-default.btn-sm",c.li("#close-modal",function(){return l("Close","check")})})})})})}),e}.call(void 0),i=function(e){function t(){return p(this,t),d(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return h(t,s.Behavior),f(t,[{key:"onShowImageModal",value:function(){var e;return e=new a({model:this.view.model}),u.request("show-modal",e)}}]),t}(),e.exports=i},110:function(e,t,n){"use strict";var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var u,s,l,c,f,p,d,h,m,_,g,y,v;u=n(3),l=n(0),n(1),n(58),v=n(2),n(10);var b=n(51);b.make_field_input,b.make_field_select;var w=n(62);y=w.modal_close_button,m=n(244),d=n(108),_=l.Radio.channel("global"),g=l.Radio.channel("messages"),s=l.Radio.channel("ebcsv"),c=_.request("main:app:BaseModalView"),h=function(){var e=function(e){function t(){return r(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,c),t}();return e.prototype.template=v.renderable(function(e){return e.mainsection,v.div(".modal-dialog.modal-lg",function(){return v.div(".modal-content",function(){return v.div(".modal-body",function(){var t;return t=e.src.replace("http://","//"),v.iframe({style:"width:97%;height:75vh;",src:t})}),v.div(".modal-footer",function(){return v.ul(".list-inline",function(){return"btn.btn-default.btn-sm",v.li("#close-modal",function(){return y("Close","check")})})})})})}),e}.call(void 0),p=function(){var e=function(e){function t(){return r(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,l.Marionette.View),o(t,[{key:"onDomRefresh",value:function(){return this.trigger("show:image")}}]),t}();return e.prototype.template=v.renderable(function(e){var t;return t=(t=e.image_src.replace("/lg/","/sm/")).replace("http://","//"),v.img({src:t})}),e.prototype.ui={image:"img"},e.prototype.triggers={"click @ui.image":"show:image:modal"},e.prototype.behaviors=[d],e}.call(void 0),f=function(){var e=function(e){function t(){r(this,t);var e=i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments));return e._parse_html=e._parse_html.bind(e),e}return a(t,l.Marionette.View),o(t,[{key:"mouse_enter_item",value:function(e){return this.ui.info_btn.show()}},{key:"mouse_leave_item",value:function(e){return this.ui.info_btn.hide()}},{key:"show_comic_json",value:function(e){var t;if("A"!==e.target.tagName)return t=new m({model:this.model}),_.request("show-modal",t)}},{key:"show_comic_page",value:function(e){var t,n;if(e.preventDefault(),"A"===(t=e.target).tagName)return n=new h({model:new l.Model({src:t.href})}),_.request("show-modal",n)}},{key:"_handleComicImage",value:function(e){var t,n,o,r=this;t=s.request("get-comic-url-model"),(o=(n=new t({url:e})).fetch({data:{url:e}})).then(function(t){return n.get("image_src")?r._show_comic_image(n,!1):r._get_comic_data(e,r._parse_html)}),o.fail(function(){return r._get_comic_data(e,r._parse_html)})}},{key:"_handleLocalUrls",value:function(e){var t,n;return(n=s.request("get-comic-image-urls"))[e]?(t=new l.Model({image_src:n[e],url:e}),this._show_comic_image(t,!1)):e?this._get_comic_data(e,this._parse_html):void 0}},{key:"onDomRefresh",value:function(){var e;return this.ui.info_btn.hide(),e=this.model.get("links").link.url,this._handleComicImage(e)}},{key:"_get_comic_data",value:function(e,t){var n;return console.log("_get_comic_data",e),new URL(e),(n=l.ajax({type:"GET",dataType:"html",url:"//cors-anywhere.herokuapp.com/"+e})).done(function(){return t(e,n.responseText)}),n.fail(function(){return g.request("warning","Couldn't get the info")})}},{key:"_parse_html",value:function(e,n){var o,r,i,a,l,c,f,p,d=this;for(function(e,t){if(!(e instanceof t))throw new Error("Bound instance method accessed before binding")}(this,t),f=[],a=0,c=(r=u.parseHTML(n)).length;a<c;a++)"LINK"===(i=r[a]).tagName&&"image_src"===i.rel&&f.push(i);return f.length>1&&g.request("warning","Too many links for this comic."),l=f[0].href,o=s.request("get-comic-url-model"),(p=new o({url:e,image_src:l})).save().done(function(){return d._show_comic_image(p,!1)})}},{key:"_set_local_images_url",value:function(e){return e.get("url"),e.get("image_src")}},{key:"_show_comic_image",value:function(e){var t;return(!(arguments.length>1&&void 0!==arguments[1])||arguments[1])&&this._set_local_images_url(e),t=new p({model:e}),this.showChildView("image",t)}},{key:"show_comic",value:function(){var e,t,n,o,r=this;return t=this.model.get("links"),o=t.link.url,new URL(o),(n=(e=s.request("clzpage-collection")).fetch({data:{where:{url:o}}})).fail(function(){var e;return e="There was a problem talking to the server",g.request("warning",e)}),n.done(function(){if(e.length>1&&g.request("warning",o+" is not unique!"),!e.length)return r._get_comic_data(o,r._add_comic_to_db)})}},{key:"get_comic_data",value:function(e){var t,n,o=this;return t=new URL(e),(n=l.ajax({type:"GET",dataType:"html",url:"/clzcore"+t.pathname})).done(function(){var e;return e=new l.Marionette.View({template:n.responseText}),o.showChildView("info",e)}),n.fail(function(){return g.request("warning","Couldn't get the info")})}}]),t}();return e.prototype.template=v.renderable(function(e){var t;return t=e.mainsection,v.div(".item.listview-list-entry.thumbnail.col-md-2",function(){return v.div(".comic-image",function(){return v.i(".fa.fa-spinner.fa-spin"),v.text("loading")}),v.div(".caption",function(){var n,o;return v.span(function(){return v.i(".info-button.fa.fa-info.fa-pull-left.btn.btn-default.btn-sm"),v.h5({style:"text-overflow: ellipsis;"},t.series.displayname+" #"+e.issue)}),n=(n=(null!=t?t.title:void 0)||(null!=e&&null!=(o=e.edition)?o.displayname:void 0))||v.strong("UNTITLED"),v.a(".clz-link",{href:""+e.links.link.url,target:"_blank"},n)})})}),e.prototype.ui={info_btn:".info-button",clz_link:".clz-link",item:".item",image:".comic-image"},e.prototype.regions={image:"@ui.image"},e.prototype.events={"click @ui.info_btn":"show_comic_json","click @ui.clz_link":"show_comic_page","mouseenter @ui.item":"mouse_enter_item","mouseleave @ui.item":"mouse_leave_item"},e.prototype.childViewTriggers={"show:image":"show:image"},e}.call(void 0),e.exports=f},129:function(e,t,n){"use strict";var o,r,i,a,u,s,l,c,f=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function h(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}n(3),o=n(0),n(1),n(58),n(59),c=n(2),u=n(112),n(10);var m=n(51);m.make_field_input,m.make_field_select,i=n(110),l=n(107),o.Radio.channel("global"),o.Radio.channel("messages"),o.Radio.channel("ebcsv"),s=function(e){function t(){return p(this,t),d(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return h(t,l),f(t,[{key:"onChildviewShowImage",value:function(e){return this.setMasonryLayout()}}]),t}(),r=function(){var e=function(e){function t(){return p(this,t),d(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return h(t,o.Marionette.CollectionView),t}();return e.prototype.childView=i,e.prototype.emptyView=u,e.prototype.childViewTriggers={"show:image":"show:image"},e}.call(void 0),a=function(){var e=function(e){function t(){return p(this,t),d(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return h(t,o.Marionette.View),f(t,[{key:"ui",value:function(){return{list:this.getOption("listContainer")}}},{key:"onRender",value:function(){var e;return e=new r({collection:this.collection}),this.showChildView("list",e)}}]),t}();return e.prototype.options={listContainer:"#comiclist-container"},e.prototype.regions={list:"@ui.list"},e.prototype.behaviors={HasLateImages:{behaviorClass:s,listContainer:"#comiclist-container",masonryOptions:{gutter:1,isInitLayout:!1,itemSelector:".item",columnWidth:10,horizontalOrder:!1}}},e.prototype.template=c.renderable(function(e){return c.div("#comiclist-container")}),e}.call(void 0),e.exports=a},244:function(e,t,n){"use strict";var o,r,i,a,u,s,l=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();n(4),o=n(0),n(1),s=n(2),i=n(57),n(56),n(52);var c=n(62);u=c.modal_close_button,r=n(22).default,o.Radio.channel("global"),o.Radio.channel("ebcsv"),a=function(){var e=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Marionette.View),l(t,[{key:"expand_view",value:function(){return this.expanded_view?(this.json_view.collapse(!0),this.expanded_view=!1,this.ui.expand_btn.text("Expand")):(this.json_view.expand(!0),this.expanded_view=!0,this.ui.expand_btn.text("Collapse"))}},{key:"onDomRefresh",value:function(){return console.log("onDomRefresh->jsonview"),this.expanded_view=!1,this.json_view=new i(this.model.toJSON()),this.ui.body.prepend(this.json_view.dom)}}]),t}();return e.prototype.behaviors=[r],e.prototype.template=s.renderable(function(e){var t;return t=e.mainsection,s.div(".modal-dialog",function(){return s.div(".modal-content",function(){return s.h3(t.series.displayname+" #"+t.issue),s.div(".modal-body",function(){return s.div(".expand-button.btn.btn-default","Expand"),s.div(".panel")}),s.div(".modal-footer",function(){return s.ul(".list-inline",function(){return"btn.btn-default.btn-sm",s.li("#close-modal",function(){return u("Close","check")})})})})})}),e.prototype.ui={body:".panel",expand_btn:".expand-button",close_btn:"#close-modal div"},e.prototype.events={"click @ui.expand_btn":"expand_view"},e}.call(void 0),e.exports=a},51:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.name_content_form=t.login_form=t.make_login_form=t.make_field_select=t.make_field_textarea=t.make_field_input=t.form_group_input_div=void 0;var o,r,i,a,u,s,l,c=p(n(2)),f=p(n(54));function p(e){return e&&e.__esModule?e:{default:e}}t.form_group_input_div=o=c.default.renderable(function(e){return c.default.div(".form-group",function(){var t,n,o;return c.default.label(".control-label",{for:e.input_id},e.label),o="#"+e.input_id+".form-control",t=e.input_attributes,n=c.default.input,(null!=e?e.input_type:void 0)?(n=c.default[e.input_type])(o,t,function(){return c.default.text(null!=e?e.content:void 0)}):n(o,t)})}),t.make_field_input=i=function(e){return c.default.renderable(function(t){return o({input_id:"input_"+e,label:(0,f.default)(e),input_attributes:{name:e,placeholder:e,value:t[e]}})})},t.make_field_textarea=u=function(e){return c.default.renderable(function(t){return o({input_id:"input_"+e,input_type:"textarea",label:(0,f.default)(e),input_attributes:{name:e,placeholder:e},content:t[e]})})},t.make_field_select=a=function(e,t){return c.default.renderable(function(n){return c.default.div(".form-group",function(){return c.default.label(".control-label",{for:"select_"+e}),(0,f.default)(e)}),c.default.select(".form-control",{name:"select_"+e},function(){var o,r,i,a;for(a=[],o=0,r=t.length;o<r;o++)i=t[o],n[e]===i?a.push(c.default.option({selected:null,value:i},i)):a.push(c.default.option({value:i},i));return a})})},t.make_login_form=s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"/login",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"POST";return c.default.renderable(function(n){return c.default.form({role:"form",method:t,action:e},function(){return o({input_id:"input_username",label:"User Name",input_attributes:{name:"username",placeholder:"User Name"}}),o({input_id:"input_password",label:"Password",input_attributes:{name:"password",type:"password",placeholder:"Type your password here...."}}),c.default.button(".btn.btn-secondary",{type:"submit"},"login")})})},t.login_form=r=s(),t.name_content_form=l=c.default.renderable(function(e){return o({input_id:"input_name",label:"Name",input_attributes:{name:"name",placeholder:"Name"}}),o({input_id:"input_content",input_type:c.default.textarea,label:"Content",input_attributes:{name:"content",placeholder:"..."}}),c.default.input(".btn.btn-secondary.btn-sm",{type:"submit",value:"Add"})}),t.form_group_input_div=o,t.make_field_input=i,t.make_field_textarea=u,t.make_field_select=a,t.make_login_form=s,t.login_form=r,t.name_content_form=l},59:function(e,t,n){var o,r;
/*!
 * imagesLoaded v4.1.4
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */
/*!
 * imagesLoaded v4.1.4
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */
!function(i,a){"use strict";o=[n(66)],void 0===(r=function(e){return function(e,t){var n=e.jQuery,o=e.console;function r(e,t){for(var n in t)e[n]=t[n];return e}var i=Array.prototype.slice;function a(e,t,u){if(!(this instanceof a))return new a(e,t,u);var s=e;"string"==typeof e&&(s=document.querySelectorAll(e)),s?(this.elements=function(e){if(Array.isArray(e))return e;if("object"==typeof e&&"number"==typeof e.length)return i.call(e);return[e]}(s),this.options=r({},this.options),"function"==typeof t?u=t:r(this.options,t),u&&this.on("always",u),this.getImages(),n&&(this.jqDeferred=new n.Deferred),setTimeout(this.check.bind(this))):o.error("Bad element for imagesLoaded "+(s||e))}a.prototype=Object.create(t.prototype),a.prototype.options={},a.prototype.getImages=function(){this.images=[],this.elements.forEach(this.addElementImages,this)},a.prototype.addElementImages=function(e){"IMG"==e.nodeName&&this.addImage(e),!0===this.options.background&&this.addElementBackgroundImages(e);var t=e.nodeType;if(t&&u[t]){for(var n=e.querySelectorAll("img"),o=0;o<n.length;o++){var r=n[o];this.addImage(r)}if("string"==typeof this.options.background){var i=e.querySelectorAll(this.options.background);for(o=0;o<i.length;o++){var a=i[o];this.addElementBackgroundImages(a)}}}};var u={1:!0,9:!0,11:!0};function s(e){this.img=e}function l(e,t){this.url=e,this.element=t,this.img=new Image}return a.prototype.addElementBackgroundImages=function(e){var t=getComputedStyle(e);if(t)for(var n=/url\((['"])?(.*?)\1\)/gi,o=n.exec(t.backgroundImage);null!==o;){var r=o&&o[2];r&&this.addBackground(r,e),o=n.exec(t.backgroundImage)}},a.prototype.addImage=function(e){var t=new s(e);this.images.push(t)},a.prototype.addBackground=function(e,t){var n=new l(e,t);this.images.push(n)},a.prototype.check=function(){var e=this;function t(t,n,o){setTimeout(function(){e.progress(t,n,o)})}this.progressedCount=0,this.hasAnyBroken=!1,this.images.length?this.images.forEach(function(e){e.once("progress",t),e.check()}):this.complete()},a.prototype.progress=function(e,t,n){this.progressedCount++,this.hasAnyBroken=this.hasAnyBroken||!e.isLoaded,this.emitEvent("progress",[this,e,t]),this.jqDeferred&&this.jqDeferred.notify&&this.jqDeferred.notify(this,e),this.progressedCount==this.images.length&&this.complete(),this.options.debug&&o&&o.log("progress: "+n,e,t)},a.prototype.complete=function(){var e=this.hasAnyBroken?"fail":"done";if(this.isComplete=!0,this.emitEvent(e,[this]),this.emitEvent("always",[this]),this.jqDeferred){var t=this.hasAnyBroken?"reject":"resolve";this.jqDeferred[t](this)}},s.prototype=Object.create(t.prototype),s.prototype.check=function(){this.getIsImageComplete()?this.confirm(0!==this.img.naturalWidth,"naturalWidth"):(this.proxyImage=new Image,this.proxyImage.addEventListener("load",this),this.proxyImage.addEventListener("error",this),this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.proxyImage.src=this.img.src)},s.prototype.getIsImageComplete=function(){return this.img.complete&&this.img.naturalWidth},s.prototype.confirm=function(e,t){this.isLoaded=e,this.emitEvent("progress",[this,this.img,t])},s.prototype.handleEvent=function(e){var t="on"+e.type;this[t]&&this[t](e)},s.prototype.onload=function(){this.confirm(!0,"onload"),this.unbindEvents()},s.prototype.onerror=function(){this.confirm(!1,"onerror"),this.unbindEvents()},s.prototype.unbindEvents=function(){this.proxyImage.removeEventListener("load",this),this.proxyImage.removeEventListener("error",this),this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},l.prototype=Object.create(s.prototype),l.prototype.check=function(){this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.img.src=this.url,this.getIsImageComplete()&&(this.confirm(0!==this.img.naturalWidth,"naturalWidth"),this.unbindEvents())},l.prototype.unbindEvents=function(){this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},l.prototype.confirm=function(e,t){this.isLoaded=e,this.emitEvent("progress",[this,this.element,t])},a.makeJQueryPlugin=function(t){(t=t||e.jQuery)&&((n=t).fn.imagesLoaded=function(e,t){return new a(this,e,t).jqDeferred.promise(n(this))})},a.makeJQueryPlugin(),a}(i,e)}.apply(t,o))||(e.exports=r)}("undefined"!=typeof window?window:this)},62:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.dropdown_toggle=t.navbar_collapse_button=t.modal_close_button=t.divbutton=t.spanbutton=void 0;var o,r,i,a,u,s,l=n(2),c=(o=l)&&o.__esModule?o:{default:o};t.spanbutton=s=c.default.component(function(e,t,n){return c.default.span(e+".btn.btn-secondary.btn-sm",n)}),t.divbutton=r=c.default.component(function(e,t,n){return c.default.div(e+".btn.btn-secondary.btn-sm",n)}),t.modal_close_button=a=c.default.renderable(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Close",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"close";return c.default.div(".btn.btn-secondary.btn-sm",{"data-dismiss":"modal"},function(){return c.default.h4(".modal-title",function(){return c.default.i(".fa.fa-"+t),c.default.text(e)})})}),t.navbar_collapse_button=u=c.default.renderable(function(e){return c.default.button(".navbar-toggle",{type:"button","data-toggle":"collapse","data-target":"#"+e},function(){return c.default.span(".sr-only","Toggle Navigation"),c.default.span(".icon-bar"),c.default.span(".icon-bar"),c.default.span(".icon-bar")})}),t.dropdown_toggle=i=c.default.component(function(e,t,n){return c.default.a(e+".dropdown-toggle",{href:t.href,"data-toggle":"dropdown"},n)}),t.spanbutton=s,t.divbutton=r,t.modal_close_button=a,t.navbar_collapse_button=u,t.dropdown_toggle=i}}]);
//# sourceMappingURL=ebcsv-view-main-view-helper~ebcsv-view-mkcsv-view-helper-fed8af357639b794f7bb.js.map