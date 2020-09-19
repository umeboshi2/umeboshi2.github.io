import Backbone from 'backbone'
import Marionette from 'backbone.marionette'

import indexModels from 'common/index-models'

MainChannel = Backbone.Radio.channel 'global'
AppChannel = Backbone.Radio.channel 'crown'

AppChannel.reply 'get-index-model', (name) ->
  return indexModels[name]
  
