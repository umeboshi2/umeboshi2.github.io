import { Collection } from 'backbone'
import { View as MnView, CollectionView } from 'backbone.marionette'
import tc from 'teacup'

import { Terminal } from 'xterm'
import * as fit from 'xterm/lib/addons/fit/fit'
import './xterm.scss'
Terminal.applyAddon fit

import Worker from 'worker-loader!../worker'

worker = new Worker()
if __DEV__ and DEBUG
  console.log "worker", worker
  

{ navigate_to_url } = require 'tbirds/util/navigate-to-url'

toolbarEntries = [
  {
    id: 'destroy'
    label: 'close'
    icon: '.fa.fa-close'
    buttonClassName: 'btn btn-danger text-light'
  },{
    id: 'create'
    label: 'Talk to Eliza'
    icon: '.fa.fa-terminal.text-light.bg-dark'
  }
]


defaultButtonTemplate = tc.renderable (model) ->
  tc.i model.icon
  tc.text " "
  tc.text model.label

defaultButtonClassName = "btn btn-outline-primary"

class ToolbarButton extends MnView
  tagName: 'button'
  #className: 'btn btn-outline-primary'
  className: ->
    name = @model.get 'buttonClassName'
    if not name
      name = @getOption('buttonClassName') or defaultButtonClassName
    return name
  triggers:
    click: 'button:clicked'
  modelEvents:
    change: 'render'

class ToolbarButtonGroup extends CollectionView
  childView: ToolbarButton
  childViewOptions: ->
    template: @getOption 'entryTemplate'
    buttonClassName: @getOption 'buttonClassName'
  className: 'btn-group btn-group-justified'
  childViewTriggers:
    'button:clicked': 'toolbar:entry:clicked'

class ToolbarView extends MnView
  template: tc.renderable () ->
    tc.div '.toolbar-entries'
  regions:
    entries:
      el: '.toolbar-entries'
  onRender: ->
    entryTemplate = @getOption('entryTemplate') or defaultButtonTemplate
    buttonClassName = @getOption('buttonClassName') or defaultButtonClassName
    view = new ToolbarButtonGroup
      collection: @collection
      entryTemplate: entryTemplate
      buttonClassName: buttonClassName
    @showChildView 'entries', view
  onChildviewToolbarEntryClicked: (child) ->
    navigate_to_url child.model.get 'url'
    
  
class ElizaToolbar extends ToolbarView
  collection: new Collection toolbarEntries
  # bubble up to main view
  childViewTriggers:
    'toolbar:entry:clicked': 'toolbar:entry:clicked'
  buttonClassName: 'btn btn-outline-success'
    
export default ElizaToolbar
