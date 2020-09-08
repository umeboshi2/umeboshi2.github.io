import $ from 'jquery'
import Backbone from 'backbone'
import Marionette from 'backbone.marionette'
import tc from 'teacup'
import moment from 'moment'

import Calendar from 'js-year-calendar'
import 'js-year-calendar/dist/js-year-calendar.css'

import IsEscapeModal from 'tbirds/behaviors/is-escape-modal'

import LinkEntryView from '../../frontdoor/views/link-entry'

MainChannel = Backbone.Radio.channel 'global'
MessageChannel = Backbone.Radio.channel 'messages'
AppChannel = Backbone.Radio.channel 'crown'

class TopicEntryView extends Marionette.View
  className: "form-group form-check"
  template: tc.renderable (model) ->
    tc.input '.form-check-input', type:'checkbox'
    tc.label '.form-check-label', model.topic
  ui:
    input: 'input'
  events:
    click: 'toggleInput'
  onRender: ->
    @ui.input.prop 'checked', @model.get('selected')
  toggleInput: ->
    checked = @ui.input.is ':checked'
    @ui.input.prop 'checked', not checked
    @model.set 'selected', not checked

class ModalTopicsView extends Marionette.View
  behaviors: [IsEscapeModal]
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
  emptyModal: ->
    app = MainChannel.request 'main:app:object'
    layout = app.getView()
    region = layout.getRegion 'modal'
    region.empty()
  onRender: ->
    collection = AppChannel.request 'get-selected-topics'
    if not collection.length
      topics = []
      for topic of @model.toJSON()
        topics.push
          topic: topic
          selected: false
      collection = new Backbone.Collection topics
      AppChannel.request 'set-selected-topics', collection
    view = new Marionette.CollectionView
      collection: collection
      viewComparator: 'topic'
      childView: TopicEntryView
    @showChildView 'topicsRegion', view
  okBtnClicked: ->
    collection = AppChannel.request 'get-selected-topics'
    selected = collection.filter selected:true
    topicMap = @model
    promises = []
    selected.forEach (model) ->
      topic = model.get 'topic'
      if not model.get('eventsModel')
        console.log "need to fetch", topic
        resourceName = topicMap.get topic
        resource = MainChannel.request 'main:app:get-events', resourceName
        promises.push resource.fetch()
        model.set "eventsModel", resource
    Promise.all(promises).then =>
      @triggerMethod 'topics:fetched'
  onTopicsFetched: ->
    @emptyModal()
    collection = AppChannel.request 'get-selected-topics'
    

export default ModalTopicsView
