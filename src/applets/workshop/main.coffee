import Backbone from 'backbone'
import Marionette from 'backbone.marionette'
import AppRouter from 'marionette.approuter'
import TkApplet from 'tbirds/tkapplet'
import capitalize from 'tbirds/util/capitalize'

import Controller from './controller'

appName = 'workshop'

MainChannel = Backbone.Radio.channel 'global'
AppChannel = Backbone.Radio.channel appName


appletMenu = [
  {
    label: 'Main'
    url: '#workshop'
    icon: '.fa.fa-star'
  },{
    label: 'CoH Calendar'
    url: '#workshop/calendar/coh'
    icon: '.fa.fa-calendar'
  },{
    label: 'News Calendar'
    url: '#workshop/calendar/news'
    icon: '.fa.fa-calendar'
  },{
    label: 'Events'
    url: '#workshop/events'
    icon: '.fa.fa-calendar'
  }
  ]

class Router extends AppRouter
  channelName: appName
  appRoutes:
    'workshop': 'viewIndex'
    'workshop/rss': 'viewRSS'
    'workshop/calendar/coh': 'viewCoHCalendar'
    
class Applet extends TkApplet
  Controller: Controller
  Router: Router
  appletEntries: [
    {
      label: "App Menu"
      menu: appletMenu
    }
  ]

export default Applet
