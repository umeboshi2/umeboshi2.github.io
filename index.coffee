require './stylesheets/font-awesome.css'
require './stylesheets/styles.css'

require 'bootstrap'

tc = require 'teacup'
$ = require 'jquery'

button = tc.renderable () ->
  tc.div '#bb.btn.btn-default', ->
    tc.i '.fa.fa-bicycle'
    tc.text 'Halflings"'
    

document.write button()

window.bb = $('#bb')
bb.hide()
