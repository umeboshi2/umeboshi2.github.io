(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{415:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o,r=t(34),i=(o=r)&&o.__esModule?o:{default:o};n.default=i.default.renderable((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"5x";return i.default.span(".fa-stack.fa-"+e,(function(){return i.default.i(".fa.fa-image.fa-stack-1x"),i.default.i(".fa.fa-ban.fa-stack-2x.text-danger")}))}))},416:function(e,n,t){"use strict";var o=t(424),r=t(425).EventEmitter;function i(e,n){var t=this;r.call(t),arguments.length<2&&(n=e,e=void 0);var o,a,s,l=[],u=[],c=!1,d=!1,p=!1,f=!0,m=!0,v={container:document.createElement("div"),collapseExpand:document.createElement("div"),name:document.createElement("div"),separator:document.createElement("div"),value:document.createElement("div"),delete:document.createElement("div"),children:document.createElement("div"),insert:document.createElement("div")};function b(){var e="object"==s||"array"==s;u.forEach((function(e){e.refresh()})),v.collapseExpand.style.display=e?"":"none",c&&e?y():h()}function h(e){e&&u.forEach((function(e){e.collapse(!0)})),c=!1,v.children.style.display="none",v.collapseExpand.className="jv-expand",v.container.classList.add("jv-collapsed"),v.container.classList.remove("jv-expanded")}function y(e){var n;n="object"==s?Object.keys(a):"array"==s?a.map((function(e,n){return n})):[];for(var t=u.length-1;t>=0;t--){var o=u[t];-1==n.indexOf(o.name)&&(u.splice(t,1),x(o))}if("object"!=s&&"array"!=s)return h();n.forEach((function(e){j(e,a[e])})),e&&u.forEach((function(e){e.expand(!0)})),c=!0,v.children.style.display="",v.collapseExpand.className="jv-collapse",v.container.classList.add("jv-expanded"),v.container.classList.remove("jv-collapsed")}function w(e){var n=typeof e,r=o;if(e!==o){if("string"!=n&&"number"!=n)throw new Error("Name must be either string or number, "+e);v.name.innerText=e,o=e,t.emit("rename",t,r,e)}}function g(e){var n,r=a;switch(s=function(e){var n=typeof e;if("object"==n){if(null===e)return"null";if(Array.isArray(e))return"array"}return n}(e)){case"null":n="null";break;case"object":n="Object["+Object.keys(e).length+"]";break;case"array":n="Array["+e.length+"]";break;default:n=e}v.value.innerText=n,v.value.className="value "+s,e!==a&&(a=e,"array"!=s&&"object"!=s||(m=!1,"array"==s&&(f=!1)),b(),t.emit("change",o,r,e))}function j(e,n){for(var t,o=0,r=u.length;o<r;o++)if(u[o].name==e){t=u[o];break}return t?t.value=n:((t=new i(e,n)).once("rename",O),t.on("delete",S),t.on("change",L),u.push(t)),v.children.appendChild(t.dom),t}function x(e){e.dom.parentNode&&v.children.removeChild(e.dom),e.destroy(),e.removeAllListeners()}function k(e){var n="name"==e?f:m,t=v[e];n&&("value"==e&&"string"==s&&(t.innerText='"'+a+'"'),"name"==e&&(d=!0),"value"==e&&(p=!0),t.classList.add("edit"),t.setAttribute("contenteditable",!0),t.focus(),document.execCommand("selectAll",!1,null))}function E(e){var n=v[e];if("name"==e){if(!d)return;d=!1}if("value"==e){if(!p)return;p=!1}if("name"==e)w(n.innerText);else try{g(JSON.parse(n.innerText))}catch(e){g(n.innerText)}n.classList.remove("edit"),n.removeAttribute("contenteditable")}function V(e,n){switch(n.key){case"Escape":case"Enter":E(e)}}function _(e,n){"Tab"==n.key&&(E(e),"name"==e?(n.preventDefault(),k("value")):E(e))}function O(e,n,t){t&&"array"!=s&&!(t in a)?(a[t]=e.value,delete a[n]):void 0===n?x(e):e.name=n,e.once("rename",O)}function L(e,n,r,i){i||(a[e]=r),t.emit("change",o+"."+e,n,r,!0)}function S(e){var n=e.name;"array"==s?a.splice(n,1):delete a[n],b()}function C(e,n,t){e.addEventListener(n,t),l.push({element:e,name:n,fn:t})}Object.defineProperties(t,{dom:{value:v.container,enumerable:!0},name:{get:function(){return o},set:w,enumerable:!0},value:{get:function(){return a},set:g,enumerable:!0},type:{get:function(){return s},enumerable:!0},nameEditable:{get:function(){return f},set:function(e){f=!!e},enumerable:!0},valueEditable:{get:function(){return m},set:function(e){m=!!e},enumerable:!0},refresh:{value:b,enumerable:!0},collapse:{value:h,enumerable:!0},expand:{value:y,enumerable:!0},destroy:{value:function(){var e,n;for(;n=l.pop();)n.element.removeEventListener(n.name,n.fn);for(;e=u.pop();)x(e)},enumerable:!0},editName:{value:k.bind(null,"name"),enumerable:!0},editValue:{value:k.bind(null,"value"),enumerable:!0}}),Object.keys(v).forEach((function(e){var n=v[e];"container"!=e&&(n.className=e,v.container.appendChild(n))})),v.container.className="jsonView",C(v.collapseExpand,"click",(function(){c?h():y()})),C(v.value,"click",y.bind(null,!1)),C(v.name,"click",y.bind(null,!1)),C(v.name,"dblclick",k.bind(null,"name")),C(v.name,"blur",E.bind(null,"name")),C(v.name,"keypress",V.bind(null,"name")),C(v.name,"keydown",_.bind(null,"name")),C(v.value,"dblclick",k.bind(null,"value")),C(v.value,"blur",E.bind(null,"value")),C(v.value,"keypress",V.bind(null,"value")),C(v.value,"keydown",_.bind(null,"value")),C(v.value,"keydown",(function(e){var n,t=0;if("number"!=s)return;switch(e.key){case"ArrowDown":case"Down":t=-1;break;case"ArrowUp":case"Up":t=1}e.shiftKey&&(t*=10);(e.ctrlKey||e.metaKey)&&(t/=10);t&&(n=parseFloat(v.value.innerText),isNaN(n)||g(Number((n+t).toFixed(10))))})),C(v.insert,"click",(function(){var e=j("array"==s?a.length:void 0,null);"array"==s?(a.push(null),e.editValue()):e.editName()})),C(v.delete,"click",(function(){t.emit("delete",t)})),w(e),g(n)}e.exports=i,o.inherits(i,r)},467:function(e,n,t){var o=t(412),r=t(493);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var i={insert:"head",singleton:!1};o(r,i);e.exports=r.locals||{}},493:function(e,n,t){(e.exports=t(413)(!1)).push([e.i,'.jsonView{\n    margin-left: 20px;\n    font-family: Consolas, "Lucida Console", Menlo, "dejavu sans mono", monospace;\n    font-size: 16px;\n    line-height: 16px;\n    padding: 2px;\n    cursor: default;\n    color: rgb(66, 66, 66);\n    white-space: nowrap;\n    -webkit-user-select: none;\n}\n\n.jsonView>div{\n    display: inline-block;\n}\n\n.jsonView>.children, .jsonView.insert{\n    display: block;\n}\n\n.jsonView>.name{\n    color: rgb(136, 19, 145);\n}\n\n.jsonView>.separator:before{\n    content: ":";\n}\n\n.jsonView>.separator {\n    padding-right: 5px;\n}\n\n.jsonView>.value.null{\n    color: rgb(128, 128, 128);\n}\n\n.jsonView>.value.boolean, .jsonView>.value.number{\n    color: rgb(28, 0, 207);\n}\n\n.jsonView>.value.string:not(.edit):before, .jsonView>.value.string:not(.edit):after{\n    content: "\\"";\n}\n\n.jsonView>.value.string {\n    color: rgb(196, 26, 22);\n}\n\n.jsonView>.name:hover, .jsonView>.value:hover{\n    background-color: rgba(56, 121, 217, 0.1);\n}\n\n.jsonView>.jv-expand, .jsonView>.jv-collapse{\n    min-width: 20px;\n    margin-left: -20px;\n    cursor: pointer;\n}\n\n.jsonView>.jv-expand:before{\n    content: \'\\25B6\';\n}\n\n.jsonView>.jv-collapse:before{\n    content: \'\\25BC\';\n}\n\n.jsonView>.edit{\n    padding: 0px 5px 0px 5px;\n    white-space: nowrap;\n    overflow: hidden;\n    background-color: transparent;\n}\n\n.jsonView>.edit br{\n    display: none;\n}\n\n.jsonView>.edit *{\n    display: inline;\n    white-space: nowrap;\n}\n\n.jsonView>.value.edit{\n    color: rgb(0, 0, 0);\n}\n\n.jsonView>.delete:before{\n    content: \'X\';\n}\n\n.jsonView>.delete{\n    opacity: 0;\n    display: inline;\n    padding: 3px;\n    margin-left: 20px;\n    cursor: pointer;\n    color: rgb(150, 150, 150);\n}\n\n.jsonView>.delete:hover{\n    opacity: 1;\n    color: rgb(0, 0, 0);\n    background: rgb(220, 220, 220);\n}\n\n.jsonView>.insert:before{\n    content: \'+\';\n}\n\n.jsonView>.insert{\n    display: none;\n    color: rgb(150, 150, 150);\n    cursor: pointer;\n}\n\n.jsonView.jv-expanded>.insert, .jsonView.jv-expanded>.insert{\n    display: inline-block;\n    margin-left: 20px;\n    padding: 3px;\n}\n\n.jsonView>.insert:hover{\n    color: rgb(0, 0, 0);\n    background: rgb(220, 220, 220);\n}\n',""])},703:function(e,n,t){"use strict";var o,r,i,a,s,l,u,c,d,p=function(){function e(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(n,t,o){return t&&e(n.prototype,t),o&&e(n,o),n}}();t(31),r=t(6),s=t(7),d=t(34),t(414),a=t(416),t(467),t(422).default,t(411).navigate_to_url,t(420).form_group_input_div,c=t(415).default,i=t(704),l=r.Radio.channel("messages"),o=r.Radio.channel("tvmaze"),u=function(){var e=function(e){function n(){return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),function(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(n,e),p(n,[{key:"onDomRefresh",value:function(){var e;return this.jsonView=new a(this.model.toJSON().content),this.ui.body.prepend(this.jsonView.dom),e=o.request("get-local-episode-collection"),this.localEpisodes=new e,this.showLocalEpisodes()}},{key:"showLocalEpisodes",value:function(){var e=this;return this.localEpisodes.fetch({data:{show_id:this.model.get("id")}}).done((function(){var n,t;return e.localEpisodes.isEmpty()?(l.request("info","Retrieving episodes..."),n=o.request("get-remote-episodes",e.model.id),n.fetch().done((function(){return e.saveEpisodes(n)}))):(t=new i({collection:e.localEpisodes}),e.showChildView("episodes",t))}))}},{key:"saveEpisodes",value:function(e){var n,t,r=this;return t=this.model.get("id"),n=[],e.models.forEach((function(e){var r,i;return r={id:e.get("id"),show_id:t,content:e.toJSON()},i=o.request("save-local-episode",r),n.push(i)})),Promise.all(n).then((function(e){return n.length&&r.showLocalEpisodes(),l.request("success","Retrieved "+n.length+" episodes.")}))}}]),n}(s.View);return e.prototype.template=d.renderable((function(e){var n;return n=e.content,d.div(".card.bg-body-d5",(function(){return d.div(".row",(function(){return d.div(".col-md-2",(function(){var t;return(null!=(t=n.image)?t.medium:void 0)?d.img(".card-img-bottom",{src:e.content.image.medium}):c("5x")})),d.div(".col-md-9",(function(){return d.div(".card-block",(function(){return d.h3(".card-title",e.content.name),d.raw(e.content.summary)}))}))})),d.div(".row",(function(){return d.div(".col-md-8",(function(){return d.div(".episode-list-region")})),d.div(".col-md-4",(function(){return d.div(".listview-header","ShowObject"),d.div(".jsonview.listview-list-entry",{style:"overflow:auto"})}))}))}))})),e.prototype.ui={body:".jsonview",episodesButton:".episodes-button",saveEpisodesButton:".save-episodes",episodesList:".episode-list-region"},e.prototype.regions={episodes:"@ui.episodesList"},e}.call(void 0),e.exports=u},704:function(e,n,t){"use strict";var o,r,i,a,s,l,u,c=function(){function e(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(n,t,o){return t&&e(n.prototype,t),o&&e(n,o),n}}();function d(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function p(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}function f(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}o=t(6),s=t(7),u=t(34),a=t(416),t(467),t(411).navigate_to_url,t(420).form_group_input_div,t(415).default,o.Radio.channel("messages"),o.Radio.channel("tvmaze"),l=u.renderable((function(e){return u.div(".card.bg-body-d10",(function(){return u.div(".card-header",(function(){return e.summary||e.img_med?u.span(".text-local-secondary",{href:"#"},e.name):u.span(".text-light",e.name),u.span(".bg-body-d5.pull-right",(function(){return e.season&&(u.span("Season "+e.season),u.raw("&nbsp;&nbsp;&nbsp;")),u.span(".bg-body-d10",e.airdate.toDateString())}))})),u.div(".card-block",(function(){return u.div(".summary.row",{style:"display:none"},(function(){return(null!=e?e.img_med:void 0)?(u.div(".col-md-7",(function(){return u.raw(e.summary)})),u.div(".col-md-5",(function(){return u.img(".card-img-bottom.pull-right",{src:e.img_med})}))):u.div(".col-md-12",(function(){return u.raw(e.summary)}))})),u.div(".jsonview")}))}))})),i=function(){var e=function(e){function n(){return d(this,n),p(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return f(n,e),c(n,[{key:"canShowSummary",value:function(){var e,n;return n=this.model.get("summary"),e=this.model.get("img_med"),n||e}},{key:"showEpisodeSummary",value:function(e){if(e.preventDefault(),this.canShowSummary())return this.ui.summary.toggle()}},{key:"onDomRefreshJsonVIew",value:function(){return this.jsonview=new a(this.model.toJSON()),this.ui.objectContainer.prepend(this.jsonview.dom)}},{key:"handleHover",value:function(){if(this.canShowSummary())return this.$el.css({cursor:"pointer"})}}]),n}(s.View);return e.prototype.template=l,e.prototype.ui={summary:".summary",objectContainer:".jsonview"},e.prototype.regions={summary:"@ui.summary",objectContainer:"@ui.objectContainer"},e.prototype.events={click:"showEpisodeSummary",mouseenter:"handleHover"},e}.call(void 0),r=function(){var e=function(e){function n(){return d(this,n),p(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return f(n,e),c(n,[{key:"onRender",value:function(){var e;return e=new s.CollectionView({collection:this.collection,childView:i}),this.showChildView("itemList",e)}}]),n}(s.View);return e.prototype.template=u.renderable((function(e){return u.div(".listview-header",(function(){return u.text("Episodes")})),u.div(".episode-list")})),e.prototype.ui={header:".listview-header",itemList:".episode-list"},e.prototype.regions={itemList:"@ui.itemList"},e}.call(void 0),e.exports=r}}]);
//# sourceMappingURL=tvmaze-view-local-show-b54cec1438dae89dc4c3.js.map