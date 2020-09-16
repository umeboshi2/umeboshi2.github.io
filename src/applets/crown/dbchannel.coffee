import Backbone from 'backbone'
import Marionette from 'backbone.marionette'

MainChannel = Backbone.Radio.channel 'global'
AppChannel = Backbone.Radio.channel 'crown'

selectedTopics = new Backbone.Collection []

AppChannel.reply 'set-selected-topics', (collection) ->
  selectedTopics = collection

AppChannel.reply 'get-selected-topics', ->
  return selectedTopics

AppChannel.reply 'init-selected-topics', (model) ->
  topics = []
  for topic of model.get('topics')
    selectedTopics.add
      topic: topic
      selected: false
  
currentItems = []

AppChannel.reply 'set-current-events', ->
  currentItems.length = 0
  collection = AppChannel.request 'get-selected-topics'
  selected = collection.filter selected:true
  selected.forEach (item) ->
    events = item.get('eventsModel').get 'events'
    events.forEach (event) ->
      currentItems.push event

AppChannel.reply 'get-current-events', ->
  return currentItems
  
AppChannel.reply 'clear-current-events', ->
  currentItems.length = 0

AppChannel.reply 'fetch-event-models', (indexModel) ->
  selected = selectedTopics.filter selected?true
  topicMap = indexModel.get('topics')
  promises = []
  selected.forEach (model) ->
    topic = model.get('topic')
    if not model.get('eventsModel')
      resourceName = topicMap[topic].filename
      resource = MainChannel.request 'main:app:get-events', resourceName
      promises.push resource.fetch()
      model.set "eventsModel", resource
  return promises


class CvLinks extends Backbone.Model
  url: '/assets/documents/cvlinks.json'

class EventIndex extends Backbone.Model
  url: '/assets/events/index.json'

indexModels =
  cvlinks: new CvLinks
  eventIndex: new EventIndex
  
AppChannel.reply 'get-index-model', (name) ->
  return indexModels[name]
  
