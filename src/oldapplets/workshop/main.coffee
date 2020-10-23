import Backbone from 'backbone'
import Marionette from 'backbone.marionette'
import AppRouter from 'tbirds/routers/approuter'
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
    label: 'Corona Scraper Today'
    url: '#workshop/scraper/today'
    icon: '.fa.fa-world'
  },{
    label: 'CoH Calendar'
    url: '#workshop/calendar/coh'
    icon: '.fa.fa-calendar'
  }
  ]

class Router extends AppRouter
  channelName: appName
  appRoutes:
    'workshop': 'viewIndex'
    'workshop/rss': 'viewRSS'
    'workshop/calendar/coh': 'viewCoHCalendar'
    'workshop/scraper/today': 'viewScraperToday'
    
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
