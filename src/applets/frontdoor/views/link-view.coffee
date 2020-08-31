import Backbone from 'backbone'
import Marionette from 'backbone.marionette'
import tc from 'teacup'
import marked from 'marked'
import $ from 'jquery'
import moment from 'moment'

{ navigate_to_url } = require 'tbirds/util/navigate-to-url'

MainChannel = Backbone.Radio.channel 'global'

class LinkEntryView extends Marionette.View
  tagName: 'p'
  template: tc.renderable (event) ->
    tc.text moment.utc(event.start).format("MMMM D, YYYY")
    tc.text ", "
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
      

class LinkView extends Marionette.View
  templateContext: ->
    viewTitle: @getOption 'title'
  template: tc.renderable (model) ->
    tc.div ->
      tc.h3 '.view-header', model.viewTitle
      tc.div '.events-container'
  ui:
    viewHeader: '.view-header'
    events: '.events-container'
  regions:
    events: '@ui.events'
  onRender: ->
    view = new Marionette.CollectionView
      collection: new Backbone.Collection @model.get('events')
      viewComparator: 'start'
      childView: LinkEntryView
    @showChildView 'events', view
    
    
export default LinkView

