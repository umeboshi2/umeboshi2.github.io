import { Model, Radio } from 'backbone'
import { View as MnView } from 'backbone.marionette'
import tc from 'teacup'
import marked from 'marked'
import $ from 'jquery'

import EventManager from 'common/event-manager'

import MenuBar from './menu-bar'
import LinkView from './link-view'
import VideoView from './video-view'
 
MainChannel = Radio.channel 'global'
AppChannel = Radio.channel 'frontdoor'

eventManager = AppChannel.request 'get-event-manager'

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
    if not eventManager.collections.categories.length
      eventManager.initCategories()
      console.log "initCategories", eventManager
    if linkViews.length
      mainView = @
      linkViews.each (index) ->
        jv = $(this)
        category = jv.attr('data-category')
        topics = jv.attr("data-topics")
        models = eventManager.collections.categories.where name:category
        if models.length != 1
          MessageChannel.request 'error', "Category #{category} not found."
        console.log "model", models[0]
        models.pop().set('selected', true)
        promises = eventManager.fetchEventModels()
        Promise.all(promises).then ->
          regionId = "region-#{index}"
          jv.attr 'id', regionId
          region = mainView.addRegion "region-#{index}", "##{regionId}"
          title = region.$el.attr('data-title')
          model = eventManager.getEventData category
          lview = new LinkView
            model: model
            title: title
            topics: topics
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
