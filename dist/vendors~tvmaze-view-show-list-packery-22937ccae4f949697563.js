(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{121:function(t,e,i){var s,r,n;window,r=[i(102),i(83)],void 0===(n="function"==typeof(s=function(t,e){"use strict";var i="string"==typeof document.documentElement.style.transform?"transform":"WebkitTransform",s=function(){t.Item.apply(this,arguments)},r=s.prototype=Object.create(t.Item.prototype),n=r._create;r._create=function(){n.call(this),this.rect=new e};var o=r.moveTo;return r.moveTo=function(t,e){var i=Math.abs(this.position.x-t),s=Math.abs(this.position.y-e);this.layout.dragItemCount&&!this.isPlacing&&!this.isTransitioning&&i<1&&s<1?this.goTo(t,e):o.apply(this,arguments)},r.enablePlacing=function(){this.removeTransitionStyles(),this.isTransitioning&&i&&(this.element.style[i]="none"),this.isTransitioning=!1,this.getSize(),this.layout._setRectSize(this.element,this.rect),this.isPlacing=!0},r.disablePlacing=function(){this.isPlacing=!1},r.removeElem=function(){this.element.parentNode.removeChild(this.element),this.layout.packer.addSpace(this.rect),this.emitEvent("remove",[this])},r.showDropPlaceholder=function(){var t=this.dropPlaceholder;t||((t=this.dropPlaceholder=document.createElement("div")).className="packery-drop-placeholder",t.style.position="absolute"),t.style.width=this.size.width+"px",t.style.height=this.size.height+"px",this.positionDropPlaceholder(),this.layout.element.appendChild(t)},r.positionDropPlaceholder=function(){this.dropPlaceholder.style[i]="translate("+this.rect.x+"px, "+this.rect.y+"px)"},r.hideDropPlaceholder=function(){var t=this.dropPlaceholder.parentNode;t&&t.removeChild(this.dropPlaceholder)},s})?s.apply(e,r):s)||(t.exports=n)},122:function(t,e,i){var s,r,n;window,r=[i(83)],void 0===(n="function"==typeof(s=function(t){"use strict";function e(t,e,i){this.width=t||0,this.height=e||0,this.sortDirection=i||"downwardLeftToRight",this.reset()}var i=e.prototype;i.reset=function(){this.spaces=[];var e=new t({x:0,y:0,width:this.width,height:this.height});this.spaces.push(e),this.sorter=s[this.sortDirection]||s.downwardLeftToRight},i.pack=function(t){for(var e=0;e<this.spaces.length;e++){var i=this.spaces[e];if(i.canFit(t)){this.placeInSpace(t,i);break}}},i.columnPack=function(t){for(var e=0;e<this.spaces.length;e++){var i=this.spaces[e],s=i.x<=t.x&&i.x+i.width>=t.x+t.width&&i.height>=t.height-.01;if(s){t.y=i.y,this.placed(t);break}}},i.rowPack=function(t){for(var e=0;e<this.spaces.length;e++){var i=this.spaces[e],s=i.y<=t.y&&i.y+i.height>=t.y+t.height&&i.width>=t.width-.01;if(s){t.x=i.x,this.placed(t);break}}},i.placeInSpace=function(t,e){t.x=e.x,t.y=e.y,this.placed(t)},i.placed=function(t){for(var e=[],i=0;i<this.spaces.length;i++){var s=this.spaces[i],r=s.getMaximalFreeRects(t);r?e.push.apply(e,r):e.push(s)}this.spaces=e,this.mergeSortSpaces()},i.mergeSortSpaces=function(){e.mergeRects(this.spaces),this.spaces.sort(this.sorter)},i.addSpace=function(t){this.spaces.push(t),this.mergeSortSpaces()},e.mergeRects=function(t){var e=0,i=t[e];t:for(;i;){for(var s=0,r=t[e+s];r;){if(r==i)s++;else{if(r.contains(i)){t.splice(e,1),i=t[e];continue t}i.contains(r)?t.splice(e+s,1):s++}r=t[e+s]}i=t[++e]}return t};var s={downwardLeftToRight:function(t,e){return t.y-e.y||t.x-e.x},rightwardTopToBottom:function(t,e){return t.x-e.x||t.y-e.y}};return e})?s.apply(e,r):s)||(t.exports=n)},123:function(t,e,i){var s,r,n;
/*!
 * Packery v2.1.1
 * Gapless, draggable grid layouts
 *
 * Licensed GPLv3 for open source use
 * or Packery Commercial License for commercial use
 *
 * http://packery.metafizzy.co
 * Copyright 2016 Metafizzy
 */window,r=[i(81),i(102),i(83),i(122),i(121)],void 0===(n="function"==typeof(s=function(t,e,i,s,r){"use strict";i.prototype.canFit=function(t){return this.width>=t.width-1&&this.height>=t.height-1};var n=e.create("packery");n.Item=r;var o=n.prototype;function a(t,e){return t.position.y-e.position.y||t.position.x-e.position.x}function h(t,e){return t.position.x-e.position.x||t.position.y-e.position.y}o._create=function(){e.prototype._create.call(this),this.packer=new s,this.shiftPacker=new s,this.isEnabled=!0,this.dragItemCount=0;var t=this;this.handleDraggabilly={dragStart:function(){t.itemDragStart(this.element)},dragMove:function(){t.itemDragMove(this.element,this.position.x,this.position.y)},dragEnd:function(){t.itemDragEnd(this.element)}},this.handleUIDraggable={start:function(e,i){i&&t.itemDragStart(e.currentTarget)},drag:function(e,i){i&&t.itemDragMove(e.currentTarget,i.position.left,i.position.top)},stop:function(e,i){i&&t.itemDragEnd(e.currentTarget)}}},o._resetLayout=function(){var t,e,i;this.getSize(),this._getMeasurements(),this._getOption("horizontal")?(t=1/0,e=this.size.innerHeight+this.gutter,i="rightwardTopToBottom"):(t=this.size.innerWidth+this.gutter,e=1/0,i="downwardLeftToRight"),this.packer.width=this.shiftPacker.width=t,this.packer.height=this.shiftPacker.height=e,this.packer.sortDirection=this.shiftPacker.sortDirection=i,this.packer.reset(),this.maxY=0,this.maxX=0},o._getMeasurements=function(){this._getMeasurement("columnWidth","width"),this._getMeasurement("rowHeight","height"),this._getMeasurement("gutter","width")},o._getItemLayoutPosition=function(t){if(this._setRectSize(t.element,t.rect),this.isShifting||this.dragItemCount>0){var e=this._getPackMethod();this.packer[e](t.rect)}else this.packer.pack(t.rect);return this._setMaxXY(t.rect),t.rect},o.shiftLayout=function(){this.isShifting=!0,this.layout(),delete this.isShifting},o._getPackMethod=function(){return this._getOption("horizontal")?"rowPack":"columnPack"},o._setMaxXY=function(t){this.maxX=Math.max(t.x+t.width,this.maxX),this.maxY=Math.max(t.y+t.height,this.maxY)},o._setRectSize=function(e,i){var s=t(e),r=s.outerWidth,n=s.outerHeight;(r||n)&&(r=this._applyGridGutter(r,this.columnWidth),n=this._applyGridGutter(n,this.rowHeight)),i.width=Math.min(r,this.packer.width),i.height=Math.min(n,this.packer.height)},o._applyGridGutter=function(t,e){if(!e)return t+this.gutter;e+=this.gutter;var i=t%e,s=i&&i<1?"round":"ceil";return t=Math[s](t/e)*e},o._getContainerSize=function(){return this._getOption("horizontal")?{width:this.maxX-this.gutter}:{height:this.maxY-this.gutter}},o._manageStamp=function(t){var e,s=this.getItem(t);if(s&&s.isPlacing)e=s.rect;else{var r=this._getElementOffset(t);e=new i({x:this._getOption("originLeft")?r.left:r.right,y:this._getOption("originTop")?r.top:r.bottom})}this._setRectSize(t,e),this.packer.placed(e),this._setMaxXY(e)},o.sortItemsByPosition=function(){var t=this._getOption("horizontal")?h:a;this.items.sort(t)},o.fit=function(t,e,i){var s=this.getItem(t);s&&(this.stamp(s.element),s.enablePlacing(),this.updateShiftTargets(s),e=void 0===e?s.rect.x:e,i=void 0===i?s.rect.y:i,this.shift(s,e,i),this._bindFitEvents(s),s.moveTo(s.rect.x,s.rect.y),this.shiftLayout(),this.unstamp(s.element),this.sortItemsByPosition(),s.disablePlacing())},o._bindFitEvents=function(t){var e=this,i=0;function s(){2==++i&&e.dispatchEvent("fitComplete",null,[t])}t.once("layout",s),this.once("layoutComplete",s)},o.resize=function(){this.isResizeBound&&this.needsResizeLayout()&&(this.options.shiftPercentResize?this.resizeShiftPercentLayout():this.layout())},o.needsResizeLayout=function(){var e=t(this.element),i=this._getOption("horizontal")?"innerHeight":"innerWidth";return e[i]!=this.size[i]},o.resizeShiftPercentLayout=function(){var e=this._getItemsForLayout(this.items),i=this._getOption("horizontal"),s=i?"y":"x",r=i?"height":"width",n=i?"rowHeight":"columnWidth",o=i?"innerHeight":"innerWidth",a=this[n];if(a=a&&a+this.gutter){this._getMeasurements();var h=this[n]+this.gutter;e.forEach(function(t){var e=Math.round(t.rect[s]/a);t.rect[s]=e*h})}else{var c=t(this.element)[o]+this.gutter,u=this.packer[r];e.forEach(function(t){t.rect[s]=t.rect[s]/u*c})}this.shiftLayout()},o.itemDragStart=function(t){if(this.isEnabled){this.stamp(t);var e=this.getItem(t);e&&(e.enablePlacing(),e.showDropPlaceholder(),this.dragItemCount++,this.updateShiftTargets(e))}},o.updateShiftTargets=function(t){this.shiftPacker.reset(),this._getBoundingRect();var e=this._getOption("originLeft"),s=this._getOption("originTop");this.stamps.forEach(function(t){var r=this.getItem(t);if(!r||!r.isPlacing){var n=this._getElementOffset(t),o=new i({x:e?n.left:n.right,y:s?n.top:n.bottom});this._setRectSize(t,o),this.shiftPacker.placed(o)}},this);var r,n=this._getOption("horizontal"),o=n?"rowHeight":"columnWidth",a=n?"height":"width";this.shiftTargetKeys=[],this.shiftTargets=[];var h=this[o];if(h=h&&h+this.gutter){var c=Math.ceil(t.rect[a]/h),u=Math.floor((this.shiftPacker[a]+this.gutter)/h);r=(u-c)*h;for(var g=0;g<u;g++){var l=n?0:g*h,d=n?g*h:0;this._addShiftTarget(l,d,r)}}else r=this.shiftPacker[a]+this.gutter-t.rect[a],this._addShiftTarget(0,0,r);var p=this._getItemsForLayout(this.items),f=this._getPackMethod();p.forEach(function(t){var e=t.rect;this._setRectSize(t.element,e),this.shiftPacker[f](e),this._addShiftTarget(e.x,e.y,r);var i=n?e.x+e.width:e.x,s=n?e.y:e.y+e.height;if(this._addShiftTarget(i,s,r),h)for(var o=Math.round(e[a]/h),c=1;c<o;c++){var u=n?i:e.x+h*c,g=n?e.y+h*c:s;this._addShiftTarget(u,g,r)}},this)},o._addShiftTarget=function(t,e,i){var s=this._getOption("horizontal")?e:t;if(!(0!==s&&s>i)){var r=t+","+e,n=-1!=this.shiftTargetKeys.indexOf(r);n||(this.shiftTargetKeys.push(r),this.shiftTargets.push({x:t,y:e}))}},o.shift=function(t,e,i){var s,r=1/0,n={x:e,y:i};this.shiftTargets.forEach(function(t){var e,i,o,a,h=(o=(i=n).x-(e=t).x,a=i.y-e.y,Math.sqrt(o*o+a*a));h<r&&(s=t,r=h)}),t.rect.x=s.x,t.rect.y=s.y},o.itemDragMove=function(t,e,i){var s=this.isEnabled&&this.getItem(t);if(s){e-=this.size.paddingLeft,i-=this.size.paddingTop;var r=this,n=new Date;this._itemDragTime&&n-this._itemDragTime<120?(clearTimeout(this.dragTimeout),this.dragTimeout=setTimeout(o,120)):(o(),this._itemDragTime=n)}function o(){r.shift(s,e,i),s.positionDropPlaceholder(),r.layout()}},o.itemDragEnd=function(t){var e=this.isEnabled&&this.getItem(t);if(e){clearTimeout(this.dragTimeout),e.element.classList.add("is-positioning-post-drag");var i=0,s=this;e.once("layout",r),this.once("layoutComplete",r),e.moveTo(e.rect.x,e.rect.y),this.layout(),this.dragItemCount=Math.max(0,this.dragItemCount-1),this.sortItemsByPosition(),e.disablePlacing(),this.unstamp(e.element)}function r(){2==++i&&(e.element.classList.remove("is-positioning-post-drag"),e.hideDropPlaceholder(),s.dispatchEvent("dragItemPositioned",null,[e]))}},o.bindDraggabillyEvents=function(t){this._bindDraggabillyEvents(t,"on")},o.unbindDraggabillyEvents=function(t){this._bindDraggabillyEvents(t,"off")},o._bindDraggabillyEvents=function(t,e){var i=this.handleDraggabilly;t[e]("dragStart",i.dragStart),t[e]("dragMove",i.dragMove),t[e]("dragEnd",i.dragEnd)},o.bindUIDraggableEvents=function(t){this._bindUIDraggableEvents(t,"on")},o.unbindUIDraggableEvents=function(t){this._bindUIDraggableEvents(t,"off")},o._bindUIDraggableEvents=function(t,e){var i=this.handleUIDraggable;t[e]("dragstart",i.start)[e]("drag",i.drag)[e]("dragstop",i.stop)};var c=o.destroy;return o.destroy=function(){c.apply(this,arguments),this.isEnabled=!1},n.Rect=i,n.Packer=s,n})?s.apply(e,r):s)||(t.exports=n)},124:function(t,e,i){"use strict";i.r(e);i(1);var s,r=i(3),n=i.n(r),o=i(123),a=i.n(o),h=i(52),c=i.n(h);s=function(){class t extends n.a.Behavior{ui(){return{list:this.getOption("listContainer")}}setPackery(){var t,e;return t=this.getOption("listContainer"),e=this.getOption("packeryOptions"),this.view.packery=new a.a(t,e)}setPackeryLayout(){var t,e;return console.log("USING PACKERY!!!!!!!!!!!!"),e=this.getOption("packeryOptions"),t=this.$(e.itemSelector),c()(t,()=>setTimeout(()=>(this.view.packery.reloadItems(),this.view.packery.layout()),700))}onBeforeDestroy(){return this.view.packery.destroy()}onDomRefresh(){var t;if(this.setPackery(),this.setPackeryLayout(),null!=(t=this.view)?t.afterDomRefresh:void 0)return this.view.afterDomRefresh()}collectionEvents(){var t;return t={},this.getOption("hasPageableCollection")&&(t["pageable:state:change"]="setPackeryLayout"),t}}return t.prototype.options={listContainer:".list-container",hasPageableCollection:!1,packeryOptions:{gutter:1,isInitLayout:!1,itemSelector:".item",columnWidth:10,horizontalOrder:!0}},t.prototype.regions={list:"@ui.list"},t}.call(this),e.default=s},51:function(t,e,i){"use strict";i.r(e);var s=i(2),r=i.n(s);e.default=r.a.renderable(function(t="5x"){return r.a.span(`.fa-stack.fa-${t}`,function(){return r.a.i(".fa.fa-image.fa-stack-1x"),r.a.i(".fa.fa-ban.fa-stack-2x.text-danger")})})},52:function(t,e,i){var s,r;
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
!function(n,o){"use strict";s=[i(64)],void 0===(r=function(t){return function(t,e){var i=t.jQuery,s=t.console;function r(t,e){for(var i in e)t[i]=e[i];return t}var n=Array.prototype.slice;function o(t,e,a){if(!(this instanceof o))return new o(t,e,a);var h=t;"string"==typeof t&&(h=document.querySelectorAll(t)),h?(this.elements=function(t){if(Array.isArray(t))return t;if("object"==typeof t&&"number"==typeof t.length)return n.call(t);return[t]}(h),this.options=r({},this.options),"function"==typeof e?a=e:r(this.options,e),a&&this.on("always",a),this.getImages(),i&&(this.jqDeferred=new i.Deferred),setTimeout(this.check.bind(this))):s.error("Bad element for imagesLoaded "+(h||t))}o.prototype=Object.create(e.prototype),o.prototype.options={},o.prototype.getImages=function(){this.images=[],this.elements.forEach(this.addElementImages,this)},o.prototype.addElementImages=function(t){"IMG"==t.nodeName&&this.addImage(t),!0===this.options.background&&this.addElementBackgroundImages(t);var e=t.nodeType;if(e&&a[e]){for(var i=t.querySelectorAll("img"),s=0;s<i.length;s++){var r=i[s];this.addImage(r)}if("string"==typeof this.options.background){var n=t.querySelectorAll(this.options.background);for(s=0;s<n.length;s++){var o=n[s];this.addElementBackgroundImages(o)}}}};var a={1:!0,9:!0,11:!0};function h(t){this.img=t}function c(t,e){this.url=t,this.element=e,this.img=new Image}return o.prototype.addElementBackgroundImages=function(t){var e=getComputedStyle(t);if(e)for(var i=/url\((['"])?(.*?)\1\)/gi,s=i.exec(e.backgroundImage);null!==s;){var r=s&&s[2];r&&this.addBackground(r,t),s=i.exec(e.backgroundImage)}},o.prototype.addImage=function(t){var e=new h(t);this.images.push(e)},o.prototype.addBackground=function(t,e){var i=new c(t,e);this.images.push(i)},o.prototype.check=function(){var t=this;function e(e,i,s){setTimeout(function(){t.progress(e,i,s)})}this.progressedCount=0,this.hasAnyBroken=!1,this.images.length?this.images.forEach(function(t){t.once("progress",e),t.check()}):this.complete()},o.prototype.progress=function(t,e,i){this.progressedCount++,this.hasAnyBroken=this.hasAnyBroken||!t.isLoaded,this.emitEvent("progress",[this,t,e]),this.jqDeferred&&this.jqDeferred.notify&&this.jqDeferred.notify(this,t),this.progressedCount==this.images.length&&this.complete(),this.options.debug&&s&&s.log("progress: "+i,t,e)},o.prototype.complete=function(){var t=this.hasAnyBroken?"fail":"done";if(this.isComplete=!0,this.emitEvent(t,[this]),this.emitEvent("always",[this]),this.jqDeferred){var e=this.hasAnyBroken?"reject":"resolve";this.jqDeferred[e](this)}},h.prototype=Object.create(e.prototype),h.prototype.check=function(){this.getIsImageComplete()?this.confirm(0!==this.img.naturalWidth,"naturalWidth"):(this.proxyImage=new Image,this.proxyImage.addEventListener("load",this),this.proxyImage.addEventListener("error",this),this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.proxyImage.src=this.img.src)},h.prototype.getIsImageComplete=function(){return this.img.complete&&this.img.naturalWidth},h.prototype.confirm=function(t,e){this.isLoaded=t,this.emitEvent("progress",[this,this.img,e])},h.prototype.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},h.prototype.onload=function(){this.confirm(!0,"onload"),this.unbindEvents()},h.prototype.onerror=function(){this.confirm(!1,"onerror"),this.unbindEvents()},h.prototype.unbindEvents=function(){this.proxyImage.removeEventListener("load",this),this.proxyImage.removeEventListener("error",this),this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},c.prototype=Object.create(h.prototype),c.prototype.check=function(){this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.img.src=this.url,this.getIsImageComplete()&&(this.confirm(0!==this.img.naturalWidth,"naturalWidth"),this.unbindEvents())},c.prototype.unbindEvents=function(){this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},c.prototype.confirm=function(t,e){this.isLoaded=t,this.emitEvent("progress",[this,this.element,e])},o.makeJQueryPlugin=function(e){(e=e||t.jQuery)&&((i=e).fn.imagesLoaded=function(t,e){return new o(this,t,e).jqDeferred.promise(i(this))})},o.makeJQueryPlugin(),o}(n,t)}.apply(e,s))||(t.exports=r)}("undefined"!=typeof window?window:this)},62:function(t,e,i){"use strict";i.r(e);var s=i(4),r=i.n(s),n=i(1),o=i.n(n),a=i(3),h=i.n(a),c=i(2),u=i.n(c);o.a.Radio.channel("global"),o.a.Radio.channel("messages"),e.default=function(){class t extends h.a.View{templateContext(){return{collection:this.collection}}onDomRefresh(){return this.updateNavButtons()}turnPage(t){var e;return t.preventDefault(),e=r()(t.target).attr("data-pagenumber"),console.log("pageNumber",e),this.collection.getPage(Number(e)),this.updateNavButtons()}updateNavButtons(){var t,e,i,s;return s=this.collection.state,i=this.ui.prevButton.parent(),s.currentPage===s.firstPage?i.hasClass("disabled")||i.addClass("disabled"):i.hasClass("disabled")&&i.removeClass("disabled"),e=this.ui.nextButton.parent(),s.currentPage===s.lastPage?(console.log("On last page"),e.hasClass("disabled")||e.addClass("disabled")):e.addClass("disabled")&&e.removeClass("disabled"),this.ui.numberedPage.parent().removeClass("active"),this.ui.numberedPage.removeClass("text-white"),this.ui.numberedPage.addClass("text-dark"),(t=r()(`[data-pagenumber="${s.currentPage}"]`)).parent().addClass("active"),t.removeClass("text-dark"),t.addClass("text-white")}getAnotherPage(t){var e,i;if(e=(i=this.collection.state).currentPage===i.lastPage,"prev"===t&&i.currentPage)this.collection.getPreviousPage();else{if("next"!==t||e)throw new Error(`bad direction '${t}'`);this.collection.getNextPage()}return this.updateNavButtons()}getPreviousPage(){return this.getAnotherPage("prev")}getNextPage(){return this.getAnotherPage("next")}}return t.prototype.tagName="ul",t.prototype.className="pagination",t.prototype.template=u.a.renderable(function(t){var e,i,s,r,n,o,a;for((a=t.collection.state).totalPages,e=a.firstPage,s=a.lastPage,u.a.li(".page-item",function(){return u.a.a(".prev.page-link.bg-body-d5",function(){return u.a.i(".fa.fa-arrow-left")})}),r=i=n=e,o=s;n<=o?i<=o:i>=o;r=n<=o?++i:--i)u.a.li(".page-item",function(){return u.a.a(".numbered-page.page-link.bg-body-d5.text-dark",{href:"#",data:{pageNumber:r}},r)});return u.a.li(".page-item",function(){return u.a.a(".next.page-link.bg-body-d5",function(){return u.a.i(".fa.fa-arrow-right")})})}),t.prototype.ui={numberedPage:".numbered-page",prevButton:".prev",nextButton:".next"},t.prototype.events={"click @ui.numberedPage":"turnPage","click @ui.prevButton":"getPreviousPage","click @ui.nextButton":"getNextPage"},t}.call(this)},83:function(t,e,i){var s,r;window,void 0===(r="function"==typeof(s=function(){"use strict";function t(e){for(var i in t.defaults)this[i]=t.defaults[i];for(i in e)this[i]=e[i]}t.defaults={x:0,y:0,width:0,height:0};var e=t.prototype;return e.contains=function(t){var e=t.width||0,i=t.height||0;return this.x<=t.x&&this.y<=t.y&&this.x+this.width>=t.x+e&&this.y+this.height>=t.y+i},e.overlaps=function(t){var e=this.x+this.width,i=this.y+this.height,s=t.x+t.width,r=t.y+t.height;return this.x<s&&e>t.x&&this.y<r&&i>t.y},e.getMaximalFreeRects=function(e){if(!this.overlaps(e))return!1;var i,s=[],r=this.x+this.width,n=this.y+this.height,o=e.x+e.width,a=e.y+e.height;return this.y<e.y&&(i=new t({x:this.x,y:this.y,width:this.width,height:e.y-this.y}),s.push(i)),r>o&&(i=new t({x:o,y:this.y,width:r-o,height:this.height}),s.push(i)),n>a&&(i=new t({x:this.x,y:a,width:this.width,height:n-a}),s.push(i)),this.x<e.x&&(i=new t({x:this.x,y:this.y,width:e.x-this.x,height:this.height}),s.push(i)),s},e.canFit=function(t){return this.width>=t.width&&this.height>=t.height},t})?s.call(e,i,e,t):s)||(t.exports=r)},84:function(t,e,i){"use strict";i.r(e);i(1);var s,r=i(3),n=i.n(r),o=i(50),a=i.n(o),h=i(52),c=i.n(h);s=function(){class t extends n.a.Behavior{ui(){return{list:this.getOption("listContainer")}}setMasonry(){var t,e;return t=this.getOption("listContainer"),e=this.getOption("masonryOptions"),this.view.masonry=new a.a(t,e)}setMasonryLayout(){var t,e;return e=this.getOption("masonryOptions"),t=this.$(e.itemSelector),c()(t,()=>setTimeout(()=>(this.view.masonry.reloadItems(),this.view.masonry.layout()),700))}onBeforeDestroy(){return this.view.masonry.destroy()}onDomRefresh(){var t;if(this.setMasonry(),this.setMasonryLayout(),null!=(t=this.view)?t.afterDomRefresh:void 0)return this.view.afterDomRefresh()}collectionEvents(){var t;return t={},this.getOption("hasPageableCollection")&&(t["pageable:state:change"]="setMasonryLayout"),t}}return t.prototype.options={listContainer:".list-container",hasPageableCollection:!1,masonryOptions:{gutter:1,isInitLayout:!1,itemSelector:".item",columnWidth:10,horizontalOrder:!0}},t.prototype.regions={list:"@ui.list"},t}.call(this),e.default=s}}]);