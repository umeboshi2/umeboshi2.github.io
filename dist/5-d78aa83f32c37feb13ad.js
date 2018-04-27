(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{40:function(e,t,n){"use strict";n.r(t);var o,r,a,l,i,s,u,c,d,h,m,p,w,v,f,y,g,b,S,x=n(1),_=n.n(x),z=n(3),C=n.n(z),N=n(59),R=n(45),k=(n(2),n(14),n(51),n(58)),L=n(55),V=(n(13),n(4),n(71));n(89);s=_.a.Radio.channel("global"),o=_.a.Radio.channel("tvmaze"),v=s.request("main:app:dbConn","tvmaze"),p=new V.LoveStore(v,"TVMazeShow"),m=new V.LoveStore(v,"TVMazeEpisode"),b=["id","name","url","self","premiered","runtime","network_name","imdb","status","summary","img_med","img_orig","content"],l=function(){class e extends _.a.Model{toJSON(){var e;return e={},b.forEach(t=>e[t]=this.get(t)),e}}return e.prototype.loveStore=p,e}.call(this),i=function(){class e extends _.a.Collection{}return e.prototype.loveStore=p,e.prototype.model=l,e}.call(this),g=new i,o.reply("get-local-tvshows",function(){return g}),o.reply("get-local-tvshow-model",function(){return l}),o.reply("get-local-tvshow-collection",function(){return i}),o.reply("save-local-show",function(e){var t,n,o,r,a;return t=new l({id:e.id,name:e.name,url:e.url,self:e._links.self.href,premiered:new Date(e.premiered),runtime:e.runtime,network_name:(null!=e&&null!=(n=e.network)?n.name:void 0)||"NO NETWORK",imdb:e.externals.imdb,status:e.status,summary:e.summary,img_med:null!=(o=e.image)?o.medium:void 0,img_orig:null!=(r=e.image)?r.original:void 0,content:e}),a=!0,t.isNew=function(){return!!a&&(a=!1,!0)},g.add(t),t.save()}),w="//api.tvmaze.com",h=class extends _.a.Model{url(){var e;return e=this.searchName,`${w}/singlesearch/shows?q=${e}`}},o.reply("single-show-search",function(e){var t;return(t=new h).searchName=e,t}),d=class extends _.a.Model{urlRoot(){return`${w}/shows`}},o.reply("get-remote-show",function(e){return new d({id:e})}),u=class extends _.a.Model{url(){return this.get("_links").self.href}},c=function(){class e extends _.a.Collection{url(){return`${w}/shows/${this.showId}/episodes`}}return e.prototype.model=u,e}.call(this),o.reply("get-remote-episodes",function(e){var t;return(t=new c).showId=e,t}),f=["id","show_id","name","url","self","season","number","airdate","airtime","runtime","summary","img_med","img_orig","content"],r=function(){class e extends _.a.Model{toJSON(){var e;return e={},f.forEach(t=>e[t]=this.get(t)),e}}return e.prototype.loveStore=m,e}.call(this),a=function(){class e extends _.a.Collection{}return e.prototype.loveStore=m,e.prototype.model=r,e}.call(this),y=new a,o.reply("get-local-episodes",function(){return y}),o.reply("get-local-episode-model",function(){return r}),o.reply("get-local-episode-collection",function(){return a}),o.reply("save-local-episode",function(e){var t,n,o,a,l,i,s,u,c;return t=new r({id:e.id,show_id:e.show_id,name:e.content.name,url:e.content.url,self:null!=(n=e.content._links)?n.self.href:void 0,season:e.content.season,number:e.content.number,airdate:new Date(e.content.airdate),airtime:e.content.airtime,runtime:(null!=(o=e.content)?o.runtime:void 0)||"",summary:(null!=(a=e.content)?a.summary:void 0)||"",img_med:(null!=(l=e.content)&&null!=(i=l.image)?i.medium:void 0)||"",img_orig:(null!=(s=e.content)&&null!=(u=s.image)?u.original:void 0)||"",content:e.content}),c=!0,t.isNew=function(){return!!c&&(c=!1,!0)},y.add(t),t.save()}),n(52),_.a.Radio.channel("global"),_.a.Radio.channel("messages"),_.a.Radio.channel("resources"),S=_.a.Radio.channel("tvmaze");var I,M,E,O=function(){class e extends k.MainController{viewIndex(){return this.setupLayoutIfNeeded(),Promise.all([n.e(2),n.e(9),n.e(37)]).then((()=>{var e;return e=n(163),this.layout.showChildView("content",new e)}).bind(null,n)).catch(n.oe)}viewShowList(){var e;return this.setupLayoutIfNeeded(),e=S.request("get-local-tvshows"),0,Promise.all([n.e(2),n.e(10),n.e(36)]).then((()=>{var t;return t=n(162),this._loadView(t,e,"tvshow")}).bind(null,n)).catch(n.oe)}viewShowListFlat(){var e;return this.setupLayoutIfNeeded(),e=S.request("get-local-tvshows"),0,Promise.all([n.e(2),n.e(35)]).then((()=>{var t;return t=n(161),this._loadView(t,e,"tvshow")}).bind(null,n)).catch(n.oe)}viewSearchShow(){return this.setupLayoutIfNeeded(),0,Promise.all([n.e(2),n.e(9),n.e(34)]).then((()=>{var e;return e=new(n(92)),this.layout.showChildView("content",e)}).bind(null,n)).catch(n.oe)}viewShow(e){return this.setupLayoutIfNeeded(),Promise.all([n.e(2),n.e(9),n.e(11),n.e(33)]).then((()=>{var t,o;return t=n(160),o=new(S.request("get-local-tvshow-model"))({id:e}),this._loadView(t,o,"tvshow")}).bind(null,n)).catch(n.oe)}}return e.prototype.layoutClass=L.a,e}.call(this);_.a.Radio.channel("global"),_.a.Radio.channel("tvmaze"),E=[{label:"List Shows",url:"#tvmaze/shows",icon:".fa.fa-list"},{label:"Search Show",url:"#tvmaze/searchshow",icon:".fa.fa-search"},{label:"Calendar",url:"#tvmaze/calendar",icon:".fa.fa-calendar"}],M=function(){class e extends C.a.AppRouter{}return e.prototype.appRoutes={tvmaze:"viewIndex","tvmaze/searchshow":"viewSearchShow","tvmaze/shows":"viewShowList","tvmaze/shows/flat":"viewShowListFlat","tvmaze/shows/view/:id":"viewShow"},e}.call(this),I=function(){class e extends N.a{}return e.prototype.Controller=O,e.prototype.Router=M,e.prototype.appletEntries=[{label:`${Object(R.default)("tvmaze")} Menu`,menu:E},{label:"List Shows",url:"#tvmaze/shows"}],e}.call(this);t.default=I},45:function(e,t,n){"use strict";n.r(t),t.default=function(e){return e.charAt(0).toUpperCase()+e.slice(1)}},51:function(e,t,n){"use strict";n.r(t);var o,r,a,l,i=n(3),s=n.n(i),u=n(2),c=n.n(u),d=n(13);l=c.a.renderable(function(e){return c.a.i(e.icon),c.a.text(" "),c.a.text(e.label)}),r=function(){class e extends s.a.View{}return e.prototype.tagName="button",e.prototype.attributes={class:"btn btn-secondary"},e.prototype.triggers={click:"button:clicked"},e.prototype.modelEvents={change:"render"},e}.call(this),o=function(){class e extends s.a.CollectionView{childViewOptions(){return{template:this.options.entryTemplate}}onChildviewButtonClicked(e){return this.trigger("toolbar:entry:clicked",e)}}return e.prototype.childView=r,e.prototype.className="btn-group btn-group-justified",e}.call(this),a=function(){class e extends s.a.View{onRender(){var e,t;return e=this.options.entryTemplate||l,t=new o({collection:this.collection,entryTemplate:e}),this.showChildView("entries",t)}onChildviewToolbarEntryClicked(e){return Object(d.default)(e.model.get("url"))}}return e.prototype.template=c.a.renderable(function(){return c.a.div(".toolbar-entries")}),e.prototype.regions={entries:{el:".toolbar-entries"}},e}.call(this),t.default=a}}]);