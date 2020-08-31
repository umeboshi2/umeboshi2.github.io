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
    tc.button '.video-btn.btn.btn-outline-primary', "Show Video"
  ui:
    videoContainer: '.vid-container'
    videoBtn: '.video-btn'
  regions:
    videoContainer: '@ui.videoContainer'
  events:
    'click @ui.videoBtn': 'showIframe'
  showIframe: ->
    view = new YTIframe
      id: @id
    @showChildView 'videoContainer', view
    
export default VideoView


