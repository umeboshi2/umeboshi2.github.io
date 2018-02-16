$= require 'jquery'
_ = require 'underscore'
Backbone = require 'backbone'
Marionette = require 'backbone.marionette'

require 'bootstrap'

if __DEV__
  console.warn "__DEV__", __DEV__, "DEBUG", DEBUG
  Backbone.Radio.DEBUG = true

require 'tbirds/applet-router'
IsEscapeModal = require 'tbirds/behaviors/is-escape-modal'

MainChannel = Backbone.Radio.channel 'global'
MessageChannel = Backbone.Radio.channel 'messages'

if __DEV__
  require '../inspector'
  
MainChannel.reply 'main:app:switch-theme', (theme) ->
  href = "/assets/stylesheets/bootstrap-#{theme}.css"
  ss = $ 'head link[href^="/assets/stylesheets/bootstrap-"]'
  ss.attr 'href', href

MainChannel.reply 'main:app:set-theme', (theme) ->
  localStorage.setItem 'main-theme', theme

MainChannel.reply 'main:app:get-theme', ->
  localStorage.getItem 'main-theme'

  
export_to_file = (options) ->
  data = encodeURIComponent(options.data)
  link = "#{options.type},#{data}"
  filename = options.filename or "exported"
  a = document.createElement 'a'
  a.id = options.el_id or 'exported-file-anchor'
  a.href = link
  a.download = filename
  a.innerHTML = "Download #{filename}"
  a.style.display = 'none'
  document.body.appendChild a
  a.click()
  document.body.removeChild a
  
MainChannel.reply 'export-to-file', (options) ->
  export_to_file options
  

class BaseModalView extends Marionette.View
  behaviors: [IsEscapeModal]
  ui:
    close_btn: '#close-modal div'
    
MainChannel.reply 'main:app:BaseModalView', ->
  BaseModalView
  
show_modal = (view, backdrop=false) ->
  app = MainChannel.request 'main:app:object'
  modal_region = app.getView().getRegion 'modal'
  modal_region.backdrop = backdrop
  modal_region.show view

MainChannel.reply 'show-modal', (view, backdrop=false) ->
  console.warn 'show-modal', backdrop
  show_modal view, false
  


module.exports = {}



