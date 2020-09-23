import Backbone from 'backbone'
import Marionette from 'backbone.marionette'
import tc from 'teacup'

import BaseModalView from 'common/base-modal-view'
import HasJsonView from 'common/has-jsonview'
MainChannel = Backbone.Radio.channel 'global'
MessageChannel = Backbone.Radio.channel 'messages'
AppChannel = Backbone.Radio.channel 'pmc'

class SimpleEntry extends Marionette.View
  template: tc.renderable (model) ->
    tc.div tc.text model.id

class SimpleInfoEntry extends Marionette.View
  behaviors: [HasJsonView]
  template: tc.renderable (model) ->
    tc.div '.jsonview'

class ModalTopicsView extends BaseModalView
  template: tc.renderable (model) ->
    console.log "model", model
    tc.div '.modal-dialog.modal-md', ->
      tc.div '.modal-content', ->
        tc.text "Topics Assigned to pmeid: #{model.id}"
        tc.div '.content'
        tc.div '.row', ->
          tc.button '.close-btn.btn.btn-warning.fa.fa-close.mr-auto',
          data:dismiss:'modal', "Close"
          tc.button '.ok-button.btn.btn-success.fa.fa-check.ml-auto', "Ok"
  ui:
    closeBtn: '.close-btn'
    okBtn: '.ok-button'
    content: '.content'
    topicsRegion: '.topics'
  regions:
    content: '@ui.content'
  events:
    'click @ui.okBtn': 'okBtnClicked'
    'click @ui.closeBtn': 'emptyModal'
  onRenderOrig: ->
    collection = eventManager.collections.topics
    if not collection.length
      eventManager.initTopics()
    view = new Marionette.CollectionView
      collection: collection
      viewComparator: 'name'
      childView: TopicEntryView
    @showChildView 'topicsRegion', view
  okBtnClicked: ->
    console.log "OK clicked"
  onRender: ->
    topics = AppChannel.request 'get-topic-collection'
    fmtopics = AppChannel.request 'get-fmtopic-collection'
    thisView = @
    model = new Backbone.Model
      topics: topics
      fmtopics: fmtopics
    topics.fetch().then ->
      fmtopics.fetch().then ->
        console.log "all fetched", topics, fmtopics
        view = new SimpleInfoEntry
          model: model
        thisView.showChildView 'content', view
    

export default ModalTopicsView
