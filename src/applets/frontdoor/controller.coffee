import { Radio, Collection } from 'backbone'

import ToolbarView from 'tbirds/views/button-toolbar'
import { MainController } from 'tbirds/controllers'
import { ToolbarAppletLayout } from 'tbirds/views/layout'
import scroll_top_fast from 'tbirds/util/scroll-top-fast'

MainChannel = Radio.channel 'global'
MessageChannel = Radio.channel 'messages'
AppChannel = Radio.channel 'todos'

toolbarEntries = []

toolbarEntryCollection = new Collection toolbarEntries
AppChannel.reply 'get-toolbar-entries', ->
  toolbarEntryCollection

class Controller extends MainController
  layoutClass: ToolbarAppletLayout
  setupLayoutIfNeeded: ->
    super()
    toolbar = new ToolbarView
      collection: toolbarEntryCollection
    @layout.showChildView 'toolbar', toolbar
    return
    
  start: ->
    @viewIndex()
    return
    
  _viewResource: (doc, name) ->
    require.ensure [], () =>
      View = require './views/index-view'
      view = new View
        model: doc
        pageName: name
      @layout.showChildView 'content', view
      scroll_top_fast()
    # name the chunk
    , 'frontdoor-view-page'
    
  viewPage: (name) ->
    @setupLayoutIfNeeded()
    doc = MainChannel.request 'main:app:get-document', name
    response = doc.fetch()
    response.done =>
      @_viewResource doc, name
      return
    response.fail ->
      MessageChannel.request 'danger', 'Failed to get document'
      return
    return
    
  view_index: ->
    @setupLayoutIfNeeded()
    # https://jsperf.com/bool-to-int-many
    completed = completed ^ 0
  viewIndex: ->
    #@setupLayoutIfNeeded()
    @viewPage 'blog/cv19/index'
    return

  themeSwitcher: ->
    @setupLayoutIfNeeded()
    require.ensure [], () =>
      View = require './views/theme-switch'
      view = new View
      @layout.showChildView 'content', view
      scroll_top_fast()
    # name the chunk
    , 'frontdoor-view-switch-theme'
    
  viewDbAdmin: ->
    @setupLayoutIfNeeded()
    require.ensure [], () =>
      View = require('./views/idbview').default
      view = new View
      @layout.showChildView 'content', view
    # name the chunk
    , 'frontdoor-view-dbadmin'
    
    
    
export default Controller

