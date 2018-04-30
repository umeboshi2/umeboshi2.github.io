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

SeasonsView = require './seasons'


MessageChannel = Backbone.Radio.channel 'messages'
AppChannel = Backbone.Radio.channel 'moviedb'

baseImageUrl = "https://image.tmdb.org/t/p/"

class ShowView extends Marionette.View
  template: tc.renderable (model) ->
    tc.div '.card.bg-body-d5', ->
      tc.div '.row', ->
        tc.div '.col-sm-2', ->
          if model?.images?.posters.length
            path = model.images.posters[0].file_path
            url = "#{baseImageUrl}w200#{path}"
            tc.img '.card-img-bottom', src:url
          else
            noImage '5x'
        tc.div '.col-sm-9', ->
          tc.div '.card-block', ->
            tc.h3 '.card-title', model.name
            tc.raw model.overview
      tc.div '.seasons-row.row'
      tc.div '.row', ->
        tc.div '.col-sm-12', ->
          tc.div '.listview-header', "ShowObject"
          tc.div '.jsonview.listview-list-entry', style:'overflow:auto'
          
  ui:
    jsonView: '.jsonview'
    episodesButton: '.episodes-button'
    saveEpisodesButton: '.save-episodes'
    episodesList: '.episode-list-region'
    seasonsRow: '.seasons-row'
  regions:
    seasonsRow: '.seasons-row'
    episodes: '@ui.episodesList'
  onRender: ->
    view = new SeasonsView
      model: @model
    @showChildView 'seasonsRow', view
  onDomRefresh: ->
    @jsonView = new JView @model.toJSON()
    @ui.jsonView.prepend @jsonView.dom

module.exports = ShowView


