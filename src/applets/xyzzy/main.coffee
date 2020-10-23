import { capitalize } from 'lodash'
import { Radio } from 'backbone'
import AppRouter from 'tbirds/routers/approuter'
import TkApplet from 'tbirds/tkapplet'

import Controller from './controller'

appName = 'xyzzy'

MainChannel = Radio.channel 'global'
AppChannel = Radio.channel appName


appletMenu = [
  {
    label: 'Main'
    url: '#xyzzy'
    icon: '.fa.fa-star'
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
