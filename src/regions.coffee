Backbone = require 'backbone'
Marionette = require 'marionette'

MainChannel = Backbone.Wreqr.radio.channel 'global'
global_request = MainChannel.reqres.request

class BootstrapModalRegion extends Backbone.Marionette.Region
  el: '#modal'
      
  getEl: (selector) ->
    $el = $ selector
    $el.attr 'class', 'modal'
    #$el.attr 'class', 'modal fade'
    $el
    
  show: (view) ->
    super view
    @$el.modal
      backdrop: false
    @$el.modal 'show'
      

exports =
  BootstrapModalRegion: BootstrapModalRegion
  
