import Backbone from 'backbone'
import Marionette from 'backbone.marionette'
import tc from 'teacup'
import $ from 'jquery'
import _ from 'underscore'

import HasJsonView from 'common/has-jsonview'
import parseRecord from '../parse-pmc-fm-content'
import makePMCurl from 'common/make-pmc-url'
import makeDOIurl from 'common/make-doi-url'

AppChannel = Backbone.Radio.channel 'pmc'

class PMCFrontMatter extends Marionette.View
  behaviors: [HasJsonView]
  templateContext: ->
    articleMeta: @model.getFront()['article-meta']
  template: tc.renderable (model) ->
    meta = model.articleMeta
    content = parseRecord model
    href = makePMCurl(model.id)
    tc.div '.card', ->
      tc.div '.card-body', ->
        tc.h5 '.card-title',  content.title
        tc.div '.small', content.journal
        tc.a '.pmc-anchor.small', href:href, '(PMC)'
        if content?.doi
          tc.a '.small', href:makeDOIurl(content.doi), target:'_blank', ->
            tc.text " (doi:#{content.doi})"
        tc.button '.destroy-btn.btn.btn-outline-danger.btn-sm', 'Delete'
        if meta?.abstract
          abstract = meta.abstract
          tc.div '.abstract-card.card-text', style:'display: none;', ->
            tc.text "Abstract"
            if abstract?.sec
              for item in meta.abstract.sec
                tc.h6 '.card-text.small', item.title
                tc.p '.card-text.small', item.p
            else
              tc.div '.card-text.small', abstract?.p
        tc.div '.abstract-container'
        tc.div '.card-footer', ->
          tc.span '.abstract-btn.badge.badge-dark', type:'button', ->
            tc.text 'toggle abstract'
          tc.span '.topics-btn.badge.badge-dark', type:'button', 'assign topics'
      tc.div '.jsonview'
  ui:
    pmcAnchor: '.pmc-anchor'
    deleteBtn: '.destroy-btn'
    jsonView: '.jsonview'
    abstractCard: '.abstract-card'
    abstractBtn: '.abstract-btn'
    topicsBtn: '.topics-btn'
  events:
    'click @ui.pmcAnchor': 'pmcAnchorClicked'
    'click @ui.deleteBtn': 'deleteBtnClicked'
    'click @ui.abstractBtn': 'abstractBtnClicked'
    'click @ui.topicsBtn': 'topicsBtnClicked'
  onRender: ->
    if not __DEV__
      @ui.jsonView.hide()
  pmcAnchorClicked: (event) ->
    event.preventDefault()
  deleteBtnClicked: (event) ->
    response = @model.destroy()
    response.done =>
      @trigger 'model:destroyed'
  abstractBtnClicked: ->
    @ui.abstractCard.toggle()

export default PMCFrontMatter
