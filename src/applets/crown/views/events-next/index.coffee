import $ from 'jquery'
import { Collection, Radio } from 'backbone'
import { View as MnView, CollectionView } from 'backbone.marionette'
import tc from 'teacup'

import CheckboxEntryView from 'tbirds/views/checkbox-entry'
import BaseModalTopicsView from 'common/base-select-topics-modal'
import indexModels from 'common/index-models'
import ButtonBar from './button-bar'

MainChannel = Radio.channel 'global'
AppChannel = Radio.channel 'crown'

eventIndex = indexModels.eventIndex

eventManager = AppChannel.request 'get-event-manager', 'topics'

class TopicCollectionView extends CollectionView
  childView: CheckboxEntryView
  viewComparator: 'name'
  childViewEvents:
    'toggled': 'childToggled'
  childToggled: ->
    @trigger 'child:toggled'

class MainView extends MnView
  initialize: (options) ->
    eventManager.initAll()
  template: tc.renderable ->
    tc.div '.text-center.listview-header', ->
      tc.text "Topic Events"
    tc.div '.row.button-bar'
    tc.div '.row.content'
  ui:
    buttonBar: '.button-bar'
    content: '.content'
  regions:
    content: '@ui.content'
    buttonBar: '@ui.buttonBar'
  childViewEvents:
    'child:toggled' : 'childToggled'
    'select:clicked': 'selectClicked'
    'available:clicked': 'availableClicked'
    'list:clicked': 'listClicked'
    'calendar:clicked': 'calendarClicked'
    'topic:colors:clicked': 'topicColorsClicked'
  contentMap:
    selected: 'selectClicked'
    available: 'availableClicked'
    listEvents: 'listClicked'
    calendar: 'calendarClicked'
    colors: 'topicColorsClicked'
  contentTopic: 'available'
  childToggled: ->
    opts = eventManager.determineCategories()
    Promise.all(opts.promises).then =>
      console.log "there were #{opts.promises.length} promises."
      @render()
  onRender: ->
    view = new ButtonBar
    @showChildView 'buttonBar', view
    method = @contentMap[@contentTopic]
    @[method]()
  selectClicked: ->
    @contentTopic = 'selected'
    topics = eventManager.collections.topics
    selectedView = new TopicCollectionView
      collection: new Collection topics.filter selected: true
    @showChildView 'content', selectedView
  availableClicked: ->
    @contentTopic = 'available'
    topics = eventManager.collections.topics
    availableView = new TopicCollectionView
      collection: new Collection topics.filter selected: false
    @showChildView 'content', availableView
  listClicked: ->
    @contentTopic = 'listEvents'
    require.ensure [], () =>
      View = require('../topic-events').default
      view = new View
        model: @model
      @showChildView 'content', view
    # name the chunk
    , 'crown-child-view-list-topic-events'
  calendarClicked: ->
    @contentTopic = 'calendar'
    require.ensure [], () =>
      View = require('./calendar').default
      view = new View
        model: @model
      @showChildView 'content', view
    # name the chunk
    , 'crown-child-view-list-subtopic-events'
  topicColorsClicked: ->
    console.log "topicColorsClicked"
    @contentTopic = 'colors'
    require.ensure [], () =>
      View = require('common/topic-colors').default
      topicColors = MainChannel.request 'get-topic-colors'
      view = new View
        model: topicColors
      @showChildView 'content', view
    # name the chunk
    , 'crown-child-view-topic-colors'
    
export default MainView

