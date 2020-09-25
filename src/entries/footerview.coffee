import { Radio, Model } from 'backbone'
import { View as MnView } from 'backbone.marionette'
import tc from 'teacup'
import ms from 'ms'

import  './base'
import pkg from '../../package.json'

pkgmodel = new Model pkg

MainAppConfig = require './index-config'

MainChannel = Radio.channel 'global'
MessageChannel = Radio.channel 'messages'

class FooterView extends MnView
  template: tc.renderable (model) ->
    version_style = '.col-md-2.col-md-offset-10'
    timestyle = '.col-md-2.col-md-offset-1'
    tc.div '.col-md-10.col-md-offset-1', ->
      tc.table '.table', ->
        tc.tr ->
          tc.td "Some message here"
          tc.td "Time expired for #{model.token.name}"
          tc.td "Version: #{model.version}"
            
  
module.exports = FooterView



