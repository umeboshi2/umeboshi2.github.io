import $ from 'jquery'
import Backbone from 'backbone'
import Marionette from 'backbone.marionette'
import tc from 'teacup'
import moment from 'moment'

import ModalTopicsView from './select-topics-modal'

MainChannel = Backbone.Radio.channel 'global'
MessageChannel = Backbone.Radio.channel 'messages'
AppChannel = Backbone.Radio.channel 'crown'

    
class MainView extends Marionette.View
  template: tc.renderable (model) ->
    tc.div '.btn-group', role:'group', ->
      tc.button '.topics-button.btn.btn-outline-warning', 'Select Topics'
      tc.button '.timeline-btn.btn.btn-outline-warning', 'Timeline'
      tc.button '.calendar-btn.btn.btn-outline-warning', 'Calendar'
    tc.div '.content.col-sm-10.offset-sm-1'
  ui:
    topicsBtn: '.topics-button'
    timelineBtn: '.timeline-btn'
    calendarBtn: '.calendar-btn'
    content: '.content'
  regions:
    content: '@ui.content'
  events:
    'click @ui.topicsBtn': 'topicsBtnClicked'
    'click @ui.timelineBtn': 'showTimeline'
    'click @ui.calendarBtn': 'showCalendar'
  onRender: ->
    @ui.timelineBtn.hide()
    @ui.calendarBtn.hide()
  topicsBtnClicked: (event) ->
    view = new ModalTopicsView
      model: @model
    MainChannel.request 'show-modal', view
    view.on 'topics:fetched', (event) =>
      @ui.timelineBtn.show()
      @ui.calendarBtn.show()
      
  showTimeline: ->
    require.ensure [], () =>
      View = require('./event-timeline-viewer').default
      view = new View
        model: @model
      @showChildView 'content', view
    # name the chunk
    , 'crown-child-view-timeline'

  showCalendar: ->
    require.ensure [], () =>
      View = require('./event-year-calendar').default
      view = new View
        model: @model
      @showChildView 'content', view
    # name the chunk
    , 'crown-child-view-calendar'

export default MainView
