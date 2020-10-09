import { Model, Radio } from 'backbone'
import { decode } from 'url-safe-base64'

import { MainController } from 'tbirds/controllers'
import { ToolbarAppletLayout } from 'tbirds/views/layout'


MainChannel = Radio.channel 'global'
MessageChannel = Radio.channel 'messages'
AppChannel = Radio.channel 'xyzzy'

class Controller extends MainController
  channelName: 'xyzzy'
  layoutClass: ToolbarAppletLayout
  viewIndex: ->
    @setupLayoutIfNeeded()
    require.ensure [], () =>
      View = require('./views/index-view').default
      view = new View
      @layout.showChildView 'content', view
    # name the chunk
    , 'xyzzy-view-index'


  viewRedirect: (encoded) ->
    @setupLayoutIfNeeded()
    require.ensure [], () =>
      View = require('./views/redirect-view').default
      view = new View
        model: new Model url: atob decode encoded
      @layout.showChildView 'content', view
    # name the chunk
    , 'xyzzy-view-redirect'

  makeRedirect: ->
    @setupLayoutIfNeeded()
    require.ensure [], () =>
      View = require('./views/make-redirect').default
      view = new View
      @layout.showChildView 'content', view
    # name the chunk
    , 'xyzzy-make-redirect'

  viewRedirectAuto: (encoded) ->
    url = atob(encoded)
    console.log "URL IS", url
    window.open url, '_blank'

export default Controller

