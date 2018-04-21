import $ from 'jquery'
import Backbone from 'backbone'
import Marionette from 'backbone.marionette'
import tc from 'teacup'
import ms from 'ms'

{ MainController } = require 'tbirds/controllers'
import ToolbarView from 'tbirds/views/button-toolbar'
import ShowInitialEmptyContent from 'tbirds/behaviors/show-initial-empty'
import SlideDownRegion from 'tbirds/regions/slidedown'

import navigate_to_url from 'tbirds/util/navigate-to-url'
import scroll_top_fast from 'tbirds/util/scroll-top-fast'

MainChannel = Backbone.Radio.channel 'global'
MessageChannel = Backbone.Radio.channel 'messages'
ResourceChannel = Backbone.Radio.channel 'resources'

import AppChannel from './app-channel'




class ToolbarAppletLayout extends Backbone.Marionette.View
  behaviors:
    ShowInitialEmptyContent:
      behaviorClass: ShowInitialEmptyContent
  template: tc.renderable (model) ->
    tc.div '.col-sm-12', ->
      tc.div '.row', ->
        tc.div  '#main-toolbar.col-sm-10.col-sm-offset-1'
      tc.div '.row', ->
        tc.div '#main-content.col-sm-10.col-sm-offset-1'
  regions: ->
    region = new SlideDownRegion
      el: '#main-content'
    region.slide_speed = ms '.01s'
    content: region
    toolbar: '#main-toolbar'

toolbarEntryCollection = new Backbone.Collection []
AppChannel.reply 'get-toolbar-entries', ->
  toolbarEntryCollection

button_style = "overflow:hidden;text-overflow:ellipsis;white-space:nowrap;"
  
class EbCsvToolbar extends ToolbarView
  options:
    entryTemplate: tc.renderable (model) ->
      opts =
        style: button_style
      tc.span opts, ->
        tc.i model.icon
        tc.text " "
        tc.text model.label

