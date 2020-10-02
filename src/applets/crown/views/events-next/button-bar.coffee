import $ from 'jquery'
import { Collection, Radio } from 'backbone'
import { View as MnView, CollectionView } from 'backbone.marionette'
import tc from 'teacup'

import CheckboxEntryView from 'tbirds/views/checkbox-entry'
import BaseModalTopicsView from 'common/base-select-topics-modal'
import indexModels from 'common/index-models'

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

class ButtonBar extends MnView
  className: 'btn-group'
  template: tc.renderable ->
    warn = ".btn.btn-outline-warning"
    tc.button '.show-available-btn.btn.btn-outline-info', ->
      tc.text 'Show available'
    tc.button ".show-selected-btn#{warn}", ->
      tc.text 'Show selected'
    tc.button ".list-events-btn#{warn}.fa.fa-list", ->
      tc.text 'List Events'
    tc.button ".calendar-btn#{warn}.fa.fa-calendar", ->
      tc.text 'Calendar'
    tc.button ".timeline-btn#{warn}.fa.fa-road", ->
      tc.text 'Timeline'
  ui:
    showSelectedBtn: '.show-selected-btn'
    showAvailBtn: '.show-available-btn'
    listEventsBtn: '.list-events-btn'
    calendarBtn: '.calendar-btn'
    timelineBtn: '.timeline-btn'
  triggers:
    'click @ui.showSelectedBtn': 'select:clicked'
    'click @ui.showCategoriesBtn': 'categories:clicked'
    'click @ui.showAvailBtn': 'available:clicked'
    'click @ui.listEventsBtn': 'list:clicked'
    'click @ui.calendarBtn': 'calendar:clicked'
    'click @ui.timelineBtn': 'timeline: clicked'
  onRender: ->
    @ui.timelineBtn.hide()
    
    
export default ButtonBar

