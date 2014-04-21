define (require, exports, module) ->
  Backbone = require 'backbone'
  Marionette = require 'marionette'
  MSGBUS = require 'msgbus'
  Views = require 'views/mainviews'

  
    
  initialize_page = () ->
    console.log 'initialize_page'
    layout = new Views.MainPageLayout
    layout.on 'show', =>
      view = new Views.MainPageView
    MSGBUS.events.trigger 'mainpage:show', layout


  
  MSGBUS.commands.setHandler 'mainpage:init', () ->
    initialize_page()
    