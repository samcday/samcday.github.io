!function(e){var n={};function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)t.d(o,r,function(n){return e[n]}.bind(null,r));return o},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n,t){"use strict";t.r(n);t(1);var o=function(e,n){return Math.floor(Math.random()*(n-e)+e)},r=["G'day","'Sup","Hey","Yo","Salutations","Greetings","Guten Tag","Hallo","Hiya","'Ello","Whaddup"],i=["have completed 29 trips around the sun.","am an Aussie.","am sometimes called a Computer Programmer.","live in Berlin."];document.body.className="js-loading",document.write('\n  <div id="loading-overlay">\n    <div class="spinner">\n      <div class="double-bounce1"></div>\n      <div class="double-bounce2"></div>\n    </div>\n    <span id="loading-message">Just a sec...</span>\n  </div>');var a=setTimeout(function(){document.getElementById("loading-message").innerHTML="Sorry, but your internet kinda blows.<br/>Still loadin'."},1e3);document.addEventListener("DOMContentLoaded",function(){clearTimeout(a),document.getElementById("greeting").innerText="".concat(r[o(0,r.length)],".");for(var e=i.slice(),n=0;n<e.length;n++){var t=o(0,e.length),u=[e[t],e[n]];e[n]=u[0],e[t]=u[1]}var l=0,d=document.getElementById("fact");setInterval(function(){l=(l+1)%e.length,d.innerHTML=e[l]},3e3),document.body.className="",document.body.removeChild(document.getElementById("loading-overlay"))})},function(e,n,t){}]);