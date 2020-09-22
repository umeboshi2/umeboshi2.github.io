import Backbone from 'backbone'

import lf from 'lovefield'

# Use yaml to build schema
# https://groups.google.com/forum/#!topic/lovefield-users/jxIlb7jtiak

MainChannel = Backbone.Radio.channel 'global'

schemaBuilder = lf.schema.create('pmc-database', 4)

schemaBuilder.createTable('SimpleObject')
.addColumn('id', lf.Type.STRING)
.addColumn('content', lf.Type.STRING)
.addPrimaryKey(['id'])

schemaBuilder.createTable('FrontMatter')
.addColumn('id', lf.Type.INTEGER)
.addColumn('content', lf.Type.OBJECT)
.addPrimaryKey(['id'])

schemaBuilder.createTable('Topics')
.addColumn('id', lf.Type.INTEGER)
.addColumn('name', lf.Type.STRING)
.addPrimaryKey(['id'])

schemaBuilder.createTable('FMTopics')
.addColumn('pmcid', lf.Type.INTEGER)
.addColumn('topic_id', lf.Type.INTEGER)
#.addPrimaryKey(['pmcid', 'topic_id'])
.addForeignKey('fk_pmc_id',
  local: 'pmcid'
  ref: 'FrontMatter.id'
  action: lf.ConstraintAction.RESTRICT
  timing: lf.ConstraintTiming.IMMEDIATE
)
.addForeignKey('fk_topic_id',
  local: 'topic_id'
  ref: 'Topics.id'
  action: lf.ConstraintAction.RESTRICT
  timing: lf.ConstraintTiming.IMMEDIATE
)

  


export default schemaBuilder

