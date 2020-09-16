import Backbone from 'backbone'
import Marionette from 'backbone.marionette'

import IsEscapeModal from 'tbirds/behaviors/is-escape-modal'

MainChannel = Backbone.Radio.channel 'global'

class BaseModalView extends Marionette.View
  behaviors: [IsEscapeModal]
  emptyModal: ->
    app = MainChannel.request 'main:app:object'
    layout = app.getView()
    region = layout.getRegion 'modal'
    region.empty()

export default BaseModalView
