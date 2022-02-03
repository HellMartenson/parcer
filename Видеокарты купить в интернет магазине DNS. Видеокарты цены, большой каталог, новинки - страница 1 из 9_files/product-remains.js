!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:o})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1171)}({1:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.domDispatchEvent=function(e,t,n){var o=document.createEvent("CustomEvent");o.initCustomEvent(e,!0,!0,n),void 0===t?window.dispatchEvent(o):t.dispatchEvent(o)}},10:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Headers=u,t.Request=y,t.Response=m,n.d(t,"DOMException",function(){return T}),t.fetch=b;var o="undefined"!=typeof globalThis&&globalThis||"undefined"!=typeof self&&self||void 0!==o&&o,r={searchParams:"URLSearchParams"in o,iterable:"Symbol"in o&&"iterator"in Symbol,blob:"FileReader"in o&&"Blob"in o&&function(){try{return new Blob,!0}catch(e){return!1}}(),formData:"FormData"in o,arrayBuffer:"ArrayBuffer"in o};if(r.arrayBuffer)var i=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],s=ArrayBuffer.isView||function(e){return e&&i.indexOf(Object.prototype.toString.call(e))>-1};function a(e){if("string"!=typeof e&&(e=String(e)),/[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(e)||""===e)throw new TypeError('Invalid character in header field name: "'+e+'"');return e.toLowerCase()}function c(e){return"string"!=typeof e&&(e=String(e)),e}function l(e){var t={next:function(){var t=e.shift();return{done:void 0===t,value:t}}};return r.iterable&&(t[Symbol.iterator]=function(){return t}),t}function u(e){this.map={},e instanceof u?e.forEach(function(e,t){this.append(t,e)},this):Array.isArray(e)?e.forEach(function(e){this.append(e[0],e[1])},this):e&&Object.getOwnPropertyNames(e).forEach(function(t){this.append(t,e[t])},this)}function d(e){if(e.bodyUsed)return Promise.reject(new TypeError("Already read"));e.bodyUsed=!0}function E(e){return new Promise(function(t,n){e.onload=function(){t(e.result)},e.onerror=function(){n(e.error)}})}function h(e){var t=new FileReader,n=E(t);return t.readAsArrayBuffer(e),n}function f(e){if(e.slice)return e.slice(0);var t=new Uint8Array(e.byteLength);return t.set(new Uint8Array(e)),t.buffer}function p(){return this.bodyUsed=!1,this._initBody=function(e){var t;this.bodyUsed=this.bodyUsed,this._bodyInit=e,e?"string"==typeof e?this._bodyText=e:r.blob&&Blob.prototype.isPrototypeOf(e)?this._bodyBlob=e:r.formData&&FormData.prototype.isPrototypeOf(e)?this._bodyFormData=e:r.searchParams&&URLSearchParams.prototype.isPrototypeOf(e)?this._bodyText=e.toString():r.arrayBuffer&&r.blob&&((t=e)&&DataView.prototype.isPrototypeOf(t))?(this._bodyArrayBuffer=f(e.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):r.arrayBuffer&&(ArrayBuffer.prototype.isPrototypeOf(e)||s(e))?this._bodyArrayBuffer=f(e):this._bodyText=e=Object.prototype.toString.call(e):this._bodyText="",this.headers.get("content-type")||("string"==typeof e?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):r.searchParams&&URLSearchParams.prototype.isPrototypeOf(e)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},r.blob&&(this.blob=function(){var e=d(this);if(e)return e;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){if(this._bodyArrayBuffer){var e=d(this);return e||(ArrayBuffer.isView(this._bodyArrayBuffer)?Promise.resolve(this._bodyArrayBuffer.buffer.slice(this._bodyArrayBuffer.byteOffset,this._bodyArrayBuffer.byteOffset+this._bodyArrayBuffer.byteLength)):Promise.resolve(this._bodyArrayBuffer))}return this.blob().then(h)}),this.text=function(){var e,t,n,o=d(this);if(o)return o;if(this._bodyBlob)return e=this._bodyBlob,t=new FileReader,n=E(t),t.readAsText(e),n;if(this._bodyArrayBuffer)return Promise.resolve(function(e){for(var t=new Uint8Array(e),n=new Array(t.length),o=0;o<t.length;o++)n[o]=String.fromCharCode(t[o]);return n.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},r.formData&&(this.formData=function(){return this.text().then(S)}),this.json=function(){return this.text().then(JSON.parse)},this}u.prototype.append=function(e,t){e=a(e),t=c(t);var n=this.map[e];this.map[e]=n?n+", "+t:t},u.prototype.delete=function(e){delete this.map[a(e)]},u.prototype.get=function(e){return e=a(e),this.has(e)?this.map[e]:null},u.prototype.has=function(e){return this.map.hasOwnProperty(a(e))},u.prototype.set=function(e,t){this.map[a(e)]=c(t)},u.prototype.forEach=function(e,t){for(var n in this.map)this.map.hasOwnProperty(n)&&e.call(t,this.map[n],n,this)},u.prototype.keys=function(){var e=[];return this.forEach(function(t,n){e.push(n)}),l(e)},u.prototype.values=function(){var e=[];return this.forEach(function(t){e.push(t)}),l(e)},u.prototype.entries=function(){var e=[];return this.forEach(function(t,n){e.push([n,t])}),l(e)},r.iterable&&(u.prototype[Symbol.iterator]=u.prototype.entries);var _=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function y(e,t){if(!(this instanceof y))throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');var n,o,r=(t=t||{}).body;if(e instanceof y){if(e.bodyUsed)throw new TypeError("Already read");this.url=e.url,this.credentials=e.credentials,t.headers||(this.headers=new u(e.headers)),this.method=e.method,this.mode=e.mode,this.signal=e.signal,r||null==e._bodyInit||(r=e._bodyInit,e.bodyUsed=!0)}else this.url=String(e);if(this.credentials=t.credentials||this.credentials||"same-origin",!t.headers&&this.headers||(this.headers=new u(t.headers)),this.method=(n=t.method||this.method||"GET",o=n.toUpperCase(),_.indexOf(o)>-1?o:n),this.mode=t.mode||this.mode||null,this.signal=t.signal||this.signal,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&r)throw new TypeError("Body not allowed for GET or HEAD requests");if(this._initBody(r),!("GET"!==this.method&&"HEAD"!==this.method||"no-store"!==t.cache&&"no-cache"!==t.cache)){var i=/([?&])_=[^&]*/;if(i.test(this.url))this.url=this.url.replace(i,"$1_="+(new Date).getTime());else{this.url+=(/\?/.test(this.url)?"&":"?")+"_="+(new Date).getTime()}}}function S(e){var t=new FormData;return e.trim().split("&").forEach(function(e){if(e){var n=e.split("="),o=n.shift().replace(/\+/g," "),r=n.join("=").replace(/\+/g," ");t.append(decodeURIComponent(o),decodeURIComponent(r))}}),t}function m(e,t){if(!(this instanceof m))throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');t||(t={}),this.type="default",this.status=void 0===t.status?200:t.status,this.ok=this.status>=200&&this.status<300,this.statusText=void 0===t.statusText?"":""+t.statusText,this.headers=new u(t.headers),this.url=t.url||"",this._initBody(e)}y.prototype.clone=function(){return new y(this,{body:this._bodyInit})},p.call(y.prototype),p.call(m.prototype),m.prototype.clone=function(){return new m(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new u(this.headers),url:this.url})},m.error=function(){var e=new m(null,{status:0,statusText:""});return e.type="error",e};var v=[301,302,303,307,308];m.redirect=function(e,t){if(-1===v.indexOf(t))throw new RangeError("Invalid status code");return new m(null,{status:t,headers:{location:e}})};var T=o.DOMException;try{new T}catch(e){(T=function(e,t){this.message=e,this.name=t;var n=Error(e);this.stack=n.stack}).prototype=Object.create(Error.prototype),T.prototype.constructor=T}function b(e,t){return new Promise(function(n,i){var s=new y(e,t);if(s.signal&&s.signal.aborted)return i(new T("Aborted","AbortError"));var a=new XMLHttpRequest;function l(){a.abort()}a.onload=function(){var e,t,o={status:a.status,statusText:a.statusText,headers:(e=a.getAllResponseHeaders()||"",t=new u,e.replace(/\r?\n[\t ]+/g," ").split("\r").map(function(e){return 0===e.indexOf("\n")?e.substr(1,e.length):e}).forEach(function(e){var n=e.split(":"),o=n.shift().trim();if(o){var r=n.join(":").trim();t.append(o,r)}}),t)};o.url="responseURL"in a?a.responseURL:o.headers.get("X-Request-URL");var r="response"in a?a.response:a.responseText;setTimeout(function(){n(new m(r,o))},0)},a.onerror=function(){setTimeout(function(){i(new TypeError("Network request failed"))},0)},a.ontimeout=function(){setTimeout(function(){i(new TypeError("Network request failed"))},0)},a.onabort=function(){setTimeout(function(){i(new T("Aborted","AbortError"))},0)},a.open(s.method,function(e){try{return""===e&&o.location.href?o.location.href:e}catch(t){return e}}(s.url),!0),"include"===s.credentials?a.withCredentials=!0:"omit"===s.credentials&&(a.withCredentials=!1),"responseType"in a&&(r.blob?a.responseType="blob":r.arrayBuffer&&s.headers.get("Content-Type")&&-1!==s.headers.get("Content-Type").indexOf("application/octet-stream")&&(a.responseType="arraybuffer")),!t||"object"!=typeof t.headers||t.headers instanceof u?s.headers.forEach(function(e,t){a.setRequestHeader(t,e)}):Object.getOwnPropertyNames(t.headers).forEach(function(e){a.setRequestHeader(e,c(t.headers[e]))}),s.signal&&(s.signal.addEventListener("abort",l),a.onreadystatechange=function(){4===a.readyState&&s.signal.removeEventListener("abort",l)}),a.send(void 0===s._bodyInit?null:s._bodyInit)})}b.polyfill=!0,o.fetch||(o.fetch=b,o.Headers=u,o.Request=y,o.Response=m)},1171:function(e,t,n){e.exports=n(1172)},1172:function(e,t,n){"use strict";var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var r=n(97),i=n(1173),s=o(n(1174));window.EVENT_AVAILS_MODAL_SHOW="avails-modal:show",window.EVENT_AVAILS_MODAL_SHOWN="avails-modal:shown",window.EVENT_AVAILS_MODAL_HIDE="avails-modal:hide",window.EVENT_AVAILS_MODAL_HIDDEN="avails-modal:hidden",window.EVENT_AVAILS_MODAL_CONTENT_LOADED="avails-modal:content-loaded",window.EVENT_AVAILS_MODAL_REQUEST="avails-modal:request";var a=new Map;function c(e,t,n){var o;a.has(e)?o=a.get(e):(o=new s.default(e,t,n).load(),a.set(e,o)),o.show()}r.Event_documentOn("click",'[data-role="show-avails-modal"]',function(e){var t=e.target.closest('[data-role="show-avails-modal"]');c(t.dataset.modalId,t.dataset.url,i.TabsEnum.RETAIL)}),window.addEventListener(window.EVENT_AVAILS_MODAL_REQUEST,function(e){c(e.detail.modalId,e.detail.url,i.TabsEnum.RETAIL)}),window.openAvailsModalWidget=function(e,t,n,o){c(e,t,o)}},1173:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){e.RETAIL="retail",e.DISCOUNT="discount"}(t.TabsEnum||(t.TabsEnum={}))},1174:function(e,t,n){"use strict";var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),i=n(19),s=o(n(5)),a=n(6),c=o(n(8)),l=n(59),u=n(12),d=n(75),E=n(278),h=n(279),f=n(1175),p=function(){function e(e,t,n){this.modalId=e,this.loadUrl=t,this.defaultTab=n,this.availsMaps={},this.delayWrapper=function(e){var t=0;return function(){for(var n=[],o=0;o<arguments.length;o++)n[o]=arguments[o];clearTimeout(t),t=setTimeout(e.bind.apply(e,[this].concat(n)),500)}},this.fetch=new s.default,this.visibility=new l.VisibilityHelper,this.screen=new c.default,this.refreshMapWithDelay=this.delayWrapper(this.refreshMap.bind(this))}return e.prototype.load=function(){var e=this,t={id:"avails-modal-"+this.modalId,modalClass:"modal-for-avails",headerHtml:this.getHeader(),contentHtml:this.getContent(),size:u.BaseModalSizesEnum.MD,zIndex:1800};this.modal=window.modalProvider.getInstance(t);var n=this.modal.element;return this.getAvails().then(function(){e.bindListeners();var t=[].slice.call(n.querySelectorAll(f.SelectorsEnums.SELECTOR_REMAINS_LIST_TAB)),o=!1;t.forEach(function(e){null!==e.querySelector(f.SelectorsEnums.SELECTOR_NO_AVAILS)&&(o=!0)}),o||(t.forEach(function(t){e.initTab(t)}),e.selectTab(e.defaultTab),e.checkOpenedShops(e.modal.element.querySelector(f.SelectorsEnums.SELECTOR_REMAINS_LIST_TAB+'[data-type="'+e.defaultTab+'"]')),window.dispatchLazyLoadUpdateEvent(),r.domDispatchEvent(E.BranchDeviationInfoWidgetEvents.INIT))}),this.modal},e.prototype.bindListeners=function(){var e=this;this.modal.onShow(function(){r.domDispatchEvent(window.EVENT_AVAILS_MODAL_SHOW)}),this.modal.onShown(function(){r.domDispatchEvent(window.EVENT_AVAILS_MODAL_SHOWN),[].slice.call(t.querySelectorAll(f.SelectorsEnums.SELECTOR_REMAINS_LIST_TAB)).forEach(function(t){e.refreshMapWithDelay(t)})});var t=this.modal.element,n=t.querySelector(".current-shop-hint");t.addEventListener("click",function(){null!==n&&n.classList.add("hide")}),this.modal.onHide(function(){r.domDispatchEvent(window.EVENT_AVAILS_MODAL_HIDE),r.domDispatchEvent(d.PopoverBlockEventsEnum.CLOSE)}),this.modal.onHidden(function(){r.domDispatchEvent(window.EVENT_AVAILS_MODAL_HIDDEN),null!==n&&n.classList.add("hide")});var o=t.querySelector('[data-role="hide-modal"]');null!==o&&o.addEventListener("click",function(){setTimeout(function(){e.modal.hide()},200)})},e.prototype.refreshMap=function(e){var t=this,n=[].slice.call(e.querySelectorAll(f.SelectorsEnums.SELECTOR_AVAILS_WIDGET_SHOP_ITEM)).filter(function(e){return t.visibility.isVisible(e)}),o=e.querySelector(f.SelectorsEnums.SELECTOR_AVAILS_WIDGET_MAP),i=e.querySelector(f.SelectorsEnums.SELECTOR_MAP_IS_EMPTY_MESSAGE),s=o.id;if(!1!==o.classList.contains("shown")){var a=null;this.visibility.hide(i),this.availsMaps.hasOwnProperty(s)&&(a=this.availsMaps[s]),""===o.innerHTML&&(a=null),window.loadYandexMaps(function(){if(null===a&&(a=new window.ymaps.Map(s,{zoom:12,controls:["zoomControl","fullscreenControl","trafficControl"],behaviors:["default","scrollZoom"],center:[55.2627,87.363281]}),t.availsMaps[s]=a),a.geoObjects.removeAll(),0!==n.length){var e,o=new window.ymaps.GeoObjectCollection;n.forEach(function(t){var n=t.dataset.longitude;if(void 0!==n&&0!==n){var r=t.dataset.latitude;if(void 0!==r&&0!==r){var i=getComputedStyle(t.querySelector('[class*="site-color-"]')).color,s=t.querySelector(f.SelectorsEnums.SELECTOR_AVAILS_WIDGET_SHOP_ITEM_BALLOON),a=new window.ymaps.Placemark([r,n],{balloonContent:s.innerHTML},{preset:"islands#icon",iconColor:i,balloonCloseButton:!1});t.classList.contains("selected")&&(e=a),o.add(a)}}}),a.geoObjects.add(o),a.events.add("click",function(){a.balloon.isOpen()&&a.balloon.close(),r.domDispatchEvent(d.PopoverBlockEventsEnum.CLOSE)}),a.events.add("mousedown",function(){r.domDispatchEvent(d.PopoverBlockEventsEnum.CLOSE)}),e?(a.setCenter(e.geometry.getCoordinates()),a.setZoom(14).then(function(){e.events.fire("click")})):(a.setBounds(o.getBounds()),1===n.length&&a.setZoom(14))}else t.visibility.show(i)})}},e.prototype.selectTab=function(e){var t=this.modal.element;[].slice.call(t.querySelectorAll(f.SelectorsEnums.SELECTOR_REMAINS_LIST_TAB)).forEach(function(t){e===t.dataset.type?t.classList.remove("remains-tab_hidden"):t.classList.add("remains-tab_hidden")})},e.prototype.getHeader=function(){return'<div class="hide-modal" data-role="hide-modal"><i></i>Назад</div><h4 class="base-modal__header-title">Наличие товара</h4>'},e.prototype.getContent=function(){return'<div data-id="avails-modal-content" class="dns-row"><div class="loading-dots"><span></span><span></span><span></span><span></span></div></div>'},e.prototype.getAvails=function(){var e=this,t=document.createElement("div");t.innerHTML='<div class="text-center connect-error">Не удалось получить список магазинов.</div>';var n=this.modal.getContent();return this.modal.setHeader("Наличие товара"),this.fetch.postData(this.loadUrl,"").then(function(o){var i=n.querySelector(f.SelectorsEnums.SELECTOR_LOADER);return null!==i&&e.visibility.hide(i),!1===o.result?(n.appendChild(t),Promise.reject("Не удалось загрузить остатки")):(o.data&&e.modal.setHeader("Наличие товара <span>("+o.data.city+")</span>"),n.innerHTML=o.html,r.domDispatchEvent(window.EVENT_AVAILS_MODAL_CONTENT_LOADED),e.fetch.processSuccess(o))}).catch(function(){var o=n.querySelector(f.SelectorsEnums.SELECTOR_LOADER);null!==o&&e.visibility.hide(o),n.appendChild(t),r.domDispatchEvent(window.EVENT_AVAILS_MODAL_CONTENT_LOADED)})},e.prototype.checkOpenedShops=function(e){var t=this;if(e){var n=e.querySelector(f.SelectorsEnums.SELECTOR_AVAILS_WIDGET_SHOP_ITEMS_CONTAINER),o=[].slice.call(n.querySelectorAll(f.SelectorsEnums.SELECTOR_AVAILS_WIDGET_SHOP_ITEM)),r=e.querySelector(f.SelectorsEnums.SELECTOR_SHOPS_CLOSED_MESSAGE),i=[].slice.call(e.querySelectorAll(".avails-list .list-head"));if(i.forEach(function(e){e.classList.remove("shops-closed")}),0===o.filter(function(e){return t.visibility.isVisible(e)}).length){r.innerHTML="<div>Сейчас все магазины выбранного типа закрыты.</div>",i.forEach(function(e){e.classList.add("shops-closed")})}}},e.prototype.initTab=function(e){var t=this;[].slice.call(e.querySelectorAll(f.SelectorsEnums.SELECTOR_AVAILS_WIDGET_SHOP_ITEM)).forEach(function(e){e.addEventListener("click",function(n){n.target.closest(h.BranchDeviationInfoWidgetSelectors.SHOW_WORKTIME_DEVIATION)||t.toggleSelectedShop(e)})});var n=this.modal.element.querySelector(f.SelectorsEnums.SELECTOR_CURRENT_SHOP_ITEM);if(null!==n){this.selectShop(n);var o=n.closest(f.SelectorsEnums.SELECTOR_AVAILS_WIDGET_SHOP_ITEMS_CONTAINER),r=Math.round(o.scrollTop+n.offsetTop-o.offsetHeight/2);i.domScrollToPosition(r)}[].slice.call(e.querySelectorAll("[data-tab-show]")).forEach(function(n){n.addEventListener("click",function(){var o=n.dataset.tabShow;e.addEventListener("click",function(){t.visibility.hide(e.querySelector(f.SelectorsEnums.SELECTOR_MAP_IS_EMPTY_MESSAGE))}),[].slice.call(e.querySelectorAll("[data-tab-show]")).forEach(function(e){e.classList.remove("active")}),e.querySelector('[data-tab-show="'+o+'"]').classList.add("active"),[].slice.call(e.querySelectorAll("[data-tab-role]")).forEach(function(e){e.classList.remove("shown")}),e.querySelector('[data-tab-role="'+o+'"]').classList.add("shown"),"avails-map"===o?t.refreshMapWithDelay(e):t.checkOpenedShops(e)})})},e.prototype.toggleSelectedShop=function(e){e.classList.contains("selected")?this.clearSelectedShops():this.selectShop(e)},e.prototype.clearSelectedShops=function(){[].slice.call(this.modal.element.querySelectorAll(f.SelectorsEnums.SELECTOR_AVAILS_WIDGET_SHOP_ITEM)).forEach(function(e){e.classList.remove("selected")})},e.prototype.selectShop=function(e){this.clearSelectedShops(),e.classList.add("selected"),this.screen.check(a.ScreenTypes.SCREEN_MOBILE)},e}();t.default=p},1175:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){e.ID_SHOP_FILTERS_LIST_PREFIX="shop-filters-list",e.SELECTOR_REMAINS_LIST_TAB='[data-role="remains-list-tab"]',e.SELECTOR_CURRENT_SHOP_ITEM=".current-shop",e.SELECTOR_LOADER=".loading-dots",e.SELECTOR_NO_AVAILS="[data-role=no-avails-message]",e.SELECTOR_AVAILS_WIDGET_MAP=".avails-map",e.SELECTOR_AVAILS_WIDGET_SHOP_ITEM=".avails-item",e.SELECTOR_AVAILS_WIDGET_SHOP_ITEM_BALLOON=".balloon-content-wrap",e.SELECTOR_AVAILS_WIDGET_SHOP_ITEMS_CONTAINER=".avails-items",e.SELECTOR_MAP_BALLOON_CART_BTN_WRAP=".cart-btn-wrap",e.SELECTOR_SHOPS_CLOSED_MESSAGE="[data-role=shops-closed-message]",e.SELECTOR_MAP_IS_EMPTY_MESSAGE="[data-role=map-is-empty-message]"}(t.SelectorsEnums||(t.SelectorsEnums={}))},12:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){e.XS="xs",e.SM="sm",e.MD="md",e.LG="lg",e.W_400="w_400",e.W_1200="w_1200"}(t.BaseModalSizesEnum||(t.BaseModalSizesEnum={}))},19:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.domScrollToPosition=function(e){window.scrollTo({left:0,top:e,behavior:"smooth"})}},278:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){e.INIT="branch.deviation.widget.register"}(t.BranchDeviationInfoWidgetEvents||(t.BranchDeviationInfoWidgetEvents={}))},279:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){e.SHOW_WORKTIME_DEVIATION="[data-role=show-worktime-deviation]",e.AVAILS_WIDGET_SHOP_ITEMS_CONTAINER=".avails-items"}(t.BranchDeviationInfoWidgetSelectors||(t.BranchDeviationInfoWidgetSelectors={}))},4:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){e.LOADED="assets:loaded"}(t.AssetsEvents||(t.AssetsEvents={}))},5:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(4),r=n(7);n(10);var i=function(){function e(){this.HEAD_ELEMENT=document.querySelector("head")}return e.prototype.postData=function(e,t,n,o){void 0===n&&(n="application/x-www-form-urlencoded");var i={"X-Requested-With":"XMLHttpRequest"},s=this.getCrsfToken();return null!==s&&(i["X-CSRF-Token"]=s),""!==n&&(i["content-type"]=n),fetch(e,Object.assign({},{body:t,cache:"no-cache",credentials:"same-origin",headers:i,method:"POST",mode:"cors",redirect:"follow",referrer:"no-referrer"},o||{})).then(function(n){return r.logGroupCollapsed("fetch-helper: JSON"),r.logMessage(e),r.logMessage(t),r.logMessage(n),r.logGroupEnd(),n.json()})},e.prototype.getData=function(e,t){var n={"X-Requested-With":"XMLHttpRequest"},o=this.getCrsfToken();return null!==o&&(n["X-CSRF-Token"]=o),fetch(e,Object.assign({},{cache:"no-cache",credentials:"same-origin",headers:n,method:"GET",mode:"cors",redirect:"follow",referrer:"no-referrer"},t||{})).then(function(t){return r.logGroupCollapsed("fetch-helper: JSON"),r.logMessage(e),r.logMessage(t),r.logGroupEnd(),t.json()})},e.prototype.getCrsfToken=function(){var e=document.querySelector("meta[name=csrf-token]");return void 0!==e?e.getAttribute("content"):null},e.prototype.processSuccess=function(e){var t=this,n=[];e.assets.jsFiles.forEach(function(e){var o=/.*\/(assets|static\/\d+)\/\w{4,8}(\/.+)/,r=e.replace(o,"$2"),i='script[src$="'+r+'"]',s=document.querySelector(i);if(null===s||s.src.replace(o,"$2")!==r){(s=document.createElement("script")).src=e,s.async=!1;var a=new Promise(function(e){s.addEventListener("load",function(){e()})});t.HEAD_ELEMENT.appendChild(s),n.push(a)}}),e.assets.cssFiles.forEach(function(e){n.push(window.defferCSS(e.url,e.media))});return Promise.all(n).then(function(){return function(){var n=[];if(window.REGISTERED_JS_KEYS=window.REGISTERED_JS_KEYS||[],Object.keys(e.assets.inlineJs).forEach(function(t){-1===window.REGISTERED_JS_KEYS.indexOf(t)&&(n.push(e.assets.inlineJs[t]),window.REGISTERED_JS_KEYS.push(t))}),0!==n.length){var r=document.createElement("script");r.type="text/javascript",r.innerHTML=n.join("\n"),t.HEAD_ELEMENT.appendChild(r)}window.dispatchEvent(new CustomEvent(o.AssetsEvents.LOADED))}(),[].slice.call(document.querySelectorAll("[data-show-after-load]")).forEach(function(e){e.hidden=!1}),Promise.resolve()})},e}();t.default=i},59:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(){this.displayFallbacks=new Map}return e.prototype.isVisible=function(e){var t=window.getComputedStyle(e);return"none"!==t.display&&"hidden"!==t.visibility},e.prototype.show=function(e){this.setVisibility(e,!0)},e.prototype.hide=function(e){this.setVisibility(e,!1)},e.prototype.toggle=function(e,t){void 0===t&&(t=!this.isVisible(e)),this.setVisibility(e,t)},e.isElementInVisibilityArea=function(e,t){var n=e.getBoundingClientRect(),o=0<=n.top&&n.top<=window.innerHeight,r=0<=n.bottom&&n.bottom<=window.innerHeight;return!0===t?o&&r:o||r},e.prototype.setVisibility=function(e,t){"none"!==e.style.display&&this.displayFallbacks.set(e.id,e.style.display),!1===t?e.style.display="none":!0===this.displayFallbacks.has(e.id)?e.style.display=this.displayFallbacks.get(e.id):e.style.display=""},e}();t.VisibilityHelper=o},6:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){e[e.SCREEN_NOT_SUPPORTED=0]="SCREEN_NOT_SUPPORTED",e[e.SCREEN_WIDE=1]="SCREEN_WIDE",e[e.SCREEN_DESKTOP=2]="SCREEN_DESKTOP",e[e.SCREEN_TABLET=3]="SCREEN_TABLET",e[e.SCREEN_MOBILE=4]="SCREEN_MOBILE"}(t.ScreenTypes||(t.ScreenTypes={}))},65:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Event_on=function(e,t,n,o){e.addEventListener(t,function(e){for(var t=e.target;t;)t.matches(n)&&o.call(this,e),t=t.parentElement})}},7:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(9);function r(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];!1!==o.isDev()&&console[e].apply(console,t)}t.logMessage=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];r.apply(void 0,["log"].concat(e))},t.logDebug=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];r.apply(void 0,["debug"].concat(e))},t.logError=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];r.apply(void 0,["error"].concat(e))},t.logGroup=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];r.apply(void 0,["group"].concat(e))},t.logGroupCollapsed=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];r.apply(void 0,["groupCollapsed"].concat(e))},t.logGroupEnd=function(){r("groupEnd")}},75:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){e.CLOSE="popover-block.close"}(t.PopoverBlockEventsEnum||(t.PopoverBlockEventsEnum={}))},8:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(6),r=function(){function e(){var e=this;this.SCREEN_MOBILE_MIN_WIDTH=320,this.SCREEN_MOBILE_MAX_WIDTH=767,this.SCREEN_TABLET_MAX_WIDTH=991,this.SCREEN_DESKTOP_MAX_WIDTH=1199,this.EVENT_RESIZE="resize",this.EVENT_OPTIMIZED_RESIZE="optimizedResize",this.EVENT_SCREEN_TYPE_CHANGED="screenTypeChanged",this._currentScreenType=null,this.optimizeResizeEvent=function(t){var n=!1;(t=t||window).addEventListener(e.EVENT_RESIZE,function(){n||(n=!0,requestAnimationFrame(function(){t.dispatchEvent(new CustomEvent(e.EVENT_OPTIMIZED_RESIZE));var o=e.calcCurrent();e._currentScreenType!==o&&(e._currentScreenType=o,t.dispatchEvent(new CustomEvent(e.EVENT_SCREEN_TYPE_CHANGED))),n=!1}))})}}return Object.defineProperty(e.prototype,"current",{get:function(){return null===this._currentScreenType&&(this._currentScreenType=this.calcCurrent()),this._currentScreenType},enumerable:!0,configurable:!0}),e.prototype.calcCurrent=function(){var e=document.querySelector('meta[name="screen-type-helper"]');if(null!==e)return parseInt(e.content,10);var t=window.matchMedia;if(t){if(t("(min-width: "+(this.SCREEN_DESKTOP_MAX_WIDTH+1)+"px)").matches)return o.ScreenTypes.SCREEN_WIDE;if(t("(min-width: "+(this.SCREEN_TABLET_MAX_WIDTH+1)+"px)").matches)return o.ScreenTypes.SCREEN_DESKTOP;if(t("(min-width: "+(this.SCREEN_MOBILE_MAX_WIDTH+1)+"px)").matches)return o.ScreenTypes.SCREEN_TABLET;if(t("(min-width: "+this.SCREEN_MOBILE_MIN_WIDTH+"px)").matches)return o.ScreenTypes.SCREEN_MOBILE}else{var n=window.innerWidth;if(n>this.SCREEN_DESKTOP_MAX_WIDTH)return o.ScreenTypes.SCREEN_WIDE;if(n>this.SCREEN_TABLET_MAX_WIDTH)return o.ScreenTypes.SCREEN_DESKTOP;if(n>this.SCREEN_MOBILE_MAX_WIDTH)return o.ScreenTypes.SCREEN_TABLET;if(n>=this.SCREEN_MOBILE_MIN_WIDTH)return o.ScreenTypes.SCREEN_MOBILE}return o.ScreenTypes.SCREEN_NOT_SUPPORTED},e.prototype.check=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];for(var n=0,o=e;n<o.length;n++){if(o[n]===this.current)return!0}return!1},Object.defineProperty(e.prototype,"isDesktop",{get:function(){return this.check(o.ScreenTypes.SCREEN_DESKTOP,o.ScreenTypes.SCREEN_WIDE)},enumerable:!0,configurable:!0}),e.prototype.addResizeListener=function(e){this.optimizeResizeEvent(window),window.addEventListener(this.EVENT_OPTIMIZED_RESIZE,e)},e.prototype.removeResizeListener=function(e){window.removeEventListener(this.EVENT_OPTIMIZED_RESIZE,e)},e.prototype.addChangeScreenTypeListener=function(e){this.optimizeResizeEvent(window),window.addEventListener(this.EVENT_SCREEN_TYPE_CHANGED,e)},e.prototype.removeChangeScreenTypeListener=function(e){window.removeEventListener(this.EVENT_SCREEN_TYPE_CHANGED,e)},e}();t.default=r},9:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isDev=function(){return null!==document.querySelector('meta[name="superuser"]')}},97:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(65);t.Event_documentOn=function(e,t,n){o.Event_on(document.documentElement,e,t,n)}}});