$ = require 'jquery'
Backbone = require 'backbone'
Marionette = require 'backbone.marionette'
marked = require 'marked'


Util = require 'apputil'
MainViews = require '../views'
{ MainController } = require '../controllers'

#Views = require './views'

MainChannel = Backbone.Radio.channel 'global'
MessageChannel = Backbone.Radio.channel 'messages'
ResourceChannel = Backbone.Radio.channel 'resources'


CONTENT_TYPES =
  html: 'Document'
  markdown: 'MarkDownDocument'

CONTENT_LOOKUP =
  Document: 'html'
  MarkDownDocument: 'markdown'


class Controller extends MainController
  _get_doc_and_render_view: (viewclass) ->
    @_make_editbar()
    view = new viewclass
      model: @root_doc
    @_show_content view
    
  manage_contents: (resource) ->
    require.ensure [], () =>
      ContentsView = require './views/contents'
      @_set_resource resource
      @_get_doc_and_render_view ContentsView
    # name the chunk
    , 'manage-contents'
    
  edit_node: (resource) ->
    require.ensure [], () =>
      console.log "HALLO EDIT RESOURCE", resource
      #Views = require './views'
      EditorView = require './views/halloeditor'
      @_set_resource resource
      @_get_doc_and_render_view EditorView
    # name the chunk
    , 'hallo-edit'
    
  ace_edit_node: (resource) ->
    require.ensure [], () =>
      console.log "ACE EDIT RESOURCE", resource
      #Views = require './views'
      AceEditorView = require './views/ace-editor'
      @_set_resource resource
      @_get_doc_and_render_view AceEditorView
    # name the chunk
    , 'ace-edit'
    
  list_pages: () ->
    console.log "List Pages"
    require.ensure [], () =>
      PageListView = require './views/pagelist'
      view = new PageListView
        collection: ResourceChannel.request 'app-documents'
      @_show_content view
    # name the chunk
    , 'listpages'
    
module.exports = Controller

