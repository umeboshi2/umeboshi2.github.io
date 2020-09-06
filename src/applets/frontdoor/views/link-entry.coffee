import Backbone from 'backbone'
import Marionette from 'backbone.marionette'
import tc from 'teacup'
import marked from 'marked'
import $ from 'jquery'
import moment from 'moment'
import _ from 'underscore'

MainChannel = Backbone.Radio.channel 'global'

class LinkEntryView extends Marionette.View
  tagName: 'p'
  template: tc.renderable (event) ->
    tc.text moment.utc(event.start).format("MMMM D, YYYY")
    tc.text ", "
    if event?.pretext
      tc.text event.pretext
      tc.text " "
    if event?.journal
      tc.text event.journal
      tc.text ", "
    if event?.authors
      tc.text event.authors
      tc.text ", "
    tc.a href:event.link, event.title
    if event?.extra?.length
      for item in event.extra
        tc.text ", "
        tc.a href: item.link, item.name
      

export default LinkEntryView

