import _ from 'underscore'
import $ from 'jquery'
import Backbone from 'backbone'
import Marionette from 'backbone.marionette'
import yaml from 'js-yaml'

#$ = require 'jquery'
#_ = require 'underscore'
#Backbone = require 'backbone'
#Marionette = require 'backbone.marionette'

MainChannel = Backbone.Radio.channel 'global'
MessageChannel = Backbone.Radio.channel 'messages'

class StaticDocument extends Backbone.Model
  url: ->
    "/assets/documents/#{@id}.md"
  
  fetch: (options) ->
    options = _.extend options || {},
      dataType: 'text'
      data:
        nocache: Date.now()
    super options

  parse: (response) ->
    return content: response

class EventData extends Backbone.Model
  url: ->
    "/assets/events/#{@id}.yml"

  fetch: (options) ->
    options = _.extend options || {},
      dataType: 'text'
      data:
        nocache: Date.now()
    super options

  parse: (data) ->
    obj = yaml.safeLoad data
    return obj
    


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
  
