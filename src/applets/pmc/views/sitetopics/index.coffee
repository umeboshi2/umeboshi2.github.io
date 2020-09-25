import Backbone from 'backbone'
import Marionette from 'backbone.marionette'
import tc from 'teacup'
import $ from 'jquery'
import _ from 'underscore'

import indexModels from 'common/index-models'

import PMCEntry from './pmc-entry'

AppChannel = Backbone.Radio.channel 'pmc'

class TopicView extends Marionette.View
  className: 'list-group'
  template: tc.renderable (model) ->
    tc.h3 model.name
    tc.div '.papers'
  ui:
    showBtn: '.show-btn'
    papers: '.papers'
  regions:
    papers: '@ui.papers'
  events:
    'click @ui.showBtn': 'showBtnClicked'
  onRender: ->
    if not @getRegion('papers').hasView()
      pmcModels = new Backbone.Collection []
      fmCollection = AppChannel.request 'get-fm-collection'
      @model.get('pmc_ids').forEach (pmcid) ->
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
      @showChildView 'papers', view
    
    
class MainView extends Marionette.View
  template: tc.renderable (model) ->
    tc.div '.input-group', ->
      tc.div '.input-group-prepend', ->
        tc.button '.input-group-text.btn.btn-outline-warning',
        for:'select-category', "Category"
      tc.select '#select-category.custom-select', ->
        tc.option value:'', selected:'', "(no category)"
        for name of model.categories
          if model.categories[name].pmc_ids.length
            tc.option value:name, name
    tc.div '.content'
  ui:
    select: 'select'
    content: '.content'
    button: 'button'
  regions:
    content: '@ui.content'
  events:
    'change @ui.select': 'selectChanged'
    'click @ui.button': 'buttonClicked'
  selectChanged: (event) ->
    value = $(event.target).val()
    region = @getRegion('content')
    if not value
      region.empty()
    else
      tdata = @model.get('topics')[value]
      fmCollection = AppChannel.request 'get-fm-collection'
      response = fmCollection.fetch()
      response.done ->
        view = new TopicView
          model: new Backbone.Model tdata
        region.show view
      
export default MainView
