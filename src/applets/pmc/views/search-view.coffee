import Backbone from 'backbone'
import Marionette from 'backbone.marionette'
import tc from 'teacup'
import $ from 'jquery'
import _ from 'underscore'

import indexModels from 'common/index-models'
import SearchInput from 'common/search-input'
import PMCFrontMatter from './pmc-front-matter'

AppChannel = Backbone.Radio.channel 'pmc'

class SimpleEntry extends Marionette.View
  template: tc.renderable (model) ->
    tc.text "PMCID: PMC#{model.id} "
    if not model?.content
      btnClass = '.btn.btn-outline-warning.btn-sm'
      tc.button ".dl-btn#{btnClass}.fa.fa-download", ->
        ' Download Front Matter'
    tc.div '.content'
  ui:
    content: '.content'
    button: '.dl-btn'
  regions:
    content: '@ui.content'
    searchInput: '@ui.searchInput'
  events:
    'click @ui.button': 'buttonClicked'
  onRender: ->
    if @model.hasOAIcontent()
      view = new PMCFrontMatter
        model: @model
      @showChildView 'content', view
  buttonClicked: ->
    thisView = @
    remoteModel = @model
    if not remoteModel.get('content')
      response = remoteModel.fetch()
      response.done ->
        id = Number remoteModel.get('id')
        content = remoteModel.get('content')
        lpromise = AppChannel.request 'save-fm-content', id, content
        lpromise.then ->
          collection = AppChannel.request 'get-fm-collection'
          cresponse = collection.fetch()
          cresponse.done ->
            lmodel = collection.get id
            thisView.model = lmodel
            view = new PMCFrontMatter
              model: lmodel
            thisView.showChildView 'content', view
            thisView.ui.button.hide()
        
      

class MainView extends Marionette.View
  template: tc.renderable (model) ->
    tc.div '.search-input'
    tc.div '.content'
  ui:
    searchInput: '.search-input'
    content: '.content'
    button: 'button'
    input: 'input'
  regions:
    content: '@ui.content'
    searchInput: '@ui.searchInput'
  childViewEvents:
    'search:clicked': 'searchClicked'
  onRender: ->
    @showChildView 'searchInput', new SearchInput
  searchClicked: (options) ->
    @searchTerm options.term
  searchTerm: (term) ->
    console.log 'searchTerm', term
    model = AppChannel.request 'make-search-model', term
    response = model.fetch()
    response.done =>
      pmcModels = new Backbone.Collection []
      fmCollection = AppChannel.request 'get-fm-collection'
      res = model.get 'eSearchResult'
      ids = _.map res.IdList.Id, Number
      ids.forEach (pmcid) ->
        lmodel = fmCollection.get pmcid
        if lmodel?
          model = lmodel
        else
          model = AppChannel.request 'make-remote-model', pmcid
        pmcModels.add model
      view = new Marionette.CollectionView
        collection: pmcModels
        childView: SimpleEntry
      @showChildView 'content', view
    
export default MainView
