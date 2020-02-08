import Backbone from 'backbone'
import Marionette from 'backbone.marionette'
import TkApplet from 'tbirds/tkapplet'
import capitalize from 'tbirds/util/capitalize'
import AppRouter from 'marionette.approuter'

import Controller from './controller'

appName = 'govt'

MainChannel = Backbone.Radio.channel 'global'
AppChannel = Backbone.Radio.channel appName

appletMenu = [
  {
    label: 'Main Tax Page'
    url: '#govt'
    icon: '.fa.fa-newspaper-o'
  }
  ]

class Router extends AppRouter
  channelName: appName
  appRoutes:
    'govt': 'viewIndex'
    'govt/pages/*name': 'viewPage'
    
    
class Applet extends TkApplet
  Controller: Controller
  Router: Router
  appletEntries: [
    {
      label: "#{capitalize appName} Menu"
      menu: appletMenu
    }
  ]

export default Applet
