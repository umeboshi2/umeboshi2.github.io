(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{441:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,r,i,u=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a=n(2),s=n(7),l=n(155),c=(o=l)&&o.__esModule?o:{default:o};i=a.Radio.channel("global"),r=function(){var e=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),u(t,[{key:"emptyModal",value:function(){return i.request("main:app:object").getView().getRegion("modal").empty()}}]),t}(s.View);return e.prototype.behaviors=[c.default],e}.call(void 0),t.default=r},582:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,r,i=n(595),u=(o=i)&&o.__esModule?o:{default:o},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),s=n(7);r=function(){var e=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,[{key:"events",value:function(){var e,t,n;return t="mouseenter",(n=this.getOption("uiProperty"))&&(t="mouseenter @ui."+n),(e={})[t]="handleHover",e}},{key:"handleHover",value:function(){var e;(0,u.default)(this.options,"isClickable")&&((e=this.getOption("uiProperty"))?this.ui[e]:this.$el).css({cursor:this.getOption("cursor")})}}]),t}(s.Behavior);return e.prototype.options={uiProperty:"",isClickable:!0,cursor:"pointer"},e}.call(void 0),t.default=r},595:function(e,t,n){var o=n(606),r=n(617),i=n(607);e.exports=function(e,t,n){var u=-1,a=(t=o(t,e)).length;for(a||(a=1,e=void 0);++u<a;){var s=null==e?void 0:e[i(t[u])];void 0===s&&(u=a,s=n),e=r(s)?s.call(e):s}return e}},604:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,r,i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),u=n(7),a=n(34),s=(o=a)&&o.__esModule?o:{default:o};r=function(){var e=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),i(t,[{key:"onRender",value:function(){return this.ui.input.prop("checked",this.model.get("selected"))}},{key:"toggleInput",value:function(){var e;return e=this.ui.input.is(":checked"),this.ui.input.prop("checked",!e),this.model.set("selected",!e),this.trigger("checked:"+!e),this.trigger("toggled")}},{key:"isSelected",value:function(){return this.model.get("selected")}}]),t}(u.View);return e.prototype.className="form-group form-check",e.prototype.template=s.default.renderable((function(e){return s.default.input(".form-check-input",{type:"checkbox"}),s.default.label(".form-check-label",e.name)})),e.prototype.ui={input:"input"},e.prototype.events={click:"toggleInput","click @ui.input":"toggleInput"},e}.call(void 0),t.default=r},606:function(e,t,n){var o=n(618);e.exports=function(){if(!arguments.length)return[];var e=arguments[0];return o(e)?e:[e]}},607:function(e,t){e.exports=function(e){return e}},608:function(e,t,n){var o={"./af":447,"./af.js":447,"./ar":448,"./ar-dz":449,"./ar-dz.js":449,"./ar-kw":450,"./ar-kw.js":450,"./ar-ly":451,"./ar-ly.js":451,"./ar-ma":452,"./ar-ma.js":452,"./ar-sa":453,"./ar-sa.js":453,"./ar-tn":454,"./ar-tn.js":454,"./ar.js":448,"./az":455,"./az.js":455,"./be":456,"./be.js":456,"./bg":457,"./bg.js":457,"./bm":458,"./bm.js":458,"./bn":459,"./bn-bd":460,"./bn-bd.js":460,"./bn.js":459,"./bo":461,"./bo.js":461,"./br":462,"./br.js":462,"./bs":463,"./bs.js":463,"./ca":464,"./ca.js":464,"./cs":465,"./cs.js":465,"./cv":466,"./cv.js":466,"./cy":467,"./cy.js":467,"./da":468,"./da.js":468,"./de":469,"./de-at":470,"./de-at.js":470,"./de-ch":471,"./de-ch.js":471,"./de.js":469,"./dv":472,"./dv.js":472,"./el":473,"./el.js":473,"./en-au":474,"./en-au.js":474,"./en-ca":475,"./en-ca.js":475,"./en-gb":476,"./en-gb.js":476,"./en-ie":477,"./en-ie.js":477,"./en-il":478,"./en-il.js":478,"./en-in":479,"./en-in.js":479,"./en-nz":480,"./en-nz.js":480,"./en-sg":481,"./en-sg.js":481,"./eo":482,"./eo.js":482,"./es":483,"./es-do":484,"./es-do.js":484,"./es-mx":485,"./es-mx.js":485,"./es-us":486,"./es-us.js":486,"./es.js":483,"./et":487,"./et.js":487,"./eu":488,"./eu.js":488,"./fa":489,"./fa.js":489,"./fi":490,"./fi.js":490,"./fil":491,"./fil.js":491,"./fo":492,"./fo.js":492,"./fr":493,"./fr-ca":494,"./fr-ca.js":494,"./fr-ch":495,"./fr-ch.js":495,"./fr.js":493,"./fy":496,"./fy.js":496,"./ga":497,"./ga.js":497,"./gd":498,"./gd.js":498,"./gl":499,"./gl.js":499,"./gom-deva":500,"./gom-deva.js":500,"./gom-latn":501,"./gom-latn.js":501,"./gu":502,"./gu.js":502,"./he":503,"./he.js":503,"./hi":504,"./hi.js":504,"./hr":505,"./hr.js":505,"./hu":506,"./hu.js":506,"./hy-am":507,"./hy-am.js":507,"./id":508,"./id.js":508,"./is":509,"./is.js":509,"./it":510,"./it-ch":511,"./it-ch.js":511,"./it.js":510,"./ja":512,"./ja.js":512,"./jv":513,"./jv.js":513,"./ka":514,"./ka.js":514,"./kk":515,"./kk.js":515,"./km":516,"./km.js":516,"./kn":517,"./kn.js":517,"./ko":518,"./ko.js":518,"./ku":519,"./ku.js":519,"./ky":520,"./ky.js":520,"./lb":521,"./lb.js":521,"./lo":522,"./lo.js":522,"./lt":523,"./lt.js":523,"./lv":524,"./lv.js":524,"./me":525,"./me.js":525,"./mi":526,"./mi.js":526,"./mk":527,"./mk.js":527,"./ml":528,"./ml.js":528,"./mn":529,"./mn.js":529,"./mr":530,"./mr.js":530,"./ms":531,"./ms-my":532,"./ms-my.js":532,"./ms.js":531,"./mt":533,"./mt.js":533,"./my":534,"./my.js":534,"./nb":535,"./nb.js":535,"./ne":536,"./ne.js":536,"./nl":537,"./nl-be":538,"./nl-be.js":538,"./nl.js":537,"./nn":539,"./nn.js":539,"./oc-lnc":540,"./oc-lnc.js":540,"./pa-in":541,"./pa-in.js":541,"./pl":542,"./pl.js":542,"./pt":543,"./pt-br":544,"./pt-br.js":544,"./pt.js":543,"./ro":545,"./ro.js":545,"./ru":546,"./ru.js":546,"./sd":547,"./sd.js":547,"./se":548,"./se.js":548,"./si":549,"./si.js":549,"./sk":550,"./sk.js":550,"./sl":551,"./sl.js":551,"./sq":552,"./sq.js":552,"./sr":553,"./sr-cyrl":554,"./sr-cyrl.js":554,"./sr.js":553,"./ss":555,"./ss.js":555,"./sv":556,"./sv.js":556,"./sw":557,"./sw.js":557,"./ta":558,"./ta.js":558,"./te":559,"./te.js":559,"./tet":560,"./tet.js":560,"./tg":561,"./tg.js":561,"./th":562,"./th.js":562,"./tk":563,"./tk.js":563,"./tl-ph":564,"./tl-ph.js":564,"./tlh":565,"./tlh.js":565,"./tr":566,"./tr.js":566,"./tzl":567,"./tzl.js":567,"./tzm":568,"./tzm-latn":569,"./tzm-latn.js":569,"./tzm.js":568,"./ug-cn":570,"./ug-cn.js":570,"./uk":571,"./uk.js":571,"./ur":572,"./ur.js":572,"./uz":573,"./uz-latn":574,"./uz-latn.js":574,"./uz.js":573,"./vi":575,"./vi.js":575,"./x-pseudo":576,"./x-pseudo.js":576,"./yo":577,"./yo.js":577,"./zh-cn":578,"./zh-cn.js":578,"./zh-hk":579,"./zh-hk.js":579,"./zh-mo":580,"./zh-mo.js":580,"./zh-tw":581,"./zh-tw.js":581};function r(e){var t=i(e);return n(t)}function i(e){if(!n.o(o,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return o[e]}r.keys=function(){return Object.keys(o)},r.resolve=i,e.exports=r,r.id=608},612:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,r=n(7),i=a(n(34)),u=a(n(428));function a(e){return e&&e.__esModule?e:{default:e}}o=function(){var e=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t}(r.View);return e.prototype.tagName="p",e.prototype.template=i.default.renderable((function(e){var t,n,o,r,a,s;if(i.default.text(u.default.utc(e.start).format("MMMM D, YYYY")),i.default.text(", "),(null!=e?e.pretext:void 0)&&i.default.small((function(){return i.default.text(e.pretext),i.default.text(" ")})),(null!=e?e.journal:void 0)&&(i.default.text(e.journal),i.default.text(", ")),(null!=e?e.authors:void 0)&&(i.default.text(e.authors),i.default.text(", ")),i.default.a({href:e.link},e.title),null!=e&&null!=(r=e.extra)?r.length:void 0){for(s=[],t=0,o=(a=e.extra).length;t<o;t++)n=a[t],i.default.text(", "),s.push(i.default.a({href:n.link},n.name));return s}})),e}.call(void 0),t.default=o},624:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});n(2),n(7);var o,r=u(n(34)),i=(u(n(604)),u(n(441)));function u(e){return e&&e.__esModule?e:{default:e}}o=function(){var e=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t}(i.default);return e.prototype.template=r.default.renderable((function(){return r.default.div(".modal-dialog.modal-md",(function(){return r.default.div(".modal-content",(function(){return r.default.h3(".header"),r.default.div(".content"),r.default.div(".row",(function(){return r.default.button(".close-btn.btn.btn-warning.fa.fa-close.mr-auto",{data:{dismiss:"modal"}},"Close"),r.default.button(".ok-button.btn.btn-success.fa.fa-check.ml-auto","Ok")}))}))}))})),e.prototype.ui={closeBtn:".close-btn",okBtn:".ok-button",header:".header",content:".content"},e.prototype.regions={content:"@ui.content"},e.prototype.events={"click @ui.okBtn":"okBtnClicked","click @ui.closeBtn":"emptyModal"},e}.call(void 0),t.default=o},843:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,r,i,u,a=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),s=n(2),l=n(7),c=v(n(34)),f=v(n(432)),p=v(n(31)),d=v(n(844)),h=v(n(845)),y=v(n(848));function v(e){return e&&e.__esModule?e:{default:e}}o=s.Radio.channel("frontdoor"),i=o.request("get-event-manager"),u=function(e){var t;return null==e?[]:function(){var n,o,r,i;for(i=[],n=0,o=(r=e.split(",")).length;n<o;n++)t=r[n],i.push(t.trim());return i}()},r=function(){var e=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,[{key:"colorLocalLinks",value:function(){var e,t,n,o,r,i;for(i=[],n=0,o=(r=this.ui.anchor).length;n<o;n++)(t=(e=r[n]).hash).startsWith("#pages/")&&(0,p.default)(e).css("color","SkyBlue"),t.startsWith("#crown/")?i.push((0,p.default)(e).css("color","SkyBlue")):i.push(void 0);return i}},{key:"showVidViews",value:function(){var e,t;if((t=this.ui.videoView).length)return console.log("vidViews",t),e=this,t.each((function(t){var n,o,r,i,u;return n=(o=(0,p.default)(this)).attr("data-id"),i="vid-region-"+t,o.attr("id",i),r=e.addRegion("vid-region-"+t,"#"+i),u=new y.default({id:n}),r.show(u)}))}},{key:"showLinkViews",value:function(){var e,t;if(e=this.ui.linkView,i.initAll(),e.length)return t=this,e.each((function(e){var n,o,r,a;return n=(0,p.default)(this),r=u(n.attr("data-topics")),a=i.collections.topics,r.forEach((function(e){return a.find({name:e}).set("selected",!0)})),o=i.determineCategories(),Promise.all(o.promises).then((function(){var o,u,a,l,c,f,p;return u={},o=new s.Collection,r.forEach((function(e){var t;return t=i.getTopicEvents(e),u[e]=t,o.add(t.models)})),f="region-"+e,n.attr("id",f),p=(c=t.addRegion("region-"+e,"#"+f)).$el.attr("data-title"),l=new s.Model({title:p,staticTopics:r,selectedTopics:new s.Collection([]),eventMap:u,allEvents:o}),a=new h.default({model:l}),c.show(a)}))}))}},{key:"onRender",value:function(){var e;if(this.colorLocalLinks(),this.showLinkViews(),this.showVidViews(),this.ui.menuData.length)return e=new d.default({model:new s.Model({parent:this.ui.menuData.attr("data-parent")})}),this.showChildView("menuBar",e)}}]),t}(l.View);return e.prototype.template=c.default.renderable((function(e){return c.default.div(".menu-bar"),c.default.article(".document-view.content.row",(function(){return c.default.div(".body.col-lg-10.col-lg-offset-1",(function(){return c.default.raw((0,f.default)(e.content))}))}))})),e.prototype.ui={menuBar:".menu-bar",menuData:".menu-data",anchor:"a",linkView:".link-view",videoView:".video-view"},e.prototype.regions={menuBar:"@ui.menuBar"},e}.call(void 0),t.default=r},844:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i=n(7),u=l(n(34)),a=l(n(582)),s=l(n(429));function l(e){return e&&e.__esModule?e:{default:e}}o=function(){var e=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"homeClicked",value:function(){return(0,s.default)("#pages/blog/cv19/index")}},{key:"parentClicked",value:function(){var e;return e=this.model.get("parent"),(0,s.default)(e)}}]),t}(i.View);return e.prototype.tagName="ul",e.prototype.className="nav nav-pills",e.prototype.template=u.default.renderable((function(){return u.default.li(".home.nav-item",(function(){return u.default.a(".nav-link.fa.fa-home",(function(){return u.default.text("Home")}))})),u.default.li(".parent.nav-item",(function(){return u.default.a(".nav-link.fa.fa-arrow-up",(function(){return u.default.text("Up")}))}))})),e.prototype.ui={home:".home",parent:".parent"},e.prototype.events={"click @ui.home":"homeClicked","click @ui.parent":"parentClicked"},e.prototype.behaviors=[a.default],e}.call(void 0),t.default=o},845:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,r,i,u,a,s=b(n(157)),l=b(n(664)),c=b(n(846)),f=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),p=n(2),d=n(7),h=b(n(34)),y=b(n(612)),v=b(n(847));function b(e){return e&&e.__esModule?e:{default:e}}r=p.Radio.channel("global"),i=p.Radio.channel("messages"),p.Radio.channel("frontdoor").request("get-event-manager"),a=function(e){var t;return null==e?[]:function(){var n,o,r,i;for(i=[],n=0,o=(r=e.split(",")).length;n<o;n++)t=r[n],i.push(t.trim());return i}()},u=function(e,t){var n,o,r,i,u;for(r=[],i=0,u=e.length;i<u;i++)n=e[i],o=n.topics,t.forEach((function(e){if((0,l.default)(o,e))return r.push(n)}));return r},o=function(){var e=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),f(t,[{key:"initializeOrig",value:function(e){return(0,s.default)(e,{foo:"bar"}),this.mergeOptions(e),console.log("options",e)}},{key:"templateContext",value:function(){return{viewTopics:this.getOption("topics"),filtered:this.getOption("filtered")}}},{key:"onRender",value:function(){return this.ui.filterEventsBtn.hide()}},{key:"showEvents",value:function(){var e,t;return this.getOption("topics"),this.getOption("filtered"),e=this.model.get("allEvents"),t=new d.CollectionView({collection:e,viewComparator:"start",childView:y.default}),this.showChildView("events",t)}},{key:"toggleEventsBtnClicked",value:function(){var e,t;return t=this.getRegion("events"),e=this.ui.toggleEventsBtn,t.hasView()?(e.removeClass("fa-toggle-up"),e.addClass("fa-toggle-down"),t.empty()):(e.removeClass("fa-toggle-down"),e.addClass("fa-toggle-up"),this.showEvents())}},{key:"filterEventsBtnClicked",value:function(){var e,t=this;return(e=new v.default({model:this.model})).on("topics:selected",(function(){return t.onModalTopicsSelected(e)})),r.request("show-modal",e)}},{key:"onModalTopicsSelected",value:function(e){var t,n,o,r;return r=e.getOption("topics"),o=new p.Collection(r.where({selected:!0})).pluck("name"),this.options.topics=o,t=this.model.get("events"),n=u(t,o),this.options.filtered=n,this.ui.toggleEventsBtn.text("Toggle "+n.length+" events")}}]),t}(d.View);return e.prototype.template=h.default.renderable((function(e){return h.default.div((function(){return h.default.h3(".view-header",(function(){return h.default.text(e.title),h.default.text("   "),h.default.i(".toggle-events-btn.fa.fa-toggle-down.text-primary",{type:"button"}),h.default.i(".filter-events-btn.fa.fa-globe.text-warning",{type:"button"})})),h.default.div(".events-container")}))})),e.prototype.ui={viewHeader:".view-header",events:".events-container",toggleEventsBtn:".toggle-events-btn",filterEventsBtn:".filter-events-btn"},e.prototype.regions={events:"@ui.events"},e.prototype.events={"click @ui.toggleEventsBtn":"toggleEventsBtnClicked","click @ui.filterEventsBtn":"filterEventsBtnClicked"},e}.call(void 0),t.default=o},846:function(e,t){e.exports=function(e,t){for(var n=-1,o=null==e?0:e.length;++n<o;)if(!t(e[n],n,e))return!1;return!0}},847:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,r,i,u,a=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),s=n(2),l=n(7),c=p(n(604)),f=p(n(624));function p(e){return e&&e.__esModule?e:{default:e}}o=s.Radio.channel("frontdoor"),i=o.request("get-event-manager"),u=function(e){var t,n;return t=i.getEventData(e).get("events"),n=new s.Collection,t.forEach((function(e){return e.topics.forEach((function(e){return n.add({id:e,name:e,selected:!1})}))})),n},r=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,[{key:"getTopics",value:function(){var e,t;return e=this.model.get("category"),t=u(e),console.log("@options",this.options),this.options.topics=t}},{key:"onRender",value:function(){var e,t;return this.getTopics(),e=this.getOption("topics"),t=new l.CollectionView({collection:e,childView:c.default,viewComparator:"name"}),this.showChildView("content",t),this.ui.header.text("Select Topics")}},{key:"okBtnClicked",value:function(){return this.triggerMethod("topics:selected",this)}},{key:"onTopicsSelected",value:function(){return this.emptyModal()}}]),t}(f.default),t.default=r},848:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,r,i,u,a,s=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),l=n(7),c=n(34),f=(o=c)&&o.__esModule?o:{default:o};function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function h(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}a=function(e){return"https://www.youtube.com/embed/"+e},i=["accelerometer","autoplay","encrypted-media","gyroscope","picture-in-picture"],u=function(){var e=function(e){function t(){return p(this,t),d(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return h(t,e),s(t,[{key:"template",value:function(){}},{key:"onRender",value:function(){return this.$el.attr("src",a(this.id))}}]),t}(l.View);return e.prototype.tagName="iframe",e.prototype.attributes={width:"320",height:"240",frameborder:"0",allow:i.join("; "),allowfullscreen:""},e}.call(void 0),r=function(){var e=function(e){function t(){return p(this,t),d(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return h(t,e),s(t,[{key:"showVideoBtnClicked",value:function(){return this.ui.showVideoBtn.hide(),this.ui.removeVideoBtn.show(),this.showIframe()}},{key:"removeVideoBtnClicked",value:function(){return this.ui.removeVideoBtn.hide(),this.ui.showVideoBtn.show(),this.getRegion("videoContainer").empty()}},{key:"showIframe",value:function(){var e;return e=new u({id:this.id}),this.showChildView("videoContainer",e)}}]),t}(l.View);return e.prototype.template=f.default.renderable((function(){return f.default.div(".vid-container"),f.default.button(".show-video-btn.btn.btn-outline-primary",(function(){return f.default.i(".fa.fa-youtube"),f.default.text(" Show Video")})),f.default.button(".remove-video-btn.btn.btn-outline-danger",{style:"display: none;"},(function(){return f.default.i(".fa.fa-youtube"),f.default.text(" Remove Video")}))})),e.prototype.ui={videoContainer:".vid-container",showVideoBtn:".show-video-btn",removeVideoBtn:".remove-video-btn"},e.prototype.regions={videoContainer:"@ui.videoContainer"},e.prototype.events={"click @ui.showVideoBtn":"showVideoBtnClicked","click @ui.removeVideoBtn":"removeVideoBtnClicked"},e}.call(void 0),t.default=r}}]);
//# sourceMappingURL=frontdoor-view-page-9159e449525ac5cf8188.js.map