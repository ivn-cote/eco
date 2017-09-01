(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global.Library = {})));
}(this, (function (exports) { 'use strict';

var libraryGoody = function libraryGoody() {
  var sign = Math.sign(-10);
  return 'oh dear';
};

exports.libraryGoody = libraryGoody;

Object.defineProperty(exports, '__esModule', { value: true });

})));
