import Backbone from 'backbone'
import Marionette from 'backbone.marionette'
import tc from 'teacup'
import marked from 'marked'
import $ from 'jquery'
import moment from 'moment'

import LinkView from './link-view'


MainChannel = Backbone.Radio.channel 'global'

class MainView extends Marionette.View
  template: tc.renderable (post) ->
    tc.article '.document-view.content.row', ->
      tc.div '.body.col-lg-10.col-lg-offset-1', ->
        tc.raw marked post.content
  ui:
    anchor: 'a'
    linkView: '.link-view'
  colorLocalLinks: ->
    for a in @ui.anchor
      hash = a.hash
      if hash.startsWith '#pages/'
        $(a).css 'color', 'SkyBlue'
      if hash.startsWith '#crown/'
        $(a).css 'color', 'SkyBlue'
  showLinkViews: ->
    linkViews = @ui.linkView
    if linkViews.length
      mainView = @
      linkViews.each (index) ->
        jv = $(this)
        element = this
        eventsName = jv.attr('data-events')
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
          region.show lview
  onRender: ->
    @colorLocalLinks()
    @showLinkViews()
    
          
module.exports = MainView

