import { Model, Collection, Radio } from 'backbone'
import { View as MnView, CollectionView } from 'backbone.marionette'
import tc from 'teacup'
import { promisify } from 'es6-promisify'

import PaginateBar from 'tbirds/views/paginate-bar'
import HasJsonView from 'common/has-jsonview'
import { eventIndex } from 'common/index-models'
import PMCFrontMatter from './pmc-front-matter'

import { ProgressModel, ProgressView } from 'tbirds/views/simple-progress'


AppChannel = Radio.channel 'pmc'

pmcIndexIdCollection = ->
  categories = eventIndex.get 'categories'
  pmcCategories = new Collection
  for key of categories
    item = categories[key]
    if item.pmc_ids.length
      item.id = item.name
      pmcCategories.add item

  allPmcIds = new Collection []
  pmcCategories.each (model) ->
    model.get('pmc_ids').forEach (id) ->
      allPmcIds.add
        id: id
        name: id
  return allPmcIds

allPmcIds = pmcIndexIdCollection()

class ObjView extends MnView
  template: tc.renderable (model) ->
    tc.h5 '.text-center', "Model Data"
    tc.div '.jsonview'
  behaviors: [HasJsonView]
  
class MainView extends MnView
  template: tc.renderable (model) ->
    tc.h3 '.text-center', "Import PMC Data"
    tc.div '.paginate-bar'
    tc.div '.import-progress'
    tc.div '.import-btn.btn.btn-outline-warning', 'Import Models'
    tc.div '.update-btn.btn.btn-outline-warning', 'Update Local Models'
    tc.div '.content'
  ui:
    content: '.content'
    paginateBar: '.paginate-bar'
    importProgress: '.import-progress'
    importBtn: '.import-btn'
    updateBtn: '.update-btn'
    header: 'h3'
  regions:
    content: '@ui.content'
    paginateBar: '@ui.paginateBar'
    importProgress: '@ui.importProgress'
    importBtn: '@ui.importBtn'
  events:
    'click @ui.importBtn': 'importBtnClicked'
    'click @ui.updateBtn': 'updateBtnClicked'
    'model:imported': 'onModelImported'
  collection: allPmcIds
  onRender: ->
    console.log "@collection has length", @collection
    fmCollection = AppChannel.request 'get-fm-collection'
    fmCollection.fetch()
    .then =>
      indexCollection = pmcIndexIdCollection()
      indexCollection.each (model) ->
        loc = fmCollection.get model.id
        if loc
          allPmcIds.remove model
      console.log 'allPmcIds', allPmcIds
      if @collection.length
        view = new ObjView
          model: @collection
        @showChildView 'content', view
        model = new ProgressModel
        model.set('valuemax', @collection.length)
        model.set('valuenow', 0)
        view = new ProgressView
          model: model
        @showChildView 'importProgress', view
        @progressModel = model
        @progressView = view
        msg = "#{@collection.length} models to import."
        @ui.header.text msg
      else
        @ui.importBtn.hide()
        @ui.header.text "No models to import."
  importModel: (model, index) ->
    remote = AppChannel.request 'make-remote-model', model.id
    response = remote.fetch()
    response.done =>
      id = Number remote.get('id')
      content = remote.get('content')
      lpromise = AppChannel.request 'save-fm-content', id, content
      lpromise.then =>
        index += 1
        @progressModel.set('valuenow', index)
        @progressView.render()
        @triggerMethod 'model:imported'

  onModelImported: ->
    if @collection.length
      valueNow = @progressModel.get('valuenow')
      model = @collection.pop()
      @importModel model, valueNow
    
  importBtnClicked: ->
    if @collection.length
      valueNow = @progressModel.get('valuenow')
      model = @collection.pop()
      @importModel model, valueNow
      
      
export default MainView
