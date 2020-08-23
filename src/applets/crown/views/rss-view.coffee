import Backbone from 'backbone'
import Marionette from 'backbone.marionette'
import tc from 'teacup'
import $ from 'jquery'
import X2JS from 'x2js'

JView = require 'json-view'
require 'json-view/devtools.css'

import navigate_to_url from 'tbirds/util/navigate-to-url'

class RSSModel extends Backbone.Model
  url: 'https://www.qmap.pub/api/rss?lang=en'
  parse: (data) ->
    x2js = new X2JS()
    return x2js.xml2js data
    

class HeaderView extends Marionette.View
  template: tc.renderable (model) ->
    tc.h1 model.rss.channel.description
    

class IndexView extends Marionette.View
  template: tc.renderable (model) ->
    channel = model.rss.channel
    for i in channel.item
      console.log "I", i
      tc.text new Date i.pubDate
      tc.text '|'
      tc.a href:i.link,  i.title
      tc.div '.listview-list-entry', ->
        tc.raw i.description

class MainView extends Marionette.View
  template: tc.renderable (model) ->
    tc.div '.row.listview-header'
    tc.div '.index-view'
  ui:
    header: '.listview-header'
    indexView: '.index-view'
    refreshBtn: '.refresh-btn'
  regions:
    header: '@ui.header'
    indexView: '@ui.indexView'
  events:
    'click @ui.refreshBtn': 'refreshBtnClicked'
  model: new RSSModel
  showIndexView: ->
    region = @getRegion 'indexView'
    region.empty()
    view = new IndexView
      model: @model
    @showChildView 'indexView', view
  showHeader: ->
    region = @getRegion 'header'
    region.empty()
    view = new HeaderView
      model: @model
    @showChildView 'header', view
  onRender: ->
    response = @model.fetch
      dataType: 'text'
    response.done =>
      @showIndexView()
      @showHeader()
      
export default MainView
