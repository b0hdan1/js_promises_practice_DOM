parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";function n(){return new Promise(function(n,e){document.addEventListener("click",function(){n("the promise1 works")}),setTimeout(function(){return e("Error promise1")},5e3)})}function e(){return new Promise(function(n){document.addEventListener("click",function(){n("the promise2 works")}),document.addEventListener("contextmenu",function(){n("the promise2 works")})})}function t(){var n=[0,2];return new Promise(function(e){document.addEventListener("mousedown",function(t){0===(n=n.filter(function(n){return n!==t.button})).length&&e("Left and Right click occurred")})})}n().then(function(n){console.log(n)}).catch(function(n){console.error(n)}),e().then(function(n){console.log(n)}),t().then(function(n){console.log(n)});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.75f24d89.js.map