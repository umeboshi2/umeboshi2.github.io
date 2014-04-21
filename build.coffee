(
  baseUrl: 'javascripts/umeboshi'
  mainConfigFile: 'javascripts/umeboshi/main.js'
  paths:
    requireLib: '../../components/requirejs-bower/require'
    jquery: '../../components/jquery/jquery'
    underscore: '../../components/lodash/dist/lodash.compat'
    backbone: '../../components/backbone/backbone'
    marionette: '../../components/marionette.bundle/index'
    validation: '../../components/backbone.validation/dist/backbone-validation-amd'
    bootstrap: '../../components/bootstrap/dist/js/bootstrap'
    'jquery-ui': '../../components/jquery-ui/ui/jquery-ui'
    requirejs: '../../components/requirejs/require'
    text: '../../components/requirejs-text/text'
    teacup: '../../components/teacup/lib/teacup'
    marked: '../../components/marked/lib/marked'
    
  name: 'main'
  out: 'javascripts/umeboshi-built.js'
  include: ['requireLib']
  wrapShim: true
  optimize: 'uglify'
  uglify:
    no_mangle: false
    no_mangle_functions: false
)