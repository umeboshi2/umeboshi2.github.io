import Backbone from 'backbone'
import Marionette from 'backbone.marionette'
import tc from 'teacup'
import ms from 'ms'

import ToolbarView from 'tbirds/views/button-toolbar'
import { MainController } from 'tbirds/controllers'
import { ToolbarAppletLayout } from 'tbirds/views/layout'
navigate_to_url = require 'tbirds/util/navigate-to-url'
scroll_top_fast = require 'tbirds/util/scroll-top-fast'

MainChannel = Backbone.Radio.channel 'global'
MessageChannel = Backbone.Radio.channel 'messages'
ResourceChannel = Backbone.Radio.channel 'resources'
AppChannel = Backbone.Radio.channel 'moviedb'

class Controller extends MainController
  layoutClass: ToolbarAppletLayout
  view_index: ->
    @setupLayoutIfNeeded()
    Collection = AppChannel.request "SearchTvCollection"
    require.ensure [], () =>
      View = require './views/index-view.coffee'
      view = new View
        collection: new Collection
      @layout.showChildView 'content', view
    # name the chunk
    , 'moviedb-view-index'
    
  viewTvShow: (id) ->
    @setupLayoutIfNeeded()
    TvDetails = AppChannel.request 'TvDetails'
    model = new TvDetails
      id: id
    console.log "MODEL", model
    require.ensure [], () =>
      View = require './views/tvshow'
      response = model.fetch
        data:
          append_to_response: 'images'
      response.done =>
        view = new View
          model: model
        @layout.showChildView 'content', view
        @scrollTop()
    # name the chunk
    , 'moviedb-view-tv-show'
      
export default Controller

