import $ from 'jquery'
import { Radio } from 'backbone'
import { View as MnView } from 'backbone.marionette'
import tc from 'teacup'

import { Calendar } from '@fullcalendar/core'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import { DateTime } from 'luxon'

import '@fullcalendar/core/main.css'
import '@fullcalendar/daygrid/main.css'
import '@fullcalendar/timegrid/main.css'
import '@fullcalendar/list/main.css'

MainChannel = Radio.channel 'global'
MessageChannel = Radio.channel 'messages'
AppChannel = Radio.channel 'crown'

loadingCalendarEvents = (isTrue) ->
  console.log "loadingCalendarEvents", isTrue
  loading = $('loading')
  header = $('.fc-toolbar')
  if isTrue
    loading.show()
    header.hide()
  else
    loading.hide()
    header.show()

class CalendarView extends MnView
  template: tc.renderable (model) ->
    tc.div '#loading', style:'display: none;', ->
      tc.h2 ->
        tc.i '.fa.fa-spinner.fa-spin'
        tc.text 'Loading Events'
    tc.div '#maincalendar.col-sm-10.offset-sm-1'
  ui:
    calendar: '#maincalendar'
    loading: '#loading'
    header: '.fc-toolbar'
    daytop: '.fc-day-top'
  options:
    minicalendar: false
    layout: false
  onBeforeDestroy: ->
    cal = @fullCalendar.destroy()
    if __DEV__
      console.log 'calendar destroyed'
  onDomRefresh: ->
    calEventClick = (event) ->
      id = event.event.id
      url = makeOrderUrl id
      window.open url, '_blank'
    date = new Date()
    # console.log '@ui.calendar', @ui.calendar.get(0)
    @fullCalendar = new Calendar @ui.calendar.get(0),
      plugins: [
        dayGridPlugin
        timeGridPlugin
        ]
      defaultDate: date
      header:
        left: 'prevYear, nextYear'
        center: 'title'
        right: 'prev, next, dayGridMonth, timeGridWeek, timeGridDay'
      events: []
      eventClick: calEventClick
    @fullCalendar.render()
    
export default CalendarView
