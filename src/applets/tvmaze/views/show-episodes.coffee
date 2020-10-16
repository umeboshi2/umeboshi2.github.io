import { View as MnView, CollectionView } from 'backbone.marionette'
import tc from 'teacup'
import JView from 'json-view'
import 'json-view/devtools.css'

episodeTemplate = tc.renderable (model) ->
  tc.div '.card.bg-body-d10', ->
    tc.div '.card-header', ->
      if model.summary or model.img_med
        tc.span '.text-local-secondary', href:"#", model.name
      else
        tc.span '.text-light', model.name
      tc.span '.bg-body-d5.pull-right', ->
        if model.season
          tc.span "Season #{model.season}"
          tc.raw '&nbsp;&nbsp;&nbsp;'
        tc.span '.bg-body-d10', model.airdate.toDateString()
    tc.div '.card-block', ->
      tc.div '.summary.row', style:'display:none', ->
        if model?.img_med
          tc.div '.col-md-7', ->
            tc.raw model.summary
          tc.div '.col-md-5', ->
            tc.img '.card-img-bottom.pull-right', src:model.img_med
        else
          tc.div '.col-md-12', ->
            tc.raw model.summary
      tc.div '.jsonview'
          

class EpisodeView extends MnView
  #behaviors:
  #  PointerOnHover:
  #    behaviorClass: PointerOnHover
  template: episodeTemplate
  ui:
    summary: '.summary'
    objectContainer: '.jsonview'
  regions:
    summary: '@ui.summary'
    objectContainer: '@ui.objectContainer'
  events:
    'click': 'showEpisodeSummary'
    'mouseenter': 'handleHover'
    
  canShowSummary: ->
    summary = @model.get 'summary'
    img_med = @model.get 'img_med'
    return summary or img_med
    
  showEpisodeSummary: (event) ->
    event.preventDefault()
    if @canShowSummary()
      @ui.summary.toggle()
  onDomRefreshJsonVIew: ->
    @jsonview = new JView @model.toJSON()
    @ui.objectContainer.prepend @jsonview.dom
  handleHover: ->
    if @canShowSummary()
      @$el.css
        cursor: 'pointer'
        
class EpisodeListView extends MnView
  template: tc.renderable ->
    tc.div '.listview-header', ->
      tc.text "Episodes"
    tc.div '.episode-list'
  ui:
    header: '.listview-header'
    itemList: '.episode-list'
  regions:
    itemList: '@ui.itemList'
  onRender: ->
    view = new CollectionView
      collection: @collection
      childView: EpisodeView
    @showChildView 'itemList', view

export default EpisodeListView


