import { Radio } from 'backbone'

import NoCacheModel from './nocache-model'

MainChannel = Radio.channel 'global'
AppChannel = Radio.channel 'crown'

class CvLinks extends NoCacheModel
  url: '/assets/documents/cvlinks.json'

class EventIndex extends NoCacheModel
  url: '/assets/events/index.json'

indexModels =
  cvlinks: new CvLinks
  eventIndex: new EventIndex
  
export default indexModels
