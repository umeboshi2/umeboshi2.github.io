import Backbone from 'backbone'
import Marionette from 'backbone.marionette'

MainChannel = Backbone.Radio.channel 'global'
AppChannel = Backbone.Radio.channel 'workshop'

class CvLinks extends Backbone.Model
  url: '/assets/documents/cvlinks.json'

class EventIndex extends Backbone.Model
  url: '/assets/events/index.json'

indexModels =
  cvlinks: new CvLinks
  eventIndex: new EventIndex
  
AppChannel.reply 'get-index-model', (name) ->
  return indexModels[name]

class ScraperTodayNew extends Backbone.Model
  ##url: 'https://data.corona-api.org/v1/daily'
  url: 'https://corona-api-landingpage.netlify.com/v1/daily'
  
class ScraperToday extends Backbone.Collection
  url: ->
    if __DEV__
      return "/assets/dev/latest.json"
    else
      return "https://coronadatascraper.com/latest.json"
  
scraperToday = new ScraperToday

AppChannel.reply 'get-scraper-today', ->
  return scraperToday
  
class ScraperTimeSeriesByLocation extends Backbone.Collection
  
