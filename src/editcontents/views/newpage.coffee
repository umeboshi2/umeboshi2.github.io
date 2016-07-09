Backbone = require 'backbone'
Marionette = require 'backbone.marionette'

AppTemplates = require '../templates'

{ navigate_to_url } = require 'apputil'

MainChannel = Backbone.Radio.channel 'global'
ResourceChannel = Backbone.Radio.channel 'resources'

class NewPageView extends Backbone.Marionette.ItemView
  template: AppTemplates.NewPageForm

  

module.exports = NewPageView

