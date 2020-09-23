import Backbone from 'backbone'
import Marionette from 'backbone.marionette'
import tc from 'teacup'

import TopicEntryView from './topic-entry-view'
import BaseModalView from 'common/base-modal-view'

MainChannel = Backbone.Radio.channel 'global'
MessageChannel = Backbone.Radio.channel 'messages'
AppChannel = Backbone.Radio.channel 'crown'

eventManager = AppChannel.request 'get-event-manager', 'events'

class ModalTopicsView extends BaseModalView
  template: tc.renderable (model) ->
    tc.div '.modal-dialog.modal-md', ->
      tc.div '.modal-content', ->
        tc.div '.topics'
        tc.div '.row', ->
          tc.button '.close-btn.btn.btn-warning.fa.fa-close.mr-auto',
          data:dismiss:'modal', "Close"
          tc.button '.ok-button.btn.btn-success.fa.fa-check.ml-auto', "Ok"
  ui:
    closeBtn: '.close-btn'
    okBtn: '.ok-button'
    topicsRegion: '.topics'
  regions:
    topicsRegion: '@ui.topicsRegion'
  events:
    'click @ui.okBtn': 'okBtnClicked'
    'click @ui.closeBtn': 'emptyModal'
  onRender: ->
    collection = eventManager.collections.topics
    if not collection.length
      eventManager.initTopics()
    view = new Marionette.CollectionView
      collection: collection
      viewComparator: 'name'
      childView: TopicEntryView
    @showChildView 'topicsRegion', view
  okBtnClicked: ->
    promises = eventManager.fetchEventModels()
    Promise.all(promises).then =>
      @triggerMethod 'topics:fetched'
  onTopicsFetched: ->
    @emptyModal()

export default ModalTopicsView