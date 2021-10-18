module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/bateria.js":
/*!*******************************!*\
  !*** ./components/bateria.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/reflect/construct */ "./node_modules/@babel/runtime-corejs2/core-js/reflect/construct.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var chroma_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! chroma-js */ "chroma-js");
/* harmony import */ var chroma_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(chroma_js__WEBPACK_IMPORTED_MODULE_7__);







function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = _babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default()(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a) return false; if (_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default()(Boolean, [], function () {})); return true; } catch (e) { return false; } }




var Bateria = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(Bateria, _Component);

  var _super = _createSuper(Bateria);

  function Bateria() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Bateria);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Bateria, [{
    key: "render",
    value: function render() {
      var colorScale = chroma_js__WEBPACK_IMPORTED_MODULE_7___default.a.scale(['#c5041a', '#d48633', '#008017']).domain([0, 35, 100]);
      var color = colorScale(this.props.charge);
      var tempoRestante = "---";
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("svg", {
        version: "1.1",
        baseProfile: "full",
        viewBox: "0 0 500 400",
        preserveAspectRatio: "xMidYMid meet",
        id: "svg_document",
        style: {
          "zoom": "1",
          marginBottom: "-20px"
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("link", {
        href: "/static/styles.css",
        rel: "stylesheet"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("g", {
        id: "main_group"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("rect", {
        x: "4px",
        height: "400px",
        y: "1px",
        id: "background_rect",
        width: "500px",
        fill: "#000000",
        visibility: "hidden"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("g", {
        id: "g1",
        transform: ""
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("text", {
        stroke: "none",
        style: {
          outlineStyle: "none"
        },
        id: "text2",
        strokeWidth: "1px",
        x: "250px",
        fontWeight: "bolder",
        textRendering: "geometricPrecision",
        fontFamily: "Exo",
        fill: "whitesmoke",
        fontSize: "20px",
        y: "320px",
        transform: "",
        textAnchor: "start"
      }, "TEMPO RESTANTE"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("text", {
        stroke: "none",
        style: {
          outlineStyle: "none"
        },
        id: "text3",
        strokeWidth: "1px",
        x: "253px",
        textRendering: "geometricPrecision",
        fontFamily: "Exo",
        fill: "whitesmoke",
        fontSize: "16px",
        y: "344px",
        transform: "",
        textAnchor: "start"
      }, tempoRestante)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("path", {
        stroke: "whitesmoke",
        strokeWidth: "10",
        id: "path1",
        d: "M20,40 l0,200 a20,20 0 0 0 20,20 l370,0 a20,20 0 0 0 20,-20 l0,-50 l0,-100 m0,100 a10,10 0 0 1 10,-10 l30,0 a10,10 0 0 0 10,-10 l0,-60 a10,10 0 0 0 -10,-10 l-30,0 a10,10 0 0 1 -10,-10 l0,-50 a20,20 0 0 0 -20,-20 l-370,0 a20,20 0 0 0 -20,20 ",
        fill: "none",
        strokeLinecap: "butt",
        transform: "",
        strokeLinejoin: "miter"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("rect", {
        stroke: "#000000",
        x: "425px",
        height: "88px",
        y: "96px",
        id: "rect1",
        strokeWidth: "0px",
        width: "50px",
        fill: "whitesmoke",
        transform: ""
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("rect", {
        stroke: "#000000",
        x: "35px",
        height: "210px",
        y: "35px",
        id: "rect2",
        width: this.props.charge / 100 * 380,
        fill: color,
        transform: ""
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("text", {
        stroke: "none",
        style: {
          fontWeight: "lighter",
          outlineStyle: "none"
        },
        id: "text1",
        strokeWidth: "1px",
        x: "229px",
        fontWeight: "bolder",
        textRendering: "geometricPrecision",
        fontFamily: "Exo",
        fill: "whitesmoke",
        fontSize: "80px",
        y: "356px",
        transform: "",
        textAnchor: "end",
        fontStretch: "normal"
      }, this.props.charge, "%"));
    }
  }]);

  return Bateria;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Bateria);

/***/ }),

/***/ "./components/bms-information.js":
/*!***************************************!*\
  !*** ./components/bms-information.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/reflect/construct */ "./node_modules/@babel/runtime-corejs2/core-js/reflect/construct.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_countup__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-countup */ "react-countup");
/* harmony import */ var react_countup__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_countup__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _countup_wrapper_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./countup-wrapper.js */ "./components/countup-wrapper.js");
/* harmony import */ var _contexts_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./contexts.js */ "./components/contexts.js");








function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(this).constructor; result = _babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default()(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a) return false; if (_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default()(Boolean, [], function () {})); return true; } catch (e) { return false; } }







var BMSInformation = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(BMSInformation, _Component);

  var _super = _createSuper(BMSInformation);

  function BMSInformation() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, BMSInformation);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(BMSInformation, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "row mt-2 bordered-title-container",
        style: {
          paddingBottom: "10px",
          paddingRight: "10px"
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "col-12 d-flex justify-content-left"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "bms-information-title bordered-title-text "
      }, "DADOS GERAIS DO BMS")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "col-4 d-flex align-items-center",
        style: {
          padding: "0px",
          margin: "5px -20px 5px -20px"
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: "static/SVGs/bolt.svg",
        style: {
          width: "100%",
          height: "auto"
        }
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "col "
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "col-lg-6 col-12"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Information, {
        title: "TEMPERATURA M\xC1XIMA",
        value: this.props.maxtemperature,
        unit: "\xBAC",
        icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
          src: "static/icons/thermometer-full.png"
        })
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "col-lg-6 col-12"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Information, {
        title: "TEMPERATURA M\xC9DIA",
        value: this.props.meantemperature,
        unit: "\xBAC",
        icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
          src: "static/icons/thermometer.png"
        })
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "col-lg-6 col-12"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Information, {
        title: "TENS\xC3O M\xCDNIMA",
        value: this.props.minvoltage,
        unit: "V",
        icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
          src: "static/icons/low-voltage-warning.png"
        })
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "col-lg-6 col-12"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(AIRStatus, {
        value: _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1___default()(this.props.airstatus) === 1
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "col-lg-6 col-12"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Information, {
        title: "TENS\xC3O TOTAL",
        value: this.props.totalvoltage,
        unit: "V",
        icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
          src: "static/icons/car-battery.png"
        })
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "col-lg-6 col-12"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Information, {
        title: "TENS\xC3O DO GLV",
        value: this.props.glvvoltage,
        unit: "V",
        icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
          src: "static/icons/electronics.png"
        })
      })))));
    }
  }]);

  return BMSInformation;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

function Information(props) {
  var st = {};

  for (a in props.filters) {
    var style = a.assert(props.value);

    if (style) {
      st = style;
      break;
    }
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
    className: "col-12 d-flex justify-content-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
    className: "information-title"
  }, props.title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
    className: "col-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
    className: "information-value-wrapper d-flex align-items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
    className: "information-icon"
  }, props.icon), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_countup_wrapper_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
    end: props.value
  }, function (_ref) {
    var countUpRef = _ref.countUpRef;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
      className: "information-value flex-fill",
      style: st,
      ref: countUpRef
    });
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
    className: "information-unit"
  }, props.unit))));
}

function AIRStatus(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
    className: "col-12 d-flex justify-content-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
    className: "information-title"
  }, "STATUS DO AIR")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
    className: "col-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
    className: "information-value-wrapper d-flex align-items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
    className: "information-icon"
  }, props.value === true ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
    src: "static/icons/connected.png"
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
    src: "static/icons/disconnected.png"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
    className: "information-value flex-fill " + (props.value === true ? "air-fechado" : "air-aberto")
  }, props.value === true ? "FECHADO" : "ABERTO"))));
}

var operators = {
  EQUAL: 1,
  LESSTHAN: 2,
  GREATERTHAN: 3,
  LESSOREQUAL: 4,
  GREATEROREQUAL: 5
};

var Filter = /*#__PURE__*/function () {
  function Filter(m, action) {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Filter);

    this.m = m;
    this.action = action;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Filter, [{
    key: "assert",
    value: function assert(value) {
      if (this.m.match(value)) return action;else return false;
    }
  }]);

  return Filter;
}();

var Matcher = /*#__PURE__*/function () {
  function Matcher(op, reference) {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Matcher);

    this.op = op;
    this.reference = reference;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Matcher, [{
    key: "match",
    value: function match(value) {
      switch (op) {
        case operators.EQUAL:
          return value == this.reference;
          break;

        case operators.LESSTHAN:
          return value < this.reference;
          break;

        case operators.GREATERTHAN:
          return value > this.reference;
          break;

        case operators.LESSOREQUAL:
          return value <= this.reference;
          break;

        case operators.GREATEROREQUAL:
          return value >= this.reference;
          break;
      }
    }
  }]);

  return Matcher;
}();

/* harmony default export */ __webpack_exports__["default"] = (BMSInformation);

/***/ }),

/***/ "./components/constants.js":
/*!*********************************!*\
  !*** ./components/constants.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _values = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/values */ "./node_modules/@babel/runtime-corejs2/core-js/object/values.js"));

var _parseInt2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js"));

var _keys = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js"));

//PARA REGISTRAR UM NOVO DADO:
//primeiramente, em TypeFields, adicione mais uma linha, incrementando o índice em 1 e o nome do dado em camelCase
//depois, adicione mais uma linha em availableField, com o index sendo o mesmo índice do TypeFields.
//se for um dado que tenha possibilidade de ser plotado em tempo real, adicione-o em availablePlotOPtion.
var isOnClient = !!(typeof (void 0) === 'undefined' || typeof window !== 'undefined' && window.document && window.document.createElement && (0, _keys.default)(process.env).length === 0 && process.env.constructor === Object);
var fs = isOnClient ? null : __webpack_require__(/*! fs */ "fs");
if (typeof (void 0) !== 'undefined') (void 0)['.properties'] = function (module, filename) {
  module.exports = fs.readFileSync(filename, 'utf8');
};
var configFileName = 'config.properties';

var pr = __webpack_require__(/*! ../config.properties */ "./config.properties");

var file = typeof pr == 'object' ? pr.default : pr; // let file = properties;

