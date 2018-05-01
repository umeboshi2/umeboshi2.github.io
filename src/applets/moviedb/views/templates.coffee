$ = require 'jquery'
Backbone = require 'backbone'
Marionette = require 'backbone.marionette'
tc = require 'teacup'


noImage = require('tbirds/templates/no-image-span').default

baseImageUrl = "https://image.tmdb.org/t/p/"

posterImage = tc.renderable (options) ->
  noImageSize = options.noImageSize or '5x'
  imgClass = options.imgClass or '.mr-3'
  imgWidth = options.imgWidth or 200
  if options?.poster_path
    url = "#{baseImageUrl}w#{imgWidth}#{options.poster_path}"
    tc.img imgClass, src:url, style:"width:#{imgWidth}px"
  else
    noImage noImageSize

tvShowDescription = tc.renderable (model) ->
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

objectJsonTemplate = tc.renderable ->
  tc.div '.listview-header', "ShowObject"
  tc.div '.jsonview.listview-list-entry', style:'overflow:auto'
    
    
showTemplateCard = tc.renderable (model) ->
  tc.div '.card.bg-body-d5', ->
    tc.div '.row', ->
      tc.div '.col-lg-3', ->
        posterImage model
      tc.div '.card-block.col-lg-8', ->
        tvShowDescription model


showTemplate = tc.renderable (model) ->
  showTemplateCard model
  tc.div '.seasons-row.row'
  tc.div '.row', ->
    tc.div '.col-md-12', ->
      objectJsonTemplate()
      
    
module.exports =
  posterImage: posterImage
  tvShowDescription: tvShowDescription
  objectJsonTemplate: objectJsonTemplate
  showTemplateCard: showTemplateCard
  showTemplate: showTemplate
  


