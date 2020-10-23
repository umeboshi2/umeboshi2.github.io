(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{1169:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o,r,i,u,a=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),c=n(4),l=n(8),p=s(n(40)),f=n(774),d=s(n(807));function s(t){return t&&t.__esModule?t:{default:t}}function b(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function h(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function y(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}o=c.Radio.channel("pmc"),i=function(){var t=function(t){function e(){return b(this,e),h(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return y(e,t),a(e,[{key:"delBtnClicked",value:function(){return console.log("delBtnClicked")}}]),e}(l.View);return t.prototype.tagName="li",t.prototype.className="list-group-item",t.prototype.template=p.default.renderable((function(t){return p.default.div(".row",(function(){return p.default.span(".mr-auto",t.name),p.default.button(".ml-auto.del-btn.btn.btn-sm.btn-outline-danger",(function(){return p.default.text("Delete")}))}))})),t.prototype.ui={delBtn:".del-btn"},t.prototype.events={"click @ui.delBtn":"delBtnClicked"},t}.call(void 0),u=function(){var t=function(t){function e(){return b(this,e),h(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return y(e,t),e}(l.CollectionView);return t.prototype.tagName="ul",t.prototype.className="list-group",t.prototype.childView=i,t.prototype.viewComparator="name",t}.call(void 0),r=function(){var t=function(t){function e(){return b(this,e),h(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return y(e,t),a(e,[{key:"onRender",value:function(){var t=this;return o.request("get-topic-collection").fetch().done((function(){var e;return e=new d.default({buttonText:"Add",placeholder:"Add a topic...."}),t.showChildView("addTopic",e)}))}},{key:"showTopicsView",value:function(){var t,e;return t=o.request("get-topic-collection"),e=new u({collection:t}),this.showChildView("content",e)}},{key:"topicSubmitted",value:function(t){var e,n,r=this;return e=o.request("get-topic-collection"),this.ui.addTopic.hide(),n={name:t.value},e.add(n).save().done((function(){return r.ui.addTopic.show()}))}},{key:"updateBtnClicked",value:function(){var t,e,n;return console.log("update clicked"),n=o.request("get-topic-collection"),t=o.request("get-fmtopic-collection"),e=new f.FrontMatterCollection,n.fetch().then((function(){return t.fetch()})).then((function(){return e.fetch()})).then((function(){return e.each((function(e){var n;return n=e.id,t.where({pmcid:n})}))}))}}]),e}(l.View);return t.prototype.template=p.default.renderable((function(t){return p.default.h3("Manage Topics"),p.default.button(".update-btn.btn.btn-outline-warning","Update static topics"),p.default.div(".add-topic-input"),p.default.div(".paginate-bar"),p.default.div(".content")})),t.prototype.ui={addTopic:".add-topic-input",content:".content",paginateBar:".paginate-bar",updateBtn:".update-btn"},t.prototype.regions={addTopic:"@ui.addTopic",content:"@ui.content",paginateBar:"@ui.paginateBar"},t.prototype.events={"click @ui.updateBtn":"updateBtnClicked"},t.prototype.childViewEvents={"input:submit":"topicSubmitted"},t}.call(void 0),e.default=r},807:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o,r,i=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),u=n(8),a=n(40),c=(o=a)&&o.__esModule?o:{default:o};function l(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function p(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}r=function(){var t=function(t){function e(){return l(this,e),p(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),i(e,[{key:"templateContext",value:function(){return{buttonText:this.getOption("buttonText")||"Search",placeholder:this.getOption("placeholder")||"Enter search term",buttonClass:this.getOption("buttonClass")||".btn.btn-outline-warning"}}},{key:"buttonClicked",value:function(){var t;if(null!=(t=this.ui.input.val().trim()))return this.trigger("input:submit",{value:t})}}]),e}(u.View);return t.prototype.template=c.default.renderable((function(t){return c.default.div(".input-group",(function(){return c.default.div(".input-group-prepend",(function(){return c.default.button(".input-group-text"+t.buttonClass,t.buttonText)})),c.default.input(".form-control",{type:"text",placeholder:t.placeholder})}))})),t.prototype.ui={button:"button",input:"input"},t.prototype.events={"click @ui.button":"buttonClicked"},t}.call(void 0),e.default=r}}]);
//# sourceMappingURL=pmc-view-manage-topics-0b5202ee01c19660e29f.js.map