import $ from 'jquery'
import Backbone from 'backbone'
import Marionette from 'backbone.marionette'
import tc from 'teacup'

import { Calendar } from '@fullcalendar/core'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import { DateTime } from 'luxon'

import '@fullcalendar/core/main.css'
import '@fullcalendar/daygrid/main.css'
import '@fullcalendar/timegrid/main.css'
import '@fullcalendar/list/main.css'

import navigateToUrl from 'tbirds/util/navigate-to-url'

MainChannel = Backbone.Radio.channel 'global'
MessageChannel = Backbone.Radio.channel 'messages'
AppChannel = Backbone.Radio.channel 'crown'

sampleEvents = [
    {
      id: 1
      title: 'Executive Orders 2020-1'
      start:'2020-03-18 00:00'
      end: '2020-03-31 00:00'
    },{
      id: 2
      title: 'Executive Orde20 2020-2'
      start:'2020-03-28 00:00'
      end: '2020-03-31 00:00'
    },{
      id: 3
      title: 'Executive Orders 2020-3'
      start:'2020-03-25 00:00'
      end: '2020-04-30 00:00'
    },{
      id: 4
      title: 'Executive Orders 2020-4'
      start:'2020-04-10 17:00'
      end: '2020-04-30 00:00'
    },{
      id: 5
      title: 'Executive Orders 2020-5'
      start:'2020-05-01 17:00'
      end: '2020-05-31 08:00'
    },{
      id: 6
      title: 'Executive Orders 2020-6'
      start:'2020-05-11 08:00'
      end: '2020-05-26 08:00'
    },{
      id: 7
      title: 'Executive Orders 2020-7'
      start:'2020-05-14 08:00'
      end: '2020-05-26 08:00'
    },{
      id: 8
      title: 'Executive Orders 2020-8'
      start:'2020-05-18 08:00'
      end: '2020-05-31 08:00'
    },{
      id: 9
      title: 'Executive Orders 2020-9'
      start:'2020-05-26 08:00'
      end: '2020-06-15 08:00'
    },{
      id: 10
      title: 'Executive Orders 2020-10'
      start:'2020-06-15 08:00'
      end: '2020-06-29 08:00'
    },{
      id: 11
      title: 'Executive Orders 2020-11'
      start:'2020-06-29 08:00'
      end: '2020-07-06 08:00'
    },{
      id: 12
      title: 'Executive Orders 2020-12'
      start:'2020-07-06 08:00'
      end: '2020-07-20 08:00'
    },{
      id: 13
      title: 'Executive Orders 2020-13'
      start:'2020-07-20 08:00'
      end: '2020-08-03 08:00'
    },{
      id: 14
      title: 'Executive Orders 2020-14'
      start:'2020-07-31 08:00'
      end: '2020-08-17 08:00'
    },{
      id: 15
      title: 'Executive Orders 2020-15'
      start:'2020-08-03 08:00'
      end: '2020-08-17 08:00'
    },{
      id: 16
      title: 'Executive Orders 2020-16'
      start:'2020-08-17 08:00'
      end: '2020-08-31 08:00'
    }
  ]

makeOrderFilename = (id) ->
  return "exec_order_2020-#{id}.pdf"
  
makeOrderUrl = (id) ->
  base = "http://www.hattiesburgms.com/wp-content/uploads/"
  return base + makeOrderFilename id

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


calendarTemplate = tc.renderable () ->
  tc.div '.listview-header', 'Punching the Clock'
  tc.div '#loading', style:'display: none;', ->
    tc.h2 ->
      tc.i '.fa.fa-spinner.fa-spin'
      tc.text 'Loading Work Sessions'
  tc.div '#maincalendar'

    
class CalendarView extends Marionette.View
  template: tc.renderable (model) ->
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
      events: sampleEvents
      eventClick: calEventClick
    @fullCalendar.render()
    
export default CalendarView
