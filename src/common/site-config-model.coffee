import _ from 'underscore'
import { Model, Collection, Radio } from 'backbone'
import { LoveStore } from 'backbone.lovefield'
import indexModels from 'common/index-models'

MainChannel = Radio.channel 'global'

dbConn = MainChannel.request 'main:app:dbConn', 'common'

cfgObjectStore = new LoveStore dbConn, 'ConfigObject'
eventIndex = indexModels.eventIndex

cfgFields = ['id', 'name', 'content']

export class ConfigObjectModel extends Model
  loveStore: cfgObjectStore
  toJSON: ->
    data = {}
    cfgFields.forEach (field) =>
      data[field] = @get field
    return data

export class ConfigObjectCollection extends Collection
  loveStore: cfgObjectStore
  model: ConfigObjectModel


export initTopicColors = ->
  console.log "eventIndex", eventIndex
  model = new ConfigObjectModel
    #id: 'topic-colors'
    name: 'topic-colors'
    content: {}
  indexTopics = eventIndex.get 'topics'
  topics = model.get 'content'
  for key of indexTopics
    item =
      id: key
      name: key
      value: 'SkyBlue'
    topics[key] = item
  model.set 'content', topics
  #model.save().then ->
  #  return model.fetch()
  return model.save()
     
    

