import { Radio } from 'backbone'
import AppRouter from 'marionette.approuter'
import TkApplet from 'tbirds/tkapplet'
import capitalize from 'tbirds/util/capitalize'

import Controller from './controller'

appName = 'crown'

MainChannel = Radio.channel 'global'
AppChannel = Radio.channel appName


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
  },{
    label: 'Subtopics'
    url: '#crown/topics'
    icon: '.fa.fa-globe'
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
    'crown/topics': 'viewTopics'
    
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
