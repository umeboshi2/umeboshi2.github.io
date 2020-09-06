import $ from 'jquery'
import Backbone from 'backbone'
import Marionette from 'backbone.marionette'
import tc from 'teacup'
import moment from 'moment'

import Calendar from 'js-year-calendar'
import 'js-year-calendar/dist/js-year-calendar.css'

import IsEscapeModal from 'tbirds/behaviors/is-escape-modal'

import LinkEntryView from '../../frontdoor/views/link-entry'

MainChannel = Backbone.Radio.channel 'global'
MessageChannel = Backbone.Radio.channel 'messages'
AppChannel = Backbone.Radio.channel 'crown'

convertDate = (date) ->
  return new Date moment(date).utc().format('YYYY-MM-DDTHH:mm:ss')
convertEvent = (event) ->
  event.startDate = convertDate event.start
  if event?.end
    event.endDate = convertDate event.end
  else
    event.endDate = event.startDate
  event.color = "SkyBlue"
  event.name = event.title

class ModalEventsView extends Marionette.View
  behaviors: [IsEscapeModal]
  template: tc.renderable (model) ->
    tc.div '.modal-dialog.modal-md', ->
      tc.div '.modal-content', ->
        tc.div '.events'
        tc.button '.close-btn.btn.btn-warning.fa.fa-close.ml-auto',
        data:dismiss:'modal', "Close"
  ui:
    closeBtn: '.close-btn'
    eventsRegion: '.events'
  regions:
    eventsRegion: '@ui.eventsRegion'
  events:
    'click @ui.closeBtn': 'emptyModal'
  emptyModal: ->
    app = MainChannel.request 'main:app:object'
    layout = app.getView()
    region = layout.getRegion 'modal'
    region.empty()
  onRender: ->
    view = new Marionette.CollectionView
      collection: new Backbone.Collection @model.get 'events'
      viewComparator: 'start'
      childView: LinkEntryView
    @showChildView 'eventsRegion', view
    
class CalendarView extends Marionette.View
  template: tc.renderable (model) ->
    tc.div '.btn-group', role:'group', ->
      tc.div '.btn.btn-outline-warning.btn-clear', 'Clear'
      for topic of model
        tc.button '.btn.btn-outline-success.topic-button',
        data:topic:topic, topic
    tc.div '#loading', style:'display: none;', ->
      tc.h2 ->
        tc.i '.fa.fa-spinner.fa-spin'
        tc.text 'Loading Events'
    tc.div '.maincalendar.col-sm-10.offset-sm-1'
  ui:
    topicBtn: '.topic-button'
    clearBtn: '.btn-clear'
    calendar: '.maincalendar'
    loading: '#loading'
  events:
    'click @ui.topicBtn': 'topicSelected'
    'click @ui.clearBtn': 'clearCalendar'
  clearCalendar: ->
    @calendar.setDataSource []
    @ui.topicBtn.show()
    
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
      for e in events
        convertEvent e
        @calendar.addEvent e

  onClickDay: (event) ->
    if event?.events.length
      console.log "EVENTS", event.events
      view = new ModalEventsView
        model: new Backbone.Model event
      MainChannel.request 'show-modal', view, true
    
  onRender: ->
    @calendar = new Calendar @ui.calendar.get(0),
      clickDay: @onClickDay
export default CalendarView
