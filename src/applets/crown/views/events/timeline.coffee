import { Radio } from 'backbone'
import { View as MnView } from 'backbone.marionette'
import tc from 'teacup'

import { Timeline } from "vis-timeline/standalone"


MainChannel = Radio.channel 'global'
MessageChannel = Radio.channel 'messages'
AppChannel = Radio.channel 'crown'

eventManager = AppChannel.request 'get-event-manager', 'events'

currentItems = []


class TimelineView extends MnView
  template: tc.renderable (model) ->
    tc.div '.maintimeline', style:'height: 300px; width: 400px;'
  ui:
    timeline: '.maintimeline'
  onRender: ->
    @timeline = new Timeline @ui.timeline.get(0)
    eventManager.setCurrentEvents()
    @timeline.setItems eventManager.currentEvents
    @timeline.on 'select', (options) ->
      console.log "items", options.items
      console.log "timeline", @
  resetTopics: ->
    eventManager.setCurrentEvents()
    @timeline.setItems eventManager.currentEvents
    
export default TimelineView