if (!isOnClient) {
  if (file === '') {
    var configTemplate = "# TIPO DE OPERA\xC7\xC3O\n# Valores poss\xEDveis:\n# BYTES  - Recebimento por Xbee em formato de bytes\n# STRING - Recebimento por Xbee ou NRF em formato de string\n# API_BYTES  - Recebimento por Xbee em API mode por bytes\n# API_STRING - Recebimento por Xbee em API mode por string\n# [default = STRING]\noperationType = STRING\n\n# [string] [default = 0013A20041932DC6] Endere\xE7o 64bits do xbee transmissor.\nxbeeSourceAddress = 0013A20041932DC6\n\n# PORTA SERIAL\n\n# [string] [default = ] Nome da porta serial que o dispositivo receptor se encontra. Deixe vazio para identifica\xE7\xE3o autom\xE1tica.\nportName = \n# [string] [default = ignore-ports.txt] Nome do arquivo de texto, na pasta raiz, contendo nome de portas para serem ignoradas na identifica\xE7\xE3o autom\xE1tica de porta, separados por linha.\nignorePortsFile = ignore-ports.txt\n\n# NOTIFICA\xC7\xD5ES\n\n# [bool] [default = true] Ativar ou desativar notifica\xE7\xF5es\nshouldNotify = true\n# [number] [default = 10] Limite percentual para acionar a notifica\xE7\xE3o que alerta da proximidade do valor m\xEDnimo/m\xE1ximo\npercentageLimitTolerance = 10\n# [number] [default = 30000] Tempo de timeout em milissegundos para a notifica\xE7\xE3o ser reacionada caso a condi\xE7\xE3o n\xE3o mude\nnotificationExpirationTimeout = 30000\n\n# DATALOG\n\n# [string] [default = ./datalog/] Caminho para a escrita do datalog. O DIRET\xD3RIO N\xC3O \xC9 CRIADO, ENTA\xC3O DEVE, OBRIGATORIAMENTE, EXISTIR.\ndatalogFilePath = ./datalog/\n# [bool] [default = true] Ativar ou desativar o datalog\nshouldWrite = true\n# [number]  [default = 30000] Tempo, em milissegundos, de quanto esperar sem receber dados at\xE9 criar um novo arquivo de texto\ndatalogTimeout = 30000\n# [bool] [default = false] Incluir timestamp (quantidade de milissegundos desde 1/1/1970 00:00) como primeiro item de cada linha\nincludeTimestamp = false\n\n# PLOTAGEM EM TEMPO REAL\n\n# BANCO DE DADOS LOCAL\n# [number]  [default = 60000] Tempo, em milissegundos, de persist\xEAncia dos dados no banco de dados antes de serem eliminados. Altere esse valor para definir de quanto tempo atr\xE1s os dados devem ser exibidos.\npersistanceTimeout = 60000\n# [number] [default = 1000] Per\xEDodo, em milissegundos, para ser acionada a varredura do banco de dados local para eliminar dados antigos\ncleanUpTimeout = 1000\n\n#PLOTAGEM\n# [number] [default = 1] Quantidade desejada de pontos por segundo para serem exibidos no gr\xE1fico. VALORES ALTOS PODEM COMPROMETER A INTEGRIDADE DO SERVIDOR E DA REDE.\npointsPerSecond = 1\n        ";

    var path = __webpack_require__(/*! path */ "path");

    var correctedPath = path.join(__dirname, '..', configFileName);
    fs.writeFileSync(correctedPath, configTemplate);
    file = configTemplate;
  }
}

var config = file.split('\n').filter(function (value) {
  return !value.startsWith('#') && !(value.trim() === '');
}).reduce(function (previous, current) {
  var opt = current.split('=').map(function (value) {
    return value.trim();
  });
  var definition = opt[1];
  var val;

  if (definition == '') {
    val = undefined;
  } else if (definition == 'true' || definition == 'false') {
    val = definition === 'true';
  } else if (isNaN(definition)) {
    val = definition;
  } else {
    val = definition * 1;
  }

  previous[opt[0]] = val;
  return previous;
}, {});
var percentageLimitTolerance = config.percentageLimitTolerance;
var notificationExpirationTimeout = config.notificationExpirationTimeout;
var shouldNotify = config.shouldNotify;
var datalogFilePath = config.datalogFilePath;
var shouldWrite = config.shouldWrite;
var datalogTimeout = config.datalogTimeout;
var includeTimestamp = config.includeTimestamp;
var persistanceTimeout = config.persistanceTimeout;
var cleanUpTimeout = config.cleanUpTimeout;
var pointsPerSecond = config.pointsPerSecond;
var portName = config.portName;
var ignorePortsFile = config.ignorePortsFile;
var OperationsType = {
  BYTES: 0,
  STRING: 1,
  API_BYTES: 2,
  API_STRING: 3
};
var operationType = OperationsType[config.operationType];
var i;
var xbeeSourceAddressArray = [];

for (i = 0; i < config.xbeeSourceAddress.length; i += 2) {
  var oct = config.xbeeSourceAddress.substring(i, i + 2);
  var hex = (0, _parseInt2.default)(oct, 16);
  xbeeSourceAddressArray.push(hex);
}

