import Backbone from 'backbone'
import Marionette from 'backbone.marionette'
import tc from 'teacup'
import ms from 'ms'

import navigate_to_url from 'tbirds/util/navigate-to-url'
import TopApp from 'tbirds/top-app'
import objectEmpty from 'tbirds/util/object-empty'

import './base'
import FooterView from './footerview'

pkg = require '../../package.json'
pkgmodel = new Backbone.Model pkg

import MainAppConfig from './index-config'

MainChannel = Backbone.Radio.channel 'global'
MessageChannel = Backbone.Radio.channel 'messages'

show_footer = ->
  view = new FooterView
    model: pkgmodel
  footer_region = app.getView().getRegion 'footer'
  footer_region.show view

app = new TopApp
  appConfig: MainAppConfig

if __DEV__
  # DEBUG attach app to window
  window.App = app

# register the main router
MainChannel.request 'main:app:route'

app.on 'before:start', ->
  #theme = MainChannel.request 'main:app:get-theme'
  #theme = if theme then theme else 'vanilla'
  #MainChannel.request 'main:app:switch-theme', theme
  if __DEV__
    console.log "before:start"
app.on 'start', ->
  #doSomething = ->
  #  console.log "Doing something"
  #setInterval doSomething, ms, '10s'
  if __DEV__
    console.log "app.on start called"
    
app.start
  state:
    currentUser: null
  
export default app


