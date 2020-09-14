(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{161:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t,n,r,u;for(u={},n=0,r=e.length;n<r;n++)u[t=e[n]]='input[name="'+t+'"]';return u}},333:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,u,o,a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=c(n(1)),l=c(n(2)),d=c(n(4)),f=(c(n(5)),c(n(161)));function c(e){return e&&e.__esModule?e:{default:e}}var p=n(85);o=p.form_group_input_div,u=i.default.Radio.channel("messages"),r=function(){var e=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,[{key:"ui",value:function(){var e;return(e=(0,f.default)(this.fieldList)).encoded=".encoded-url",e.copyBtn=".copy-btn",e}},{key:"createModel",value:function(){return new i.default.Model}},{key:"generateURL",value:function(){var e,t;return e=window.location,t=btoa(this.ui.url.val()),e.protocol+"://"+e.host+"/#crown/redirect/"+t}},{key:"updateModel",value:function(){var e;return e=this.generateURL(),this.ui.encoded.text(e)}},{key:"copyBtnClicked",value:function(){return u.request("info","Copy to clipboard not enabled yet.")}}]),t}(l.default.View);return e.prototype.fieldList=["url"],e.prototype.template=d.default.renderable((function(e){return d.default.div(".text-center.listview-header",(function(){return d.default.text("Create Redirect Link")})),d.default.div((function(){return d.default.p((function(){return d.default.text("This is where you create an encoded link to help mitigate "),d.default.text("censorship.")}))})),d.default.button(".copy-btn.btn.btn-outline-warning","copy"),d.default.span(".encoded-url"),o({input_id:"url",label:"URL",input_attributes:{name:"url",placeholder:"Please type or paste a url"}})})),e.prototype.events={"input @ui.url":"updateModel","click @ui.copyBtn":"copyBtnClicked"},e}.call(void 0),t.default=r},85:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.name_content_form=t.login_form=t.make_login_form=t.make_field_select=t.make_field_textarea=t.make_field_input=t.form_group_input_div=void 0;var r,u,o,a,i,l,d,f=p(n(4)),c=p(n(88));function p(e){return e&&e.__esModule?e:{default:e}}t.form_group_input_div=r=f.default.renderable((function(e){return f.default.div(".form-group",(function(){var t,n,r;return f.default.label(".control-label",{for:e.input_id},e.label),r="#"+e.input_id+".form-control",t=e.input_attributes,n=f.default.input,(null!=e?e.input_type:void 0)?(n=f.default[e.input_type])(r,t,(function(){return f.default.text(null!=e?e.content:void 0)})):n(r,t),f.default.div(".invalid-feedback")}))})),t.make_field_input=o=function(e){return f.default.renderable((function(t){return r({input_id:"input_"+e,label:(0,c.default)(e),input_attributes:{name:e,placeholder:e,value:t[e],data:{validation:e}}})}))},t.make_field_textarea=i=function(e){return f.default.renderable((function(t){return r({input_id:"input_"+e,input_type:"textarea",label:(0,c.default)(e),input_attributes:{name:e,placeholder:e,data:{validation:e}},content:t[e]})}))},t.make_field_select=a=function(e,t){return f.default.renderable((function(n){return f.default.div(".form-group",(function(){return f.default.label(".control-label",{for:"select_"+e}),(0,c.default)(e)})),f.default.select(".form-control",{name:"select_"+e},(function(){var r,u,o,a;for(a=[],r=0,u=t.length;r<u;r++)o=t[r],n[e]===o?a.push(f.default.option({selected:null,value:o},o)):a.push(f.default.option({value:o},o));return a}))}))},t.make_login_form=l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"/login",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"POST";return f.default.renderable((function(n){return f.default.form({role:"form",method:t,action:e},(function(){return r({input_id:"input_username",label:"User Name",input_attributes:{name:"username",placeholder:"User Name"}}),r({input_id:"input_password",label:"Password",input_attributes:{name:"password",type:"password",placeholder:"Type your password here...."}}),f.default.button(".btn.btn-secondary",{type:"submit"},"login")}))}))},t.login_form=u=l(),t.name_content_form=d=f.default.renderable((function(e){return r({input_id:"input_name",label:"Name",input_attributes:{name:"name",placeholder:"Name"}}),r({input_id:"input_content",input_type:f.default.textarea,label:"Content",input_attributes:{name:"content",placeholder:"..."}}),f.default.input(".btn.btn-secondary.btn-sm",{type:"submit",value:"Add"})})),t.form_group_input_div=r,t.make_field_input=o,t.make_field_textarea=i,t.make_field_select=a,t.make_login_form=l,t.login_form=u,t.name_content_form=d}}]);
//# sourceMappingURL=crown-make-redirect-6d9d4d045369b823a213.js.map