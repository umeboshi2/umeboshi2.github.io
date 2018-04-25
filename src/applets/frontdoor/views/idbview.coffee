$ = require 'jquery'
Backbone = require 'backbone'
Marionette = require 'backbone.marionette'
tc = require 'teacup'
JView = require 'json-view'
require 'json-view/devtools.css'

exportToFile = require('tbirds/util/export-to-file').default

MainChannel = Backbone.Radio.channel 'global'
MessageChannel = Backbone.Radio.channel 'messages'
AppChannel = Backbone.Radio.channel 'ebcsv'

#class ComicListView extends Backbone.Marionette.CollectionView
#  childView: ComicEntryView

importExportTemplate = tc.renderable (model) ->
  tc.div '.listview-list-entry', ->
    tc.h2 model.name
    tc.div '.btn-group', ->
      tc.button '.view.btn.btn-success', type:'button', 'View'
      tc.button '.export.btn.btn-primary', type:'button', 'Export'
      tc.button '.import.btn.btn-info', type:'button', 'Import'
    tc.div '.dbview'

class DatabaseView extends Marionette.View
  template: tc.renderable (model) ->
    tc.div ->
      tc.div '.body'
  ui:
    body: '.body'
  onDomRefresh: ->
    data = @model.toJSON()
    console.log "data is", data
    @jsonView = new JView data
    @ui.body.prepend @jsonView.dom
    #@jsonView.expand true
    
class ImportExportView extends Marionette.View
  template: importExportTemplate
  ui:
    viewButton: '.view'
    exportButton: '.export'
    importButton: '.import'
    dbView: '.dbview'
  regions:
    dbView: '@ui.dbView'
  events:
    'click @ui.viewButton': 'viewDatabase'
    'click @ui.exportButton': 'exportDatabase'
    'click @ui.importButton': 'importDatabase'

  _exportDatabase: ->
    conn = @model.get 'conn'
    return conn.export()
  viewDatabase: ->
    @_exportDatabase().then (data) =>
      view = new DatabaseView
        model: new Backbone.Model data: data
      @showChildView 'dbView', view
      @ui.viewButton.hide()
  exportDatabase: ->
    p = @_exportDatabase()
    p.then (data) =>
      options =
        type: 'data:text/json;charset=utf-8'
        data: JSON.stringify data
        filename: "#{@model.get 'name'}-idb.json"
      exportToFile options
      console.log "DATA", data
      MessageChannel.request 'primary', "Exported Database #{@model.get 'name'}"
  importDatabase: ->
    MessageChannel.request 'info', "Import Database #{@model.get 'name'}"
    

class ComicsView extends Backbone.Marionette.View
  regions:
    #list: '#comiclist-container'
    body: '.body'
  template: tc.renderable (model) ->
    tc.div '.listview-header', ->
      tc.text "Indexed Database Admin"
    tc.div '.body'
  onRender: ->
    app = MainChannel.request 'main:app:object'
    dbConn = app.getState 'dbConn'
    @collection = new Backbone.Collection
    view = new Marionette.CollectionView
      collection: @collection
      childView: ImportExportView
    @showChildView 'body', view
    Object.keys(dbConn).forEach (key) =>
      @collection.add
        id: key
        name: key
        conn: dbConn[key]
    
      
module.exports = ComicsView


