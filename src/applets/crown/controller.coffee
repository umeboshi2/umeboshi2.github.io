import Backbone from 'backbone'
import Marionette from 'backbone.marionette'
import tc from 'teacup'
import ms from 'ms'
import { decode } from 'url-safe-base64'

import ToolbarView from 'tbirds/views/button-toolbar'
import { MainController } from 'tbirds/controllers'
import { ToolbarAppletLayout } from 'tbirds/views/layout'
import navigate_to_url from 'tbirds/util/navigate-to-url'
import scroll_top_fast from 'tbirds/util/scroll-top-fast'

import './dbchannel'

MainChannel = Backbone.Radio.channel 'global'
MessageChannel = Backbone.Radio.channel 'messages'
AppChannel = Backbone.Radio.channel 'crown'

class Controller extends MainController
  channelName: 'crown'
  layoutClass: ToolbarAppletLayout
  viewIndex: ->
    @setupLayoutIfNeeded()
    require.ensure [], () =>
      model = AppChannel.request 'get-index-model', 'cvlinks'
      View = require('./views/index-view').default
      response = model.fetch()
      response.done =>
        view = new View
          model: model
        @layout.showChildView 'content', view
      response.fail ->
        MessageChannel.request 'info', 'failed to fetch model'
    # name the chunk
    , 'crown-view-index'
  viewRSS: ->
    @setupLayoutIfNeeded()
    require.ensure [], () =>
      View = require('./views/rss-view').default
      view = new View
      @layout.showChildView 'content', view
    # name the chunk
    , 'crown-view-rss'
  viewCoHCalendar: ->
    @setupLayoutIfNeeded()
    require.ensure [], () =>
      View = require('./views/coh-calendar').default
      view = new View
      @layout.showChildView 'content', view
    # name the chunk
    , 'crown-view-coh-calendar'

  viewNewsCalendar: ->
    @setupLayoutIfNeeded()
    require.ensure [], () =>
      View = require('./views/news-calendar').default
      view = new View
      @layout.showChildView 'content', view
    # name the chunk
    , 'crown-view-news-calendar'

  viewEvents: ->
    @setupLayoutIfNeeded()
    require.ensure [], () =>
      model = AppChannel.request 'get-index-model', 'eventIndex'
      View = require('./views/main-event-viewer').default
      response = model.fetch()
      response.done =>
        view = new View
          model: model
        @layout.showChildView 'content', view
    # name the chunk
    , 'crown-view-events'


  viewRedirect: (encoded) ->
    @setupLayoutIfNeeded()
    require.ensure [], () =>
      View = require('./views/redirect-view').default
      view = new View
        model: new Backbone.Model url: atob decode encoded
      @layout.showChildView 'content', view
    # name the chunk
    , 'crown-view-redirect'

  makeRedirect: ->
    @setupLayoutIfNeeded()
    require.ensure [], () =>
      View = require('./views/make-redirect').default
      view = new View
      @layout.showChildView 'content', view
    # name the chunk
    , 'crown-make-redirect'

  viewRedirectAuto: (encoded) ->
    url = atob(encoded)
    console.log "URL IS", url
    window.open url, '_blank'

  viewSubtopics: ->
    @setupLayoutIfNeeded()
    require.ensure [], () =>
      model = AppChannel.request 'get-index-model', 'eventIndex'
      View = require('./views/subtopics-view').default
      response = model.fetch()
      response.done =>
        view = new View
          model: model
        @layout.showChildView 'content', view
    # name the chunk
    , 'crown-view-subtopics'
    
export default Controller

