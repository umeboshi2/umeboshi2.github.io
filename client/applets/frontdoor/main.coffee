Backbone = require 'backbone'
Marionette = require 'backbone.marionette'
TkApplet = require 'tbirds/tkapplet'

Controller = require './controller'

MainChannel = Backbone.Radio.channel 'global'
AppChannel = Backbone.Radio.channel 'frontdoor'

class Router extends Marionette.AppRouter
  appRoutes:
    '': 'viewIndex'
    'frontdoor': 'viewIndex'
    'frontdoor/themes': 'themeSwitcher'
    'pages/:name': 'viewPage'
    
class Applet extends TkApplet
  Controller: Controller
  Router: Router

module.exports = Applet
