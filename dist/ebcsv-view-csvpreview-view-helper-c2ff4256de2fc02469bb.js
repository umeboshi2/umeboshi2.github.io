(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{106:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.dropdown_toggle=t.navbar_collapse_button=t.modal_close_button=t.divbutton=t.spanbutton=void 0;var o,r,i,u,a,l,c=n(4),d=(o=c)&&o.__esModule?o:{default:o};t.spanbutton=l=d.default.component((function(e,t,n){return d.default.span(e+".btn.btn-secondary.btn-sm",n)})),t.divbutton=r=d.default.component((function(e,t,n){return d.default.div(e+".btn.btn-secondary.btn-sm",n)})),t.modal_close_button=u=d.default.renderable((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Close",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"close";return d.default.div(".btn.btn-secondary.btn-sm",{"data-dismiss":"modal"},(function(){return d.default.h4(".modal-title",(function(){return d.default.i(".fa.fa-"+t),d.default.text(e)}))}))})),t.navbar_collapse_button=a=d.default.renderable((function(e){return d.default.button(".navbar-toggle",{type:"button","data-toggle":"collapse","data-target":"#"+e},(function(){return d.default.span(".sr-only","Toggle Navigation"),d.default.span(".icon-bar"),d.default.span(".icon-bar"),d.default.span(".icon-bar")}))})),t.dropdown_toggle=i=d.default.component((function(e,t,n){return d.default.a(e+".dropdown-toggle",{href:t.href,"data-toggle":"dropdown"},n)})),t.spanbutton=l,t.divbutton=r,t.modal_close_button=u,t.navbar_collapse_button=a,t.dropdown_toggle=i},340:function(e,t,n){"use strict";var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a,l,c,d,s,f,p,b,_,v,m,h,y,g,w,k,x,O,j,q,C=[].indexOf;n(5),l=n(1),_=n(2),n(94),q=n(4),x=n(127),n(19);var P=n(85);P.make_field_input,P.make_field_select,n(85).form_group_input_div;var M=n(106);j=M.modal_close_button,b=l.Radio.channel("global"),v=l.Radio.channel("messages"),a=l.Radio.channel("ebcsv"),c=b.request("main:app:BaseModalView"),k=new l.Collection,a.reply("get-csvrow-collection",(function(){return k})),O=function(){var e,t,n;for(t in n=[],e=a.request("get-csv-header"))n.push(e[t]);return""+n.join(",")},w=function(){var e,t,n,o,r,i,u,l,c,d;for(e=a.request("get-csvrow-collection"),a.request("get-csv-header"),u=[O()],o=0,r=(l=e.models).length;o<r;o++){for(n in d=[],t=l[o].toJSON())c=(c=t[n]).split('"').join('""'),C.call(c," ")>=0&&(c='"'+c+'"'),d.push(c);i=d.join(","),u.push(i)}return u.join("\r\n")+"\r\n"},m=function(){var e=function(e){function t(){return r(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return u(t,e),t}(c);return e.prototype.template=q.renderable((function(e){return e.mainsection,q.div(".modal-dialog",(function(){return q.div(".modal-content",(function(){return q.h4("Title: "+e.Title),q.div(".modal-body",(function(){return q.h4("Description:"),q.hr(),q.div(".panel",(function(){return q.raw(e.Description)}))})),q.div(".modal-footer",(function(){return q.ul(".list-inline",(function(){return"btn.btn-default.btn-sm",q.li("#close-modal",(function(){return j("Close","check")}))}))}))}))}))})),e}.call(void 0),h=function(){var e=function(e){function t(){return r(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return u(t,e),o(t,[{key:"templateContext",value:function(){var e;return(e=this.options).csvheader=a.request("get-csv-header"),e}}]),t}(c);return e.prototype.template=q.renderable((function(e){return q.div(".modal-dialog",(function(){return q.div(".modal-content",(function(){return q.h3("Title: "+e.Title),q.div(".modal-body",(function(){return q.h4("CSV Row:"),q.hr(),q.div(".panel",(function(){return q.dl(".dl-horizontal",(function(){return Object.keys(e).forEach((function(t){return q.dt(e.csvheader[t]),q.dd(e[t])}))}))}))})),q.div(".modal-footer",(function(){return q.ul(".list-inline",(function(){return q.li("#close-modal",(function(){return j("Close","check")}))}))}))}))}))})),e}.call(void 0),g=["max-width:0","overflow:hidden","text-overflow:ellipsis","white-space:nowrap"].join(";")+";",p=function(){var e=function(e){function t(){return r(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return u(t,e),o(t,[{key:"templateContext",value:function(){var e;return(e=this.options).csvheader=a.request("get-csv-header"),e}},{key:"show_row",value:function(){var e;return e=new h({model:this.model}),b.request("show-modal",e)}},{key:"show_description",value:function(){var e;return e=new m({model:this.model}),b.request("show-modal",e)}}]),t}(_.View);return e.prototype.tagName="tr",e.prototype.template=q.renderable((function(e){return q.td((function(){return q.div(".btn-group.btn-group-justified",(function(){return q.div(".show-desc-button.btn.btn-default.btn-xs",(function(){return q.i(".fa.fa-eye")})),q.div(".show-row-button.btn.btn-default.btn-xs",(function(){return q.i(".fa.fa-list")}))}))})),Object.keys(e.csvheader).forEach((function(t){return q.td({style:g},e[t])}))})),e.prototype.ui={desc_btn:".show-desc-button",row_btn:".show-row-button"},e.prototype.events={"click @ui.desc_btn":"show_description","click @ui.row_btn":"show_row"},e}.call(void 0),f=function(){var e=function(e){function t(){return r(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return u(t,e),t}(_.CollectionView);return e.prototype.tagName="tbody",e.prototype.childView=p,e}.call(void 0),y=["table","table-striped","table-bordered","table-hover","table-condensed"],s=function(){var e=function(e){function t(){return r(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return u(t,e),o(t,[{key:"templateContext",value:function(){var e;return(e=this.options).ebcfg_collection=a.request("ebcfg-collection"),e.ebdsc_collection=a.request("ebdsc-collection"),e.csvheader=a.request("get-csv-header"),e}},{key:"onRender",value:function(){var e,t;return e=a.request("get-csvrow-collection"),t=new f({collection:e}),this.showChildView("body",t)}}]),t}(_.View);return e.prototype.tagName="table",e.prototype.className=y.join(" "),e.prototype.template=q.renderable((function(e){return q.div(".table-responsive",(function(){return q.table("."+y.join("."),(function(){return q.thead((function(){return q.tr(".info",(function(){return q.td((function(){return q.i(".fa.fa-eye.fa-3x")})),Object.keys(e.csvheader).forEach((function(t){return q.th(e.csvheader[t])}))}))})),q.tbody()}))}))})),e.prototype.regions={body:{el:"tbody",replaceElement:!0}},e}.call(void 0),d=function(){var e=function(e){function t(){return r(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return u(t,e),o(t,[{key:"templateContext",value:function(){var e;return(e=this.options).ebcfg_collection=a.request("ebcfg-collection"),e.ebdsc_collection=a.request("ebdsc-collection"),e}},{key:"open_fileexchange_tab",value:function(){return window.open("http://bulksell.ebay.com/ws/eBayISAPI.dll?FileExchangeUploadForm","_blank")}},{key:"make_csv_file",value:function(){var e,t,n,o;return w(),t=new Date,"yyyy-mm-dd-HH:MM:ss",o=x(t,"yyyy-mm-dd-HH:MM:ss"),e=this.ui.filename_input.val()||"export-"+o+".csv",n={type:"data:text/csv;charset=utf-8",data:w(),el_id:"exported-csv-anchor",filename:e},b.request("export-to-file",n)}},{key:"createCsvRows",value:function(){var e,t,n,o,r,i,u,l,c;for(e=a.request("get-current-csv-action"),n=a.request("get-current-csv-cfg"),o=a.request("get-current-csv-dsc"),c=[],r=0,i=(l=this.collection.toJSON()).length;r<i;r++)u={action:e,comic:l[r],cfg:n,desc:o},t=a.request("create-csv-row-object",u),c.push(t);return a.request("get-csvrow-collection").set(c)}},{key:"onRender",value:function(){var e,t,n;return t=a.request("get-comic-image-urls"),Object.keys(t).length||("No pictures attached, please view comics, then create csv",v.request("warning","No pictures attached, please view comics, then create csv")),this.createCsvRows(),e=a.request("get-csvrow-collection"),n=new s({collection:e}),this.showChildView("body",n)}}]),t}(_.View);return e.prototype.regions={body:".body"},e.prototype.template=q.renderable((function(e){var t,n;return n=new Date,"mmddHHMM",t="export-"+x(n,"mmddHHMM")+".csv",q.div(".listview-header",(function(){return q.text("Preview CSV")})),q.div(".fileexchange-button.btn.btn-default","Ebay Upload"),q.div(".mkcsv-button.btn.btn-default","Create CSV"),q.input(".form-control",{value:t,name:"csvfilename"}),q.div(".body")})),e.prototype.ui={mkcsv_btn:".mkcsv-button",filename_input:"input[name='csvfilename']",fileexchange_btn:".fileexchange-button"},e.prototype.events={"click @ui.mkcsv_btn":"make_csv_file","click @ui.fileexchange_btn":"open_fileexchange_tab"},e}.call(void 0),e.exports=d},85:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.name_content_form=t.login_form=t.make_login_form=t.make_field_select=t.make_field_textarea=t.make_field_input=t.form_group_input_div=void 0;var o,r,i,u,a,l,c,d=f(n(4)),s=f(n(88));function f(e){return e&&e.__esModule?e:{default:e}}t.form_group_input_div=o=d.default.renderable((function(e){return d.default.div(".form-group",(function(){var t,n,o;return d.default.label(".control-label",{for:e.input_id},e.label),o="#"+e.input_id+".form-control",t=e.input_attributes,n=d.default.input,(null!=e?e.input_type:void 0)?(n=d.default[e.input_type])(o,t,(function(){return d.default.text(null!=e?e.content:void 0)})):n(o,t),d.default.div(".invalid-feedback")}))})),t.make_field_input=i=function(e){return d.default.renderable((function(t){return o({input_id:"input_"+e,label:(0,s.default)(e),input_attributes:{name:e,placeholder:e,value:t[e],data:{validation:e}}})}))},t.make_field_textarea=a=function(e){return d.default.renderable((function(t){return o({input_id:"input_"+e,input_type:"textarea",label:(0,s.default)(e),input_attributes:{name:e,placeholder:e,data:{validation:e}},content:t[e]})}))},t.make_field_select=u=function(e,t){return d.default.renderable((function(n){return d.default.div(".form-group",(function(){return d.default.label(".control-label",{for:"select_"+e}),(0,s.default)(e)})),d.default.select(".form-control",{name:"select_"+e},(function(){var o,r,i,u;for(u=[],o=0,r=t.length;o<r;o++)i=t[o],n[e]===i?u.push(d.default.option({selected:null,value:i},i)):u.push(d.default.option({value:i},i));return u}))}))},t.make_login_form=l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"/login",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"POST";return d.default.renderable((function(n){return d.default.form({role:"form",method:t,action:e},(function(){return o({input_id:"input_username",label:"User Name",input_attributes:{name:"username",placeholder:"User Name"}}),o({input_id:"input_password",label:"Password",input_attributes:{name:"password",type:"password",placeholder:"Type your password here...."}}),d.default.button(".btn.btn-secondary",{type:"submit"},"login")}))}))},t.login_form=r=l(),t.name_content_form=c=d.default.renderable((function(e){return o({input_id:"input_name",label:"Name",input_attributes:{name:"name",placeholder:"Name"}}),o({input_id:"input_content",input_type:d.default.textarea,label:"Content",input_attributes:{name:"content",placeholder:"..."}}),d.default.input(".btn.btn-secondary.btn-sm",{type:"submit",value:"Add"})})),t.form_group_input_div=o,t.make_field_input=i,t.make_field_textarea=a,t.make_field_select=u,t.make_login_form=l,t.login_form=r,t.name_content_form=c}}]);
//# sourceMappingURL=ebcsv-view-csvpreview-view-helper-c2ff4256de2fc02469bb.js.map