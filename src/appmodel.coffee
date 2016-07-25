{ BaseAppModel
  appregions } = require 'agate/src/appmodel'

appmodel = new BaseAppModel
  hasUser: false
  brand:
    name: 'Umeboshi2'
    url: '#'
  #FIXME
  # applets listed here still need to be required in
  # application.coffee
  applets:
    [
      {
        appname: 'phaserdemo'
        name: 'Phaser'
        url: '#phaser'
      }
    ]
  regions: appregions

module.exports = appmodel
