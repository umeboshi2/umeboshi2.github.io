import { Radio } from 'backbone'
import { CollectionView } from 'backbone.marionette'
import tc from 'teacup'

import TopicEntryView from './topic-entry-view'
import BaseModalView from 'common/base-modal-view'

AppChannel = Radio.channel 'crown'

eventManager = AppChannel.request 'get-event-manager', 'events'

class ModalTopicsView extends BaseModalView
  template: tc.renderable ->
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
    collection = eventManager.collections.categories
    if not collection.length
      eventManager.initCategories()
    view = new CollectionView
      collection: collection
      viewComparator: 'name'
      childView: TopicEntryView
    @showChildView 'topicsRegion', view
  okBtnClicked: ->
    promises = eventManager.fetchEventModels()
    Promise.all(promises).then =>
      console.log "promises complete"
      @triggerMethod 'topics:fetched'
  onTopicsFetched: ->
    @emptyModal()

export default ModalTopicsView
