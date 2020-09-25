import { Radio } from 'backbone'
import indexModels from 'common/index-models'

MainChannel = Radio.channel 'global'
AppChannel = Radio.channel 'crown'

AppChannel.reply 'get-index-model', (name) ->
  return indexModels[name]
  
