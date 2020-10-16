import $ from 'jquery'
import { Radio } from 'backbone'
import { capitalize } from 'lodash'
import AppRouter from 'marionette.approuter'

import TkApplet from 'tbirds/tkapplet'
import Controller from './controller'
import Worker from 'worker-loader!./worker'

appName = 'tvmaze'

MainChannel = Radio.channel 'global'
AppChannel = Radio.channel appName

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
    label: 'Import Sample Data'
    url: '#tvmaze/import-sample-data'
    icon: '.fa.fa-download'
  },{
    label: 'Calendar'
    url: '#tvmaze/calendar'
    icon: '.fa.fa-calendar'
  }
  ]

if __DEV__
  worker = new Worker()
  worker.onmessage = (event) ->
    console.log event.data
  
class Router extends AppRouter
  channelName: appName
  appRoutes:
    'tvmaze': 'viewIndex'
    'tvmaze/searchshow': 'viewSearchShow'
    'tvmaze/shows': 'viewShowList'
    'tvmaze/shows/flat': 'viewShowListFlat'
    'tvmaze/shows/view/:id' : 'viewShow'
    'tvmaze/import-sample-data': 'importSampleData'
    'tvmaze/calendar': 'viewCalendar'
    
class Applet extends TkApplet
  Controller: Controller
  Router: Router
  appletEntries: [
    {
      label: "#{capitalize appName} Menu"
      menu: appletMenu
    },{
      label: "List Shows"
      url: "#tvmaze/shows"
    }
  ]


current_calendar_date = undefined
AppChannel.reply 'maincalendar:set-date', (cal) ->
  current_calendar_date = cal.fullCalendar 'getDate'

AppChannel.reply 'maincalendar:get-date', () ->
  current_calendar_date

export default Applet
