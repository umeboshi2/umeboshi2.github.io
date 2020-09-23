import Backbone from 'backbone'
import Marionette from 'backbone.marionette'
import tc from 'teacup'
import $ from 'jquery'
import _ from 'underscore'

import { FrontMatterCollection } from '../dbchannel/front-matter'
import PaginateBar from 'tbirds/views/paginate-bar'
import indexModels from 'common/index-models'
import ButtonInput from 'common/button-input'
import PMCFrontMatter from './pmc-front-matter'

AppChannel = Backbone.Radio.channel 'pmc'

class SimpleEntry extends Marionette.View
  tagName: 'li'
  className: 'list-group-item'
  template: tc.renderable (model) ->
    tc.div '.row', ->
      tc.span '.mr-auto', model.name
      tc.button '.ml-auto.del-btn.btn.btn-sm.btn-outline-danger', ->
        tc.text 'Delete'
  ui:
    delBtn: '.del-btn'
  events:
    'click @ui.delBtn': 'delBtnClicked'
  delBtnClicked: ->
    console.log "delBtnClicked"
    

class TopicCollectionView extends Marionette.CollectionView
  tagName: 'ul'
  className: 'list-group'
  childView: SimpleEntry
  viewComparator: 'name'
  
    
class MainView extends Marionette.View
  template: tc.renderable (model) ->
    console.log "model", model
    tc.h3 "Manage Topics"
    tc.button '.update-btn.btn.btn-outline-warning', 'Update static topics'
    tc.div '.add-topic-input'
    tc.div '.paginate-bar'
    tc.div '.content'
  ui:
    addTopic: '.add-topic-input'
    content: '.content'
    paginateBar: '.paginate-bar'
    updateBtn: '.update-btn'
  regions:
    addTopic: '@ui.addTopic'
    content: '@ui.content'
    paginateBar: '@ui.paginateBar'
  events:
    'click @ui.updateBtn': 'updateBtnClicked'
  childViewEvents:
    'input:submit': 'topicSubmitted'
  onRender: ->
    collection = AppChannel.request 'get-topic-collection'
    response = collection.fetch()
    response.done =>
      view = new ButtonInput
        buttonText: 'Add'
        placeholder: "Add a topic...."
      @showChildView 'addTopic', view
  showTopicsView: ->
    collection = AppChannel.request 'get-topic-collection'
    view = new TopicCollectionView
      collection: collection
    @showChildView 'content', view
    
  topicSubmitted: (options) ->
    collection = AppChannel.request 'get-topic-collection'
    @ui.addTopic.hide()
    data = name:options.value
    model = collection.add data
    response = model.save()
    response.done =>
      @ui.addTopic.show()
  updateBtnClicked: ->
    console.log "update clicked"
    topics = AppChannel.request 'get-topic-collection'
    fmtopics = AppChannel.request 'get-fmtopic-collection'
    papers = new FrontMatterCollection
    topics.fetch()
    .then ->
      console.log "topics fetched"
      fmtopics.fetch()
    .then ->
      console.log "fmtopics fetched"
      papers.fetch()
    .then ->
      console.log "papers fetched"
      papers.each (paper) ->
        console.log "paper", paper.id
        pmcid = paper.id
        pmtopics = fmtopics.where pmcid:pmcid
        console.log "pmtopics", pmtopics
        
export default MainView
