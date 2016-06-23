$ = require 'jquery'
_ = require 'underscore'
Backbone = require 'backbone'
Marionette = require 'backbone.marionette'
Backbone.LocalStorage = require 'backbone.localstorage'

Models = require 'models'

MainChannel = Backbone.Radio.channel 'global'


class AppClipboard extends Backbone.Collection
  # initialize copy_status with "copy"
  copy_status: 'copy'

  _add_models: (models, command) ->
    @reset()
    @add models
    @copy_status = command
    
  copy: (models) ->
    @_add_models models, 'copy'

  cut: (models) ->
    @_add_models models, 'cut'

  paste: () ->
    # copy models
    models = @.models.slice()
    # empty collection
    @reset()
    # return models
    models

app_clipboard = new AppClipboard
MainChannel.reply 'main:app:app-clipboard', ->
  app_clipboard

class DocumentCollection extends Backbone.Collection
  localStorage: MainChannel.request 'main:app:app-documentdb'
  #localStorage: new Backbone.LocalStorage 'app-documents'
  model: Models.Document
  
app_documents = new DocumentCollection
MainChannel.reply 'main:app:app-documents', ->
  console.log "Set handler main:app:app-documents"
  app_documents
  
module.exports =
  AppClipboard: AppClipboard
  DocumentCollection: DocumentCollection

