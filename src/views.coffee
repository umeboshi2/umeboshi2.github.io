Backbone = require 'backbone'
Marionette = require 'backbone.marionette'


NavTemplates = require './templates/navbar'
EditorBarTemplates = require './templates/editorbar'
LayoutTemplates = require './templates/layout'
MiscTemplates = require './templates/misc'

MainChannel = Backbone.Radio.channel 'global'
MessageChannel = Backbone.Radio.channel 'messages'

class MainPageLayout extends Backbone.Marionette.LayoutView
  #template: LayoutTemplates.MainLayoutTemplate
  template: LayoutTemplates.MainFluidLayoutTemplate

class BootstrapNavBarView extends Backbone.Marionette.LayoutView
  template: NavTemplates.nav_pt
  window.NavTemplates = NavTemplates
  regions:
    #navbarview: '#navbar-view'
    usermenu: '#user-menu'
    mainmenu: '#main-menu'

class MainSearchFormView extends Backbone.Marionette.ItemView
  template: NavTemplates.nav_pt_search

class EditBarView extends Backbone.Marionette.LayoutView
  template: EditorBarTemplates.editor_bar_pt

class UserMenuView extends Backbone.Marionette.ItemView
  template: MiscTemplates.user_menu

class MessageView extends Backbone.Marionette.ItemView
  template:MiscTemplates.message_box
  ui:
    close_button: 'button.close'

  events:
    'click @ui.close_button': 'destroy_message'

  destroy_message: ->
    #console.log "Destroy message", @model.get("content")
    MessageChannel.request 'delete-message', @model
    

class MessagesView extends Backbone.Marionette.CollectionView
  childView: MessageView
  
  
module.exports =
  MainPageLayout: MainPageLayout
  MainSearchFormView: MainSearchFormView
  EditBarView: EditBarView
  BootstrapNavBarView: BootstrapNavBarView
  UserMenuView: UserMenuView
  MessagesView: MessagesView
  

