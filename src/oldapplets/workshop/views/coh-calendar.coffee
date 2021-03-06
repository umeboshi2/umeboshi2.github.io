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

import cityOrders from '../events/coh-orders'

MainChannel = Backbone.Radio.channel 'global'
MessageChannel = Backbone.Radio.channel 'messages'
AppChannel = Backbone.Radio.channel 'crown'

makeOrderFilename = (id) ->
  return "exec_order_2020-#{id}.pdf"
  
makeOrderUrl = (id) ->
  base = "http://www.hattiesburgms.com/wp-content/uploads/"
  return base + makeOrderFilename id

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
        left: 'prev, next'
        center: 'title'
        right: 'dayGridMonth, timeGridWeek, timeGridDay'
      events: cityOrders
      eventClick: calEventClick
    @fullCalendar.render()
    
export default CalendarView
