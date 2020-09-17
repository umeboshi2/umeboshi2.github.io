import Backbone from 'backbone'
import Marionette from 'backbone.marionette'
import tc from 'teacup'

import TopicEntryView from './topic-entry-view'
import BaseModalView from 'common/base-modal-view'

MainChannel = Backbone.Radio.channel 'global'
MessageChannel = Backbone.Radio.channel 'messages'
AppChannel = Backbone.Radio.channel 'crown'

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
    collection = AppChannel.request 'get-selected-topics'
    if not collection.length
      AppChannel.request 'init-selected-topics', @model
    view = new Marionette.CollectionView
      collection: collection
      viewComparator: 'name'
      childView: TopicEntryView
    @showChildView 'topicsRegion', view
  okBtnClicked: ->
    promises = AppChannel.request 'fetch-event-models', @model
    Promise.all(promises).then =>
      @triggerMethod 'topics:fetched'
  onTopicsFetched: ->
    @emptyModal()
    collection = AppChannel.request 'get-selected-topics'

export default ModalTopicsView
