Backbone = require 'backbone'
Marionette = require 'backbone.marionette'

Masonry = require 'masonry-layout'

HubChannel = Backbone.Radio.channel 'hubby'

#################################
# templates
#################################
{ capitalize } = require 'apputil'

tc = require 'teacup'

show_meeting_template = tc.renderable (meeting) ->
  tc.div '.hubby-meeting-header', ->
    tc.div '.hubby-meeting-header-agenda', ->
      tc.text 'Agenda: ' + meeting.agenda_status
    tc.div '.hubby-meeting-header-minutes', ->
      tc.text 'Minutes: ' + meeting.minutes_status
  tc.div '.hubby-meeting-item-list', ->
    agenda_section = 'start'
    for mitem in meeting.meeting_items
      item = meeting.items[mitem.item_id]
      #console.log agenda_section + '->' + mitem.type
      if mitem.type != agenda_section and mitem.type
        agenda_section = mitem.type
        section_header = capitalize agenda_section + ' Agenda'
        tc.h3 '.hubby-meeting-agenda-header', section_header
      tc.div '.hubby-meeting-item', ->
        tc.div '.hubby-meeting-item-info', ->
          tc.div '.hubby-meeting-item-agenda-num', mitem.agenda_num
          tc.div '.hubby-meeting-item-fileid', item.file_id
          tc.div '.hubby-meeting-item-status', item.status
        tc.div '.hubby-meeting-item-content', ->
          tc.p '.hubby-meeting-item-text', item.title
          if item.attachments != undefined and item.attachments.length
            tc.div '.hubby-meeting-item-attachment-marker', 'Attachments'
            tc.div '.hubby-meeting-item-attachments', ->
              for att in item.attachments
                tc.div ->
                  tc.a href:att.url, att.name
                  
          
##################################################################
#################################

class ShowMeetingView extends Backbone.Marionette.ItemView
  template: show_meeting_template
  
  
module.exports = ShowMeetingView
  
