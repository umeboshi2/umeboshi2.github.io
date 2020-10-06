import { Radio } from 'backbone'
import { View as MnView, CollectionView } from 'backbone.marionette'
import tc from 'teacup'

import PaginateBar from 'tbirds/views/paginate-bar'
import { eventIndex } from 'common/index-models'
import PMCFrontMatter from './pmc-front-matter'

import { ProgressModel, ProgressView } from 'tbirds/views/simple-progress'


AppChannel = Radio.channel 'pmc'

class MainView extends MnView
  template: tc.renderable ->
    tc.h3 '.text-center', "Import PMC Data"
    tc.div '.paginate-bar'
    tc.div '.content'
  ui:
    content: '.content'
    paginateBar: '.paginate-bar'
  regions:
    content: '@ui.content'
    paginateBar: '@ui.paginateBar'

export default MainView
