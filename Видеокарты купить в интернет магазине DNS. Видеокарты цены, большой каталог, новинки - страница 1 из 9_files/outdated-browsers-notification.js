!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1654)}({0:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Dom_onDocumentReady=function(e,t){void 0===t&&(t=!1),"loading"===document.readyState?document.addEventListener("DOMContentLoaded",e):t&&e(void 0)}},12:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){e.XS="xs",e.SM="sm",e.MD="md",e.LG="lg",e.W_400="w_400",e.W_1200="w_1200"}(t.BaseModalSizesEnum||(t.BaseModalSizesEnum={}))},13:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){e.WHITE="_white",e.BRAND="_brand",e.BLUE="_blue",e.GREY="_grey"}(t.ButtonColorModifiers||(t.ButtonColorModifiers={}))},1654:function(e,t,n){e.exports=n(1655)},1655:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n(8)),i=n(0),s=r(n(1656));if((new o.default).isDesktop){var a=new s.default;i.Dom_onDocumentReady(function(){a.init()},!0)}},1656:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=n(1657),i=n(12),s=r(n(1658)),a=r(n(1659)),u=function(){function e(){this._logger=new a.default}return e.prototype.init=function(){this._browser=o.detect(),this._builder=new s.default(this._browser.name),this._isOutdatedBrowser()&&(this._isNeedShowModal()&&this._showModal(!0),this._showHeaderNotification())},e.prototype._isOutdatedBrowser=function(){var e=this._browser.name,t=parseInt(this._browser.version,10);switch(e){case"ie":return!0;case"opera":return t<=36;case"firefox":return t<=53;default:return!1}},e.prototype._isNeedShowModal=function(){return this._logger.getLastHideModal()<Date.now()-259200},e.prototype._showModal=function(e){void 0===e&&(e=!1),window.modalProvider.getInstance({size:i.BaseModalSizesEnum.LG,contentPadded:!0,headerHtml:"<span>Неподдерживаемый браузер</span>",contentHtml:this._builder.getModalContent()}).show(),e&&this._logger.setLastHideModal(Date.now())},e.prototype._showHeaderNotification=function(){var e=this,t=this._builder.getHeaderNotification(),n=document.querySelector("header");t.querySelector(".browser-info__header-button").addEventListener("click",function(){e._showModal()}),n.insertBefore(t,n.querySelector(".header-top"))},e}();t.default=u},1657:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){n.d(t,"BrowserInfo",function(){return o}),n.d(t,"NodeInfo",function(){return i}),n.d(t,"SearchBotDeviceInfo",function(){return s}),n.d(t,"BotInfo",function(){return a}),n.d(t,"ReactNativeInfo",function(){return u}),t.detect=function(e){if(e)return h(e);if("undefined"==typeof document&&"undefined"!=typeof navigator&&"ReactNative"===navigator.product)return new u;if("undefined"!=typeof navigator)return h(navigator.userAgent);return E()},t.browserName=function(e){var t=_(e);return t?t[0]:null},t.parseUserAgent=h,t.detectOS=p,t.getNodeVersion=E;var r=this&&this.__spreadArrays||function(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var r=Array(e),o=0;for(t=0;t<n;t++)for(var i=arguments[t],s=0,a=i.length;s<a;s++,o++)r[o]=i[s];return r},o=function(){return function(e,t,n){this.name=e,this.version=t,this.os=n,this.type="browser"}}(),i=function(){return function(t){this.version=t,this.type="node",this.name="node",this.os=e.platform}}(),s=function(){return function(e,t,n,r){this.name=e,this.version=t,this.os=n,this.bot=r,this.type="bot-device"}}(),a=function(){return function(){this.type="bot",this.bot=!0,this.name="bot",this.version=null,this.os=null}}(),u=function(){return function(){this.type="react-native",this.name="react-native",this.version=null,this.os=null}}(),c=/(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/,d=3,l=[["aol",/AOLShield\/([0-9\._]+)/],["edge",/Edge\/([0-9\._]+)/],["edge-ios",/EdgiOS\/([0-9\._]+)/],["yandexbrowser",/YaBrowser\/([0-9\._]+)/],["kakaotalk",/KAKAOTALK\s([0-9\.]+)/],["samsung",/SamsungBrowser\/([0-9\.]+)/],["silk",/\bSilk\/([0-9._-]+)\b/],["miui",/MiuiBrowser\/([0-9\.]+)$/],["beaker",/BeakerBrowser\/([0-9\.]+)/],["edge-chromium",/EdgA?\/([0-9\.]+)/],["chromium-webview",/(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],["chrome",/(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],["phantomjs",/PhantomJS\/([0-9\.]+)(:?\s|$)/],["crios",/CriOS\/([0-9\.]+)(:?\s|$)/],["firefox",/Firefox\/([0-9\.]+)(?:\s|$)/],["fxios",/FxiOS\/([0-9\.]+)/],["opera-mini",/Opera Mini.*Version\/([0-9\.]+)/],["opera",/Opera\/([0-9\.]+)(?:\s|$)/],["opera",/OPR\/([0-9\.]+)(:?\s|$)/],["ie",/Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/],["ie",/MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],["ie",/MSIE\s(7\.0)/],["bb10",/BB10;\sTouch.*Version\/([0-9\.]+)/],["android",/Android\s([0-9\.]+)/],["ios",/Version\/([0-9\._]+).*Mobile.*Safari.*/],["safari",/Version\/([0-9\._]+).*Safari/],["facebook",/FBAV\/([0-9\.]+)/],["instagram",/Instagram\s([0-9\.]+)/],["ios-webview",/AppleWebKit\/([0-9\.]+).*Mobile/],["ios-webview",/AppleWebKit\/([0-9\.]+).*Gecko\)$/],["searchbot",/alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/]],f=[["iOS",/iP(hone|od|ad)/],["Android OS",/Android/],["BlackBerry OS",/BlackBerry|BB10/],["Windows Mobile",/IEMobile/],["Amazon OS",/Kindle/],["Windows 3.11",/Win16/],["Windows 95",/(Windows 95)|(Win95)|(Windows_95)/],["Windows 98",/(Windows 98)|(Win98)/],["Windows 2000",/(Windows NT 5.0)|(Windows 2000)/],["Windows XP",/(Windows NT 5.1)|(Windows XP)/],["Windows Server 2003",/(Windows NT 5.2)/],["Windows Vista",/(Windows NT 6.0)/],["Windows 7",/(Windows NT 6.1)/],["Windows 8",/(Windows NT 6.2)/],["Windows 8.1",/(Windows NT 6.3)/],["Windows 10",/(Windows NT 10.0)/],["Windows ME",/Windows ME/],["Open BSD",/OpenBSD/],["Sun OS",/SunOS/],["Chrome OS",/CrOS/],["Linux",/(Linux)|(X11)/],["Mac OS",/(Mac_PowerPC)|(Macintosh)/],["QNX",/QNX/],["BeOS",/BeOS/],["OS/2",/OS\/2/]];function _(e){return""!==e&&l.reduce(function(t,n){var r=n[0],o=n[1];if(t)return t;var i=o.exec(e);return!!i&&[r,i]},!1)}function h(e){var t=_(e);if(!t)return null;var n=t[0],i=t[1];if("searchbot"===n)return new a;var u=i[1]&&i[1].split(/[._]/).slice(0,3);u?u.length<d&&(u=r(u,function(e){for(var t=[],n=0;n<e;n++)t.push("0");return t}(d-u.length))):u=[];var l=u.join("."),f=p(e),h=c.exec(e);return h&&h[1]?new s(n,l,f,h[1]):new o(n,l,f)}function p(e){for(var t=0,n=f.length;t<n;t++){var r=f[t],o=r[0];if(r[1].exec(e))return o}return null}function E(){return void 0!==e&&e.version?new i(e.version.slice(1)):null}}.call(t,n(27))},1658:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(2),o=n(3),i=n(13),s=function(){function e(e){this._browsersInfo=[{name:"Яндекс.Браузер",link:"https://browser.yandex.ru/",stylePostfix:"_ya"},{name:"Google Chrome",link:"https://www.google.com/intl/ru_ru/chrome/",stylePostfix:"_chrome"},{name:"Mozilla Firefox",link:"https://www.mozilla.org/ru/firefox/new/",stylePostfix:"_mf"},{name:"Vivaldi",link:"https://vivaldi.com/ru/download/",stylePostfix:"_viv"},{name:"Opera",link:"https://www.opera.com/ru",stylePostfix:"_opera"}],this._browserAlias=e}return e.prototype.getHeaderNotification=function(){var e=document.createElement("article");e.classList.add("browser-info__header-wrap");var t=document.createElement("section");t.classList.add("browser-info__header"),t.appendChild(this._getActualText());var n=document.createElement("span");n.classList.add("browser-info__header-close-icon"),n.addEventListener("click",function(){e.remove()}),t.appendChild(n);var r=document.createElement("div");return r.classList.add("browser-info__header-buttons"),r.appendChild(this._getHeaderNotificationButton()),r.appendChild(n),t.appendChild(r),e.appendChild(t),e},e.prototype.getModalContent=function(){var e=document.createElement("article"),t=document.createElement("p");return t.textContent="Установите актуальную версию вашего браузера или одну из современных альтернатив.",o.Dom_addClasses(t,["browser-info__text"]),e.appendChild(this._getActualText(!0)),e.appendChild(t),e.appendChild(this._getBrowserItems()),e},e.prototype._getActualText=function(e){void 0===e&&(e=!1);var t="";switch(this._browserAlias){case"ie":t="Internet Explorer";break;case"firefox":t="Mozilla Firefox";break;case"opera":t="Opera"}var n=document.createElement("p");return o.Dom_addClasses(n,["browser-info__text","browser-info__text_strong"]),n.classList.add("browser-info__text"),r.domToggleClass(n,"browser-info__text_strong",e),n.textContent="Ваш браузер "+t+" устарел и не обеспечивает полноценную и безопасную работу с сайтом.",n},e.prototype._getBrowserItems=function(){var e=document.createElement("section");return e.classList.add("browser-info__wrapper"),this._browsersInfo.forEach(function(t){var n=document.createElement("div");n.classList.add("browser-info__item");var r=document.createElement("span");r.classList.add("browser-info__item-name"),r.textContent=t.name;var o=document.createElement("div");o.classList.add("browser-info__item-img"),o.classList.add("browser-info__item-img"+t.stylePostfix);var s=window.button.create("Скачать",i.ButtonColorModifiers.WHITE,{href:t.link,target:"_blank"}).element;n.appendChild(o),n.appendChild(r),n.appendChild(s),e.appendChild(n)}),e},e.prototype._getHeaderNotificationButton=function(){var e=window.button.create("Обновить",i.ButtonColorModifiers.WHITE).element;return e.classList.add("browser-info__header-button"),e},e}();t.default=s},1659:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(){this.hideKey="ob_h"}return e.prototype.getLastHideModal=function(){var e=localStorage.getItem(this.hideKey);return e||0},e.prototype.setLastHideModal=function(e){localStorage.setItem(this.hideKey,e)},e}();t.default=r},2:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.domToggleClass=function(e,t,n){void 0===n&&(n=!e.classList.contains(t)),!0===n?e.classList.add(t):e.classList.remove(t)}},27:function(e,t){var n,r,o=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function a(e){if(n===setTimeout)return setTimeout(e,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:i}catch(e){n=i}try{r="function"==typeof clearTimeout?clearTimeout:s}catch(e){r=s}}();var u,c=[],d=!1,l=-1;function f(){d&&u&&(d=!1,u.length?c=u.concat(c):l=-1,c.length&&_())}function _(){if(!d){var e=a(f);d=!0;for(var t=c.length;t;){for(u=c,c=[];++l<t;)u&&u[l].run();l=-1,t=c.length}u=null,d=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===s||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function p(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];c.push(new h(e,t)),1!==c.length||d||a(_)},h.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=p,o.addListener=p,o.once=p,o.off=p,o.removeListener=p,o.removeAllListeners=p,o.emit=p,o.prependListener=p,o.prependOnceListener=p,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},3:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Dom_addClasses=function(e,t){t.forEach(function(t){e.classList.add(t)})}},6:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){e[e.SCREEN_NOT_SUPPORTED=0]="SCREEN_NOT_SUPPORTED",e[e.SCREEN_WIDE=1]="SCREEN_WIDE",e[e.SCREEN_DESKTOP=2]="SCREEN_DESKTOP",e[e.SCREEN_TABLET=3]="SCREEN_TABLET",e[e.SCREEN_MOBILE=4]="SCREEN_MOBILE"}(t.ScreenTypes||(t.ScreenTypes={}))},8:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(6),o=function(){function e(){var e=this;this.SCREEN_MOBILE_MIN_WIDTH=320,this.SCREEN_MOBILE_MAX_WIDTH=767,this.SCREEN_TABLET_MAX_WIDTH=991,this.SCREEN_DESKTOP_MAX_WIDTH=1199,this.EVENT_RESIZE="resize",this.EVENT_OPTIMIZED_RESIZE="optimizedResize",this.EVENT_SCREEN_TYPE_CHANGED="screenTypeChanged",this._currentScreenType=null,this.optimizeResizeEvent=function(t){var n=!1;(t=t||window).addEventListener(e.EVENT_RESIZE,function(){n||(n=!0,requestAnimationFrame(function(){t.dispatchEvent(new CustomEvent(e.EVENT_OPTIMIZED_RESIZE));var r=e.calcCurrent();e._currentScreenType!==r&&(e._currentScreenType=r,t.dispatchEvent(new CustomEvent(e.EVENT_SCREEN_TYPE_CHANGED))),n=!1}))})}}return Object.defineProperty(e.prototype,"current",{get:function(){return null===this._currentScreenType&&(this._currentScreenType=this.calcCurrent()),this._currentScreenType},enumerable:!0,configurable:!0}),e.prototype.calcCurrent=function(){var e=document.querySelector('meta[name="screen-type-helper"]');if(null!==e)return parseInt(e.content,10);var t=window.matchMedia;if(t){if(t("(min-width: "+(this.SCREEN_DESKTOP_MAX_WIDTH+1)+"px)").matches)return r.ScreenTypes.SCREEN_WIDE;if(t("(min-width: "+(this.SCREEN_TABLET_MAX_WIDTH+1)+"px)").matches)return r.ScreenTypes.SCREEN_DESKTOP;if(t("(min-width: "+(this.SCREEN_MOBILE_MAX_WIDTH+1)+"px)").matches)return r.ScreenTypes.SCREEN_TABLET;if(t("(min-width: "+this.SCREEN_MOBILE_MIN_WIDTH+"px)").matches)return r.ScreenTypes.SCREEN_MOBILE}else{var n=window.innerWidth;if(n>this.SCREEN_DESKTOP_MAX_WIDTH)return r.ScreenTypes.SCREEN_WIDE;if(n>this.SCREEN_TABLET_MAX_WIDTH)return r.ScreenTypes.SCREEN_DESKTOP;if(n>this.SCREEN_MOBILE_MAX_WIDTH)return r.ScreenTypes.SCREEN_TABLET;if(n>=this.SCREEN_MOBILE_MIN_WIDTH)return r.ScreenTypes.SCREEN_MOBILE}return r.ScreenTypes.SCREEN_NOT_SUPPORTED},e.prototype.check=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];for(var n=0,r=e;n<r.length;n++){if(r[n]===this.current)return!0}return!1},Object.defineProperty(e.prototype,"isDesktop",{get:function(){return this.check(r.ScreenTypes.SCREEN_DESKTOP,r.ScreenTypes.SCREEN_WIDE)},enumerable:!0,configurable:!0}),e.prototype.addResizeListener=function(e){this.optimizeResizeEvent(window),window.addEventListener(this.EVENT_OPTIMIZED_RESIZE,e)},e.prototype.removeResizeListener=function(e){window.removeEventListener(this.EVENT_OPTIMIZED_RESIZE,e)},e.prototype.addChangeScreenTypeListener=function(e){this.optimizeResizeEvent(window),window.addEventListener(this.EVENT_SCREEN_TYPE_CHANGED,e)},e.prototype.removeChangeScreenTypeListener=function(e){window.removeEventListener(this.EVENT_SCREEN_TYPE_CHANGED,e)},e}();t.default=o}});