import Backbone from 'backbone'
import Marionette from 'backbone.marionette'
import tc from 'teacup'
JView = require 'json-view'
require 'json-view/devtools.css'

import navigate_to_url from 'tbirds/util/navigate-to-url'

makePageName = (fileName) ->
  return fileName.split('.md')[0]
  
makePageLink = (fileName) ->
  name = makePageName fileName
  return "#pages/blog/cv19/#{name}"

viewTemplate = tc.renderable (model) ->
  tc.div '.row.listview-header', ->
    tc.h1 "Index"
    tc.div '.jsonview'
  tc.div '.index-view'

class PageEntryView extends Marionette.View
  template: tc.renderable (model) ->
    console.log "template model", model
    tc.div '.row.listview-list-entry', ->
      tc.a href:makePageLink(model.name), makePageName model.name
      
  

class MainView extends Marionette.View
  template: viewTemplate
  ui:
    jsonView: '.jsonview'
    indexView: '.index-view'
  regions:
    indexView: '@ui.indexView'
  onRender: ->
    console.log "MODEL IS", @model
    view = new Marionette.CollectionView
      childView: PageEntryView
      collection: new Backbone.Collection @model.get 'pages'
      #collection: new Backbone.Collection @model.get 'seasons'
    @showChildView 'indexView', view
  onDomRefresh2: ->
    @jsonView = new JView @model.toJSON()
    @ui.jsonView.prepend @jsonView.dom
    

export default MainView
