import Backbone from 'backbone'
import Marionette from 'backbone.marionette'
import tc from 'teacup'
import ms from 'ms'

import ToolbarView from 'tbirds/views/button-toolbar'
import { MainController } from 'tbirds/controllers'
import { ToolbarAppletLayout } from 'tbirds/views/layout'
import navigate_to_url from 'tbirds/util/navigate-to-url'
import scroll_top_fast from 'tbirds/util/scroll-top-fast'

import FrontDoorMainView from '../frontdoor/views/docview'

MainChannel = Backbone.Radio.channel 'global'
MessageChannel = Backbone.Radio.channel 'messages'
AppChannel = Backbone.Radio.channel 'taxes'

class Controller extends MainController
  layoutClass: ToolbarAppletLayout

  viewPage: (name) ->
    console.log "name is", name
    @setupLayoutIfNeeded()
    model = MainChannel.request 'main:app:get-document', name
    response = model.fetch()
    response.done =>
      view = new FrontDoorMainView
        model: model
      @layout.showChildView 'content', view
    response.fail ->
      MessageChannel.request 'warning', "failed to get #{name}"

  viewIndex: ->
    @viewPage 'taxes/index'
      
export default Controller

