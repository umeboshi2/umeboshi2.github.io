(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{209:function(e,t,i){var o,d,s,n,r,a,l,u,h,c,m,p,f,v,_;c=i(7),d=i(2),n=i(49).default,p=i(154).default,v=i(14).default,l=i(153).default,i(101),i(148),_=i(0),({make_field_input:m,make_field_select:f}=i(43)),d.Radio.channel("global"),u=d.Radio.channel("messages"),o=d.Radio.channel("ebcsv"),r=_.renderable(function(e){var t,i,o;for(_.div(".listview-header","Document"),t=0,i=(o=["name","title"]).length;t<i;t++)m(o[t])(e);return _.div("#editor-mode-button.btn.btn-default","Change to handlebars mode"),_.div("#ace-editor",{style:"position:relative;width:100%;height:40em;"}),_.input(".btn.btn-default",{type:"submit",value:"Submit"}),_.div(".spinner.fa.fa-spinner.fa-spin")}),s=function(){class e extends n{ui(){var e,t;return e={editor:"#ace-editor",edit_mode_btn:"#editor-mode-button"},t=p(this.fieldList),c.extend(t,e),t}set_edit_mode(e){return this.editorMode=e,this.editor.getSession().setMode(`ace/mode/${this.editorMode}`)}change_edit_mode(){var e;return this.ui.edit_mode_btn.text(`Change to ${this.editorMode} mode`),e="markdown"===this.editorMode?"handlebars":"markdown",this.set_edit_mode(e)}afterDomRefresh(){var e;if(this.set_edit_mode(this.editorMode),this.model.has("content"))return e=this.model.get("content"),this.editor.setValue(e)}updateModel(){var e,t,i,o;for(t=0,i=(o=this.fieldList).length;t<i;t++)e=o[t],this.model.set(e,this.ui[e].val());return this.model.set("content",this.editor.getValue())}onSuccess(e){var t;return t=e.get("name"),u.request("success",`${t} saved successfully.`),v(`#ebcsv/descriptions/view/${e.id}`)}}return e.prototype.editorMode="markdown",e.prototype.editorContainer="ace-editor",e.prototype.fieldList=["name","title"],e.prototype.template=r,e.prototype.events={"click @ui.edit_mode_btn":"change_edit_mode"},e.prototype.behaviors={HasAceEditor:{behaviorClass:l}},e}.call(this),h=class extends s{createModel(){return new(o.request("get_local_descriptions").model)}},a=class extends s{createModel(){return this.model}},e.exports={NewFormView:h,EditFormView:a}}}]);
//# sourceMappingURL=ebcsv-view-add-dsc-ee1241e13cee17621481.js.map