"use strict";

var _interopRequireDefault = require("C:/Users/jholm/OneDrive/Escritorio/trabajos/mongoMatu/node_modules/@babel/runtime/helpers/interopRequireDefault.js")["default"];
require("core-js/modules/es.function.name.js");
var _regeneratorRuntime2 = _interopRequireDefault(require("C:/Users/jholm/OneDrive/Escritorio/trabajos/mongoMatu/node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js"));
var _asyncToGenerator2 = _interopRequireDefault(require("C:/Users/jholm/OneDrive/Escritorio/trabajos/mongoMatu/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"));
var _mongoose = require("mongoose");
(0, _asyncToGenerator2["default"])( /*#__PURE__*/(0, _regeneratorRuntime2["default"])().mark(function _callee() {
  var db;
  return (0, _regeneratorRuntime2["default"])().wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return (0, _mongoose.connect)("mongodb://127.0.0.1:27017/Escuela");
        case 3:
          db = _context.sent;
          console.log("Database Connected to", db.connection.name);
          _context.next = 10;
          break;
        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          console.error(_context.t0);
        case 10:
        case "end":
          return _context.stop();
      }
    }
  }, _callee, null, [[0, 7]]);
}))();