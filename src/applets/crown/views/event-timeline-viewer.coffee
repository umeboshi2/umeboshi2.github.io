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
    tc.div '.btn-group', role:'group', ->
      tc.div '.btn.btn-outline-warning.btn-clear', 'Clear'
    tc.div '.maintimeline.col-sm-10.offset-sm-1'
  ui:
    topicBtn: '.topic-button'
    clearBtn: '.btn-clear'
    timeline: '.maintimeline'
    loading: '#loading'
  events:
    'click @ui.clearBtn': 'clearBtnClicked'
  clearBtnClicked: ->
    currentItems = []
    @timeline.setItems currentItems
      
  onRender: ->
    @timeline = new Timeline @ui.timeline.get(0)
    currentItems = AppChannel.request 'get-current-events'
    AppChannel.request 'set-current-events'
    @timeline.setItems currentItems

export default TimelineView
