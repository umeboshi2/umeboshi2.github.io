import Backbone from 'backbone'
import Marionette from 'backbone.marionette'
import TkApplet from 'tbirds/tkapplet'

import Controller from './controller'

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

export default Applet
