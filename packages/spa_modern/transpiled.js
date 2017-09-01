'use strict';

var _library = require('library');

var HELLO = 'HELLO WORLD';
var dummyFlag = Number.isInteger(HELLO.length);

document.getElementById('app').innerHTML = HELLO + ' ' + (0, _library.libraryGoody)();
