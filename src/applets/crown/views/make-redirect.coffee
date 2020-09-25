import { Model, Radio} from 'backbone'
import { View as MnView } from 'backbone.marionette'
import tc from 'teacup'
import { encode } from 'url-safe-base64'

import make_field_input_ui from 'tbirds/util/make-field-input-ui'
{ form_group_input_div } = require 'tbirds/templates/forms'

MessageChannel = Radio.channel 'messages'

class MainView extends MnView
  fieldList: ['url']
  template: tc.renderable ->
    tc.div '.text-center.listview-header', ->
      tc.text "Create Redirect Link"
    tc.div ->
      tc.p ->
        tc.text "This is where you create an encoded link to help mitigate "
        tc.text "censorship."
    tc.button ".copy-btn.btn.btn-outline-warning", "copy"
    tc.span '.encoded-url'
    form_group_input_div
      input_id: 'url'
      label: 'URL'
      input_attributes:
        name: 'url'
        placeholder: "Please type or paste a url"
  ui: ->
    uiobject = make_field_input_ui @fieldList
    uiobject.encoded = '.encoded-url'
    uiobject.copyBtn = '.copy-btn'
    return uiobject
  events:
    'input @ui.url': 'updateModel'
    'click @ui.copyBtn': 'copyBtnClicked'
  createModel: ->
    return new Model
  generateURL: ->
    loc = window.location
    r = encode btoa @ui.url.val()
    path = loc?.pathname or '/'
    url = "#{loc.protocol}://#{loc.host}#{path}#crown/redirect/#{r}"
    return url
  updateModel: ->
    url = @generateURL()
    @ui.encoded.text url
  copyBtnClicked: ->
    MessageChannel.request 'info', "Copy to clipboard not enabled yet."

export default MainView
