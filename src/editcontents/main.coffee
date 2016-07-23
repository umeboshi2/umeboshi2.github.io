Backbone = require 'backbone'
Marionette = require 'backbone.marionette'

Util = require 'apputil'
BootStrapAppRouter = require 'bootstrap_router'

Controller = require './controller'

MainChannel = Backbone.Radio.channel 'global'
ResourceChannel = Backbone.Radio.channel 'resources'



class Router extends BootStrapAppRouter
  appRoutes:
    'editor': 'list_pages'
    'editor/newpage': 'new_page'
    'editor/edit/:name': 'edit_page'
    
MainChannel.reply 'applet:editcontents:route', () ->
  console.log "editcontents:route being handled"
  controller = new Controller MainChannel
  #controller.root_doc = MainChannel.request 'main:app:current-document'
  controller.root_doc = ResourceChannel.request 'get-document', 'startdoc'
  router = new Router
    controller: controller

