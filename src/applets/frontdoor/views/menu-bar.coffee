import { View as MnView } from 'backbone.marionette'
import tc from 'teacup'

import PointerOnHover from 'tbirds/behaviors/pointer-on-hover'
import navigateToUrl from 'tbirds/util/navigate-to-url'
 
class MenuBar extends MnView
  tagName: 'ul'
  className: 'nav nav-pills'
  #className: 'btn-group'
  template: tc.renderable ->
    tc.li '.home.nav-item', ->
      tc.a '.nav-link.fa.fa-home', ->
        tc.text 'Home'
    tc.li ".parent.nav-item", ->
      tc.a '.nav-link.fa.fa-arrow-up', ->
        tc.text 'Up'
  ui:
    home: '.home'
    parent: '.parent'
  events:
    'click @ui.home': 'homeClicked'
    'click @ui.parent': 'parentClicked'
  behaviors: [PointerOnHover]
  homeClicked: ->
    navigateToUrl '#pages/blog/cv19/index'
  parentClicked: ->
    parent = @model.get 'parent'
    navigateToUrl parent
    
export default MenuBar
