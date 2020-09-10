import Backbone from 'backbone'
import Marionette from 'backbone.marionette'
import TkApplet from 'tbirds/tkapplet'

import Controller from './controller'

MainChannel = Backbone.Radio.channel 'global'
AppChannel = Backbone.Radio.channel 'frontdoor'

appletEntries = [
  {
    label: "Index"
    url: "#crown"
    icon: '.fa.fa-list'
  },{
    label: "moviedb"
    url: "#moviedb"
    icon: '.fa.fa-video-camera'
  },{
    label: "tvmaze"
    url: "#tvmaze"
    icon: '.fa.fa-television'
  },{
    label: "bumblr"
    url: "#bumblr"
    icon: '.fa.fa-photo'
  },{
    label: "Internet Archive"
    url: "#netark"
    icon: '.fa.fa-wrench'
  },{
    label: "workshop"
    url: "#workshop"
    icon: '.fa.fa-wrench'
  }
]

class Router extends Marionette.AppRouter
  appRoutes:
    # handle empty route
    '': 'viewIndex'
    'frontdoor': 'viewIndex'
    'pages/*name': 'viewPage'
    'frontdoor/dbadmin': 'viewDbAdmin'
    
class Applet extends TkApplet
  Controller: Controller
  Router: Router
  appletEntries: [
    {
      label: 'Main Menu'
      menu: appletEntries
    }
  ]
  
export default Applet
