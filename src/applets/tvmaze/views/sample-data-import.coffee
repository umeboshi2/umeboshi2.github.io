{ map } = require 'underscore'
$ = require 'jquery'
Backbone = require 'backbone'
Marionette = require 'backbone.marionette'
tc = require 'teacup'
marked = require 'marked'

navigate_to_url = require('tbirds/util/navigate-to-url').default
{ ProgressModel
  ProgressView } = require 'tbirds/views/simple-progress'

console.log "ProgressModel", ProgressModel
console.log "ProgressView", ProgressView

MainChannel = Backbone.Radio.channel 'global'
MessageChannel = Backbone.Radio.channel 'messages'
AppChannel = Backbone.Radio.channel 'tvmaze'

data = require '../../../../assets/dev/myshows.json'
console.log data

shows = new Backbone.Collection data
console.log "Shows", shows


class ImportManager extends Marionette.Object
  channelName: 'tvmaze'
  collection: shows
  initialize: (options) =>
    @progressModel = options.progressModel
    


itemTemplate = tc.renderable (model) ->
  itemBtn = '.btn.btn-sm'
  tc.li '.list-group-item', ->
    tc.span ->
      tc.a href:"#tvmaze/view/show/#{model.id}", model.name
    tc.span '.btn-group.pull-right', ->
      tc.button '.delete-item.btn.btn-sm.btn-danger.fa.fa-close', 'delete'
    

mainTemplate = tc.renderable (post) ->
  tc.div '.body.col-sm-6', ->
    tc.h1 'TV Maze Sample Data'
    tc.button '.import-button.btn.btn-primary', 'Import Data'
    tc.div '.status-div.alert.alert-info', style:'display:none'
    tc.div '.import-progress'
    tc.ul '.show-list.list-group'

class ShowView extends Marionette.View
  channelName: 'tvmaze'
  template: itemTemplate
  ui:
    deleteButton: '.delete-item'
  events:
    'click @ui.deleteButton': 'deleteItem'
  triggers:
    'click @ui.deleteButton': 'item:deleted'
  deleteItem: ->
    @trigger 'item:deleted', @model
    @triggerMethod 'item:deleted', @model
    @model.collection.remove @model

    
class MainView extends Marionette.View
  channelName: 'tvmaze'
  template: mainTemplate
  ui:
    showList: '.show-list'
    statusDiv: '.status-div'
    importProgress: '.import-progress'
    importButton: '.import-button'
  regions:
    showList: '@ui.showList'
    importProgress: '@ui.importProgress'
  events:
    'click @ui.importButton': 'importShows'
  helloThere: ->
    console.log "helloThere"
  onChildItemDeleted: ->
    console.log "onChildviewItemDeleted"
    @importProgressModel.set 'valuemax', shows.length
  onRender: ->
    local_shows = AppChannel.request 'get-local-tvshows'
    models = shows.models
    console.log "SHOWS", shows, shows.models[0]
    counter = 0
    removals = []
    while counter < shows.length
      model = shows.models[counter]
      if model.id == 6544
        console.log "MODEL". model
      lmodel = local_shows.get model.id
      if lmodel
        removals.push model
      counter += 1
    shows.remove removals
    
        
    @importProgressModel = new ProgressModel
    @importProgressModel.set 'valuemax', shows.length
    @importProgressModel.set 'valuenow', 0
    view = new Marionette.CollectionView
      channelName: 'tvmaze'
      collection: shows
      childView: ShowView
      childViewTriggers:
        'item:deleted': 'child:item:deleted'
      onChildItemDeleted: =>
        @importProgressModel.set 'valuemax', shows.length
    @showChildView 'showList', view
    view = new ProgressView
      model: @importProgressModel
    @showChildView 'importProgress', view
  importShows: ->
    @ui.importButton.hide()
    @ui.statusDiv.show()
    console.log "importShows"
    @importAnotherShow()
  importShow: (show) ->
    name = show.get 'name'
    id = show.id
    @ui.statusDiv.text "Importing #{name}, #{id}"
    rshow = AppChannel.request 'get-remote-show', id
    response = rshow.fetch()
    response.done =>
      p = AppChannel.request 'save-local-show', rshow.toJSON()
      p.then (result) =>
        shows.remove show
        @importProgressModel.set 'valuenow', shows.length
        if shows.length
          setTimeout =>
            @importAnotherShow()
          , 500
  importAnotherShow: ->
    show = shows.models[0]
    @importShow show
    
module.exports = MainView

