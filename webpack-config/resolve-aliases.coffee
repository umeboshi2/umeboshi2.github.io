# webpack config resolve.alias
path = require 'path'
module.exports =
  jquery: 'jquery/src/jquery'
  'bootstrap-fileinput-css': 'bootstrap-fileinput/css/fileinput.min.css'
  'bootstrap-fileinput-js': 'bootstrap-fileinput/js/fileinput.min.js'
  tablednd: 'TableDnD/js/jquery.tablednd.js'
  request: 'browser-request'
  'tag-it': 'tag-it/js/tag-it.js'
  'radio-shim': path.join __dirname, 'radio-shim.coffee'
  common: path.join __dirname, '../coffee/common'
  # FIXME: this should be resolved otherwise
  backbone: 'backbone.marionette/node_modules/backbone/backbone.js'
  underscore: 'backbone.marionette/node_modules/underscore/underscore.js'
  
