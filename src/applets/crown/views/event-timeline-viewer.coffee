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
  topicSelected: (event) ->
    @ui.loading.show()
    $(event.target).hide()
    topic = event.target.getAttribute("data-topic")
    name = @model.get topic
    eventModel = MainChannel.request "main:app:get-events", name
    response = eventModel.fetch()
    response.done =>
      @ui.loading.hide()
      events = eventModel.get 'events'
      console.log "Events", events
      @currentItems = @currentItems.concat events
      @timeline.setItems @currentItems
      
      
  onRender: ->
    @timeline = new Timeline @ui.timeline.get(0)
    collection = AppChannel.request 'get-selected-topics'
    selected = collection.filter selected:true
    selected.forEach (item) ->
      console.log "ITEM", item
      events = item.get('eventsModel').get 'events'
      currentItems = currentItems.concat events
    @timeline.setItems currentItems
    
    
    
    
    #@calendar = new Calendar @ui.calendar.get(0),
    #  clickDay: @onClickDay

export default TimelineView
