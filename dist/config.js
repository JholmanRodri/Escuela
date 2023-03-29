"use strict";

require("core-js/modules/es.object.define-property.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PORT = exports.MONGOBD_URI = void 0;
var _dotenv = require("dotenv");
(0, _dotenv.config)();
var MONGOBD_URI = process.env.MONGOBD_URI || "mongodb://127.0.0.1:27017/Escuela";
exports.MONGOBD_URI = MONGOBD_URI;
var PORT = process.env.PORT || 5000;
exports.PORT = PORT;