import path from 'path'
import { Radio } from 'backbone'
import { View as MnView } from 'backbone.marionette'
import tc from 'teacup'
import marked from 'marked'

MainChannel = Radio.channel 'global'
MessageChannel = Radio.channel 'messages'
AppChannel = Radio.channel 'fromtdoor'



class Renderer extends marked.Renderer
  link: (href, title, text) ->
    if href.startsWith '#'
      return super href, title, text
    dirname = path.dirname location.hash
    if dirname is '.'
      dirname = '#frontdoor/view'
    unless href.startsWith 'http'
      href = path.join dirname, href
    return super href, title, text

renderer = new Renderer
DefaultStaticDocumentTemplate = tc.renderable (doc) ->
  tc.article '.document-view.content', ->
    tc.div '.body', ->
      tc.raw marked doc.content, renderer:renderer

class FrontDoorMainView extends MnView
  template: DefaultStaticDocumentTemplate

export default FrontDoorMainView


