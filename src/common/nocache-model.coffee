import Backbone from 'backbone'
import _ from 'underscore'

class NoCacheModel extends Backbone.Model
  fetch: (options) ->
    options = _.extend options || {},
      data:
        nocache: Date.now()
    super options

export default NoCacheModel
