import { Model, Radio } from 'backbone'
import { View as MnView } from 'backbone.marionette'
import tc from 'teacup'
import marked from 'marked'
import $ from 'jquery'

import LinkView from './link-view'
import VideoView from './video-view'

import navigateToUrl from 'tbirds/util/navigate-to-url'

MainChannel = Radio.channel 'global'

class MenuBar extends MnView
  className: 'btn-group'
  template: tc.renderable (model) ->
    tc.button '.home-btn.btn.btn-outline-warning.btn-sm.fa.fa-home', 'Home'
    tc.button '.parent-bnt.btn.btn-outline-warning.btn-sm.fa.fa-arrow-up', 'Up'
  ui:
    homeBtn: '.home-btn'
    parentBtn: '.parent-bnt'
  events:
    'click @ui.homeBtn': 'homeBtnClicked'
    'click @ui.parentBtn': 'parentBtnClicked'
  homeBtnClicked: ->
    navigateToUrl '#pages/blog/cv19/index'
  parentBtnClicked: ->
    parent = @model.get 'parent'
    navigateToUrl parent
    
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
      mainView = @
      vidViews.each (index) ->
        jv = $(this)
        id = jv.attr 'data-id'
        regionId = "vid-region-#{index}"
        rname = jv.attr 'id', regionId
        region = mainView.addRegion "vid-region-#{index}", "##{regionId}"
        view = new VideoView
          id: id
        region.show view
        
  showLinkViews: ->
    linkViews = @ui.linkView
    if linkViews.length
      mainView = @
      linkViews.each (index) ->
        jv = $(this)
        eventsName = jv.attr('data-events')
        topics = jv.attr("data-topics")
        linkInfo = MainChannel.request 'main:app:get-events', eventsName
        response = linkInfo.fetch()
        response.done ->
          regionId = "region-#{index}"
          rname = jv.attr 'id', regionId
          region = mainView.addRegion "region-#{index}", "##{regionId}"
          title = region.$el.attr('data-title')
          lview = new LinkView
            model: linkInfo
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
    
          
module.exports = MainView

