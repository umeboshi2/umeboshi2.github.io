define (require, exports, module) ->
  Backbone = require 'backbone'
  MSGBUS = require 'msgbus'
  Marionette = require 'marionette'

  Templates = require 'views/templates'
  
  class MainPageView extends Backbone.Marionette.ItemView
    template: Templates.PageLayoutTemplate

  class MainPageLayout extends Backbone.Marionette.Layout
    template: Templates.PageLayoutTemplate
    
    
  
  module.exports =
    MainPageView: MainPageView
    MainPageLayout: MainPageLayout
    
  