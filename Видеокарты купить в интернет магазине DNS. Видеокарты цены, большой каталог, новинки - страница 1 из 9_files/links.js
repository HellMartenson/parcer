!function(e){var t={};function r(i){if(t[i])return t[i].exports;var n=t[i]={i:i,l:!1,exports:{}};return e[i].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=t,r.d=function(e,t,i){r.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:i})},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=1642)}({1642:function(e,t,r){e.exports=r(1643)},1643:function(e,t,r){"use strict";var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var n=i(r(1644));window.links=new n.default},1644:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=r(88),n=function(){function e(){this.BLOCK_CLASS="ui-link",this.MODIFIER_PSEUDOLINK="_pseudolink"}return e.prototype.createLinkBase=function(e,t,r){return void 0===t&&(t=null),void 0===r&&(r=!1),this.create(e,t,null,r)},e.prototype.createLinkBlue=function(e,t,r){return void 0===t&&(t=null),void 0===r&&(r=!1),this.create(e,t,i.LinkColorModifiers.MODIFIER_COLOR_BLUE,r)},e.prototype.createLinkRed=function(e,t,r){return void 0===t&&(t=null),void 0===r&&(r=!1),this.create(e,t,i.LinkColorModifiers.MODIFIER_COLOR_RED,r)},e.prototype.createLinkGray=function(e,t,r){return void 0===r&&(r=!1),this.create(e,t,i.LinkColorModifiers.MODIFIER_COLOR_GRAY,r)},e.prototype.createLinkGrayDark=function(e,t,r){return void 0===t&&(t=null),void 0===r&&(r=!1),this.create(e,t,i.LinkColorModifiers.MODIFIER_COLOR_GRAY_DARK,r)},e.prototype.createLinkWhite=function(e,t,r){return void 0===t&&(t=null),void 0===r&&(r=!1),this.create(e,t,i.LinkColorModifiers.MODIFIER_COLOR_WHITE,r)},e.prototype.create=function(e,t,r,i,n){void 0===t&&(t=null),void 0===r&&(r=null),void 0===i&&(i=!1),void 0===n&&(n=null);var o=document.createElement("a");return o.classList.add(this.BLOCK_CLASS),null!==t&&(o.href=t),null!==r&&o.classList.add(this.BLOCK_CLASS+r),!1!==i&&o.classList.add(this.BLOCK_CLASS+this.MODIFIER_PSEUDOLINK),"string"==typeof e?o.innerHTML=e:o.appendChild(e),null!==n&&o.classList.add(n),o},e}();t.default=n},88:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){e.MODIFIER_COLOR_BLUE="_blue",e.MODIFIER_COLOR_RED="_red",e.MODIFIER_COLOR_GRAY="_gray",e.MODIFIER_COLOR_GRAY_DARK="_gray_dark",e.MODIFIER_COLOR_WHITE="_white"}(t.LinkColorModifiers||(t.LinkColorModifiers={}))}});