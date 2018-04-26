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

noImage = require('tbirds/templates/no-image-span').default

MessageChannel = Backbone.Radio.channel 'messages'
AppChannel = Backbone.Radio.channel 'tvmaze'

class EpisodeView extends Marionette.View
  template: tc.renderable (model) ->
    content = model.content
    tc.div '.listview-list-entry.bg-body-d10', ->
      #tc.span model.content.name
      if content.summary
        tc.a '.episode-anchor.text-local-secondary', href:"#", content.name
      else
        tc.span '.text-dark', content.name
      if content.season
        tc.span '.bg-body-d5.pull-right', "Season #{content.season}"
      tc.div '.summary', style:'display:none', ->
        tc.raw model.content.summary
  ui:
    episodeAnchor: '.episode-anchor'
    summary: '.summary'
  regions:
    summary: '@ui.summary'
  events:
    'click @ui.episodeAnchor': 'showEpisodeSummary'
  showEpisodeSummary: (event) ->
    event.preventDefault()
    @ui.summary.toggle()
      
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
    D = model.content
    #tc.div '.card.bg-secondary.text-white', ->
    tc.div '.card.bg-body-d5', ->
      tc.div '.row', ->
        tc.div '.col-sm-2', ->
          if D.image?.medium
            tc.img '.card-img-bottom', src:model.content.image.medium
          else
            noImage '5x'
        tc.div '.col-sm-9', ->
          tc.div '.card-block', ->
            tc.h3 '.card-title', model.content.name
            tc.raw model.content.summary
      tc.div '.row', ->
        tc.div '.col-sm-8', ->
          tc.div '.episode-list-region'
        tc.div '.col-sm-3', ->
          tc.div '.listview-header', "ShowObject"
          tc.div '.jsonview.listview-list-entry', style:'overflow:auto'
  ui:
    body: '.jsonview'
    episodesButton: '.episodes-button'
    saveEpisodesButton: '.save-episodes'
    episodesList: '.episode-list-region'
  regions:
    episodes: '@ui.episodesList'
  events:
    'click @ui.episodesButton': 'showEpisodes'
    'click @ui.saveEpisodesButton': 'saveEpisodes'
  onDomRefresh: ->
    data = @model.toJSON()
    @jsonView = new JView data
    @ui.body.prepend @jsonView.dom
    EpisodeCollection = AppChannel.request 'get-local-episode-collection'
    @localEpisodes = new EpisodeCollection
    console.log "@localEpisodes", @localEpisodes
    @showLocalEpisodes()

  showLocalEpisodes: ->
    response = @localEpisodes.fetch data: show_id: @model.get 'id'
    console.log "RESPONSE", response
    response.done =>
      console.log "@localEpisodes", @localEpisodes
      if @localEpisodes.isEmpty()
        MessageChannel.request "info", "Retrieving episodes..."
        ecoll = AppChannel.request 'get-remote-episodes', @model.id
        response = ecoll.fetch()
        response.done =>
          @saveEpisodes ecoll
          console.log "Save episodes"
      else
        view = new EpisodeListView
          collection: @localEpisodes
        @showChildView 'episodes', view


  saveEpisodes: (collection) ->
    showID = @model.get 'id'
    console.log "save the episodes for", showID, collection
    promises = []
    collection.models.forEach (model) ->
      data =
        id: model.get 'id'
        show_id: showID
        content: model.toJSON()
      p = AppChannel.request 'save-local-episode', data
      promises.push p
    Promise.all(promises).then (data) =>
      console.log "ALL DONE", data
      if promises.length
        @showLocalEpisodes()
      MessageChannel.request 'success', "Retrieved #{promises.length} episodes."
module.exports = ShowView

