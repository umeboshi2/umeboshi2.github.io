import Backbone from 'backbone'
import Marionette from 'backbone.marionette'
import tc from 'teacup'
import $ from 'jquery'
import _ from 'underscore'

import indexModels from 'common/index-models'

AppChannel = Backbone.Radio.channel 'pmc'

class SimpleEntry extends Marionette.View
  template: tc.renderable (model) ->
    tc.div model.id
    tc.div '.content'
  
    
class MainView extends Marionette.View
  template: tc.renderable (model) ->
    tc.h3 "Local PMC Papers"
    tc.div '.content'
  ui:
    content: '.content'
  regions:
    content: '@ui.content'
  onRender: ->
    collection = AppChannel.request 'get-fm-collection'
    response = collection.fetch()
    response.done =>
      view = new Marionette.CollectionView
        collection: collection
        childView: SimpleEntry
      @showChildView 'content', view
      
export default MainView
