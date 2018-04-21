import $ from 'jquery'
import _ from 'underscore'
import Backbone from 'backbone'
import Marionette from 'backbone.marionette'


MainChannel = Backbone.Radio.channel 'global'
MessageChannel = Backbone.Radio.channel 'messages'

class Deferred extends Promise
  done: 'then'
  
class BaseLocalStorageCollection extends Backbone.Collection
  local_storage_key: null
  initialize: () ->
    @fetch()
    @on 'change', @save, @
    
  fetch: () ->
    models = JSON.parse(localStorage.getItem(@local_storage_key)) || []
    @set models
    d = new $.Deferred
    d.resolve -> models
    return d
    
  # FIXME!
  _save: ->
    localStorage.setItem(@local_storage_key, JSON.stringify(@toJSON()))

  add: (models, options) ->
    super models, options
    @_save()

  remove: (models, options) ->
    super models, options
    @_save()

  set: (models, options) ->
    super models, options
    @_save()
    
  
export {
  BaseLocalStorageCollection
  }

