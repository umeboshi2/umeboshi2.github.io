import $ from 'jquery'
import { Model, Collection, Radio } from 'backbone'
import { View as MnView, CollectionView } from 'backbone.marionette'
import tc from 'teacup'
import moment from 'moment'

import Calendar from 'js-year-calendar'
import 'js-year-calendar/dist/js-year-calendar.css'

import ModalEventsView from 'common/modal-events-view'

MainChannel = Radio.channel 'global'
AppChannel = Radio.channel 'crown'

eventManager = AppChannel.request 'get-event-manager', 'topics'

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

class BaseCalendarView extends MnView
  template: ->
  onClickDay: (event) ->
    if event?.events.length
      view = new ModalEventsView
        model: new Model event
      MainChannel.request 'show-modal', view, true
  onRender: ->
    @calendar = new Calendar @$el.get(0),
      clickDay: @onClickDay
    @resetTopics()
  resetTopics: ->
    eventManager.setCurrentEvents()
    currentEvents = eventManager.currentEvents
    currentEvents.forEach (item) ->
      convertEvent item
    @calendar.setDataSource currentEvents

export default BaseCalendarView
