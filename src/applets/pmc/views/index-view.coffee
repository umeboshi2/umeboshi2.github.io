import Backbone from 'backbone'
import Marionette from 'backbone.marionette'
import tc from 'teacup'
import $ from 'jquery'
import _ from 'underscore'

import PaginateBar from 'tbirds/views/paginate-bar'
import indexModels from 'common/index-models'
import PMCFrontMatter from './pmc-front-matter'

AppChannel = Backbone.Radio.channel 'pmc'

class SimpleEntry extends Marionette.View
  templateContext: ->
    hasOAIcontent: @model.hasOAIcontent()
  template: tc.renderable (model) ->
    if not model.hasOAIcontent
      tc.div model.id
    tc.div '.content'
  ui:
    content: '.content'
  regions:
    content: '@ui.content'
  onRender: ->
    if @model.hasOAIcontent()
      view = new PMCFrontMatter
        model: @model
      @showChildView 'content', view
    
class MainView extends Marionette.View
  template: tc.renderable (model) ->
    tc.div '.paginate-bar'
    tc.h3 "Local PMC Papers"
    tc.div '.content'
  ui:
    content: '.content'
    paginateBar: '.paginate-bar'
  regions:
    content: '@ui.content'
    paginateBar: '@ui.paginateBar'
  onRender: ->
    collection = AppChannel.request 'make-fm-pageable'
    response = collection.fetch()
    response.done =>
      view = new Marionette.CollectionView
        collection: collection
        childView: SimpleEntry
      @showChildView 'content', view
      pbar = new PaginateBar
        collection: collection
      @showChildView 'paginateBar', pbar
export default MainView
