import Backbone from 'backbone'
import Marionette from 'backbone.marionette'
import TkApplet from 'tbirds/tkapplet'
import capitalize from 'tbirds/util/capitalize'

import Controller from './controller'

appName = 'tvmaze'

MainChannel = Backbone.Radio.channel 'global'
AppChannel = Backbone.Radio.channel appName


appletMenu = [
  {
    label: 'Search Show'
    url: '#tvmaze/searchshow'
    icon: '.fa.fa-search'
  }
  {
    label: 'Calendar'
    url: '#tvmaze/calendar'
    icon: '.fa.fa-calendar'
  }
  ]

class Router extends Marionette.AppRouter
  appRoutes:
    'tvmaze': 'view_index'
    'tvmaze/searchshow': 'viewSearchShow'
    'tvmaze/view/show/:id' : 'viewShow'
    
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
