(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{159:function(e,t,n){var o,i,r,s,a,l,c,u,d,m,h,p;i=n(1),n(2),n(40),p=n(0),h=n(11),({make_field_input:d,make_field_select:m}=n(38)),({form_group_input_div:u}=n(38)),n(55),r=n(73),i.Radio.channel("global"),i.Radio.channel("messages"),o=i.Radio.channel("ebcsv"),a=p.renderable(function(){return p.div(".form-group",function(){return p.label(".control-label",{for:"select_action"},"Action")}),p.select(".form-control",{name:"select_action"},function(){var e,t,n,o,i;for(i=[],t=0,n=(o=["Add","VerifyAdd"]).length;t<n;t++)e=o[t],i.push(p.option({selected:null,value:e},e));return i})}),l=p.renderable(function(e){return p.div(".form-group",function(){return p.label(".control-label",{for:"select_cfg"},"Config")}),p.select(".form-control",{name:"select_cfg"},function(){var t,n,o,i,r,s,a;for(a=[],t=0,n=(s=e.models).length;t<n;t++)i=(o=s[t]).get("name"),r={value:o.id},"default"===i&&(r.selected=""),a.push(p.option(r,i));return a})}),c=p.renderable(function(e){return p.div(".form-group",function(){return p.label(".control-label",{for:"select_dsc"},"Description")}),p.select(".form-control",{name:"select_dsc"},function(){var t,n,o,i,r,s,a;for(a=[],t=0,n=(s=e.models).length;t<n;t++)i=(o=s[t]).get("name"),r={value:o.id},"default"===i&&(r.selected=""),a.push(p.option(r,i));return a})}),s=function(){class e extends i.Marionette.View{templateContext(){var e;return(e=this.options).ebcfg_collection=o.request("ebcfg-collection"),e.ebdsc_collection=o.request("ebdsc-collection"),e}make_csv(){var e,t,n;return e=this.ui.action_sel.val(),t=o.request("get-ebcfg",this.ui.cfg_sel.val()),n=o.request("get-ebdsc",this.ui.dsc_sel.val()),o.request("set-current-csv-action",e),o.request("set-current-csv-cfg",t),o.request("set-current-csv-dsc",n),h("#ebcsv/csv/preview")}show_comics(){var e;return e=new r({collection:this.collection}),this.showChildView("body",e)}}return e.prototype.regions={body:".body"},e.prototype.template=p.renderable(function(e){return p.div(".listview-header",function(){return p.text("Create CSV")}),p.div(".mkcsv-form",function(){return a(),l(e.ebcfg_collection),c(e.ebdsc_collection)}),p.div(".mkcsv-button.btn.btn-default","Preview CSV Data"),p.div(".show-comics-button.btn.btn-default","Show Comics"),p.div(".body")}),e.prototype.ui={mkcsv_btn:".mkcsv-button",show_btn:".show-comics-button",action_sel:'select[name="select_action"]',cfg_sel:'select[name="select_cfg"]',dsc_sel:'select[name="select_dsc"]'},e.prototype.events={"click @ui.mkcsv_btn":"make_csv","click @ui.show_btn":"show_comics"},e}.call(this),e.exports=s},53:function(e,t,n){var o,i,r,s;n(1),i=n(2),r=n(40),s=n(43),o=function(){class e extends i.Behavior{ui(){return{list:this.getOption("listContainer")}}setMasonry(){var e,t;return e=this.getOption("listContainer"),t=this.getOption("masonryOptions"),this.view.masonry=new r(e,t)}setMasonryLayout(){var e,t;return t=this.getOption("masonryOptions"),e=this.$(t.itemSelector),s(e,()=>(this.view.masonry.reloadItems(),this.view.masonry.layout()))}onBeforeDestroy(){return this.view.masonry.destroy()}onDomRefresh(){var e;if(this.setMasonry(),this.setMasonryLayout(),null!=(e=this.view)?e.afterDomRefresh:void 0)return this.view.afterDomRefresh()}}return e.prototype.options={listContainer:".list-container",channel:"global",masonryOptions:{gutter:1,isInitLayout:!1,itemSelector:".item",columnWidth:10,horizontalOrder:!0}},e.prototype.regions={list:"@ui.list"},e}.call(this),e.exports=o},54:function(e,t,n){var o,i,r,s,a,l,c,u,d,m;o=n(1),l=n(2),m=n(0),({make_field_input:c,make_field_select:u}=n(38)),({modal_close_button:d}=n(41)),a=o.Radio.channel("global"),o.Radio.channel("messages"),o.Radio.channel("ebcsv"),i=a.request("main:app:BaseModalView"),s=function(){class e extends i{}return e.prototype.template=m.renderable(function(e){return e.mainsection,m.div(".modal-dialog",function(){return m.div(".modal-content",function(){return m.div(".modal-body",function(){return m.img({src:e.image_src})}),m.div(".modal-footer",function(){return m.ul(".list-inline",function(){return"btn.btn-default.btn-sm",m.li("#close-modal",function(){return d("Close","check")})})})})})}),e}.call(this),r=class extends l.Behavior{onShowImageModal(){var e;return e=new s({model:this.view.model}),a.request("show-modal",e)}},e.exports=r},55:function(e,t,n){var o,i,r,s,a,l,c,u,d,m,h,p,f,_,g;o=n(3),r=n(1),n(2),n(40),g=n(0),n(11),({make_field_input:p,make_field_select:f}=n(38)),({modal_close_button:_}=n(41)),d=n(74),c=n(54),console.log("HasImageModal",c),m=r.Radio.channel("global"),h=r.Radio.channel("messages"),i=r.Radio.channel("ebcsv"),s=m.request("main:app:BaseModalView"),console.log("BaseModalView",s),u=function(){class e extends s{}return e.prototype.template=g.renderable(function(e){return e.mainsection,g.div(".modal-dialog.modal-lg",function(){return g.div(".modal-content",function(){return g.div(".modal-body",function(){var t;return t=e.src.replace("http://","//"),g.iframe({style:"width:97%;height:75vh;",src:t})}),g.div(".modal-footer",function(){return g.ul(".list-inline",function(){return"btn.btn-default.btn-sm",g.li("#close-modal",function(){return _("Close","check")})})})})})}),e}.call(this),l=function(){class e extends r.Marionette.View{onDomRefresh(){return this.trigger("show:image")}}return e.prototype.template=g.renderable(function(e){var t;return t=(t=e.image_src.replace("/lg/","/sm/")).replace("http://","//"),g.img({src:t})}),e.prototype.ui={image:"img"},e.prototype.triggers={"click @ui.image":"show:image:modal"},e.prototype.behaviors=[c],e}.call(this),a=function(){class e extends r.Marionette.View{mouse_enter_item(e){return this.ui.info_btn.show()}mouse_leave_item(e){return this.ui.info_btn.hide()}show_comic_json(e){var t;if("A"!==e.target.tagName)return t=new d({model:this.model}),m.request("show-modal",t)}show_comic_page(e){var t,n;if(e.preventDefault(),"A"===(t=e.target).tagName)return n=new u({model:new r.Model({src:t.href})}),m.request("show-modal",n)}onDomRefresh(){var e,t,n;return this.ui.info_btn.hide(),t=this.model.get("links").link.url,(n=i.request("get-comic-image-urls"))[t]?(e=new r.Model({image_src:n[t],url:t}),this._show_comic_image(e,!1)):t?this._get_comic_data(t,this._parse_html):void 0}_get_comic_data(e,t){var n;return console.log("_get_comic_data",e),new URL(e),(n=r.ajax({type:"GET",dataType:"html",url:`//cors-anywhere.herokuapp.com/${e}`})).done(function(){return t(e,n.responseText)}),n.fail(function(){return h.request("warning","Couldn't get the info")})}_parse_html(e,t){var n,r,s,a,l,c;for(c=[],s=0,l=(n=o.parseHTML(t)).length;s<l;s++)"LINK"===(r=n[s]).tagName&&"image_src"===r.rel&&c.push(r);return c.length>1&&h.request("warning","Too many links for this comic."),a=c[0].href,i.request("add-comic-image-url",e,a)}_set_local_images_url(e){return e.get("url"),e.get("image_src")}_show_comic_image(e,t=!0){var n;return t&&this._set_local_images_url(e),n=new l({model:e}),this.showChildView("image",n)}show_comic(){var e,t,n,o;return t=this.model.get("links"),o=t.link.url,new URL(o),(n=(e=i.request("clzpage-collection")).fetch({data:{where:{url:o}}})).fail(function(){var e;return e="There was a problem talking to the server",h.request("warning",e)}),n.done(()=>{if(e.length>1&&h.request("warning",`${o} is not unique!`),!e.length)return this._get_comic_data(o,this._add_comic_to_db)})}get_comic_data(e){var t,n;return t=new URL(e),(n=r.ajax({type:"GET",dataType:"html",url:`/clzcore${t.pathname}`})).done(()=>{var e;return e=new r.Marionette.View({template:n.responseText}),this.showChildView("info",e)}),n.fail(function(){return h.request("warning","Couldn't get the info")})}}return e.prototype.template=g.renderable(function(e){var t;return t=e.mainsection,g.div(".item.listview-list-entry.thumbnail.col-sm-2",function(){return g.div(".comic-image",function(){return g.i(".fa.fa-spinner.fa-spin"),g.text("loading")}),g.div(".caption",function(){var n,o;return g.span(function(){return g.i(".info-button.fa.fa-info.fa-pull-left.btn.btn-default.btn-sm"),g.h5({style:"text-overflow: ellipsis;"},`${t.series.displayname} #${e.issue}`)}),n=(n=(null!=t?t.title:void 0)||(null!=e&&null!=(o=e.edition)?o.displayname:void 0))||g.strong("UNTITLED"),g.a(".clz-link",{href:`${e.links.link.url}`,target:"_blank"},n)})})}),e.prototype.ui={info_btn:".info-button",clz_link:".clz-link",item:".item",image:".comic-image"},e.prototype.regions={image:"@ui.image"},e.prototype.events={"click @ui.info_btn":"show_comic_json","click @ui.clz_link":"show_comic_page","mouseenter @ui.item":"mouse_enter_item","mouseleave @ui.item":"mouse_leave_item"},e.prototype.childViewTriggers={"show:image":"show:image"},e}.call(this),e.exports=a},73:function(e,t,n){var o,i,r,s,a,l,c,u,d,m;n(3),o=n(1),n(2),n(40),n(43),m=n(0),a=n(44),n(11),({make_field_input:u,make_field_select:d}=n(38)),r=n(55),c=n(53),o.Radio.channel("global"),o.Radio.channel("messages"),o.Radio.channel("ebcsv"),l=class extends c{onChildviewShowImage(e){return this.setMasonryLayout()}},i=function(){class e extends o.Marionette.CollectionView{}return e.prototype.childView=r,e.prototype.emptyView=a,e.prototype.childViewTriggers={"show:image":"show:image"},e}.call(this),s=function(){class e extends o.Marionette.View{ui(){return{list:this.getOption("listContainer")}}onRender(){var e;return e=new i({collection:this.collection}),this.showChildView("list",e)}}return e.prototype.options={listContainer:"#comiclist-container"},e.prototype.regions={list:"@ui.list"},e.prototype.behaviors={HasLateImages:{behaviorClass:l,listContainer:"#comiclist-container",masonryOptions:{gutter:1,isInitLayout:!1,itemSelector:".item",columnWidth:10,horizontalOrder:!1}}},e.prototype.template=m.renderable(function(e){return m.div("#comiclist-container")}),e}.call(this),e.exports=s},74:function(e,t,n){var o,i,r,s,a,l;n(6),o=n(1),n(2),l=n(0),r=n(84),n(83),n(42),({modal_close_button:a}=n(41)),i=n(19).default,o.Radio.channel("global"),o.Radio.channel("ebcsv"),s=function(){class e extends o.Marionette.View{expand_view(){return this.expanded_view?(this.json_view.collapse(!0),this.expanded_view=!1,this.ui.expand_btn.text("Expand")):(this.json_view.expand(!0),this.expanded_view=!0,this.ui.expand_btn.text("Collapse"))}onDomRefresh(){return console.log("onDomRefresh->jsonview"),this.expanded_view=!1,this.json_view=new r(this.model.toJSON()),this.ui.body.prepend(this.json_view.dom)}}return e.prototype.behaviors=[i],e.prototype.template=l.renderable(function(e){var t;return t=e.mainsection,l.div(".modal-dialog",function(){return l.div(".modal-content",function(){return l.h3(`${t.series.displayname} #${t.issue}`),l.div(".modal-body",function(){return l.div(".expand-button.btn.btn-default","Expand"),l.div(".panel")}),l.div(".modal-footer",function(){return l.ul(".list-inline",function(){return"btn.btn-default.btn-sm",l.li("#close-modal",function(){return a("Close","check")})})})})})}),e.prototype.ui={body:".panel",expand_btn:".expand-button",close_btn:"#close-modal div"},e.prototype.events={"click @ui.expand_btn":"expand_view"},e}.call(this),e.exports=s}}]);