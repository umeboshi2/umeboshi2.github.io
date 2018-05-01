$ = require 'jquery'
Backbone = require 'backbone'
Marionette = require 'backbone.marionette'
tc = require 'teacup'
JView = require 'json-view'
require 'json-view/devtools.css'

# FIXME
window.jQuery = $
require 'bootstrap-star-rating/css/star-rating.css'
require 'bootstrap-star-rating/themes/krajee-fa/theme.css'
starRating = require 'bootstrap-star-rating/js/star-rating'
require 'bootstrap-star-rating/themes/krajee-fa/theme.js'

navigate_to_url = require('tbirds/util/navigate-to-url').default

noImage = require('tbirds/templates/no-image-span').default
#PointerOnHover = require('tbirds/behaviors/pointer-on-hover').default
HasHeader = require('tbirds/behaviors/has-header').default

{ posterImage
  tvShowDescription } = require './templates'
  
MessageChannel = Backbone.Radio.channel 'messages'
AppChannel = Backbone.Radio.channel 'tvmaze'

#theMovieDb.common.api_key = "6c56481572fd1c226e63a946e759f3a6"
#theMovieDb.common.base_uri = "https://api.themoviedb.org/3/"
baseImageUrl = "https://image.tmdb.org/t/p/"
showTemplateMedia = tc.renderable (model) ->
  tc.div '.media.listview-list-entry', ->
    posterImage model
    tc.div '.media-body', ->
      tvShowDescription model
      tc.button '.select-show.btn.btn-primary',
      style:'display:none', "Select this show"

showTemplateCard = tc.renderable (model) ->
  tc.div '.card.bg-body-d10', ->
    tc.div '.row', ->
      tc.div '.col-lg-3', ->
        posterImage model
        tc.button '.select-show.btn.btn-primary',
        style:'display:none', "Select this show"
      tc.div '.card-block.col-lg-8.ml-2', ->
        tvShowDescription model

class ShowResultView extends Marionette.View
  template: showTemplateCard
  ui:
    selectShow: '.select-show'
    rating: '.rating'
  events:
    'click @ui.selectShow': 'selectShow'
  inLocalCollection: ->
    id = @model.toJSON().show.id
    collection = @getOption 'localCollection'
    return collection.get id
  onRender: ->
    if true or not @inLocalCollection()
      @ui.selectShow.show()
    rating = @model.get 'vote_average'
    @ui.rating.rating
      min: 1
      max: 10
      theme: 'krajee-fa'
      readonly: true
      size: 'xs'
    #@ui.rating.rating 'upate', 3
    
  handleImageHover: ->
    if true or @inLocalCollection()
      @ui.mainImage.css
        cursor: 'pointer'
  selectShow: ->
    id = @model.toJSON().id
    navigate_to_url "#moviedb/tv/shows/view/#{id}"

class SearchResultsView extends Marionette.View
  template: tc.renderable (model) ->
    tc.div '.listview-header', ->
      tc.text "Matched TV Shows"
    tc.div '.show-list'
  ui:
    header: '.listview-header'
    itemList: '.show-list'
  regions:
    itemList: '@ui.itemList'
  behaviors:
    HasHeader:
      behaviorClass: HasHeader
  onRender: ->
    @ui.header.hide()
    view = new Marionette.CollectionView
      collection: @collection
      childView: ShowResultView
      childViewOptions:
        localCollection: new Backbone.Collection
    @showChildView 'itemList', view

module.exports = SearchResultsView


