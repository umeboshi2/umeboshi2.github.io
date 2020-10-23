import { Radio } from 'backbone'

import createMainApp from 'tbirds/start-main-app'
import indexModels from 'common/index-models'

import './base'

import commonSchema from 'common/dbschema'
import tvmazeSchema from '../applets/tvmaze/dbschema'
import pmcSchema from 'applets/pmc/dbschema'

import MainAppConfig from './index-config'

MainChannel = Radio.channel 'global'

app = createMainApp MainAppConfig

if __DEV__
  window.App = app

###
app.on 'before:start', ->
  if __DEV__ and DEBUG
    console.log "before:start"
app.on 'start', ->
  if __DEV__ and DEBUG
    console.log "app.on start called"
###

schemas =
  common: commonSchema
  tvmaze: tvmazeSchema
  pmc: pmcSchema
  
dbConns = {}

promises = Object.keys(schemas).map (key) ->
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
