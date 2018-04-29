import Backbone from 'backbone'
import Marionette from 'backbone.marionette'
import TkApplet from 'tbirds/tkapplet'
import capitalize from 'tbirds/util/capitalize'

import Controller from './controller'
import './dbchannel'

appName = 'moviedb'

MainChannel = Backbone.Radio.channel 'global'
AppChannel = Backbone.Radio.channel appName


appletMenu = [
  {
    button: '#list-button'
    label: 'List'
    url: '#moviedb'
    icon: '.fa.fa-list'
  }
  {
    button: '#calendar-button'
    label: 'Calendar'
    url: '#moviedb/calendar'
    icon: '.fa.fa-calendar'
  }
  ]

class Router extends Marionette.AppRouter
  appRoutes:
    'moviedb': 'view_index'
    'moviedb/tv/shows/view/:id': 'viewTvShow'
    
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
