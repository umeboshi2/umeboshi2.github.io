$ = require 'jquery'
Backbone = require 'backbone'
Marionette = require 'backbone.marionette'
tc = require 'teacup'
marked = require 'marked'
JView = require 'json-view'
require 'json-view/devtools.css'

BootstrapFormView = require('tbirds/views/bsformview').default
{ navigate_to_url } = require 'tbirds/util/navigate-to-url'
{ form_group_input_div } = require 'tbirds/templates/forms'


MessageChannel = Backbone.Radio.channel 'messages'
AppChannel = Backbone.Radio.channel 'tvmaze'

class EpisodeView extends Marionette.View
  template: tc.renderable (model) ->
    tc.div '.listview-list-entry.bg-secondary', ->
      tc.span model.name

class EpisodeListView extends Marionette.View
  template: tc.renderable (model) ->
    tc.div '.listview-header', ->
      tc.text "Episodes"
    tc.div '.episode-list'
  ui:
    header: '.listview-header'
    itemList: '.episode-list'
  regions:
    itemList: '@ui.itemList'
  onRender: ->
    view = new Marionette.CollectionView
      collection: @collection
      childView: EpisodeView
    @showChildView 'itemList', view

class ShowView extends Marionette.View
  template: tc.renderable (model) ->
    tc.div '.card.bg-secondary.text-white', ->
      tc.div '.row', ->
        tc.div '.col-sm-2', ->
          tc.img '.card-img-bottom', src:model.content.image.medium
        tc.div '.col-sm-9', ->
          tc.div '.card-block', ->
            tc.h3 '.card-title', model.content.name
            tc.raw model.content.summary
      tc.div '.row', ->
        tc.div '.col-sm-8', ->
          tc.button '.episodes-button.btn.btn-primary', 'Get Episodes'
          tc.div '.episode-list-region'
    tc.div '.jsonview', "hello world"
  ui:
    body: '.jsonview'
    episodesButton: '.episodes-button'
    episodesList: '.episode-list-region'
  regions:
    episodes: '@ui.episodesList'
  events:
    'click @ui.episodesButton': 'showEpisodes'
  onDomRefresh: ->
    data = @model.toJSON()
    @jsonView = new JView data
    @ui.body.prepend @jsonView.dom
  showEpisodes: ->
    console.log "showEpisodes", @model.id
    emodel = AppChannel.request 'get-remote-episodes', @model.id
    response = emodel.fetch()
    response.done =>
      view = new EpisodeListView
        collection: emodel
      @showChildView 'episodes', view
      console.log "emodel", emodel
      window.emodel = emodel
    
module.exports = ShowView

