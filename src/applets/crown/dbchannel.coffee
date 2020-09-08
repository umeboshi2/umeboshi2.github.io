import Backbone from 'backbone'
import Marionette from 'backbone.marionette'

MainChannel = Backbone.Radio.channel 'global'
AppChannel = Backbone.Radio.channel 'crown'

selectedTopics = []

AppChannel.reply 'set-selected-topics', (collection) ->
  selectedTopics = collection

AppChannel.reply 'get-selected-topics', ->
  return selectedTopics

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
  
class CvLinks extends Backbone.Model
  url: '/assets/documents/cvlinks.json'

class EventIndex extends Backbone.Model
  url: '/assets/events/index.json'

indexModels =
  cvlinks: new CvLinks
  eventIndex: new EventIndex
  
AppChannel.reply 'get-index-model', (name) ->
  return indexModels[name]
  
