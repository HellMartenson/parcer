!function(e){var t={};function r(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=1169)}({1169:function(e,t,r){e.exports=r(1170)},1170:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(274);window.MainSwWrapper=new n.MainSwWrapper},132:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){e.MAIN_SW_REGISTERED="main-sw-registered",e.MAIN_SW_PRODUCT_PAGE="main-sw-product-page",e.MAIN_SW_ADD_ORDERS="main-sw-add-orders",e.MAIN_SW_DELETE_USER_ORDERS="main-sw-delete-user-orders",e.MAIN_SW_GET_VIEWED_PRODUCT="main-sw-get-viewed-products",e.MAIN_SW_GET_LAST_ORDERS="main-sw-get-last-orders"}(t.SwEvents||(t.SwEvents={}))},147:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(){}return e.CACHES_PREFIX="dns-pwa-main-",e.CACHES_SUFFIX="-v1",e.ASSETS_CACHE_NAME=e.CACHES_PREFIX+"assets"+e.CACHES_SUFFIX,e.FONT_CACHE_NAME=e.CACHES_PREFIX+"font"+e.CACHES_SUFFIX,e.STATIC_CACHE_NAME=e.CACHES_PREFIX+"static"+e.CACHES_SUFFIX,e.PRODUCT_IMAGES_CACHE_NAME=e.CACHES_PREFIX+"product-images"+e.CACHES_SUFFIX,e.ORDER_PRODUCT_IMAGES_CACHE_NAME=e.CACHES_PREFIX+"order-product-images"+e.CACHES_SUFFIX,e.CITIES_URL="/files/error-page/city-info.json",e.SHOPS_URL="/files/error-page/shops.json",e.OFFLINE_PAGE_JSON_URLS=[],e.OFFLINE_PAGE_URL="/files/pwa/offline-page.html",e.CACHE_ON_INSTALL=[],e.ALL_CACHES=[e.ASSETS_CACHE_NAME,e.STATIC_CACHE_NAME,e.PRODUCT_IMAGES_CACHE_NAME],e.DELETE_USER_ORDERS_MODE_ALL="all",e.DELETE_USER_ORDERS_MODE_ANON="anon",e.DELETE_USER_ORDERS_MODE_AUTH="auth",e}();t.SwMainConstants=n},23:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var CookieHelper=function(){function CookieHelper(){}return CookieHelper.getCookie=function(e){var t=document.cookie.match(new RegExp("(?:^|; )"+e.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g,"\\$1")+"=([^;]*)"));return t?decodeURIComponent(t[1]):void 0},CookieHelper.setCookie=function(e,t,r){var n=r||{},i=e+"="+(t=encodeURIComponent(t));for(var o in n)if(!1!==n.hasOwnProperty(o)){i+="; "+o;var s=n[o];!0!==s&&(i+="="+s)}document.cookie=i},CookieHelper.unserializeCookie=function(serializeString){var error=0;if(!(""==serializeString||serializeString.length<2)){var val,kret,vret,cval,type=serializeString.charAt(0),cont=serializeString.substring(2),size=0,divpos=0,endcont=0,rest="";switch(type){case"N":rest=cont;break;case"b":val="1"==cont.charAt(0),rest=cont.substring(1);break;case"s":if(val="",divpos=cont.indexOf(":"),-1==divpos)break;if(size=parseInt(cont.substring(0,divpos)),0==size){if(cont.length-divpos<4)break;rest=cont.substring(divpos+4);break}if(cont.length-divpos-size<4)break;val=cont.substring(divpos+2,divpos+2+size),rest=cont.substring(divpos+4+size);break;case"i":case"d":for(var dotfound=0,i=0;i<cont.length;i++)if(cval=cont.charAt(i),isNaN(parseInt(cval))&&("d"!=type||"."!=cval||dotfound++)){endcont=i;break}val=cont.substring(0,endcont),val="i"==type?parseInt(val):parseFloat(val),rest=cont.substring(endcont+1);break;case"a":if(cont.length<4)return;if(divpos=cont.indexOf(":",1),-1==divpos)return;if(size=parseInt(cont.substring(1,divpos-1)),cont=cont.substring(divpos+2),val=new Array,cont.length<1)return;for(var i=0;i+1<2*size;i+=2){if(kret=CookieHelper.unserializeCookie(cont,1),error||void 0==kret[0]||""==kret[1])return;if(vret=CookieHelper.unserializeCookie(kret[1],1),error)return;val[kret[0]]=vret[0],cont=vret[1]}if("}"!=cont.charAt(0))return;rest=cont.substring(1);break;case"O":if(divpos=cont.indexOf(":"),-1==divpos)return;size=parseInt(cont.substring(0,divpos));var objname=cont.substring(divpos+2,divpos+2+size);if('":'!=cont.substring(divpos+2+size,divpos+4+size))return;var objprops=CookieHelper.unserializeCookie("a:"+cont.substring(divpos+4+size),1);if(error)return;rest=objprops[1];var objout="function "+objname+"(){";for(var key in objprops[0])objout+=key+"=objprops[0]['"+key+"'];";objout+="}val=new "+objname+"();",eval(objout)}return 1==arguments.length?val:[val,rest]}},CookieHelper}();exports.default=CookieHelper},274:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(132),i=r(275),o=function(){function e(){var t=this;if("serviceWorker"in navigator){var r=window[e.VAR_PRECACHE]||[],o=localStorage;o.setItem(e.GA_TRAKING_ID,window[e.GA_TRAKING_ID]||""),o.setItem(e.GA_SEND_URL,window[e.GA_SEND_URL]||""),navigator.serviceWorker.register("/pwa-sw-main.js?precacheURLs="+encodeURIComponent(JSON.stringify(r)),{scope:"/"}).then(function(e){t.reg=e,t.reg.waiting||t.reg.installing||document.dispatchEvent(new Event(n.SwEvents.MAIN_SW_REGISTERED))},function(e){}).then(function(){(new i.PwaOrdersProvider).fillLastOrders()})}}return e.prototype.sendProductMessage=function(e){this.hasRegActive()&&this.reg.active.postMessage({action:n.SwEvents.MAIN_SW_PRODUCT_PAGE,detail:e})},e.prototype.sendOrdersMessage=function(e){this.hasRegActive()&&this.reg.active.postMessage({action:n.SwEvents.MAIN_SW_ADD_ORDERS,detail:e})},e.prototype.sendDeleteUserOrdersMessage=function(e){this.hasRegActive()&&this.reg.active.postMessage({action:n.SwEvents.MAIN_SW_DELETE_USER_ORDERS,detail:{mode:e}})},e.prototype.hasRegActive=function(){return"serviceWorker"in navigator&&void 0!==this.reg&&void 0!==this.reg.active&&null!==this.reg.active},e.VAR_PRECACHE="pwa_sw_main_precache",e.GA_TRAKING_ID="ga_traking_id",e.GA_SEND_URL="ga_send_url",e}();t.MainSwWrapper=o},275:function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=n(r(23)),o=r(147),s=function(){return function(){var e=this;this.GET_ORDERS_URL="/pwa/pwa/get-orders/",this.DATE_LAST_ORDER_COOKIE_NAME="date-user-last-order-v2",this.fillLastOrders=function(){return!1===e.isNeedToReceiveOrders()?Promise.resolve(!0):fetch(e.GET_ORDERS_URL,{credentials:"same-origin"}).then(function(e){return e.json()}).then(function(t){var r=localStorage;return t.hasOwnProperty("result")?(window.MainSwWrapper.sendDeleteUserOrdersMessage(o.SwMainConstants.DELETE_USER_ORDERS_MODE_AUTH),r.setItem(e.DATE_LAST_ORDER_COOKIE_NAME,null)):(window.MainSwWrapper.sendDeleteUserOrdersMessage(o.SwMainConstants.DELETE_USER_ORDERS_MODE_ALL),window.MainSwWrapper.sendOrdersMessage(t),r.setItem(e.DATE_LAST_ORDER_COOKIE_NAME,e.dateLastOrderCookie)),Promise.resolve(!0)}).catch(function(e){return Promise.reject(e)})},this.isNeedToReceiveOrders=function(){var t=localStorage;return void 0===e.dateLastOrderCookie?(window.MainSwWrapper.sendDeleteUserOrdersMessage(o.SwMainConstants.DELETE_USER_ORDERS_MODE_AUTH),t.setItem(e.DATE_LAST_ORDER_COOKIE_NAME,null),!1):e.dateLastOrderCookie!==t.getItem(e.DATE_LAST_ORDER_COOKIE_NAME)},this.dateLastOrderCookie=i.default.getCookie(this.DATE_LAST_ORDER_COOKIE_NAME)}}();t.PwaOrdersProvider=s}});