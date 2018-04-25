$ = require 'jquery'
Backbone = require 'backbone'
Marionette = require 'backbone.marionette'
tc = require 'teacup'
marked = require 'marked'

navigate_to_url = require('tbirds/util/navigate-to-url').default

ConfirmDeleteModal = require('./confirm-delete-modal').default

MainChannel = Backbone.Radio.channel 'global'
MessageChannel = Backbone.Radio.channel 'messages'




itemTemplate = tc.renderable (model) ->
  itemBtn = '.btn.btn-sm'
  tc.li '.list-group-item', ->
    tc.span ->
      tc.a href:"#tvmaze/view/show/#{model.id}", model.content.name
    tc.span '.btn-group.pull-right', ->
      tc.button '.delete-item.btn.btn-sm.btn-danger.fa.fa-close', 'delete'
    
listTemplate = tc.renderable ->
  tc.div '.listview-header', ->
    tc.text "TV Shows"
  tc.ul ".list-group"


class ItemView extends Marionette.View
  template: itemTemplate
  ui:
    item: '.list-group-item'
    link: 'a'
    deleteItem: '.delete-item'
  events:
    'click @ui.link': 'showRole'
    'click @ui.deleteItem': 'deleteItem'
  showRole: (event) ->
    event.preventDefault()
    navigate_to_url "#tvmaze/view/show/#{@model.id}"
  _show_modal: (view, backdrop) ->
    app = MainChannel.request 'main:app:object'
    layout = app.getView()
    modal_region = layout.getRegion 'modal'
    modal_region.backdrop = backdrop
    modal_region.show view
  deleteItem: ->
    view = new ConfirmDeleteModal
      model: @model
    @_show_modal view, true
    
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

