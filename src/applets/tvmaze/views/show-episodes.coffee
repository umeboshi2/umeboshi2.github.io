Backbone = require 'backbone'
Marionette = require 'backbone.marionette'
tc = require 'teacup'
JView = require 'json-view'
require 'json-view/devtools.css'

{ navigate_to_url } = require 'tbirds/util/navigate-to-url'
{ form_group_input_div } = require 'tbirds/templates/forms'

noImage = require('tbirds/templates/no-image-span').default

MessageChannel = Backbone.Radio.channel 'messages'
AppChannel = Backbone.Radio.channel 'tvmaze'

episodeTemplate = tc.renderable (model) ->
  tc.div '.card.bg-body-d10', ->
    tc.div '.card-header', ->
      if model.summary or model.img_med
        tc.span '.text-local-secondary', href:"#", model.name
        #tc.a '.episode-anchor.text-local-secondary', href:"#", model.name
      else
        tc.span '.text-light', model.name
      tc.span '.bg-body-d5.pull-right', ->
        if model.season
          tc.span "Season #{model.season}"
          tc.raw '&nbsp;&nbsp;&nbsp;'
        tc.span '.bg-body-d10', model.airdate.toDateString()
    tc.div '.card-block', ->
      tc.div '.summary.row', style:'display:none', ->
        if model?.img_med
          tc.div '.col-sm-7', ->
            tc.raw model.summary
          tc.div '.col-sm-3', ->
            tc.img src:model.img_med
        else
          tc.div '.col-sm-12', ->
            tc.raw model.summary
      tc.div '.jsonview'
          

listViewTemplate = tc.renderable (model) ->
  tc.div '.listview-list-entry.bg-body-d10', ->
    #tc.span model.content.name
    if model.summary or model.img_med
      tc.h3 '.text-local-secondary', href:"#", model.name
    else
      tc.span '.text-dark', model.name
    tc.span '.bg-body-d5.pull-right', ->
      if model.season
        tc.span "Season #{model.season}"
        tc.raw '&nbsp;&nbsp;&nbsp;'
      tc.span '.bg-body-d10', model.airdate.toDateString()
    tc.div '.summary.row', style:'display:none', ->
      if model?.img_med
        tc.div '.col-sm-7', ->
          tc.raw model.summary
        tc.div '.col-sm-3', ->
          tc.img src:model.img_med
      else
        tc.div '.col-sm-12', ->
          tc.raw model.summary
        
    tc.div '.jsonview'
    
class EpisodeView extends Marionette.View
  template: episodeTemplate
  ui:
    summary: '.summary'
    objectContainer: '.jsonview'
  regions:
    summary: '@ui.summary'
    objectContainer: '@ui.objectContainer'
  events:
    'click': 'showEpisodeSummary'
    'hover': 'handleHover'
    'mouseenter': 'handleHover'
    
  canShowSummary: ->
    summary = @model.get 'summary'
    img_med = @model.get 'img_med'
    return summary or img_med
    
  showEpisodeSummary: (event) ->
    event.preventDefault()
    if @canShowSummary()
      @ui.summary.toggle()
  onDomRefreshJsonVIew: ->
    @jsonview = new JView @model.toJSON()
    @ui.objectContainer.prepend @jsonview.dom
  handleHover: ->
    if @canShowSummary()
      @$el.css
        cursor: 'pointer'
        
class EpisodeListView extends Marionette.View
  template: tc.renderable (model) ->
    tc.div '.listview-header', ->
      tc.text "Episodes"
    tc.div '.episode-list'
  ui:
    header: '.listview-header'
    itemList: '.episode-list'
  regions:
    itemList: '@ui.itemList'
  onRender: ->
    view = new Marionette.CollectionView
      collection: @collection
      childView: EpisodeView
    @showChildView 'itemList', view

module.exports = EpisodeListView


