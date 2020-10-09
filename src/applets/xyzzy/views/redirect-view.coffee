import { Radio } from 'backbone'
import { View as MnView } from 'backbone.marionette'
import tc from 'teacup'
import { delay } from 'underscore'
import ms from 'ms'
import qs from 'qs'

MessageChannel = Radio.channel 'messages'

class MainView extends MnView
  template: tc.renderable (model) ->
    tc.div '..text-center.listview-header', ->
      tc.text "Redirect View"
    tc.div ->
      tc.p "This view is a simple redirect to: #{model.url}"
      tc.a '.direct-link', href:model.url, "Direct link"
      tc.text " | "
      tc.a '.new-windiw-link', href:model.url, target:'_blank', ->
        tc.text"(Open in new window/tab)"
    tc.div ->
      tc.a href:'#xyzzy', "Create a redirect link"
  ui:
    direct: '.direct-link'
    newTab: '.new-windiw-link'
    header: '.listview-header'
  onRender: ->
    if @model?
      url = @model.get('url')
    # https://stackoverflow.com/questions/5811122/how-to-trigger-a-click-on-a-link-using-jquery#comment32919832_5811122
    # Perform the "click" on the DOM element insteat of the jquery object
      parsed = qs.parse window.location.search.substring(1)
      auto = parsed.auto == 'true'
      if url and auto
        MessageChannel.request 'info', "You will be automatically redirected in 10 seconds" # noqa
        delay =>
          @ui.direct.get(0).click()
        , ms '10s'

export default MainView
