tc = require 'teacup'

index = tc.renderable (manifest) ->
  tc.doctype()
  tc.html xmlns:'http://www.w3.org/1999/xhtml', ->
    tc.head ->
      tc.meta charset:'utf-8'
    tc.body ->
      tc.div '.container-fluid', ->
        tc.div '.row', ->
          tc.div '.col-sm-2'
          tc.div '.col-sm-6.jumbotron', ->
            tc.h1 ->
              tc.text 'Loading ...'
              tc.i '.fa.fa-spinner.fa-spin'
          tc.div '.col-sm-2'
      tc.script
        type: 'text/javascript'
        charset: 'utf-8'
        src: "build/#{manifest['app.js']}"
              
      
module.exports = index
