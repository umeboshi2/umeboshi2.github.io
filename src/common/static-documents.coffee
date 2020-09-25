import _ from 'underscore'
import { Radio } from 'backbone'
import yaml from 'js-yaml'

import NoCacheModel from './nocache-model'

MainChannel = Radio.channel 'global'
MessageChannel = Radio.channel 'messages'

class TextModel extends NoCacheModel
  fetch: (options) ->
    options = _.extend options || {},
      dataType: 'text'
    super options
  

class StaticDocument extends TextModel
  url: ->
    "/assets/documents/#{@id}.md"
  
  parse: (response) ->
    return content: response

class EventData extends TextModel
  url: ->
    "/assets/events/#{@id}.yml"

  parse: (data) ->
    obj = yaml.safeLoad data
    return obj
    
  getSubtopicEvents: (name) ->
    events = _.filter @get('events'), (event) ->
      return name in event.topics
    return events
    
MainChannel.reply 'main:app:get-events', (name) ->
  model = new EventData
    id: name
  return model
  
MainChannel.reply 'main:app:get-document', (name) ->
  model = new StaticDocument
    id: name
  return model

  
module.exports =
  StaticDocument: StaticDocument
  
