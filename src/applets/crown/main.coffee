import Backbone from 'backbone'
import Marionette from 'backbone.marionette'
import AppRouter from 'marionette.approuter'
import TkApplet from 'tbirds/tkapplet'
import capitalize from 'tbirds/util/capitalize'

import Controller from './controller'

appName = 'crown'

MainChannel = Backbone.Radio.channel 'global'
AppChannel = Backbone.Radio.channel appName


appletMenu = [
  {
    label: 'Main'
    url: '#crown'
    icon: '.fa.fa-star'
  },{
    label: 'RSS'
    url: '#crown/rss'
    icon: '.fa.fa-quora'
  }
  ]

class Router extends AppRouter
  channelName: appName
  appRoutes:
    'crown': 'viewIndex'
    'crown/rss': 'viewRSS'
    
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
