$ = require 'jquery'
_ = require 'underscore'
Backbone = require 'backbone'
Marionette = require 'backbone.marionette'
Backbone.LocalStorage = require 'backbone.localstorage'


MainChannel = Backbone.Radio.channel 'global'


DocumentDatabase = new Backbone.LocalStorage 'app-documents'
MainChannel.reply 'main:app:app-documentdb', ->
  DocumentDatabase
  

########################################
# Models
########################################
#

class BaseMessage extends Backbone.Model
  defaults:
    level: 'info'


class BaseMessageCollection extends Backbone.Collection
  model: BaseMessage


# FIXME: figure out what settings and where stored
class AppSettings extends Backbone.Model

class Document extends Backbone.Model
  localStorage: MainChannel.request 'main:app:app-documentdb'
  

app_settings = new AppSettings
MainChannel.reply 'main:app:settings', ->
  app_settings


MainChannel.reply 'main:app:get-document', (path) ->
  if path == ''
    path = 'package'
  new Backbone.Model
    id: path

main_message_collection = new BaseMessageCollection
MainChannel.reply 'main:app:messages', ->
  main_message_collection

MainChannel.reply 'main:app:display-message', (msg, lvl) =>
  messages = MainChannel.request 'main:app:messages'
  # FIXME: why not use BaseMessage model?
  Message = new Backbone.Model
    content: msg
    level: lvl
  window.messages = messages
  messages.add Message

MainChannel.reply 'main:app:delete-message', (model) =>
  messages = MainChannel.request 'main:app:messages'
  messages.remove model


module.exports =
  BaseMessage: BaseMessage
  AppSettings: AppSettings
  Document: Document
