Backbone = require 'backbone'
Marionette = require 'backbone.marionette'
require 'radio-shim'
  
require 'bootstrap'

#Models = require './models'
#Views = require './views'
AppModel = require './appmodel'
require './collections'

require 'bootstrap-fileinput-css'
require 'bootstrap-fileinput-js'

#require 'vie'


MainChannel = Backbone.Radio.channel 'global'

if __DEV__
  console.warn "__DEV__", __DEV__, "DEBUG", DEBUG
  Backbone.Radio.DEBUG = true

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

initialize_page = (app, root_doc) ->
  regions = MainChannel.request 'main:app:regions'
  appmodel = MainChannel.request 'main:app:appmodel'
  # create layout view
  layout = new Views.MainPageLayout
  # set the main layout view to create and show
  # the navbar when it is shown.  This assures us
  # that the $el is present in the DOM. 
  layout.on 'show', =>
    navbar = new Views.BootstrapNavBarView
      model: root_doc
    navbar_region = regions.get 'navbar'
    navbar_region.show navbar
    messages = new Views.MessagesView
      collection: MainChannel.request 'main:app:messages'
    messages_region = regions.get 'messages'
    messages_region.show messages
    
  # Show the main layout
  mainview = regions.get 'mainview'
  mainview.show layout



prepare_app = (app, appmodel, root_doc) ->
  regions = appmodel.get 'regions'
  if 'modal' of regions
    regions.modal = BootstrapModalRegion

  region_manager = new Backbone.Marionette.RegionManager
  region_manager.addRegions regions

  navbar = region_manager.get 'navbar'
  navbar.on 'show', =>
      #console.log "we have users for this app....."
      # trigger the display message to create
      # the user menu on the navbar
      MainChannel.trigger 'appregion:navbar:displayed'

  # set more main:app handlers
  MainChannel.reply 'main:app:object', ->
    app
  MainChannel.reply 'main:app:regions', ->
    region_manager
  MainChannel.reply 'main:app:get-region', (region) ->
    region_manager.get region

  # Prepare what happens to the app when .start() is called.
  app.on 'start', ->
    # build routes first
    frontdoor = appmodel.get 'frontdoor_app'
    MainChannel.request "applet:#{frontdoor}:route"
    for applet in appmodel.get 'applets'
      signal = "applet:#{applet.appname}:route"
      #console.log "create signal #{signal}"
      MainChannel.request signal
    # build main page layout
    MainChannel.request 'mainpage:init', appmodel, root_doc
    # start the approutes
    # the 'frontdoor_app' should handle the '' <blank>
    # route for the initial page.
    Backbone.history.start() unless Backbone.history.started


######################
# start app setup

# use a signal to request appmodel
MainChannel.reply 'main:app:appmodel', ->
  AppModel


MainChannel.reply 'mainpage:init', (appmodel, root_doc) =>
  # get the app object
  app = MainChannel.request 'main:app:object'
  # initialize the main view
  initialize_page app, root_doc
  # emit the main view is ready
  MainChannel.trigger 'mainpage:displayed'


MainChannel.on 'appregion:navbar:displayed', ->
  # this handler is useful if there are views that need to be
  # added to the navbar.  The navbar should have regions to attach
  # the views
  # --- example ---
  # view = new view
  # aregioun = MainChannel.request 'main:app:get-region', aregioun
  # aregioun.show view
  if __DEV__
    console.warn "__DEV__ navbar displayed"

# require applets
# Applets need to be loaded to provide
# urls for the app routers
# 
# FIXME - how to get this to work?
#for applet in AppModel.get 'applets'
#  window.appletfoo = applet
#  console.log "require #{applet.appname}/main"
#  require "#{applet.appname}/main"
#for applet in AppModel.get 'applets'
#  console.log "require #{applet.appname}/main"
#  require.context "#{applet.appname}", false, /^main.coffee$/
#  require "#{applet.appname}/main"
require 'frontdoor/main'
require 'editcontents/main'
 


app = new Marionette.Application()

if __DEV__
  # DEBUG attach app to window
  window.App = app
  console.warn "App is available #{app}"
  

# Start the Application
app.start()

# FIXME - remove this when things work better
docwriter = () ->
  document.write "Hello World!@!! #{app.channelName}<br/>"
setInterval docwriter, 5000


module.exports = app


