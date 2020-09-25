import { Collection, Radio} from 'backbone'
import { View as MnView, CollectionView } from 'backbone.marionette'
import tc from 'teacup'

import TopicEntryView from './events/topic-entry-view'
import BaseModalView from 'common/base-modal-view'

MainChannel = Radio.channel 'global'
AppChannel = Radio.channel 'crown'

eventManager = AppChannel.request 'get-event-manager', 'topics'

class TopicCollectionView extends CollectionView
  childView: TopicEntryView
  viewComparator: 'name'
  childViewEvents:
    'toggled': 'childToggled'
  childToggled: ->
    @trigger 'child:toggled'

class CategoryEntry extends MnView
  template: tc.renderable (model) ->
    tc.text model.name
    

class CategoriesModal extends BaseModalView
  template: tc.renderable ->
    tc.div '.modal-dialog.modal-md', ->
      tc.div '.modal-content', ->
        tc.div '.categories'
        tc.div '.row', ->
          tc.button '.close-btn.btn.btn-warning.fa.fa-close.mr-auto',
          data:dismiss:'modal', "Close"
  ui:
    closeBtn: '.close-btn'
    categories: '.categories'
  regions:
    categories: '@ui.categories'
  events:
    'click @ui.closeBtn': 'emptyModal'
  onRender: ->
    console.log "collection", @collection
    view = new CollectionView
      collection: @collection
      childView: CategoryEntry
    @showChildView 'categories', view
    
  
class MainView extends MnView
  initialize: ->
    topics = eventManager.collections.topics
    if not topics.length
      eventManager.initTopics()
  template: tc.renderable ->
    tc.div '.text-center.listview-header', ->
      tc.text "Topics View"
    tc.div '.card', ->
      tc.span '.card-title', ->
        tc.div '.btn-group', ->
          tc.button '.show-available-btn.btn.btn-outline-info', 'Show available'
          tc.button '.show-selected-btn.btn.btn-outline-warning', ->
            tc.text 'Show selected'
          tc.button '.show-categories-btn.btn.btn-outline-warning', ->
            tc.text 'Show Main Topics'
          tc.button '.list-events-btn.btn.btn-outline-warning', ->
            tc.text 'List Events'
      tc.div '.card-body'
  ui:
    cardBody: '.card-body'
    showSelectedBtn: '.show-selected-btn'
    showCategoriesBtn: '.show-categories-btn'
    showAvailBtn: '.show-available-btn'
    listEventsBtn: '.list-events-btn'
  regions:
    cardBody: '@ui.cardBody'
  events:
    'click @ui.showSelectedBtn': 'showSelectedBtnClicked'
    'click @ui.showCategoriesBtn': 'showCategoriesBtnClicked'
    'click @ui.showAvailBtn': 'showAvailBtnClicked'
    'click @ui.listEventsBtn': 'listEventsBtnClicked'
  childViewEvents:
    'child:toggled' : 'childToggled'
  childToggled: ->
    opts = eventManager.determineCategories()
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
    topics = eventManager.collections.topics
    selectedView = new TopicCollectionView
      collection: new Collection topics.filter selected: true
    @showChildView 'cardBody', selectedView
  
  showAvailBtnClicked: ->
    @cardBodyTopic = 'available'
    topics = eventManager.collections.topics
    availableView = new TopicCollectionView
      collection: new Collection topics.filter selected: false
    @showChildView 'cardBody', availableView

  showCategoriesBtnClicked: ->
    opts = eventManager.determineCategories()
    Promise.all(opts.promises).then ->
      view = new CategoriesModal
        collection: opts.allTopics
      MainChannel.request 'show-modal', view

  listEventsBtnClicked: ->
    @cardBodyTopic = 'listEvents'
    require.ensure [], () =>
      View = require('./topic-events').default
      view = new View
        model: @model
      @showChildView 'cardBody', view
    # name the chunk
    , 'crown-child-view-list-subtopic-events'
    
export default MainView
