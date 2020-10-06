import NoCacheModel from './nocache-model'

export class CvLinks extends NoCacheModel
  url: '/assets/documents/cvlinks.json'

export class EventIndex extends NoCacheModel
  url: '/assets/events/index.json'

indexModels =
  cvlinks: new CvLinks
  eventIndex: new EventIndex
  
export default indexModels
