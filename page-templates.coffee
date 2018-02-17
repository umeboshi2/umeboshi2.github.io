tc = require 'teacup'

script = (src) ->
  tc.script
    type: 'text/javascript'
    charset:'utf-8'
    src: src

    

base_page = tc.renderable (appfile, manifest, theme) ->
  tc.doctype()
  tc.html xmlns:'http://www.w3.org/1999/xhtml', ->
    tc.head ->
      tc.meta charset:'utf-8'
      tc.meta name:'viewport', content:"width=device-width, initial-scale=1"
      tc.link rel:'stylesheet', type:'text/css',
      href:"assets/stylesheets/font-awesome.css"
      tc.link rel:'stylesheet', type:'text/css',
      href:"assets/stylesheets/bootstrap-#{theme}.css"
      if process.env.NODE_ENV == 'production'
        tc.link rel:'stylesheet', type:'text/css',
        href:"https://fonts.googleapis.com/css?family=Rambla"
        tc.link rel:'stylesheet', type:'text/css',
        href:"https://fonts.googleapis.com/css?family=Play"
        tc.link rel:'stylesheet', type:'text/css',
        href:"https://fonts.googleapis.com/css?family=Source+Sans+Pro"
    tc.body ->
      tc.div '#root-div.container-fluid', ->
        tc.div '.row', ->
          tc.div '.col-sm-2'
          tc.div '.col-sm-6.jumbotron', ->
            tc.h1 ->
              tc.text 'Loading ...'
              tc.i '.fa.fa-spinner.fa-spin'
          tc.div '.col-sm-2'
      chunks = ['vendor.js', 'common.js']
      for chunk in chunks
        tc.script
          type: 'text/javascript'
          charset: 'utf-8'
          src: "#{manifest.assetsPath}/#{manifest[chunk]}"
      tc.script
        type: 'text/javascript'
        charset: 'utf-8'
        # FIXME
        src: "#{manifest.assetsPath}/#{manifest[appfile]}"

index = (manifest, theme) ->
  base_page 'index.js', manifest, theme

template = (name) ->
  (manifest, theme) ->
    base_page "#{name}.js", manifest, theme
    
module.exports =
  index: template 'index'
  

  