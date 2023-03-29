"use strict";

require("core-js/modules/es.object.define-property.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
require("core-js/modules/es.number.constructor.js");
var _mongoose = require("mongoose");
var asignaturaEsquema = new _mongoose.Schema({
  nombre: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
  creditos: {
    type: Number,
    required: true
  },
  horas: {
    type: Number,
    required: true
  },
  opcion: {
    type: Boolean,
    "default": false
  }
}, {
  timestamps: true,
  versionKey: false
});
//modelo de datos como quiero que se llame la collection
var _default = (0, _mongoose.model)("Asignatura", asignaturaEsquema);
exports["default"] = _default;