(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{252:function(e,t,n){"use strict";var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var o,l,s,c,d,p,f,_,m,b=function(e,t){if(!(e instanceof t))throw new Error("Bound instance method accessed before binding")};l=n(1),c=n(2),n(57),m=n(3),_=n(12).default;var h=n(52);h.make_field_input,h.make_field_select,l.Radio.channel("global"),d=l.Radio.channel("messages"),o=l.Radio.channel("ebcsv"),f=m.renderable((function(e){return m.article(".document-view.content",(function(){return m.div(".body",(function(){return m.div(".card",(function(){return m.div(".card-header",(function(){return m.text("Drop an xml file, or use the "),m.button(".sample-comics-button.btn.btn-default","Example data.")})),m.div(".card-body",(function(){return m.div(".parse-btn.btn.btn-default",{style:"display:none"},(function(){return m.text("Parse Dropped File")})),m.input(".xml-file-input.input",{type:"file"}),m.span(".parse-chosen-button.btn.btn-default",{style:"display:none"},(function(){return m.text("Parse input file.")}))}))}))}))}))})),p=function(){var e=function(e){function t(){return i(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return u(t,e),r(t,[{key:"fetch",value:function(e){return(e=e||{}).dataType="text",function e(t,n,r){null===t&&(t=Function.prototype);var i=Object.getOwnPropertyDescriptor(t,n);if(void 0===i){var a=Object.getPrototypeOf(t);return null===a?void 0:e(a,n,r)}if("value"in i)return i.value;var u=i.get;return void 0!==u?u.call(r):void 0}(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"fetch",this).call(this,e)}},{key:"parse",value:function(e,t){return{content:e}}}]),t}(l.Model);return e.prototype.url="/assets/documents/sample-comics.xml",e}.call(void 0),s=function(){var e=function(e){function t(){i(this,t);var e=a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments));return e.successfulParse=e.successfulParse.bind(e),e.xmlReaderOnLoad=e.xmlReaderOnLoad.bind(e),e}return u(t,e),r(t,[{key:"file_input_clicked",value:function(e){return console.log("file_input_clicked",e),this.ui.file_input.val(null),this.ui.chosen_btn.hide()}},{key:"file_input_changed",value:function(e){return console.log("file_input_changed",e),this.ui.chosen_btn.show()}},{key:"handle_drop",value:function(e){var t;return e.preventDefault(),this.$el.css("border","0px"),t=e.originalEvent.dataTransfer.files[0],this.ui.status_msg.text("File: "+t.name),this.droppedFile=t,this.ui.parse_btn.show()}},{key:"handle_dragOver",value:function(e){return e.preventDefault(),e.stopPropagation()}},{key:"handle_dragEnter",value:function(e){return e.stopPropagation(),e.preventDefault(),this.$el.css("border","2px dotted")}},{key:"successfulParse",value:function(){return b(this,t),this.ui.status_msg.text("Parse Successful"),_("#ebcsv")}},{key:"parse_chosen_xml",value:function(){var e,t;return this.ui.status_msg.text("Reading xml file..."),this.ui.file_input.val(),this.ui.file_input,e=this.ui.file_input[0].files[0],(t=new FileReader).onload=this.xmlReaderOnLoad,t.readAsText(e),this.ui.parse_btn.hide()}},{key:"xmlReaderOnLoad",value:function(e){var n;return b(this,t),n=e.target.result,this.ui.status_msg.text("Parsing xml....."),o.request("parse-comics-xml",n,this.successfulParse)}},{key:"parse_xml",value:function(){var e;return this.ui.status_msg.text("Reading xml file..."),(e=new FileReader).onload=this.xmlReaderOnLoad,e.readAsText(this.droppedFile),this.ui.parse_btn.hide()}},{key:"parse_sample_xml",value:function(){var e,t,n=this;return t=(e=new p).fetch(),this.ui.status_msg.text("Retrieving xml...."),t.done((function(){var t;return n.ui.status_msg.text("Parsing xml...."),t=e.get("content"),o.request("parse-comics-xml",t,n.successfulParse)})),t.fail((function(){return n.ui.status_msg.text("Something failed."),d.danger("Failed to parse sample comics")}))}}]),t}(c.View);return e.prototype.template=f,e.prototype.droppedFile=null,e.prototype.ui={status_msg:".card-header",file_input:".xml-file-input",parse_btn:".parse-btn",chosen_btn:".parse-chosen-button",sampleComicsBtn:".sample-comics-button"},e.prototype.events={dragover:"handle_dragOver",dragenter:"handle_dragEnter",drop:"handle_drop","click @ui.parse_btn":"parse_xml","click @ui.file_input":"file_input_clicked","change @ui.file_input":"file_input_changed","click @ui.chosen_btn":"parse_chosen_xml","click @ui.sampleComicsBtn":"parse_sample_xml"},e}.call(void 0),e.exports=s},52:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.name_content_form=t.login_form=t.make_login_form=t.make_field_select=t.make_field_textarea=t.make_field_input=t.form_group_input_div=void 0;var r,i,a,u,o,l,s,c=p(n(3)),d=p(n(55));function p(e){return e&&e.__esModule?e:{default:e}}t.form_group_input_div=r=c.default.renderable((function(e){return c.default.div(".form-group",(function(){var t,n,r;return c.default.label(".control-label",{for:e.input_id},e.label),r="#"+e.input_id+".form-control",t=e.input_attributes,n=c.default.input,(null!=e?e.input_type:void 0)?(n=c.default[e.input_type])(r,t,(function(){return c.default.text(null!=e?e.content:void 0)})):n(r,t),c.default.div(".invalid-feedback")}))})),t.make_field_input=a=function(e){return c.default.renderable((function(t){return r({input_id:"input_"+e,label:(0,d.default)(e),input_attributes:{name:e,placeholder:e,value:t[e],data:{validation:e}}})}))},t.make_field_textarea=o=function(e){return c.default.renderable((function(t){return r({input_id:"input_"+e,input_type:"textarea",label:(0,d.default)(e),input_attributes:{name:e,placeholder:e,data:{validation:e}},content:t[e]})}))},t.make_field_select=u=function(e,t){return c.default.renderable((function(n){return c.default.div(".form-group",(function(){return c.default.label(".control-label",{for:"select_"+e}),(0,d.default)(e)})),c.default.select(".form-control",{name:"select_"+e},(function(){var r,i,a,u;for(u=[],r=0,i=t.length;r<i;r++)a=t[r],n[e]===a?u.push(c.default.option({selected:null,value:a},a)):u.push(c.default.option({value:a},a));return u}))}))},t.make_login_form=l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"/login",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"POST";return c.default.renderable((function(n){return c.default.form({role:"form",method:t,action:e},(function(){return r({input_id:"input_username",label:"User Name",input_attributes:{name:"username",placeholder:"User Name"}}),r({input_id:"input_password",label:"Password",input_attributes:{name:"password",type:"password",placeholder:"Type your password here...."}}),c.default.button(".btn.btn-secondary",{type:"submit"},"login")}))}))},t.login_form=i=l(),t.name_content_form=s=c.default.renderable((function(e){return r({input_id:"input_name",label:"Name",input_attributes:{name:"name",placeholder:"Name"}}),r({input_id:"input_content",input_type:c.default.textarea,label:"Content",input_attributes:{name:"content",placeholder:"..."}}),c.default.input(".btn.btn-secondary.btn-sm",{type:"submit",value:"Add"})})),t.form_group_input_div=r,t.make_field_input=a,t.make_field_textarea=o,t.make_field_select=u,t.make_login_form=l,t.login_form=i,t.name_content_form=s}}]);
//# sourceMappingURL=ebcsv-view-upload-xml-view-09892256b8e1b54c7ce0.js.map