Backbone = require 'backbone'
Marionette = require 'backbone.marionette'

FDTemplates = require './templates'


{ remove_trailing_slashes
  make_json_post } = require 'apputil'

#require 'jquery-ui'

MainChannel = Backbone.Radio.channel 'global'

class FrontDoorMainView extends Backbone.Marionette.ItemView
  template: FDTemplates.DefaultViewTemplate

  onDomRefresh: ->
    require.ensure [], () =>
      require 'jquery-ui'
      $('.ui-draggable').draggable()
    , 'jqueryui-in-frontdoor'
    

class FolderView extends Backbone.Marionette.ItemView
  initialize: ->
    require.ensure [], () =>
      require 'jquery-ui'
      tableDnD = require 'tablednd'
    , 'tablednd-in-frontdoor'
    
  template: FDTemplates.FolderViewTemplate

module.exports =
  FrontDoorMainView: FrontDoorMainView
  FolderView: FolderView

