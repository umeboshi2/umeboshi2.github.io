$ = require 'jquery'
Backbone = require 'backbone'
Marionette = require 'backbone.marionette'
marked = require 'marked'

MainViews = require './views'
Util = require 'apputil'

MainChannel = Backbone.Radio.channel 'global'
ResourceChannel = Backbone.Radio.channel 'resources'

class BaseController extends Backbone.Marionette.Object
  init_page: () ->
    # do nothing
  scroll_top: Util.scroll_top_fast
  navigate_to_url: Util.navigate_to_url
  navbar_set_active: Util.navbar_set_active

class MainController extends BaseController
  mainbus: MainChannel
  _get_region: (region) ->
    MainChannel.request 'main:app:get-region', region

  _show_content: (view) ->
    content = @_get_region 'content'
    content.show view

  _set_resource: (resource) ->
    if resource == null
      id = ""
    else
      id = "/#{resource}"
    @root_doc = ResourceChannel.request 'get-document', id
    #@root_doc.id = id

  _make_editbar: ->
    #data = @root_doc.get 'data'
    #user = data.relationships.meta.current_user
    ##console.log "_make_editbar", data
    editbar = @_get_region 'editbar'
    user = null
    # should have better way to check user?
    if user and 'title' of user
      #window.editbar = editbar
      view = new MainViews.EditBarView
        model: @root_doc
      editbar.show view
    else
      editbar.empty()


module.exports =
  BaseController: BaseController
  MainController: MainController

