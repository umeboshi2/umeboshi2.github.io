import { Collection, Radio } from 'backbone'
import { View as MnView, CollectionView } from 'backbone.marionette'
import tc from 'teacup'
import _ from 'underscore'

import CheckboxEntryView from 'tbirds/views/checkbox-entry'
import LinkEntryView from 'common/link-entry-view'
import BaseModalTopicsView from 'common/base=select-topics-modal'

MainChannel = Radio.channel 'global'
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
  onRender: ->
    model = @model
    category = @model.get 'category'
    topics = getEventTopics category
    view = new CollectionView
      collection: topics
      childView: CheckboxEntryView
    @showChildView 'content', view
    @ui.header.text "Select Topics"
  okBtnClicked: ->
    @triggerMethod 'topics:selected'
  onTopicsSelected: ->
    @emptyModal()
    
export default TopicsModal

