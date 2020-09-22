import Backbone from 'backbone'
import Marionette from 'backbone.marionette'
import tc from 'teacup'
import $ from 'jquery'
import _ from 'underscore'

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
    
    
    
class MainView extends Marionette.View
  template: tc.renderable (model) ->
    tc.h3 "Manage Topics"
    tc.div '.add-topic-input'
    tc.div '.paginate-bar'
    tc.div '.content'
  ui:
    addTopic: '.add-topic-input'
    content: '.content'
    paginateBar: '.paginate-bar'
  regions:
    addTopic: '@ui.addTopic'
    content: '@ui.content'
    paginateBar: '@ui.paginateBar'
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
      view = new Marionette.CollectionView
        tagName: 'ul'
        className: 'list-group'
        collection: collection
        childView: SimpleEntry
        viewComparator: 'name'
      @showChildView 'content', view
  topicSubmitted: (options) ->
    collection = AppChannel.request 'get-topic-collection'
    @ui.addTopic.hide()
    data = name:options.value
    model = collection.add data
    response = model.save()
    response.done =>
      @ui.addTopic.show()
    
export default MainView
