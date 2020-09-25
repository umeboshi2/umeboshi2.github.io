import { Collection } from 'backbone'
import { View as MnView, CollectionView } from 'backbone.marionette'
import tc from 'teacup'
import _ from 'underscore'

import LinkEntryView from 'common/link-entry-view'

getTopics = (string) ->
  if not string?
    return []
  topics = (item.trim() for item in string.split(','))
  return topics
   
filterEvents = (events, topics) ->
  filtered = []
  for e in events
    if e?.topics
      if e.topics.typeOf is "string"
        console.warn "Use topic list instead of commas."
        etopics = getTopics e.topics
      else
        etopics = e.topics
      everyTopic = _.every topics, (topic) ->
        return _.contains etopics, topic
      if everyTopic
        filtered.push e
  return filtered
  
class LinkView extends MnView
  templateContext: ->
    viewTitle: @getOption 'title'
    viewTopics: @getOption 'topics'
  template: tc.renderable (model) ->
    tc.div ->
      tc.h3 '.view-header', model.viewTitle
      tc.div '.events-container'
  ui:
    viewHeader: '.view-header'
    events: '.events-container'
  regions:
    events: '@ui.events'
  onRender: ->
    events = @model.get 'events'
    topics = getTopics @getOption 'topics'
    if topics.length
      filtered = filterEvents events, topics
      collection = new Collection filtered
    else
      collection = new Collection events
    view = new CollectionView
      collection: collection
      viewComparator: 'start'
      childView: LinkEntryView
    @showChildView 'events', view
    
    
export default LinkView

