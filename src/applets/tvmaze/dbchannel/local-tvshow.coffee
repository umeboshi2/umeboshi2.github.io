import Backbone from 'backbone'
import { LoveStore } from 'backbone.lovefield'

MainChannel = Backbone.Radio.channel 'global'
AppChannel = Backbone.Radio.channel 'tvmaze'

dbConn = MainChannel.request 'main:app:dbConn', 'tvmaze'

TvShowStore = new LoveStore dbConn, 'TVMazeShow'

showFields = [ 'id', 'name', 'url', 'self', 'premiered',
  'runtime', 'network_name', 'imdb', 'status', 'summary',
  'img_med', 'img_orig', 'content'
  ]
class LocalTvShow extends Backbone.Model
  loveStore: TvShowStore
  toJSON: ->
    data = {}
    showFields.forEach (field) =>
      data[field] = @get field
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
    name: data.name
    url: data.url
    self: data._links.self.href
    premiered: new Date data.premiered
    runtime: data.runtime
    network_name: data?.network?.name or 'NO NETWORK'
    imdb: data.externals?.imdb or ''
    status: data.status
    summary: data.summary
    img_med: data.image?.medium
    img_orig: data.image?.original
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


