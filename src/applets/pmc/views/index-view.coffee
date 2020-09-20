import Backbone from 'backbone'
import Marionette from 'backbone.marionette'
import tc from 'teacup'
import $ from 'jquery'
import _ from 'underscore'
import qs from 'qs'
import X2JS from 'x2js'
import moment from "moment"

import indexModels from 'common/index-models'
import HasJsonView from 'common/has-jsonview'
import JView from 'json-view'

oai_identifier = (id) ->
  return "oai:pubmedcentral.nih.gov:#{id}"

parseRecord = (record) ->
  content = {}
  jmeta = record['journal-meta']
  tprop = 'journal-title'
  gprop = 'journal-title-group'
  journal = "Not Found"
  if gprop of jmeta
    journal = jmeta[gprop][tprop]
  else if tprop of jmeta
    journal = jmeta[tprop]
  content.journal = journal
  meta = record['article-meta']
  tnode = meta['title-group']['article-title']
  title = "Not Found"
  if tnode?.__text
    title = tnode.__text
  else
    title = tnode
  content.title = title
  content.abstract = meta.abstract.p
  return content

class PMCModel extends Backbone.Model
  url: ->
    data =
      verb: 'GetRecord'
      identifier: oai_identifier @id
      metadataPrefix: 'pmc_fm'
    query = qs.stringify data
    url = "https://www.ncbi.nlm.nih.gov/pmc/oai/oai.cgi?#{query}"
    console.log "URL"
    prefix = "https://cors-anywhere.herokuapp.com/"
    return prefix + url
  parse: (data) ->
    x2js = new X2JS()
    parsed = x2js.xml2js data
    r = parsed['OAI-PMH'].GetRecord.record.metadata.article.front
    return r
  fetch: (options) ->
    options = _.extend options || {},
      dataType: 'text'
    super options

class PMCFrontMatter extends Marionette.View
  template: tc.renderable (model) ->
    console.log "MODEL", model
    content = parseRecord model
    for key of content
      tc.dt key
      tc.dd content[key]
      
  

class PMCEntry extends Marionette.View
  template: tc.renderable (model) ->
    tc.button '.show-btn.btn.btn-outline-warning.btn-sm', 'Show Papers'
    tc.text model.name
    tc.div '.content'
  ui:
    showBtn: '.show-btn'
    content: '.content'
  regions:
    content: '@ui.content'
  events:
    'click @ui.showBtn': 'onClick'
  onClick: ->
    if @getRegion('content').hasView()
      console.log "view in region"
    else
      response = @model.fetch()
      response.done =>
        view = new PMCFrontMatter
          model: @model
        @showChildView 'content', view

class TopicView extends Marionette.View
  tagName: 'li'
  className: 'list-group-item'
  template: tc.renderable (model) ->
    tc.button '.show-btn.btn.btn-outline-warning.btn-sm', 'Show Papers'
    tc.text "    #{model.name}"
    tc.div '.papers'
  ui:
    showBtn: '.show-btn'
    papers: '.papers'
  regions:
    papers: '@ui.papers'
  events:
    'click @ui.showBtn': 'onClick'
  onClick: ->
    if @getRegion('papers').hasView()
      console.log "view in region"
    else
      pmcModels = new Backbone.Collection []
      @model.get('pmc_ids').forEach (pmcid) ->
        pmcModels.add new PMCModel
          id: pmcid
          name: pmcid
      view = new Marionette.CollectionView
        collection: pmcModels
        childView: PMCEntry
      @showChildView 'papers', view
    
    
class MainView extends Marionette.View
  initialize: ->
    @collection = new Backbone.Collection
    topics = @model.get 'topics'
    for topic of topics
      if topics[topic].pmc_ids.length
        @collection.add topics[topic]
        
  template: tc.renderable (model) ->
    tc.div '.jsonview'
    tc.ul '.topics.list-group'

  templateOrig: tc.renderable (model) ->
    tc.div '.jsonview'
    tc.div '.topics'
    for t of model.topics
      data = model.topics[t]
      if data.pmc_ids.length
        tc.div '.list-group', data:name:data.name, ->
          tc.text data.name
          for id in data.pmc_ids
            tc.div '.list-group-item', data:id:id, id
            
  ui:
    jsonView: '.jsonview'
    topics: '.topics'
  regions:
    topics: '@ui.topics'
  onRender: ->
    view = new Marionette.CollectionView
      collection: @collection
      childView: TopicView
    @showChildView 'topics', view
  itemClicked: (event) ->
    e = $(event.target)
    id = e.attr('data-id')
    model = new PMCModel
      id: id
    response = model.fetch()
    response.done =>
      obj = model.toJSON()
      @jsonView = new JView obj
      @ui.jsonView.prepend @jsonView.dom

export default MainView
