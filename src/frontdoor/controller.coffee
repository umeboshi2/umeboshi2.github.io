$ = require 'jquery'
Backbone = require 'backbone'
Marionette = require 'backbone.marionette'
marked = require 'marked'

{ MainController } = require '../controllers'

MainChannel = Backbone.Radio.channel 'global'
MessageChannel = Backbone.Radio.channel 'messages'
ResourceChannel = Backbone.Radio.channel 'resources'

class Controller extends MainController
  _view_resource: ->
    @_make_editbar()
    require.ensure [], () =>
      { FrontDoorMainView } = require './views'
      view = new FrontDoorMainView
        model: @root_doc
      @_show_content view
    # name the chunk
    , 'frontdoor-view-resource'
    
    
  view_page: (name) ->
    @root_doc = ResourceChannel.request 'get-document', name
    @_view_resource()
    
  frontdoor: ->
    @root_doc = ResourceChannel.request 'get-document', 'startdoc'
    @_view_resource()

module.exports = Controller

