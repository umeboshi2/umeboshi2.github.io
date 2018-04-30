import Backbone from 'backbone'
import PageableCollection from 'backbone.paginator'
import {Configuration, TvSearch} from 'backbone.themoviedb'

import {
  TvDetails as BaseTvDetails
  TvSeasonDetails as BaseTvSeasonDetails
  } from 'backbone.themoviedb/src/tv'

import theMovieDb from 'themoviedb-javascript-library'

theMovieDb.common.api_key = "6c56481572fd1c226e63a946e759f3a6"
theMovieDb.common.base_uri = "https://api.themoviedb.org/3/"
theMovieDb.common.images_uri = "https://image.tmdb.org/t/p/"
theMovieDb.common.timeout = 2000

AppChannel = Backbone.Radio.channel 'moviedb'

AppChannel.reply 'get-movie-db', ->
  return theMovieDb

db = theMovieDb

# https://stackoverflow.com/a/22519785/1869821
getTvPromise = (options) ->
  return new Promise (resolve, reject) ->
    db.search.getTv options, resolve, reject

getTv = (options) ->
  d = Backbone.$.Deferred()
  s = (res) ->
    d.resolve res
  r = (err) ->
    d.reject err
  db.search.getTv options, s, r
  return d.promise()
  

baseUri = "https://api.themoviedb.org/3"
apiKey = "6c56481572fd1c226e63a946e759f3a6"

class ConfigModel extends Configuration
  apiKey: apiKey

config = JSON.parse localStorage.themoviedb_config
if not config
  cmodel = new ConfigModel
  r = cmodel.fetch()
  r.done ->
    object =
      updated: new Date()
      content: cmodel.toJSON()
    localStorage.setItem 'themoviedb_config', JSON.stringify object
    config = object

AppChannel.reply 'get-moviedb-config', ->
  return config
  
  
class SearchTvCollection extends TvSearch
  apiKey: apiKey

AppChannel.reply 'SearchTvCollection', ->
  return SearchTvCollection

class TvDetails extends BaseTvDetails
  apiKey: apiKey

AppChannel.reply 'TvDetails', ->
  return TvDetails

class TvSeasonDetails extends BaseTvSeasonDetails
  apiKey: apiKey

AppChannel.reply 'TvSeasonDetails', ->
  return TvSeasonDetails
  
