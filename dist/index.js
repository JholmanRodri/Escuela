"use strict";

var _interopRequireDefault = require("C:/Users/jholm/OneDrive/Escritorio/trabajos/mongoMatu/node_modules/@babel/runtime/helpers/interopRequireDefault.js")["default"];
var _app = _interopRequireDefault(require("./app"));
require("./database");
var _config = require("./config.js");
//equivale al codigo de app.js

_app["default"].listen(_config.PORT);
console.log('Servidor en puerto', _config.PORT);
