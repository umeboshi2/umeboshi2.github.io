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
    label: 'CoH Calendar'
    url: '#crown/calendar/coh'
    icon: '.fa.fa-calendar'
  },{
    label: 'Events'
    url: '#crown/events'
    icon: '.fa.fa-calendar'
  },{
    label: 'Redirect Link'
    url: '#crown/make-redirect'
    icon: '.fa.fa-hand-o-right'
  }
  ]

class Router extends AppRouter
  channelName: appName
  appRoutes:
    'crown': 'viewIndex'
    'crown/rss': 'viewRSS'
    'crown/calendar/coh': 'viewCoHCalendar'
    'crown/calendar/news': 'viewNewsCalendar'
    'crown/events': 'viewEvents'
    'crown/redirect/:name': 'viewRedirect'
    'crown/make-redirect': 'makeRedirect'
    
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
