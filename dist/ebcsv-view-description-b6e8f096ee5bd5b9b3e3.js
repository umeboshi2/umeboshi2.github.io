(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{208:function(e,t,n){var i,r,u,o,a,c,d,l,p,s;r=n(2),n(3),s=n(0),d=n(44),p=n(14).default,({form_group_input_div:c}=n(43)),o=r.Radio.channel("messages"),i=r.Radio.channel("ebcsv"),l=function(e,t,n){return{input_id:`input_${e}`,label:t,input_attributes:{name:e,placeholder:n}}},a=s.renderable(function(e){var t;return t=l("destname","New Description","newdescription"),s.div(".form-inline",function(){return c(t),s.div("#copy-dsc-btn.btn.btn-default","Copy"),s.div("#edit-dsc-btn.btn.btn-default","Edit")}),s.div(".listview-header",function(){return s.text(`Viewing Description ${e.name}`)}),s.hr(),s.article(".document-view.content",function(){return s.div(".body",function(){return s.raw(d(e.content))})})}),u=function(){class e extends r.Marionette.View{edit_description(){return p(`#ebcsv/descriptions/edit/${this.model.id}`)}copy_description(){var e,t,n;if("bar",e=this.ui.destname_input.val())return(t=i.request("new-ebdsc")).set("name",e),t.set("title",this.model.get("title")),t.set("content",this.model.get("content")),i.request("ebdsc-collection").add(t),(n=t.save()).fail(function(){return o.request("danger","Failed to save new description!")}),n.done(function(){var e;return e=`Copied new description ${t.get("name")}`,o.request("success",e),p(`#ebcsv/descriptions/view/${t.id}`)});o.request("warning","Please input a new description name.")}}return e.prototype.template=a,e.prototype.ui={copy_btn:"#copy-dsc-btn",edit_btn:"#edit-dsc-btn",destname_input:'input[name="destname"]'},e.prototype.events={"click @ui.copy_btn":"copy_description","click @ui.edit_btn":"edit_description"},e}.call(this),e.exports=u},43:function(e,t,n){"use strict";n.r(t),n.d(t,"form_group_input_div",function(){return i}),n.d(t,"make_field_input",function(){return u}),n.d(t,"make_field_textarea",function(){return a}),n.d(t,"make_field_select",function(){return o}),n.d(t,"make_login_form",function(){return c}),n.d(t,"login_form",function(){return r}),n.d(t,"name_content_form",function(){return d});var i,r,u,o,a,c,d,l=n(0),p=n.n(l),s=n(45);i=p.a.renderable(function(e){return p.a.div(".form-group",function(){var t,n,i;return p.a.label(".control-label",{for:e.input_id},e.label),i=`#${e.input_id}.form-control`,t=e.input_attributes,n=p.a.input,(null!=e?e.input_type:void 0)?(n=p.a[e.input_type])(i,t,function(){return p.a.text(null!=e?e.content:void 0)}):n(i,t)})}),u=function(e){return p.a.renderable(function(t){return i({input_id:`input_${e}`,label:Object(s.default)(e),input_attributes:{name:e,placeholder:e,value:t[e]}})})},a=function(e){return p.a.renderable(function(t){return i({input_id:`input_${e}`,input_type:"textarea",label:Object(s.default)(e),input_attributes:{name:e,placeholder:e},content:t[e]})})},o=function(e,t){return p.a.renderable(function(n){return p.a.div(".form-group",function(){return p.a.label(".control-label",{for:`select_${e}`}),Object(s.default)(e)}),p.a.select(".form-control",{name:`select_${e}`},function(){var i,r,u,o;for(o=[],i=0,r=t.length;i<r;i++)u=t[i],n[e]===u?o.push(p.a.option({selected:null,value:u},u)):o.push(p.a.option({value:u},u));return o})})},r=(c=function(e="/login",t="POST"){return p.a.renderable(function(n){return p.a.form({role:"form",method:t,action:e},function(){return i({input_id:"input_username",label:"User Name",input_attributes:{name:"username",placeholder:"User Name"}}),i({input_id:"input_password",label:"Password",input_attributes:{name:"password",type:"password",placeholder:"Type your password here...."}}),p.a.button(".btn.btn-secondary",{type:"submit"},"login")})})})(),d=p.a.renderable(function(e){return i({input_id:"input_name",label:"Name",input_attributes:{name:"name",placeholder:"Name"}}),i({input_id:"input_content",input_type:p.a.textarea,label:"Content",input_attributes:{name:"content",placeholder:"..."}}),p.a.input(".btn.btn-secondary.btn-sm",{type:"submit",value:"Add"})})}}]);
//# sourceMappingURL=ebcsv-view-description-b6e8f096ee5bd5b9b3e3.js.map