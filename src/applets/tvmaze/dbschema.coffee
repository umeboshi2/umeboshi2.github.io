import Backbone from 'backbone'

import lf from 'lovefield'

# Use yaml to build schema
# https://groups.google.com/forum/#!topic/lovefield-users/jxIlb7jtiak

MainChannel = Backbone.Radio.channel 'global'

schemaBuilder = lf.schema.create('tvmaze-database', 10)

schemaBuilder.createTable('ShowObject')
.addColumn('id', lf.Type.INTEGER)
.addColumn('content', lf.Type.OBJECT)
.addPrimaryKey(['id'])

schemaBuilder.createTable('ShowEpisode')
.addColumn('id', lf.Type.INTEGER)
.addColumn('show_id', lf.Type.INTEGER)
.addColumn('content', lf.Type.OBJECT)
.addPrimaryKey(['id'])
.addIndex('show_index', ['show_id'], false, lf.Order.ASC)
.addForeignKey('fk_show_id',
  local: 'show_id'
  ref: 'ShowObject.id'
  action: lf.ConstraintAction.RESTRICT
  timing: lf.ConstraintTiming.IMMEDIATE
)

schemaBuilder.createTable('ShowGuid')
.addColumn('guid', lf.Type.STRING)
.addColumn('id', lf.Type.STRING)
.addColumn('content', lf.Type.STRING)
.addPrimaryKey(['guid'])


schemaBuilder.createTable('SimpleObject')
.addColumn('id', lf.Type.STRING)
.addColumn('content', lf.Type.STRING)
.addPrimaryKey(['id'])

#schemaBuilder.createTable('SimpleTvShow')
#.addColumn('id', lf.Type.INTEGER)
#.addColumn('content', lf.Type.OBJECT)
#.addPrimaryKey(['id'])


console.log "schemaBuilder", schemaBuilder


export default schemaBuilder

