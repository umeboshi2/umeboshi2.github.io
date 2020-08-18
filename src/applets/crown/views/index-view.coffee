import Backbone from 'backbone'
import Marionette from 'backbone.marionette'
import tc from 'teacup'
JView = require 'json-view'
require 'json-view/devtools.css'

import navigate_to_url from 'tbirds/util/navigate-to-url'

makePageName = (fileName) ->
  return fileName.split('.md')[0]
  
makePageLink = (fileName) ->
  name = makePageName fileName
  return "#pages/blog/cv19/#{name}"

viewTemplate = tc.renderable (model) ->
  tc.div '.row.listview-header', ->
    tc.h1 "Index"
    tc.div '.jsonview'
  tc.div '.index-view'

class LinksView extends Marionette.View
  template: tc.renderable (model) ->
    tc.ul ->
      for link in model.links
        tc.li ->
          if link.startsWith '#pages'
            tc.span '.badge.badge-dark', ->
              tc.a href:link, ->
                tc.text link.split('#pages/blog/cv19/')[1]
          else
            tc.a href:link, link

class PageEntryView extends Marionette.View
  template: tc.renderable (model) ->
    # console.log "template model", model
    tc.div '.row.card', ->
      tc.div '.card-body', ->
        tc.button '.links-btn.btn.btn-dark.btn-sm', ->
          tc.i '.fa.fa-toggle-down.toggle-icon'
        tc.a href:makePageLink(model.name), makePageName model.name
      tc.div '.links-view'
  ui:
    linksBtn: '.links-btn'
    linksView: '.links-view'
    toggleIcon: '.toggle-icon'
  regions:
    linksView: '@ui.linksView'
  events:
    'click @ui.linksBtn': 'linkBtnClicked'
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
  template: viewTemplate
  ui:
    jsonView: '.jsonview'
    indexView: '.index-view'
  regions:
    indexView: '@ui.indexView'
  onRender: ->
    # console.log "MODEL IS", @model
    view = new Marionette.CollectionView
      childView: PageEntryView
      collection: new Backbone.Collection @model.get 'pages'
    @showChildView 'indexView', view
  onDomRefresh2: ->
    @jsonView = new JView @model.toJSON()
    @ui.jsonView.prepend @jsonView.dom
    

export default MainView
