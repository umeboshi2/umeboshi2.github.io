import AppRouter from 'marionette.approuter'
import TkApplet from 'tbirds/tkapplet'
import capitalize from 'tbirds/util/capitalize'

import './dbchannel'
import Controller from './controller'

appName = 'netark'

appletMenu = [
  {
    label: 'List'
    url: '#netark'
    icon: '.fa.fa-list'
  },{
    label: 'SciFi Movies'
    url: '#netark/scifi/list'
    icon: '.fa.fa-film'
  },{
    label: 'Search'
    url: '#netark/search'
    icon: '.fa.fa-search'
  }
]

class Router extends AppRouter
  channelName: appName
  appRoutes:
    'netark': 'viewIndex'
    'netark/otrr/list': 'listOtrr'
    'netark/librivox/list': 'listLibrivox'
    'netark/scifi/list': 'listSciFiMovies'
    'netark/misc/list': 'listMiscStuff'
    'netark/view/:id': 'viewMetadata'
    'netark/search': 'searchView'
    
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
