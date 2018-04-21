import $ from 'jquery'
import Backbone from 'backbone'

import { make_dbchannel } from 'tbirds/crud/basecrudchannel'
import { BaseLocalStorageCollection } from 'tbirds/lscollection'

AppChannel = Backbone.Radio.channel 'ebcsv'

class BaseLocalStorageModel extends Backbone.Model
  initialize: () ->
    @fetch()
    @on 'change', @save, @
  fetch: () ->
    #console.log '===== FETCH FIRED LOADING LOCAL STORAGE ===='
    @set JSON.parse localStorage.getItem @id
  save: (attributes, options) ->
    #console.log '===== CHANGE FIRED SAVING LOCAL STORAGE ===='
    localStorage.setItem(@id, JSON.stringify(@toJSON()))
    return $.ajax
      success: options.success
      error: options.error
  destroy: (options) ->
    #console.log '===== DESTROY LOCAL STORAGE ===='
    localStorage.removeItem @id
  isEmpty: () ->
    _.size @attributes <= 1


class LocalCfgCollection extends BaseLocalStorageCollection
  local_storage_key: 'csv_configlist'
  model: BaseLocalStorageModel
   # FIXME: This is ugly!
  add_cfg: (name) ->
    model = new BaseLocalStorageModel
      id: name
    model.set 'name', name
    @add model
    @save()
    model.fetch()
    return model
  
local_configs = new LocalCfgCollection
AppChannel.reply 'get_local_configs', ->
  local_configs
      
ReqFieldNames = [
  'format'
  'location'
  'returnsacceptedoption'
  'duration'
  'quantity'
  'startprice'
  'dispatchtimemax'
  'conditionid'
  ]

AppChannel.reply 'csv-req-fieldnames-local', ->
  ReqFieldNames

OptFieldNames = [
  'postalcode'
  'paymentprofilename'
  'returnprofilename'
  'shippingprofilename'
  'scheduletime'
  ]
  
AppChannel.reply 'csv-opt-fieldnames-local', ->
  OptFieldNames
  
class BaseCsvFieldsModel extends BaseLocalStorageModel

class BaseReqFieldsModel extends BaseCsvFieldsModel
  fieldType: 'required'
  fieldNames: ReqFieldNames
  
class BaseOptFieldsModel extends BaseCsvFieldsModel
  fieldType: 'optional'
  fieldNames: OptFieldNames



AppChannel.reply 'get-ebcsv-config', (name) ->
  model = new BaseLocalStorageModel
    id: "cfg_#{name}"
  model.fetch()
  return model
  


AppChannel.reply 'get-comic-image-urls', ->
  comic_image_urls = new BaseLocalStorageModel
    id: 'comic-image-urls'
  comic_image_urls.toJSON()

AppChannel.reply 'add-comic-image-url', (url, image_src) ->
  comic_image_urls = new BaseLocalStorageModel
    id: 'comic-image-urls'
  comic_image_urls.set url, image_src
  #comic_image_urls.save()
  
AppChannel.reply 'clear-comic-image-urls', ->
  comic_image_urls = new BaseLocalStorageModel
    id: 'comic-image-urls'
  comic_image_urls.destroy()
  #delete localStorage[comic_image_urls.id]
  console.log "localStorage", localStorage[comic_image_urls.id]
  
AppletLocals = {}
AppChannel.reply 'applet:local:get', (name) ->
  AppletLocals[name]

AppChannel.reply 'applet:local:set', (name, value) ->
  AppletLocals[name] = value
AppChannel.reply 'applet:local:delete', (name) ->
  delete AppletLocals[name]
  
  

current_csv_action = undefined
AppChannel.reply 'set-current-csv-action', (action) ->
  #current_csv_action = action
  AppChannel.request 'applet:local:set', 'currentCsvAction', action
AppChannel.reply 'get-current-csv-action', ->
  #current_csv_action
  AppChannel.request 'applet:local:get', 'currentCsvAction'
  
current_csv_cfg = undefined
AppChannel.reply 'set-current-csv-cfg', (cfg) ->
  #current_csv_cfg = cfg
  AppChannel.request 'applet:local:set', 'currentCsvCfg', cfg
AppChannel.reply 'get-current-csv-cfg', ->
  #current_csv_cfg
  AppChannel.request 'applet:local:get', 'currentCsvCfg'
  
current_csv_dsc = undefined
AppChannel.reply 'set-current-csv-dsc', (dsc) ->
  #current_csv_dsc = dsc
  AppChannel.request 'applet:local:set', 'currentCsvDsc', dsc
AppChannel.reply 'get-current-csv-dsc', ->
  #current_csv_dsc
  AppChannel.request 'applet:local:get', 'currentCsvDsc'