var xbeeSourceAddress = xbeeSourceAddressArray;
var fields = {
  /*baterias geral*/
  airStatus: {
    index: 0,
    name: "airStatus",
    id: 51,
    pos: 3
  },
  current0: {
    index: 2,
    name: "current0",
    id: 50,
    pos: 0
  },
  current1: {
    index: 3,
    name: "current1",
    id: 50,
    pos: 1
  },
  current2: {
    index: 4,
    name: "current2",
    id: 50,
    pos: 2
  },
  current3: {
    index: 5,
    name: "current3",
    id: 50,
    pos: 3
  },
  glvVoltage: {
    index: 6,
    name: "glvVoltage",
    id: 51,
    pos: 0
  },
  chargePercent: {
    index: 7,
    name: "chargePercent",
    id: 51,
    pos: 1
  },
  totalVoltage: {
    index: 11,
    name: "totalVoltage",
    id: 52,
    pos: 1
  },
  maxTemperature: {
    index: 13,
    name: "maxTemperature",
    id: 52,
    pos: 3
  },
  minVoltage: {
    index: 14,
    name: "minVoltage",
    id: 53,
    pos: 0
  },

  /*pack 0*/
  cell000: {
    index: 40,
    name: "cell000",
    id: 281,
    pos: 0
  },
  cell001: {
    index: 41,
    name: "cell001",
    id: 281,
    pos: 1
  },
  cell002: {
    index: 42,
    name: "cell002",
    id: 281,
    pos: 2
  },
  cell003: {
    index: 43,
    name: "cell003",
    id: 281,
    pos: 3
  },
  cell004: {
    index: 44,
    name: "cell004",
    id: 282,
    pos: 0
  },
  cell005: {
    index: 45,
    name: "cell005",
    id: 282,
    pos: 1
  },
  cell006: {
    index: 46,
    name: "cell006",
    id: 282,
    pos: 2
  },
  cell007: {
    index: 47,
    name: "cell007",
    id: 282,
    pos: 3
  },
  cell008: {
    index: 48,
    name: "cell008",
    id: 283,
    pos: 0
  },
  cell009: {
    index: 49,
    name: "cell009",
    id: 283,
    pos: 1
  },
  cell010: {
    index: 50,
    name: "cell010",
    id: 283,
    pos: 2
  },
  cell011: {
    index: 51,
    name: "cell011",
    id: 283,
    pos: 3
  },
  cell012: {
    index: 52,
    name: "cell012",
    id: 284,
    pos: 0
  },
  temp001: {
    index: 53,
    name: "temp001",
    id: 284,
    pos: 1
  },
  temp002: {
    index: 54,
    name: "temp002",
    id: 284,
    pos: 2
  },
  temp003: {
    index: 55,
    name: "temp003",
    id: 284,
    pos: 3
  },
  temp004: {
    index: 56,
    name: "temp004",
    id: 285,
    pos: 0
  },
  temp005: {
    index: 57,
    name: "temp005",
    id: 285,
    pos: 1
  },

  /*pack 1*/
  cell100: {
    index: 58,
    name: "cell100",
    id: 276,
    pos: 0
  },
  cell101: {
    index: 59,
    name: "cell101",
    id: 276,
    pos: 1
  },
  cell102: {
    index: 60,
    name: "cell102",
    id: 276,
    pos: 2
  },
  cell103: {
    index: 61,
    name: "cell103",
    id: 276,
    pos: 3
  },
  cell104: {
    index: 62,
    name: "cell104",
    id: 277,
    pos: 0
  },
  cell105: {
    index: 63,
    name: "cell105",
    id: 277,
    pos: 1
  },
  cell106: {
    index: 64,
    name: "cell106",
    id: 277,
    pos: 2
  },
  cell107: {
    index: 65,
    name: "cell107",
    id: 277,
    pos: 3
  },
  cell108: {
    index: 66,
    name: "cell108",
    id: 278,
    pos: 0
  },
  cell109: {
    index: 67,
    name: "cell109",
    id: 278,
    pos: 1
  },
  cell110: {
    index: 68,
    name: "cell110",
    id: 278,
    pos: 2
  },
  cell111: {
    index: 69,
    name: "cell111",
    id: 278,
    pos: 3
  },
  cell112: {
    index: 70,
    name: "cell112",
    id: 279,
    pos: 0
  },
  temp101: {
    index: 71,
    name: "temp101",
    id: 279,
    pos: 1
  },
  temp102: {
    index: 72,
    name: "temp102",
    id: 279,
    pos: 2
  },
  temp103: {
    index: 73,
    name: "temp103",
    id: 279,
    pos: 3
  },
  temp104: {
    index: 74,
    name: "temp104",
    id: 280,
    pos: 0
  },
  temp105: {
    index: 75,
    name: "temp105",
    id: 280,
    pos: 1
  },

  /*pack 2*/
  cell200: {
    index: 76,
    name: "cell200",
    id: 271,
    pos: 0
  },
  cell201: {
    index: 77,
    name: "cell201",
    id: 271,
    pos: 1
  },
  cell202: {
    index: 78,
    name: "cell202",
    id: 271,
    pos: 2
  },
  cell203: {
    index: 79,
    name: "cell203",
    id: 271,
    pos: 3
  },
  cell204: {
    index: 80,
    name: "cell204",
    id: 272,
    pos: 0
  },
  cell205: {
    index: 81,
    name: "cell205",
    id: 272,
    pos: 1
  },
  cell206: {
    index: 82,
    name: "cell206",
    id: 272,
    pos: 2
  },
  cell207: {
    index: 83,
    name: "cell207",
    id: 272,
    pos: 3
  },
  cell208: {
    index: 84,
    name: "cell208",
    id: 273,
    pos: 0
  },
  cell209: {
    index: 85,
    name: "cell209",
    id: 273,
    pos: 1
  },
  cell210: {
    index: 86,
    name: "cell210",
    id: 273,
    pos: 2
  },
  cell211: {
    index: 87,
    name: "cell211",
    id: 273,
    pos: 3
  },
  cell212: {
    index: 88,
    name: "cell212",
    id: 274,
    pos: 0
  },
  temp201: {
    index: 89,
    name: "temp201",
    id: 274,
    pos: 1
  },
  temp202: {
    index: 90,
    name: "temp202",
    id: 274,
    pos: 2
  },
  temp203: {
    index: 91,
    name: "temp203",
    id: 274,
    pos: 3
  },
  temp204: {
    index: 92,
    name: "temp204",
    id: 275,
    pos: 0
  },
  temp205: {
    index: 93,
    name: "temp205",
    id: 275,
    pos: 1
  },

  /*pack 3*/
  cell300: {
    index: 94,
    name: "cell300",
    id: 266,
    pos: 0
  },
  cell301: {
    index: 95,
    name: "cell301",
    id: 266,
    pos: 1
  },
  cell302: {
    index: 96,
    name: "cell302",
    id: 266,
    pos: 2
  },
  cell303: {
    index: 97,
    name: "cell303",
    id: 266,
    pos: 3
  },
  cell304: {
    index: 98,
    name: "cell304",
    id: 267,
    pos: 0
  },
  cell305: {
    index: 99,
    name: "cell305",
    id: 267,
    pos: 1
  },
  cell306: {
    index: 100,
    name: "cell306",
    id: 267,
    pos: 2
  },
  cell307: {
    index: 101,
    name: "cell307",
    id: 267,
    pos: 3
  },
  cell308: {
    index: 102,
    name: "cell308",
    id: 268,
    pos: 0
  },
  cell309: {
    index: 103,
    name: "cell309",
    id: 268,
    pos: 1
  },
  cell310: {
    index: 104,
    name: "cell310",
    id: 268,
    pos: 2
  },
  cell311: {
    index: 105,
    name: "cell311",
    id: 268,
    pos: 3
  },
  cell312: {
    index: 106,
    name: "cell312",
    id: 269,
    pos: 0
  },
  temp301: {
    index: 107,
    name: "temp301",
    id: 269,
    pos: 1
  },
  temp302: {
    index: 108,
    name: "temp302",
    id: 269,
    pos: 2
  },
  temp303: {
    index: 109,
    name: "temp303",
    id: 269,
    pos: 3
  },
  temp304: {
    index: 110,
    name: "temp304",
    id: 270,
    pos: 0
  },
  temp305: {
    index: 111,
    name: "temp305",
    id: 270,
    pos: 1
  },

  /*pack 4*/
  cell400: {
    index: 112,
    name: "cell400",
    id: 256,
    pos: 0
  },
  cell401: {
    index: 113,
    name: "cell401",
    id: 256,
    pos: 1
  },
  cell402: {
    index: 114,
    name: "cell402",
    id: 256,
    pos: 2
  },
  cell403: {
    index: 115,
    name: "cell403",
    id: 256,
    pos: 3
  },
  cell404: {
    index: 116,
    name: "cell404",
    id: 257,
    pos: 0
  },
  cell405: {
    index: 117,
    name: "cell405",
    id: 257,
    pos: 1
  },
  cell406: {
    index: 118,
    name: "cell406",
    id: 257,
    pos: 2
  },
  cell407: {
    index: 119,
    name: "cell407",
    id: 257,
    pos: 3
  },
  cell408: {
    index: 120,
    name: "cell408",
    id: 258,
    pos: 0
  },
  cell409: {
    index: 121,
    name: "cell409",
    id: 258,
    pos: 1
  },
  cell410: {
    index: 122,
    name: "cell410",
    id: 258,
    pos: 2
  },
  cell411: {
    index: 123,
    name: "cell411",
    id: 258,
    pos: 3
  },
  cell412: {
    index: 124,
    name: "cell412",
    id: 259,
    pos: 0
  },
  temp401: {
    index: 125,
    name: "temp401",
    id: 259,
    pos: 1
  },
  temp402: {
    index: 126,
    name: "temp402",
    id: 259,
    pos: 2
  },
  temp403: {
    index: 127,
    name: "temp403",
    id: 259,
    pos: 3
  },
  temp404: {
    index: 128,
    name: "temp404",
    id: 260,
    pos: 0
  },
  temp405: {
    index: 129,
    name: "temp405",
    id: 260,
    pos: 1
  },

  /*pack 5*/
  cell500: {
    index: 130,
    name: "cell500",
    id: 261,
    pos: 0
  },
  cell501: {
    index: 131,
    name: "cell501",
    id: 261,
    pos: 1
  },
  cell502: {
    index: 132,
    name: "cell502",
    id: 261,
    pos: 2
  },
  cell503: {
    index: 133,
    name: "cell503",
    id: 261,
    pos: 3
  },
  cell504: {
    index: 134,
    name: "cell504",
    id: 262,
    pos: 0
  },
  cell505: {
    index: 135,
    name: "cell505",
    id: 262,
    pos: 1
  },
  cell506: {
    index: 136,
    name: "cell506",
    id: 262,
    pos: 2
  },
  cell507: {
    index: 137,
    name: "cell507",
    id: 262,
    pos: 3
  },
  cell508: {
    index: 138,
    name: "cell508",
    id: 263,
    pos: 0
  },
  cell509: {
    index: 139,
    name: "cell509",
    id: 263,
    pos: 1
  },
  cell510: {
    index: 140,
    name: "cell510",
    id: 263,
    pos: 2
  },
  cell511: {
    index: 141,
    name: "cell511",
    id: 263,
    pos: 3
  },
  cell512: {
    index: 142,
    name: "cell512",
    id: 264,
    pos: 0
  },
  temp501: {
    index: 143,
    name: "temp501",
    id: 264,
    pos: 1
  },
  temp502: {
    index: 144,
    name: "temp502",
    id: 264,
    pos: 2
  },
  temp503: {
    index: 145,
    name: "temp503",
    id: 264,
    pos: 3
  },
  temp504: {
    index: 146,
    name: "temp504",
    id: 265,
    pos: 0
  },
  temp505: {
    index: 147,
    name: "temp505",
    id: 265,
    pos: 1
  },
  stoppedTime: {
    index: 1,
    name: "stoppedTime",
    id: 0x100,
    pos: 0
  },
  operationMode: {
    index: 8,
    name: "operationMode",
    id: 1,
    pos: 0
  },
  errorFlag: {
    index: 9,
    name: "errorFlag",
    id: 0x001,
    pos: 2
  },
  mediaCurrent: {
    index: 10,
    name: "mediaCurrent",
    id: 53,
    pos: 0
  },
  //não achei
  mediaTemperature: {
    index: 12,
    name: "mediaTemperature",
    id: 53,
    pos: 2
  },
  //não achei    
  speedFL: {
    index: 15,
    name: "speedFL",
    id: 105,
    pos: 3
  },
  speedFR: {
    index: 16,
    name: "speedFR",
    id: 105,
    pos: 2
  },
  speedBL: {
    index: 17,
    name: "speedBL",
    id: 105,
    pos: 1
  },
  speedBR: {
    index: 18,
    name: "speedBR",
    id: 105,
    pos: 0
  },
  motorTorqueRight: {
    index: 19,
    name: "motorTorqueRight",
    id: 103,
    pos: 0
  },
  motorTorqueLeft: {
    index: 20,
    name: "motorTorqueLeft",
    id: 103,
    pos: 1
  },
  torqueReferenceRight: {
    index: 21,
    name: "torqueReferenceRight",
    id: 103,
    pos: 2
  },
  torqueReferenceLeft: {
    index: 22,
    name: "torqueReferenceLeft",
    id: 103,
    pos: 3
  },
  pedalAcelerador: {
    index: 23,
    name: "pedalAcelerador",
    id: 101,
    pos: 2
  },
  pedalFreio: {
    index: 24,
    name: "pedalFreio",
    id: 101,
    pos: 3
  },
  // mediaSpeed: {index: 25, name: "mediaSpeed", id: 0x304, pos: 0},
  // mediaTorque: {index: 26, name: "mediaTorque", id: 0x304, pos: 1},
  steeringWheel: {
    index: 27,
    name: "steeringWheel",
    id: 101,
    pos: 1
  },
  ECUTimer: {
    index: 28,
    name: "ECUTimer",
    id: 101,
    pos: 0
  },
  energiaInversorRight: {
    index: 29,
    name: "energiaInversorRight",
    id: 106,
    pos: 0
  },
  energiaInversorLeft: {
    index: 30,
    name: "energiaInversorLeft",
    id: 106,
    pos: 1
  },
  motorCurrentRight: {
    index: 31,
    name: "motorCurrentRight",
    id: 106,
    pos: 2
  },
  motorCurrentLeft: {
    index: 32,
    name: "motorCurrentLeft",
    id: 106,
    pos: 3
  },
  temperatureInversorR1: {
    index: 33,
    name: "temperatureInversorR1",
    id: 107,
    pos: 0
  },
  temperatureInversorR2: {
    index: 34,
    name: "temperatureInversorR2",
    id: 107,
    pos: 1
  },
  temperatureInversorL1: {
    index: 35,
    name: "temperatureInversorL1",
    id: 107,
    pos: 2
  },
  temperatureInversorL2: {
    index: 36,
    name: "temperatureInversorL2",
    id: 107,
    pos: 3
  },
  currentEvent: {
    index: 37,
    name: "currentEvent",
    id: 100,
    pos: 0
  },
  started: {
    index: 38,
    name: "started",
    id: 100,
    pos: 1
  },
  finished: {
    index: 39,
    name: "finished",
    id: 100,
    pos: 2
  },
  tireTempFL: {
    index: 150,
    name: "tireTempFL",
    id: 0x700,
    pos: 0
  },
  tireTempFR: {
    index: 151,
    name: "tireTempFR",
    id: 0x700,
    pos: 1
  },
  tireTempBL: {
    index: 152,
    name: "tireTempBL",
    id: 0x700,
    pos: 2
  },
  tireTempBR: {
    index: 153,
    name: "tireTempBR",
    id: 0x700,
    pos: 3
  },
  accelerometerX: {
    index: 154,
    name: "accelerometerX",
    id: 161,
    pos: 0
  },
  accelerometerY: {
    index: 155,
    name: "accelerometerY",
    id: 161,
    pos: 1
  },
  accelerometerZ: {
    index: 156,
    name: "accelerometerZ",
    id: 161,
    pos: 2
  },
  gyroscopeX: {
    index: 157,
    name: "gyroscopeX",
    id: 0x702,
    pos: 0
  },
  gyroscopeY: {
    index: 158,
    name: "gyroscopeY",
    id: 0x702,
    pos: 1
  },
  gyroscopeZ: {
    index: 159,
    name: "gyroscopeZ",
    id: 0x702,
    pos: 2
  },
  portConnected: {
    index: 900,
    name: "portConnected",
    id: 900,
    pos: 0
  },
  rssi: {
    index: 901,
    name: "rssi",
    id: 901,
    pos: 0
  },
  sensorPressaoDianteiro: {
    index: 160,
    name: "sensorPressaoDianteiro",
    id: 170,
    pos: 0
  },
  potenciometroBalancin: {
    index: 161,
    name: "potenciometroBalancin",
    id: 170,
    pos: 1
  },
  termoparFreioD: {
    index: 162,
    name: "termoparFreioD",
    id: 170,
    pos: 2
  },
  extensometro1: {
    index: 163,
    name: "extensometro1",
    id: 171,
    pos: 0
  },
  extensometro2: {
    index: 164,
    name: "extensometro2",
    id: 171,
    pos: 1
  },
  speedMotorRight: {
    index: 165,
    name: "speedMotorRight",
    id: 104,
    pos: 0
  },
  speedMotorLeft: {
    index: 166,
    name: "speedMotorLeft",
    id: 104,
    pos: 1
  },
  selectedMode: {
    index: 167,
    name: "selectedMode",
    id: 102,
    pos: 0
  },
  interfaceFlag: {
    index: 168,
    name: "interfaceFlag",
    id: 102,
    pos: 1
  },
  hodometroParcial: {
    index: 169,
    name: "hodometroParcial",
    id: 102,
    pos: 2
  },
  hodometroTotal: {
    index: 170,
    name: "hodometroTotal",
    id: 102,
    pos: 3
  },
  intensidadeFrenagem: {
    index: 171,
    name: "intensidadeFrenagem",
    id: 104,
    pos: 2
  },
  selecaoBotao: {
    index: 172,
    name: "selecaoBotao",
    id: 104,
    pos: 3
  },
  ganhoTorque: {
    index: 173,
    name: "ganhoTorque",
    id: 106,
    pos: 0
  },
  extensometro22: {
    index: 174,
    name: "extensometro22",
    id: 173,
    pos: 0
  },
  extensometro13: {
    index: 175,
    name: "extensometro13",
    id: 178,
    pos: 0
  },
  extensometro23: {
    index: 176,
    name: "extensometro23",
    id: 178,
    pos: 2
  },
  simHodometer: {
    index: 177,
    name: "simHodometer",
    id: 901,
    pos: 0
  },
  simCharge: {
    index: 178,
    name: "simCharge",
    id: 901,
    pos: 1
  },
  pressaoTraseiro: {
    index: 179,
    name: "pressaoTraseiro",
    id: 200,
    pos: 0
  }
};
var nameFieldIdMap = (0, _values.default)(fields).reduce(function (last, field) {
  return last[field.name] = field.index, last;
}, {});
var fieldIdNameMap = (0, _values.default)(fields).reduce(function (last, field) {
  return last[field.index] = field.name, last;
}, {}); //para plotar no gráfico

