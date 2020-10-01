import { Model, Collection, Radio } from 'backbone'
import { View as MnView } from 'backbone.marionette'
import tc from 'teacup'
import marked from 'marked'
import $ from 'jquery'

import MenuBar from './menu-bar'
import LinkView from './link-view'
import VideoView from './video-view'
 
AppChannel = Radio.channel 'frontdoor'

eventManager = AppChannel.request 'get-event-manager'

getArrayFromString = (string) ->
  if not string?
    return []
  items = (item.trim() for item in string.split(','))
  return items


class MainView extends MnView
  template: tc.renderable (post) ->
    tc.div '.menu-bar'
    tc.article '.document-view.content.row', ->
      tc.div '.body.col-lg-10.col-lg-offset-1', ->
        tc.raw marked post.content
  ui:
    menuBar: '.menu-bar'
    menuData: '.menu-data'
    anchor: 'a'
    linkView: '.link-view'
    videoView: '.video-view'
  regions:
    menuBar: '@ui.menuBar'
  colorLocalLinks: ->
    for a in @ui.anchor
      hash = a.hash
      if hash.startsWith '#pages/'
        $(a).css 'color', 'SkyBlue'
      if hash.startsWith '#crown/'
        $(a).css 'color', 'SkyBlue'
  showVidViews: ->
    vidViews = @ui.videoView
    if vidViews.length
      console.log "vidViews", vidViews
      mainView = @
      vidViews.each (index) ->
        jv = $(this)
        id = jv.attr 'data-id'
        regionId = "vid-region-#{index}"
        jv.attr 'id', regionId
        region = mainView.addRegion "vid-region-#{index}", "##{regionId}"
        view = new VideoView
          id: id
        region.show view
  showLinkViews: ->
    linkViews = @ui.linkView
    eventManager.initAll()
    if linkViews.length
      mainView = @
      linkViews.each (index) ->
        jv = $(this)
        staticTopics = getArrayFromString jv.attr("data-topics")
        tcollection = eventManager.collections.topics
        staticTopics.forEach (topic) ->
          model = tcollection.find name:topic
          model.set 'selected', true
        opts = eventManager.determineCategories()
        Promise.all(opts.promises).then ->
          eventMap = {}
          allEvents = new Collection
          staticTopics.forEach (topic) ->
            events = eventManager.getTopicEvents topic
            eventMap[topic] = events
            allEvents.add events.models
          regionId = "region-#{index}"
          jv.attr 'id', regionId
          region = mainView.addRegion "region-#{index}", "##{regionId}"
          title = region.$el.attr('data-title')
          model = new Model
            title: title
            staticTopics: staticTopics
            selectedTopics: new Collection []
            eventMap: eventMap
            allEvents: allEvents
          lview = new LinkView
            model: model
          region.show lview
  onRender: ->
    @colorLocalLinks()
    @showLinkViews()
    @showVidViews()
    if @ui.menuData.length
      view = new MenuBar
        model: new Model
          parent: @ui.menuData.attr('data-parent')
      @showChildView 'menuBar', view
    
export default MainView
