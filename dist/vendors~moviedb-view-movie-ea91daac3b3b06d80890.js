(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{117:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i=n(0),r=n(2);t.default=function(){var e=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"events",value:function(){var e,t,n;return t="mouseenter",(n=this.getOption("uiProperty"))&&(t="mouseenter @ui."+n),(e={})[t]="handleHover",e}},{key:"handleHover",value:function(){var e;(0,i.result)(this.options,"isClickable")&&((e=this.getOption("uiProperty"))?this.ui[e]:this.$el).css({cursor:this.getOption("cursor")})}}]),t}(r.Behavior);return e.prototype.options={uiProperty:"",isClickable:!0,cursor:"pointer"},e}.call(void 0)},410:function(e,t,n){"use strict";var o,i,r,s,a,u,l,c=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();n(5),o=n(1),s=n(2),l=n(4),n(85),r=n(106),n(107),n(88).default,n(19).navigate_to_url,n(84).form_group_input_div,n(87).default;var p=n(104);u=p.movieTemplate,n(411),i=n(413),o.Radio.channel("messages"),o.Radio.channel("moviedb"),a=function(){var e=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),c(t,[{key:"onRender",value:function(){var e;return e=new i({model:this.model}),this.showChildView("credits",e)}},{key:"onDomRefresh",value:function(){return this.jsonView=new r(this.model.toJSON()),this.ui.jsonView.prepend(this.jsonView.dom)}}]),t}(s.View);return e.prototype.template=l.renderable((function(e){return u(e),l.div(".credits")})),e.prototype.templateContext={imgClass:".card-img-bottom"},e.prototype.ui={jsonView:".jsonview",creditsContainer:".credits"},e.prototype.regions={credits:"@ui.creditsContainer"},e}.call(void 0),e.exports=a},411:function(e,t,n){"use strict";var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a,u,l,c,p,f,d,h,v,y;n(5),u=n(1),p=n(2),y=n(4),n(85),c=n(106),n(107),n(88).default,n(19).navigate_to_url,n(84).form_group_input_div,n(87).default,n(117).default;var w=n(104);v=w.posterImage,d=n(412),u.Radio.channel("messages"),a=u.Radio.channel("moviedb"),l=function(){var e=function(e){function t(){return i(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return s(t,e),o(t,[{key:"onDomRefresh",value:function(){return this.jsonView=new c(this.model.toJSON()),this.ui.jsonView.prepend(this.jsonView.dom)}}]),t}(p.View);return e.prototype.template=y.renderable((function(e){var t;return v(e),y.div((function(){return y.text(e.overview)})),e.air_date&&(t=new Date(e.air_date).toDateString(),y.span("Season started "+t)),y.div(".jview")})),e.prototype.ui={jsonView:".jview"},e}.call(void 0),f=function(){var e=function(e){function t(){i(this,t);var e=r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments));return e.showSeasonView=e.showSeasonView.bind(e),e}return s(t,e),o(t,[{key:"attributes",value:function(){return{data:{"season-id":this.model.id}}}},{key:"initialize",value:function(e){var n;return function e(t,n,o){null===t&&(t=Function.prototype);var i=Object.getOwnPropertyDescriptor(t,n);if(void 0===i){var r=Object.getPrototypeOf(t);return null===r?void 0:e(r,n,o)}if("value"in i)return i.value;var s=i.get;return void 0!==s?s.call(o):void 0}(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"initialize",this).call(this,e),n=a.request("TvSeasonDetails"),this.detailsModel=new n({id:this.model.get("season_number")}),this.detailsModel.tvId=this.getOption("tvId")}},{key:"episodesClicked",value:function(){var e,t=this;return(e=this.getRegion("seasonContainer")).hasView()?(console.log("seasonContainer",e),this.ui.seasonContainer.toggle()):(console.log("Checking model",this.detailsModel,this.detailsModel.has("name")),this.detailsModel.has("name")?this.showSeasonView():this.detailsModel.fetch({data:{append_to_response:"images"}}).done((function(){return t.showSeasonView(),t.ui.entryHeader.addClass("bg-dark text-white")})))}},{key:"infoClicked",value:function(){var e,t,n;return(e=this.getRegion("infoContainer")).hasView()?this.ui.infoContainer.toggle():(n=new l({model:this.model}),e.show(n)),"info"===(t=this.ui.infoButton.children("span")).text()?t.text("hide"):t.text("info")}},{key:"showSeasonView",value:function(){var e;return function(e,t){if(!(e instanceof t))throw new Error("Bound instance method accessed before binding")}(this,t),e=new d({model:this.detailsModel}),this.showChildView("seasonContainer",e)}}]),t}(p.View);return e.prototype.className="season-entry listview-list-entry",e.prototype.template=y.renderable((function(e){return y.div(".entry-header",(function(){return y.div(".btn-group",(function(){return y.button(".info-button.btn.btn-info",{type:"button"},(function(){return y.i(".fa.fa-info.mr-1"),y.span("info")})),y.button(".episodes-button.btn.btn-primary",{type:"button"},(function(){return y.i(".fa.fa-tv.mr-1"),y.span("episodes")}))})),y.span(".season-name.ml-3",(function(){return y.text(e.name)}))})),y.div(".info-container"),y.div(".season-container")})),e.prototype.ui={entryHeader:".entry-header",episodesButton:".episodes-button",infoButton:".info-button",seasonName:".season-name",seasonContainer:".season-container",infoContainer:".info-container"},e.prototype.regions={seasonContainer:"@ui.seasonContainer",infoContainer:"@ui.infoContainer"},e.prototype.events={"click @ui.episodesButton":"episodesClicked","click @ui.infoButton":"infoClicked"},e}.call(void 0),h=function(){var e=function(e){function t(){return i(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return s(t,e),o(t,[{key:"ui",value:function(){return{seasonList:".season-list"}}},{key:"regions",value:function(){return{seasonList:"@ui.seasonList"}}},{key:"onRender",value:function(){var e;return e=new p.CollectionView({childView:f,childViewOptions:{tvId:this.model.id},collection:new u.Collection(this.model.get("seasons"))}),this.showChildView("seasonList",e)}}]),t}(p.View);return e.prototype.className="col-md-12",e.prototype.template=y.renderable((function(e){var t,n;return n="Seasons",1===(t=e.number_of_seasons||0)&&(n="Season"),y.div(".listview-header"," "+t+" "+n),y.div(".season-list")})),e}.call(void 0),e.exports=h},412:function(e,t,n){"use strict";var o,i,r,s,a,u,l,c,p,f=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();function d(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function h(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function v(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}n(5),o=n(1),s=n(2),p=n(4),n(85),n(106),n(107),n(88).default,n(19).navigate_to_url,n(84).form_group_input_div,l=n(87).default,a=n(117).default,o.Radio.channel("messages"),o.Radio.channel("moviedb"),c=p.renderable((function(e){return p.a({href:"#moviedb/tv/shows/season/view/"+e.id},(function(){return p.text(e.name)}))})),p.renderable((function(e){return p.div(".season-entry.listview-list-entry",{data:{"season-id":e.id}},(function(){return c(e)}))})),r=function(){var e=function(e){function t(){return d(this,t),h(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return v(t,e),t}(s.View);return e.prototype.attributes={style:{width:"20%","border-style":"solid","border-width":"5px"}},e.prototype.className="card bg-body-d5",e.prototype.template=p.renderable((function(e){return p.div(".row",(function(){return p.div(".col-lg-3",(function(){return e.still_path?p.img({src:"https://image.tmdb.org/t/p/w200"+e.still_path}):l("4x")})),p.div(".col-lg-8.ml-1",(function(){return p.span(e.overview)}))}))})),e}.call(void 0),i=function(){var e=function(e){function t(){return d(this,t),h(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return v(t,e),f(t,[{key:"entryClicked",value:function(){var e,t;return console.log("entryClicked"),(e=this.getRegion("episodeContainer")).hasView()?this.ui.episodeContainer.toggle():(t=new r({model:this.model}),e.show(t))}}]),t}(s.View);return e.prototype.className="listview-list-entry",e.prototype.template=p.renderable((function(e){return p.span(e.name),p.div(".episode-container")})),e.prototype.ui={episodeContainer:".episode-container"},e.prototype.regions={episodeContainer:"@ui.episodeContainer"},e.prototype.behaviors={PointerOnHover:{behaviorClass:a}},e.prototype.events={click:"entryClicked"},e}.call(void 0),u=function(){var e=function(e){function t(){return d(this,t),h(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return v(t,e),f(t,[{key:"ui",value:function(){return{episodeList:".episode-list"}}},{key:"regions",value:function(){return{episodeList:"@ui.episodeList"}}},{key:"onRender",value:function(){var e;return e=new s.CollectionView({childView:i,collection:new o.Collection(this.model.get("episodes"))}),this.showChildView("episodeList",e),console.log("EPisode VEW",e)}}]),t}(s.View);return e.prototype.template=p.renderable((function(e){return p.div(".episode-list")})),e}.call(void 0),e.exports=u},413:function(e,t,n){"use strict";var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a,u,l,c,p,f,d,h,v;n(5),u=n(1),p=n(2),v=n(4),n(85),c=n(106),n(107),n(88).default,n(19).navigate_to_url,n(84).form_group_input_div,n(87).default,n(117).default;var y=n(104);h=y.posterImage,u.Radio.channel("messages"),a=u.Radio.channel("moviedb"),l=function(){var e=function(e){function t(){return i(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return s(t,e),o(t,[{key:"onDomRefresh",value:function(){return this.jsonView=new c(this.model.toJSON()),this.ui.jsonView.prepend(this.jsonView.dom)}}]),t}(p.View);return e.prototype.template=v.renderable((function(e){var t;return h(e),v.div((function(){return v.text(e.overview)})),e.air_date&&(t=new Date(e.air_date).toDateString(),v.span("Season started "+t)),v.div(".jview")})),e.prototype.ui={jsonView:".jview"},e}.call(void 0),f=function(){var e=function(e){function t(){i(this,t);var e=r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments));return e.showSeasonView=e.showSeasonView.bind(e),e}return s(t,e),o(t,[{key:"attributes",value:function(){return{data:{"season-id":this.model.id}}}},{key:"initialize",value:function(e){var n;return function e(t,n,o){null===t&&(t=Function.prototype);var i=Object.getOwnPropertyDescriptor(t,n);if(void 0===i){var r=Object.getPrototypeOf(t);return null===r?void 0:e(r,n,o)}if("value"in i)return i.value;var s=i.get;return void 0!==s?s.call(o):void 0}(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"initialize",this).call(this,e),n=a.request("TvSeasonDetails"),this.detailsModel=new n({id:this.model.get("season_number")}),this.detailsModel.tvId=this.getOption("tvId")}},{key:"episodesClicked",value:function(){var e,t=this;return(e=this.getRegion("seasonContainer")).hasView()?(console.log("seasonContainer",e),this.ui.seasonContainer.toggle()):(console.log("Checking model",this.detailsModel,this.detailsModel.has("name")),this.detailsModel.has("name")?this.showSeasonView():this.detailsModel.fetch({data:{append_to_response:"images"}}).done((function(){return t.showSeasonView(),t.ui.entryHeader.addClass("bg-dark text-white")})))}},{key:"infoClicked",value:function(){var e,t,n;return(e=this.getRegion("infoContainer")).hasView()?this.ui.infoContainer.toggle():(n=new l({model:this.model}),e.show(n)),"info"===(t=this.ui.infoButton.children("span")).text()?t.text("hide"):t.text("info")}},{key:"showSeasonView",value:function(){var e;return function(e,t){if(!(e instanceof t))throw new Error("Bound instance method accessed before binding")}(this,t),e=new SeasonView({model:this.detailsModel}),this.showChildView("seasonContainer",e)}}]),t}(p.View);return e.prototype.className="season-entry listview-list-entry",e.prototype.template=v.renderable((function(e){return v.div(".entry-header",(function(){return v.div(".btn-group",(function(){return v.button(".info-button.btn.btn-info",{type:"button"},(function(){return v.i(".fa.fa-info.mr-1"),v.span("info")})),v.button(".episodes-button.btn.btn-primary",{type:"button"},(function(){return v.i(".fa.fa-tv.mr-1"),v.span("episodes")}))})),v.span(".season-name.ml-3",(function(){return v.text(e.name)}))})),v.div(".info-container"),v.div(".season-container")})),e.prototype.ui={entryHeader:".entry-header",episodesButton:".episodes-button",infoButton:".info-button",seasonName:".season-name",seasonContainer:".season-container",infoContainer:".info-container"},e.prototype.regions={seasonContainer:"@ui.seasonContainer",infoContainer:"@ui.infoContainer"},e.prototype.events={"click @ui.episodesButton":"episodesClicked","click @ui.infoButton":"infoClicked"},e}.call(void 0),d=function(){var e=function(e){function t(){return i(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return s(t,e),o(t,[{key:"ui",value:function(){return{seasonList:".season-list"}}},{key:"regions",value:function(){return{seasonList:"@ui.seasonList"}}},{key:"onRender",value:function(){var e;return e=new p.CollectionView({childView:f,childViewOptions:{tvId:this.model.id},collection:new u.Collection(this.model.get("seasons"))}),this.showChildView("seasonList",e)}}]),t}(p.View);return e.prototype.className="col-md-12",e.prototype.template=v.renderable((function(e){var t,n;return n="Seasons",1===(t=e.number_of_seasons||0)&&(n="Season"),v.div(".listview-header"," "+t+" "+n),v.div(".season-list")})),e}.call(void 0),e.exports=d}}]);
//# sourceMappingURL=vendors~moviedb-view-movie-ea91daac3b3b06d80890.js.map