var availablePlotOptions = [{
  index: fields.current0.index,
  name: "Corrente 0",
  unidade: "A",
  formatFn: function formatFn(current) {
    return current > Math.pow(2, 15) ? (current - Math.pow(2, 16)) / 10 : current / 10;
  }
}, {
  index: fields.current1.index,
  name: "Corrente 1",
  unidade: "A",
  formatFn: function formatFn(current) {
    return (current > Math.pow(2, 15) ? (current - Math.pow(2, 16)) / 100 : current) / 100;
  }
}, {
  index: fields.current2.index,
  name: "Corrente 2",
  unidade: "A",
  formatFn: function formatFn(current) {
    return (current > Math.pow(2, 15) ? (current - Math.pow(2, 16)) / 10 : current) / 10;
  }
}, {
  index: fields.current3.index,
  name: "Corrente 3",
  unidade: "A",
  formatFn: function formatFn(current) {
    return (current > Math.pow(2, 15) ? (current - Math.pow(2, 16)) / 10 : current) / 10;
  }
}, {
  index: fields.glvVoltage.index,
  name: "Tensão do GLV",
  unidade: "V",
  formatFn: function formatFn(a) {
    return a / 1000;
  }
}, {
  index: fields.chargePercent.index,
  name: "Porcentagem de Carga",
  unidade: "%",
  formatFn: function formatFn(a) {
    return a / 100;
  }
}, {
  index: fields.mediaCurrent.index,
  name: "Corrente Média",
  unidade: "A",
  formatFn: function formatFn(current) {
    return current > Math.pow(2, 15) ? (current - Math.pow(2, 16)) / 100 : current / 100;
  }
}, {
  index: fields.totalVoltage.index,
  name: "Tensão Total",
  unidade: "V",
  formatFn: function formatFn(a) {
    return a / 100;
  }
}, {
  index: fields.mediaTemperature.index,
  name: "Temperatura Média",
  unidade: "ºC",
  formatFn: function formatFn(a) {
    return a / 1000;
  }
}, {
  index: fields.maxTemperature.index,
  name: "Temperatura Máxima",
  unidade: "ºC",
  formatFn: function formatFn(a) {
    return a / 1000;
  }
}, {
  index: fields.minVoltage.index,
  name: "Tensão Mínima",
  unidade: "V",
  formatFn: function formatFn(a) {
    return a / 10000;
  }
}, {
  index: fields.mediaTemperature.index,
  name: "Temperatura Média",
  unidade: "ºC",
  formatFn: function formatFn(a) {
    return a / 1000;
  }
}, {
  index: fields.motorTorqueRight.index,
  name: "Torque Motor Direito",
  unidade: "%",
  formatFn: function formatFn(a) {
    return a / 10;
  }
}, {
  index: fields.motorTorqueLeft.index,
  name: "Torque Motor Esquerdo",
  unidade: "%",
  formatFn: function formatFn(a) {
    return a / 10;
  }
}, {
  index: fields.torqueReferenceRight.index,
  name: "Referência de Torque Direito",
  unidade: "%",
  formatFn: function formatFn(a) {
    return a / 10;
  }
}, {
  index: fields.torqueReferenceLeft.index,
  name: "Referência de Torque Esquerdo",
  unidade: "%",
  formatFn: function formatFn(a) {
    return a / 10;
  }
}, {
  index: fields.pedalAcelerador.index,
  name: "Pedal Acelerador",
  unidade: "%",
  formatFn: function formatFn(a) {
    return a / 10;
  }
}, {
  index: fields.pedalFreio.index,
  name: "Pedal Freio",
  unidade: "",
  formatFn: function formatFn(a) {
    return Math.round(a);
  }
}, // {index: fields.mediaSpeed.index, name: "Velocidade Média", unidade: "km/h", formatFn: ((a) => a)},
// {index: fields.mediaTorque.index, name: "Torque Médio", unidade: "%", formatFn: ((a) => a/100)},
{
  index: fields.steeringWheel.index,
  name: "Volante",
  unidade: "º",
  formatFn: function formatFn(a) {
    return a * 300 / 4095 - 164.1025;
  }
}, {
  index: fields.energiaInversorRight.index,
  name: "Energia Inversor Direito",
  unidade: "kWh",
  formatFn: function formatFn(a) {
    return a / 1000;
  }
}, {
  index: fields.energiaInversorLeft.index,
  name: "Energia Inversor Esquerdo",
  unidade: "kWh",
  formatFn: function formatFn(a) {
    return a / 1000;
  }
}, {
  index: fields.motorCurrentRight.index,
  name: "Corrente Motor Direito",
  unidade: "A",
  formatFn: function formatFn(a) {
    return a / 100;
  }
}, {
  index: fields.motorCurrentLeft.index,
  name: "Corrente Motor Esquerdo",
  unidade: "A",
  formatFn: function formatFn(a) {
    return a / 100;
  }
}, {
  index: fields.temperatureInversorR1.index,
  name: "Temperatura Inversor Direito 1",
  unidade: "ºC",
  formatFn: function formatFn(a) {
    return a / 100;
  }
}, {
  index: fields.temperatureInversorR2.index,
  name: "Temperatura Inversor Direito 2",
  unidade: "ºC",
  formatFn: function formatFn(a) {
    return a / 100;
  }
}, {
  index: fields.temperatureInversorL1.index,
  name: "Temperatura Inversor Esquerdo 1",
  unidade: "ºC",
  formatFn: function formatFn(a) {
    return a / 100;
  }
}, {
  index: fields.temperatureInversorL2.index,
  name: "Temperatura Inversor Esquerdo 2",
  unidade: "ºC",
  formatFn: function formatFn(a) {
    return a / 100;
  }
}, {
  index: fields.speedFL.index,
  name: "Velocidade do Pneu Dianteiro Esquerdo",
  unidade: "RPM",
  formatFn: function formatFn(a) {
    return a / 10 / 3.6 / (52.07 / 10 * Math.PI) * 60;
  }
}, {
  index: fields.speedFR.index,
  name: "Velocidade do Pneu Dianteiro Direito",
  unidade: "RPM",
  formatFn: function formatFn(a) {
    return a / 10 / 3.6 / (52.07 / 10 * Math.PI) * 60;
  }
}, {
  index: fields.speedBL.index,
  name: "Velocidade do Pneu Traseiro Esquerdo",
  unidade: "RPM",
  formatFn: function formatFn(a) {
    return a / 9;
  }
}, {
  index: fields.speedBR.index,
  name: "Velocidade do Pneu Traseiro Direito",
  unidade: "RPM",
  formatFn: function formatFn(a) {
    return a / 9;
  }
}, {
  index: fields.speedMotorLeft.index,
  name: "Velocidade do Motor Esquerdo",
  unidade: "RPM",
  formatFn: function formatFn(a) {
    return a / 9;
  }
}, {
  index: fields.speedMotorRight.index,
  name: "Velocidade do Motor Direito",
  unidade: "RPM",
  formatFn: function formatFn(a) {
    return a / 9;
  }
}, {
  index: fields.tireTempFL.index,
  name: "Temperatura do Pneu Dianteiro Esquerdo",
  unidade: "ºC",
  formatFn: function formatFn(a) {
    return a / 100;
  }
}, {
  index: fields.tireTempFR.index,
  name: "Temperatura do Pneu Dianteiro Direito",
  unidade: "ºC",
  formatFn: function formatFn(a) {
    return a / 100;
  }
}, {
  index: fields.tireTempBL.index,
  name: "Temperatura do Pneu Traseiro Esquerdo",
  unidade: "ºC",
  formatFn: function formatFn(a) {
    return a;
  }
}, {
  index: fields.tireTempBR.index,
  name: "Temperatura do Pneu Traseiro Direito",
  unidade: "ºC",
  formatFn: function formatFn(a) {
    return a;
  }
}, {
  index: fields.accelerometerX.index,
  name: "Acelerômetro X",
  unidade: "g",
  formatFn: function formatFn(a) {
    return a / 100;
  }
}, {
  index: fields.accelerometerY.index,
  name: "Acelerômetro Y",
  unidade: "g",
  formatFn: function formatFn(a) {
    return a / 100;
  }
}, {
  index: fields.accelerometerZ.index,
  name: "Acelerômetro Z",
  unidade: "g",
  formatFn: function formatFn(a) {
    return a / 100;
  }
}, {
  index: fields.rssi.index,
  name: "RSSI",
  unidade: "dBm",
  formatFn: function formatFn(a) {
    return -a;
  }
}, {
  index: fields.sensorPressaoDianteiro.index,
  name: "Sensor de Pressão",
  unidade: "bar",
  formatFn: function formatFn(a) {
    return a;
  }
}, {
  index: fields.temp201.index,
  name: "Temperatura 201",
  unidade: "ºC",
  formatFn: function formatFn(a) {
    return a;
  }
}, {
  index: fields.temp203.index,
  name: "Temperatura 203",
  unidade: "ºC",
  formatFn: function formatFn(a) {
    return a;
  }
}, {
  index: fields.temp301.index,
  name: "Temperatura 301",
  unidade: "ºC",
  formatFn: function formatFn(a) {
    return a;
  }
}, {
  index: fields.temp303.index,
  name: "Temperatura 303",
  unidade: "ºC",
  formatFn: function formatFn(a) {
    return a;
  }
}, {
  index: fields.temp401.index,
  name: "Temperatura 401",
  unidade: "ºC",
  formatFn: function formatFn(a) {
    return a;
  }
}, {
  index: fields.temp403.index,
  name: "Temperatura 403",
  unidade: "ºC",
  formatFn: function formatFn(a) {
    return a;
  }
}, {
  index: fields.simCharge.index,
  name: "Descarga recente",
  unidade: "C",
  formatFn: function formatFn(a) {
    return a;
  }
}, {
  index: fields.pressaoTraseiro.index,
  name: "Pressão na linha de freio traseira",
  unidade: "Pa",
  formatFn: function formatFn(a) {
    return a;
  }
}];
var availablePlotIndexes = availablePlotOptions.map(function (option) {
  return option.index;
});
var datalogOrder = [fields.ECUTimer.name, fields.hodometroTotal.name, fields.glvVoltage.name, fields.speedFL.name, fields.speedFR.name, fields.speedMotorLeft.name, fields.speedMotorRight.name, fields.pedalAcelerador.name, fields.pedalFreio.name, fields.steeringWheel.name, fields.motorCurrentRight.name, fields.motorCurrentLeft.name, fields.accelerometerX.name, fields.accelerometerY.name, fields.accelerometerZ.name, fields.sensorPressaoDianteiro.name, fields.potenciometroBalancin.name, fields.termoparFreioD.name, fields.extensometro1.name, fields.extensometro2.name, fields.speedMotorRight.name, fields.speedMotorLeft.name, fields.current0.name, fields.current1.name, fields.current2.name, fields.current3.name, fields.mediaTemperature.name, fields.maxTemperature.name, fields.motorCurrentRight.name, fields.motorCurrentLeft.name, //fields.temp001.name,
fields.temp002.name, fields.temp003.name, fields.temp004.name, fields.temp101.name, fields.temp102.name, fields.temp103.name, fields.temp104.name, fields.temp201.name, fields.temp202.name, fields.temp203.name, fields.temp204.name, fields.temp301.name, fields.temp302.name, fields.temp303.name, fields.temp304.name, fields.temp401.name, fields.temp402.name, fields.temp403.name, fields.temp404.name, fields.temp501.name, fields.temp502.name, fields.temp503.name, fields.temp504.name, fields.current3.name, fields.totalVoltage.name, fields.minVoltage.name, fields.pressaoTraseiro.name]; // let datalogOrder = [
//     fields.current0.name,
//     fields.current1.name,
//     fields.current2.name,
//     fields.current3.name,
//     fields.motorCurrentRight.name,
//     fields.motorCurrentLeft.name
// ]

