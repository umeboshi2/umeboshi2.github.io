Backbone = require 'backbone'
Marionette = require 'backbone.marionette'
tc = require 'teacup'
marked = require 'marked'

{ navigate_to_url } = require 'tbirds/util/navigate-to-url'

view_template = tc.renderable (model) ->
  tc.div '.row.listview-list-entry', ->
    tc.raw marked '# Hello World!!'

DefaultStaticDocumentTemplate = tc.renderable (post) ->
  tc.article '.document-view.content.row', ->
    tc.div '.body.col-lg-10.col-lg-offset-1', ->
      tc.raw marked post.content
    
class MainView extends Marionette.View
  template: DefaultStaticDocumentTemplate
    
module.exports = MainView

