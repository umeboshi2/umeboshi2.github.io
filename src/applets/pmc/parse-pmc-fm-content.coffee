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

# meta is 'article-meta'
findAbstract = (meta) ->
  content = "Not Found"
  if _.has meta, 'abstract'
    abstract = meta.abstract
    if abstract?.p
      content = abstract.p
    if _.has abstract, 'sec'
      if __DEV__
        console.log "abstract", abstract
  else
    abstract = "Not Found"
  return abstract
  
parseRecord = (record) ->
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
  content.abstract = findAbstract meta
  return content

export default parseRecord
