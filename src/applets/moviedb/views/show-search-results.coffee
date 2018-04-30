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

MessageChannel = Backbone.Radio.channel 'messages'
AppChannel = Backbone.Radio.channel 'tvmaze'

#theMovieDb.common.api_key = "6c56481572fd1c226e63a946e759f3a6"
#theMovieDb.common.base_uri = "https://api.themoviedb.org/3/"
baseImageUrl = "https://image.tmdb.org/t/p/"
showTemplateMedia = tc.renderable (model) ->
  tc.div '.media.listview-list-entry', ->
    if model?.poster_path
      url = "#{baseImageUrl}w200#{model.poster_path}"
      tc.img '.mr-3', src:url
    else
      noImage '5x'
    tc.div '.media-body', ->
      tc.h3 '.mt-0', model.name
      premiered = new Date(model.first_air_date).toDateString()
      if premiered isnt "Invalid Date"
        tc.h4 "Premiered: #{premiered}"
      ended = new Date(model.last_air_date).toDateString()
      if ended isnt "Invalid Date"
        tc.h4 "Ended: #{ended}"
      tc.input '.rating', type:'number',
      style:'display:none', value:model.vote_average
      tc.p model.overview
      tc.button '.select-show.btn.btn-primary',
      style:'display:none', "Select this show"
    
class ShowResultView extends Marionette.View
  template: showTemplateMedia
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