class Controller extends MainController
  ############################################
  # ebcsv main views
  ############################################
  _show_main_view: =>
    require.ensure [], () =>
      comics = AppChannel.request 'get-comics'
      View = require './views/mainview'
      view = new View
        collection: comics
      @layout.showChildView 'content', view
    # name the chunk
    , 'ebcsv-view-main-view-helper'

  _show_create_csv_view: =>
    require.ensure [], () =>
      comics = AppChannel.request 'get-comics'
      View = require './views/mkcsv'
      view = new View
        collection: comics
      @layout.showChildView 'content', view
    # name the chunk
    , 'ebcsv-view-mkcsv-view-helper'
    
  _show_preview_csv_view: =>
    require.ensure [], () =>
      comics = AppChannel.request 'get-comics'
      View = require './views/csvpreview'
      view = new View
        collection: comics
      @layout.showChildView 'content', view
    # name the chunk
    , 'ebcsv-view-csvpreview-view-helper'
    
  _need_comics_view: (cb) ->
    comics = AppChannel.request 'get-comics'
    if not comics.length
      if __DEV__ and false
        window.comics = comics
        xml_url = '/assets/dev/comics.xml'
        xhr = Backbone.ajax
          type: 'GET'
          dataType: 'text'
          url: xml_url
        xhr.done ->
          content = xhr.responseText
          AppChannel.request 'parse-comics-xml', content, (err, json) ->
            #@_show_main_view()
            cb()
        xhr.fail ->
          navigate_to_url '#ebcsv/xml/upload'
      else
        navigate_to_url '#ebcsv/xml/upload'
    else
      cb()
      
  create_csv: =>
    @setupLayoutIfNeeded()
    cfgs = AppChannel.request 'ebcfg-collection'
    dscs = AppChannel.request 'ebdsc-collection'
    cfgs.fetch().then =>
      dscs.fetch().then =>
        @_need_comics_view @_show_create_csv_view
    
  preview_csv: ->
    @setupLayoutIfNeeded()
    cfg = AppChannel.request 'get-current-csv-cfg'
    dsc = AppChannel.request 'get-current-csv-dsc'
    hlist = AppChannel.request 'get-superheroes-model'
    if cfg is undefined
      if __DEV__
        cfg = AppChannel.request 'get-ebcfg', 1
        dsc = AppChannel.request 'get-ebdsc', 1
        AppChannel.request 'set-current-csv-cfg', cfg
        AppChannel.request 'set-current-csv-dsc', dsc
        cfg.fetch().then =>
          dsc.fetch().then =>
            hlist.fetch().then =>
              @_need_comics_view @_show_preview_csv_view
      else
        navigate_to_url '#ebcsv'
        return
    else
      cfg.fetch().then =>
        dsc.fetch().then =>
          hlist.fetch().then =>
            @_need_comics_view @_show_preview_csv_view
    
  main_view: ->
    @setupLayoutIfNeeded()
    @_need_comics_view @_show_main_view
    
  upload_xml: ->
    @setupLayoutIfNeeded()
    require.ensure [], () =>
      comics = AppChannel.request 'get-comics'
      View = require './views/uploadxml'
      view = new View
        collection: comics
      @layout.showChildView 'content', view
    # name the chunk
    , 'ebcsv-view-upload-xml-view'
    
  view_cached_comics: ->
    @setupLayoutIfNeeded()
    require.ensure [], () =>
      View = require './views/cachedcomics'
      view = new View
      @layout.showChildView 'content', view
    # name the chunk
    , 'ebcsv-view-cached-comics-view'
    
    
  ############################################
  # ebcsv configs
  ############################################
  list_configs: ->
    @setupLayoutIfNeeded()
    require.ensure [], () =>
      #cfgs = AppChannel.request 'ebcfg-collection'
      #
      cfgs = AppChannel.request "get_local_configs"
      window.cfgs = cfgs
      View = require './views/cfglist'
      view = new View
        collection: cfgs
      @layout.showChildView 'content', view
    # name the chunk
    , 'ebcsv-view-list-configs'
    
  add_new_config: ->
    @setupLayoutIfNeeded()
    cfgs = AppChannel.request "get_local_configs"
    require.ensure [], () =>
      Views = require './views/cfgedit'
      view = new Views.NewFormView
      @layout.showChildView 'content', view
      scroll_top_fast()
    # name the chunk
    , 'ebcsv-view-add-cfg'

  view_config: (id) ->
    @setupLayoutIfNeeded()
    require.ensure [], () =>
      View = require './views/cfgview'
      cfgs = AppChannel.request "get_local_configs"
      #model = AppChannel.request 'get-ebcfg', id
      #model.fetch()
      model = cfgs.get id
      console.log "view_config", model, cfgs
      view = new View
        model: model
      @layout.showChildView 'content', view
      scroll_top_fast()
    # name the chunk
    , 'ebcsv-view-config'
    
  edit_config: (id) ->
    @setupLayoutIfNeeded()
    require.ensure [], () =>
      Views = require './views/cfgedit'
      model = AppChannel.request 'get-ebcfg', id
      model.fetch()
      view = new Views.EditFormView
        model: model
      @layout.showChildView 'content', view
    # name the chunk
    , 'ebcsv-edit-config'




  ############################################
  # ebcsv descriptions
  ############################################
  list_descriptions: ->
    @setupLayoutIfNeeded()
    require.ensure [], () =>
      dscs = AppChannel.request 'ebdsc-collection'
      response = dscs.fetch()
      response.done =>
        View = require './views/dsclist'
        view = new View
          collection: dscs
        @layout.showChildView 'content', view
      response.fail ->
        MessageChannel.request 'danger', 'Failed to get descriptions'
    # name the chunk
    , 'ebcsv-view-list-descriptions'
    
  add_new_description: ->
    @setupLayoutIfNeeded()
    require.ensure [], () =>
      Views = require './views/dscedit'
      view = new Views.NewFormView
      @layout.showChildView 'content', view
      scroll_top_fast()
    # name the chunk
    , 'ebcsv-view-add-dsc'

  view_description: (id) ->
    @setupLayoutIfNeeded()
    require.ensure [], () =>
      View = require './views/dscview'
      model = AppChannel.request 'get-ebdsc', id
      response = model.fetch()
      response.done =>
        view = new View
          model: model
        @layout.showChildView 'content', view
        scroll_top_fast()
      response.fail ->
        MessageChannel.request 'danger', 'Failed to get descriptions'
    # name the chunk
    , 'ebcsv-view-description'
    
  edit_description: (id) ->
    @setupLayoutIfNeeded()
    require.ensure [], () =>
      Views = require './views/dscedit'
      model = AppChannel.request 'get-ebdsc', id
      response = model.fetch()
      response.done =>
        view = new Views.EditFormView
          model: model
        @layout.showChildView 'content', view
      response.fail ->
        MessageChannel.request 'danger', 'Failed to get descriptions'
    # name the chunk
    , 'ebcsv-edit-description'

export default Controller

