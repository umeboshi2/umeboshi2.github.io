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
    label: 'List Shows'
    url: '#tvmaze/shows'
    icon: '.fa.fa-list'
  },{
    label: 'Search Show'
    url: '#tvmaze/searchshow'
    icon: '.fa.fa-search'
  },{
    label: 'Calendar'
    url: '#tvmaze/calendar'
    icon: '.fa.fa-calendar'
  }
  ]

class Router extends Marionette.AppRouter
  appRoutes:
    'tvmaze': 'viewIndex'
    'tvmaze/searchshow': 'viewSearchShow'
    'tvmaze/shows': 'viewShowList'
    'tvmaze/shows/flat': 'viewShowListFlat'
    'tvmaze/shows/view/:id' : 'viewShow'
    'tvmaze/view/show/:id' : 'viewShowNoNo'
    
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
