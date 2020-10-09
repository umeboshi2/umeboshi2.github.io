import Backbone from 'backbone'
import Marionette from 'backbone.marionette'
import tc from 'teacup'

viewTemplate = tc.renderable (model) ->
  tc.div '.row.listview-list-entry', ->
    tc.h1 "#{model.appName} started."
    
class MainView extends Marionette.View
  template: viewTemplate
  templateContext:
    appName: 'xyzzy'

export default MainView
