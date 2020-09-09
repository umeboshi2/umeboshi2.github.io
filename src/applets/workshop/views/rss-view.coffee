import Backbone from 'backbone'
import Marionette from 'backbone.marionette'
import tc from 'teacup'
import $ from 'jquery'
import X2JS from 'x2js'
import moment from "moment"

JView = require 'json-view'
require 'json-view/devtools.css'

import navigate_to_url from 'tbirds/util/navigate-to-url'

class QRSSModel extends Backbone.Model
  #url: 'https://www.qmap.pub/api/rss?lang=en'

class RSSModel extends Backbone.Model
  initialize: (attributes, options) ->
    @url = options.url
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
      tc.div '.list-group-item.card', ->
        tc.div '.card-title', ->
          tc.small moment.utc(i.pubDate).format("MMMM D, YYYY")
          tc.text ' | '
          tc.a href:i.link,  i.title
          tc.div '.card-body', ->
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
  model: new RSSModel {}, url: "https://cors-anywhere.herokuapp.com/https://msdh.ms.gov/msdhsite/rssFeed.xml"  # noqa
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
