/*! For license information please see vendors~tvmaze-view-show-list-packery-b04818ade7589f62f49d.js.LICENSE */
(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{125:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n,r=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),o=(h(i(1)),i(2)),s=h(i(57)),a=h(i(58));function h(t){return t&&t.__esModule?t:{default:t}}n=function(){var t=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),r(e,[{key:"ui",value:function(){return{list:this.getOption("listContainer")}}},{key:"setMasonry",value:function(){var t,e;return t=this.getOption("listContainer"),e=this.getOption("masonryOptions"),this.view.masonry=new s.default(t,e)}},{key:"setMasonryLayout",value:function(){var t,e,i=this;return e=this.getOption("masonryOptions"),t=this.$(e.itemSelector),(0,a.default)(t,(function(){return setTimeout((function(){return i.view.masonry.reloadItems(),i.view.masonry.layout()}),700)}))}},{key:"onBeforeDestroy",value:function(){return this.view.masonry.destroy()}},{key:"onDomRefresh",value:function(){var t;if(this.setMasonry(),this.setMasonryLayout(),null!=(t=this.view)?t.afterDomRefresh:void 0)return this.view.afterDomRefresh()}},{key:"collectionEvents",value:function(){var t;return t={},this.getOption("hasPageableCollection")&&(t["pageable:state:change"]="setMasonryLayout"),t}}]),e}(o.Behavior);return t.prototype.options={listContainer:".list-container",hasPageableCollection:!1,masonryOptions:{gutter:1,isInitLayout:!1,itemSelector:".item",columnWidth:10,horizontalOrder:!0}},t.prototype.regions={list:"@ui.list"},t}.call(void 0),e.default=n},126:function(t,e,i){var n,r;window,void 0===(r="function"==typeof(n=function(){"use strict";function t(e){for(var i in t.defaults)this[i]=t.defaults[i];for(i in e)this[i]=e[i]}t.defaults={x:0,y:0,width:0,height:0};var e=t.prototype;return e.contains=function(t){var e=t.width||0,i=t.height||0;return this.x<=t.x&&this.y<=t.y&&this.x+this.width>=t.x+e&&this.y+this.height>=t.y+i},e.overlaps=function(t){var e=this.x+this.width,i=this.y+this.height,n=t.x+t.width,r=t.y+t.height;return this.x<n&&e>t.x&&this.y<r&&i>t.y},e.getMaximalFreeRects=function(e){if(!this.overlaps(e))return!1;var i,n=[],r=this.x+this.width,o=this.y+this.height,s=e.x+e.width,a=e.y+e.height;return this.y<e.y&&(i=new t({x:this.x,y:this.y,width:this.width,height:e.y-this.y}),n.push(i)),r>s&&(i=new t({x:s,y:this.y,width:r-s,height:this.height}),n.push(i)),o>a&&(i=new t({x:this.x,y:a,width:this.width,height:o-a}),n.push(i)),this.x<e.x&&(i=new t({x:this.x,y:this.y,width:e.x-this.x,height:this.height}),n.push(i)),n},e.canFit=function(t){return this.width>=t.width&&this.height>=t.height},t})?n.call(e,i,e,t):n)||(t.exports=r)},363:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n,r=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),o=(h(i(1)),i(2)),s=h(i(364)),a=h(i(58));function h(t){return t&&t.__esModule?t:{default:t}}n=function(){var t=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),r(e,[{key:"ui",value:function(){return{list:this.getOption("listContainer")}}},{key:"setPackery",value:function(){var t,e;return t=this.getOption("listContainer"),e=this.getOption("packeryOptions"),this.view.packery=new s.default(t,e)}},{key:"setPackeryLayout",value:function(){var t,e,i=this;return console.log("USING PACKERY!!!!!!!!!!!!"),e=this.getOption("packeryOptions"),t=this.$(e.itemSelector),(0,a.default)(t,(function(){return setTimeout((function(){return i.view.packery.reloadItems(),i.view.packery.layout()}),700)}))}},{key:"onBeforeDestroy",value:function(){return this.view.packery.destroy()}},{key:"onDomRefresh",value:function(){var t;if(this.setPackery(),this.setPackeryLayout(),null!=(t=this.view)?t.afterDomRefresh:void 0)return this.view.afterDomRefresh()}},{key:"collectionEvents",value:function(){var t;return t={},this.getOption("hasPageableCollection")&&(t["pageable:state:change"]="setPackeryLayout"),t}}]),e}(o.Behavior);return t.prototype.options={listContainer:".list-container",hasPageableCollection:!1,packeryOptions:{gutter:1,isInitLayout:!1,itemSelector:".item",columnWidth:10,horizontalOrder:!0}},t.prototype.regions={list:"@ui.list"},t}.call(void 0),e.default=n},364:function(t,e,i){var n,r,o;window,r=[i(96),i(106),i(126),i(365),i(366)],void 0===(o="function"==typeof(n=function(t,e,i,n,r){"use strict";i.prototype.canFit=function(t){return this.width>=t.width-1&&this.height>=t.height-1};var o=e.create("packery");o.Item=r;var s=o.prototype;function a(t,e){return t.position.y-e.position.y||t.position.x-e.position.x}function h(t,e){return t.position.x-e.position.x||t.position.y-e.position.y}s._create=function(){e.prototype._create.call(this),this.packer=new n,this.shiftPacker=new n,this.isEnabled=!0,this.dragItemCount=0;var t=this;this.handleDraggabilly={dragStart:function(){t.itemDragStart(this.element)},dragMove:function(){t.itemDragMove(this.element,this.position.x,this.position.y)},dragEnd:function(){t.itemDragEnd(this.element)}},this.handleUIDraggable={start:function(e,i){i&&t.itemDragStart(e.currentTarget)},drag:function(e,i){i&&t.itemDragMove(e.currentTarget,i.position.left,i.position.top)},stop:function(e,i){i&&t.itemDragEnd(e.currentTarget)}}},s._resetLayout=function(){var t,e,i;this.getSize(),this._getMeasurements(),this._getOption("horizontal")?(t=1/0,e=this.size.innerHeight+this.gutter,i="rightwardTopToBottom"):(t=this.size.innerWidth+this.gutter,e=1/0,i="downwardLeftToRight"),this.packer.width=this.shiftPacker.width=t,this.packer.height=this.shiftPacker.height=e,this.packer.sortDirection=this.shiftPacker.sortDirection=i,this.packer.reset(),this.maxY=0,this.maxX=0},s._getMeasurements=function(){this._getMeasurement("columnWidth","width"),this._getMeasurement("rowHeight","height"),this._getMeasurement("gutter","width")},s._getItemLayoutPosition=function(t){if(this._setRectSize(t.element,t.rect),this.isShifting||this.dragItemCount>0){var e=this._getPackMethod();this.packer[e](t.rect)}else this.packer.pack(t.rect);return this._setMaxXY(t.rect),t.rect},s.shiftLayout=function(){this.isShifting=!0,this.layout(),delete this.isShifting},s._getPackMethod=function(){return this._getOption("horizontal")?"rowPack":"columnPack"},s._setMaxXY=function(t){this.maxX=Math.max(t.x+t.width,this.maxX),this.maxY=Math.max(t.y+t.height,this.maxY)},s._setRectSize=function(e,i){var n=t(e),r=n.outerWidth,o=n.outerHeight;(r||o)&&(r=this._applyGridGutter(r,this.columnWidth),o=this._applyGridGutter(o,this.rowHeight)),i.width=Math.min(r,this.packer.width),i.height=Math.min(o,this.packer.height)},s._applyGridGutter=function(t,e){if(!e)return t+this.gutter;var i=t%(e+=this.gutter);return t=Math[i&&i<1?"round":"ceil"](t/e)*e},s._getContainerSize=function(){return this._getOption("horizontal")?{width:this.maxX-this.gutter}:{height:this.maxY-this.gutter}},s._manageStamp=function(t){var e,n=this.getItem(t);if(n&&n.isPlacing)e=n.rect;else{var r=this._getElementOffset(t);e=new i({x:this._getOption("originLeft")?r.left:r.right,y:this._getOption("originTop")?r.top:r.bottom})}this._setRectSize(t,e),this.packer.placed(e),this._setMaxXY(e)},s.sortItemsByPosition=function(){var t=this._getOption("horizontal")?h:a;this.items.sort(t)},s.fit=function(t,e,i){var n=this.getItem(t);n&&(this.stamp(n.element),n.enablePlacing(),this.updateShiftTargets(n),e=void 0===e?n.rect.x:e,i=void 0===i?n.rect.y:i,this.shift(n,e,i),this._bindFitEvents(n),n.moveTo(n.rect.x,n.rect.y),this.shiftLayout(),this.unstamp(n.element),this.sortItemsByPosition(),n.disablePlacing())},s._bindFitEvents=function(t){var e=this,i=0;function n(){2==++i&&e.dispatchEvent("fitComplete",null,[t])}t.once("layout",n),this.once("layoutComplete",n)},s.resize=function(){this.isResizeBound&&this.needsResizeLayout()&&(this.options.shiftPercentResize?this.resizeShiftPercentLayout():this.layout())},s.needsResizeLayout=function(){var e=t(this.element),i=this._getOption("horizontal")?"innerHeight":"innerWidth";return e[i]!=this.size[i]},s.resizeShiftPercentLayout=function(){var e=this._getItemsForLayout(this.items),i=this._getOption("horizontal"),n=i?"y":"x",r=i?"height":"width",o=i?"rowHeight":"columnWidth",s=i?"innerHeight":"innerWidth",a=this[o];if(a=a&&a+this.gutter){this._getMeasurements();var h=this[o]+this.gutter;e.forEach((function(t){var e=Math.round(t.rect[n]/a);t.rect[n]=e*h}))}else{var u=t(this.element)[s]+this.gutter,c=this.packer[r];e.forEach((function(t){t.rect[n]=t.rect[n]/c*u}))}this.shiftLayout()},s.itemDragStart=function(t){if(this.isEnabled){this.stamp(t);var e=this.getItem(t);e&&(e.enablePlacing(),e.showDropPlaceholder(),this.dragItemCount++,this.updateShiftTargets(e))}},s.updateShiftTargets=function(t){this.shiftPacker.reset(),this._getBoundingRect();var e=this._getOption("originLeft"),n=this._getOption("originTop");this.stamps.forEach((function(t){var r=this.getItem(t);if(!r||!r.isPlacing){var o=this._getElementOffset(t),s=new i({x:e?o.left:o.right,y:n?o.top:o.bottom});this._setRectSize(t,s),this.shiftPacker.placed(s)}}),this);var r,o=this._getOption("horizontal"),s=o?"rowHeight":"columnWidth",a=o?"height":"width";this.shiftTargetKeys=[],this.shiftTargets=[];var h=this[s];if(h=h&&h+this.gutter){var u=Math.ceil(t.rect[a]/h),c=Math.floor((this.shiftPacker[a]+this.gutter)/h);r=(c-u)*h;for(var l=0;l<c;l++){var f=o?0:l*h,d=o?l*h:0;this._addShiftTarget(f,d,r)}}else r=this.shiftPacker[a]+this.gutter-t.rect[a],this._addShiftTarget(0,0,r);var p=this._getItemsForLayout(this.items),g=this._getPackMethod();p.forEach((function(t){var e=t.rect;this._setRectSize(t.element,e),this.shiftPacker[g](e),this._addShiftTarget(e.x,e.y,r);var i=o?e.x+e.width:e.x,n=o?e.y:e.y+e.height;if(this._addShiftTarget(i,n,r),h)for(var s=Math.round(e[a]/h),u=1;u<s;u++){var c=o?i:e.x+h*u,l=o?e.y+h*u:n;this._addShiftTarget(c,l,r)}}),this)},s._addShiftTarget=function(t,e,i){var n=this._getOption("horizontal")?e:t;if(!(0!==n&&n>i)){var r=t+","+e;-1!=this.shiftTargetKeys.indexOf(r)||(this.shiftTargetKeys.push(r),this.shiftTargets.push({x:t,y:e}))}},s.shift=function(t,e,i){var n,r=1/0,o={x:e,y:i};this.shiftTargets.forEach((function(t){var e,i,s,a,h=(s=(i=o).x-(e=t).x,a=i.y-e.y,Math.sqrt(s*s+a*a));h<r&&(n=t,r=h)})),t.rect.x=n.x,t.rect.y=n.y},s.itemDragMove=function(t,e,i){var n=this.isEnabled&&this.getItem(t);if(n){e-=this.size.paddingLeft,i-=this.size.paddingTop;var r=this,o=new Date;this._itemDragTime&&o-this._itemDragTime<120?(clearTimeout(this.dragTimeout),this.dragTimeout=setTimeout(s,120)):(s(),this._itemDragTime=o)}function s(){r.shift(n,e,i),n.positionDropPlaceholder(),r.layout()}},s.itemDragEnd=function(t){var e=this.isEnabled&&this.getItem(t);if(e){clearTimeout(this.dragTimeout),e.element.classList.add("is-positioning-post-drag");var i=0,n=this;e.once("layout",r),this.once("layoutComplete",r),e.moveTo(e.rect.x,e.rect.y),this.layout(),this.dragItemCount=Math.max(0,this.dragItemCount-1),this.sortItemsByPosition(),e.disablePlacing(),this.unstamp(e.element)}function r(){2==++i&&(e.element.classList.remove("is-positioning-post-drag"),e.hideDropPlaceholder(),n.dispatchEvent("dragItemPositioned",null,[e]))}},s.bindDraggabillyEvents=function(t){this._bindDraggabillyEvents(t,"on")},s.unbindDraggabillyEvents=function(t){this._bindDraggabillyEvents(t,"off")},s._bindDraggabillyEvents=function(t,e){var i=this.handleDraggabilly;t[e]("dragStart",i.dragStart),t[e]("dragMove",i.dragMove),t[e]("dragEnd",i.dragEnd)},s.bindUIDraggableEvents=function(t){this._bindUIDraggableEvents(t,"on")},s.unbindUIDraggableEvents=function(t){this._bindUIDraggableEvents(t,"off")},s._bindUIDraggableEvents=function(t,e){var i=this.handleUIDraggable;t[e]("dragstart",i.start)[e]("drag",i.drag)[e]("dragstop",i.stop)};var u=s.destroy;return s.destroy=function(){u.apply(this,arguments),this.isEnabled=!1},o.Rect=i,o.Packer=n,o})?n.apply(e,r):n)||(t.exports=o)},365:function(t,e,i){var n,r,o;window,r=[i(126)],void 0===(o="function"==typeof(n=function(t){"use strict";function e(t,e,i){this.width=t||0,this.height=e||0,this.sortDirection=i||"downwardLeftToRight",this.reset()}var i=e.prototype;i.reset=function(){this.spaces=[];var e=new t({x:0,y:0,width:this.width,height:this.height});this.spaces.push(e),this.sorter=n[this.sortDirection]||n.downwardLeftToRight},i.pack=function(t){for(var e=0;e<this.spaces.length;e++){var i=this.spaces[e];if(i.canFit(t)){this.placeInSpace(t,i);break}}},i.columnPack=function(t){for(var e=0;e<this.spaces.length;e++){var i=this.spaces[e];if(i.x<=t.x&&i.x+i.width>=t.x+t.width&&i.height>=t.height-.01){t.y=i.y,this.placed(t);break}}},i.rowPack=function(t){for(var e=0;e<this.spaces.length;e++){var i=this.spaces[e];if(i.y<=t.y&&i.y+i.height>=t.y+t.height&&i.width>=t.width-.01){t.x=i.x,this.placed(t);break}}},i.placeInSpace=function(t,e){t.x=e.x,t.y=e.y,this.placed(t)},i.placed=function(t){for(var e=[],i=0;i<this.spaces.length;i++){var n=this.spaces[i],r=n.getMaximalFreeRects(t);r?e.push.apply(e,r):e.push(n)}this.spaces=e,this.mergeSortSpaces()},i.mergeSortSpaces=function(){e.mergeRects(this.spaces),this.spaces.sort(this.sorter)},i.addSpace=function(t){this.spaces.push(t),this.mergeSortSpaces()},e.mergeRects=function(t){var e=0,i=t[e];t:for(;i;){for(var n=0,r=t[e+n];r;){if(r==i)n++;else{if(r.contains(i)){t.splice(e,1),i=t[e];continue t}i.contains(r)?t.splice(e+n,1):n++}r=t[e+n]}i=t[++e]}return t};var n={downwardLeftToRight:function(t,e){return t.y-e.y||t.x-e.x},rightwardTopToBottom:function(t,e){return t.x-e.x||t.y-e.y}};return e})?n.apply(e,r):n)||(t.exports=o)},366:function(t,e,i){var n,r,o;window,r=[i(106),i(126)],void 0===(o="function"==typeof(n=function(t,e){"use strict";var i="string"==typeof document.documentElement.style.transform?"transform":"WebkitTransform",n=function(){t.Item.apply(this,arguments)},r=n.prototype=Object.create(t.Item.prototype),o=r._create;r._create=function(){o.call(this),this.rect=new e};var s=r.moveTo;return r.moveTo=function(t,e){var i=Math.abs(this.position.x-t),n=Math.abs(this.position.y-e),r=this.layout.dragItemCount&&!this.isPlacing&&!this.isTransitioning&&i<1&&n<1;r?this.goTo(t,e):s.apply(this,arguments)},r.enablePlacing=function(){this.removeTransitionStyles(),this.isTransitioning&&i&&(this.element.style[i]="none"),this.isTransitioning=!1,this.getSize(),this.layout._setRectSize(this.element,this.rect),this.isPlacing=!0},r.disablePlacing=function(){this.isPlacing=!1},r.removeElem=function(){var t=this.element.parentNode;t&&t.removeChild(this.element),this.layout.packer.addSpace(this.rect),this.emitEvent("remove",[this])},r.showDropPlaceholder=function(){var t=this.dropPlaceholder;t||((t=this.dropPlaceholder=document.createElement("div")).className="packery-drop-placeholder",t.style.position="absolute"),t.style.width=this.size.width+"px",t.style.height=this.size.height+"px",this.positionDropPlaceholder(),this.layout.element.appendChild(t)},r.positionDropPlaceholder=function(){this.dropPlaceholder.style[i]="translate("+this.rect.x+"px, "+this.rect.y+"px)"},r.hideDropPlaceholder=function(){var t=this.dropPlaceholder.parentNode;t&&t.removeChild(this.dropPlaceholder)},n})?n.apply(e,r):n)||(t.exports=o)},54:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n,r=i(3),o=(n=r)&&n.__esModule?n:{default:n};e.default=o.default.renderable((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"5x";return o.default.span(".fa-stack.fa-"+t,(function(){return o.default.i(".fa.fa-image.fa-stack-1x"),o.default.i(".fa.fa-ban.fa-stack-2x.text-danger")}))}))},58:function(t,e,i){var n,r;!function(o,s){"use strict";n=[i(75)],void 0===(r=function(t){return function(t,e){var i=t.jQuery,n=t.console;function r(t,e){for(var i in e)t[i]=e[i];return t}var o=Array.prototype.slice;function s(t,e,a){if(!(this instanceof s))return new s(t,e,a);var h,u=t;("string"==typeof t&&(u=document.querySelectorAll(t)),u)?(this.elements=(h=u,Array.isArray(h)?h:"object"==typeof h&&"number"==typeof h.length?o.call(h):[h]),this.options=r({},this.options),"function"==typeof e?a=e:r(this.options,e),a&&this.on("always",a),this.getImages(),i&&(this.jqDeferred=new i.Deferred),setTimeout(this.check.bind(this))):n.error("Bad element for imagesLoaded "+(u||t))}s.prototype=Object.create(e.prototype),s.prototype.options={},s.prototype.getImages=function(){this.images=[],this.elements.forEach(this.addElementImages,this)},s.prototype.addElementImages=function(t){"IMG"==t.nodeName&&this.addImage(t),!0===this.options.background&&this.addElementBackgroundImages(t);var e=t.nodeType;if(e&&a[e]){for(var i=t.querySelectorAll("img"),n=0;n<i.length;n++){var r=i[n];this.addImage(r)}if("string"==typeof this.options.background){var o=t.querySelectorAll(this.options.background);for(n=0;n<o.length;n++){var s=o[n];this.addElementBackgroundImages(s)}}}};var a={1:!0,9:!0,11:!0};function h(t){this.img=t}function u(t,e){this.url=t,this.element=e,this.img=new Image}return s.prototype.addElementBackgroundImages=function(t){var e=getComputedStyle(t);if(e)for(var i=/url\((['"])?(.*?)\1\)/gi,n=i.exec(e.backgroundImage);null!==n;){var r=n&&n[2];r&&this.addBackground(r,t),n=i.exec(e.backgroundImage)}},s.prototype.addImage=function(t){var e=new h(t);this.images.push(e)},s.prototype.addBackground=function(t,e){var i=new u(t,e);this.images.push(i)},s.prototype.check=function(){var t=this;function e(e,i,n){setTimeout((function(){t.progress(e,i,n)}))}this.progressedCount=0,this.hasAnyBroken=!1,this.images.length?this.images.forEach((function(t){t.once("progress",e),t.check()})):this.complete()},s.prototype.progress=function(t,e,i){this.progressedCount++,this.hasAnyBroken=this.hasAnyBroken||!t.isLoaded,this.emitEvent("progress",[this,t,e]),this.jqDeferred&&this.jqDeferred.notify&&this.jqDeferred.notify(this,t),this.progressedCount==this.images.length&&this.complete(),this.options.debug&&n&&n.log("progress: "+i,t,e)},s.prototype.complete=function(){var t=this.hasAnyBroken?"fail":"done";if(this.isComplete=!0,this.emitEvent(t,[this]),this.emitEvent("always",[this]),this.jqDeferred){var e=this.hasAnyBroken?"reject":"resolve";this.jqDeferred[e](this)}},h.prototype=Object.create(e.prototype),h.prototype.check=function(){this.getIsImageComplete()?this.confirm(0!==this.img.naturalWidth,"naturalWidth"):(this.proxyImage=new Image,this.proxyImage.addEventListener("load",this),this.proxyImage.addEventListener("error",this),this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.proxyImage.src=this.img.src)},h.prototype.getIsImageComplete=function(){return this.img.complete&&this.img.naturalWidth},h.prototype.confirm=function(t,e){this.isLoaded=t,this.emitEvent("progress",[this,this.img,e])},h.prototype.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},h.prototype.onload=function(){this.confirm(!0,"onload"),this.unbindEvents()},h.prototype.onerror=function(){this.confirm(!1,"onerror"),this.unbindEvents()},h.prototype.unbindEvents=function(){this.proxyImage.removeEventListener("load",this),this.proxyImage.removeEventListener("error",this),this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},u.prototype=Object.create(h.prototype),u.prototype.check=function(){this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.img.src=this.url,this.getIsImageComplete()&&(this.confirm(0!==this.img.naturalWidth,"naturalWidth"),this.unbindEvents())},u.prototype.unbindEvents=function(){this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},u.prototype.confirm=function(t,e){this.isLoaded=t,this.emitEvent("progress",[this,this.element,e])},s.makeJQueryPlugin=function(e){(e=e||t.jQuery)&&((i=e).fn.imagesLoaded=function(t,e){return new s(this,t,e).jqDeferred.promise(i(this))})},s.makeJQueryPlugin(),s}(o,t)}.apply(e,n))||(t.exports=r)}("undefined"!=typeof window?window:this)},65:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),r=h(i(4)),o=h(i(1)),s=i(2),a=h(i(3));function h(t){return t&&t.__esModule?t:{default:t}}o.default.Radio.channel("global"),o.default.Radio.channel("messages"),e.default=function(){var t=function(t){function e(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var t=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments));return t.keydownHandler=t.keydownHandler.bind(t),t}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),n(e,[{key:"options",value:function(){return{setKeyHandler:!1,barLength:15,barStopAt:7}}},{key:"templateContext",value:function(){return{collection:this.collection,barLength:this.getOption("barLength"),barStopAt:this.getOption("barStopAt")}}},{key:"onDomRefresh",value:function(){return this.updateNavButtons()}},{key:"turnPage",value:function(t){var e;return t.preventDefault(),e=(0,r.default)(t.target).attr("data-pagenumber"),this.collection.getPage(Number(e)),this.updateNavButtons()}},{key:"updateNavButtons",value:function(){var t,e,i,n;return n=this.collection.state,i=this.ui.prevButton.parent(),n.currentPage===n.firstPage?i.hasClass("disabled")||i.addClass("disabled"):i.hasClass("disabled")&&i.removeClass("disabled"),e=this.ui.nextButton.parent(),n.currentPage===n.lastPage?e.hasClass("disabled")||e.addClass("disabled"):e.addClass("disabled")&&e.removeClass("disabled"),this.ui.numberedPage.parent().removeClass("active"),this.ui.numberedPage.removeClass("text-white"),this.ui.numberedPage.addClass("text-dark"),(t=(0,r.default)('[data-pagenumber="'+n.currentPage+'"]')).parent().addClass("active"),t.removeClass("text-dark"),t.addClass("text-white")}},{key:"getAnotherPage",value:function(t){var e,i,n,r;if(i=(r=this.collection.state).currentPage===r.lastPage,e=r.currentPage===r.firstPage,"prev"!==t||e){if("next"!==t||i){if(i)return;throw new Error("bad direction '"+t+"'")}n=this.collection.getNextPage()}else r.currentPage!==r.firstPage&&(n=this.collection.getPreviousPage());return this.updateNavButtons(),n}},{key:"getPreviousPage",value:function(){return this.getAnotherPage("prev")}},{key:"getNextPage",value:function(){return this.getAnotherPage("next")}},{key:"onRender",value:function(){if(this.getOption("setKeyHandler"))return this.onRenderHandleKeys()}},{key:"onBeforeDestroy",value:function(){if(this.getOption("setKeyHandler"))return this.onBeforeDestroyHandleKeys()}},{key:"handleKeyCommand",value:function(t){if("prev"===t||"next"===t)return this.getAnotherPage(t)}},{key:"keydownHandler",value:function(t){var i,n,r,o;for(i in function(t,e){if(!(t instanceof e))throw new Error("Bound instance method accessed before binding")}(this,e),r=[],n=this.keycommands)o=n[i],t.keyCode===o?r.push(this.handleKeyCommand(i)):r.push(void 0);return r}},{key:"onRenderHandleKeys",value:function(){return(0,r.default)("html").keydown(this.keydownHandler)}},{key:"onBeforeDestroyHandleKeys",value:function(){return(0,r.default)("html").unbind("keydown",this.keydownHandler)}}]),e}(s.View);return t.prototype.tagName="ul",t.prototype.className="pagination",t.prototype.template=a.default.renderable((function(t){var e,i,n,r,s,h,u,c,l,f,d;for((f=t instanceof o.default.Collection?t.state:t.collection.state).totalPages,n=f.firstPage,e=!1,(s=f.lastPage)>t.barLength&&(e=!0,d=t.barStopAt,l=s-t.barStopAt),a.default.li(".page-item",(function(){return a.default.a(".prev.page-link.bg-body-d5",(function(){return a.default.i(".fa.fa-arrow-left")}))})),i=!1,h=r=u=n,c=s;u<=c?r<=c:r>=c;h=u<=c?++r:--r)e&&h>=d&&h<=l?i||(i=!0,a.default.li(".page-item",(function(){return a.default.a(".ellipsis-page.page-link.bg-body-d5.text-dark","...")}))):a.default.li(".page-item",(function(){return a.default.a(".numbered-page.page-link.bg-body-d5.text-dark",{href:"#",data:{pageNumber:h}},h)}));return a.default.li(".page-item",(function(){return a.default.a(".next.page-link.bg-body-d5",(function(){return a.default.i(".fa.fa-arrow-right")}))}))})),t.prototype.ui={numberedPage:".numbered-page",prevButton:".prev",nextButton:".next"},t.prototype.events={"click @ui.numberedPage":"turnPage","click @ui.prevButton":"getPreviousPage","click @ui.nextButton":"getNextPage"},t.prototype.keycommands={prev:37,next:39},t}.call(void 0)}}]);
//# sourceMappingURL=vendors~tvmaze-view-show-list-packery-b04818ade7589f62f49d.js.map