import Backbone from 'backbone'
import Marionette from 'backbone.marionette'
import tc from 'teacup'
import ms from 'ms'

import navigate_to_url from 'tbirds/util/navigate-to-url'
import TopApp from 'tbirds/top-app'
import createMainApp from 'tbirds/start-main-app'
import objectEmpty from 'tbirds/util/object-empty'

import indexModels from 'common/index-models'

import './base'

import ebcsvSchema from '../applets/ebcsv/dbschema'
import bumblrSchema from '../applets/bumblr/dbschema'
import tvmazeSchema from '../applets/tvmaze/dbschema'
import pmcSchema from 'applets/pmc/dbschema'

import MainAppConfig from './index-config'

MainChannel = Backbone.Radio.channel 'global'
MessageChannel = Backbone.Radio.channel 'messages'

app = createMainApp MainAppConfig

if __DEV__
  # DEBUG attach app to window
  window.App = app

# register the main router
MainChannel.request 'main:app:create-main-router'

app.on 'before:start', ->
  #theme = MainChannel.request 'main:app:get-theme'
  #theme = if theme then theme else 'vanilla'
  #MainChannel.request 'main:app:switch-theme', theme
  if __DEV__ and DEBUG
    console.log "before:start"
app.on 'start', ->
  #doSomething = ->
  #  console.log "Doing something"
  #setInterval doSomething, ms, '10s'
  if __DEV__ and DEBUG
    console.log "app.on start called"


schemas =
  ebcsv: ebcsvSchema
  bumblr: bumblrSchema
  tvmaze: tvmazeSchema
  pmc: pmcSchema
  
dbConns = {}

promises = Object.keys(schemas).map (key, index, array) ->
  schemas[key].connect().then (db) ->
    dbConns[key] = db
    if __DEV__ and DEBUG
      console.log "Connected to #{key} database."

# Add fetching index models to app startup
for name of indexModels
  response = indexModels[name].fetch()
  promises.push response
  

Promise.all(promises).then ->
  app.start
    state:
      currentUser: null
      dbConn: dbConns
      indexModels: indexModels
  MainChannel.reply 'main:app:dbConn', (name) ->
    return app.getState('dbConn')[name]
export default app
