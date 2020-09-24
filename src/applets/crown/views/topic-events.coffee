import Backbone from 'backbone'
import Marionette from 'backbone.marionette'
import tc from 'teacup'
import $ from 'jquery'

import LinkEntryView from 'common/link-entry-view'

MainChannel = Backbone.Radio.channel 'global'
MessageChannel = Backbone.Radio.channel 'messages'
AppChannel = Backbone.Radio.channel 'crown'

eventManager = AppChannel.request 'get-event-manager', 'topics'


class LinkItemView extends LinkEntryView
  tagName: 'li'
  className: 'list-group-item'

class TopicEntry extends Marionette.View
  template: tc.renderable (model) ->
    tc.text model.name
    tc.div '.events-container'
  ui:
    eventsContainer: '.events-container'
  regions:
    eventsContainer: '@ui.eventsContainer'
  onRender: ->
    topicEvents = eventManager.getSubtopicEvents(@model)
    console.log "topicEvents", topicEvents
    allEvents = new Backbone.Collection []
    for t of topicEvents
      for e in topicEvents[t]
        allEvents.add e
    view = new Marionette.CollectionView
      childView: LinkItemView
      collection: allEvents
      viewComparator: 'start'
    @showChildView 'eventsContainer', view
    
class MainView extends Marionette.View
  initialize: ->
    topics = eventManager.collections.topics
    if not topics.length
      eventManager.initTopics()
    
  template: tc.renderable (model) ->
    tc.div '.card', ->
      tc.span '.card-title', ->
        tc.text "Subtopic Events"
      tc.div '.card-body'
  ui:
    cardBody: '.card-body'
  regions:
    cardBody: '@ui.cardBody'
  onRender: ->
    topics = eventManager.collections.topics
    selected = new Backbone.Collection topics.filter selected:true
    view = new Marionette.CollectionView
      collection: selected
      childView: TopicEntry
      viewComparator: 'name'
    @showChildView 'cardBody', view
export default MainView