var fieldsLimits = [{
  name: fields.chargePercent.name,
  formattedName: "Porcentagem de Carga",
  min: 0,
  maxReference: 100
}, {
  name: fields.glvVoltage.name,
  formattedName: "Tensão do GLV",
  min: 13000,
  maxReference: 16000
}, {
  name: fields.maxTemperature.name,
  formattedName: "Temperatura Máxima dos Packs",
  max: 65500
}, {
  name: fields.minVoltage.name,
  formattedName: "Tensão Mínima das Células",
  min: 28000,
  maxReference: 35500
}, {
  name: fields.temperatureInversorL1.name,
  formattedName: "Temperatura do Inversor Esquerdo 1",
  max: 50000
}, {
  name: fields.temperatureInversorL2.name,
  formattedName: "Temperatura do Inversor Esquerdo 2",
  max: 50000
}, {
  name: fields.temperatureInversorR1.name,
  formattedName: "Temperatura do Inversor Direito 1",
  max: 50000
}, {
  name: fields.temperatureInversorR2.name,
  formattedName: "Temperatura do Inversor Direito 2",
  max: 50000
}, {
  name: fields.tireTempBL.name,
  formattedName: "Temperatura Pneu Traseiro Esquerdo",
  max: 20000
}, {
  name: fields.tireTempBR.name,
  formattedName: "Temperatura Pneu Traseiro Direito",
  max: 20000
}, {
  name: fields.tireTempFL.name,
  formattedName: "Temperatura Pneu Dianteiro Esquerdo",
  max: 20000
}, {
  name: fields.tireTempFR.name,
  formattedName: "Temperatura Pneu Dianteiro Direito",
  max: 20000
}];
fieldsLimits = fieldsLimits.reduce(function (last, field) {
  last[field.name] = {};
  last[field.name].name = field.formattedName;
  last[field.name][typeof field.max === 'undefined' ? "min" : "max"] = typeof field.max === 'undefined' ? field.min : field.max;
  if (typeof field.maxReference !== 'undefined') last[field.name].maxReference = field.maxReference;
  return last;
}, {});
module.exports = {
  availablePlotOptions: availablePlotOptions,
  fields: fields,
  mappings: {
    nameFieldIdMap: nameFieldIdMap,
    fieldIdNameMap: fieldIdNameMap,
    availablePlotIndexes: availablePlotIndexes
  },
  persistanceTimeout: persistanceTimeout,
  cleanUpTimeout: cleanUpTimeout,
  pointsPerSecond: pointsPerSecond,
  fieldsLimit: {
    fieldsLimit: fieldsLimits,
    percentageLimitTolerance: percentageLimitTolerance,
    notificationExpirationTimeout: notificationExpirationTimeout,
    shouldNotify: shouldNotify
  },
  port: {
    portName: portName,
    ignorePortsFile: ignorePortsFile,
    operationType: operationType,
    OperationsType: OperationsType,
    xbeeSourceAddress: xbeeSourceAddress
  },
  datalog: {
    datalogOrder: datalogOrder,
    filepath: datalogFilePath,
    shouldWrite: shouldWrite,
    timeout: datalogTimeout,
    includeTimestamp: includeTimestamp
  }
};
/* WEBPACK VAR INJECTION */}.call(this, "/"))

/***/ }),

/***/ "./components/contexts.js":
/*!********************************!*\
  !*** ./components/contexts.js ***!
  \********************************/
/*! exports provided: DelayContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DelayContext", function() { return DelayContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var DelayContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext();


/***/ }),

/***/ "./components/countup-wrapper.js":
/*!***************************************!*\
  !*** ./components/countup-wrapper.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/reflect/construct */ "./node_modules/@babel/runtime-corejs2/core-js/reflect/construct.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _contexts_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./contexts.js */ "./components/contexts.js");
/* harmony import */ var react_countup__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-countup */ "react-countup");
/* harmony import */ var react_countup__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_countup__WEBPACK_IMPORTED_MODULE_9__);








function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(this).constructor; result = _babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default()(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a) return false; if (_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default()(Boolean, [], function () {})); return true; } catch (e) { return false; } }





var CountUpWrapper = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(CountUpWrapper, _Component);

  var _super = _createSuper(CountUpWrapper);

  function CountUpWrapper(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, CountUpWrapper);

    _this = _super.call(this, props); // debugger;

    if (typeof props.children !== 'undefined') {
      _this.childRef = react__WEBPACK_IMPORTED_MODULE_7___default.a.createRef();
    }

    _this.lastValue = 0;
    _this.lastEnd = 0;
    _this.lastComp = undefined;
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(CountUpWrapper, [{
    key: "render",
    value: function render() {
      /*if (this.props.duration == 0 || this.context/1000 == 0) {
          // debugger;
          if (typeof (this.props.children) !== 'undefined') {
              // debugger;
              let comp = this.props.children(this.childRef);
              console.log(comp);
              while (typeof (comp.props.children) !== 'undefined')
                  comp = comp.props.children
              let Ded = comp;
              let asd = <ZeroDurationComponent component={comp}/>;
              // debugger;
              // d.innerHTML = this.props.end;
              
              // if (d.type === 'INPUT') {
              //     d.value = this.props.end;
              // }
              // else if (d.tagName === 'text' || self.d.tagName === 'tspan') {
              //     d.textContent = this.props.end;
              // }
              // else {
              //     d.innerHTML = this.props.end;
              // }
              return comp;
          } else {
              return (<span>{this.props.end}</span>)
          }
      } else {*/
      var p = this.props;
      var comp = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(CountComponent, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, p, {
        start: this.lastValue
      }), p.children);
      if (p.end == this.lastEnd) return this.lastComp || comp;
      this.lastValue = p.end;
      delete this.lastComp;
      this.lastComp = comp;
      this.lastEnd = p.end;
      return comp; //}
    }
  }]);

  return CountUpWrapper;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

CountUpWrapper.contextType = _contexts_js__WEBPACK_IMPORTED_MODULE_8__["DelayContext"];

function ZeroDurationComponent(props) {
  return props.component;
} // function RetrieveDuration(props) {
//     return props.duration || useContext(DelayContext)/1000;
// }


function CountComponent(props) {
  // debugger;
  var decs = props.decimals ? props.decimals : props.decimals == 0 ? 0 : 2;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_countup__WEBPACK_IMPORTED_MODULE_9___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, props, {
    decimals: decs,
    duration: props.duration || Object(react__WEBPACK_IMPORTED_MODULE_7__["useContext"])(_contexts_js__WEBPACK_IMPORTED_MODULE_8__["DelayContext"]) / 1000,
    delay: props.delay || 0,
    useEasing: props.useEasing || false
  }), props.children);
}

/* harmony default export */ __webpack_exports__["default"] = (CountUpWrapper);

/***/ }),

/***/ "./components/data-fetcher.js":
/*!************************************!*\
  !*** ./components/data-fetcher.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/reflect/construct */ "./node_modules/@babel/runtime-corejs2/core-js/reflect/construct.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _notifications_handler_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./notifications-handler.js */ "./components/notifications-handler.js");











function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__["default"])(this).constructor; result = _babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default()(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a) return false; if (_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default()(Boolean, [], function () {})); return true; } catch (e) { return false; } }





