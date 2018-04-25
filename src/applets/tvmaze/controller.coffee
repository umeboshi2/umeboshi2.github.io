import Backbone from 'backbone'
import Marionette from 'backbone.marionette'
import tc from 'teacup'
import ms from 'ms'

import ToolbarView from 'tbirds/views/button-toolbar'
import { MainController } from 'tbirds/controllers'
import { ToolbarAppletLayout } from 'tbirds/views/layout'
import navigate_to_url from 'tbirds/util/navigate-to-url'
scroll_top_fast = require 'tbirds/util/scroll-top-fast'

import './dbchannel'


MainChannel = Backbone.Radio.channel 'global'
MessageChannel = Backbone.Radio.channel 'messages'
ResourceChannel = Backbone.Radio.channel 'resources'
AppChannel = Backbone.Radio.channel 'tvmaze'

class Controller extends MainController
  layoutClass: ToolbarAppletLayout
  view_index: ->
    @setupLayoutIfNeeded()
    collection = AppChannel.request 'get-local-tvshows'
    
    # https://jsperf.com/bool-to-int-many
    completed = completed ^ 0
    require.ensure [], () =>
      View = require './views/index-view'
      @_loadView View, collection, 'tvshow'
    # name the chunk
    , 'tvmaze-view-index'
      
  viewSearchShow: ->
    @setupLayoutIfNeeded()
    # https://jsperf.com/bool-to-int-many
    completed = completed ^ 0
    require.ensure [], () =>
      View = require './views/search-show-view'
      view = new View
      @layout.showChildView 'content', view
    # name the chunk
    , 'tvmaze-view-index'

  viewShow: (id) ->
    @setupLayoutIfNeeded()
    require.ensure [], () =>
      View = require './views/view-show'
      #model = AppChannel.request 'get-remote-show', id
      LModel = AppChannel.request 'get-local-tvshow-model'
      model = new LModel id: id
      @_loadView View, model, 'tvshow'
    # name the chunk
    , 'tvmaze-view-remote-show'
    
  viewShowLocal: (id) ->
    @setupLayoutIfNeeded()
    require.ensure [], () =>
      View = require './views/view-show'
      Tmodel = AppChannel.request 'get-local-tvshow-model'
      console.log "Tmodel", Tmodel
      model = new Tmodel
        id: id
      console.log "model", model
      response = model.fetch()
      console.log "response", response
      response.then =>
        if 'content' in Object.keys(model.attributes)
          view = new View
            model: model
          @layout.showChildView 'content', view
        else
          MessageChannel.request 'danger', 'no model'
          navigate_to_url '#tvmaze/searchshow'
    # name the chunk
    , 'tvmaze-view-index'
      
export default Controller

