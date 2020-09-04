import Backbone from 'backbone'
import Marionette from 'backbone.marionette'
import tc from 'teacup'
import marked from 'marked'
import $ from 'jquery'
import moment from 'moment'
import _ from 'underscore'

MainChannel = Backbone.Radio.channel 'global'

getTopics = (string) ->
  if not string?
    return []
  topics = (item.trim() for item in string.split(','))
  return topics
   
filterEvents = (events, topics) ->
  filtered = []
  for e in events
    if e?.topics
      etopics = getTopics e.topics
      everyTopic = _.every topics, (topic) ->
        return _.contains etopics, topic
      if everyTopic
        filtered.push e
  return filtered
  
class LinkEntryView extends Marionette.View
  tagName: 'p'
  template: tc.renderable (event) ->
    tc.text moment.utc(event.start).format("MMMM D, YYYY")
    tc.text ", "
    if event?.pretext
      tc.text event.pretext
      tc.text " "
    if event?.journal
      tc.text event.journal
      tc.text ", "
    if event?.authors
      tc.text event.authors
      tc.text ", "
    tc.a href:event.link, event.title
    if event?.extra?.length
      for item in event.extra
        tc.text ", "
        tc.a href: item.link, item.name
      

class LinkView extends Marionette.View
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
      collection = new Backbone.Collection filtered
    else
      collection = new Backbone.Collection events
    view = new Marionette.CollectionView
      collection: collection
      viewComparator: 'start'
      childView: LinkEntryView
    @showChildView 'events', view
    
    
export default LinkView

