$ = require 'jquery'
_ = require 'underscore'
Backbone = require 'backbone'
Marionette = require 'backbone.marionette'


MainChannel = Backbone.Radio.channel 'global'
ResourceChannel = Backbone.Radio.channel 'resources'


  

########################################
# Models
########################################
#

class BaseLocalStorageModel extends Backbone.Model
  initialize: () ->
    @fetch()
    @on 'change', @save, @

  fetch: () ->
    console.log '===== FETCH FIRED LOADING LOCAL STORAGE ===='
    @set JSON.parse localStorage.getItem @id

  save: (attributes) ->
    console.log '===== CHANGE FIRED SAVING LOCAL STORAGE ===='
    localStorage.setItem(@id, JSON.stringify(@toJSON()))

  destroy: (options) ->
    console.log '===== DESTROY LOCAL STORAGE ===='
    localStorage.removeItem @id

  isEmpty: () ->
    _.size @attributes <= 1
      

    

class BaseMessage extends Backbone.Model
  defaults:
    level: 'info'

# FIXME: figure out what settings and where stored
class AppSettings extends Backbone.Model

  

app_settings = new AppSettings
MainChannel.reply 'main:app:settings', ->
  app_settings




module.exports =
  BaseMessage: BaseMessage
  AppSettings: AppSettings
  Document: Document
