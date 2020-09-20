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

AppChannel = Backbone.Radio.channel 'pmc'


parseRecord = (record) ->
  console.log "RECORD", record
  record = record['OAI-PMH'].GetRecord.record.metadata.article.front
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
  content.abstract = meta.abstract?.p
  return content

class PMCFrontMatter extends Marionette.View
  template: tc.renderable (model) ->
    console.log "MODEL", model
    content = parseRecord model
    for key of content
      tc.dt key
      tc.dd content[key]
      
  

class PMCEntry extends Marionette.View
  template: tc.renderable (model) ->
    tc.button '.show-info-btn.btn.btn-outline-warning.btn-sm', 'Info'
    tc.text model.id
    tc.div '.content'
  ui:
    showInfoBtn: '.show-info-btn'
    content: '.content'
  regions:
    content: '@ui.content'
  onRender: ->
    if @model.get("OAI-PMH")
      view = new PMCFrontMatter
        model: @model
      @showChildView 'content', view
  events:
    'click @ui.showInfoBtn': 'showInfoBtnClicked'
  showInfoBtnClicked: ->
    if @getRegion('content').hasView()
      console.log "view in region"
    else
      response = @model.fetch()
      response.done =>
        id = @model.get('id')
        content = JSON.stringify @model.toJSON()
        lpromise = AppChannel.request 'save-fm-content', id, content
        console.log "lpromise", lpromise
        lpromise.then =>
          collection = AppChannel.request 'get-fm-collection'
          cresponse = collection.fetch()
          cresponse.done =>
            lmodel = collection.get id  
            view = new PMCFrontMatter
              model: new Backbone.Model lmodel.getContent()
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
    'click @ui.showBtn': 'showBtnClicked'
  showBtnClicked: ->
    if @getRegion('papers').hasView()
      console.log "view in region"
    else
      pmcModels = new Backbone.Collection []
      fmCollection = AppChannel.request 'get-fm-collection'
      response = fmCollection.fetch()
      response.done =>
        @model.get('pmc_ids').forEach (pmcid) ->
          lmodel = fmCollection.get pmcid
          if lmodel?
            console.log "lmodel", lmodel
            model = new Backbone.Model lmodel.getContent()
          else
            model = AppChannel.request 'make-remote-model', pmcid
          console.log "PMCMODEL #{pmcid}", model
          pmcModels.add model
        console.log "fmCollection", fmCollection
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
