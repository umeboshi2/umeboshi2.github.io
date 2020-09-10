import Backbone from 'backbone'
import Marionette from 'backbone.marionette'
import tc from 'teacup'
import marked from 'marked'

import radioIcon from 'node-noto-emoji/dist/radio'
import micIcon from 'node-noto-emoji/dist/studio_microphone'
import booksIcon from 'node-noto-emoji/dist/books'

import HasJsonView from 'common/has-jsonview'

Models = require '../misc-idents'
headerTemplate = require './header-template'
    
class Entry extends Marionette.View
  className: 'col-md-4'
  template: tc.renderable (model) ->
    tc.div '.listview-list-entry', ->
      tc.a href:"#netark/view/#{model.id}", model.name
  ui:
    link: 'a'
  events:
    'click @ui.link': 'linkClicked'
  linkClicked: (event) ->
    #event.preventDefault()
    console.log "show", @model.id

class EntryCollectionView extends Marionette.CollectionView
  className: 'row'
  childView: Entry



class JsonView extends Marionette.View
  template: tc.renderable (model) ->
    tc.div '.jsonview.listview-list-entry', style:'overflow:auto'
  behaviors:
    HasJsonView:
      behaviorClass: HasJsonView
    
class MainView extends Marionette.View
  template: tc.renderable ->
    headerTemplate
      text: 'Unsorted Generic Stuff'
      leftIcon: micIcon
      rightIcon: booksIcon
    tc.div '.items'
  ui:
    itemList: '.items'
  regions:
    itemList: '@ui.itemList'
  onRender: ->
    collection = new Backbone.Collection Models
    view = new EntryCollectionView
      collection: collection
    @showChildView 'itemList', view
  templateContext:
    appName: 'netark'
    
export default MainView

