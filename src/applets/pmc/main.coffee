import AppRouter from 'marionette.approuter'
import TkApplet from 'tbirds/tkapplet'
import capitalize from 'tbirds/util/capitalize'

import Controller from './controller'

appName = 'pmc'

appletMenu = [
  {
    label: 'Main'
    url: '#pmc'
    icon: '.fa.fa-star'
  },{
    label: 'Site Topics'
    url: '#pmc/topics/site'
    icon: '.fa.fa-sitemap'
  },{
    label: 'manageTopics'
    url: '#pmc/topics/manage'
    icon: '.fa.fa-sitemap'
  },{
    label: 'Search PMC'
    url: '#pmc/search/pmc'
    icon: '.fa.fa-sitemap'
  }
  ]

class Router extends AppRouter
  channelName: appName
  appRoutes:
    'pmc': 'viewIndex'
    'pmc/topics/site': 'viewSiteTopics'
    'pmc/topics/manage': 'manageTopics'
    'pmc/search/pmc': 'viewSearchPMC'
    'pmc/view/:id': 'viewPMCArticle'
    
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
