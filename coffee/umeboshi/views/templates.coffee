define (require, exports, module) ->
  $ = require 'jquery'
  _ = require 'underscore'
  Backbone = require 'backbone'
  teacup = require 'teacup'
  marked = require 'marked'
  
  renderable = teacup.renderable

  div = teacup.div
  # I use "icon" for font-awesome
  icon = teacup.i
  strong = teacup.strong
  span = teacup.span
  label = teacup.label
  input = teacup.input

  raw = teacup.raw
  text = teacup.text

  # Main Templates must use teacup.
  # The template must be a teacup.renderable, 
  # and accept a layout model as an argument.

  # Tagnames to be used in the template.
  {div, span, link, text, strong, label, input, 
  button, a, nav, form, small, section, 
  ul, li, b, h1, h2, aside, p,
  header} = teacup
            
  ########################################
  # Templates
  ########################################
                  
  ########################################
  make_menu = renderable (model) ->
    cls = '.' + model.tagclass + '.ctx-menu.nav.navbar.navbar-nav'
    ul cls, ->
      li '.dropdown', ->
        a '.dropdown-toggle', 'data-toggle':'dropdown', ->
          text model.label
          b '.caret'
        ul '.dropdown-menu', ->
          for entry in model.entries
            li ->
              a href:entry.url, entry.name
            

            
  PageLayoutTemplate = renderable () ->
    div '.wrapper', ->
      main_header()
      div '#content-wrapper', ->
        section '#main-content'
        aside '#sidebar'
    div '#footer'

  
  main_header = renderable () ->
    header ->
      h1 ->
        a href:'#', 'Umeboshi2.github.io'
      p 'Main GitHub Website'
      p '.view', ->
        a href:'https://github.com/umeboshi2', ->
          text 'View the Project on GitHub'
          small 'umeboshi2'
      ul ->
        li '.single', ->
          a href:'https://github.com/umeboshi2/umeboshi2.github.io', ->
            text 'View On'
            strong 'GitHub'
            
  main_sidebar = renderable (model) ->
    div '.sidebar-menu', ->
      for entry in model.entries
        div '.sidebar-entry', ->
          a href:entry.url, entry.name          
  

  module.exports =
    PageLayoutTemplate: PageLayoutTemplate
    main_header: main_header
    main_sidebar: main_sidebar
    make_menu: make_menu












