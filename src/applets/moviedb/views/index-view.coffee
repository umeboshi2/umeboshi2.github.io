$ = require 'jquery'
Backbone = require 'backbone'
Marionette = require 'backbone.marionette'
tc = require 'teacup'
marked = require 'marked'

navigate_to_url = require('tbirds/util/navigate-to-url').default
PaginateBar = require('tbirds/views/paginate-bar').default

ConfirmDeleteModal = require('./confirm-delete-modal').default
SearchFormView = require './search-show-view'
SearchResultsView = require './show-search-results'

MainChannel = Backbone.Radio.channel 'global'
MessageChannel = Backbone.Radio.channel 'messages'
AppChannel = Backbone.Radio.channel 'tvmaze'

mainText = require 'raw-loader!../index-doc.md'

if __DEV__
  tmdIcon = require '../../../../bower_components/themoviedb-powered-green/index.svg' #noqa

else
  tmdIcon = "https://www.themoviedb.org/static_cache/v4/logos/powered-by-square-green-11c0c7f8e03c4f44aa54d5e91d9531aa9860a9161c49f5fa741b730c5b21a1f2.svg" #noqa

require '../styles.scss'


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
      tc.div '.listview-header.bg-moviedb-logo', ->
        tc.a href:'https://developers.themoviedb.org',
        target:"_blank", ->
          tc.h1 '.d-inline.color-moviedb-logo', 'TheMovieDb API Demo'
          tc.img '.bg-moviedb-logo.d-inline', src:tmdIcon,
          style:"max-width:4rem;"
      tc.raw marked mainText
      tc.div '.search-form.listview-list-entry'
      tc.div '.paginate-bar'
      tc.div '.search-results'
      
class MainView extends Marionette.View
  template: DefaultStaticDocumentTemplate
  templateContext:
    appName: 'tvmaze'
  ui:
    searchForm: '.search-form'
    paginateBar: '.paginate-bar'
    searchResults: '.search-results'
    sampleListAnchor: '.sample-list-anchor'
  childViewEvents:
    'save:form:success': 'doSomething'
  doSomething: (model) ->
    rview = @getChildView 'searchResults'
    if not rview.ui.header.is ':visible'
      rview.ui.header.show()
    msg = "#{rview.collection.length}  results for \"#{model.get 'tvshow'}\""
    rview.triggerMethod 'set:header', msg
    region = @getRegion 'paginateBar'
    if @collection.state.totalPages > 1
      pview = new PaginateBar
        collection: @collection
        setKeyHandler: true
      region.show pview
    else if region.hasView()
      region.empty()
  regions:
    searchForm: '@ui.searchForm'
    paginateBar: '@ui.paginateBar'
    searchResults: '@ui.searchResults'
  onRender: ->
    view = new SearchFormView
      collection: @collection
    @showChildView 'searchForm', view
    rview = new SearchResultsView
      collection: @collection
    @showChildView 'searchResults', rview
    window.listAnchor = @ui.sampleListAnchor
    console.log "sampleListAnchor", @ui.sampleListAnchor
    
module.exports = MainView

