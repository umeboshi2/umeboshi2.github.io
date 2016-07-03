Backbone = require 'backbone'
Marionette = require 'backbone.marionette'

AppTemplates = require '../templates'


MainChannel = Backbone.Radio.channel 'global'
ResourceChannel = Backbone.Radio.channel 'resources'

class PageItemView extends Backbone.Marionette.ItemView
  template: AppTemplates.PageItem
  ui:
    edit_page: '.edit-page'
    delete_page: '.delete-page'
    
  events: ->
    console.log 'init events for', @model
    'click @ui.edit_page': 'edit_page'
    'click @ui.delete_page': 'delete_page'

  edit_page: ->
    console.log "edit_page", @model

  delete_page: ->
    console.log "delete_page", @model
    
class PageListView extends Backbone.Marionette.CompositeView
  childView: PageItemView
  template: AppTemplates.PageList
  #childId: '#pagecontainer'
  childViewContainer: '#pagecontainer'
  ui:
    make_new_page: '#makenewpage'

  events: ->
    'click @ui.make_new_page': 'make_new_page'

  make_new_page: ->
    console.log "make a new page"

  

module.exports = PageListView

