import Backbone from 'backbone'
import Marionette from 'backbone.marionette'
import tc from 'teacup'
import $ from 'jquery'
import X2JS from 'x2js'
import moment from "moment"

JView = require 'json-view'
require 'json-view/devtools.css'

class RSSModel extends Backbone.Model
  initialize: (attributes, options) ->
    @url = options.url
  parse: (data) ->
    x2js = new X2JS()
    return x2js.xml2js data

class MainView extends Marionette.View
  template: tc.renderable (model) ->
    tc.div '.row.listview-header', ->
      tc.text "Redirect View"
    tc.div ->
      tc.p "This view is a simple redirect to: "
      tc.a href:atob(model.name), atob(model.name)
  ui:
    anchor: 'a'
    header: '.listview-header'
  onRender: ->
    console.log @model.get('name')
    url = atob @model.get('name')
    if __DEV__
      console.log "URL", url
    window.open url
    
      
export default MainView
