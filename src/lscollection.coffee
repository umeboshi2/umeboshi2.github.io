$ = require 'jquery'
_ = require 'underscore'
Backbone = require 'backbone'
Marionette = require 'backbone.marionette'


MainChannel = Backbone.Radio.channel 'global'
MessageChannel = Backbone.Radio.channel 'messages'
ResourceChannel = Backbone.Radio.channel 'resources'


class BaseLocalStorageCollection extends Backbone.Collection
  local_storage_key: null
  initialize: () ->
    #console.log "initialize DocumentCollection"
    @fetch()
    @on 'change', @save, @
    
  fetch: () ->
    #console.log 'fetching documents'
    docs = JSON.parse(localStorage.getItem(@local_storage_key)) || []
    @set docs

  # FIXME!
  save: (collection) ->
    #console.log 'saving documents'
    localStorage.setItem(@local_storage_key, JSON.stringify(@toJSON()))
    
  
  
module.exports =
  BaseLocalStorageCollection: BaseLocalStorageCollection
  

