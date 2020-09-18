import Backbone from 'backbone'
import Marionette from 'backbone.marionette'
import tc from 'teacup'
import $ from 'jquery'

import LinkEntryView from 'common/link-entry-view'

MainChannel = Backbone.Radio.channel 'global'
MessageChannel = Backbone.Radio.channel 'messages'
AppChannel = Backbone.Radio.channel 'crown'


class LinkItemView extends LinkEntryView
  tagName: 'li'
  className: 'list-group-item'

class SubtopicEntry extends Marionette.View
  template: tc.renderable (model) ->
    tc.text model.name
    tc.div '.events-container'
  ui:
    eventsContainer: '.events-container'
  regions:
    eventsContainer: '@ui.eventsContainer'
  onRender: ->
    topicEvents = AppChannel.request 'get-subtopic-events', @model
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
    subtopics = AppChannel.request 'get-selected-subtopics'
    if not subtopics.length
      AppChannel.request 'init-selected-subtopics', @model
    
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
    subtopics = AppChannel.request 'get-selected-subtopics'
    selected = new Backbone.Collection subtopics.filter selected:true
    view = new Marionette.CollectionView
      collection: selected
      childView: SubtopicEntry
      viewComparator: 'name'
    @showChildView 'cardBody', view
export default MainView
