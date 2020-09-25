import Backbone from  'backbone'
import  'backbone.routefilter'
import Marionette from 'backbone.marionette'


if __DEV__
  if window.__agent
    window.__agent.start Backbone, Marionette


