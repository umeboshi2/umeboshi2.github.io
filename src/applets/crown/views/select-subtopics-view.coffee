import Backbone from 'backbone'
import Marionette from 'backbone.marionette'
import tc from 'teacup'
import $ from 'jquery'

import TopicEntryView from './topic-entry-view'
import BaseModalView from 'common/base-modal-view'

MainChannel = Backbone.Radio.channel 'global'
MessageChannel = Backbone.Radio.channel 'messages'
AppChannel = Backbone.Radio.channel 'crown'

isMainTopicLoaded = (options) ->
  o = options
  console.log "topic is ", o.topic


class TopicCollectionView extends Marionette.CollectionView
  childView: TopicEntryView
  viewComparator: 'name'
  childViewEvents:
    'toggled': 'childToggled'
  childToggled: ->
    @trigger 'child:toggled'

class MainTopicEntry extends Marionette.View
  template: tc.renderable (model) ->
    tc.text model.name
    

class MainTopicsModal extends BaseModalView
  template: tc.renderable (model) ->
    tc.div '.modal-dialog.modal-md', ->
      tc.div '.modal-content', ->
        tc.div '.topics'
        tc.div '.row', ->
          tc.button '.close-btn.btn.btn-warning.fa.fa-close.mr-auto',
          data:dismiss:'modal', "Close"
  ui:
    closeBtn: '.close-btn'
    topicsRegion: '.topics'
  regions:
    topicsRegion: '@ui.topicsRegion'
  events:
    'click @ui.closeBtn': 'emptyModal'
  onRender: ->
    view = new Marionette.CollectionView
      collection: @collection
      childView: MainTopicEntry
    @showChildView 'topicsRegion', view
    
  
class MainView extends Marionette.View
  initialize: ->
    subtopics = AppChannel.request 'get-selected-subtopics'
    if not subtopics.length
      AppChannel.request 'init-selected-subtopics', @model
  template: tc.renderable (model) ->
    tc.div '.text-center.listview-header', ->
      tc.text "Subtopics View"
    tc.div '.card', ->
      tc.span '.card-title', ->
        tc.div '.btn-group', ->
          tc.button '.show-available-btn.btn.btn-outline-info', 'Show available'
          tc.button '.show-selected-btn.btn.btn-outline-warning', ->
            tc.text 'Show selected'
          tc.button '.show-maintopics-btn.btn.btn-outline-warning', ->
            tc.text 'Show Main Topics'
          tc.button '.list-events-btn.btn.btn-outline-warning', ->
            tc.text 'List Events'
      tc.div '.card-body'
  ui:
    cardBody: '.card-body'
    showSelectedBtn: '.show-selected-btn'
    showMainTopicsBtn: '.show-maintopics-btn'
    showAvailBtn: '.show-available-btn'
    listEventsBtn: '.list-events-btn'
  regions:
    cardBody: '@ui.cardBody'
  events:
    'click @ui.showSelectedBtn': 'showSelectedBtnClicked'
    'click @ui.showMainTopicsBtn': 'showMainTopicsBtnClicked'
    'click @ui.showAvailBtn': 'showAvailBtnClicked'
    'click @ui.listEventsBtn': 'listEventsBtnClicked'
  childViewEvents:
    'child:toggled' : 'childToggled'
  childToggled: ->
    opts = AppChannel.request 'determine-main-topics', @model
    Promise.all(opts.promises).then =>
      @render()
  cardBodyMap:
    selected: 'showSelectedBtnClicked'
    available: 'showAvailBtnClicked'
    listEvents: 'listEventsBtnClicked'
  cardBodyTopic: 'available'
  onRender: ->
    method = @cardBodyMap[@cardBodyTopic]
    @[method]()
  showSelectedBtnClicked: ->
    @cardBodyTopic = 'selected'
    subtopics = AppChannel.request 'get-selected-subtopics'
    selectedView = new TopicCollectionView
      collection: new Backbone.Collection subtopics.filter selected: true
    @showChildView 'cardBody', selectedView
  
  showAvailBtnClicked: ->
    @cardBodyTopic = 'available'
    subtopics = AppChannel.request 'get-selected-subtopics'
    availableView = new TopicCollectionView
      collection: new Backbone.Collection subtopics.filter selected: false
    @showChildView 'cardBody', availableView

  showMainTopicsBtnClicked: ->
    opts = AppChannel.request 'determine-main-topics', @model
    Promise.all(opts.promises).then ->
      view = new MainTopicsModal
        collection: opts.allTopics
      MainChannel.request 'show-modal', view

  listEventsBtnClicked: ->
    @cardBodyTopic = 'listEvents'
    require.ensure [], () =>
      View = require('./subtopic-events').default
      view = new View
        model: @model
      @showChildView 'cardBody', view
    # name the chunk
    , 'crown-child-view-list-subtopic-events'
    
export default MainView
