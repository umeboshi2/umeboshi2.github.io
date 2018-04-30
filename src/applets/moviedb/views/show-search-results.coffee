Backbone = require 'backbone'
Marionette = require 'backbone.marionette'
tc = require 'teacup'
JView = require 'json-view'
require 'json-view/devtools.css'

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
      console.log "image URL", url
      tc.img '.mr-3', src:url
    else
      noImage '5x'
    tc.div '.media-body', ->
      tc.h3 '.mt-0', model.name
      premiered = new Date(model.first_air_date).toDateString()
      if premiered isnt "Invalid Date"
        tc.h4 "Premiered: #{premiered}"
      tc.p model.overview
      tc.button '.select-show.btn.btn-primary',
      style:'display:none', "Select this show"
    
showTemplateCard = tc.renderable (model) ->
  #console.log "Showtemplate", model
  tc.div '.card.bg-body-d5', ->
    tc.div '.row', ->
      tc.div '.col-sm-2', ->
        if model?.poster_path
          url = "#{baseImageUrl}w200#{model.poster_path}"
          console.log "image URL", url
          tc.img '.main-image.card-img-bottom', src:url
        else
          noImage '5x'
      tc.div '.col-sm-9', ->
        tc.div '.card-block.bg-body-d10', ->
          tc.h3 '.card-title', model.name
          tc.h4 "Premiered: #{model.first_air_date}"
          tc.p model.overview
        tc.button '.select-show.btn.btn-primary',
        style:'display:none', "Select this show"

  

showTemplate = showTemplateMedia
class ShowResultView extends Marionette.View
  template: showTemplate
  ui:
    selectShow: '.select-show'
    mainImage: '.main-image'
  events:
    'click @ui.selectShow': 'selectShow'
    'mouseenter @ui.mainImage': 'handleImageHover'
    'click @ui.mainImage': 'viewShow'
  inLocalCollection: ->
    id = @model.toJSON().show.id
    collection = @getOption 'localCollection'
    return collection.get id
  onRender: ->
    if true or not @inLocalCollection()
      @ui.selectShow.show()
  handleImageHover: ->
    if true or @inLocalCollection()
      @ui.mainImage.css
        cursor: 'pointer'
  viewShow: ->
    id = @model.toJSON().id
    navigate_to_url "#moviedb/tv/shows/view/#{id}"

  selectShow: ->
    @viewShow()

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
    console.log "Collection", @collection
        

module.exports = SearchResultsView


