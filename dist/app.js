"use strict";

require("core-js/modules/es.object.define-property.js");
var _interopRequireDefault = require("C:/Users/jholm/OneDrive/Escritorio/trabajos/mongoMatu/node_modules/@babel/runtime/helpers/interopRequireDefault.js")["default"];
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
require("core-js/modules/es.array.join.js");
var _express = _interopRequireDefault(require("express"));
var _indexRoutes = _interopRequireDefault(require("./routes/indexRoutes"));
var _path = _interopRequireDefault(require("path"));
var _morgan = _interopRequireDefault(require("morgan"));
//Nos sirve para las rutas modulo node

var app = (0, _express["default"])();
app.set("views", _path["default"].join(__dirname, "views"));
app.engine(".hbs", exphbs({
  layoutsDir: _path["default"].join(app.get("views"), "layouts"),
  defaultLayout: "main",
  extname: ".hbs"
}));
app.set("view engine", ".hbs");

//middleware
app.use((0, _morgan["default"])("dev"));
app.use(_express["default"].urlencoded({
  extended: false
}));

//Rutas
app.use(_indexRoutes["default"]);

//archivos estaticos
app.use(_express["default"]["static"](_path["default"].join(__dirname, "frontend")));
var _default = app;
exports["default"] = _default;