import _ from 'underscore'
import Backbone from 'backbone'
import Marionette from 'backbone.marionette'
import qs from 'qs'
import X2JS from 'x2js'
import { LoveStore } from 'backbone.lovefield'

import indexModels from 'common/index-models'

MainChannel = Backbone.Radio.channel 'global'
AppChannel = Backbone.Radio.channel 'pmc'

dbConn = MainChannel.request 'main:app:dbConn', 'pmc'

PMCFrontMatterStore = new LoveStore dbConn, 'FrontMatter'

class FrontMatterModel extends Backbone.Model
  loveStore: PMCFrontMatterStore
  toJSON: ->
    data = {}
    data.id = @get('id')
    data.content = @get('content')
    return data
  getContent: ->
    return JSON.parse @get('content')

class FrontMatterCollection extends Backbone.Collection
  loveStore: PMCFrontMatterStore
  model: FrontMatterModel

fmCollection = new FrontMatterCollection

AppChannel.reply 'get-fm-collection', ->
  return fmCollection

oaiIdentifier = (id) ->
  return "oai:pubmedcentral.nih.gov:#{id}"

class RemoteModel extends Backbone.Model
  url: ->
    data =
      verb: 'GetRecord'
      identifier: oaiIdentifier @id
      metadataPrefix: 'pmc_fm'
    query = qs.stringify data
    url = "https://www.ncbi.nlm.nih.gov/pmc/oai/oai.cgi?#{query}"
    prefix = "https://cors-anywhere.herokuapp.com/"
    return prefix + url
  parse: (data) ->
    x2js = new X2JS()
    parsed = x2js.xml2js data
    #r = parsed['OAI-PMH'].GetRecord.record.metadata.article.front
    return parsed
    
  fetch: (options) ->
    options = _.extend options || {},
      dataType: 'text'
    super options
  getRecord: ->
    data = @get('OAI-PMH')
    return data.GetRecord.record

AppChannel.reply 'make-remote-model', (id) ->
  return new RemoteModel id:id

AppChannel.reply 'save-fm-content', (id, content) ->
  model = new FrontMatterModel
    id: id
    content: content
  renewed = true
  model.isNew = ->
    if renewed
      renewed = false
      return true
    return false
  fmCollection.add model
  p = model.save()
  return p
    

