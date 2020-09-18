import Backbone from 'backbone'
import Marionette from 'backbone.marionette'

import NoCacheModel from './nocache-model'

MainChannel = Backbone.Radio.channel 'global'
AppChannel = Backbone.Radio.channel 'crown'

class CvLinks extends NoCacheModel
  url: '/assets/documents/cvlinks.json'

class EventIndex extends NoCacheModel
  url: '/assets/events/index.json'

indexModels =
  cvlinks: new CvLinks
  eventIndex: new EventIndex
  
export default indexModels
