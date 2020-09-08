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

currentItems = []


convertDate = (date) ->
  # A workaround for this issue
  # https://github.com/year-calendar/js-year-calendar/issues/15
  return new Date moment(date).utc().format('YYYY-MM-DDTHH:mm:ss')

convertEvent = (event) ->
  event.startDate = convertDate event.start
  event.endDate = event.startDate
  if event?.end
    event.endDate = convertDate event.end
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
    #tc.div '.maincalendar.col-sm-10.offset-sm-1'
    tc.div '.maincalendar'
  ui:
    clearBtn: '.btn-clear'
    calendar: '.maincalendar'
  events:
    'click @ui.clearBtn': 'clearCalendar'
  clearCalendar: ->
    currentItems = []
    @calendar.setDataSource currentItems
    
  onClickDay: (event) ->
    if event?.events.length
      view = new ModalEventsView
        model: new Backbone.Model event
      MainChannel.request 'show-modal', view, true

  onRender: ->
    @calendar = new Calendar @ui.calendar.get(0),
      clickDay: @onClickDay
    currentItems = AppChannel.request 'get-current-events'
    AppChannel.request 'set-current-events'
    currentItems.forEach (item) ->
      convertEvent item
    @calendar.setDataSource currentItems

    
    
export default CalendarView
