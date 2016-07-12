$ = require 'jquery'
_ = require 'underscore'
Backbone = require 'backbone'

navigate_to_url = (url) ->
  if url.split('/')[0] == ''
    window.location = url
  else
    r = new Backbone.Router
    r.navigate url, trigger:true

capitalize = (str) ->
  str.charAt(0).toUpperCase() + str.slice(1)

handle_newlines = (str) ->
  console.warn "handle_newlines being replaced by newline_2_br"
  str.replace(/(?:\r\n|\r|\n)/g, '<br />')

newline_2_br = (str) ->
  str.replace(/(?:\r\n|\r|\n)/g, '<br />')

#https://github.com/goodeggs/teacup-camel-to-kebab
camel_to_kebab = (str) ->
  str.replace(/([A-Z])/g, ($1) -> "-#{$1.toLowerCase()}")

navbar_set_active = (path) ->
  path_top = path.split('/')[0]
  for li in $('#app-navbar li')
    liq = $ li
    liq.removeClass('active')
    if path_top == liq.attr('appname')
      liq.addClass('active')

make_json_post_settings = (url, data, type='POST') ->
  settings =
    type: type
    url: url
    data: JSON.stringify data
    accepts: 'application/json'
    contentType: 'application/json'
  return settings

make_json_post = (url, data, type='POST') ->
  settings = make_json_post_settings url, data, type
  $.ajax settings

remove_trailing_slashes = (path) ->
  path.replace /\/$/, ""

random_choice = (myArray) ->
  index = Math.floor(Math.random() * myArray.length)
  myArray[index]

# FIXME: we really need the equivalent of pressing "home"
# http://stackoverflow.com/questions/1144805/scroll-to-the-top-of-the-page-using-javascript-jquery
scroll_top_fast = ()  ->
  #$('html, body').animate {scrollTop: 0}, 'fast'
  window.scrollTo 0,0
  
scroll_top_fast_jquery = ()  ->
  $('html, body').animate {scrollTop: 0}, 'fast'

string_endswith = (searchString, position) ->
  subjectString = @toString()
  if typeof position != 'number' or !isFinite(position) or Math.floor(position) != position or position > subjectString.length
    position = subjectString.length
  position -= searchString.length
  lastIndex = subjectString.indexOf(searchString, position)
  lastIndex != -1 and lastIndex == position

module.exports =
  navigate_to_url: navigate_to_url
  capitalize: capitalize
  handle_newlines: handle_newlines
  camel_to_kebab: camel_to_kebab
  navbar_set_active: navbar_set_active
  make_json_post_settings: make_json_post_settings
  make_json_post: make_json_post
  remove_trailing_slashes: remove_trailing_slashes
  random_choice: random_choice
  scroll_top_fast: scroll_top_fast
  scroll_top_fast_jquery: scroll_top_fast_jquery
  string_endswith: string_endswith
  





