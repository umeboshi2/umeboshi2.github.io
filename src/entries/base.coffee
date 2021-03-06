import 'babel-polyfill'
import $ from 'jquery'
import { Radio, Model } from 'backbone'
import { View as MnView } from 'backbone.marionette'

import 'bootstrap'
import 'font-awesome/scss/font-awesome.scss'
# FIXME need better way to resolve tbirds sass
if not __useCssModules__
  if __DEV__
    require '../../node_modules/tbirds/sass/dark.scss'
  else
    # require '../../node_modules/tbirds/sass/cornsilk-purple.scss'
    require '../../node_modules/tbirds/sass/dark.scss'
else
  require '../../node_modules/tbirds/sass/initial.scss'

import "es6-promise/auto"
import stringEndsWith from 'tbirds/util/polyfills/str-endswith'
import stringStartsWith from 'tbirds/util/polyfills/str-startswith'
# use polyfill for String.endsWith if needed
if not String.prototype?.endsWith
  String.prototype.endsWith = stringEndsWith
if not String.prototype.startsWith
  String.prototype.startsWith = stringStartsWith
  



if __DEV__
  console.warn "__DEV__", __DEV__, "DEBUG", DEBUG
  Radio.DEBUG = true

IsEscapeModal = require('tbirds/behaviors/is-escape-modal').default


import '../common/static-documents'

MainChannel = Radio.channel 'global'
MessageChannel = Radio.channel 'messages'

$(document).ajaxError (event, xhr) ->
  if __DEV__
    console.warn "ajaxError event", event
    console.warn "ajaxError xhr" , xhr
  MessageChannel.request 'xhr-error', xhr


#if __DEV__
#  require '../inspector'
  
currentUser = new Model
  isGuest: true
  name: 'Guest'
  fullname: 'Guest User'
  groups: []
    
MainChannel.reply 'main:app:currentUser', ->
  return currentUser

class BaseModalView extends MnView
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
  show_modal view, backdrop
  

