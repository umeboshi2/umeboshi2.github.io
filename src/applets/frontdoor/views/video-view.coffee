import { View as MnView } from 'backbone.marionette'
import tc from 'teacup'

makeEmbedUrl = (id) ->
  return "https://www.youtube.com/embed/#{id}"


YTIFrameAllow = [
  "accelerometer"
  "autoplay"
  "encrypted-media"
  "gyroscope"
  "picture-in-picture"
]


class YTIframe extends MnView
  tagName: 'iframe'
  attributes:
    width: "320"
    height: "240"
    frameborder: "0"
    # allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" # noqa
    allow: YTIFrameAllow.join('; ')
    allowfullscreen: ""
  template: ->
  onRender: ->
    @$el.attr 'src', makeEmbedUrl(@id)
    

class VideoView extends MnView
  template: tc.renderable ->
    tc.div '.vid-container'
    tc.button '.show-video-btn.btn.btn-outline-primary', ->
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


