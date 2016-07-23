# FIXME - require jquery
Backbone = require 'backbone'
Marionette = require 'backbone.marionette'

# FIXME - remove this when things work better
inames = ['bicycle', 'spinner', 'cut', 'copy', 'paste'
  'beer', 'bolt', 'bell', 'bug', 'eyedropper', 'flask', 'gavel',
  'magic', 'magnet', 'music']
  
icons = ("fa-#{i}" for i in inames)
isizes = ['normal', 'fa-1g', 'fa-2x', 'fa-3x', 'fa-4x', 'fa-5x']
icolors = ['salmon', 'IndianRed', 'OliveGreen', 'blue',
  'red', 'green', 'DarkSeaGreen', 'yellow']
icolors = ['salmon', 'IndianRed', 'OliveGreen', 'DarkSeaGreen']


docwriter = () ->
  size = random_choice isizes
  iclass = "fa #{random_choice icons} fa-pulse"
  if size isnt "normal"
    iclass = "#{iclass} #{size}"
  $('.body').append "<i class=\"#{iclass}\" style=\"color:#{random_choice icolors};\"></i>"

#setInterval docwriter, 15000
#setInterval docwriter, 1000


module.exports = docwriter


