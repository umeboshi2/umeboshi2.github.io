import { Model, Radio} from 'backbone'
import { View as MnView } from 'backbone.marionette'
import tc from 'teacup'
import { encode } from 'url-safe-base64'
import { extend } from 'underscore'
import qs from 'qs'

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
        tc.text "censorship.  Selecting auto load will automatically redirect"
        tc.text " the user after 10 seconds"
    tc.button ".copy-btn.btn.btn-outline-warning", "copy"
    tc.span '.encoded-url'
    form_group_input_div
      input_id: 'url'
      label: 'URL'
      input_attributes:
        name: 'url'
        placeholder: "Please type or paste a url"
    tc.div '.form-group.form-check', ->
      tc.input '.auto-load.form-check-input', type:'checkbox'
      tc.label '.form-check-label', 'Auto Load'
  ui: ->
    uiobject = make_field_input_ui @fieldList
    extend uiobject,
      encoded: '.encoded-url'
      copyBtn: '.copy-btn'
      autoLoad: '.auto-load'
    return uiobject
  events:
    'input @ui.url': 'updateModel'
    'input @ui.autoLoad': 'updateModel'
    'click @ui.copyBtn': 'copyBtnClicked'
  createModel: ->
    return new Model
  generateURL: ->
    loc = window.location
    r = encode btoa @ui.url.val()
    path = loc?.pathname or '/'
    url = "#{loc.protocol}://#{loc.host}#{path}"
    hash= "#crown/redirect/#{r}"
    checked = @ui.autoLoad.is ':checked'
    console.log "@ui.autoLoad", checked
    url = "#{url}?#{qs.stringify auto:checked}#{hash}"
    return url
  updateModel: ->
    url = @generateURL()
    @ui.encoded.text url
  copyBtnClicked: ->
    url = @generateURL()
    navigator.clipboard.writeText url
    .then ->
      MessageChannel.request 'warning', "Copied to clipboard"
      
export default MainView
