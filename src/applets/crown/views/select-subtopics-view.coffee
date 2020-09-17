import Backbone from 'backbone'
import Marionette from 'backbone.marionette'
import tc from 'teacup'
import $ from 'jquery'

isMainTopicLoaded = (options) ->
  o = options
  console.log "topic is ", o.topic

class TopicEntryView extends Marionette.View
  template: tc.renderable (model) ->
    tc.div ->
      console.log "MODEL", model
  

class TopicCollectionView extends Marionette.CollectionView
      

class MainView extends Marionette.View
  template: tc.renderable (model) ->
    tc.div '.text-center.listview-header', ->
      tc.text "Topics View"
    tc.div '.available-topics'
    tc.div '.selected-topics'
  ui:
    available: '.available-topics'
    selected: '.selected-topics'
  regions:
    available: '@ui.available'
    selected: '@ui.selected'
  onRender: ->
    subtopics = []
    stMap = @model.get('subtopics')
    for st of stMap
      console.log "ST", st, stMap
      subtopics.push
        subtopic: st
        topics: stMap[st]
    console.log "Main Model", @model
    console.log "Subtopics", subtopics
    
class TopicListView extends Marionette.View
  template: tc.renderable (model) ->
    tc.div '.text-center.listview-header', ->
      tc.text "Topics View"
    tc.div ->
      for key of model.subtopics
        tc.div '.card', ->
          tc.div '.card-body', ->
            tc.h5 key
            tc.ul ->
              for skey in model.subtopics[key]
                tc.li skey
    console.log 'model', model

export default MainView
