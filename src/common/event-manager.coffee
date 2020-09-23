import { Collection, Model } from 'backbone'
import { MnObject } from 'backbone.marionette'

import indexModels from './index-models'

MainChannel = Backbone.Radio.channel 'global'

eventIndex = indexModels.eventIndex

eventDataModels = new Collection []

class EventManager extends MnObject
  initialize: ->
    @collections =
      topics: new Collection []
      subtopics: new Collection []
    @currentEvents = []
    return
  setCollection: (name, collection) ->
    @collections[name].set collection
    return
  initTopics: ->
    for name of eventIndex.get('topics')
      @collections.topics.add
        name: name
        selected: false
    return
  initSubtopics: ->
    stMap = eventIndex.get('subtopics')
    for st of stMap
      @collections.subtopics.add
        name: st
        selected: false
        topics: stMap[st]
    return
  fetchEventModels: ->
    selected = @collections.topics.filter selected:true
    topicMap = eventIndex.get('topics')
    promises = []
    selected.forEach (model) ->
      topic = model.get('name')
      model = eventDataModels.get topic
      if not model?
        resourceName = topicMap[topic].filename
        resource = MainChannel.request 'main:app:get-events', resourceName
        promises.push resource.fetch()
        eventDataModels.add
          id: topic
          name: topic
          content: resource
    return promises
  getSubtopicEvents: (model) ->
    name = model.get 'name'
    topics = model.get 'topics'
    topicEvents = {}
    topics.forEach (topic) ->
      model = eventDataModels.get topic
      eventsModel = model.get 'content'
      topicEvents[topic] = eventsModel.getSubtopicEvents name
    return topicEvents
  determineMainTopics: ->
    allTopics = new Collection []
    subtopics = @collections.subtopics.filter selected:true
    subtopics.forEach (item) ->
      topics = item.get 'topics'
      topics.forEach (topic) ->
        allTopics.add
          id: topic
          name: topic
    if not @collections.topics.length
      @initTopics eventIndex
    topicArray = allTopics.pluck 'name'
    collection = @collections.topics
    topicArray.forEach (name) ->
      model = collection.findWhere name:name
      model.set 'selected', true
    promises = @fetchEventModels()
    return
      promises: promises
      allTopics: allTopics
  setCurrentEvents: ->
    self_events = @currentEvents
    self_events.length = 0
    collection = @collections.topics
    selected = collection.filter selected:true
    selected.forEach (item) =>
      eventModel = @getEventData item.get('name')
      events = eventModel.get 'events'
      events.forEach (event) ->
        self_events.push event
    return
  clearCurrentEvents: ->
    @currentEvents.length = 0
    return
  getEventData: (name) ->
    m = eventDataModels.get name
    return m.get 'content'
  getSelectedTopics: ->
    return new Collection @collections.topics.filter selected:true
  getSelectedSubtopics: ->
    return new Collection @collections.subtopics.filter selected:true
    
export default EventManager
