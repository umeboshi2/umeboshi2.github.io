import { View as MnView } from 'backbone.marionette'
import tc from 'teacup'

class FooterView extends MnView
  template: tc.renderable (model) ->
    #version_style = '.col-md-2.col-md-offset-10'
    #timestyle = '.col-md-2.col-md-offset-1'
    tc.div '.col-md-10.col-md-offset-1', ->
      tc.table '.table', ->
        tc.tr ->
          tc.td "Some message here"
          tc.td "Time expired for #{model.token.name}"
          tc.td "Version: #{model.version}"
export default FooterView
