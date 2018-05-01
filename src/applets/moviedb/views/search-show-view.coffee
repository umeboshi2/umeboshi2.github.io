$ = require 'jquery'
_ = require 'underscore'
Backbone = require 'backbone'
Marionette = require 'backbone.marionette'
tc = require 'teacup'
marked = require 'marked'
PageableCollection = require 'backbone.paginator'


BootstrapFormView = require('tbirds/views/bsformview').default
navigate_to_url = require('tbirds/util/navigate-to-url').default

{ form_group_input_div } = require 'tbirds/templates/forms'

MessageChannel = Backbone.Radio.channel 'messages'
AppChannel = Backbone.Radio.channel 'moviedb'

searchForm = tc.renderable ->
  form_group_input_div
    input_id: 'input_show'
    label: 'TV Show'
    input_attributes:
      name: 'tv_show'
      placeholder: 'Enter a tv show'
  tc.input '.submit-btn.btn.btn-primary.btn-sm', type:'submit', value:'Search'
  tc.div '.spinner.fa.fa-spinner.fa-spin.text-primary'

class SearchFormView extends BootstrapFormView
  template: searchForm
  ui:
    tvShow: '[name="tv_show"]'
    submitButton: '.submit-btn'
  initialize: (options) ->
    if false
      @initializeAutoSubmit()
    return super options
    
  initializeAutoSubmit: (options) ->
    @autoClickSubmitOnce = _.once @autoClickSubmit
    setTimeout =>
      @autoClickSubmitOnce()
    , 1000
  createModel: ->
    return new Backbone.Model
  updateModel: ->
    @tvshow = @ui.tvShow.val()
    @model.set 'tvshow', @tvshow
  saveModel: ->
    #@collection.state.query = @tvshow
    @collection.queryParams.query = @tvshow
    response = @collection.fetch()
    response.done =>
      console.log "saveModel response", response, @collection
      @trigger 'save:form:success', @model
    response.fail =>
      MessageChannel.request 'warning', "#{@tvshow} not found."
      @trigger 'save:form:failure', @model

  autoClickSubmit: =>
    @ui.submitButton.click()
    console.log "Submit clicked"
          
    
module.exports = SearchFormView

