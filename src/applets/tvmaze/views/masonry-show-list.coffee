$ = require 'jquery'
Backbone = require 'backbone'
Marionette = require 'backbone.marionette'
tc = require 'teacup'
marked = require 'marked'

HasMasonryView = require('tbirds/behaviors/has-masonry').default
noImage = require('tbirds/templates/no-image-span').default

navigate_to_url = require('tbirds/util/navigate-to-url').default

ConfirmDeleteModal = require('./confirm-delete-modal').default

MainChannel = Backbone.Radio.channel 'global'
MessageChannel = Backbone.Radio.channel 'messages'

listContainer = '.show-list'

itemTemplate = tc.renderable (model) ->
  viewLink = "#tvmaze/view/show/#{model.id}"
  itemBtn = '.btn.btn-sm'
  tc.div '.show-item.card.col-sm-3.bg-body-d5',
  style:'width:20%;border-style: solid;border-width:3px', ->
    tc.div '.card-header', ->
      tc.small -> tc.strong '.card-title', model.content.name
      #tc.a href:"#tvmaze/view/show/#{model.id}", model.content.name
      #tc.button '.delete-item.btn.btn-sm.btn-danger.fa.fa-close', 'delete'
    tc.div '.card-block', ->
      tc.a href:viewLink, ->
        img = model.content.image?.medium
        if img
          tc.img '.card-img-bottom', src:model.content.image?.medium
        else
          noImage '4x'
listTemplate = tc.renderable ->
  console.log "SHOW ME"
  tc.div '.listview-header', ->
    tc.text "TV Shows"
  tc.button '.flat-list.btn.btn-info', "Show flat list"
  tc.div listContainer


class ItemView extends Marionette.View
  template: itemTemplate
  ui:
    item: '.show-item'
    link: 'a'
    deleteItem: '.delete-item'
  events:
    'click @ui.link': 'showRole'
    'click @ui.deleteItem': 'deleteItem'
  showRole: (event) ->
    event.preventDefault()
    navigate_to_url "#tvmaze/shows/view/#{@model.id}"
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
  options:
    listContainer: listContainer
  ui: ->
    header: '.listview-header'
    itemList: listContainer
    flatListButton: '.flat-list'
  regions:
    itemList: '@ui.itemList'
  events:
    'click @ui.flatListButton': 'showFlatList'
  behaviors:
    HasMasonryView:
      behaviorClass: HasMasonryView
      listContainer: listContainer
      masonryOptions:
        itemSelector: '.show-item'
        isInitLayout: false
        horizontalOrder: false
        columnWidth: 10
  onRender: ->
    view = new ItemCollectionView
      collection: @collection
    @showChildView 'itemList', view
  showFlatList: ->
    navigate_to_url '#tvmaze/shows/flat'
view_template = tc.renderable (model) ->
  tc.div '.row.listview-list-entry', ->
    tc.raw marked "# #{model.appName} started."
    
class MainView extends Marionette.View
  template: view_template
  templateContext:
    appName: 'tvmaze'
    
module.exports = ListView

