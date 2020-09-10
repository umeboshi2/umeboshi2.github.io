(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{101:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i=l(n(5)),r=l(n(1)),a=n(2),u=l(n(4));function l(e){return e&&e.__esModule?e:{default:e}}r.default.Radio.channel("global"),r.default.Radio.channel("messages"),t.default=function(){var e=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments));return e.keydownHandler=e.keydownHandler.bind(e),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"options",value:function(){return{setKeyHandler:!1,barLength:15,barStopAt:7}}},{key:"templateContext",value:function(){return{collection:this.collection,barLength:this.getOption("barLength"),barStopAt:this.getOption("barStopAt")}}},{key:"onDomRefresh",value:function(){return this.updateNavButtons()}},{key:"turnPage",value:function(e){var t;return e.preventDefault(),t=(0,i.default)(e.target).attr("data-pagenumber"),this.collection.getPage(Number(t)),this.updateNavButtons()}},{key:"updateNavButtons",value:function(){var e,t,n,o;return o=this.collection.state,n=this.ui.prevButton.parent(),o.currentPage===o.firstPage?n.hasClass("disabled")||n.addClass("disabled"):n.hasClass("disabled")&&n.removeClass("disabled"),t=this.ui.nextButton.parent(),o.currentPage===o.lastPage?t.hasClass("disabled")||t.addClass("disabled"):t.addClass("disabled")&&t.removeClass("disabled"),this.ui.numberedPage.parent().removeClass("active"),this.ui.numberedPage.removeClass("text-white"),this.ui.numberedPage.addClass("text-dark"),(e=(0,i.default)('[data-pagenumber="'+o.currentPage+'"]')).parent().addClass("active"),e.removeClass("text-dark"),e.addClass("text-white")}},{key:"getAnotherPage",value:function(e){var t,n,o,i;if(n=(i=this.collection.state).currentPage===i.lastPage,t=i.currentPage===i.firstPage,"prev"!==e||t){if("next"!==e||n){if(n)return;throw new Error("bad direction '"+e+"'")}o=this.collection.getNextPage()}else i.currentPage!==i.firstPage&&(o=this.collection.getPreviousPage());return this.updateNavButtons(),o}},{key:"getPreviousPage",value:function(){return this.getAnotherPage("prev")}},{key:"getNextPage",value:function(){return this.getAnotherPage("next")}},{key:"onRender",value:function(){if(this.getOption("setKeyHandler"))return this.onRenderHandleKeys()}},{key:"onBeforeDestroy",value:function(){if(this.getOption("setKeyHandler"))return this.onBeforeDestroyHandleKeys()}},{key:"handleKeyCommand",value:function(e){if("prev"===e||"next"===e)return this.getAnotherPage(e)}},{key:"keydownHandler",value:function(e){var n,o,i,r;for(n in function(e,t){if(!(e instanceof t))throw new Error("Bound instance method accessed before binding")}(this,t),i=[],o=this.keycommands)r=o[n],e.keyCode===r?i.push(this.handleKeyCommand(n)):i.push(void 0);return i}},{key:"onRenderHandleKeys",value:function(){return(0,i.default)("html").keydown(this.keydownHandler)}},{key:"onBeforeDestroyHandleKeys",value:function(){return(0,i.default)("html").unbind("keydown",this.keydownHandler)}}]),t}(a.View);return e.prototype.tagName="ul",e.prototype.className="pagination",e.prototype.template=u.default.renderable((function(e){var t,n,o,i,a,l,s,c,d,p,f;for((p=e instanceof r.default.Collection?e.state:e.collection.state).totalPages,o=p.firstPage,t=!1,(a=p.lastPage)>e.barLength&&(t=!0,f=e.barStopAt,d=a-e.barStopAt),u.default.li(".page-item",(function(){return u.default.a(".prev.page-link.bg-body-d5",(function(){return u.default.i(".fa.fa-arrow-left")}))})),n=!1,l=i=s=o,c=a;s<=c?i<=c:i>=c;l=s<=c?++i:--i)t&&l>=f&&l<=d?n||(n=!0,u.default.li(".page-item",(function(){return u.default.a(".ellipsis-page.page-link.bg-body-d5.text-dark","...")}))):u.default.li(".page-item",(function(){return u.default.a(".numbered-page.page-link.bg-body-d5.text-dark",{href:"#",data:{pageNumber:l}},l)}));return u.default.li(".page-item",(function(){return u.default.a(".next.page-link.bg-body-d5",(function(){return u.default.i(".fa.fa-arrow-right")}))}))})),e.prototype.ui={numberedPage:".numbered-page",prevButton:".prev",nextButton:".next"},e.prototype.events={"click @ui.numberedPage":"turnPage","click @ui.prevButton":"getPreviousPage","click @ui.nextButton":"getNextPage"},e.prototype.keycommands={prev:37,next:39},e}.call(void 0)},461:function(e,t,n){"use strict";var o,i,r,a,u,l,s,c,d,p,f,h,y=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();function v(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function b(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function w(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}i=n(1),c=n(2),h=n(4),f=n(84),n(19).navigate_to_url,u=n(95).default,n(101).default,o=i.Radio.channel("netark"),h.renderable((function(e){return h.div(".row.listview-list-entry",(function(){return h.raw(f("# "+e.appName+" started."))}))})),d=function(){var e=function(e){function t(){return v(this,t),b(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return w(t,e),y(t,[{key:"templateContext",value:function(){return{mediaType:this.getOption("mediaType")}}}]),t}(c.View);return e.prototype.template=h.renderable((function(e){return h[e.mediaType]({controls:"",autoplay:"",src:e.url})})),e}.call(void 0),r=function(){var e=function(e){function t(){return v(this,t),b(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return w(t,e),y(t,[{key:"getAudioUrl",value:function(){return this.getOption("mainModel").fileUrl(this.model.get("name"))}},{key:"linkClicked",value:function(e){var t,n;return e.preventDefault(),t=this.getAudioUrl(),n=new d({model:new i.Model({url:t}),mediaType:this.getOption("mediaType")}),this.showChildView("mediaView",n)}}]),t}(c.View);return e.prototype.template=h.renderable((function(e){var t;return t=(null!=e?e.title:void 0)||e.name,h.div(".listview-list-entry",(function(){return h.a(t+" ("+e.format+")"),h.div(".media-view")}))})),e.prototype.ui={link:"a",mediaView:".media-view"},e.prototype.regions={mediaView:"@ui.mediaView"},e.prototype.events={"click @ui.link":"linkClicked"},e}.call(void 0),a=function(){var e=function(e){function t(){return v(this,t),b(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return w(t,e),y(t,[{key:"childViewOptions",value:function(){return{mainModel:this.model,mediaType:this.getOption("mediaType")}}}]),t}(c.CollectionView);return e.prototype.childView=r,e}.call(void 0),p=function(){var e=function(e){function t(){return v(this,t),b(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return w(t,e),y(t,[{key:"filesButtonClicked",value:function(e){var t,n,o,r,u,l,s,c;return o=this.model.get("files"),u=[],s=[],l=!1,o.forEach((function(e){if(e.name.endsWith(".mp3")&&u.push(e),"original"===e.source&&"Metadata"!==e.format&&s.push(e),"Ogg Video"===e.format)return s.push(e),l=!0})),t=u,r="audio",l&&(t=s,console.log("CFILES",t),r="video"),n=new i.Collection(t),c=new a({collection:n,model:this.model,mediaType:r}),this.showChildView("files",c),this.ui.filesButton.hide()}},{key:"notesButtonClicked",value:function(e){return this.ui.notes.toggle()}}]),t}(c.View);return e.prototype.template=h.renderable((function(e){var t,n,i,r,a;return h.div(".listview-header",e.metadata.title),t=e.files,a=!1,t.forEach((function(e){if(!a){if("JPEG Thumb"===e.format)return a=e;if("Thumbnail"===e.format)return a=e}})),a&&(i=o.request("get-image-url",a.name,e),h.img({src:i})),h.raw(e.metadata.description),r="",(null!=(n=e.metadata)?n.notes:void 0)||(r="display:none"),h.button(".notes-button.btn.btn-info",{style:r},"Notes"),h.div(".notes.listview-list-entry",{style:"display:none"},(function(){return h.raw(e.metadata.notes)})),h.button(".files-button.btn.btn-primary","Files"),h.div(".files")})),e.prototype.ui={notes:".notes",notesButton:".notes-button",filesButton:".files-button",files:".files"},e.prototype.regions={files:"@ui.files"},e.prototype.events={"click @ui.notesButton":"notesButtonClicked","click @ui.filesButton":"filesButtonClicked"},e}.call(void 0),l=function(){var e=function(e){function t(){return v(this,t),b(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return w(t,e),t}(c.View);return e.prototype.template=h.renderable((function(e){return h.div(".jsonview.listview-list-entry",{style:"overflow:auto"})})),e.prototype.behaviors={HasJsonView:{behaviorClass:u}},e}.call(void 0),s=function(){var e=function(e){function t(){return v(this,t),b(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return w(t,e),y(t,[{key:"onRender",value:function(){var e,t;return console.log("MODEL IN MAINVIEW",this.model),e=new l({model:this.model}),this.showChildView("objectView",e),t=new p({model:this.model}),this.showChildView("metadataView",t)}}]),t}(c.View);return e.prototype.template=h.renderable((function(){return h.div(".metadata-view"),h.div(".object-view")})),e.prototype.ui={metadataView:".metadata-view",objectView:".object-view"},e.prototype.regions={metadataView:"@ui.metadataView",objectView:"@ui.objectView"},e}.call(void 0),e.exports=s},95:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=(u(n(1)),u(n(2))),a=u(n(91));function u(e){return e&&e.__esModule?e:{default:e}}n(96),o=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),i(t,[{key:"options",value:function(){return{jviewSelector:".jsonview"}}},{key:"ui",value:function(){return{jsonView:this.getOption("jviewSelector")}}},{key:"onDomRefresh",value:function(){var e;return e=this.view.model.toJSON(),this.view.jsonView=new a.default(e),this.ui.jsonView.prepend(this.view.jsonView.dom)}}]),t}(r.default.Behavior),t.default=o},96:function(e,t,n){var o=n(99);"string"==typeof o&&(o=[[e.i,o,""]]);var i={insert:"head",singleton:!1};n(87)(o,i);o.locals&&(e.exports=o.locals)},99:function(e,t,n){(e.exports=n(86)(!1)).push([e.i,'.jsonView{\n    margin-left: 20px;\n    font-family: Consolas, "Lucida Console", Menlo, "dejavu sans mono", monospace;\n    font-size: 16px;\n    line-height: 16px;\n    padding: 2px;\n    cursor: default;\n    color: cornsilk;\n    white-space: nowrap;\n    -webkit-user-select: none;\n}\n\n.jsonView>div{\n    display: inline-block;\n}\n\n.jsonView>.children, .jsonView.insert{\n    display: block;\n}\n\n.jsonView>.name{\n    color: mistyrose;\n}\n\n.jsonView>.separator:before{\n    content: ":";\n}\n\n.jsonView>.separator {\n    padding-right: 5px;\n}\n\n.jsonView>.value.null{\n    color: rgb(128, 128, 128);\n}\n\n.jsonView>.value.boolean, .jsonView>.value.number{\n    color: lightseagreen;\n}\n\n.jsonView>.value.string:not(.edit):before, .jsonView>.value.string:not(.edit):after{\n    content: "\\"";\n}\n\n.jsonView>.value.string {\n    color: lightsalmon;\n}\n\n.jsonView>.name:hover, .jsonView>.value:hover{\n    background-color: rgba(56, 121, 217, 0.1);\n}\n\n.jsonView>.jv-expand, .jsonView>.jv-collapse{\n    min-width: 20px;\n    margin-left: -20px;\n    cursor: pointer;\n}\n\n.jsonView>.jv-expand:before{\n    content: \'\\25B6\';\n}\n\n.jsonView>.jv-collapse:before{\n    content: \'\\25BC\';\n}\n\n.jsonView>.edit{\n    padding: 0px 5px 0px 5px;\n    white-space: nowrap;\n    overflow: hidden;\n    background-color: transparent;\n}\n\n.jsonView>.edit br{\n    display: none;\n}\n\n.jsonView>.edit *{\n    display: inline;\n    white-space: nowrap;\n}\n\n.jsonView>.value.edit{\n    color: rgb(0, 0, 0);\n}\n\n.jsonView>.delete:before{\n    content: \'X\';\n}\n\n.jsonView>.delete{\n    opacity: 0;\n    display: inline;\n    padding: 3px;\n    margin-left: 20px;\n    cursor: pointer;\n    color: rgb(150, 150, 150);\n}\n\n.jsonView>.delete:hover{\n    opacity: 1;\n    color: rgb(0, 0, 0);\n    background: rgb(220, 220, 220);\n}\n\n.jsonView>.insert:before{\n    content: \'+\';\n}\n\n.jsonView>.insert{\n    display: none;\n    color: rgb(150, 150, 150);\n    cursor: pointer;\n}\n\n.jsonView.jv-expanded>.insert, .jsonView.jv-expanded>.insert{\n    display: inline-block;\n    margin-left: 20px;\n    padding: 3px;\n}\n\n.jsonView>.insert:hover{\n    color: rgb(0, 0, 0);\n    background: rgb(220, 220, 220);\n}\n',""])}}]);
//# sourceMappingURL=netark-view-metadata-ce16a6122ce6b8a00c85.js.map