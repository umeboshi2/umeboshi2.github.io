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
  template: tc.renderable (model) ->
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
        if content?.abstract
          tc.p '.card-text.small', content.abstract
      tc.div '.jsonview'
  ui:
    pmcAnchor: '.pmc-anchor'
    deleteBtn: '.destroy-btn'
    jsonView: '.jsonview'
  events:
    'click @ui.pmcAnchor': 'pmcAnchorClicked'
    'click @ui.deleteBtn': 'deleteBtnClicked'
  onRender: ->
    if not __DEV__
      @ui.jsonView.hide()
  pmcAnchorClicked: (event) ->
    event.preventDefault()
  deleteBtnClicked: (event) ->
    fmCollection = AppChannel.request 'get-fm-collection'
    model = fmCollection.get @model.id
    response = model.destroy()
    response.done =>
      @trigger 'model:destroyed'

export default PMCFrontMatter
