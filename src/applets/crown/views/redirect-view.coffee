import { View as MnView } from 'backbone.marionette'
import tc from 'teacup'

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
  ui:
    direct: '.direct-link'
    newTab: '.new-windiw-link'
    header: '.listview-header'
  onRender: ->
    if @model?
      url = @model.get('url')
      if __DEV__
        console.log "URL IS", url
    # https://stackoverflow.com/questions/5811122/how-to-trigger-a-click-on-a-link-using-jquery#comment32919832_5811122
    # Perform the "click" on the DOM element insteat of the jquery object
      if url
        @ui.direct.get(0).click()

export default MainView
