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
  tc.div '.row.listview-list-entry', ->
    tc.h1 "Index"
    tc.div '.jsonview'
  for page of model
    tc.div '.row.listview-list-entry', ->
      tc.a href:makePageLink(page), makePageName page
    
class MainView extends Marionette.View
  template: viewTemplate
  ui:
    jsonView: '.jsonview'
  onDomRefresh: ->
    @jsonView = new JView @model.toJSON()
    @ui.jsonView.prepend @jsonView.dom
    console.log "model is", @model
    

export default MainView
