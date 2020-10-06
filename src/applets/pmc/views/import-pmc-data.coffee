import { Radio } from 'backbone'
import { View as MnView, CollectionView } from 'backbone.marionette'
import tc from 'teacup'

import PaginateBar from 'tbirds/views/paginate-bar'
import PMCFrontMatter from './pmc-front-matter'

import { ProgressModel, ProgressView } from 'tbirds/views/simple-progress'


AppChannel = Radio.channel 'pmc'

class SimpleEntry extends MnView
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
    
class MainView extends MnView
  template: tc.renderable ->
    tc.h3 '.text-center', "Local PMC Papers"
    tc.div '.paginate-bar'
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
      pbar = new PaginateBar
        collection: collection
      @showChildView 'paginateBar', pbar
      view = new CollectionView
        collection: collection
        childView: SimpleEntry
      @showChildView 'content', view
export default MainView
