(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{256:function(e,t,n){"use strict";var o,i,r,c,u,a,f,s,l,d,p,b,g=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();i=n(1),c=n(2),b=n(3),n(53),n(56),p=n(12).default;var v=n(52);l=v.form_group_input_div,u=i.Radio.channel("messages"),o=i.Radio.channel("ebcsv"),f=o.request("csv-req-fieldnames"),a=o.request("csv-opt-fieldnames"),d=function(e,t,n){return{input_id:"input_"+e,label:t,input_attributes:{name:e,placeholder:n}}},s=b.renderable((function(e){return b.div(".form-inline",(function(){return l(d("destname","New Config","newconfig")),b.div("#copy-cfg-btn.btn.btn-default","Copy Config"),b.div("#edit-cfg-btn.btn.btn-default","Edit Config")})),b.div(".listview-header",(function(){return b.text("Viewing Config "+e.name)})),b.hr(),b.article(".document-view.content",(function(){return b.div(".body",(function(){return b.dl(".dl-horizontal",(function(){var t,n,o,i;for(i=[],n=0,o=f.length;n<o;n++)t=f[n],b.dt(t),i.push(b.dd(e.content[t]));return i})),b.dl(".dl-horizontal",(function(){var t,n,o,i;for(i=[],n=0,o=a.length;n<o;n++)t=a[n],b.dt(t),i.push(b.dd(e.content[t]));return i}))}))}))})),r=function(){var e=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),g(t,[{key:"edit_config",value:function(){return p("#ebcsv/configs/edit/"+this.model.id)}},{key:"copy_config",value:function(){var e,t,n;if("bar",e=this.ui.destname_input.val())return(t=o.request("new-ebcfg")).set("name",e),t.set("content",this.model.get("content")),o.request("ebcfg-collection").add(t),(n=t.save()).fail((function(){return u.request("danger","Failed to save new config!")})),n.done((function(){var e;return e="Copied new config "+t.get("name"),u.request("success",e),p("#ebcsv/configs/view/"+t.id)}));u.request("warning","Please input a new config name.")}}]),t}(c.View);return e.prototype.template=s,e.prototype.ui={copy_btn:"#copy-cfg-btn",edit_btn:"#edit-cfg-btn",destname_input:'input[name="destname"]'},e.prototype.events={"click @ui.copy_btn":"copy_config","click @ui.edit_btn":"edit_config"},e}.call(void 0),e.exports=r}}]);
//# sourceMappingURL=ebcsv-view-config-df58e689dedb83704374.js.map