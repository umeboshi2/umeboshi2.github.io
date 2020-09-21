import Backbone from 'backbone'
import Marionette from 'backbone.marionette'
import tc from 'teacup'
import $ from 'jquery'
import _ from 'underscore'

import indexModels from 'common/index-models'

import PMCEntry from './pmc-entry'

AppChannel = Backbone.Radio.channel 'pmc'

class MainView extends Marionette.View
  template: tc.renderable (model) ->
    tc.div '.input-group', ->
      tc.div '.input-group-prepend', ->
        tc.button '.input-group-text.btn.btn-outline-warning',
        for:'search-pmc', "Search"
      tc.input '#search-pmc.form-control', type:'text',
      placeholder:'Enter search term'
    tc.div '.content'
  ui:
    content: '.content'
    button: 'button'
    input: 'input'
  regions:
    content: '@ui.content'
  events:
    'click @ui.button': 'buttonClicked'
  buttonClicked: ->
    term = @ui.input.val()
    console.log 'buttonClicked', term
    model = AppChannel.request 'make-search-model', term
    response = model.fetch()
    response.done =>
      pmcModels = new Backbone.Collection []
      fmCollection = AppChannel.request 'get-fm-collection'
      console.log "model", model
      res = model.get 'eSearchResult'
      ids = _.map res.IdList.Id, Number
      console.log "IDS", ids
      ids.forEach (pmcid) ->
        local = false
        lmodel = fmCollection.get pmcid
        if lmodel?
          model = lmodel
          local = true
        else
          model = AppChannel.request 'make-remote-model', pmcid
        model.isLocal = ->
          return local
        pmcModels.add model
      view = new Marionette.CollectionView
        collection: pmcModels
        childView: PMCEntry
      @showChildView 'content', view
    
export default MainView
