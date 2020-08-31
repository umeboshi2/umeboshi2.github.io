(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{292:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,i,o,a,s=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),u=p(r(1)),l=p(r(2)),c=p(r(4)),f=(p(r(5)),p(r(293)));p(r(19));function p(e){return e&&e.__esModule?e:{default:e}}function d(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function h(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}r(110),r(111),a=function(){var e=function(e){function t(){return d(this,t),_(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return h(t,e),s(t,[{key:"parse",value:function(e){return(new f.default).xml2js(e)}}]),t}(u.default.Model);return e.prototype.url="https://www.qmap.pub/api/rss?lang=en",e}.call(void 0),n=function(){var e=function(e){function t(){return d(this,t),_(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return h(t,e),t}(l.default.View);return e.prototype.template=c.default.renderable((function(e){return c.default.h1(e.rss.channel.description)})),e}.call(void 0),i=function(){var e=function(e){function t(){return d(this,t),_(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return h(t,e),t}(l.default.View);return e.prototype.template=c.default.renderable((function(e){var t,r,n,i,o;for(o=[],r=0,n=(i=e.rss.channel.item).length;r<n;r++)t=i[r],console.log("I",t),c.default.text(new Date(t.pubDate)),c.default.text("|"),c.default.a({href:t.link},t.title),o.push(c.default.div(".listview-list-entry",(function(){return c.default.raw(t.description)})));return o})),e}.call(void 0),o=function(){var e=function(e){function t(){return d(this,t),_(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return h(t,e),s(t,[{key:"showIndexView",value:function(){var e;return this.getRegion("indexView").empty(),e=new i({model:this.model}),this.showChildView("indexView",e)}},{key:"showHeader",value:function(){var e;return this.getRegion("header").empty(),e=new n({model:this.model}),this.showChildView("header",e)}},{key:"onRender",value:function(){var e=this;return this.model.fetch({dataType:"text"}).done((function(){return e.showIndexView(),e.showHeader()}))}}]),t}(l.default.View);return e.prototype.template=c.default.renderable((function(e){return c.default.div(".row.listview-header"),c.default.div(".index-view")})),e.prototype.ui={header:".listview-header",indexView:".index-view",refreshBtn:".refresh-btn"},e.prototype.regions={header:"@ui.header",indexView:"@ui.indexView"},e.prototype.events={"click @ui.refreshBtn":"refreshBtnClicked"},e.prototype.model=new a,e}.call(void 0),t.default=o},293:function(e,t,r){var n,i,o;!function(r,a){"use strict";i=[],void 0===(o="function"==typeof(n=function(e){return function(t){(t=t||{}).arrayAccessForm=t.arrayAccessForm||"none",t.emptyNodeForm=t.emptyNodeForm||"text",t.jsAttributeFilter=t.jsAttributeFilter,t.jsAttributeConverter=t.jsAttributeConverter,t.attributeConverters=t.attributeConverters||[],t.datetimeAccessFormPaths=t.datetimeAccessFormPaths||[],t.arrayAccessFormPaths=t.arrayAccessFormPaths||[],t.xmldomOptions=t.xmldomOptions||{},void 0===t.enableToStringFunc&&(t.enableToStringFunc=!0),void 0===t.skipEmptyTextNodesForObj&&(t.skipEmptyTextNodesForObj=!0),void 0===t.stripWhitespaces&&(t.stripWhitespaces=!0),void 0===t.useDoubleQuotes&&(t.useDoubleQuotes=!0),void 0===t.ignoreRoot&&(t.ignoreRoot=!1),void 0===t.escapeMode&&(t.escapeMode=!0),void 0===t.attributePrefix&&(t.attributePrefix="_"),void 0===t.selfClosingElements&&(t.selfClosingElements=!0),void 0===t.keepCData&&(t.keepCData=!1),void 0===t.keepText&&(t.keepText=!1),void 0===t.jsDateUTC&&(t.jsDateUTC=!1),function(){function e(e){var t=String(e);return 1===t.length&&(t="0"+t),t}"function"!=typeof String.prototype.trim&&(String.prototype.trim=function(){return this.replace(/^\s+|^\n+|(\s|\n)+$/g,"")}),"function"!=typeof Date.prototype.toISOString&&(Date.prototype.toISOString=function(){return this.getUTCFullYear()+"-"+e(this.getUTCMonth()+1)+"-"+e(this.getUTCDate())+"T"+e(this.getUTCHours())+":"+e(this.getUTCMinutes())+":"+e(this.getUTCSeconds())+"."+String((this.getUTCMilliseconds()/1e3).toFixed(3)).slice(2,5)+"Z"})}();var r={ELEMENT_NODE:1,TEXT_NODE:3,CDATA_SECTION_NODE:4,COMMENT_NODE:8,DOCUMENT_NODE:9};function n(e){var t=e.localName;return null==t&&(t=e.baseName),null!=t&&""!==t||(t=e.nodeName),t}function i(e){return"string"==typeof e?e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;"):e}function o(e,r,n){switch(t.arrayAccessForm){case"property":e[r]instanceof Array?e[r+"_asArray"]=e[r]:e[r+"_asArray"]=[e[r]]}if(!(e[r]instanceof Array)&&t.arrayAccessFormPaths.length>0){for(var i=!1,o=0;o<t.arrayAccessFormPaths.length;o++){var a=t.arrayAccessFormPaths[o];if("string"==typeof a){if(a===n){i=!0;break}}else if(a instanceof RegExp){if(a.test(n)){i=!0;break}}else if("function"==typeof a&&a(r,n)){i=!0;break}}i&&(e[r]=[e[r]])}}function a(e){var t=e.split(/[-T:+Z]/g),r=new Date(t[0],t[1]-1,t[2]),n=t[5].split(".");if(r.setHours(t[3],t[4],n[0]),n.length>1&&r.setMilliseconds(n[1]),t[6]&&t[7]){var i=60*t[6]+Number(t[7]);i=0+("-"===(/\d\d-\d\d:\d\d$/.test(e)?"-":"+")?-1*i:i),r.setMinutes(r.getMinutes()-i-r.getTimezoneOffset())}else-1!==e.indexOf("Z",e.length-1)&&(r=new Date(Date.UTC(r.getFullYear(),r.getMonth(),r.getDate(),r.getHours(),r.getMinutes(),r.getSeconds(),r.getMilliseconds())));return r}function s(e,i){for(var s={__cnt:0},l=e.childNodes,c=0;c<l.length;c++){var f=l.item(c),p=n(f);f.nodeType!==r.COMMENT_NODE&&(s.__cnt++,null==s[p]?(s[p]=u(f,i+"."+p),o(s,p,i+"."+p)):(s[p]instanceof Array||(s[p]=[s[p]],o(s,p,i+"."+p)),s[p][s[p].length]=u(f,i+"."+p)))}for(var d=0;d<e.attributes.length;d++){var _=e.attributes.item(d);s.__cnt++;for(var h=_.value,y=0;y<t.attributeConverters.length;y++){var g=t.attributeConverters[y];g.test.call(null,_.name,_.value)&&(h=g.convert.call(null,_.name,_.value))}s[t.attributePrefix+_.name]=h}var m=e.prefix;return m&&(s.__cnt++,s.__prefix=m),s["#text"]&&(s.__text=s["#text"],s.__text instanceof Array&&(s.__text=s.__text.join("\n")),t.escapeMode&&(s.__text=s.__text.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&#x27;/g,"'").replace(/&amp;/g,"&")),t.stripWhitespaces&&(s.__text=s.__text.trim()),delete s["#text"],"property"===t.arrayAccessForm&&delete s["#text_asArray"],s.__text=function(e,r,n){if(t.datetimeAccessFormPaths.length>0)for(var i=n.split(".#")[0],o=0;o<t.datetimeAccessFormPaths.length;o++){var s=t.datetimeAccessFormPaths[o];if("string"==typeof s){if(s===i)return a(e)}else if(s instanceof RegExp){if(s.test(i))return a(e)}else if("function"==typeof s&&s(i))return a(e)}return e}(s.__text,0,i+".#text")),s.hasOwnProperty("#cdata-section")&&(s.__cdata=s["#cdata-section"],delete s["#cdata-section"],"property"===t.arrayAccessForm&&delete s["#cdata-section_asArray"]),1===s.__cnt&&s.__text&&!t.keepText?s=s.__text:0===s.__cnt&&"text"===t.emptyNodeForm?s="":s.__cnt>1&&void 0!==s.__text&&t.skipEmptyTextNodesForObj&&(t.stripWhitespaces&&""===s.__text||""===s.__text.trim())&&delete s.__text,delete s.__cnt,t.keepCData||s.hasOwnProperty("__text")||!s.hasOwnProperty("__cdata")||1!==Object.keys(s).length?(t.enableToStringFunc&&(s.__text||s.__cdata)&&(s.toString=function(){return(this.__text?this.__text:"")+(this.__cdata?this.__cdata:"")}),s):s.__cdata?s.__cdata:""}function u(e,i){return e.nodeType===r.DOCUMENT_NODE?function(e){for(var i={},o=e.childNodes,a=0;a<o.length;a++){var s=o.item(a);if(s.nodeType===r.ELEMENT_NODE){var l=n(s);t.ignoreRoot?i=u(s,l):i[l]=u(s,l)}}return i}(e):e.nodeType===r.ELEMENT_NODE?s(e,i):e.nodeType===r.TEXT_NODE||e.nodeType===r.CDATA_SECTION_NODE?e.nodeValue:null}function l(e,r,n,o){var a="<"+(e&&e.__prefix?e.__prefix+":":"")+r;if(n)for(var s=0;s<n.length;s++){var u=n[s],l=e[u];t.escapeMode&&(l=i(l)),a+=" "+u.substr(t.attributePrefix.length)+"=",t.useDoubleQuotes?a+='"'+l+'"':a+="'"+l+"'"}return a+=o?" />":">"}function c(e,t){return"</"+(e&&e.__prefix?e.__prefix+":":"")+t+">"}function f(e,r){return"property"===t.arrayAccessForm&&(n=r.toString(),i="_asArray",-1!==n.indexOf(i,n.length-i.length))||0===r.toString().indexOf(t.attributePrefix)||0===r.toString().indexOf("__")||e[r]instanceof Function;var n,i}function p(e){var t=0;if(e instanceof Object)for(var r in e)f(e,r)||t++;return t}function d(e){var r=[];if(e instanceof Object)for(var n in e)-1===n.toString().indexOf("__")&&0===n.toString().indexOf(t.attributePrefix)&&r.push(n);return r}function _(e){var r="";return e instanceof Object?r+=function(e){var r="";return e.__cdata&&(r+="<![CDATA["+e.__cdata+"]]>"),(e.__text||"number"==typeof e.__text||"boolean"==typeof e.__text)&&(t.escapeMode?r+=i(e.__text):r+=e.__text),r}(e):null!==e&&(t.escapeMode?r+=i(e):r+=e),r}function h(e,r,n){var i="";if(t.jsAttributeFilter&&t.jsAttributeFilter.call(null,r,e))return i;if(t.jsAttributeConverter&&(e=t.jsAttributeConverter.call(null,r,e)),null!=e&&""!==e||!t.selfClosingElements)if("object"==typeof e)if("[object Array]"===Object.prototype.toString.call(e))i+=function(e,t,r){var n="";if(0===e.length)n+=l(e,t,r,!0);else for(var i=0;i<e.length;i++)n+=h(e[i],t,d(e[i]));return n}(e,r,n);else if(e instanceof Date)i+=l(e,r,n,!1),i+=t.jsDateUTC?e.toUTCString():e.toISOString(),i+=c(e,r);else{p(e)>0||"number"==typeof e.__text||"boolean"==typeof e.__text||e.__text||e.__cdata?(i+=l(e,r,n,!1),i+=y(e),i+=c(e,r)):t.selfClosingElements?i+=l(e,r,n,!0):(i+=l(e,r,n,!1),i+=c(e,r))}else i+=l(e,r,n,!1),i+=_(e),i+=c(e,r);else i+=l(e,r,n,!0);return i}function y(e){var t="";if(p(e)>0)for(var r in e)if(!f(e,r)){var n=e[r];t+=h(n,r,d(n))}return t+=_(e)}function g(r){if(void 0===r)return null;if("string"!=typeof r)return null;var n=null,i=null;if(e)i=(n=new e(t.xmldomOptions)).parseFromString(r,"text/xml");else if(window&&window.DOMParser){n=new window.DOMParser;var o=null;if(!(window.ActiveXObject||"ActiveXObject"in window)&&document.all&&!document.addEventListener)try{o=n.parseFromString("INVALID","text/xml").childNodes[0].namespaceURI}catch(e){o=null}try{i=n.parseFromString(r,"text/xml"),null!==o&&i.getElementsByTagNameNS(o,"parsererror").length>0&&(i=null)}catch(e){i=null}}else 0===r.indexOf("<?")&&(r=r.substr(r.indexOf("?>")+2)),(i=new ActiveXObject("Microsoft.XMLDOM")).async="false",i.loadXML(r);return i}this.asArray=function(e){return null==e?[]:e instanceof Array?e:[e]},this.toXmlDateTime=function(e){return e instanceof Date?e.toISOString():"number"==typeof e?new Date(e).toISOString():null},this.asDateTime=function(e){return"string"==typeof e?a(e):e},this.xml2dom=function(e){return g(e)},this.dom2js=function(e){return u(e,null)},this.js2dom=function(e){return g(this.js2xml(e))},this.xml2js=function(e){var t=g(e);return null!=t?this.dom2js(t):null},this.js2xml=function(e){return y(e)},this.getVersion=function(){return"3.4.0"}}})?n.apply(t,i):n)||(e.exports=o)}()}}]);
//# sourceMappingURL=crown-view-rss-f31b2682269e32f4f578.js.map