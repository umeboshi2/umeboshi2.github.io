$ = require 'jquery'
Backbone = require 'backbone'
Marionette = require 'backbone.marionette'
marked = require 'marked'

{ MainController } = require '../controllers'

MainChannel = Backbone.Radio.channel 'global'

#Views = require './views'

class Controller extends MainController
  make_main_content: ->
    @_make_editbar()
    require.ensure [], () =>
      { FrontDoorMainView } = require './views'
      view = new FrontDoorMainView
        model: @root_doc
      @_show_content view
    # name the chunk
    , 'frontdoor-main-view'

  _view_resource: ->
    #console.log "Fetch from", @root_doc.url()
    #response = @root_doc.fetch()
    #response.done =>
    #  @_make_editbar()
    #  view = new Views.FrontDoorMainView
    #    model: @root_doc
    #  @_show_content view
    @_make_editbar()
    require.ensure [], () =>
      { FrontDoorMainView } = require './views'
      view = new FrontDoorMainView
        model: @root_doc
      @_show_content view
    # name the chunk
    , 'frontdoor-view-resource'
    
    
  view_resource: (resource) ->
    #console.log "RESOURCE", resource
    @_set_resource resource
    @_view_resource()

  frontdoor: ->
    @root_doc.id = ""
    @_view_resource()

  start: ->
    #console.log 'controller.start called'
    @make_main_content()
    #console.log 'frontdoor started'

module.exports = Controller

