(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{630:function(e,t,r){"use strict";var n,o,i,u,a,s,l=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}();r(631),n=r(28),o=r(4),r(5),s=r(15),r(414),i=o.Radio.channel("global"),u=["vanilla","cornsilk","BlanchedAlmond","DarkSeaGreen","LavenderBlush"],a=function(){var e=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),l(t,[{key:"events",value:function(){return{"click @ui.theme":"switch_theme"}}},{key:"templateContext",value:function(){return{ui:this.ui}}},{key:"switch_theme",value:function(e){var t;return t=n(e.target).html(),this.performSwitch(t)}},{key:"performSwitch",value:function(e){return console.log("performSwitch",e),i.request("main:app:set-theme",e),i.request("main:app:switch-theme",e)}}]),t}(o.Marionette.View);return e.prototype.ui={stylesheet:"#main-stylesheet",theme:".theme"},e.prototype.template=s.renderable((function(e){return s.div((function(){return u.forEach((function(e){return s.div(".theme.btn.btn-default",e)}))}))})),e}.call(void 0),e.exports=a},631:function(e,t,r){(function(e){function r(e,t){for(var r=0,n=e.length-1;n>=0;n--){var o=e[n];"."===o?e.splice(n,1):".."===o?(e.splice(n,1),r++):r&&(e.splice(n,1),r--)}if(t)for(;r--;r)e.unshift("..");return e}function n(e,t){if(e.filter)return e.filter(t);for(var r=[],n=0;n<e.length;n++)t(e[n],n,e)&&r.push(e[n]);return r}t.resolve=function(){for(var t="",o=!1,i=arguments.length-1;i>=-1&&!o;i--){var u=i>=0?arguments[i]:e.cwd();if("string"!=typeof u)throw new TypeError("Arguments to path.resolve must be strings");u&&(t=u+"/"+t,o="/"===u.charAt(0))}return(o?"/":"")+(t=r(n(t.split("/"),(function(e){return!!e})),!o).join("/"))||"."},t.normalize=function(e){var i=t.isAbsolute(e),u="/"===o(e,-1);return(e=r(n(e.split("/"),(function(e){return!!e})),!i).join("/"))||i||(e="."),e&&u&&(e+="/"),(i?"/":"")+e},t.isAbsolute=function(e){return"/"===e.charAt(0)},t.join=function(){var e=Array.prototype.slice.call(arguments,0);return t.normalize(n(e,(function(e,t){if("string"!=typeof e)throw new TypeError("Arguments to path.join must be strings");return e})).join("/"))},t.relative=function(e,r){function n(e){for(var t=0;t<e.length&&""===e[t];t++);for(var r=e.length-1;r>=0&&""===e[r];r--);return t>r?[]:e.slice(t,r-t+1)}e=t.resolve(e).substr(1),r=t.resolve(r).substr(1);for(var o=n(e.split("/")),i=n(r.split("/")),u=Math.min(o.length,i.length),a=u,s=0;s<u;s++)if(o[s]!==i[s]){a=s;break}var l=[];for(s=a;s<o.length;s++)l.push("..");return(l=l.concat(i.slice(a))).join("/")},t.sep="/",t.delimiter=":",t.dirname=function(e){if("string"!=typeof e&&(e+=""),0===e.length)return".";for(var t=e.charCodeAt(0),r=47===t,n=-1,o=!0,i=e.length-1;i>=1;--i)if(47===(t=e.charCodeAt(i))){if(!o){n=i;break}}else o=!1;return-1===n?r?"/":".":r&&1===n?"/":e.slice(0,n)},t.basename=function(e,t){var r=function(e){"string"!=typeof e&&(e+="");var t,r=0,n=-1,o=!0;for(t=e.length-1;t>=0;--t)if(47===e.charCodeAt(t)){if(!o){r=t+1;break}}else-1===n&&(o=!1,n=t+1);return-1===n?"":e.slice(r,n)}(e);return t&&r.substr(-1*t.length)===t&&(r=r.substr(0,r.length-t.length)),r},t.extname=function(e){"string"!=typeof e&&(e+="");for(var t=-1,r=0,n=-1,o=!0,i=0,u=e.length-1;u>=0;--u){var a=e.charCodeAt(u);if(47!==a)-1===n&&(o=!1,n=u+1),46===a?-1===t?t=u:1!==i&&(i=1):-1!==t&&(i=-1);else if(!o){r=u+1;break}}return-1===t||-1===n||0===i||1===i&&t===n-1&&t===r+1?"":e.slice(t,n)};var o="b"==="ab".substr(-1)?function(e,t,r){return e.substr(t,r)}:function(e,t,r){return t<0&&(t=e.length+t),e.substr(t,r)}}).call(this,r(160))}}]);
//# sourceMappingURL=frontdoor-view-switch-theme-cadab5b7544b0aa8c253.js.map