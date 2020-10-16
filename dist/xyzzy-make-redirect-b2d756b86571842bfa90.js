(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{1038:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var u,r,o,a=function(){function e(e,t){for(var n=0;n<t.length;n++){var u=t[n];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(e,u.key,u)}}return function(t,n,u){return n&&e(t.prototype,n),u&&e(t,u),t}}(),i=n(3),l=n(8),d=_(n(40)),f=n(735),c=n(0),p=_(n(722)),s=_(n(1039));function _(e){return e&&e.__esModule?e:{default:e}}var b=n(543);o=b.form_group_input_div,r=i.Radio.channel("messages"),u=function(){var e=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,[{key:"ui",value:function(){var e;return e=(0,s.default)(this.fieldList),(0,c.extend)(e,{encoded:".encoded-url",copyBtn:".copy-btn",autoLoad:".auto-load"}),e}},{key:"createModel",value:function(){return new i.Model}},{key:"generateURL",value:function(){var e,t,n,u,r,o;return n=window.location,r=(0,f.encode)(btoa(this.ui.url.val())),u=(null!=n?n.pathname:void 0)||"/",o=n.protocol+"://"+n.host+u,t="#xyzzy/go/"+r,e=this.ui.autoLoad.is(":checked"),console.log("@ui.autoLoad",e),o=o+"?"+p.default.stringify({auto:e})+t}},{key:"updateModel",value:function(){var e;return e=this.generateURL(),this.ui.encoded.text(e)}},{key:"copyBtnClicked",value:function(){var e;return e=this.generateURL(),navigator.clipboard.writeText(e).then((function(){return r.request("warning","Copied to clipboard")}))}}]),t}(l.View);return e.prototype.fieldList=["url"],e.prototype.template=d.default.renderable((function(){return d.default.div(".text-center.listview-header",(function(){return d.default.text("Create Redirect Link")})),d.default.div((function(){return d.default.p((function(){return d.default.text("This is where you create an encoded link to help mitigate "),d.default.text("censorship.  Selecting auto load will automatically redirect"),d.default.text(" the user after 10 seconds")}))})),d.default.button(".copy-btn.btn.btn-outline-warning","copy"),d.default.span(".encoded-url"),o({input_id:"url",label:"URL",input_attributes:{name:"url",placeholder:"Please type or paste a url"}}),d.default.div(".form-group.form-check",(function(){return d.default.input(".auto-load.form-check-input",{type:"checkbox"}),d.default.label(".form-check-label","Auto Load")}))})),e.prototype.events={"input @ui.url":"updateModel","input @ui.autoLoad":"updateModel","click @ui.copyBtn":"copyBtnClicked"},e}.call(void 0),t.default=u},1039:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t,n,u,r;for(r={},n=0,u=e.length;n<u;n++)r[t=e[n]]='input[name="'+t+'"]';return r}},543:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.name_content_form=t.login_form=t.make_login_form=t.make_field_select=t.make_field_textarea=t.make_field_input=t.form_group_input_div=void 0;var u,r,o,a,i,l,d,f=p(n(738)),c=p(n(40));function p(e){return e&&e.__esModule?e:{default:e}}t.form_group_input_div=u=c.default.renderable((function(e){return c.default.div(".form-group",(function(){var t,n,u;return c.default.label(".control-label",{for:e.input_id},e.label),u="#"+e.input_id+".form-control",t=e.input_attributes,n=c.default.input,(null!=e?e.input_type:void 0)?(n=c.default[e.input_type])(u,t,(function(){return c.default.text(null!=e?e.content:void 0)})):n(u,t),c.default.div(".invalid-feedback")}))})),t.make_field_input=o=function(e){return c.default.renderable((function(t){return u({input_id:"input_"+e,label:(0,f.default)(e),input_attributes:{name:e,placeholder:e,value:t[e],data:{validation:e}}})}))},t.make_field_textarea=i=function(e){return c.default.renderable((function(t){return u({input_id:"input_"+e,input_type:"textarea",label:(0,f.default)(e),input_attributes:{name:e,placeholder:e,data:{validation:e}},content:t[e]})}))},t.make_field_select=a=function(e,t){return c.default.renderable((function(n){return c.default.div(".form-group",(function(){return c.default.label(".control-label",{for:"select_"+e}),(0,f.default)(e)})),c.default.select(".form-control",{name:"select_"+e},(function(){var u,r,o,a;for(a=[],u=0,r=t.length;u<r;u++)o=t[u],n[e]===o?a.push(c.default.option({selected:null,value:o},o)):a.push(c.default.option({value:o},o));return a}))}))},t.make_login_form=l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"/login",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"POST";return c.default.renderable((function(){return c.default.form({role:"form",method:t,action:e},(function(){return u({input_id:"input_username",label:"User Name",input_attributes:{name:"username",placeholder:"User Name"}}),u({input_id:"input_password",label:"Password",input_attributes:{name:"password",type:"password",placeholder:"Type your password here...."}}),c.default.button(".btn.btn-secondary",{type:"submit"},"login")}))}))},t.login_form=r=l(),t.name_content_form=d=c.default.renderable((function(){return u({input_id:"input_name",label:"Name",input_attributes:{name:"name",placeholder:"Name"}}),u({input_id:"input_content",input_type:c.default.textarea,label:"Content",input_attributes:{name:"content",placeholder:"..."}}),c.default.input(".btn.btn-secondary.btn-sm",{type:"submit",value:"Add"})})),t.form_group_input_div=u,t.make_field_input=o,t.make_field_textarea=i,t.make_field_select=a,t.make_login_form=l,t.login_form=r,t.name_content_form=d}}]);
//# sourceMappingURL=xyzzy-make-redirect-b2d756b86571842bfa90.js.map