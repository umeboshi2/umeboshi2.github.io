(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{105:function(e,t,n){var i,o,r,a,s,l,u,c,d,m;n(4),i=n(1),n(3),n(50),n(52),m=n(2),s=n(65),n(13),({make_field_input:c,make_field_select:d}=n(47)),r=n(95),u=n(90),i.Radio.channel("global"),i.Radio.channel("messages"),i.Radio.channel("ebcsv"),l=class extends u{onChildviewShowImage(e){return this.setMasonryLayout()}},o=function(){class e extends i.Marionette.CollectionView{}return e.prototype.childView=r,e.prototype.emptyView=s,e.prototype.childViewTriggers={"show:image":"show:image"},e}.call(this),a=function(){class e extends i.Marionette.View{ui(){return{list:this.getOption("listContainer")}}onRender(){var e;return e=new o({collection:this.collection}),this.showChildView("list",e)}}return e.prototype.options={listContainer:"#comiclist-container"},e.prototype.regions={list:"@ui.list"},e.prototype.behaviors={HasLateImages:{behaviorClass:l,listContainer:"#comiclist-container",masonryOptions:{gutter:1,isInitLayout:!1,itemSelector:".item",columnWidth:10,horizontalOrder:!1}}},e.prototype.template=m.renderable(function(e){return m.div("#comiclist-container")}),e}.call(this),e.exports=a},146:function(e,t,n){var i,o,r,a,s,l;n(7),i=n(1),n(3),l=n(2),r=n(72),n(71),n(48),({modal_close_button:s}=n(53)),o=n(23).default,i.Radio.channel("global"),i.Radio.channel("ebcsv"),a=function(){class e extends i.Marionette.View{expand_view(){return this.expanded_view?(this.json_view.collapse(!0),this.expanded_view=!1,this.ui.expand_btn.text("Expand")):(this.json_view.expand(!0),this.expanded_view=!0,this.ui.expand_btn.text("Collapse"))}onDomRefresh(){return console.log("onDomRefresh->jsonview"),this.expanded_view=!1,this.json_view=new r(this.model.toJSON()),this.ui.body.prepend(this.json_view.dom)}}return e.prototype.behaviors=[o],e.prototype.template=l.renderable(function(e){var t;return t=e.mainsection,l.div(".modal-dialog",function(){return l.div(".modal-content",function(){return l.h3(`${t.series.displayname} #${t.issue}`),l.div(".modal-body",function(){return l.div(".expand-button.btn.btn-default","Expand"),l.div(".panel")}),l.div(".modal-footer",function(){return l.ul(".list-inline",function(){return"btn.btn-default.btn-sm",l.li("#close-modal",function(){return s("Close","check")})})})})})}),e.prototype.ui={body:".panel",expand_btn:".expand-button",close_btn:"#close-modal div"},e.prototype.events={"click @ui.expand_btn":"expand_view"},e}.call(this),e.exports=a},47:function(e,t,n){"use strict";n.r(t),n.d(t,"form_group_input_div",function(){return i}),n.d(t,"make_field_input",function(){return r}),n.d(t,"make_field_textarea",function(){return s}),n.d(t,"make_field_select",function(){return a}),n.d(t,"make_login_form",function(){return l}),n.d(t,"login_form",function(){return o}),n.d(t,"name_content_form",function(){return u});var i,o,r,a,s,l,u,c=n(2),d=n.n(c),m=n(49);i=d.a.renderable(function(e){return d.a.div(".form-group",function(){var t,n,i;return d.a.label(".control-label",{for:e.input_id},e.label),i=`#${e.input_id}.form-control`,t=e.input_attributes,n=d.a.input,(null!=e?e.input_type:void 0)?(n=d.a[e.input_type])(i,t,function(){return d.a.text(null!=e?e.content:void 0)}):n(i,t)})}),r=function(e){return d.a.renderable(function(t){return i({input_id:`input_${e}`,label:Object(m.default)(e),input_attributes:{name:e,placeholder:e,value:t[e]}})})},s=function(e){return d.a.renderable(function(t){return i({input_id:`input_${e}`,input_type:"textarea",label:Object(m.default)(e),input_attributes:{name:e,placeholder:e},content:t[e]})})},a=function(e,t){return d.a.renderable(function(n){return d.a.div(".form-group",function(){return d.a.label(".control-label",{for:`select_${e}`}),Object(m.default)(e)}),d.a.select(".form-control",{name:`select_${e}`},function(){var i,o,r,a;for(a=[],i=0,o=t.length;i<o;i++)r=t[i],n[e]===r?a.push(d.a.option({selected:null,value:r},r)):a.push(d.a.option({value:r},r));return a})})},o=(l=function(e="/login",t="POST"){return d.a.renderable(function(n){return d.a.form({role:"form",method:t,action:e},function(){return i({input_id:"input_username",label:"User Name",input_attributes:{name:"username",placeholder:"User Name"}}),i({input_id:"input_password",label:"Password",input_attributes:{name:"password",type:"password",placeholder:"Type your password here...."}}),d.a.button(".btn.btn-secondary",{type:"submit"},"login")})})})(),u=d.a.renderable(function(e){return i({input_id:"input_name",label:"Name",input_attributes:{name:"name",placeholder:"Name"}}),i({input_id:"input_content",input_type:d.a.textarea,label:"Content",input_attributes:{name:"content",placeholder:"..."}}),d.a.input(".btn.btn-secondary.btn-sm",{type:"submit",value:"Add"})})},52:function(e,t,n){var i,o;
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
!function(r,a){"use strict";i=[n(64)],void 0===(o=function(e){return function(e,t){var n=e.jQuery,i=e.console;function o(e,t){for(var n in t)e[n]=t[n];return e}var r=Array.prototype.slice;function a(e,t,s){if(!(this instanceof a))return new a(e,t,s);var l=e;"string"==typeof e&&(l=document.querySelectorAll(e)),l?(this.elements=function(e){if(Array.isArray(e))return e;if("object"==typeof e&&"number"==typeof e.length)return r.call(e);return[e]}(l),this.options=o({},this.options),"function"==typeof t?s=t:o(this.options,t),s&&this.on("always",s),this.getImages(),n&&(this.jqDeferred=new n.Deferred),setTimeout(this.check.bind(this))):i.error("Bad element for imagesLoaded "+(l||e))}a.prototype=Object.create(t.prototype),a.prototype.options={},a.prototype.getImages=function(){this.images=[],this.elements.forEach(this.addElementImages,this)},a.prototype.addElementImages=function(e){"IMG"==e.nodeName&&this.addImage(e),!0===this.options.background&&this.addElementBackgroundImages(e);var t=e.nodeType;if(t&&s[t]){for(var n=e.querySelectorAll("img"),i=0;i<n.length;i++){var o=n[i];this.addImage(o)}if("string"==typeof this.options.background){var r=e.querySelectorAll(this.options.background);for(i=0;i<r.length;i++){var a=r[i];this.addElementBackgroundImages(a)}}}};var s={1:!0,9:!0,11:!0};function l(e){this.img=e}function u(e,t){this.url=e,this.element=t,this.img=new Image}return a.prototype.addElementBackgroundImages=function(e){var t=getComputedStyle(e);if(t)for(var n=/url\((['"])?(.*?)\1\)/gi,i=n.exec(t.backgroundImage);null!==i;){var o=i&&i[2];o&&this.addBackground(o,e),i=n.exec(t.backgroundImage)}},a.prototype.addImage=function(e){var t=new l(e);this.images.push(t)},a.prototype.addBackground=function(e,t){var n=new u(e,t);this.images.push(n)},a.prototype.check=function(){var e=this;function t(t,n,i){setTimeout(function(){e.progress(t,n,i)})}this.progressedCount=0,this.hasAnyBroken=!1,this.images.length?this.images.forEach(function(e){e.once("progress",t),e.check()}):this.complete()},a.prototype.progress=function(e,t,n){this.progressedCount++,this.hasAnyBroken=this.hasAnyBroken||!e.isLoaded,this.emitEvent("progress",[this,e,t]),this.jqDeferred&&this.jqDeferred.notify&&this.jqDeferred.notify(this,e),this.progressedCount==this.images.length&&this.complete(),this.options.debug&&i&&i.log("progress: "+n,e,t)},a.prototype.complete=function(){var e=this.hasAnyBroken?"fail":"done";if(this.isComplete=!0,this.emitEvent(e,[this]),this.emitEvent("always",[this]),this.jqDeferred){var t=this.hasAnyBroken?"reject":"resolve";this.jqDeferred[t](this)}},l.prototype=Object.create(t.prototype),l.prototype.check=function(){this.getIsImageComplete()?this.confirm(0!==this.img.naturalWidth,"naturalWidth"):(this.proxyImage=new Image,this.proxyImage.addEventListener("load",this),this.proxyImage.addEventListener("error",this),this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.proxyImage.src=this.img.src)},l.prototype.getIsImageComplete=function(){return this.img.complete&&this.img.naturalWidth},l.prototype.confirm=function(e,t){this.isLoaded=e,this.emitEvent("progress",[this,this.img,t])},l.prototype.handleEvent=function(e){var t="on"+e.type;this[t]&&this[t](e)},l.prototype.onload=function(){this.confirm(!0,"onload"),this.unbindEvents()},l.prototype.onerror=function(){this.confirm(!1,"onerror"),this.unbindEvents()},l.prototype.unbindEvents=function(){this.proxyImage.removeEventListener("load",this),this.proxyImage.removeEventListener("error",this),this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},u.prototype=Object.create(l.prototype),u.prototype.check=function(){this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.img.src=this.url,this.getIsImageComplete()&&(this.confirm(0!==this.img.naturalWidth,"naturalWidth"),this.unbindEvents())},u.prototype.unbindEvents=function(){this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},u.prototype.confirm=function(e,t){this.isLoaded=e,this.emitEvent("progress",[this,this.element,t])},a.makeJQueryPlugin=function(t){(t=t||e.jQuery)&&((n=t).fn.imagesLoaded=function(e,t){return new a(this,e,t).jqDeferred.promise(n(this))})},a.makeJQueryPlugin(),a}(r,e)}.apply(t,i))||(e.exports=o)}("undefined"!=typeof window?window:this)},53:function(e,t,n){"use strict";n.r(t),n.d(t,"spanbutton",function(){return s}),n.d(t,"divbutton",function(){return i}),n.d(t,"modal_close_button",function(){return r}),n.d(t,"navbar_collapse_button",function(){return a}),n.d(t,"dropdown_toggle",function(){return o});var i,o,r,a,s,l=n(2),u=n.n(l);s=u.a.component(function(e,t,n){return u.a.span(`${e}.btn.btn-secondary.btn-sm`,n)}),i=u.a.component(function(e,t,n){return u.a.div(`${e}.btn.btn-secondary.btn-sm`,n)}),r=u.a.renderable(function(e="Close",t="close"){return u.a.div(".btn.btn-secondary.btn-sm",{"data-dismiss":"modal"},function(){return u.a.h4(".modal-title",function(){return u.a.i(`.fa.fa-${t}`),u.a.text(e)})})}),a=u.a.renderable(function(e){return u.a.button(".navbar-toggle",{type:"button","data-toggle":"collapse","data-target":`#${e}`},function(){return u.a.span(".sr-only","Toggle Navigation"),u.a.span(".icon-bar"),u.a.span(".icon-bar"),u.a.span(".icon-bar")})}),o=u.a.component(function(e,t,n){return u.a.a(`${e}.dropdown-toggle`,{href:t.href,"data-toggle":"dropdown"},n)})},90:function(e,t,n){var i,o,r,a;n(1),o=n(3),r=n(50),a=n(52),i=function(){class e extends o.Behavior{ui(){return{list:this.getOption("listContainer")}}setMasonry(){var e,t;return e=this.getOption("listContainer"),t=this.getOption("masonryOptions"),this.view.masonry=new r(e,t)}setMasonryLayout(){var e,t;return t=this.getOption("masonryOptions"),e=this.$(t.itemSelector),a(e,()=>(this.view.masonry.reloadItems(),this.view.masonry.layout()))}onBeforeDestroy(){return this.view.masonry.destroy()}onDomRefresh(){var e;if(this.setMasonry(),this.setMasonryLayout(),null!=(e=this.view)?e.afterDomRefresh:void 0)return this.view.afterDomRefresh()}}return e.prototype.options={listContainer:".list-container",channel:"global",masonryOptions:{gutter:1,isInitLayout:!1,itemSelector:".item",columnWidth:10,horizontalOrder:!0}},e.prototype.regions={list:"@ui.list"},e}.call(this),e.exports=i},91:function(e,t,n){var i,o,r,a,s,l,u,c,d,m;i=n(1),l=n(3),m=n(2),({make_field_input:u,make_field_select:c}=n(47)),({modal_close_button:d}=n(53)),s=i.Radio.channel("global"),i.Radio.channel("messages"),i.Radio.channel("ebcsv"),o=s.request("main:app:BaseModalView"),a=function(){class e extends o{}return e.prototype.template=m.renderable(function(e){return e.mainsection,m.div(".modal-dialog",function(){return m.div(".modal-content",function(){return m.div(".modal-body",function(){return m.img({src:e.image_src})}),m.div(".modal-footer",function(){return m.ul(".list-inline",function(){return"btn.btn-default.btn-sm",m.li("#close-modal",function(){return d("Close","check")})})})})})}),e}.call(this),r=class extends l.Behavior{onShowImageModal(){var e;return e=new a({model:this.view.model}),s.request("show-modal",e)}},e.exports=r},95:function(e,t,n){var i,o,r,a,s,l,u,c,d,m,h,p,f,g,_,v=function(e,t){if(!(e instanceof t))throw new Error("Bound instance method accessed before binding")};i=n(4),r=n(1),n(3),n(50),_=n(2),n(13),({make_field_input:p,make_field_select:f}=n(47)),({modal_close_button:g}=n(53)),d=n(146),u=n(91),m=r.Radio.channel("global"),h=r.Radio.channel("messages"),o=r.Radio.channel("ebcsv"),a=m.request("main:app:BaseModalView"),c=function(){class e extends a{}return e.prototype.template=_.renderable(function(e){return e.mainsection,_.div(".modal-dialog.modal-lg",function(){return _.div(".modal-content",function(){return _.div(".modal-body",function(){var t;return t=e.src.replace("http://","//"),_.iframe({style:"width:97%;height:75vh;",src:t})}),_.div(".modal-footer",function(){return _.ul(".list-inline",function(){return"btn.btn-default.btn-sm",_.li("#close-modal",function(){return g("Close","check")})})})})})}),e}.call(this),l=function(){class e extends r.Marionette.View{onDomRefresh(){return this.trigger("show:image")}}return e.prototype.template=_.renderable(function(e){var t;return t=(t=e.image_src.replace("/lg/","/sm/")).replace("http://","//"),_.img({src:t})}),e.prototype.ui={image:"img"},e.prototype.triggers={"click @ui.image":"show:image:modal"},e.prototype.behaviors=[u],e}.call(this),s=function(){class e extends r.Marionette.View{constructor(){super(...arguments),this._parse_html=this._parse_html.bind(this)}mouse_enter_item(e){return this.ui.info_btn.show()}mouse_leave_item(e){return this.ui.info_btn.hide()}show_comic_json(e){var t;if("A"!==e.target.tagName)return t=new d({model:this.model}),m.request("show-modal",t)}show_comic_page(e){var t,n;if(e.preventDefault(),"A"===(t=e.target).tagName)return n=new c({model:new r.Model({src:t.href})}),m.request("show-modal",n)}_handleComicImage(e){var t,n,i;t=o.request("get-comic-url-model"),(i=(n=new t({url:e})).fetch({data:{url:e}})).then(t=>{return n.get("image_src")?this._show_comic_image(n,!1):this._get_comic_data(e,this._parse_html)}),i.fail(()=>this._get_comic_data(e,this._parse_html))}_handleLocalUrls(e){var t,n;return(n=o.request("get-comic-image-urls"))[e]?(t=new r.Model({image_src:n[e],url:e}),this._show_comic_image(t,!1)):e?this._get_comic_data(e,this._parse_html):void 0}onDomRefresh(){var e;return this.ui.info_btn.hide(),e=this.model.get("links").link.url,this._handleComicImage(e)}_get_comic_data(e,t){var n;return console.log("_get_comic_data",e),new URL(e),(n=r.ajax({type:"GET",dataType:"html",url:`//cors-anywhere.herokuapp.com/${e}`})).done(function(){return t(e,n.responseText)}),n.fail(function(){return h.request("warning","Couldn't get the info")})}_parse_html(t,n){var r,a,s,l,u,c,d,m;for(v(this,e),d=[],l=0,c=(a=i.parseHTML(n)).length;l<c;l++)"LINK"===(s=a[l]).tagName&&"image_src"===s.rel&&d.push(s);return d.length>1&&h.request("warning","Too many links for this comic."),u=d[0].href,r=o.request("get-comic-url-model"),(m=new r({url:t,image_src:u})).save().done(()=>this._show_comic_image(m,!1))}_set_local_images_url(e){return e.get("url"),e.get("image_src")}_show_comic_image(e,t=!0){var n;return t&&this._set_local_images_url(e),n=new l({model:e}),this.showChildView("image",n)}show_comic(){var e,t,n,i;return t=this.model.get("links"),i=t.link.url,new URL(i),(n=(e=o.request("clzpage-collection")).fetch({data:{where:{url:i}}})).fail(function(){var e;return e="There was a problem talking to the server",h.request("warning",e)}),n.done(()=>{if(e.length>1&&h.request("warning",`${i} is not unique!`),!e.length)return this._get_comic_data(i,this._add_comic_to_db)})}get_comic_data(e){var t,n;return t=new URL(e),(n=r.ajax({type:"GET",dataType:"html",url:`/clzcore${t.pathname}`})).done(()=>{var e;return e=new r.Marionette.View({template:n.responseText}),this.showChildView("info",e)}),n.fail(function(){return h.request("warning","Couldn't get the info")})}}return e.prototype.template=_.renderable(function(e){var t;return t=e.mainsection,_.div(".item.listview-list-entry.thumbnail.col-sm-2",function(){return _.div(".comic-image",function(){return _.i(".fa.fa-spinner.fa-spin"),_.text("loading")}),_.div(".caption",function(){var n,i;return _.span(function(){return _.i(".info-button.fa.fa-info.fa-pull-left.btn.btn-default.btn-sm"),_.h5({style:"text-overflow: ellipsis;"},`${t.series.displayname} #${e.issue}`)}),n=(n=(null!=t?t.title:void 0)||(null!=e&&null!=(i=e.edition)?i.displayname:void 0))||_.strong("UNTITLED"),_.a(".clz-link",{href:`${e.links.link.url}`,target:"_blank"},n)})})}),e.prototype.ui={info_btn:".info-button",clz_link:".clz-link",item:".item",image:".comic-image"},e.prototype.regions={image:"@ui.image"},e.prototype.events={"click @ui.info_btn":"show_comic_json","click @ui.clz_link":"show_comic_page","mouseenter @ui.item":"mouse_enter_item","mouseleave @ui.item":"mouse_leave_item"},e.prototype.childViewTriggers={"show:image":"show:image"},e}.call(this),e.exports=s}}]);