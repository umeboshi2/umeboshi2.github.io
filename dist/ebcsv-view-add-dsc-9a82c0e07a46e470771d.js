(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{151:function(e,t,i){var o,d,s,r,n,a,l,u,c,h,m,p,v,_,f;h=i(6),d=i(1),r=i(52).default,p=i(102).default,_=i(11).default,l=i(101).default,i(81),i(96),f=i(0),({make_field_input:m,make_field_select:v}=i(38)),d.Radio.channel("global"),u=d.Radio.channel("messages"),o=d.Radio.channel("ebcsv"),n=f.renderable(function(e){var t,i,o;for(f.div(".listview-header","Document"),t=0,i=(o=["name","title"]).length;t<i;t++)m(o[t])(e);return f.div("#editor-mode-button.btn.btn-default","Change to handlebars mode"),f.div("#ace-editor",{style:"position:relative;width:100%;height:40em;"}),f.input(".btn.btn-default",{type:"submit",value:"Submit"}),f.div(".spinner.fa.fa-spinner.fa-spin")}),s=function(){class e extends r{ui(){var e,t;return e={editor:"#ace-editor",edit_mode_btn:"#editor-mode-button"},t=p(this.fieldList),h.extend(t,e),t}set_edit_mode(e){return this.editorMode=e,this.editor.getSession().setMode(`ace/mode/${this.editorMode}`)}change_edit_mode(){var e;return this.ui.edit_mode_btn.text(`Change to ${this.editorMode} mode`),e="markdown"===this.editorMode?"handlebars":"markdown",this.set_edit_mode(e)}afterDomRefresh(){var e;if(this.set_edit_mode(this.editorMode),this.model.has("content"))return e=this.model.get("content"),this.editor.setValue(e)}updateModel(){var e,t,i,o;for(t=0,i=(o=this.fieldList).length;t<i;t++)e=o[t],this.model.set(e,this.ui[e].val());return this.model.set("content",this.editor.getValue())}onSuccess(e){var t;return t=this.model.get("name"),u.request("success",`${t} saved successfully.`),_(`#ebcsv/descriptions/view/${this.model.id}`)}}return e.prototype.editorMode="markdown",e.prototype.editorContainer="ace-editor",e.prototype.fieldList=["name","title"],e.prototype.template=n,e.prototype.events={"click @ui.edit_mode_btn":"change_edit_mode"},e.prototype.behaviors={HasAceEditor:{behaviorClass:l}},e}.call(this),c=class extends s{createModel(){return new(o.request("get_local_descriptions").model)}saveModel(){return o.request("get_local_descriptions").add(this.model),super.saveModel(arguments)}onSuccess(e){return _(`#ebcsv/descriptions/view/${e.id}`)}},a=class extends s{createModel(){return this.model}},e.exports={NewFormView:c,EditFormView:a}}}]);