import Backbone from 'backbone'
import Marionette from 'backbone.marionette'
import TkApplet from 'tbirds/tkapplet'
import capitalize from 'tbirds/util/capitalize'
import AppRouter from 'marionette.approuter'

import Controller from './controller'

appName = 'taxes'

MainChannel = Backbone.Radio.channel 'global'
AppChannel = Backbone.Radio.channel appName

appletMenu = [
  {
    label: 'Main Tax Page'
    url: '#taxes'
    icon: '.fa.fa-newspaper-o'
  }
  ]

class Router extends AppRouter
  channelName: appName
  appRoutes:
    'taxes': 'viewIndex'
    'taxes/pages/*name': 'viewPage'
    
    
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