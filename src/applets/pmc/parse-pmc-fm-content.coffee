import Backbone from 'backbone'
import Marionette from 'backbone.marionette'
import tc from 'teacup'
import $ from 'jquery'
import _ from 'underscore'
import { JSONPath } from 'jsonpath-plus'

import indexModels from 'common/index-models'
import HasJsonView from 'common/has-jsonview'
import JView from 'json-view'

AppChannel = Backbone.Radio.channel 'pmc'

PMC_URL_PREFIX = "https://www.ncbi.nlm.nih.gov/pmc/articles/"

makePMCurl = (id) ->
  return "#{PMC_URL_PREFIX}PMC#{id}/"

makeDOIurl = (doi) ->
  prefix = "https://dx.doi.org/"
  return prefix + doi

# meta is 'article-meta'
findAbstract = (meta) ->
  content = "Not Found"
  if _.has meta, 'abstract'
    abstract = meta.abstract
    if abstract?.p
      content = abstract.p
    if _.has abstract, 'sec'
      if __DEV__ and DEBUG
        console.log "abstract", abstract
  else
    abstract = "Not Found"
  return abstract
  
parseRecord = (record) ->
  pmh = JSONPath('*..OAI-PMH', record)[0]
  if pmh?.error
    return {}
  journal = JSONPath('*..journal-title', pmh)[0]
  tnode = JSONPath('*..article-title', pmh)[0]
  title = if tnode?.__text then tnode.__text else tnode
  articleIds = JSONPath('*..article-id[?(@["_pub-id-type"]=="doi")]', pmh)[0]
  doi = articleIds?.__text
  meta = JSONPath('*..article-meta', pmh)
  abstract = findAbstract meta
  return
    journal: journal
    title: title
    doi: doi
    abstract: abstract
    

export default parseRecord
