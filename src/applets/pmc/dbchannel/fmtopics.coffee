import _ from 'underscore'
import Backbone from 'backbone'
import Marionette from 'backbone.marionette'
import qs from 'qs'
import X2JS from 'x2js'
import { LoveStore } from 'backbone.lovefield'
import PageableCollection from 'backbone.paginator'

import indexModels from 'common/index-models'

eventIndex = indexModels.eventIndex

MainChannel = Backbone.Radio.channel 'global'
AppChannel = Backbone.Radio.channel 'pmc'

dbConn = MainChannel.request 'main:app:dbConn', 'pmc'

TopicsStore = new LoveStore dbConn, 'Topics'
FMTopicsStore = new LoveStore dbConn, 'FMTopics'

TopicFields = ['id', 'name']
class TopicModel extends Backbone.Model
  loveStore: TopicsStore
  toJSON: ->
    data = {}
    TopicFields.forEach (field) =>
      data[field] = @get field
    return data

class TopicCollection extends Backbone.Collection
  loveStore: TopicsStore
  model: TopicModel

class TopicPageable extends PageableCollection
  loveStore: TopicsStore
  model: TopicModel
  mode: 'client'

topicCollection = new TopicCollection
AppChannel.reply 'get-topic-collection', ->
  return topicCollection
AppChannel.reply 'make-topic-pageable', ->
  return new TopicPageable

topicResponse = topicCollection.fetch()
topicResponse.done ->
  topics = eventIndex.get 'topics'
  tlist = _.keys topics
  tlist.forEach (topic) ->
    tmodel = topicCollection.find name:topic
    if not tmodel?
      console.log "get model for", topic
      model = topicCollection.add name:topic
      model.save()
      
