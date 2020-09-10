import Backbone from 'backbone'
import Marionette from 'backbone.marionette'
import tc from 'teacup'

import JView from 'json-view'
import 'common/json-view.css'
import HasJsonView from 'common/has-jsonview'

class LinksView extends Marionette.View
  template: tc.renderable (model) ->
    tc.div 'list-group-item', ->
      tc.label "Cases:"
      tc.text " #{model.cases}"
    tc.div 'list-group-item', ->
      tc.label "Deaths:"
      tc.text " #{model.deaths}"

class PageEntryView extends Marionette.View
  className: 'list-group'
  template: tc.renderable (model) ->
    tc.div '.row.card', ->
      tc.div '.card-body', ->
        tc.strong model.name
        tc.div ->
          tc.text "Cases: #{model.cases}"
        tc.div ->
          tc.text "Deaths: #{model.deaths}"
      tc.div '.links-view'
      tc.div '.json-view'
  ui:
    linksBtn: '.links-btn'
    linksView: '.links-view'
    toggleIcon: '.toggle-icon'
    jsonView: '.json-view'
  regions:
    linksView: '@ui.linksView'
  events:
    'click @ui.linksBtn': 'linkBtnClicked'
  behaviors:
    HasJsonView:
      behaviorClass: HasJsonView
  linkBtnClicked: (event) ->
    region = @getRegion('linksView')
    if region.hasView()
      region.empty()
      @ui.toggleIcon.removeClass 'fa-toggle-up'
      @ui.toggleIcon.addClass 'fa-toggle-down'
    else
      @showListView()
      @ui.toggleIcon.removeClass 'fa-toggle-down'
      @ui.toggleIcon.addClass 'fa-toggle-up'
  showListView: ->
    links = @model.get 'links'
    name = @model.get 'name'
    # console.log name, links
    view = new LinksView
      model: @model
    @showChildView 'linksView', view
    
  
class MainView extends Marionette.View
  template: tc.renderable (model) ->
    tc.div '.row.listview-header', ->
      tc.h1 "Scraper Today"
    tc.button '.refresh-btn.btn.btn-outline-warning', 'Refresh Data'
    tc.div '.index-view'
  ui:
    indexView: '.index-view'
    refreshBtn: '.refresh-btn'
  regions:
    indexView: '@ui.indexView'
  events:
    'click @ui.refreshBtn': 'refreshBtnClicked'
  showIndexView: ->
    filtered = @collection.filter stateName:"Mississippi", level:"county"
    view = new Marionette.CollectionView
      childView: PageEntryView
      collection: new Backbone.Collection filtered
    @showChildView 'indexView', view
    
  onRender: ->
    @showIndexView()
    
  refreshBtnClicked: ->
    @ui.refreshBtn.removeClass 'btn-link'
    @ui.refreshBtn.addClass 'btn-warning'
    response = @collection.fetch
      data:
        nocache: Date.now()
    response.done =>
      region = @getRegion 'indexView'
      region.empty()
      @showIndexView()
      @ui.refreshBtn.removeClass 'btn-warning'
      @ui.refreshBtn.addClass 'btn-link'
      
        
  onDomRefresh2: ->
    @jsonView = new JView @model.toJSON()
    @ui.jsonView.prepend @jsonView.dom
    

export default MainView
