import { Model } from 'backbone'
import _ from 'underscore'

export default class NoCacheModel extends Model
  fetch: (options) ->
    options = _.extend options || {},
      data:
        nocache: Date.now()
    super options
