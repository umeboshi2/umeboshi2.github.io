import { Collection, Radio } from 'backbone'
import { View as MnView, CollectionView } from 'backbone.marionette'
import tc from 'teacup'
import _ from 'underscore'

import LinkEntryView from 'common/link-entry-view'
import TopicsModal from './select-topics-modal'

MainChannel = Radio.channel 'global'
MessageChannel = Radio.channel 'messages'
AppChannel = Radio.channel 'frontdoor'

eventManager = AppChannel.request 'get-event-manager'

getTopics = (string) ->
  if not string?
    return []
  topics = (item.trim() for item in string.split(','))
  return topics
   
filterEvents = (events, topics) ->
  filtered = []
  for e in events
    if e?.topics
      if e.topics.typeOf is "string"
        msg  = "Use topic list instead of commas."
        MessageChannel.request "warning" , msg
        console.warn msg
        etopics = getTopics e.topics
      else
        etopics = e.topics
      everyTopic = _.every topics, (topic) ->
        return _.contains etopics, topic
      if everyTopic
        filtered.push e
  return filtered

filterEventsByTopics = (events, topics) ->
  filtered = []
  for e in events
    etopics = e.topics
    topics.forEach (topic) ->
      if _.contains etopics, topic
        filtered.push e
  return filtered


filterEventsNext = (options) ->
  o = options
  events = options.events
  

class LinkView extends MnView
  initializeOrig: (options) ->
    # the model is fetched, so the filtered option needs to
    # be a list of events filtered by the static topics.
    _.extend options,
      foo: 'bar'
    @mergeOptions options
    console.log 'options', options
  templateContext: ->
    viewTopics: @getOption 'topics'
    filtered: @getOption 'filtered'
  template: tc.renderable (model) ->
    tc.div ->
      tc.h3 '.view-header', ->
        tc.text model.title
        tc.text "   "
        tc.i '.toggle-events-btn.fa.fa-toggle-down.text-primary', type:'button'
        tc.i '.filter-events-btn.fa.fa-globe.text-warning', type:'button'
      tc.div '.events-container'
  ui:
    viewHeader: '.view-header'
    events: '.events-container'
    toggleEventsBtn: '.toggle-events-btn'
    filterEventsBtn: '.filter-events-btn'
  regions:
    events: '@ui.events'
  events:
    'click @ui.toggleEventsBtn': 'toggleEventsBtnClicked'
    'click @ui.filterEventsBtn': 'filterEventsBtnClicked'
  onRender: ->
    @ui.filterEventsBtn.hide()
  showEvents: ->
    topics = @getOption 'topics'
    filtered = @getOption 'filtered'
    collection = @model.get 'allEvents'
    view = new CollectionView
      collection: collection
      viewComparator: 'start'
      childView: LinkEntryView
    @showChildView 'events', view
  toggleEventsBtnClicked: ->
    region = @getRegion 'events'
    btn = @ui.toggleEventsBtn
    if region.hasView()
      btn.removeClass 'fa-toggle-up'
      btn.addClass 'fa-toggle-down'
      region.empty()
    else
      btn.removeClass 'fa-toggle-down'
      btn.addClass 'fa-toggle-up'
      @showEvents()
  filterEventsBtnClicked: ->
    view = new TopicsModal
      model: @model
    view.on 'topics:selected',  =>
      @onModalTopicsSelected view
    MainChannel.request 'show-modal', view

  onModalTopicsSelected: (view) ->
    topics = view.getOption 'topics'
    selected = new Collection topics.where selected:true
    names = selected.pluck 'name'
    @options.topics = names
    events = @model.get 'events'
    filtered = filterEventsByTopics events, names
    @options.filtered = filtered
    @ui.toggleEventsBtn.text "Toggle #{filtered.length} events"
    
export default LinkView