var DataFetcher = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(DataFetcher, _Component);

  var _super = _createSuper(DataFetcher);

  function DataFetcher(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, DataFetcher);

    _this = _super.call(this, props); // debugger;

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "updateField", /*#__PURE__*/Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
      var response, body;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!(_this.isFetching || !_this.shouldFetch)) {
                _context.next = 2;
                break;
              }

              return _context.abrupt("return", false);

            case 2:
              _this.isFetching = true;
              _context.next = 5;
              return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_11___default()('/' + _this.rootPage + _this.page);

            case 5:
              response = _context.sent;
              _context.next = 8;
              return response.json();

            case 8:
              body = _context.sent;

              if (!(response.status !== 200)) {
                _context.next = 11;
                break;
              }

              throw Error(body.message);

            case 11:
              // console.log(new Date().getMilliseconds()-lastLoaded);
              // lastLoaded = new Date().getMilliseconds();
              //console.log(body);
              _this.isFetching = false;
              return _context.abrupt("return", body);

            case 13:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })));

    _this.updateRSSI = props.updateRSSI;
    _this.delay = 300;
    props.setChildDelay(_this.delay);
    _this.state = {};
    _this.rootPage = "data/";
    _this.isFetching = false;
    _this.shouldFetch = true;
    _this.timerID = null;
    _this.doFetch = _this.doFetch.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(DataFetcher, [{
    key: "doFetch",
    value: function doFetch() {
      var _this2 = this;

      this.updateField().then(function (res) {
        if (res.data) {
          // debugger;
          var treatedData = _this2.treatData(res.data);

          _this2.setState({
            data: treatedData
          });

          Object(_notifications_handler_js__WEBPACK_IMPORTED_MODULE_12__["default"])(res.data);

          _this2.updateRSSI(res.data.rssi);
        } else throw Error("fetched undefined object"); // 
        // var data = this.state.data;
        // // debugger;
        // data.bms.charge = (data.bms.charge == null ? 10000 : data.bms.charge - 1 < 0 ? 10000 : data.bms.charge - 100);
        // this.setState({data: data});

      }).catch(function (err) {
        return console.log(err);
      });
    }
  }, {
    key: "startFetching",
    value: function startFetching() {
      if (this.timerID != null) return;
      this.doFetch();
      this.timerID = setInterval(this.doFetch, this.delay);
    }
  }, {
    key: "stopFetching",
    value: function stopFetching() {
      clearInterval(this.timerID);
      this.timerID = null;
    }
  }, {
    key: "treatData",
    value: function treatData(data) {
      return data;
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.startFetching();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.stopFetching();
    }
  }]);

  return DataFetcher;
}(react__WEBPACK_IMPORTED_MODULE_10__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (DataFetcher);

/***/ }),

/***/ "./components/notifications-handler.js":
/*!*********************************************!*\
  !*** ./components/notifications-handler.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-toastify */ "react-toastify");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_3__);





var constants = __webpack_require__(/*! ./constants.js */ "./components/constants.js");

function NotificationBasis(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "d-flex notification-container align-items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "notification-icon"
  }, props.icon), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "flex-fill notification-text"
  }, props.text));
}

var PortDisconnected = function PortDisconnected(_ref) {
  var closeToast = _ref.closeToast;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(NotificationBasis, {
    text: "Porta Serial desconectada!",
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
      src: "/static/images/usb-unplugged.png"
    })
  });
};

var PortConnected = function PortConnected(_ref2) {
  var closeToast = _ref2.closeToast;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(NotificationBasis, {
    text: "Porta Serial conectada!",
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
      src: "/static/images/usb-plugged.png"
    })
  });
};

var WarningValue = function WarningValue(_ref3) {
  var closeToast = _ref3.closeToast,
      text = _ref3.text;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(NotificationBasis, {
    text: text,
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
      src: "/static/icons/warning-red.png"
    })
  });
};

function handleNotifications(data) {
  //CONEXAO SERIAL
  // debugger;
  if (!constants.fieldsLimit.shouldNotify) return;

  if (!data.portConnected) {
    if (!react_toastify__WEBPACK_IMPORTED_MODULE_3__["toast"].isActive(900)) Object(react_toastify__WEBPACK_IMPORTED_MODULE_3__["toast"])( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(PortDisconnected, null), {
      toastId: 900,
      autoClose: false,
      type: react_toastify__WEBPACK_IMPORTED_MODULE_3__["toast"].TYPE.WARNING,
      closeButton: false,
      draggable: false,
      closeOnClick: false
    });
  } else if (react_toastify__WEBPACK_IMPORTED_MODULE_3__["toast"].isActive(900)) {
    react_toastify__WEBPACK_IMPORTED_MODULE_3__["toast"].dismiss(900);
    react_toastify__WEBPACK_IMPORTED_MODULE_3__["toast"].success( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(PortConnected, null));
  } // debugger;


  var offLimited = JSON.parse(localStorage.getItem("offLimitFields")); // debugger;

  if (offLimited == null) offLimited = [];

  if (data.offLimitFields.length == 0) {
    localStorage.clear();
  } else {
    var createOffLimitField = function createOffLimitField(fieldId, value, added) {
      return {
        fieldId: fieldId,
        value: value,
        added: added
      };
    }; //interseção entre os novos campos offlimit que chegaram e os que ja estavam registrados como offlimit


    var finalOffLimited = offLimited.filter(function (previousOffLimited) {
      return data.offLimitFields.some(function (newOffLimited) {
        return newOffLimited.fieldId === previousOffLimited.fieldId;
      });
    });
    data.offLimitFields.forEach(function (field) {
      //debugger;
      var fIndex = finalOffLimited.findIndex(function (value) {
        return value.fieldId === field.fieldId;
      }); //se, no armazenamento local, n tiver um aviso, cria um aviso novo

      if (fIndex < 0) {
        finalOffLimited.push(createOffLimitField(field.fieldId, field.value, new Date().getTime()));
        var textComp = createOffLimitComponent(field);
        Object(react_toastify__WEBPACK_IMPORTED_MODULE_3__["toast"])( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(WarningValue, {
          text: textComp
        }), {
          type: react_toastify__WEBPACK_IMPORTED_MODULE_3__["toast"].TYPE.ERROR
        }); //se achou, verifica se ja passou o tempo de expiração. Se tiver passado, notifica novamente
      } else {
        if (new Date().getTime() - finalOffLimited[fIndex].added >= constants.fieldsLimit.notificationExpirationTimeout) {
          finalOffLimited[fIndex] = createOffLimitField(field.fieldId, field.value, new Date().getTime()); // debugger;

          var _textComp = createOffLimitComponent(field);

          Object(react_toastify__WEBPACK_IMPORTED_MODULE_3__["toast"])( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(WarningValue, {
            text: _textComp
          }), {
            type: react_toastify__WEBPACK_IMPORTED_MODULE_3__["toast"].TYPE.ERROR
          });
        }
      }
    }, this);
    localStorage.setItem('offLimitFields', _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(finalOffLimited));
  }
}

function createOffLimitComponent(field) {
  var name = constants.mappings.fieldIdNameMap[field.fieldId];
  var fieldName = constants.fieldsLimit.fieldsLimit[name].name;
  var textComp;

  if (typeof constants.fieldsLimit.fieldsLimit[name].max !== 'undefined' && constants.fieldsLimit.fieldsLimit[name].max * (1 - constants.fieldsLimit.percentageLimitTolerance / 100) <= field.value) {
    // debugger;
    // const intValue = parseInt(field.value);
    // const maxValue = constants.fieldsLimit.fieldsLimit[name].max;
    // const difference = (maxValue-intValue);
    // const decimalPerc = difference/constants.fieldsLimit.fieldsLimit[name].max*100;
    // const perc = parseInt(decimalPerc);
    var perc = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()((constants.fieldsLimit.fieldsLimit[name].max - _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(field.value)) / constants.fieldsLimit.fieldsLimit[name].max * 100); // debugger;


    textComp = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", null, "O campo ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
      className: "notification-field-name"
    }, fieldName), " est\xE1 ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
      className: "notification-value"
    }, perc <= 0 ? 'ACIMA' : +perc + '% distante'), " do valor m\xE1ximo!");
  } else {
    // debugger;
    // let b1 = parseInt(field.value);
    // let b2 = constants.fieldsLimit.fieldsLimit[name].min;
    // let a1 = (b1-b2);
    // let a2 = a1/constants.fieldsLimit.fieldsLimit[name].maxReference*100;
    // let perc = parseInt(a2);
    var _perc = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()((_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(field.value) - constants.fieldsLimit.fieldsLimit[name].min) / constants.fieldsLimit.fieldsLimit[name].maxReference * 100); // debugger;


    textComp = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", null, "O campo ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
      className: "notification-field-name"
    }, fieldName), " est\xE1 ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
      className: "notification-value"
    }, _perc <= 0 ? 'ABAIXO' : +_perc + '% distante'), " do valor m\xEDnimo!");
  }

  return textComp;
}

/* harmony default export */ __webpack_exports__["default"] = (handleNotifications);

/***/ }),

/***/ "./components/velocimetro.js":
/*!***********************************!*\
  !*** ./components/velocimetro.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/reflect/construct */ "./node_modules/@babel/runtime-corejs2/core-js/reflect/construct.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_countup__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-countup */ "react-countup");
/* harmony import */ var react_countup__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_countup__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _contexts_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./contexts.js */ "./components/contexts.js");
/* harmony import */ var _countup_wrapper_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./countup-wrapper.js */ "./components/countup-wrapper.js");








function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(this).constructor; result = _babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default()(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a) return false; if (_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default()(Boolean, [], function () {})); return true; } catch (e) { return false; } }



 // import vel from '../static/SVGs/velocimentro.svg';



