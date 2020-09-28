import { View as MnView } from 'backbone.marionette'
import tc from 'teacup'

import navigateToUrl from 'tbirds/util/navigate-to-url'
 
class MenuBar extends MnView
  className: 'btn-group'
  template: tc.renderable ->
    tc.button '.home-btn.btn.btn-outline-primary.btn-sm.fa.fa-home', 'Home'
    tc.button '.parent-bnt.btn.btn-outline-primary.btn-sm.fa.fa-arrow-up', 'Up'
  ui:
    homeBtn: '.home-btn'
    parentBtn: '.parent-bnt'
  events:
    'click @ui.homeBtn': 'homeBtnClicked'
    'click @ui.parentBtn': 'parentBtnClicked'
  homeBtnClicked: ->
    navigateToUrl '#pages/blog/cv19/index'
  parentBtnClicked: ->
    parent = @model.get 'parent'
    navigateToUrl parent
    
export default MenuBar
