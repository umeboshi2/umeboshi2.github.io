(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{154:function(e,t,n){var i,a,o,r,l,u,d,s,p,c,m,f,h,v,_,g,b;a=n(1),n(2),b=n(0),n(42),r=n(52).default,g=n(11).default,({form_group_input_div:m}=n(38)),({make_field_input:f,make_field_select:h}=n(38)),i=a.Radio.channel("ebcsv"),s=i.request("csv-req-fieldnames"),d=i.request("csv-opt-fieldnames"),c={format:(_=function(e,t,n){return{input_id:`input_${e}`,label:t,input_attributes:{name:e,placeholder:n}}})("format","Format","FixedPrice"),location:_("location","Location","90210"),returnsacceptedoption:_("returnsacceptedoption","Returns Accepted Option","ReturnsAccepted"),duration:_("duration","Duration","GTC"),quantity:_("quantity","Quantity","1"),startprice:_("startprice","Start Price","1.25"),dispatchtimemax:_("dispatchtimemax","Dispatch Time Max","2"),conditionid:_("conditionid","Condition ID","0"),postalcode:_("postalcode","Postal Code","90210"),paymentprofilename:_("paymentprofilename","Payment Profile Name","PayNowPal"),returnprofilename:_("returnprofilename","Return Profile Name","Return30ExChangeReStock20"),shippingprofilename:_("shippingprofilename","Shipping Profile Name","Raw Comic Shipments"),scheduletime:_("scheduletime","Listing Delay Time","0d")},v=b.renderable(function(e,t,n){var i,a,o;return a=n.content||{},i=t[e],o=a[e],i.input_attributes.value=null!=o&&""!==o?a[e]:i.input_attributes.placeholder,m(i)}),p=b.renderable(function(e){return b.div(".panel.panel-default",function(){return b.div(".panel-heading","Config Name"),b.div(".panel-body",function(){return f("name")(e)})}),b.div(".panel.panel-default",function(){return b.div(".panel-heading","Required Fields"),b.div(".panel-body",function(){var t,n,i,a;for(a=[],n=0,i=s.length;n<i;n++)t=s[n],a.push(v(t,c,e));return a})}),b.div(".panel.panel-default",function(){return b.div(".panel-heading","Optional Fields"),b.div(".panel-body",function(){var t,n,i,a;for(a=[],n=0,i=d.length;n<i;n++)t=d[n],a.push(v(t,c,e));return a})}),b.input(".btn.btn-default",{type:"submit",value:"Submit"})}),o=class extends r{ui(){var e,t;for(t in e={},this.form_data)e[t]=`[name="${t}"]`;return e.name='[name="name"]',e}updateModel(){var e,t;for(t in e={},this.form_data)e[t]=this.ui[t].val();return this.model.set("content",e),this.model.set("name",this.ui.name.val()),console.log("@model",this.model)}},l=function(){class e extends o{createModel(){return this.model}onSuccess(e){return g(`#ebcsv/configs/view/${this.model.id}`)}}return e.prototype.template=p,e.prototype.form_data=c,e}.call(this),u=function(){class e extends o{createModel(){return new(i.request("get_local_configs").model)}saveModel(){return i.request("get_local_configs").add(this.model),super.saveModel(arguments)}onSuccess(e){return g(`#ebcsv/configs/view/${e.id}`)}}return e.prototype.template=p,e.prototype.form_data=c,e}.call(this),e.exports={EditFormView:l,NewFormView:u}}}]);