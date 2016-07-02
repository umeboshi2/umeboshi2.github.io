$ = require 'jquery'
_ = require 'underscore'
Backbone = require 'backbone'
Marionette = require 'backbone.marionette'
Backbone.LocalStorage = require 'backbone.localstorage'


MainChannel = Backbone.Radio.channel 'global'
MessageChannel = Backbone.Radio.channel 'messages'
ResourceChannel = Backbone.Radio.channel 'resources'

#class Document extends BaseLocalStorageModel
class Document extends Backbone.Model
  idAttribute: 'name'
  defaults:
    name: 'name me'
    # doctype is either markdown or html
    doctype: 'markdown'
    title: 'the title'
    content: 'somecontent'
    description: 'describe me'
  

class DocumentCollection extends Backbone.Collection
  _lskey: 'app_documents'
  model: Document
  initialize: () ->
    #console.log "initialize DocumentCollection"
    @fetch()
    @on 'change', @save, @
    
  fetch: () ->
    #console.log 'fetching documents'
    docs = JSON.parse(localStorage.getItem(@_lskey)) || []
    @set docs

  save: (collection) ->
    #console.log 'saving documents'
    localStorage.setItem(@_lskey, JSON.stringify(@toJSON()))
    
app_documents = new DocumentCollection
ResourceChannel.reply 'app-documents', ->
  #console.log "Set handler app-documents"
  app_documents

if __DEV__
  window.app_documents = app_documents

ResourceChannel.reply 'get-document', (name) ->
  #console.warn "!!!!!!!!!!!!!!!!!!get a document named #{name}"
  doc = app_documents.get name
  #console.warn "doc is named #{doc}"
  doc

ResourceChannel.reply 'add-document', (name, title, content) ->
  if __DEV__
    console.log "create document #{name}"
  doc = new Document
    name: name
    title: title
    content: content
  if __DEV__
    console.log "Created doc", doc
    window.created_doc = doc
  app_documents.add doc
  app_documents.save()
  doc
  
  
module.exports =
  DocumentCollection: DocumentCollection

