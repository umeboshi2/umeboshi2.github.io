(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{101:function(e,t,n){"use strict";n.r(t);var i=n(7),s=n(3),o=n.n(s);t.default=function(){class e extends o.a.Behavior{events(){var e,t,n;return t="mouseenter",(n=this.getOption("uiProperty"))&&(t=`mouseenter @ui.${n}`),(e={})[t]="handleHover",e}handleHover(){var e;if(Object(i.result)(this.options,"isClickable"))return((e=this.getOption("uiProperty"))?this.ui[e]:this.$el).css({cursor:"pointer"})}}return e.prototype.options={uiProperty:"",isClickable:"hello"},e}.call(this)},130:function(e,t,n){var i,s,o,r,a,l,u,d,h,p,c;n(4),i=n(2),r=n(3),c=n(0),n(44),n(58),n(57),n(49).default,({navigate_to_url:d}=n(14)),({form_group_input_div:u}=n(43)),h=n(46).default,a=n(101).default,i.Radio.channel("messages"),i.Radio.channel("moviedb"),p=c.renderable(function(e){return c.a({href:`#moviedb/tv/shows/season/view/${e.id}`},function(){return c.text(e.name)})}),c.renderable(function(e){return c.div(".season-entry.listview-list-entry",{data:{"season-id":e.id}},function(){return p(e)})}),o=function(){class e extends r.View{}return e.prototype.attributes={style:{width:"20%","border-style":"solid","border-width":"5px"}},e.prototype.className="card bg-body-d5",e.prototype.template=c.renderable(function(e){return c.div(".row",function(){return c.div(".col-lg-3",function(){return e.still_path?c.img({src:`https://image.tmdb.org/t/p/w200${e.still_path}`}):h("4x")}),c.div(".col-lg-8.ml-1",function(){return c.span(e.overview)})})}),e}.call(this),s=function(){class e extends r.View{entryClicked(){var e,t;return console.log("entryClicked"),(e=this.getRegion("episodeContainer")).hasView()?this.ui.episodeContainer.toggle():(t=new o({model:this.model}),e.show(t))}}return e.prototype.className="listview-list-entry",e.prototype.template=c.renderable(function(e){return c.span(e.name),c.div(".episode-container")}),e.prototype.ui={episodeContainer:".episode-container"},e.prototype.regions={episodeContainer:"@ui.episodeContainer"},e.prototype.behaviors={PointerOnHover:{behaviorClass:a}},e.prototype.events={click:"entryClicked"},e}.call(this),l=function(){class e extends r.View{ui(){return{episodeList:".episode-list"}}regions(){return{episodeList:"@ui.episodeList"}}onRender(){var e;return e=new r.CollectionView({childView:s,collection:new i.Collection(this.model.get("episodes"))}),this.showChildView("episodeList",e),console.log("EPisode VEW",e)}}return e.prototype.template=c.renderable(function(e){return c.div(".episode-list")}),e}.call(this),e.exports=l},131:function(e,t,n){var i,s,o,r,a,l,u,d,h,p,c,v,f=function(e,t){if(!(e instanceof t))throw new Error("Bound instance method accessed before binding")};n(4),s=n(2),a=n(3),v=n(0),n(44),r=n(58),n(57),n(49).default,({navigate_to_url:p}=n(14)),({form_group_input_div:h}=n(43)),n(46).default,n(101).default,({posterImage:c}=n(74)),u=n(130),s.Radio.channel("messages"),i=s.Radio.channel("moviedb"),o=function(){class e extends a.View{onDomRefresh(){return this.jsonView=new r(this.model.toJSON()),this.ui.jsonView.prepend(this.jsonView.dom)}}return e.prototype.template=v.renderable(function(e){var t;return c(e),v.div(function(){return v.text(e.overview)}),e.air_date&&(t=new Date(e.air_date).toDateString(),v.span(`Season started ${t}`)),v.div(".jview")}),e.prototype.ui={jsonView:".jview"},e}.call(this),l=function(){class e extends a.View{constructor(){super(...arguments),this.showSeasonView=this.showSeasonView.bind(this)}attributes(){return{data:{"season-id":this.model.id}}}initialize(e){var t;return super.initialize(e),t=i.request("TvSeasonDetails"),this.detailsModel=new t({id:this.model.get("season_number")}),this.detailsModel.tvId=this.getOption("tvId")}episodesClicked(){var e;return(e=this.getRegion("seasonContainer")).hasView()?(console.log("seasonContainer",e),this.ui.seasonContainer.toggle()):(console.log("Checking model",this.detailsModel,this.detailsModel.has("name")),this.detailsModel.has("name")?this.showSeasonView():this.detailsModel.fetch({data:{append_to_response:"images"}}).done(()=>(this.showSeasonView(),this.ui.entryHeader.addClass("bg-dark text-white"))))}infoClicked(){var e,t,n;return(e=this.getRegion("infoContainer")).hasView()?this.ui.infoContainer.toggle():(n=new o({model:this.model}),e.show(n)),"info"===(t=this.ui.infoButton.children("span")).text()?t.text("hide"):t.text("info")}showSeasonView(){var t;return f(this,e),t=new u({model:this.detailsModel}),this.showChildView("seasonContainer",t)}}return e.prototype.className="season-entry listview-list-entry",e.prototype.template=v.renderable(function(e){return v.div(".entry-header",function(){return v.div(".btn-group",function(){return v.button(".info-button.btn.btn-info",{type:"button"},function(){return v.i(".fa.fa-info.mr-1"),v.span("info")}),v.button(".episodes-button.btn.btn-primary",{type:"button"},function(){return v.i(".fa.fa-tv.mr-1"),v.span("episodes")})}),v.span(".season-name.ml-3",function(){return v.text(e.name)})}),v.div(".info-container"),v.div(".season-container")}),e.prototype.ui={entryHeader:".entry-header",episodesButton:".episodes-button",infoButton:".info-button",seasonName:".season-name",seasonContainer:".season-container",infoContainer:".info-container"},e.prototype.regions={seasonContainer:"@ui.seasonContainer",infoContainer:"@ui.infoContainer"},e.prototype.events={"click @ui.episodesButton":"episodesClicked","click @ui.infoButton":"infoClicked"},e}.call(this),d=function(){class e extends a.View{ui(){return{seasonList:".season-list"}}regions(){return{seasonList:"@ui.seasonList"}}onRender(){var e;return e=new a.CollectionView({childView:l,childViewOptions:{tvId:this.model.id},collection:new s.Collection(this.model.get("seasons"))}),this.showChildView("seasonList",e)}}return e.prototype.className="col-md-12",e.prototype.template=v.renderable(function(e){var t,n;return n="Seasons",1===(t=e.number_of_seasons||0)&&(n="Season"),v.div(".listview-header",` ${t} ${n}`),v.div(".season-list")}),e}.call(this),e.exports=d},205:function(e,t,n){var i,s,o,r,a,l,u,d;n(4),i=n(2),o=n(3),n(0),n(44),s=n(58),n(57),n(49).default,({navigate_to_url:u}=n(14)),({form_group_input_div:l}=n(43)),n(46).default,({showTemplate:d}=n(74)),r=n(131),i.Radio.channel("messages"),i.Radio.channel("moviedb"),a=function(){class e extends o.View{onRender(){var e;return e=new r({model:this.model}),this.showChildView("seasonsRow",e)}onDomRefresh(){return this.jsonView=new s(this.model.toJSON()),this.ui.jsonView.prepend(this.jsonView.dom)}}return e.prototype.template=d,e.prototype.templateContext={imgClass:".card-img-bottom"},e.prototype.ui={jsonView:".jsonview",episodesButton:".episodes-button",saveEpisodesButton:".save-episodes",episodesList:".episode-list-region",seasonsRow:".seasons-row"},e.prototype.regions={seasonsRow:".seasons-row",episodes:"@ui.episodesList"},e}.call(this),e.exports=a},46:function(e,t,n){"use strict";n.r(t);var i=n(0),s=n.n(i);t.default=s.a.renderable(function(e="5x"){return s.a.span(`.fa-stack.fa-${e}`,function(){return s.a.i(".fa.fa-image.fa-stack-1x"),s.a.i(".fa.fa-ban.fa-stack-2x.text-danger")})})},54:function(e,t){function n(){this._events=this._events||{},this._maxListeners=this._maxListeners||void 0}function i(e){return"function"==typeof e}function s(e){return"object"==typeof e&&null!==e}function o(e){return void 0===e}e.exports=n,n.EventEmitter=n,n.prototype._events=void 0,n.prototype._maxListeners=void 0,n.defaultMaxListeners=10,n.prototype.setMaxListeners=function(e){if("number"!=typeof e||e<0||isNaN(e))throw TypeError("n must be a positive number");return this._maxListeners=e,this},n.prototype.emit=function(e){var t,n,r,a,l,u;if(this._events||(this._events={}),"error"===e&&(!this._events.error||s(this._events.error)&&!this._events.error.length)){if((t=arguments[1])instanceof Error)throw t;var d=new Error('Uncaught, unspecified "error" event. ('+t+")");throw d.context=t,d}if(o(n=this._events[e]))return!1;if(i(n))switch(arguments.length){case 1:n.call(this);break;case 2:n.call(this,arguments[1]);break;case 3:n.call(this,arguments[1],arguments[2]);break;default:a=Array.prototype.slice.call(arguments,1),n.apply(this,a)}else if(s(n))for(a=Array.prototype.slice.call(arguments,1),r=(u=n.slice()).length,l=0;l<r;l++)u[l].apply(this,a);return!0},n.prototype.addListener=function(e,t){var r;if(!i(t))throw TypeError("listener must be a function");return this._events||(this._events={}),this._events.newListener&&this.emit("newListener",e,i(t.listener)?t.listener:t),this._events[e]?s(this._events[e])?this._events[e].push(t):this._events[e]=[this._events[e],t]:this._events[e]=t,s(this._events[e])&&!this._events[e].warned&&(r=o(this._maxListeners)?n.defaultMaxListeners:this._maxListeners)&&r>0&&this._events[e].length>r&&(this._events[e].warned=!0,console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.",this._events[e].length),"function"==typeof console.trace&&console.trace()),this},n.prototype.on=n.prototype.addListener,n.prototype.once=function(e,t){if(!i(t))throw TypeError("listener must be a function");var n=!1;function s(){this.removeListener(e,s),n||(n=!0,t.apply(this,arguments))}return s.listener=t,this.on(e,s),this},n.prototype.removeListener=function(e,t){var n,o,r,a;if(!i(t))throw TypeError("listener must be a function");if(!this._events||!this._events[e])return this;if(r=(n=this._events[e]).length,o=-1,n===t||i(n.listener)&&n.listener===t)delete this._events[e],this._events.removeListener&&this.emit("removeListener",e,t);else if(s(n)){for(a=r;a-- >0;)if(n[a]===t||n[a].listener&&n[a].listener===t){o=a;break}if(o<0)return this;1===n.length?(n.length=0,delete this._events[e]):n.splice(o,1),this._events.removeListener&&this.emit("removeListener",e,t)}return this},n.prototype.removeAllListeners=function(e){var t,n;if(!this._events)return this;if(!this._events.removeListener)return 0===arguments.length?this._events={}:this._events[e]&&delete this._events[e],this;if(0===arguments.length){for(t in this._events)"removeListener"!==t&&this.removeAllListeners(t);return this.removeAllListeners("removeListener"),this._events={},this}if(i(n=this._events[e]))this.removeListener(e,n);else if(n)for(;n.length;)this.removeListener(e,n[n.length-1]);return delete this._events[e],this},n.prototype.listeners=function(e){return this._events&&this._events[e]?i(this._events[e])?[this._events[e]]:this._events[e].slice():[]},n.prototype.listenerCount=function(e){if(this._events){var t=this._events[e];if(i(t))return 1;if(t)return t.length}return 0},n.listenerCount=function(e,t){return e.listenerCount(t)}},74:function(e,t,n){var i,s,o,r,a,l,u;n(4),n(2),n(3),l=n(0),i=n(46).default,o=l.renderable(function(e){var t,n,s,o;return s=e.noImageSize||"5x",t=e.imgClass||".mr-3",n=e.imgWidth||200,(null!=e?e.poster_path:void 0)?(o=`https://image.tmdb.org/t/p/w${n}${e.poster_path}`,l.img(t,{src:o,style:`width:${n}px`})):i(s)}),u=l.renderable(function(e){var t,n;return l.h3(".mt-0",e.name),"Invalid Date"!==(n=new Date(e.first_air_date).toDateString())&&l.h4(`Premiered: ${n}`),"Invalid Date"!==(t=new Date(e.last_air_date).toDateString())&&l.h4(`Ended: ${t}`),l.input(".rating",{type:"number",style:"display:none",value:e.vote_average}),l.p(e.overview)}),s=l.renderable(function(){return l.div(".listview-header","ShowObject"),l.div(".jsonview.listview-list-entry",{style:"overflow:auto"})}),a=l.renderable(function(e){return l.div(".card.bg-body-d5",function(){return l.div(".row",function(){return l.div(".col-lg-3",function(){return o(e)}),l.div(".card-block.col-lg-8",function(){return u(e)})})})}),r=l.renderable(function(e){return a(e),l.div(".seasons-row.row"),l.div(".row",function(){return l.div(".col-md-12",function(){return s()})})}),e.exports={posterImage:o,tvShowDescription:u,objectJsonTemplate:s,showTemplateCard:a,showTemplate:r}}}]);
//# sourceMappingURL=moviedb-view-tv-show-6087dcaa78a972c3028e.js.map