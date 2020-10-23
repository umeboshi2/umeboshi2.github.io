import AppRouter from 'tbirds/routers/approuter'
import TkApplet from 'tbirds/tkapplet'

import Controller from './controller'

appletEntries = [
  {
    label: "Index"
    url: "#crown"
    icon: '.fa.fa-list'
  },{
    label: 'dbAdmin'
    url: "#frontdoor/dbadmin"
    icon: '.fa.fa-database'
  },{
    label: "moviedb"
    url: "#moviedb"
    icon: '.fa.fa-video-camera'
  },{
    label: "tvmaze"
    url: "#tvmaze"
    icon: '.fa.fa-television'
  },{
    label: "Internet Archive"
    url: "#netark"
    icon: '.fa.fa-wrench'
  },{
    label: "Eliza"
    url: "#eliza"
    icon: '.fa.fa-terminal'
  },{
    label: "Topic Colors"
    url: "#frontdoor/topic-colors"
    icon: '.fa.fa-palette'
  }
]


if __DEV__
  appletEntries.push
    label: "workshop"
    url: "#workshop"
    icon: '.fa.fa-wrench'
  appletEntries.push
    label: "bumblr"
    url: "#bumblr"
    icon: '.fa.fa-photo'
  
class Router extends AppRouter
  appRoutes:
    # handle empty route
    '': 'viewIndex'
    'frontdoor': 'viewIndex'
    'pages/*name': 'viewPage'
    'frontdoor/dbadmin': 'viewDbAdmin'
    'frontdoor/topic-colors': 'viewTopicColors'
    
class Applet extends TkApplet
  Controller: Controller
  Router: Router
  appletEntries: [
    {
      label: 'Main Menu'
      menu: appletEntries
    }
  ]
console.log "frontdoor.main imported"
  
export default Applet
