(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{141:function(e,t,n){var r,o;n(1),o=n(3),n(2),r=class extends o.Behavior{onSetHeader(e){return this.ui.header.text(e)}},e.exports=r},199:function(e,t,n){var r,o,i,a,s,l,c,u,d,h,p,m,f,g,v,b,y,w,_,k,C,I,E,x,O=[].indexOf;y=n(7),o=n(1),g=n(3),n(50),n(52),E=n(2),u=n(65),b=n(55),n(13),({make_field_input:C,make_field_select:I}=n(47)),({form_group_input_div:w}=n(47)),p=n(90),h=n(91),d=n(141),f=o.Radio.channel("global"),v=o.Radio.channel("messages"),r=o.Radio.channel("ebcsv"),x=[{id:"server",label:"Server Images",url:"#ebcsv",icon:".fa.fa-server"},{id:"browser",label:"Browser Images",url:"#ebcsv",icon:".fa.fa-internet-explorer"}],l=function(){class e extends b{onChildviewToolbarEntryClicked(e){return this.trigger(`toolbar:${e.model.id}:click`,e),console.log("onChildviewToolbarEntryClicked",e.model.id)}onDomRefresh(){var e;return console.log("onDomRefresh",this.regions),e=this.getChildView("entries").$el,console.log("el is",e),e.removeClass("btn-group-justified")}}return e.prototype.options={entryTemplate:E.renderable(function(e){return E.i(e.icon),E.text(" "),E.text(e.label)})},e}.call(this),a=function(){class e extends g.View{}return e.prototype.ui={image:"img"},e.prototype.triggers={"click @ui.image":"show:image:modal"},e.prototype.behaviors=[h],e.prototype.template=E.renderable(function(e){var t;return t=(t=e.image_src.replace("/lg/","/sm/")).replace("http://","//"),E.div(".item",function(){return E.img({src:t})})}),e}.call(this),i=function(){class e extends g.CollectionView{}return e.prototype.childView=a,e.prototype.emptyView=u,e}.call(this),_={browser:[{id:"destroy",label:"Delete All",icon:".fa.fa-erase"}],server:[{id:"backup",label:"Backup",icon:".fa.fa-download"},{id:"restore",label:"Restore",icon:".fa.fa-upload"}]},m=function(){class e extends b{onChildviewToolbarEntryClicked(){}}return e.prototype.childViewTriggers={"toolbar:entry:clicked":"toolbar:entry:clicked"},e}.call(this),k=".list-container",s=function(){class e extends g.View{ui(){return{toolbar:".toolbar",list:k,header:".listview-header"}}onRender(){var e,t,n;return t=new i({collection:this.collection}),this.showChildView("list",t),e=this.getOption("cacheType"),n=new m({collection:new o.Collection(_[e]),cacheType:e}),this.showChildView("toolbar",n),this.triggerMethod("set:header",`${this.collection.length} images stored in the ${this.getOption("cacheType")}`)}onChildviewToolbarEntryClicked(e){var t,n;return console.log("a button pressed",e),console.log(`${this.getOption("cacheType")} toolbar`),t=this.getOption("cacheType"),n=["browser","server"],O.call(n,t)>=0?this[`${t}ButtonClicked`](e):this.toolbarButtonClicked(e)}toolbarButtonClicked(e){return console.warn("we don't have a cacheType on this toolbar")}browserButtonClicked(e){if("destroy"===e.model.id)return this.destroyLocalImages()}serverButtonClicked(e){var t;return"backup"===(t=e.model.id)?this.backupServerImages():"restore"===t?this.restoreServerImages():void 0}backupServerImages(){var e;return(e=this.collection.fetch()).done(()=>{var e,t,n,r,o,i;for(n=[],e=0,r=(i=this.collection.toJSON()).length;e<r;e++)delete(t=i[e]).id,n.push(t);return console.log("ITEMS",n),o={type:"data:text/json;charset=utf-8",data:JSON.stringify({items:n}),el_id:"exported-urls-anchor",filename:"url-backup.json"},f.request("export-to-file",o)}),e.fail(function(){return v.request("danger","Failed to get image urls!")})}restoreServerImages(){return console.warn("restoreServerImages")}destroyLocalImages(){return r.request("clear-comic-image-urls"),this.collection.reset()}}return e.prototype.regions={toolbar:"@ui.toolbar",list:"@ui.list"},e.prototype.behaviors={HasMasonryView:{behaviorClass:p,listContainer:k,masonryOptions:{gutter:1,isInitLayout:!1,itemSelector:".item",columnWidth:10,horizontalOrder:!1}},HasHeader:{behaviorClass:d}},e.prototype.template=E.renderable(function(e){return E.div(function(){return E.div(".listview-header"),E.div(".toolbar"),E.div(k)})}),e}.call(this),c=function(){class e extends g.View{onRender(){var e;return e=new l({collection:new o.Collection(x)}),this.showChildView("toolbar",e),this.triggerMethod("set:header","Cached Comic Cover Images")}view_local_storage(){var e,t,n;return e=new o.Collection,delete(t=y.clone(r.request("get-comic-image-urls"))).id,Object.keys(t).forEach(function(n){var r;return r={url:n,image_src:t[n]},e.add(r)}),n=new s({collection:e,cacheType:"browser"}),this.showChildView("content",n)}view_server_storage(){var e,t;return(t=(e=r.request("clzpage-collection")).fetch()).done(()=>{var t;return t=new s({collection:e,cacheType:"server"}),this.showChildView("content",t)}),t.fail(function(){return v.request("danger","Failed to get cached comics")})}}return e.prototype.ui={content:".content-container",toolbar:".images-toolbar",header:".listview-header"},e.prototype.regions={content:"@ui.content",toolbar:"@ui.toolbar"},e.prototype.behaviors=[d],e.prototype.template=E.renderable(function(e){return E.div(function(){return E.div(".listview-header"),E.div(".images-toolbar"),E.div(".content-container")})}),e.prototype.childViewEvents={"toolbar:browser:click":"view_local_storage","toolbar:server:click":"view_server_storage"},e}.call(this),e.exports=c},47:function(e,t,n){"use strict";n.r(t),n.d(t,"form_group_input_div",function(){return r}),n.d(t,"make_field_input",function(){return i}),n.d(t,"make_field_textarea",function(){return s}),n.d(t,"make_field_select",function(){return a}),n.d(t,"make_login_form",function(){return l}),n.d(t,"login_form",function(){return o}),n.d(t,"name_content_form",function(){return c});var r,o,i,a,s,l,c,u=n(2),d=n.n(u),h=n(49);r=d.a.renderable(function(e){return d.a.div(".form-group",function(){var t,n,r;return d.a.label(".control-label",{for:e.input_id},e.label),r=`#${e.input_id}.form-control`,t=e.input_attributes,n=d.a.input,(null!=e?e.input_type:void 0)?(n=d.a[e.input_type])(r,t,function(){return d.a.text(null!=e?e.content:void 0)}):n(r,t)})}),i=function(e){return d.a.renderable(function(t){return r({input_id:`input_${e}`,label:Object(h.default)(e),input_attributes:{name:e,placeholder:e,value:t[e]}})})},s=function(e){return d.a.renderable(function(t){return r({input_id:`input_${e}`,input_type:"textarea",label:Object(h.default)(e),input_attributes:{name:e,placeholder:e},content:t[e]})})},a=function(e,t){return d.a.renderable(function(n){return d.a.div(".form-group",function(){return d.a.label(".control-label",{for:`select_${e}`}),Object(h.default)(e)}),d.a.select(".form-control",{name:`select_${e}`},function(){var r,o,i,a;for(a=[],r=0,o=t.length;r<o;r++)i=t[r],n[e]===i?a.push(d.a.option({selected:null,value:i},i)):a.push(d.a.option({value:i},i));return a})})},o=(l=function(e="/login",t="POST"){return d.a.renderable(function(n){return d.a.form({role:"form",method:t,action:e},function(){return r({input_id:"input_username",label:"User Name",input_attributes:{name:"username",placeholder:"User Name"}}),r({input_id:"input_password",label:"Password",input_attributes:{name:"password",type:"password",placeholder:"Type your password here...."}}),d.a.button(".btn.btn-secondary",{type:"submit"},"login")})})})(),c=d.a.renderable(function(e){return r({input_id:"input_name",label:"Name",input_attributes:{name:"name",placeholder:"Name"}}),r({input_id:"input_content",input_type:d.a.textarea,label:"Content",input_attributes:{name:"content",placeholder:"..."}}),d.a.input(".btn.btn-secondary.btn-sm",{type:"submit",value:"Add"})})},52:function(e,t,n){var r,o;
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
!function(i,a){"use strict";r=[n(64)],void 0===(o=function(e){return function(e,t){var n=e.jQuery,r=e.console;function o(e,t){for(var n in t)e[n]=t[n];return e}var i=Array.prototype.slice;function a(e,t,s){if(!(this instanceof a))return new a(e,t,s);var l=e;"string"==typeof e&&(l=document.querySelectorAll(e)),l?(this.elements=function(e){if(Array.isArray(e))return e;if("object"==typeof e&&"number"==typeof e.length)return i.call(e);return[e]}(l),this.options=o({},this.options),"function"==typeof t?s=t:o(this.options,t),s&&this.on("always",s),this.getImages(),n&&(this.jqDeferred=new n.Deferred),setTimeout(this.check.bind(this))):r.error("Bad element for imagesLoaded "+(l||e))}a.prototype=Object.create(t.prototype),a.prototype.options={},a.prototype.getImages=function(){this.images=[],this.elements.forEach(this.addElementImages,this)},a.prototype.addElementImages=function(e){"IMG"==e.nodeName&&this.addImage(e),!0===this.options.background&&this.addElementBackgroundImages(e);var t=e.nodeType;if(t&&s[t]){for(var n=e.querySelectorAll("img"),r=0;r<n.length;r++){var o=n[r];this.addImage(o)}if("string"==typeof this.options.background){var i=e.querySelectorAll(this.options.background);for(r=0;r<i.length;r++){var a=i[r];this.addElementBackgroundImages(a)}}}};var s={1:!0,9:!0,11:!0};function l(e){this.img=e}function c(e,t){this.url=e,this.element=t,this.img=new Image}return a.prototype.addElementBackgroundImages=function(e){var t=getComputedStyle(e);if(t)for(var n=/url\((['"])?(.*?)\1\)/gi,r=n.exec(t.backgroundImage);null!==r;){var o=r&&r[2];o&&this.addBackground(o,e),r=n.exec(t.backgroundImage)}},a.prototype.addImage=function(e){var t=new l(e);this.images.push(t)},a.prototype.addBackground=function(e,t){var n=new c(e,t);this.images.push(n)},a.prototype.check=function(){var e=this;function t(t,n,r){setTimeout(function(){e.progress(t,n,r)})}this.progressedCount=0,this.hasAnyBroken=!1,this.images.length?this.images.forEach(function(e){e.once("progress",t),e.check()}):this.complete()},a.prototype.progress=function(e,t,n){this.progressedCount++,this.hasAnyBroken=this.hasAnyBroken||!e.isLoaded,this.emitEvent("progress",[this,e,t]),this.jqDeferred&&this.jqDeferred.notify&&this.jqDeferred.notify(this,e),this.progressedCount==this.images.length&&this.complete(),this.options.debug&&r&&r.log("progress: "+n,e,t)},a.prototype.complete=function(){var e=this.hasAnyBroken?"fail":"done";if(this.isComplete=!0,this.emitEvent(e,[this]),this.emitEvent("always",[this]),this.jqDeferred){var t=this.hasAnyBroken?"reject":"resolve";this.jqDeferred[t](this)}},l.prototype=Object.create(t.prototype),l.prototype.check=function(){this.getIsImageComplete()?this.confirm(0!==this.img.naturalWidth,"naturalWidth"):(this.proxyImage=new Image,this.proxyImage.addEventListener("load",this),this.proxyImage.addEventListener("error",this),this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.proxyImage.src=this.img.src)},l.prototype.getIsImageComplete=function(){return this.img.complete&&this.img.naturalWidth},l.prototype.confirm=function(e,t){this.isLoaded=e,this.emitEvent("progress",[this,this.img,t])},l.prototype.handleEvent=function(e){var t="on"+e.type;this[t]&&this[t](e)},l.prototype.onload=function(){this.confirm(!0,"onload"),this.unbindEvents()},l.prototype.onerror=function(){this.confirm(!1,"onerror"),this.unbindEvents()},l.prototype.unbindEvents=function(){this.proxyImage.removeEventListener("load",this),this.proxyImage.removeEventListener("error",this),this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},c.prototype=Object.create(l.prototype),c.prototype.check=function(){this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.img.src=this.url,this.getIsImageComplete()&&(this.confirm(0!==this.img.naturalWidth,"naturalWidth"),this.unbindEvents())},c.prototype.unbindEvents=function(){this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},c.prototype.confirm=function(e,t){this.isLoaded=e,this.emitEvent("progress",[this,this.element,t])},a.makeJQueryPlugin=function(t){(t=t||e.jQuery)&&((n=t).fn.imagesLoaded=function(e,t){return new a(this,e,t).jqDeferred.promise(n(this))})},a.makeJQueryPlugin(),a}(i,e)}.apply(t,r))||(e.exports=o)}("undefined"!=typeof window?window:this)},53:function(e,t,n){"use strict";n.r(t),n.d(t,"spanbutton",function(){return s}),n.d(t,"divbutton",function(){return r}),n.d(t,"modal_close_button",function(){return i}),n.d(t,"navbar_collapse_button",function(){return a}),n.d(t,"dropdown_toggle",function(){return o});var r,o,i,a,s,l=n(2),c=n.n(l);s=c.a.component(function(e,t,n){return c.a.span(`${e}.btn.btn-secondary.btn-sm`,n)}),r=c.a.component(function(e,t,n){return c.a.div(`${e}.btn.btn-secondary.btn-sm`,n)}),i=c.a.renderable(function(e="Close",t="close"){return c.a.div(".btn.btn-secondary.btn-sm",{"data-dismiss":"modal"},function(){return c.a.h4(".modal-title",function(){return c.a.i(`.fa.fa-${t}`),c.a.text(e)})})}),a=c.a.renderable(function(e){return c.a.button(".navbar-toggle",{type:"button","data-toggle":"collapse","data-target":`#${e}`},function(){return c.a.span(".sr-only","Toggle Navigation"),c.a.span(".icon-bar"),c.a.span(".icon-bar"),c.a.span(".icon-bar")})}),o=c.a.component(function(e,t,n){return c.a.a(`${e}.dropdown-toggle`,{href:t.href,"data-toggle":"dropdown"},n)})},90:function(e,t,n){var r,o,i,a;n(1),o=n(3),i=n(50),a=n(52),r=function(){class e extends o.Behavior{ui(){return{list:this.getOption("listContainer")}}setMasonry(){var e,t;return e=this.getOption("listContainer"),t=this.getOption("masonryOptions"),this.view.masonry=new i(e,t)}setMasonryLayout(){var e,t;return t=this.getOption("masonryOptions"),e=this.$(t.itemSelector),a(e,()=>(this.view.masonry.reloadItems(),this.view.masonry.layout()))}onBeforeDestroy(){return this.view.masonry.destroy()}onDomRefresh(){var e;if(this.setMasonry(),this.setMasonryLayout(),null!=(e=this.view)?e.afterDomRefresh:void 0)return this.view.afterDomRefresh()}}return e.prototype.options={listContainer:".list-container",channel:"global",masonryOptions:{gutter:1,isInitLayout:!1,itemSelector:".item",columnWidth:10,horizontalOrder:!0}},e.prototype.regions={list:"@ui.list"},e}.call(this),e.exports=r},91:function(e,t,n){var r,o,i,a,s,l,c,u,d,h;r=n(1),l=n(3),h=n(2),({make_field_input:c,make_field_select:u}=n(47)),({modal_close_button:d}=n(53)),s=r.Radio.channel("global"),r.Radio.channel("messages"),r.Radio.channel("ebcsv"),o=s.request("main:app:BaseModalView"),a=function(){class e extends o{}return e.prototype.template=h.renderable(function(e){return e.mainsection,h.div(".modal-dialog",function(){return h.div(".modal-content",function(){return h.div(".modal-body",function(){return h.img({src:e.image_src})}),h.div(".modal-footer",function(){return h.ul(".list-inline",function(){return"btn.btn-default.btn-sm",h.li("#close-modal",function(){return d("Close","check")})})})})})}),e}.call(this),i=class extends l.Behavior{onShowImageModal(){var e;return e=new a({model:this.view.model}),s.request("show-modal",e)}},e.exports=i}}]);