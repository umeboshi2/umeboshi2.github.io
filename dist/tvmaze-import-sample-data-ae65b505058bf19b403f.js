(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{744:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.ProgressView=n.ProgressModel=void 0;var i,o,a,r=t(3),d=t(8),s=t(40),l=(i=s)&&i.__esModule?i:{default:i};function m(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function u(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}function h(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}console.warn("Deprecated: try using tbirds/views/progress instead."),n.ProgressModel=o=function(){var e=function(e){function n(){return m(this,n),u(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return h(n,e),n}(r.Model);return e.prototype.defaults={valuemin:0,valuemax:100,valuenow:0},e}.call(void 0),n.ProgressView=a=function(){var e=function(e){function n(){return m(this,n),u(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return h(n,e),n}(d.View);return e.prototype.template=l.default.renderable((function(e){return l.default.div(".progress",(function(){var n;return n=Math.floor(e.valuenow/e.valuemax*100+.5),l.default.div(".progress-bar.progress-bar-striped",{role:"progressbar",style:"width: "+n+"%"},(function(){return l.default.span({style:"color:black;"},e.valuenow+" of "+e.valuemax+".")}))}))})),e.prototype.modelEvents={change:"render"},e}.call(void 0),n.ProgressModel=o,n.ProgressView=a},970:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.saveRemoteShow=void 0;var i=function(){function e(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(n,t,i){return t&&e(n.prototype,t),i&&e(n,i),n}}(),o=t(3),a=t(8),r=l(t(40)),d=l(t(971)),s=t(744);function l(e){return e&&e.__esModule?e:{default:e}}function m(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function u(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}function h(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}var c,p,f,g,v,w,y,b;console.log("ProgressModel",s.ProgressModel),console.log("ProgressView",s.ProgressView),f=o.Radio.channel("messages"),c=o.Radio.channel("tvmaze"),b=new o.Collection(d.default),function(){var e=function(e){function n(){m(this,n);var e=u(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments));return e.initialize=e.initialize.bind(e),e}return h(n,e),i(n,[{key:"initialize",value:function(e){return function(e,n){if(!(e instanceof n))throw new Error("Bound instance method accessed before binding")}(this,n),this.progressModel=e.progressModel}}]),n}(a.MnObject);return e.prototype.channelName="tvmaze",e.prototype.collection=b,e}.call(void 0);n.saveRemoteShow=function(e){var n,t;return(n=(t=c.request("get-remote-show",e)).fetch()).done((function(){return c.request("save-local-show",t.toJSON())})),n};y=function(e,n,t){var i;return i=[],e.models.forEach((function(e){var t,o;return t={id:e.get("id"),show_id:n,content:e.toJSON()},o=c.request("save-local-episode",t),i.push(o)})),Promise.all(i).then((function(){return i.length&&t&&o.history.navigate("#tvmaze/shows/view/"+n,{trigger:!0}),f.request("success","Retrieved "+i.length+" episodes.")}))},v=r.default.renderable((function(e){return r.default.li(".list-group-item",(function(){return r.default.span((function(){return r.default.a(".import-single-show",{href:"#"},e.name)})),r.default.span(".btn-group.pull-right",(function(){return r.default.button(".delete-item.btn.btn-sm.btn-danger.fa.fa-close","delete")}))}))})),w=r.default.renderable((function(){return r.default.div(".body.col-md-6",(function(){return r.default.h1("TV Maze Sample Data"),r.default.div(".form-inline",(function(){return r.default.div(".form-check",(function(){return r.default.input("#include-episodes.form-check-input",{type:"checkbox"}),r.default.label(".form-check-label",{for:"include-episodes"},"Include episodes")})),r.default.button(".import-button.btn.btn-primary.btn-sm","Import Data")})),r.default.div(".status-div.alert.alert-info",{style:"display:none"}),r.default.div(".import-progress"),r.default.ul(".show-list.list-group")}))})),g=function(){var e=function(e){function n(){return m(this,n),u(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return h(n,e),i(n,[{key:"deleteItem",value:function(){return this.trigger("item:deleted",this.model),this.triggerMethod("item:deleted",this.model),this.model.collection.remove(this.model)}},{key:"importShow",value:function(e){return e.preventDefault()}}]),n}(a.View);return e.prototype.channelName="tvmaze",e.prototype.template=v,e.prototype.ui={deleteButton:".delete-item",importSingleAnchor:".import-single-show"},e.prototype.events={"click @ui.deleteButton":"deleteItem","click @ui.importSingleAnchor":"importShow"},e.prototype.triggers={"click @ui.deleteButton":"item:deleted","click @ui.importSingleAnchor":"import:show"},e}.call(void 0),p=function(){var e=function(e){function n(){return m(this,n),u(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return h(n,e),i(n,[{key:"onRender",value:function(){var e,n,t,i,o,r=this;for(n=c.request("get-all-local-tvshows"),e=0,i=[];e<b.length;)t=b.models[e],n.get(t.id)&&i.push(t),e+=1;return b.remove(i),this.importProgressModel=new s.ProgressModel,this.importProgressModel.set("valuemax",b.length),this.importProgressModel.set("valuenow",0),o=new a.CollectionView({channelName:"tvmaze",collection:b,childView:g,childViewTriggers:{"item:deleted":"child:item:deleted","import:show":"child:import:show"},onChildItemDeleted:function(){return r.importProgressModel.set("valuemax",b.length)},onChildImportShow:function(e){var n,t,i;return console.log("onChildImportShow",e),n=e.model.id,t=r.ui.includeEpisodes.prop("checked"),i=c.request("get-remote-show",n),i.fetch().done((function(){return c.request("save-local-show",i.toJSON()).then((function(){var e;if(t)return console.log("get episodes too"),console.log(i),f.request("info","Retrieving episodes...."),e=c.request("get-remote-episodes",n),e.fetch().done((function(){return y(e,n)}))}))}))}}),this.showChildView("showList",o),o=new s.ProgressView({model:this.importProgressModel}),this.showChildView("importProgress",o)}},{key:"importShows",value:function(){return this.ui.importButton.hide(),this.ui.statusDiv.show(),console.log("importShows"),this.importAnotherShow()}},{key:"importShow",value:function(e){var n,t,i,o=this;return t=e.get("name"),n=e.id,this.ui.statusDiv.text("Importing "+t+", "+n),i=c.request("get-remote-show",n),i.fetch().done((function(){return c.request("save-local-show",i.toJSON()).then((function(){var t;return o.ui.includeEpisodes.prop("checked")?(console.log("get episodes too"),console.log(i),f.request("info","Retrieving episodes...."),t=c.request("get-remote-episodes",n),t.fetch().done((function(){if(y(t,n,!1),b.remove(e),o.importProgressModel.set("valuenow",b.length),b.length)return setTimeout((function(){return o.importAnotherShow()}),500)}))):(b.remove(e),o.importProgressModel.set("valuenow",b.length),b.length?setTimeout((function(){return o.importAnotherShow()}),500):void 0)}))}))}},{key:"importAnotherShow",value:function(){var e;return e=b.models[0],this.importShow(e)}}]),n}(a.View);return e.prototype.channelName="tvmaze",e.prototype.template=w,e.prototype.ui={showList:".show-list",statusDiv:".status-div",importProgress:".import-progress",importButton:".import-button",includeEpisodes:"#include-episodes"},e.prototype.regions={showList:"@ui.showList",importProgress:"@ui.importProgress"},e.prototype.events={"click @ui.importButton":"importShows"},e}.call(void 0),n.default=p},971:function(e){e.exports=JSON.parse('[{"id":3741,"name":"Hill Street Blues"},{"id":6544,"name":"Sesame Street"},{"id":4484,"name":"Tiny Toon Adventures"},{"id":12144,"name":"Rumpole of the Bailey"},{"id":451,"name":"Knight Rider"},{"id":4460,"name":"St. Elsewhere"},{"id":5144,"name":"Falcon Crest"},{"id":3853,"name":"The Andy Griffith Show"},{"id":782,"name":"Gunsmoke"},{"id":3743,"name":"Welcome Back, Kotter"},{"id":1472,"name":"Good Times"},{"id":7513,"name":"Sanford and Son"},{"id":238,"name":"Dallas"},{"id":4041,"name":"Gilligan\'s Island"},{"id":1475,"name":"Hogan\'s Heroes"},{"id":19621,"name":"DuckTales"},{"id":9486,"name":"Count Duckula"},{"id":470,"name":"The Prisoner"},{"id":553,"name":"Cheers"},{"id":1496,"name":"Remington Steele"},{"id":6606,"name":"Max Headroom"},{"id":4529,"name":"Are You Being Served?"},{"id":1166,"name":"Agatha Christie\'s Poirot"},{"id":12174,"name":"Deep Space 69"},{"id":493,"name":"Star Trek: Deep Space Nine"},{"id":4325,"name":"The A-Team"},{"id":5319,"name":"Knots Landing"},{"id":680,"name":"Airwolf"},{"id":1249,"name":"The Brady Bunch"},{"id":475,"name":"Babylon 5"},{"id":714,"name":"Star Trek: Enterprise"},{"id":5782,"name":"Barney Miller"},{"id":7553,"name":"Alice"},{"id":5389,"name":"The Jeffersons"},{"id":1784,"name":"All In the Family"},{"id":5486,"name":"Chico and the Man"},{"id":7102,"name":"Lidsville"},{"id":1500,"name":"The Six Million Dollar Man"},{"id":962,"name":"Hawaii Five-O"},{"id":16291,"name":"Police Woman"},{"id":956,"name":"Magnum, P.I."},{"id":787,"name":"The Twilight Zone"},{"id":2139,"name":"The Beverly Hillbillies"},{"id":3824,"name":"I Love Lucy"},{"id":2128,"name":"Leave It to Beaver"},{"id":3884,"name":"The Munsters"},{"id":4042,"name":"The Addams Family"},{"id":4606,"name":"Diff\'rent Strokes"},{"id":7059,"name":"Silver Spoons"},{"id":13681,"name":"Fat Albert and the Cosby Kids"},{"id":32689,"name":"The Electric Company"},{"id":5488,"name":"Fraggle Rock"},{"id":6806,"name":"Animaniacs"},{"id":8520,"name":"TaleSpin"},{"id":5308,"name":"Chip \'N Dale Rescue Rangers"},{"id":4022,"name":"60 Minutes"},{"id":16549,"name":"Giant Gorg"},{"id":18469,"name":"The Mysterious Cities of Gold"},{"id":1129,"name":"Dungeons & Dragons"},{"id":3398,"name":"Inspector Gadget"},{"id":9829,"name":"Ghostbusters"},{"id":4044,"name":"Jonny Quest"},{"id":4299,"name":"The Real Ghostbusters"},{"id":9701,"name":"Beetlejuice"},{"id":16657,"name":"Bobby\'s World"},{"id":26381,"name":"Peter Pan and the Pirates"},{"id":19136,"name":"The Pirates of Dark Water"},{"id":421,"name":"Rugrats"},{"id":6308,"name":"Doug"},{"id":757,"name":"Batman: The Animated Series"},{"id":9022,"name":"Thundarr the Barbarian"},{"id":3778,"name":"The Herculoids"},{"id":12825,"name":"Eek! the Cat"},{"id":472,"name":"X-Men"},{"id":19561,"name":"Cadillacs and Dinosaurs"},{"id":6322,"name":"Rocko\'s Modern Life"},{"id":12941,"name":"2 Stupid Dogs"},{"id":8026,"name":"Magic School Bus Rides Again"},{"id":1662,"name":"ReBoot"},{"id":8571,"name":"Aaahh!!! Real Monsters"},{"id":414,"name":"Duckman: Private Dick/Family Man"},{"id":4221,"name":"The Head"},{"id":18163,"name":"The Maxx"},{"id":32526,"name":"Red Planet"},{"id":14116,"name":"The Tick"},{"id":1603,"name":"Samurai Jack"},{"id":1906,"name":"Rurouni Kenshin"},{"id":538,"name":"Futurama"},{"id":83,"name":"The Simpsons"},{"id":1661,"name":"The PJs"},{"id":409,"name":"Invader ZIM"},{"id":563,"name":"Star Wars: The Clone Wars"},{"id":832,"name":"The Rockford Files"},{"id":4284,"name":"The Dukes of Hazzard"},{"id":16748,"name":"The Super Globetrotters"},{"id":7256,"name":"The Woodwright\'s Shop"},{"id":33492,"name":"Mystery Road"},{"id":24204,"name":"Contact"},{"id":16339,"name":"Solid Gold"},{"id":21656,"name":"Dynasty"},{"id":22312,"name":"Nero Wolfe"},{"id":2151,"name":"The Incredible Hulk"},{"id":34595,"name":"Cagney and Lacey"},{"id":1488,"name":"Newhart"},{"id":12375,"name":"Ripley\'s Believe It or Not!"},{"id":30304,"name":"That\'s Incredible"},{"id":18555,"name":"G.I. Joe: Sigma Six"},{"id":13102,"name":"Hardcastle and McCormick"},{"id":3328,"name":"Scarecrow and Mrs. King"},{"id":6199,"name":"Mama\'s Family"},{"id":8227,"name":"Reading Rainbow"},{"id":28925,"name":"The Rousters"},{"id":10729,"name":"Blue Thunder"},{"id":1979,"name":"Charles in Charge"},{"id":2084,"name":"The Cosby Show"},{"id":12699,"name":"The Paper Chase"},{"id":180,"name":"Firefly"},{"id":2148,"name":"The Rat Patrol"},{"id":471,"name":"The Prisoner"},{"id":1474,"name":"Happy Days"},{"id":5814,"name":"Laverne & Shirley"},{"id":11549,"name":"One Day at a Time"},{"id":4378,"name":"Bonanza"},{"id":14914,"name":"The Life and Times of Grizzly Adams"},{"id":5443,"name":"Get Smart"},{"id":1484,"name":"The Love Boat"},{"id":5309,"name":"Darkwing Duck"},{"id":3309,"name":"The Waltons"},{"id":1911,"name":"Highlander"},{"id":711,"name":"Who\'s the Boss?"},{"id":4402,"name":"China Beach"},{"id":5498,"name":"Austin City Limits"},{"id":5519,"name":"WKRP in Cincinnati"},{"id":30938,"name":"Miami Vice"},{"id":25047,"name":"Mutual of Omaha\'s Wild Kingdom"},{"id":665,"name":"M*A*S*H"},{"id":5511,"name":"MacGyver"},{"id":7243,"name":"Designing Women"},{"id":4631,"name":"Mork & Mindy"},{"id":2083,"name":"Murder, She Wrote"},{"id":1748,"name":"Matlock"},{"id":7605,"name":"In the Heat of the Night"},{"id":722,"name":"The Golden Girls"},{"id":210,"name":"Doctor Who"},{"id":7432,"name":"Lou Grant"},{"id":717,"name":"Quantum Leap"},{"id":2075,"name":"Little House on the Prairie"},{"id":867,"name":"Law & Order: LA"},{"id":3911,"name":"Common Law"},{"id":4607,"name":"The Facts of Life"},{"id":3288,"name":"The Muppet Show"},{"id":30137,"name":"Last Laugh in Vegas"},{"id":6057,"name":"The Carol Burnett Show"},{"id":21746,"name":"The Gong Show"},{"id":1489,"name":"Night Court"},{"id":2218,"name":"Taxi"},{"id":499,"name":"Married... with Children"},{"id":4132,"name":"Three\'s Company"},{"id":7342,"name":"Too Close for Comfort"},{"id":881,"name":"CHiPs"},{"id":3913,"name":"B.J. and the Bear"},{"id":7602,"name":"227"},{"id":7221,"name":"Gimme a Break!"},{"id":16455,"name":"What\'s Happening!!"},{"id":5538,"name":"Maude"},{"id":1250,"name":"Family Matters"},{"id":7220,"name":"Murphy Brown"},{"id":530,"name":"Seinfeld"},{"id":582,"name":"The Fresh Prince of Bel-Air"},{"id":540,"name":"Frasier"},{"id":544,"name":"Home Improvement"},{"id":31734,"name":"The Greatest American Hero"},{"id":6315,"name":"Fantasy Island"},{"id":2031,"name":"The Fall Guy"},{"id":4948,"name":"Hart to Hart"},{"id":3646,"name":"Alien Nation"},{"id":4633,"name":"Midnight Caller"},{"id":474,"name":"Charlie\'s Angels"},{"id":7121,"name":"Highway to Heaven"},{"id":4583,"name":"The Smurfs"},{"id":23661,"name":"G.I. Joe Extreme"},{"id":490,"name":"Star Trek"},{"id":491,"name":"Star Trek: The Next Generation"},{"id":492,"name":"Star Trek: Voyager"}]')}}]);
//# sourceMappingURL=tvmaze-import-sample-data-ae65b505058bf19b403f.js.map