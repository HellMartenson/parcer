!function(t){var e={};function n(i){if(e[i])return e[i].exports;var o=e[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:i})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=1660)}({1660:function(t,e,n){t.exports=n(1661)},1661:function(t,e,n){"use strict";var i=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var o=i(n(1662));window.PaginationProvider=new o.default},1662:function(t,e,n){"use strict";var i=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var o=i(n(269)),r=function(){function t(){}return t.prototype.getPaginationById=function(t){var e=document.getElementById(t);return null===e?null:new o.default(e)},t}();e.default=r},269:function(t,e,n){"use strict";var i=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var o=i(n(270)),r=function(){function t(t){this.SELECTOR_PAGE='[data-role="pagination-page"]',this.SELECTOR_SHOW_MORE_BTN='[data-role="show-more-btn"]',this.SELECTOR_ACTIVE_PAGE="pagination-widget__page_active",this.onChangePageCallback=null,this.onShowMoreCallback=null,this.showMoreBtn=null,this.container=t,this.showMoreBtn=this.container.querySelector(this.SELECTOR_SHOW_MORE_BTN)}return t.prototype.init=function(){null!==this.onChangePageCallback&&this.initPages(),this.isShowMoreBtnVisible()&&null!==this.onShowMoreCallback&&this.initShowMoreBtn()},t.prototype.setOnChangePageCallback=function(t){return this.onChangePageCallback=t,this},t.prototype.setOnShowMoreCallback=function(t){return this.onShowMoreCallback=t,this},t.prototype.isShowMoreBtnVisible=function(){return null!==this.showMoreBtn},t.prototype.initPages=function(){var t=this,e=[].slice.call(this.container.querySelectorAll(this.SELECTOR_PAGE));[].slice.call(e).forEach(function(e){var n=e.querySelector("a");if(!t.isLinkDisabled(n)){var i=parseInt(e.dataset.pageNumber,10),r=n.href,a=new o.default(i,r);n.addEventListener("click",function(e){e.preventDefault(),t.onChangePageCallback(a)})}})},t.prototype.initShowMoreBtn=function(){var t=this;if(null!==this.showMoreBtn){var e=this.showMoreBtn.dataset.url,n=parseInt(this.showMoreBtn.dataset.pageNumber,10),i=new o.default(n,e);this.showMoreBtn.addEventListener("click",function(){t.onShowMoreCallback(i)})}},t.prototype.isLinkDisabled=function(t){return t.classList.contains("pagination-widget__page-link_disabled")},Object.defineProperty(t.prototype,"activePage",{get:function(){return this.container.querySelector("."+this.SELECTOR_ACTIVE_PAGE).getAttribute("data-page-number")},enumerable:!0,configurable:!0}),t.prototype.makeActiveNextPage=function(){var t=this,e=Number(this.activePage)+1,n=!1;[].slice.call(this.container.querySelectorAll(".pagination-widget__page")).forEach(function(i){n||(i.classList.remove(t.SELECTOR_ACTIVE_PAGE),i.getAttribute("data-page-number")===String(e)&&(i.classList.add(t.SELECTOR_ACTIVE_PAGE),n=!0))})},t}();e.default=r},270:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=function(){return function(t,e){this.number=t,this.url=e}}();e.default=i}});