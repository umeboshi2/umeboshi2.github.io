define (require, exports, module) ->
  Backbone = require 'backbone'
  Marionette = require 'marionette'
  MSGBUS = require 'msgbus'
  Views = require 'views/mainviews'

  
    
  initialize_page = () ->
    user = MSGBUS.reqres.request 'current:user'
    console.log 'initialize_page'
    layout = new Views.MainPageLayout
    layout.on 'show', =>
      view = new Views.MainPageView
      mainheader = new Views.MainHeaderView
        model: user
      user = MSGBUS.reqres.request 'current:user'
      MSGBUS.events.trigger 'mainheader:show', mainheader
      
    MSGBUS.events.trigger 'mainpage:show', layout


  
  MSGBUS.commands.setHandler 'mainpage:init', () ->
    initialize_page()
    