/*! For license information please see bumblr-view-blog-view-4ecd53fcca57e6e919d2.js.LICENSE */
(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{440:function(t,e,n){var o,r;!function(i,s){"use strict";o=[n(447)],void 0===(r=function(t){return function(t,e){var n=t.jQuery,o=t.console;function r(t,e){for(var n in e)t[n]=e[n];return t}var i=Array.prototype.slice;function s(t,e,a){if(!(this instanceof s))return new s(t,e,a);var u,l=t;("string"==typeof t&&(l=document.querySelectorAll(t)),l)?(this.elements=(u=l,Array.isArray(u)?u:"object"==typeof u&&"number"==typeof u.length?i.call(u):[u]),this.options=r({},this.options),"function"==typeof e?a=e:r(this.options,e),a&&this.on("always",a),this.getImages(),n&&(this.jqDeferred=new n.Deferred),setTimeout(this.check.bind(this))):o.error("Bad element for imagesLoaded "+(l||t))}s.prototype=Object.create(e.prototype),s.prototype.options={},s.prototype.getImages=function(){this.images=[],this.elements.forEach(this.addElementImages,this)},s.prototype.addElementImages=function(t){"IMG"==t.nodeName&&this.addImage(t),!0===this.options.background&&this.addElementBackgroundImages(t);var e=t.nodeType;if(e&&a[e]){for(var n=t.querySelectorAll("img"),o=0;o<n.length;o++){var r=n[o];this.addImage(r)}if("string"==typeof this.options.background){var i=t.querySelectorAll(this.options.background);for(o=0;o<i.length;o++){var s=i[o];this.addElementBackgroundImages(s)}}}};var a={1:!0,9:!0,11:!0};function u(t){this.img=t}function l(t,e){this.url=t,this.element=e,this.img=new Image}return s.prototype.addElementBackgroundImages=function(t){var e=getComputedStyle(t);if(e)for(var n=/url\((['"])?(.*?)\1\)/gi,o=n.exec(e.backgroundImage);null!==o;){var r=o&&o[2];r&&this.addBackground(r,t),o=n.exec(e.backgroundImage)}},s.prototype.addImage=function(t){var e=new u(t);this.images.push(e)},s.prototype.addBackground=function(t,e){var n=new l(t,e);this.images.push(n)},s.prototype.check=function(){var t=this;function e(e,n,o){setTimeout((function(){t.progress(e,n,o)}))}this.progressedCount=0,this.hasAnyBroken=!1,this.images.length?this.images.forEach((function(t){t.once("progress",e),t.check()})):this.complete()},s.prototype.progress=function(t,e,n){this.progressedCount++,this.hasAnyBroken=this.hasAnyBroken||!t.isLoaded,this.emitEvent("progress",[this,t,e]),this.jqDeferred&&this.jqDeferred.notify&&this.jqDeferred.notify(this,t),this.progressedCount==this.images.length&&this.complete(),this.options.debug&&o&&o.log("progress: "+n,t,e)},s.prototype.complete=function(){var t=this.hasAnyBroken?"fail":"done";if(this.isComplete=!0,this.emitEvent(t,[this]),this.emitEvent("always",[this]),this.jqDeferred){var e=this.hasAnyBroken?"reject":"resolve";this.jqDeferred[e](this)}},u.prototype=Object.create(e.prototype),u.prototype.check=function(){this.getIsImageComplete()?this.confirm(0!==this.img.naturalWidth,"naturalWidth"):(this.proxyImage=new Image,this.proxyImage.addEventListener("load",this),this.proxyImage.addEventListener("error",this),this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.proxyImage.src=this.img.src)},u.prototype.getIsImageComplete=function(){return this.img.complete&&this.img.naturalWidth},u.prototype.confirm=function(t,e){this.isLoaded=t,this.emitEvent("progress",[this,this.img,e])},u.prototype.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},u.prototype.onload=function(){this.confirm(!0,"onload"),this.unbindEvents()},u.prototype.onerror=function(){this.confirm(!1,"onerror"),this.unbindEvents()},u.prototype.unbindEvents=function(){this.proxyImage.removeEventListener("load",this),this.proxyImage.removeEventListener("error",this),this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},l.prototype=Object.create(u.prototype),l.prototype.check=function(){this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.img.src=this.url,this.getIsImageComplete()&&(this.confirm(0!==this.img.naturalWidth,"naturalWidth"),this.unbindEvents())},l.prototype.unbindEvents=function(){this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},l.prototype.confirm=function(t,e){this.isLoaded=t,this.emitEvent("progress",[this,this.element,e])},s.makeJQueryPlugin=function(e){(e=e||t.jQuery)&&((n=e).fn.imagesLoaded=function(t,e){return new s(this,t,e).jqDeferred.promise(n(this))})},s.makeJQueryPlugin(),s}(i,t)}.apply(e,o))||(t.exports=r)}("undefined"!=typeof window?window:this)},565:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),r=u(n(31)),i=n(7),s=u(n(446)),a=u(n(440));function u(t){return t&&t.__esModule?t:{default:t}}function l(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function h(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function p(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var c,d,f,y,g;g=n(34),f=g.renderable((function(){return g.div(".mytoolbar.row",(function(){return g.ul(".pager",(function(){return g.li(".previous",(function(){return g.i("#prev-page-button.fa.fa-arrow-left.btn.btn-default")})),g.li((function(){return g.i("#slideshow-button.fa.fa-play.btn.btn-default")})),g.li(".next",(function(){return g.i("#next-page-button.fa.fa-arrow-right.btn.btn-default")}))}))})),g.div("#posts-container.row")})),y=g.renderable((function(t){return g.div(".listview-list-entry",(function(){return g.span((function(){var e,n,o,r,i,s;for(n=0,e=null,o=0,r=(i=t.photos[0].alt_sizes).length;o<r;o++)(s=i[o]).width>n&&s.width<250&&(e=s,n=s.width);return s=e,g.a({href:t.post_url,target:"_blank"},(function(){return g.img({src:s.url})}))}))}))})),d=function(){var t=function(t){function e(){return l(this,e),h(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return p(e,t),e}(i.View);return t.prototype.template=y,t.prototype.className="post",t}.call(void 0),c=function(){var t=function(t){function e(){l(this,e);var t=h(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments));return t.keydownHandler=t.keydownHandler.bind(t),t}return p(e,t),o(e,[{key:"manage_slideshow",value:function(){return this.ui.slideshow_button.hasClass("fa-play")?this.start_slideshow():this.stop_slideshow()}},{key:"start_slideshow",value:function(){var t=this;return console.log("start slideshow"),this.slideshow_handler=setInterval((function(){return console.log("getting next page"),t.get_next_page()}),6e3),this.ui.slideshow_button.removeClass("fa-play"),this.ui.slideshow_button.addClass("fa-stop")}},{key:"stop_slideshow",value:function(){return clearInterval(this.slideshow_handler),this.ui.slideshow_button.removeClass("fa-stop"),this.ui.slideshow_button.addClass("fa-play")}},{key:"get_next_page",value:function(){var t=this;return this.collection.getNextPage().done((function(){return t.set_image_layout()}))}},{key:"get_prev_page",value:function(){var t=this;return this.collection.getPreviousPage().done((function(){return t.set_image_layout()}))}},{key:"get_another_page",value:function(t){var e,n=this;switch(t){case"prev":e=this.collection.getPreviousPage();break;case"next":e=this.collection.getNextPage();break;default:e=null}if(e)return e.done((function(){return n.set_image_layout()}))}},{key:"handle_key_command",value:function(t){if("prev"===t||"next"===t)return this.get_another_page(t)}},{key:"keydownHandler",value:function(t){var n,o,r,i;for(n in function(t,e){if(!(t instanceof e))throw new Error("Bound instance method accessed before binding")}(this,e),r=[],o=this.keycommands)i=o[n],t.keyCode===i?r.push(this.handle_key_command(n)):r.push(void 0);return r}},{key:"set_image_layout",value:function(){var t,e=this;return t=(0,r.default)(".post"),(0,a.default)(t,(function(){return e.ui.posts.show(),e.masonry.reloadItems(),e.masonry.layout()}))}},{key:"onDomRefresh",value:function(){return(0,r.default)("html").keydown(this.keydownHandler),this.masonry=new s.default("#posts-container",{gutter:2,isInitLayout:!1,itemSelector:".post"}),this.set_image_layout()}},{key:"onBeforeDestroy",value:function(){return(0,r.default)("html").unbind("keydown",this.keydownHandler),this.stop_slideshow(),this.masonry.destroy()}}]),e}(i.CollectionView);return t.prototype.template=f,t.prototype.childView=d,t.prototype.childViewContainer="#posts-container",t.prototype.ui={posts:"#posts-container",slideshow_button:"#slideshow-button",next_button:"#next-page-button",prev_putton:"#prev-page-button"},t.prototype.regions={posts:"@ui.posts"},t.prototype.events={"click @ui.prev_putton":"get_prev_page","click @ui.next_button":"get_next_page","click @ui.slideshow_button":"manage_slideshow"},t.prototype.keycommands={prev:65,next:90},t}.call(void 0),e.default=c},566:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),r=l(n(31)),i=n(7),s=l(n(446)),a=l(n(440)),u=l(n(34));function l(t){return t&&t.__esModule?t:{default:t}}function h(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function p(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function c(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var d,f,y,g,m;g=u.default.renderable((function(){return u.default.div(".mytoolbar.row",(function(){return u.default.div(".btn-group",(function(){return u.default.button(".previous.btn.btn-default",(function(){return u.default.i("#prev-page-button.fa.fa-arrow-left")})),u.default.button(".slideshow-button.btn.btn-default",(function(){return u.default.i(".fa.fa-play")})),u.default.button(".next.btn.btn-default",(function(){return u.default.i("#next-page-button.fa.fa-arrow-right")}))}))})),u.default.div("#posts-container.row")})),y="position:fixed;top:0;bottom:0;"+(y="vertical-align:middle;height:100%;max-width:100%;max-height:100%;"),m=u.default.renderable((function(t){return u.default.div(".listview-list-entry",{style:"height:100%;width:100%;"},(function(){return u.default.span((function(){var e,n;return e=t.photos[0],console.log("photo",e),n=e.original_size.url,u.default.a({href:t.post_url,target:"_blank"},(function(){return u.default.img({src:n,style:y})}))}))}))})),f=function(){var t=function(t){function e(){return h(this,e),p(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return c(e,t),e}(i.View);return t.prototype.template=m,t.prototype.className="post",t}.call(void 0),d=function(){var t=function(t){function e(){h(this,e);var t=p(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments));return t.keydownHandler=t.keydownHandler.bind(t),t}return c(e,t),o(e,[{key:"manage_slideshow",value:function(){return this.ui.slideshow_button.hasClass("fa-play")?this.start_slideshow():this.stop_slideshow()}},{key:"start_slideshow",value:function(){var t=this;return console.log("start slideshow"),this.slideshow_handler=setInterval((function(){return console.log("getting next page"),t.get_next_page()}),6e3),this.ui.slideshow_button.removeClass("fa-play"),this.ui.slideshow_button.addClass("fa-stop")}},{key:"stop_slideshow",value:function(){return clearInterval(this.slideshow_handler),this.ui.slideshow_button.removeClass("fa-stop"),this.ui.slideshow_button.addClass("fa-play")}},{key:"get_next_page",value:function(){var t=this;return this.collection.getNextPage().done((function(){return t.set_image_layout()}))}},{key:"get_prev_page",value:function(){var t=this;return this.collection.getPreviousPage().done((function(){return t.set_image_layout()}))}},{key:"get_another_page",value:function(t){var e,n=this;switch(t){case"prev":e=this.collection.getPreviousPage();break;case"next":e=this.collection.getNextPage();break;default:e=null}if(e)return e.done((function(){return n.set_image_layout()}))}},{key:"handle_key_command",value:function(t){if("prev"===t||"next"===t)return this.get_another_page(t)}},{key:"keydownHandler",value:function(t){var n,o,r,i;for(n in function(t,e){if(!(t instanceof e))throw new Error("Bound instance method accessed before binding")}(this,e),r=[],o=this.keycommands)i=o[n],t.keyCode===i?r.push(this.handle_key_command(n)):r.push(void 0);return r}},{key:"set_image_layout",value:function(){var t,e=this;return t=(0,r.default)(".post"),(0,a.default)(t,(function(){return e.ui.posts.show(),e.masonry.reloadItems(),e.masonry.layout()}))}},{key:"onDomRefresh",value:function(){return(0,r.default)("html").keydown(this.keydownHandler),this.masonry=new s.default("#posts-container",{gutter:2,isInitLayout:!1,itemSelector:".post"}),this.set_image_layout()}},{key:"onBeforeDestroy",value:function(){return(0,r.default)("html").unbind("keydown",this.keydownHandler),this.stop_slideshow(),this.masonry.destroy()}}]),e}(i.View);return t.prototype.template=g,t.prototype.childView=f,t.prototype.childViewContainer="#posts-container",t.prototype.ui={posts:"#posts-container",slideshow_button:".slideshow-button",next_button:"#next-page-button",prev_putton:"#prev-page-button"},t.prototype.events={"click @ui.prev_putton":"get_prev_page","click @ui.next_button":"get_next_page","click @ui.slideshow_button":"manage_slideshow"},t.prototype.keycommands={prev:65,next:90},t}.call(void 0),e.default=d}}]);
//# sourceMappingURL=bumblr-view-blog-view-4ecd53fcca57e6e919d2.js.map