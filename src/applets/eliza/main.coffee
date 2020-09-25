import TkApplet from 'tbirds/tkapplet'
import capitalize from 'tbirds/util/capitalize'
import AppRouter from 'marionette.approuter'

import Controller from './controller'

appName = 'eliza'

appletMenu = [
  {
    label: 'Main'
    url: '#eliza'
    icon: '.fa.fa-terminal.text-light.bg-dark'
  }
  ]

class Router extends AppRouter
  channelName: appName
  appRoutes:
    'eliza': 'viewIndex'
    
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
