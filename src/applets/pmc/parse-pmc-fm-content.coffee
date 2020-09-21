import Backbone from 'backbone'
import Marionette from 'backbone.marionette'
import tc from 'teacup'
import $ from 'jquery'
import _ from 'underscore'

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
  
  
parseRecord = (record) ->
  console.log "RECORD", record
  pmh = record.content['OAI-PMH']
  if pmh?.error
    return {}
  record = pmh.GetRecord.record.metadata.article.front
  content = {}
  jmeta = record['journal-meta']
  tprop = 'journal-title'
  gprop = 'journal-title-group'
  journal = "Not Found"
  if gprop of jmeta
    journal = jmeta[gprop][tprop]
  else if tprop of jmeta
    journal = jmeta[tprop]
  content.journal = journal
  meta = record['article-meta']
  tnode = meta['title-group']['article-title']
  title = "Not Found"
  if tnode?.__text
    title = tnode.__text
  else
    title = tnode
  content.title = title
  articleIds = meta['article-id']
  articleIds.forEach (obj) ->
    if obj?['_pub-id-type'] == 'doi'
      doi = obj.__text
      content.doi = doi
  content.abstract = meta.abstract?.p
  return content

export default parseRecord
