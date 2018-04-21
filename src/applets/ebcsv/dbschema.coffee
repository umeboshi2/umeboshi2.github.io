import Backbone from 'backbone'
#import BI from 'backbone-indexeddb'
#Backbone.sync = BI.sync

database =
  id: 'main-database'
  description: 'the main database'
  migrations: [
    {
      version: '1.1'
      before: (next) ->
        next()
      migrate: (transaction, next) ->
        configs = transaction.db.createObjectStore 'configs'
        configs.createIndex 'nameIndex', 'name', {unique: true}
        descriptions = transaction.db.createObjectStore 'descriptions'
        descriptions.createIndex 'nameIndex', 'name', {unique: true}
        next()
    },{
      version: '1.2'
      migrate: (transaction, next) ->
        #store = transaction.objectStore 'configs'
        next()
        
    },{
      version: '1.3'
      migrate: (transaction, next) ->
        desc.createIndex 'nameIndex', 'name', {unique: true}
        next()
    }
  ]
      

export default database
