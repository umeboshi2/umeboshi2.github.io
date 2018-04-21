import Backbone from 'backbone'

import AppChannel from './app-channel'

MainChannel = Backbone.Radio.channel 'global'

class SuperHeroList extends Backbone.Model
  url: '/assets/data/superheroes.json'

hero_list = new SuperHeroList
AppChannel.reply 'get-superheroes-model', ->
  hero_list

