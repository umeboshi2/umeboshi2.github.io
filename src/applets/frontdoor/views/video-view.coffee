import Backbone from 'backbone'
import Marionette from 'backbone.marionette'
import tc from 'teacup'
import marked from 'marked'
import $ from 'jquery'
import moment from 'moment'

MainChannel = Backbone.Radio.channel 'global'

makeEmbedUrl = (id) ->
  return "https://www.youtube.com/embed/#{id}"
  
class YTIframe extends Marionette.View
  tagName: 'iframe'
  attributes:
    width: "320"
    height: "240"
    frameborder: "0"
    allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" # noqa 
    allowfullscreen: ""
  template: ->
  onRender: ->
    @$el.attr 'src', makeEmbedUrl(@id)
    

class VideoView extends Marionette.View
  template: tc.renderable (model) ->
    tc.div '.vid-container'
    tc.button '.show-video-btn.btn.btn-outline-warning', ->
      tc.i '.fa.fa-youtube'
      tc.text " Show Video"
    tc.button '.remove-video-btn.btn.btn-outline-danger',
    style:'display: none;', ->
      tc.i '.fa.fa-youtube'
      tc.text " Remove Video"
  ui:
    videoContainer: '.vid-container'
    showVideoBtn: '.show-video-btn'
    removeVideoBtn: '.remove-video-btn'
  regions:
    videoContainer: '@ui.videoContainer'
  events:
    'click @ui.showVideoBtn': 'showVideoBtnClicked'
    'click @ui.removeVideoBtn': 'removeVideoBtnClicked'
  showVideoBtnClicked: ->
    @ui.showVideoBtn.hide()
    @ui.removeVideoBtn.show()
    @showIframe()
  removeVideoBtnClicked: ->
    @ui.removeVideoBtn.hide()
    @ui.showVideoBtn.show()
    @getRegion('videoContainer').empty()
  showIframe: ->
    view = new YTIframe
      id: @id
    @showChildView 'videoContainer', view
    
export default VideoView


