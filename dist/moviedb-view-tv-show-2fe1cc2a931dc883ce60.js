(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{127:function(e,t,n){var i,s,o,r,a,l,d,u,h,c,p;n(4),i=n(2),r=n(3),p=n(0),n(44),n(58),n(57),n(49).default,({navigate_to_url:u}=n(14)),({form_group_input_div:d}=n(43)),h=n(46).default,a=n(99).default,i.Radio.channel("messages"),i.Radio.channel("moviedb"),c=p.renderable(function(e){return p.a({href:`#moviedb/tv/shows/season/view/${e.id}`},function(){return p.text(e.name)})}),p.renderable(function(e){return p.div(".season-entry.listview-list-entry",{data:{"season-id":e.id}},function(){return c(e)})}),o=function(){class e extends r.View{}return e.prototype.attributes={style:{width:"20%","border-style":"solid","border-width":"5px"}},e.prototype.className="card bg-body-d5",e.prototype.template=p.renderable(function(e){return p.div(".row",function(){return p.div(".col-md-2",function(){return e.still_path?p.img({src:`https://image.tmdb.org/t/p/w200${e.still_path}`}):h("4x")}),p.div(".col-md-9",function(){return p.span(e.overview)})})}),e}.call(this),s=function(){class e extends r.View{entryClicked(){var e,t;return console.log("entryClicked"),(e=this.getRegion("episodeContainer")).hasView()?this.ui.episodeContainer.toggle():(t=new o({model:this.model}),e.show(t))}}return e.prototype.className="listview-list-entry",e.prototype.template=p.renderable(function(e){return p.span(e.name),p.div(".episode-container")}),e.prototype.ui={episodeContainer:".episode-container"},e.prototype.regions={episodeContainer:"@ui.episodeContainer"},e.prototype.behaviors={PointerOnHover:{behaviorClass:a}},e.prototype.events={click:"entryClicked"},e}.call(this),l=function(){class e extends r.View{ui(){return{episodeList:".episode-list"}}regions(){return{episodeList:"@ui.episodeList"}}onRender(){var e;return e=new r.CollectionView({childView:s,collection:new i.Collection(this.model.get("episodes"))}),this.showChildView("episodeList",e),console.log("EPisode VEW",e)}}return e.prototype.template=p.renderable(function(e){return p.div(".episode-list")}),e}.call(this),e.exports=l},128:function(e,t,n){var i,s,o,r,a,l,d,u,h,c,p=function(e,t){if(!(e instanceof t))throw new Error("Bound instance method accessed before binding")};n(4),s=n(2),r=n(3),c=n(0),n(44),n(58),n(57),n(49).default,({navigate_to_url:h}=n(14)),({form_group_input_div:u}=n(43)),n(46).default,n(99).default,l=n(127),s.Radio.channel("messages"),i=s.Radio.channel("moviedb"),o=function(){class e extends r.View{}return e.prototype.template=c.renderable(function(e){return c.div(function(){return c.text(e.overview)})}),e}.call(this),a=function(){class e extends r.View{constructor(){super(...arguments),this.showSeasonView=this.showSeasonView.bind(this)}attributes(){return{data:{"season-id":this.model.id}}}initialize(e){var t;return super.initialize(e),t=i.request("TvSeasonDetails"),this.detailsModel=new t({id:this.model.get("season_number")}),this.detailsModel.tvId=this.getOption("tvId")}episodesClicked(){var e;return(e=this.getRegion("seasonContainer")).hasView()?(console.log("seasonContainer",e),this.ui.seasonContainer.toggle()):(console.log("Checking model",this.detailsModel,this.detailsModel.has("name")),this.detailsModel.has("name")?this.showSeasonView():this.detailsModel.fetch({data:{append_to_response:"images"}}).done(()=>(this.showSeasonView(),this.ui.entryHeader.addClass("bg-dark text-white"))))}infoClicked(){var e,t;return console.log("infoClicked"),(e=this.getRegion("infoContainer")).hasView()?this.ui.infoContainer.toggle():(t=new o({model:this.model}),e.show(t),console.log("VIEW",t))}showSeasonView(){var t;return p(this,e),t=new l({model:this.detailsModel}),this.showChildView("seasonContainer",t)}}return e.prototype.className="season-entry listview-list-entry",e.prototype.template=c.renderable(function(e){return c.div(".entry-header",function(){return c.div(".btn-group",function(){return c.button(".info-button.btn.btn-primary",{type:"button"},function(){return c.i(".fa.fa-info.mr-1"),c.span("info")}),c.button(".episodes-button.btn.btn-primary",{type:"button"},function(){return c.i(".fa.fa-tv.mr-1"),c.span("episodes")})}),c.span(".season-name.ml-3",function(){return c.text(e.name)})}),c.div(".info-container"),c.div(".season-container")}),e.prototype.ui={entryHeader:".entry-header",episodesButton:".episodes-button",infoButton:".info-button",seasonName:".season-name",seasonContainer:".season-container",infoContainer:".info-container"},e.prototype.regions={seasonContainer:"@ui.seasonContainer",infoContainer:"@ui.infoContainer"},e.prototype.events={"click @ui.episodesButton":"episodesClicked","click @ui.infoButton":"infoClicked"},e}.call(this),d=function(){class e extends r.View{ui(){return{seasonList:".season-list"}}regions(){return{seasonList:"@ui.seasonList"}}onRender(){var e;return e=new r.CollectionView({childView:a,childViewOptions:{tvId:this.model.id},collection:new s.Collection(this.model.get("seasons"))}),this.showChildView("seasonList",e)}}return e.prototype.className="col-md-12",e.prototype.template=c.renderable(function(e){return c.div(".listview-header","Seasons"),c.div(".season-list")}),e}.call(this),e.exports=d},202:function(e,t,n){var i,s,o,r,a,l,d,u,h,c,p;n(4),i=n(2),o=n(3),p=n(0),n(44),s=n(58),n(57),n(49).default,({navigate_to_url:u}=n(14)),({form_group_input_div:d}=n(43)),h=n(46).default,r=n(128),i.Radio.channel("messages"),i.Radio.channel("moviedb"),l="https://image.tmdb.org/t/p/",c=p.renderable(function(e){return p.div(".media.listview-list-entry",function(){var t;return(null!=e?e.poster_path:void 0)?(t=`${l}w200${e.poster_path}`,console.log("image URL",t),p.img(".mr-3",{src:t})):h("5x"),p.div(".media-body",function(){var t,n;return p.h3(".mt-0",e.name),"Invalid Date"!==(n=new Date(e.first_air_date).toDateString())&&p.h4(`Premiered: ${n}`),"Invalid Date"!==(t=new Date(e.last_air_date).toDateString())&&p.h4(`Ended: ${t}`),p.p(e.overview),p.button(".select-show.btn.btn-primary",{style:"display:none"},"Select this show")})}),p.div(".seasons-row.row"),p.div(".row",function(){return p.div(".col-md-12",function(){return p.div(".listview-header","ShowObject"),p.div(".jsonview.listview-list-entry",{style:"overflow:auto"})})})}),a=function(){class e extends o.View{onRender(){var e;return e=new r({model:this.model}),this.showChildView("seasonsRow",e)}onDomRefresh(){return this.jsonView=new s(this.model.toJSON()),this.ui.jsonView.prepend(this.jsonView.dom)}}return e.prototype.template=c,e.prototype.templateOrig=p.renderable(function(e){return p.div(".card.bg-body-d5",function(){return p.div(".row",function(){return p.div(".col-md-2",function(){var t,n,i;return(null!=e&&null!=(n=e.images)?n.posters.length:void 0)?(t=e.images.posters[0].file_path,i=`${l}w200${t}`,p.img(".card-img-bottom",{src:i})):h("5x")}),p.div(".col-md-9",function(){return p.div(".card-block",function(){return p.h3(".card-title",e.name),p.raw(e.overview)})})}),p.div(".seasons-row.row"),p.div(".row",function(){return p.div(".col-md-12",function(){return p.div(".listview-header","ShowObject"),p.div(".jsonview.listview-list-entry",{style:"overflow:auto"})})})})}),e.prototype.ui={jsonView:".jsonview",episodesButton:".episodes-button",saveEpisodesButton:".save-episodes",episodesList:".episode-list-region",seasonsRow:".seasons-row"},e.prototype.regions={seasonsRow:".seasons-row",episodes:"@ui.episodesList"},e}.call(this),e.exports=a},46:function(e,t,n){"use strict";n.r(t);var i=n(0),s=n.n(i);t.default=s.a.renderable(function(e="5x"){return s.a.span(`.fa-stack.fa-${e}`,function(){return s.a.i(".fa.fa-image.fa-stack-1x"),s.a.i(".fa.fa-ban.fa-stack-2x.text-danger")})})},54:function(e,t){function n(){this._events=this._events||{},this._maxListeners=this._maxListeners||void 0}function i(e){return"function"==typeof e}function s(e){return"object"==typeof e&&null!==e}function o(e){return void 0===e}e.exports=n,n.EventEmitter=n,n.prototype._events=void 0,n.prototype._maxListeners=void 0,n.defaultMaxListeners=10,n.prototype.setMaxListeners=function(e){if("number"!=typeof e||e<0||isNaN(e))throw TypeError("n must be a positive number");return this._maxListeners=e,this},n.prototype.emit=function(e){var t,n,r,a,l,d;if(this._events||(this._events={}),"error"===e&&(!this._events.error||s(this._events.error)&&!this._events.error.length)){if((t=arguments[1])instanceof Error)throw t;var u=new Error('Uncaught, unspecified "error" event. ('+t+")");throw u.context=t,u}if(o(n=this._events[e]))return!1;if(i(n))switch(arguments.length){case 1:n.call(this);break;case 2:n.call(this,arguments[1]);break;case 3:n.call(this,arguments[1],arguments[2]);break;default:a=Array.prototype.slice.call(arguments,1),n.apply(this,a)}else if(s(n))for(a=Array.prototype.slice.call(arguments,1),r=(d=n.slice()).length,l=0;l<r;l++)d[l].apply(this,a);return!0},n.prototype.addListener=function(e,t){var r;if(!i(t))throw TypeError("listener must be a function");return this._events||(this._events={}),this._events.newListener&&this.emit("newListener",e,i(t.listener)?t.listener:t),this._events[e]?s(this._events[e])?this._events[e].push(t):this._events[e]=[this._events[e],t]:this._events[e]=t,s(this._events[e])&&!this._events[e].warned&&(r=o(this._maxListeners)?n.defaultMaxListeners:this._maxListeners)&&r>0&&this._events[e].length>r&&(this._events[e].warned=!0,console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.",this._events[e].length),"function"==typeof console.trace&&console.trace()),this},n.prototype.on=n.prototype.addListener,n.prototype.once=function(e,t){if(!i(t))throw TypeError("listener must be a function");var n=!1;function s(){this.removeListener(e,s),n||(n=!0,t.apply(this,arguments))}return s.listener=t,this.on(e,s),this},n.prototype.removeListener=function(e,t){var n,o,r,a;if(!i(t))throw TypeError("listener must be a function");if(!this._events||!this._events[e])return this;if(r=(n=this._events[e]).length,o=-1,n===t||i(n.listener)&&n.listener===t)delete this._events[e],this._events.removeListener&&this.emit("removeListener",e,t);else if(s(n)){for(a=r;a-- >0;)if(n[a]===t||n[a].listener&&n[a].listener===t){o=a;break}if(o<0)return this;1===n.length?(n.length=0,delete this._events[e]):n.splice(o,1),this._events.removeListener&&this.emit("removeListener",e,t)}return this},n.prototype.removeAllListeners=function(e){var t,n;if(!this._events)return this;if(!this._events.removeListener)return 0===arguments.length?this._events={}:this._events[e]&&delete this._events[e],this;if(0===arguments.length){for(t in this._events)"removeListener"!==t&&this.removeAllListeners(t);return this.removeAllListeners("removeListener"),this._events={},this}if(i(n=this._events[e]))this.removeListener(e,n);else if(n)for(;n.length;)this.removeListener(e,n[n.length-1]);return delete this._events[e],this},n.prototype.listeners=function(e){return this._events&&this._events[e]?i(this._events[e])?[this._events[e]]:this._events[e].slice():[]},n.prototype.listenerCount=function(e){if(this._events){var t=this._events[e];if(i(t))return 1;if(t)return t.length}return 0},n.listenerCount=function(e,t){return e.listenerCount(t)}},99:function(e,t,n){"use strict";n.r(t);var i=n(7),s=n(3),o=n.n(s);t.default=function(){class e extends o.a.Behavior{events(){var e,t,n;return t="mouseenter",(n=this.getOption("uiProperty"))&&(t=`mouseenter @ui.${n}`),(e={})[t]="handleHover",e}handleHover(){var e;if(Object(i.result)(this.options,"isClickable"))return((e=this.getOption("uiProperty"))?this.ui[e]:this.$el).css({cursor:"pointer"})}}return e.prototype.options={uiProperty:"",isClickable:"hello"},e}.call(this)}}]);
//# sourceMappingURL=moviedb-view-tv-show-2fe1cc2a931dc883ce60.js.map