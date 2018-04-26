import $ from 'jquery'
#import { Model, Collection } from 'backbone'
import Backbone from 'backbone'
import { LoveStore } from 'backbone.lovefield'
import PageableCollection from 'backbone.paginator'

MainChannel = Backbone.Radio.channel 'global'
AppChannel = Backbone.Radio.channel 'tvmaze'

dbConn = MainChannel.request 'main:app:dbConn', 'tvmaze'

TvShowStore = new LoveStore dbConn, 'ShowObject'
TvEpisodeStore = new LoveStore dbConn, 'ShowEpisode'


class LocalTvShow extends Backbone.Model
  loveStore: TvShowStore
  toJSON: ->
    data =
      id: @get 'id'
      content: @get 'content'
    return data
    
class LocalTvShowCollection extends Backbone.Collection
  loveStore: TvShowStore
  model: LocalTvShow

local_shows = new LocalTvShowCollection
AppChannel.reply 'get-local-tvshows', ->
  return local_shows
AppChannel.reply 'get-local-tvshow-model', ->
  return LocalTvShow
AppChannel.reply 'get-local-tvshow-collection', ->
  return LocalTvShowCollection

AppChannel.reply 'save-local-show', (data) ->
  model = new LocalTvShow
    id: data.id
    content: data
  renewed = true
  model.isNew = ->
    if renewed
      renewed = false
      return true
    return false
  local_shows.add model
  p = model.save()
  return p


baseURL = "//api.tvmaze.com"

class SingleShow extends Backbone.Model
  url: ->
    name = @searchName
    "#{baseURL}/singlesearch/shows?q=#{name}"
  
AppChannel.reply 'single-show-search', (name) ->
  model = new SingleShow
  model.searchName = name
  return model
  

class RemoteShow extends Backbone.Model
  urlRoot: ->
    "#{baseURL}/shows"

AppChannel.reply 'get-remote-show', (id) ->
  return new RemoteShow id: id

class RemoteEpisode extends Backbone.Model
  url: ->
    return @get('_links').self.href

class RemoteEpisodes extends Backbone.Collection
  model: RemoteEpisode
  url: ->
    "#{baseURL}/shows/#{@showId}/episodes"

AppChannel.reply 'get-remote-episodes', (id) ->
  collection = new RemoteEpisodes
  collection.showId = id
  return collection





class LocalTvEpisode extends Backbone.Model
  loveStore: TvEpisodeStore
  toJSON: ->
    data =
      id: @get 'id'
      show_id: @get 'show_id'
      content: @get 'content'
    return data

class LocalTvEpisodeCollection extends Backbone.Collection
  loveStore: TvEpisodeStore
  model: LocalTvEpisode
  
local_episodes = new LocalTvEpisodeCollection
AppChannel.reply 'get-local-episodes', ->
  return local_episodes
AppChannel.reply 'get-local-episode-model', ->
  return LocalTvEpisode
AppChannel.reply 'get-local-episode-collection', ->
  return LocalTvEpisodeCollection

# data is id, show_id, content
AppChannel.reply 'save-local-episode', (data) ->
  model = new LocalTvEpisode data
  renewed = true
  model.isNew = ->
    if renewed
      renewed = false
      return true
    return false
  local_episodes.add model
  p = model.save()
  return p



