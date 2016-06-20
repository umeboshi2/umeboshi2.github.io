# webpack config module.entry
vendor = require './vendor'

module.exports =
  vendor: vendor
  app: './src/application.coffee'
  app2: './src/application.coffee'
  
