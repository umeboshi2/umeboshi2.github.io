{ start_with_user } = require './base'
Marionette = require 'backbone.marionette'
prepare_app = require 'agate/src/app-prepare'

appmodel = require './base-appmodel'

applets = 
  [
    {
      appname: 'hubby'
      name: 'Hubby'
      url: '#hubby'
      needUser: false
    }
    {
      appname: 'bumblr'
      name: 'Bumblr'
      url: '#bumblr'
      needUser: false
    }
  ]

if __DEV__
  applets.push
    appname: 'msleg'
    name: 'MSLeg'
    url: '#msleg'
    needUser: false

appmodel.set 'applets', applets

brand = appmodel.get 'brand'
brand.url = '#'
appmodel.set brand: brand
  
MainChannel = Backbone.Radio.channel 'global'
MessageChannel = Backbone.Radio.channel 'messages'
DocChannel = Backbone.Radio.channel 'static-documents'

applet_menus = [
  {
    label: 'Hubby'
    single_applet: 'hubby'
    url: '#hubby'
  }
  {
    label: 'Stuff'
    single_applet: false
    applets: ['bumblr']
  }
  ]

if __DEV__
  applet_menus[1].applets = ['bumblr', 'msleg']

appmodel.set 'applet_menus', applet_menus

#applets = {}
#for applet in appmodel.get 'applets'
#  applets[applet.appname] = applet
  

# use a signal to request appmodel
MainChannel.reply 'main:app:appmodel', ->
  appmodel

######################
# require applets
#require 'agate/src/applets/frontdoor/main'
require '../applets/frontdoor/main'
require '../applets/bumblr/main'
require '../applets/hubby/main'
if __DEV__
  require '../applets/msleg/main'

#app = new Marionette.Application()

app = prepare_app appmodel

if __DEV__
  # DEBUG attach app to window
  window.App = app

# start the app
app.start()

module.exports = app


