import $ from 'jquery'
import Backbone from 'backbone'
import Marionette from 'backbone.marionette'
import tc from 'teacup'

import { Timeline } from "vis-timeline/standalone"


MainChannel = Backbone.Radio.channel 'global'
MessageChannel = Backbone.Radio.channel 'messages'
AppChannel = Backbone.Radio.channel 'crown'

eventManager = AppChannel.request 'get-event-manager', 'events'

currentItems = []


class TimelineView extends Marionette.View
  template: tc.renderable (model) ->
    tc.div '.maintimeline'
  ui:
    timeline: '.maintimeline'
  onRender: ->
    @timeline = new Timeline @ui.timeline.get(0)
    eventManager.setCurrentEvents()
    @timeline.setItems eventManager.currentEvents
  resetTopics: ->
    eventManager.setCurrentEvents()
    @timeline.setItems eventManager.currentEvents
    
export default TimelineView
