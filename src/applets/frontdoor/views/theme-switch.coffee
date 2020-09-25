import $ from 'jquery'
import { Radio } from 'backbone'
import { View as MnView } from 'backbone.marionette'
import tc from 'teacup'

MainChannel = Radio.channel 'global'

THEMES = ['vanilla', 'cornsilk', 'BlanchedAlmond', 'DarkSeaGreen',
  'LavenderBlush']

class ThemeSwitchView extends MnView
  ui:
    stylesheet: '#main-stylesheet'
    theme: '.theme'
  events: ->
    'click @ui.theme': 'switch_theme'
  templateContext: ->
    ui: @ui
  template: tc.renderable ->
    tc.div ->
      THEMES.forEach (theme) ->
        tc.div ".theme.btn.btn-default", theme
  switch_theme: (event) ->
    target = $(event.target)
    theme = target.html()
    @performSwitch theme
  performSwitch: (theme) ->
    console.log "performSwitch", theme
    MainChannel.request 'main:app:set-theme', theme
    MainChannel.request 'main:app:switch-theme', theme
    
export default ThemeSwitchView
