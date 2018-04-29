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
AppChannel = Backbone.Radio.channel 'moviedb'

seasonEntryTemplate = tc.renderable (season) ->
  tc.div '.listview-list-entry', ->
    tc.a href:"#moviedb/tv/shows/season/view/#{season.id}", ->
      tc.text season.name
    
baseImageUrl = "https://image.tmdb.org/t/p/"

class ShowView extends Marionette.View
  template: tc.renderable (model) ->
    D = model
    #tc.div '.card.bg-secondary.text-white', ->
    tc.div '.card.bg-body-d5', ->
      tc.div '.row', ->
        tc.div '.col-sm-2', ->
          if model?.images?.posters
            path = model.images.posters[0].file_path
            url = "#{baseImageUrl}w200#{path}"
            tc.img '.card-img-bottom', src:url
          else
            noImage '5x'
        tc.div '.col-sm-9', ->
          tc.div '.card-block', ->
            tc.h3 '.card-title', model.name
            tc.raw model.overview
      tc.div '.row', ->
        tc.div '.col-sm-12', ->
          tc.div '.listview-header', 'Seasons'
          for s in model.seasons
            if s.season_number
              seasonEntryTemplate s
          for s in model.seasons
            if not s.season_number
              seasonEntryTemplate s
              
        tc.div '.col-sm-12', ->
          tc.div '.listview-header', "ShowObject"
          tc.div '.jsonview.listview-list-entry', style:'overflow:auto'
          
  ui:
    body: '.jsonview'
    episodesButton: '.episodes-button'
    saveEpisodesButton: '.save-episodes'
    episodesList: '.episode-list-region'
  regions:
    episodes: '@ui.episodesList'
  onDomRefresh: ->
    @jsonView = new JView @model.toJSON()
    @ui.body.prepend @jsonView.dom

  showLocalEpisodes: ->
    response = @localEpisodes.fetch data: show_id: @model.get 'id'
    response.done =>
      if @localEpisodes.isEmpty()
        MessageChannel.request "info", "Retrieving episodes..."
        ecoll = AppChannel.request 'get-remote-episodes', @model.id
        response = ecoll.fetch()
        response.done =>
          @saveEpisodes ecoll
      else
        view = new EpisodeListView
          collection: @localEpisodes
        @showChildView 'episodes', view


  saveEpisodes: (collection) ->
    showID = @model.get 'id'
    promises = []
    collection.models.forEach (model) ->
      data =
        id: model.get 'id'
        show_id: showID
        content: model.toJSON()
      p = AppChannel.request 'save-local-episode', data
      promises.push p
    Promise.all(promises).then (data) =>
      if promises.length
        @showLocalEpisodes()
      MessageChannel.request 'success', "Retrieved #{promises.length} episodes."
      
module.exports = ShowView

