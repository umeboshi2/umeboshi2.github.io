(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{197:function(e,t,n){var i,a,r,o,l,u,d,s,p,c,m,f,h,v,g,_,b,y;a=n(1),n(3),y=n(2),n(48),o=n(58).default,b=n(13).default,({form_group_input_div:f}=n(47)),({make_field_input:h,make_field_select:v}=n(47)),u=a.Radio.channel("messages"),i=a.Radio.channel("ebcsv"),p=i.request("csv-req-fieldnames"),s=i.request("csv-opt-fieldnames"),m={format:(_=function(e,t,n){return{input_id:`input_${e}`,label:t,input_attributes:{name:e,placeholder:n}}})("format","Format","FixedPrice"),location:_("location","Location","90210"),returnsacceptedoption:_("returnsacceptedoption","Returns Accepted Option","ReturnsAccepted"),duration:_("duration","Duration","GTC"),quantity:_("quantity","Quantity","1"),startprice:_("startprice","Start Price","1.25"),dispatchtimemax:_("dispatchtimemax","Dispatch Time Max","2"),conditionid:_("conditionid","Condition ID","0"),postalcode:_("postalcode","Postal Code","90210"),paymentprofilename:_("paymentprofilename","Payment Profile Name","PayNowPal"),returnprofilename:_("returnprofilename","Return Profile Name","Return30ExChangeReStock20"),shippingprofilename:_("shippingprofilename","Shipping Profile Name","Raw Comic Shipments"),scheduletime:_("scheduletime","Listing Delay Time","0d")},g=y.renderable(function(e,t,n){var i,a,r;return a=n.content||{},i=t[e],r=a[e],i.input_attributes.value=null!=r&&""!==r?a[e]:i.input_attributes.placeholder,f(i)}),c=y.renderable(function(e){return y.div(".panel.panel-default",function(){return y.div(".panel-heading","Config Name"),y.div(".panel-body",function(){return h("name")(e)})}),y.div(".panel.panel-default",function(){return y.div(".panel-heading","Required Fields"),y.div(".panel-body",function(){var t,n,i,a;for(a=[],n=0,i=p.length;n<i;n++)t=p[n],a.push(g(t,m,e));return a})}),y.div(".panel.panel-default",function(){return y.div(".panel-heading","Optional Fields"),y.div(".panel-body",function(){var t,n,i,a;for(a=[],n=0,i=s.length;n<i;n++)t=s[n],a.push(g(t,m,e));return a})}),y.input(".btn.btn-default",{type:"submit",value:"Submit"})}),r=class extends o{ui(){var e,t;for(t in e={},this.form_data)e[t]=`[name="${t}"]`;return e.name='[name="name"]',e}updateModel(){var e,t;for(t in e={},this.form_data)e[t]=this.ui[t].val();return this.model.set("content",e),this.model.set("name",this.ui.name.val()),console.log("@model",this.model)}onSuccess(e){var t;return t=e.get("name"),u.request("success",`${t} saved successfully.`),b(`#ebcsv/configs/view/${e.id}`)}},l=function(){class e extends r{createModel(){return this.model}}return e.prototype.template=c,e.prototype.form_data=m,e}.call(this),d=function(){class e extends r{createModel(){return new(i.request("get_local_configs").model)}}return e.prototype.template=c,e.prototype.form_data=m,e}.call(this),e.exports={EditFormView:l,NewFormView:d}}}]);