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
  viewIndex: ->
    @setupLayoutIfNeeded()
    require.ensure [], () =>
      View = require './views/index-view'
      @layout.showChildView 'content', new View
    # name the chunk
    , 'tvmaze-view-index'
    
  viewShowList: ->
    @setupLayoutIfNeeded()
    collection = AppChannel.request 'get-local-tvshows'
    
    # https://jsperf.com/bool-to-int-many
    completed = completed ^ 0
    require.ensure [], () =>
      View = require './views/masonry-show-list'
      @_loadView View, collection, 'tvshow'
    # name the chunk
    , 'tvmaze-view-show-list-masonry'
      
  viewShowListFlat: ->
    @setupLayoutIfNeeded()
    collection = AppChannel.request 'get-local-tvshows'
    
    # https://jsperf.com/bool-to-int-many
    completed = completed ^ 0
    require.ensure [], () =>
      View = require './views/flat-show-list'
      @_loadView View, collection, 'tvshow'
    # name the chunk
    , 'tvmaze-view-show-list-flat'
      
  viewSearchShow: ->
    @setupLayoutIfNeeded()
    # https://jsperf.com/bool-to-int-many
    completed = completed ^ 0
    require.ensure [], () =>
      View = require './views/search-show-view'
      view = new View
      @layout.showChildView 'content', view
    # name the chunk
    , 'tvmaze-view-search-show'

  viewShowNoNo: (id) ->
    console.warn "Don't use this path"
    return @viewShow id
    
  viewShow: (id) ->
    @setupLayoutIfNeeded()
    require.ensure [], () =>
      View = require './views/view-show'
      #model = AppChannel.request 'get-remote-show', id
      LModel = AppChannel.request 'get-local-tvshow-model'
      model = new LModel id: id
      @_loadView View, model, 'tvshow'
    # name the chunk
    , 'tvmaze-view-local-show'
    
      
export default Controller

