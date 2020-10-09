import Backbone from 'backbone'
import Marionette from 'backbone.marionette'
import AppRouter from 'marionette.approuter'
import TkApplet from 'tbirds/tkapplet'
import capitalize from 'tbirds/util/capitalize'

import Controller from './controller'

appName = 'xyzzy'

MainChannel = Backbone.Radio.channel 'global'
AppChannel = Backbone.Radio.channel appName


appletMenu = [
  {
    label: 'Main'
    url: '#xyzzy'
    icon: '.fa.fa-star'
  },{
    label: 'Redirect Link'
    url: '#xyzzy/make-redirect'
    icon: '.fa.fa-hand-o-right'
  }
  ]

class Router extends AppRouter
  channelName: appName
  appRoutes:
    'xyzzy': 'makeRedirect'
    'xyzzy/go/:name': 'viewRedirect'
    'xyzzy/create': 'makeRedirect'
    
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
