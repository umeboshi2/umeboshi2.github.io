webpackJsonp([1],{

/***/ 148:
/***/ function(module, exports, __webpack_require__) {

	var Backbone, FDTemplates, FrontDoorMainView, MainChannel, Marionette, make_json_post, ref, remove_trailing_slashes,
	  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
	  hasProp = {}.hasOwnProperty;
	
	Backbone = __webpack_require__(1);
	
	Marionette = __webpack_require__(95);
	
	FDTemplates = __webpack_require__(149);
	
	ref = __webpack_require__(143), remove_trailing_slashes = ref.remove_trailing_slashes, make_json_post = ref.make_json_post;
	
	MainChannel = Backbone.Radio.channel('global');
	
	FrontDoorMainView = (function(superClass) {
	  extend(FrontDoorMainView, superClass);
	
	  function FrontDoorMainView() {
	    return FrontDoorMainView.__super__.constructor.apply(this, arguments);
	  }
	
	  FrontDoorMainView.prototype.template = FDTemplates.DefaultStaticDocumentTemplate;
	
	  return FrontDoorMainView;
	
	})(Backbone.Marionette.ItemView);
	
	module.exports = {
	  FrontDoorMainView: FrontDoorMainView
	};


/***/ },

/***/ 149:
/***/ function(module, exports, __webpack_require__) {

	var DefaultStaticDocumentTemplate, DefaultViewTemplate, FolderViewTemplate, dropdown_toggle, editor_url, frontdoor_main, frontdoor_url, marked, navbar_collapse_button, ref, tc, workflow_dropdown;
	
	tc = __webpack_require__(115);
	
	marked = __webpack_require__(146);
	
	ref = __webpack_require__(119), navbar_collapse_button = ref.navbar_collapse_button, dropdown_toggle = ref.dropdown_toggle, frontdoor_url = ref.frontdoor_url, editor_url = ref.editor_url;
	
	workflow_dropdown = __webpack_require__(118).workflow_dropdown;
	
	frontdoor_main = tc.renderable(function(content) {
	  return tc.raw(content.data.attributes.body);
	});
	
	DefaultViewTemplate = tc.renderable(function(doc) {
	  return tc.article('.document-view.content', function() {
	    tc.h1(doc.title);
	    return tc.div('.body', function() {
	      var content;
	      content = doc.content;
	      if (doc.doctype === 'markdown') {
	        content = marked(content);
	      }
	      return tc.raw(content);
	    });
	  });
	});
	
	FolderViewTemplate = tc.renderable(function(doc) {
	  var atts, relmeta;
	  atts = doc.data.attributes;
	  relmeta = doc.data.relationships.meta;
	  return tc.article('.document-view.content', function() {
	    tc.h1(atts.title);
	    tc.p('.lead', atts.description);
	    tc.h2('Contents');
	    return tc.div('.body', function() {
	      return tc.table('.table.table-condensed', function() {
	        tc.thead(function() {
	          return tc.tr(function() {
	            tc.th('Title');
	            tc.th('Type');
	            tc.th('Creation Date');
	            return tc.th('Modification Date');
	          });
	        });
	        return tc.tbody(function() {
	          var child, href, i, len, ref1, results, type_info;
	          ref1 = relmeta.children;
	          results = [];
	          for (i = 0, len = ref1.length; i < len; i++) {
	            child = ref1[i];
	            type_info = child.data.relationships.meta.type_info;
	            href = frontdoor_url(child.path);
	            results.push(tc.tr(function() {
	              tc.td(function() {
	                return tc.a({
	                  href: href
	                }, child.data.attributes.title);
	              });
	              tc.td(function() {
	                return tc.a({
	                  href: href
	                }, type_info.title);
	              });
	              tc.td(function() {
	                return tc.a({
	                  href: href
	                }, child.meta.creation_date);
	              });
	              return tc.td(function() {
	                return tc.a({
	                  href: href
	                }, child.meta.modification_date);
	              });
	            }));
	          }
	          return results;
	        });
	      });
	    });
	  });
	});
	
	DefaultStaticDocumentTemplate = tc.renderable(function(doc) {
	  return tc.article('.document-view.content', function() {
	    return tc.div('.body', function() {
	      return tc.raw(marked(doc.content));
	    });
	  });
	});
	
	module.exports = {
	  frontdoor_main: frontdoor_main,
	  DefaultViewTemplate: DefaultViewTemplate,
	  FolderViewTemplate: FolderViewTemplate,
	  DefaultStaticDocumentTemplate: DefaultStaticDocumentTemplate
	};


/***/ }

});
//# sourceMappingURL=1.frontdoor-view-resource.js.map