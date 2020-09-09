import $ from 'jquery'
import Backbone from 'backbone'
import Marionette from 'backbone.marionette'
import tc from 'teacup'

import { Timeline } from "vis-timeline/standalone"


MainChannel = Backbone.Radio.channel 'global'
MessageChannel = Backbone.Radio.channel 'messages'
AppChannel = Backbone.Radio.channel 'crown'

currentItems = []


class TimelineView extends Marionette.View
  template: tc.renderable (model) ->
    tc.div '.maintimeline'
  ui:
    timeline: '.maintimeline'
  onRender: ->
    @timeline = new Timeline @ui.timeline.get(0)
    currentItems = AppChannel.request 'get-current-events'
    AppChannel.request 'set-current-events'
    @timeline.setItems currentItems
  resetTopics: ->
    currentItems = AppChannel.request 'get-current-events'
    AppChannel.request 'set-current-events'
    @timeline.setItems currentItems
    
export default TimelineView
