$ = require 'jquery'
Backbone = require 'backbone'
Marionette = require 'backbone.marionette'
tc = require 'teacup'
marked = require 'marked'

navigate_to_url = require('tbirds/util/navigate-to-url').default

ConfirmDeleteModal = require('./confirm-delete-modal').default
SearchFormView = require './search-show-view'

MainChannel = Backbone.Radio.channel 'global'
MessageChannel = Backbone.Radio.channel 'messages'

mainText = require 'raw-loader!../index-doc.md'


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


DefaultStaticDocumentTemplate = tc.renderable (post) ->
  tc.article '.document-view.content', ->
    tc.div '.body', ->
      #
      tc.h1 'TV Maze API Demo'
      #tc.p ->
      #  tc.text "Search for a TV show or go directly to the "
      #  tc.a href:"#tvmaze/view/shows", "list of shows"
      #  tc.text '.'
      tc.div '.search-form.listview-list-entry'
      tc.raw marked mainText
      
class MainView extends Marionette.View
  template: DefaultStaticDocumentTemplate
  templateContext:
    appName: 'tvmaze'
  ui:
    searchForm: '.search-form'
  regions:
    searchForm: '@ui.searchForm'
  onRender: ->
    view = new SearchFormView
    @showChildView 'searchForm', view
    
module.exports = MainView

