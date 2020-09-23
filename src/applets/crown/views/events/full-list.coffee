import $ from 'jquery'
import Backbone from 'backbone'
import Marionette from 'backbone.marionette'
import tc from 'teacup'
import moment from 'moment'

import LinkEntryView from 'common/link-entry-view'

MainChannel = Backbone.Radio.channel 'global'
MessageChannel = Backbone.Radio.channel 'messages'
AppChannel = Backbone.Radio.channel 'crown'

eventManager = AppChannel.request 'get-event-manager', 'events'

class LinkItemView extends LinkEntryView
  className: 'list-group-item'

class ListGroupView extends Marionette.CollectionView
  className: 'list-group'
  
class TopicView extends Marionette.View
  className: 'list-group-item'
  template: tc.renderable (model) ->
    tc.h4 model.name
    tc.div '.events-container'
  ui:
    eventsList: '.events-container'
  regions:
    eventsList: '@ui.eventsList'
  onRender: ->
    name = @model.get 'name'
    events = eventManager.getEventData(name).get('events')
    view = new ListGroupView
      childView: LinkItemView
      collection: new Backbone.Collection events
      viewComparator:  'start'
    @showChildView 'eventsList', view
    
class MainView extends Marionette.View
  template: tc.renderable (model) ->
    tc.div '.events-container'
  ui:
    clearBtn: '.btn-clear'
    eventsList: '.events-container'
    calendar: '.maincalendar'
  regions:
    eventsList: '@ui.eventsList'
  events:
    'click @ui.clearBtn': 'clearCalendar'
  clearCalendar: ->
    currentItems = []
  onRender: ->
    selectedTopics = eventManager.getSelectedTopics()
    view = new ListGroupView
      collection: selectedTopics
      childView: TopicView
      viewComparator: 'topic'
    @showChildView 'eventsList', view
  resetTopics: ->
    console.log "reset topics"
    @render()
  
export default MainView
