import Backbone from 'backbone'
import Marionette from 'backbone.marionette'
import tc from 'teacup'
import ms from 'ms'

import { MainController } from 'tbirds/controllers'
import { ToolbarAppletLayout } from 'tbirds/views/layout'

import indexModels from 'common/index-models'
import './dbchannel'

MainChannel = Backbone.Radio.channel 'global'
MessageChannel = Backbone.Radio.channel 'messages'
AppChannel = Backbone.Radio.channel 'pmc'

class Controller extends MainController
  channelName: 'pmc'
  layoutClass: ToolbarAppletLayout
  viewIndex: ->
    @setupLayoutIfNeeded()
    require.ensure [], () =>
      View = require('./views/index-view').default
      collection = AppChannel.request 'get-fm-collection'
      response = collection.fetch()
      response.done =>
        view = new View
          model: indexModels.eventIndex
        @layout.showChildView 'content', view
    # name the chunk
    , 'pmc-view-index'

  manageTopics: ->
    @setupLayoutIfNeeded()
    require.ensure [], () =>
      View = require('./views/manage-topics').default
      view = new View
        model: indexModels.eventIndex
      @layout.showChildView 'content', view
    # name the chunk
    , 'pmc-view-sitetipics'
      
  viewSiteTopics: ->
    @setupLayoutIfNeeded()
    require.ensure [], () =>
      View = require('./views/sitetopics').default
      view = new View
        model: indexModels.eventIndex
      @layout.showChildView 'content', view
    # name the chunk
    , 'pmc-view-sitetipics'
      
  viewSearchPMC: ->
    @setupLayoutIfNeeded()
    require.ensure [], () =>
      View = require('./views/search-view').default
      collection = AppChannel.request 'get-fm-collection'
      response = collection.fetch()
      response.done =>
        view = new View
          model: indexModels.eventIndex
        @layout.showChildView 'content', view
    # name the chunk
    , 'pmc-view-search-pmc'
      
export default Controller

