$ = require 'jquery'
Backbone = require 'backbone'
Marionette = require 'backbone.marionette'
tc = require 'teacup'
marked = require 'marked'

navigate_to_url = require('tbirds/util/navigate-to-url').default


MessageChannel = Backbone.Radio.channel 'messages'

itemTemplate = tc.renderable (model) ->
  itemBtn = '.btn.btn-sm'
  tc.li '.list-group-item', ->
    tc.span ->
      tc.a href:"#tvmaze/view/show/#{model.id}", model.content.name

listTemplate = tc.renderable ->
  tc.div '.listview-header', ->
    tc.text "TV Shows"
  tc.ul ".list-group"


class ItemView extends Marionette.View
  template: itemTemplate
  ui:
    item: '.list-group-item'
    link: 'a'
  events:
    'click @ui.link': 'showRole'
  showRole: (event) ->
    event.preventDefault()
    navigate_to_url "#tvmaze/view/show/#{@model.id}"
    
class ItemCollectionView extends Marionette.CollectionView
  childView: ItemView

class ListView extends Marionette.View
  template: listTemplate
  regions:
    itemList: '.list-group'
    navBox: '.navbox'
  ui:
    header: '.listview-header'
  onRender: ->
    view = new ItemCollectionView
      collection: @collection
    @showChildView 'itemList', view

view_template = tc.renderable (model) ->
  tc.div '.row.listview-list-entry', ->
    tc.raw marked "# #{model.appName} started."
    
class MainView extends Marionette.View
  template: view_template
  templateContext:
    appName: 'tvmaze'
    
module.exports = ListView

