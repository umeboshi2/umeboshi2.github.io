import { Collection, Radio } from 'backbone'
import { CollectionView } from 'backbone.marionette'

import CheckboxEntryView from 'tbirds/views/checkbox-entry'
import BaseModalTopicsView from 'common/base-select-topics-modal'

AppChannel = Radio.channel 'frontdoor'

eventManager = AppChannel.request 'get-event-manager'

# the category model needs to be fetched
# prior to calling this,
getEventTopics = (category) ->
  eventModel = eventManager.getEventData category
  events = eventModel.get('events')
  topics = new Collection
  events.forEach (event) ->
    event.topics.forEach (topic) ->
      topics.add
        id:topic
        name:topic
        selected:false
  return topics
  
class TopicsModal extends BaseModalTopicsView
  getTopics: ->
    category = @model.get 'category'
    topics = getEventTopics category
    console.log "@options", @options
    @options.topics = topics
  onRender: ->
    @getTopics()
    topics = @getOption 'topics'
    view = new CollectionView
      collection: topics
      childView: CheckboxEntryView
      viewComparator: 'name'
    @showChildView 'content', view
    @ui.header.text "Select Topics"
  okBtnClicked: ->
    @triggerMethod 'topics:selected', @
  onTopicsSelected: ->
    @emptyModal()
    
export default TopicsModal

