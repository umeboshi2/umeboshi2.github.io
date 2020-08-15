import Backbone from 'backbone'
import Marionette from 'backbone.marionette'
import tc from 'teacup'
import ms from 'ms'

import ToolbarView from 'tbirds/views/button-toolbar'
import { MainController } from 'tbirds/controllers'
import { ToolbarAppletLayout } from 'tbirds/views/layout'
import navigate_to_url from 'tbirds/util/navigate-to-url'
import scroll_top_fast from 'tbirds/util/scroll-top-fast'

MainChannel = Backbone.Radio.channel 'global'
MessageChannel = Backbone.Radio.channel 'messages'
AppChannel = Backbone.Radio.channel 'crown'

class CvLinks extends Backbone.Model
  url: '/assets/documents/cvlinks.json'

class Controller extends MainController
  channelName: 'crown'
  layoutClass: ToolbarAppletLayout
  viewIndex: ->
    @setupLayoutIfNeeded()
    require.ensure [], () =>
      model = new CvLinks
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
      
export default Controller
