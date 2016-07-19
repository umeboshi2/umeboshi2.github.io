Backbone = require 'backbone'
Marionette = require 'backbone.marionette'

Util = require 'apputil'
BootStrapAppRouter = require 'bootstrap_router'

Controller = require './controller'


MainChannel = Backbone.Radio.channel 'global'
ResourceChannel = Backbone.Radio.channel 'resources'

class Router extends BootStrapAppRouter
  appRoutes:
    '': 'frontdoor'
    'frontdoor': 'frontdoor'
    'frontdoor/view': 'frontdoor'
    'frontdoor/view/:name': 'view_page'

MainChannel.reply 'applet:frontdoor:route', () ->
  #console.log "frontdoor:route being handled"
  controller = new Controller MainChannel
  #controller.root_doc = MainChannel.request 'main:app:get-document', 'startdoc'
  controller.root_doc = ResourceChannel.request 'get-document', 'startdoc'
  router = new Router
    controller: controller

