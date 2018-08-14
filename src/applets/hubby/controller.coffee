Backbone = require 'backbone'
Marionette = require 'backbone.marionette'
tc = require 'teacup'
ms = require 'ms'

{ MainController } = require 'tbirds/controllers'
{ ToolbarAppletLayout } = require 'tbirds/views/layout'
# FIXME
navigateToUrl = require('tbirds/util/navigate-to-url').default

MainChannel = Backbone.Radio.channel 'global'
MessageChannel = Backbone.Radio.channel 'messages'
AppChannel = Backbone.Radio.channel 'hubby'
class ToolbarView extends Backbone.Marionette.View
  template: tc.renderable () ->
    tc.div '.btn-group.btn-group-justified', ->
      tc.div '#show-calendar-button.btn.btn-default', ->
        tc.i '.fa.fa-calendar', ' Calendar'
      tc.div '#list-meetings-button.btn.btn-default', ->
        tc.i '.fa.fa-list', ' List Meetings'
    tc.div '.input-group', ->
      tc.input '.form-control', type:'text', placeholder:'search',
      name:'search'
      tc.span '.input-group-btn', ->
        tc.button '#search-button.btn.btn-default', ->
          tc.i '.fa.fa-search', 'Search'
        
  ui:
    search_bth: '#search-button'
    show_cal_btn: '#show-calendar-button'
    list_btn: '#list-meetings-button'
    search_entry: '.form-control'
    
  events:
    'click @ui.show_cal_btn': 'show_calendar'
    'click @ui.list_btn': 'list_meetings'
    'click @ui.search_bth': 'search_hubby'

  show_calendar: ->
    hash = '#hubby'
    if window.location.hash == hash
      controller = AppChannel.request 'main-controller'
      controller.mainview()
    else
      if __DEV__
        console.log "current url", window.location
      navigateToUrl '#hubby'

  list_meetings: ->
    navigateToUrl '#hubby/listmeetings'

  search_hubby: ->
    controller = AppChannel.request 'main-controller'
    options =
      searchParams:
        title: @ui.search_entry.val()
    console.log "search for", options
    controller.view_items options
    
class Controller extends MainController
  show_calendar: (layout, region) ->
    #console.log "show_calendar", layout, region
    require.ensure [], () ->
      MeetingCalendarView  = require './calendarview'
      options = {}
      if region == 'minicalendar'
        options.minicalendar = true
        options.layout = layout
      view = new MeetingCalendarView options
      layout.showChildView region, view
    # name the chunk
    , 'hubby-show-calendar'
    
  mainview: ->
    @setupLayoutIfNeeded()
    @show_calendar @layout, 'content'
    @scrollTop()

  list_meetings: ->
    @setupLayoutIfNeeded()
    require.ensure [], () =>
      { MainMeetingModel } = require './collections'
      meetings = AppChannel.request 'meetinglist'
      ListMeetingsView = require './listmeetingsview'
      response = meetings.fetch()
      response.done =>
        view = new ListMeetingsView
          collection: meetings
        @layout.showChildView 'content', view
      response.fail ->
        MessageChannel.request 'danger', 'Failed to load meeting list'
    # name the chunk
    , 'hubby-list-meetings-view'


  listPeople: ->
    @setupLayoutIfNeeded()
    require.ensure [], () =>
      View = require './people-view'
      people = AppChannel.request 'personlist'
      response = people.fetch()
      response.done =>
        view = new View
          collection: people
        @layout.showChildView 'content', view
      response.fail ->
        MessageChannel.request 'danger', 'Failed to load people.'
        
  _loadRegionView: (layout, region, View, model) ->
    response = model.fetch()
    response.done =>
      view = new View
        model: model
      layout.showChildView region, view
      @scrollTop()
    response.fail ->
      MessageChannel.request 'danger', 'failed to load model'
      
  show_meeting: (layout, region, meeting_id) ->
    require.ensure [], () =>
      { MainMeetingModel } = require './collections'
      ShowMeetingView  = require './meetingview'
      meeting = new MainMeetingModel
        id: meeting_id
      @_loadRegionView layout, region, ShowMeetingView, meeting
    # name the chunk
    , 'hubby-meetingview'
    
  viewMeetingOld: (meeting_id) ->
    @setupLayoutIfNeeded()
    require.ensure [], () =>
      { MainMeetingModel } = require './collections'
      ShowMeetingView  = require './old-meetingview'
      meeting = new MainMeetingModel
        id: meeting_id
      @_loadRegionView @layout, 'content', ShowMeetingView, meeting
    # name the chunk
    , 'hubby-old-meetingview'
    
  view_meeting: (meeting_id) ->
    @setupLayoutIfNeeded()
    @show_meeting @layout, 'content', meeting_id
    
  view_items: (options) ->
    @setupLayoutIfNeeded()
    @list_items @layout, 'content', options

  list_items: (layout, region, options) ->
    require.ensure [], () ->
      { ItemCollection } = require './collections'
      ListItemsView  = require './search-items-view'
      items = new ItemCollection []
      items.searchParams = options.searchParams
      console.log 'ItemCollection', items
      response = items.fetch()
      response.done =>
        view = new ListItemsView
          collection: items
        layout.showChildView region, view
        @scrollTop()
    # name the chunk
    , 'hubby-search-items-view'

  viewPdfTest: ->
    @setupLayoutIfNeeded()
    require.ensure [], () =>
      model = new Backbone.Model
        url: '/assets/Minutes.pdf'
      View  = require './pdfview'
      view = new View
        model: model
      console.log "THIS IS", @
      @layout.showChildView 'content', view
      @scrollTop()
    # name the chunk
    , 'hubby-pdf-test-view'

    
module.exports = Controller

