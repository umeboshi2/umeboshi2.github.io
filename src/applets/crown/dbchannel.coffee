import Backbone from 'backbone'
import Marionette from 'backbone.marionette'

import indexModels from 'common/index-models'

MainChannel = Backbone.Radio.channel 'global'
AppChannel = Backbone.Radio.channel 'crown'

selectedTopics = new Backbone.Collection []
selectedSubtopics = new Backbone.Collection []

AppChannel.reply 'set-selected-topics', (collection) ->
  selectedTopics = collection
  return
  
AppChannel.reply 'set-selected-subtopics', (collection) ->
  selectedSubtopics = collection
  return
  
AppChannel.reply 'get-selected-topics', ->
  return selectedTopics

AppChannel.reply 'get-selected-subtopics', ->
  return selectedSubtopics

initSelectedSubtopics = (model) ->
  stMap = model.get('subtopics')
  for st of stMap
    selectedSubtopics.add
      name: st
      selected: false
      topics: stMap[st]
  return

AppChannel.reply 'init-selected-subtopics', (model) ->
  return initSelectedSubtopics model

initSelectedTopics = (model) ->
  topics = []
  for name of model.get('topics')
    selectedTopics.add
      name: name
      selected: false
  return
  
AppChannel.reply 'init-selected-topics', (model) ->
  return initSelectedTopics model

fetchEventModels = (indexModel) ->
  selected = selectedTopics.filter selected:true
  topicMap = indexModel.get('topics')
  promises = []
  selected.forEach (model) ->
    topic = model.get('name')
    if not model.get('eventsModel')
      resourceName = topicMap[topic].filename
      resource = MainChannel.request 'main:app:get-events', resourceName
      promises.push resource.fetch()
      model.set "eventsModel", resource
  return promises

getSubtopicEvents = (model) ->
  name = model.get 'name'
  topics = model.get 'topics'
  topicEvents = {}
  topics.forEach (topic) ->
    tmodel = selectedTopics.findWhere name:topic
    eventsModel = tmodel.get 'eventsModel'
    topicEvents[topic] = eventsModel.getSubtopicEvents name
  return topicEvents
  
AppChannel.reply 'get-subtopic-events', (model) ->
  return getSubtopicEvents model
  
AppChannel.reply 'determine-main-topics', (indexModel) ->
  allTopics = new Backbone.Collection []
  subtopics = selectedSubtopics.filter selected:true
  subtopics.forEach (item) ->
    topics = item.get 'topics'
    topics.forEach (topic) ->
      allTopics.add
        id: topic
        name: topic
  if not selectedTopics.length
    initSelectedTopics indexModel
  topicArray = allTopics.pluck 'name'
  topicArray.forEach (topic) ->
    model = selectedTopics.findWhere name:topic
    model.set 'selected', true
  promises = fetchEventModels indexModel
  return
    promises: promises
    allTopics: allTopics

  
  

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
  console.log "fetch-event-models", indexModel
  return fetchEventModels indexModel
  


AppChannel.reply 'get-index-model', (name) ->
  return indexModels[name]
  