var Velocimetro = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Velocimetro, _Component);

  var _super = _createSuper(Velocimetro);

  function Velocimetro(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Velocimetro);

    _this = _super.call(this, props);
    _this.pointerRef = react__WEBPACK_IMPORTED_MODULE_7___default.a.createRef();
    _this.greenBarRef = react__WEBPACK_IMPORTED_MODULE_7___default.a.createRef();
    _this.decimalRef = react__WEBPACK_IMPORTED_MODULE_7___default.a.createRef();
    _this.lastValue = 0;
    _this.updateSpeed = _this.updateSpeed.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this));
    _this.updateAndFormatValue = _this.updateAndFormatValue.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this));
    _this.state = {
      speed: 0
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Velocimetro, [{
    key: "updateSpeed",
    value: function updateSpeed(newSpeed) {
      this.setState({
        speed: newSpeed
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("svg", {
        style: {
          zoom: 1
        },
        id: "svg_document",
        baseProfile: "full",
        version: "1.1",
        preserveAspectRatio: "xMidYMid meet",
        viewBox: "0 0 100 100"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("link", {
        href: "/static/styles.css",
        rel: "stylesheet"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("defs", {
        id: "svg_document_defs"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("linearGradient", {
        x2: "0%",
        id: "linearGradient1",
        x1: "0%",
        y2: "0%",
        y1: "100%"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("stop", {
        id: "stop1",
        offset: "0%",
        stopColor: "#5a5a5c"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("stop", {
        id: "stop2",
        offset: "100%",
        stopColor: "#00d927"
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("circle", {
        stroke: "#000000",
        id: "path-cover",
        strokeWidth: "0px",
        cy: "50px",
        fill: "url(#radialGradient1)",
        r: "43px",
        cx: "50px",
        transform: "",
        visibility: "visible"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("circle", {
        stroke: "#5b5b5c",
        visibility: "visible",
        id: "circle2",
        strokeWidth: "3",
        cy: "50px",
        fill: "none",
        r: "44",
        cx: "50px",
        transform: ""
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
        ref: this.greenBarRef,
        stroke: "#00d927",
        id: "speed-path",
        strokeWidth: "3",
        d: "M50,94 A44,44 0 0 1 50,6 ",
        fill: "none",
        strokeLinecap: "butt",
        strokeLinejoin: "miter",
        transform: ""
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("g", {
        id: "speed-marker-texts",
        style: {
          "textShadow": "0px 1px 1px #6b6b6b"
        },
        transform: ""
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("text", {
        stroke: "none",
        id: "text14",
        strokeWidth: "1px",
        x: "82.400002px",
        textRendering: "geometricPrecision",
        fontFamily: "Advent Pro",
        y: "51.199997px",
        fill: "white",
        fontSize: "4px",
        transform: "",
        textAnchor: "middle"
      }, "120"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("text", {
        stroke: "none",
        id: "text13",
        strokeWidth: "1px",
        x: "80.799995px",
        textRendering: "geometricPrecision",
        fontFamily: "Advent Pro",
        y: "38.999996px",
        fill: "white",
        fontSize: "4px",
        transform: "",
        textAnchor: "middle"
      }, "110"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("text", {
        stroke: "none",
        id: "text9",
        strokeWidth: "1px",
        x: "72.599998px",
        textRendering: "geometricPrecision",
        fontFamily: "Advent Pro",
        y: "28.0799994px",
        fill: "white",
        fontSize: "4px",
        transform: "",
        textAnchor: "middle"
      }, "100"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("text", {
        stroke: "none",
        id: "text10",
        strokeWidth: "1px",
        x: "63.799995px",
        textRendering: "geometricPrecision",
        fontFamily: "Advent Pro",
        y: "21.399998px",
        fill: "white",
        fontSize: "4px",
        transform: "",
        textAnchor: "middle"
      }, "90"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("text", {
        stroke: "none",
        id: "text8",
        strokeWidth: "1px",
        x: "50px",
        textRendering: "geometricPrecision",
        fontFamily: "Advent Pro",
        y: "20.000002px",
        fill: "white",
        fontSize: "4px",
        transform: "",
        textAnchor: "middle"
      }, "80"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("text", {
        stroke: "none",
        id: "text7",
        strokeWidth: "1px",
        x: "37.200001px",
        textRendering: "geometricPrecision",
        fontFamily: "Advent Pro",
        y: "22.000006px",
        fill: "white",
        fontSize: "4px",
        transform: "",
        textAnchor: "middle"
      }, "70"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("text", {
        stroke: "none",
        id: "text6",
        strokeWidth: "1px",
        x: "27.800001px",
        textRendering: "geometricPrecision",
        fontFamily: "Advent Pro",
        y: "28.4px",
        fill: "white",
        fontSize: "4px",
        transform: "",
        textAnchor: "middle"
      }, "60"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("text", {
        stroke: "none",
        id: "text5",
        strokeWidth: "1px",
        x: "20.800001px",
        textRendering: "geometricPrecision",
        fontFamily: "Advent Pro",
        y: "39.199997px",
        fill: "white",
        fontSize: "4px",
        transform: "",
        textAnchor: "middle"
      }, "50"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("text", {
        stroke: "none",
        id: "text4",
        strokeWidth: "1px",
        x: "17.800001px",
        textRendering: "geometricPrecision",
        fontFamily: "Advent Pro",
        y: "51.399994px",
        fill: "white",
        fontSize: "4px",
        transform: "",
        textAnchor: "middle"
      }, "40"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("text", {
        stroke: "none",
        id: "text3",
        strokeWidth: "1px",
        x: "20.600002px",
        textRendering: "geometricPrecision",
        fontFamily: "Advent Pro",
        y: "64.799988px",
        fill: "white",
        fontSize: "4px",
        transform: "",
        textAnchor: "middle"
      }, "30"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("text", {
        stroke: "none",
        id: "text1",
        strokeWidth: "1px",
        x: "27.400002px",
        textRendering: "geometricPrecision",
        fontFamily: "Advent Pro",
        fill: "white",
        fontSize: "4px",
        y: "75px",
        transform: "",
        textAnchor: "middle"
      }, "20"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("text", {
        stroke: "none",
        id: "text2",
        strokeWidth: "1px",
        x: "37.400002px",
        textRendering: "geometricPrecision",
        fontFamily: "Advent Pro",
        y: "81.399994px",
        fill: "white",
        fontSize: "4px",
        transform: "",
        textAnchor: "middle"
      }, "10"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("text", {
        stroke: "none",
        style: {
          "outlineStyle": "none",
          "color": "#ffffff"
        },
        strokeWidth: "1px",
        x: "50px",
        textRendering: "geometricPrecision",
        fontFamily: "Advent Pro",
        fill: "white",
        fontSize: "4px",
        y: "84px",
        transform: "",
        textAnchor: "middle",
        id: "text11"
      }, "0")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("g", {
        transform: "",
        id: "circle-pointers"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("circle", {
        stroke: "#008017",
        id: "circle1",
        strokeWidth: "1px",
        cy: "50",
        fill: "none",
        r: "40",
        cx: "50",
        transform: ""
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("rect", {
        stroke: "none",
        x: "49.25px",
        height: "9.7px",
        y: "85.8px",
        strokeWidth: "3px",
        id: "rect15",
        width: "1.485px",
        fill: "#008017",
        transform: ""
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("rect", {
        stroke: "none",
        x: "49.25px",
        height: "4px",
        y: "10px",
        id: "rect1",
        strokeWidth: "3px",
        width: "1.5px",
        fill: "#008017",
        transform: ""
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("rect", {
        stroke: "none",
        x: "47.880721px",
        height: "4px",
        y: "51.816059px",
        strokeWidth: "3px",
        id: "rect14",
        width: "1.5px",
        fill: "#008017",
        transform: "translate(36.95 -15.3) rotate(67.5 50.75 52)"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("rect", {
        stroke: "none",
        x: "51.04525px",
        height: "4px",
        y: "50.432957px",
        strokeWidth: "3px",
        id: "rect13",
        width: "1.5px",
        fill: "#008017",
        transform: "translate(-36.95 -15.3) rotate(-67.5 50.75 52)"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("rect", {
        stroke: "none",
        x: "49.465641px",
        height: "4px",
        y: "50.126812px",
        strokeWidth: "3px",
        id: "rect12",
        width: "1.5px",
        fill: "#008017",
        transform: "translate(-15.3 -36.95) rotate(-22.5 50 50)"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("rect", {
        stroke: "none",
        x: "48.5px",
        height: "4px",
        y: "50px",
        strokeWidth: "3px",
        id: "rect10",
        width: "1.5px",
        fill: "#008017",
        transform: "translate(15.30 -36.95) rotate(22.5 50.75 52)"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("rect", {
        stroke: "none",
        x: "51.319698px",
        height: "4px",
        y: "53.618149px",
        strokeWidth: "3px",
        id: "rect9",
        width: "1.5px",
        fill: "#008017",
        transform: "translate(-15.30 36.95) rotate(202.5 50.75 52)"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("rect", {
        stroke: "none",
        x: "48.250771px",
        height: "4px",
        y: "47.965252px",
        strokeWidth: "3px",
        id: "rect8",
        width: "1.5px",
        fill: "#008017",
        transform: "translate(-36.95 15.3) rotate(67.25 50.75 52)"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("rect", {
        stroke: "none",
        x: "47.7px",
        height: "4px",
        y: "50px",
        strokeWidth: "3px",
        id: "rect7",
        width: "1.5px",
        fill: "#008017",
        transform: "translate(27.88 -27.28) rotate(45 50.75 52)"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("rect", {
        stroke: "none",
        x: "-2.262738px",
        height: "4px",
        y: "41.898335px",
        strokeWidth: "3px",
        id: "rect2",
        width: "1.5px",
        fill: "#008017",
        transform: "rotate(135 15.174976 38.524326)"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("rect", {
        stroke: "none",
        x: "48.585793px",
        height: "4px",
        y: "47.17157px",
        strokeWidth: "3px",
        id: "rect5",
        width: "1.5px",
        fill: "#008017",
        transform: "translate(-28.28 28.28) rotate(45 50.75 52)"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("rect", {
        stroke: "none",
        x: "59.850006px",
        height: "4px",
        y: "36.599998px",
        strokeWidth: "3px",
        width: "1.5px",
        id: "rect4",
        fill: "#008017",
        transform: "rotate(90 68.800003 57.999996)"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("rect", {
        stroke: "none",
        x: "49.25px",
        height: "4px",
        y: "86px",
        strokeWidth: "3px",
        id: "rect3",
        width: "1.5px",
        fill: "#008017",
        transform: "rotate(90 50 50)"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("rect", {
        ref: this.pointerRef,
        stroke: "#000000",
        x: "49.6px",
        height: "46px",
        y: "50px",
        id: "speed-pointer",
        strokeWidth: "0px",
        width: "0.8px",
        fill: "#ffffff",
        transform: "rotate(0 50 50)"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("g", {
        id: "speed-wrapper",
        transform: ""
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("circle", {
        stroke: "#000000",
        id: "circle3",
        strokeWidth: "0px",
        cy: "50px",
        fill: "#1e1e1e",
        r: "23.6px",
        cx: "50px",
        transform: ""
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("g", {
        id: "speed-text",
        transform: "",
        style: {
          "outlineStyle": "none",
          "textShadow": "0px 1px 1px #6b6b6b"
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_countup_wrapper_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
        end: this.props.speed,
        suffix: ".",
        useEasing: false,
        formattingFn: this.updateAndFormatValue
      }, function (_ref) {
        var countUpRef = _ref.countUpRef;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("text", {
          stroke: "none",
          ref: countUpRef,
          id: "speed-text-integer",
          strokeWidth: "1px",
          x: "50",
          textRendering: "geometricPrecision",
          fontFamily: "Exo",
          fill: "white",
          fontSize: "20px",
          y: "55.599995px",
          transform: "",
          textAnchor: "middle"
        });
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("text", {
        stroke: "none",
        id: "text17",
        strokeWidth: "1px",
        x: "50.000004px",
        textRendering: "geometricPrecision",
        fontFamily: "Exo",
        y: "64.199997px",
        fill: "white",
        fontSize: "7px",
        transform: "",
        textAnchor: "middle"
      }, "Km/h"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("image", {
        xlinkHref: "/static/images/logo-fundo-preto.png",
        x: "42.600006px",
        height: "8.800022px",
        id: "image1",
        y: "29px",
        width: "14.999992px",
        preserveAspectRatio: "xMidYMid meet",
        transform: "",
        macsvgid: "17B2C0EA-0066-4DF8-AFF4-6FE448389EE8-3383-0000225F808AEF38"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("g", {
        id: "main_group"
      }));
    }
  }, {
    key: "updateAndFormatValue",
    value: function updateAndFormatValue(value) {
      // var decimalValue = Math.round((value - Math.floor(value)).toFixed(2)*100);
      // var decimalValueFormated = (decimalValue < 10 ? "0"+decimalValue : decimalValue);
      var integerValue = Math.floor(value);
      var formattedIntegerValue = integerValue < 10 ? "0" + integerValue : integerValue; // formattedIntegerValue += ".";
      // var decComponent = this.decimalRef.current;
      // if (decComponent) {
      //     decComponent.innerHTML = decimalValueFormated;
      // }

      var pointerComponent = this.pointerRef.current;

      if (pointerComponent) {
        var rotateValue = value * 180 / 80;
        pointerComponent.setAttribute("transform", "rotate(" + rotateValue + ", 50, 50)");
      }

      var greenBarComponent = this.greenBarRef.current;

      if (greenBarComponent) {
        var angle = value * 180 / 80;
        var newAngle = angle - 270;
        var x = 50 + Math.cos(newAngle * Math.PI / 180) * 44;
        var y = 50 + Math.sin(newAngle * Math.PI / 180) * 44;
        var pathDirectory = "M50,94 A44,44 0 " + (angle > 180 ? 1 : 0) + " 1 " + x + "," + y;
        greenBarComponent.setAttribute("d", pathDirectory);
      }

      return formattedIntegerValue;
    }
  }]);

  return Velocimetro;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

function SpeedCountup(props) {
  var delay = Object(react__WEBPACK_IMPORTED_MODULE_7__["useContext"])(_contexts_js__WEBPACK_IMPORTED_MODULE_9__["DelayContext"]) / 1000;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_countup__WEBPACK_IMPORTED_MODULE_8___default.a, {
    start: props.lastValue,
    end: props.speed,
    delay: 0,
    suffix: ".",
    useEasing: false,
    decimals: 2,
    duration: delay,
    formattingFn: props.fmtFn
  });
}

/* harmony default export */ __webpack_exports__["default"] = (Velocimetro);

/***/ }),

/***/ "./config.properties":
/*!***************************!*\
  !*** ./config.properties ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("# TIPO DE OPERAÇÃO\r\n# Valores possíveis:\r\n# BYTES  - Recebimento por Xbee em formato de bytes\r\n# STRING - Recebimento por Xbee ou NRF em formato de string\r\n# API_BYTES  - Recebimento por Xbee em API mode por bytes\r\n# API_STRING - Recebimento por Xbee em API mode por string\r\n# [default = STRING]\r\noperationType = API_BYTES\r\n\r\n# [string] [default = 0013A20041932DC6] Endereço 64bits do xbee transmissor.\r\nxbeeSourceAddress = 0013A20041932DC6\r\n\r\n# PORTA SERIAL\r\n\r\n# [string] [default = ] Nome da porta serial que o dispositivo receptor se encontra. Deixe vazio para identificação automática.\r\nportName = \r\n# [string] [default = ignore-ports.txt] Nome do arquivo de texto, na pasta raiz, contendo nome de portas para serem ignoradas na identificação automática de porta, separados por linha.\r\nignorePortsFile = ignore-ports.txt\r\n\r\n\r\n# NOTIFICAÇÕES\r\n\r\n# [bool] [default = true] Ativar ou desativar notificações\r\nshouldNotify = false\r\n# [number] [default = 10] Limite percentual para acionar a notificação que alerta da proximidade do valor mínimo/máximo\r\npercentageLimitTolerance = 10\r\n# [number] [default = 30000] Tempo de timeout em milissegundos para a notificação ser reacionada caso a condição não mude\r\nnotificationExpirationTimeout = 30000\r\n\r\n\r\n# DATALOG\r\n\r\n# [string] [default = ./datalog/] Caminho para a escrita do datalog. O DIRETÓRIO NÃO É CRIADO, ENTAÃO DEVE, OBRIGATORIAMENTE, EXISTIR.\r\ndatalogFilePath = ./datalog/\r\n# [bool] [default = true] Ativar ou desativar o datalog\r\nshouldWrite = true\r\n# [number]  [default = 30000] Tempo, em milissegundos, de quanto esperar sem receber dados até criar um novo arquivo de texto\r\ndatalogTimeout = 10000\r\n# [bool] [default = false] Incluir timestamp (quantidade de milissegundos desde 1/1/1970 00:00) como primeiro item de cada linha\r\nincludeTimestamp = true\r\n\r\n\r\n# PLOTAGEM EM TEMPO REAL\r\n\r\n# BANCO DE DADOS LOCAL\r\n# [number]  [default = 60000] Tempo, em milissegundos, de persistência dos dados no banco de dados antes de serem eliminados. Altere esse valor para definir de quanto tempo atrás os dados devem ser exibidos.\r\npersistanceTimeout = 60000\r\n# [number] [default = 1000] Período, em milissegundos, para ser acionada a varredura do banco de dados local para eliminar dados antigos\r\ncleanUpTimeout = 1000\r\n\r\n#PLOTAGEM\r\n# [number] [default = 1] Quantidade desejada de pontos por segundo para serem exibidos no gráfico. VALORES ALTOS PODEM COMPROMETER A INTEGRIDADE DO SERVIDOR E DA REDE.\r\npointsPerSecond = 1\r\n\r\n        ");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/json/stringify */ "core-js/library/fn/json/stringify");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-prototype-of */ "core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/set-prototype-of */ "core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/values.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/values.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/values */ "core-js/library/fn/object/values");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/parse-int.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/parse-int */ "core-js/library/fn/parse-int");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/promise.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/promise.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/promise */ "core-js/library/fn/promise");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/reflect/construct.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/reflect/construct.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/reflect/construct */ "core-js/library/fn/reflect/construct");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "core-js/library/fn/symbol");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _asyncToGenerator; });
/* harmony import */ var _core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createClass; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);


function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);

function _extends() {
  _extends = _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _getPrototypeOf; });
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__);


function _getPrototypeOf(o) {
  _getPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default.a ? _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a : function _getPrototypeOf(o) {
    return o.__proto__ || _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inherits; });
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_create__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js");


function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default()(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object(_setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _possibleConstructorReturn; });
/* harmony import */ var _helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/esm/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js");
/* harmony import */ var _assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(self, call) {
  if (call && (Object(_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(self);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__);

function _setPrototypeOf(o, p) {
  _setPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _typeof; });
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol__WEBPACK_IMPORTED_MODULE_1__);



function _typeof2(obj) { if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && typeof _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && _typeof2(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/regenerator/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/regenerator/index.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "regenerator-runtime");


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/reflect/construct */ "./node_modules/@babel/runtime-corejs2/core-js/reflect/construct.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_velocimetro_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/velocimetro.js */ "./components/velocimetro.js");
/* harmony import */ var _components_bateria_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/bateria.js */ "./components/bateria.js");
/* harmony import */ var _components_bms_information_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/bms-information.js */ "./components/bms-information.js");
/* harmony import */ var _components_data_fetcher_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/data-fetcher.js */ "./components/data-fetcher.js");
/* harmony import */ var _static_styles_styles_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../static/styles/styles.css */ "./static/styles/styles.css");
/* harmony import */ var _static_styles_styles_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_static_styles_styles_css__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _components_contexts_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/contexts.js */ "./components/contexts.js");








function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(this).constructor; result = _babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default()(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a) return false; if (_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default()(Boolean, [], function () {})); return true; } catch (e) { return false; } }









var DelayProvider = _components_contexts_js__WEBPACK_IMPORTED_MODULE_14__["DelayContext"].Provider;

var Index = /*#__PURE__*/function (_DataFetcher) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Index, _DataFetcher);

  var _super = _createSuper(Index);

  function Index(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Index);

    _this = _super.call(this, props);
    _this.page = "geral";
    _this.delay = 400;
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Index, [{
    key: "render",
    value: function render() {
      // debugger;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "container-fluid"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(DelayProvider, {
        value: this.delay
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "row d-flex align-items-center index-section"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "col-lg-4 col-12 mt-2 mb-2"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_bms_information_js__WEBPACK_IMPORTED_MODULE_11__["default"], {
        maxtemperature: ((this.state.data || {}).bms || {}).maxTemperature / 10 || 0,
        meantemperature: ((this.state.data || {}).bms || {}).mediaTemperature / 10 || 0,
        minvoltage: ((this.state.data || {}).bms || {}).minVoltage / 10000 || 0,
        airstatus: ((this.state.data || {}).bms || {}).airStatus || 0,
        totalvoltage: ((this.state.data || {}).bms || {}).totalVoltage / 100 || 0,
        glvvoltage: ((this.state.data || {}).bms || {}).glvVoltage / 1000 || 0
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "col-lg-4 col-12 mt-2 mb-2"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_velocimetro_js__WEBPACK_IMPORTED_MODULE_9__["default"], {
        speed: ((this.state.data || {}).control || {}).mediaSpeed || 0
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "col bordered-title-container mt-2 mb-2",
        style: {
          margin: "0px 50px 0px 40px"
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "d-flex justify-content-left"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "component-title bordered-title-text "
      }, "STATUS DE CARGA")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_bateria_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
        charge: _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1___default()(((this.state.data || {}).bms || {}).charge) || 0
      })))));
    }
  }]);

  return Index;
}(_components_data_fetcher_js__WEBPACK_IMPORTED_MODULE_12__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./static/styles/styles.css":
/*!**********************************!*\
  !*** ./static/styles/styles.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\breno\Tesla\DAQ_Tesla\Telemetria\Interface\pages\index.js */"./pages/index.js");


/***/ }),

/***/ "@fortawesome/react-fontawesome":
/*!*************************************************!*\
  !*** external "@fortawesome/react-fontawesome" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

/***/ "chroma-js":
/*!****************************!*\
  !*** external "chroma-js" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("chroma-js");

/***/ }),

/***/ "core-js/library/fn/json/stringify":
/*!****************************************************!*\
  !*** external "core-js/library/fn/json/stringify" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/get-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "core-js/library/fn/object/set-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/set-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "core-js/library/fn/object/values":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/values" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/values");

/***/ }),

/***/ "core-js/library/fn/parse-int":
/*!***********************************************!*\
  !*** external "core-js/library/fn/parse-int" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/parse-int");

/***/ }),

/***/ "core-js/library/fn/promise":
/*!*********************************************!*\
  !*** external "core-js/library/fn/promise" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "core-js/library/fn/reflect/construct":
/*!*******************************************************!*\
  !*** external "core-js/library/fn/reflect/construct" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/reflect/construct");

/***/ }),

/***/ "core-js/library/fn/symbol":
/*!********************************************!*\
  !*** external "core-js/library/fn/symbol" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "core-js/library/fn/symbol/iterator":
/*!*****************************************************!*\
  !*** external "core-js/library/fn/symbol/iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-countup":
/*!********************************!*\
  !*** external "react-countup" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-countup");

/***/ }),

/***/ "react-toastify":
/*!*********************************!*\
  !*** external "react-toastify" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-toastify");

/***/ }),

/***/ "regenerator-runtime":
/*!**************************************!*\
  !*** external "regenerator-runtime" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map