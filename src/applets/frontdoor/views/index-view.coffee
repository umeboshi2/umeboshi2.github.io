Backbone = require 'backbone'
Marionette = require 'backbone.marionette'
tc = require 'teacup'
marked = require 'marked'
$ = require 'jquery'

{ navigate_to_url } = require 'tbirds/util/navigate-to-url'

DefaultStaticDocumentTemplate = tc.renderable (post) ->
  tc.article '.document-view.content.row', ->
    tc.div '.body.col-lg-10.col-lg-offset-1', ->
      tc.raw marked post.content
    
class MainView extends Marionette.View
  template: DefaultStaticDocumentTemplate
  ui:
    anchor: 'a'
  onRender: ->
    for a in @ui.anchor
      if a.hash.startsWith '#pages/'
        $(a).css 'color', 'SkyBlue'
    
module.exports = MainView

