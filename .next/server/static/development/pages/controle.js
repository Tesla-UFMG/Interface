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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/acelerometro-xy.js":
/*!***************************************!*\
  !*** ./components/acelerometro-xy.js ***!
  \***************************************/
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
/* harmony import */ var _components_countup_wrapper_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/countup-wrapper.js */ "./components/countup-wrapper.js");
/* harmony import */ var _components_contexts_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/contexts.js */ "./components/contexts.js");







function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = _babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default()(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a) return false; if (_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default()(Boolean, [], function () {})); return true; } catch (e) { return false; } }





var AcelerometroXY = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(AcelerometroXY, _Component);

  var _super = _createSuper(AcelerometroXY);

  function AcelerometroXY(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, AcelerometroXY);

    _this = _super.call(this, props);
    _this.svgRef = react__WEBPACK_IMPORTED_MODULE_6___default.a.createRef();
    _this.setaRef = react__WEBPACK_IMPORTED_MODULE_6___default.a.createRef();
    _this.caboRef = react__WEBPACK_IMPORTED_MODULE_6___default.a.createRef();
    _this.pontaRef = react__WEBPACK_IMPORTED_MODULE_6___default.a.createRef();
    _this.lastAngle = 0;
    _this.lastGrow = 0;
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(AcelerometroXY, [{
    key: "render",
    value: function render() {
      var setaRotate = "rotate(";
      var x = this.props.x;
      var y = this.props.y;
      var lAngle = this.lastAngle;
      var angle = Math.atan(y / x) * 180 / Math.PI + (x < 0 ? 270 : 90);
      var finalAngle;
      this.lastAngle = angle;
      var complementaryAngle = angle < 0 ? angle + 360 : angle - 360; //busca pelo menor diferença de angulo que resulta na mesma rotação da seta

      var dAc = lAngle - angle;
      var dA = Math.abs(dAc);
      var compAng = angle + 360 * dAc / dA;
      var dC = Math.abs(lAngle - compAng);

      if (dA <= dC) {
        finalAngle = angle;
      } else {
        finalAngle = compAng;
      } //debugger;


      setaRotate += angle + ", 350, 250)";
      var a = 170;
      var b = 70;
      var tanTheta = y / x;
      var xe = x == 0 ? 0 : a * b / Math.sqrt(b * b + tanTheta * tanTheta * a * a);
      var ye = x == 0 ? b : tanTheta * xe;
      var grow = Math.sqrt(Math.pow(xe, 2) + Math.pow(ye, 2));
      var maxg = 4;
      var offset = 10;
      var maxsize = 160 - 26 - offset;
      var norma = Math.sqrt(x * x + y * y);
      if (norma > maxg) norma = maxg;
      var inc = norma / maxg * maxsize;
      grow += offset + inc;
      var lGrow = this.lastGrow;
      this.lastGrow = grow;
      console.log(grow); // if ()

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("svg", {
        ref: this.svgRef,
        style: {
          zoom: 1
        },
        cursor: "default",
        version: "1.1",
        viewBox: "0 0 700 500",
        width: "100%",
        id: "svg_document",
        baseProfile: "full",
        preserveAspectRatio: "xMidYMid meet"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("g", {
        id: "main_group"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("g", {
        ref: this.setaRef,
        id: "seta",
        transform: ""
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(BuildRotateAnimation, {
        lastAngle: lAngle,
        angle: finalAngle
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("rect", {
        ref: this.caboRef,
        stroke: "none",
        height: "0px",
        x: "345px",
        y: "250px",
        id: "seta-cabo",
        strokeWidth: "3px",
        width: "10px",
        fill: "green",
        transform: ""
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(BuildGrowthAnimation, {
        lastHeight: lGrow,
        height: grow
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("polygon", {
        ref: this.pontaRef,
        points: "330," + (250 + grow - 1) + " 370," + (250 + grow - 1) + " 350," + (250 + grow - 1 + 26),
        stroke: "none",
        id: "polygon1",
        strokeWidth: "3px",
        fill: "green",
        transform: ""
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(BuildPointsAnimation, {
        lastGrow: lGrow,
        grow: grow
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("g", {
        id: "g1",
        transform: ""
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("ellipse", {
        stroke: "none",
        cx: "350px",
        transform: "",
        id: "ellipse1",
        cy: "250px",
        fill: "black",
        rx: a,
        ry: b
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("image", {
        x: "187px",
        height: "147px",
        y: "169px",
        id: "image1",
        xlinkHref: "/static/images/carro-lado-iconized.png",
        xlinkRole: "/static/images/carro-lado-iconized.png",
        width: "328px",
        preserveAspectRatio: "xMidYMid meet",
        transform: ""
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("text", {
        stroke: "none",
        style: {
          outlineStyle: "none"
        },
        id: "text1",
        strokeWidth: "1px",
        x: "380px",
        textRendering: "geometricPrecision",
        fontFamily: "Exo",
        fill: "whitesmoke",
        fontSize: "20px",
        y: "308px",
        transform: "",
        fontWeight: "bold",
        textAnchor: "end"
      }, norma.toFixed(1), " G"))));
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var svg = this.svgRef.current;

      if (svg) {
        svg.setCurrentTime(0);
        var seta = this.setaRef.current; //seta.setAttribute("transform", "rotate("+this.lastAngle+", 350, 250)");
      }
    }
  }]);

  return AcelerometroXY;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

function BuildRotateAnimation(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("animateTransform", {
    attributeName: "transform",
    attributeType: "XML",
    type: "rotate",
    values: props.lastAngle + " 350 250;" + props.angle + " 350 250",
    begin: "0s",
    dur: (react__WEBPACK_IMPORTED_MODULE_6___default.a.useContext(_components_contexts_js__WEBPACK_IMPORTED_MODULE_8__["DelayContext"]) / 1000).toFixed(2) + "s",
    repeatCount: "1",
    additive: "replace",
    accumulate: "none",
    id: "animateTransform",
    fill: "freeze"
  });
}

function BuildGrowthAnimation(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("animate", {
    attributeName: "height",
    from: props.lastHeight,
    to: props.height,
    dur: (react__WEBPACK_IMPORTED_MODULE_6___default.a.useContext(_components_contexts_js__WEBPACK_IMPORTED_MODULE_8__["DelayContext"]) / 1000).toFixed(2) + "s",
    begin: "0s",
    repeatCount: "1",
    fill: "freeze"
  });
}

function BuildPointsAnimation(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("animate", {
    attributeName: "points",
    from: "330," + (250 + props.lastGrow - 1) + " 370," + (250 + props.lastGrow - 1) + " 350," + (250 + props.lastGrow - 1 + 26),
    to: "330," + (250 + props.grow - 1) + " 370," + (250 + props.grow - 1) + " 350," + (250 + props.grow - 1 + 26),
    dur: (react__WEBPACK_IMPORTED_MODULE_6___default.a.useContext(_components_contexts_js__WEBPACK_IMPORTED_MODULE_8__["DelayContext"]) / 1000).toFixed(2) + "s",
    begin: "0s",
    repeatCount: "1",
    fill: "freeze"
  });
}

/* harmony default export */ __webpack_exports__["default"] = (AcelerometroXY);

/***/ }),

/***/ "./components/acelerometro-yz.js":
/*!***************************************!*\
  !*** ./components/acelerometro-yz.js ***!
  \***************************************/
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
/* harmony import */ var _components_countup_wrapper_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/countup-wrapper.js */ "./components/countup-wrapper.js");
/* harmony import */ var _components_contexts_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/contexts.js */ "./components/contexts.js");







function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = _babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default()(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a) return false; if (_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default()(Boolean, [], function () {})); return true; } catch (e) { return false; } }





var AcelerometroYZ = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(AcelerometroYZ, _Component);

  var _super = _createSuper(AcelerometroYZ);

  function AcelerometroYZ(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, AcelerometroYZ);

    _this = _super.call(this, props);
    _this.svgRef = react__WEBPACK_IMPORTED_MODULE_6___default.a.createRef();
    _this.lastGrow = 0;
    _this.lastAngle = 0;
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(AcelerometroYZ, [{
    key: "render",
    value: function render() {
      var setaRotate = "rotate(";
      var z = this.props.z;
      var y = this.props.y; //ajusta o angulo dependendo do sinal de z

      var angle = Math.atan(y / z) * 180 / Math.PI + (z < 0 ? 270 : 90);
      var finalAngle;
      var lAngle = this.lastAngle;
      this.lastAngle = angle; //busca pelo menor diferença de angulo que resulta na mesma rotação da seta

      var dAc = lAngle - angle;
      var dA = Math.abs(dAc);
      var compAng = angle + 360 * dAc / dA;
      var dC = Math.abs(lAngle - compAng);

      if (dA <= dC) {
        finalAngle = angle;
      } else {
        finalAngle = compAng;
      }

      setaRotate += angle + ", 250, 250)";
      var maxg = 4;
      var radius = 90;
      var offset = 10;
      var maxsize = 160 - 26 - offset;
      var grow = radius + offset;
      var norma = Math.sqrt(z * z + y * y);
      if (norma > maxg) norma = maxg;
      var inc = norma / maxg * maxsize;
      grow += offset + inc;
      var lGrow = this.lastGrow;
      this.lastGrow = grow;
      console.log(grow);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("svg", {
        ref: this.svgRef,
        version: "1.1",
        baseProfile: "full",
        width: "100%",
        viewBox: "0 0 500 500",
        preserveAspectRatio: "xMidYMid meet",
        id: "svg_document",
        style: {
          zoom: 1
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("g", {
        id: "main_group"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("g", {
        transform: "",
        id: "seta"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(BuildRotateAnimation, {
        lastAngle: lAngle,
        angle: finalAngle
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("rect", {
        stroke: "none",
        x: "245px",
        height: grow,
        y: "250px",
        id: "seta-cabo",
        strokeWidth: "10px",
        width: "10px",
        fill: "green",
        transform: ""
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(BuildGrowthAnimation, {
        lastHeight: lGrow,
        height: grow
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("polygon", {
        points: "230," + (250 + grow - 1) + " 270," + (250 + grow - 1) + " 250," + (250 + grow + 26 - 1) + "",
        stroke: "none",
        id: "polygon1",
        strokeWidth: "3px",
        fill: "green",
        transform: ""
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(BuildPointsAnimation, {
        lastGrow: lGrow,
        grow: grow
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("circle", {
        stroke: "none",
        transform: "",
        id: "circle1",
        strokeWidth: "3px",
        cy: "250px",
        fill: "black",
        r: radius,
        cx: "250px"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("image", {
        x: "166px",
        height: "140px",
        y: "163px",
        id: "image1",
        xlinkHref: "/static/images/carro-frente-iconized.png",
        xlinkRole: "/static/images/carro-frente-iconized.png",
        width: "171.111px",
        preserveAspectRatio: "xMidYMid meet",
        transform: ""
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("text", {
        stroke: "none",
        style: {
          outlineStyle: "none"
        },
        id: "text1",
        strokeWidth: "1px",
        x: "278px",
        textRendering: "geometricPrecision",
        fontFamily: "Exo",
        fontWeight: "bold",
        fill: "whitesmoke",
        fontSize: "20px",
        y: "320px",
        transform: "",
        textAnchor: "end"
      }, norma.toFixed(1), " G")));
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var svg = this.svgRef.current;

      if (svg) {
        svg.setCurrentTime(0); //seta.setAttribute("transform", "rotate("+this.lastAngle+", 350, 250)");
      }
    }
  }]);

  return AcelerometroYZ;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

function BuildRotateAnimation(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("animateTransform", {
    attributeName: "transform",
    attributeType: "XML",
    type: "rotate",
    values: props.lastAngle + " 250 250;" + props.angle + " 250 250",
    begin: "0s",
    dur: (react__WEBPACK_IMPORTED_MODULE_6___default.a.useContext(_components_contexts_js__WEBPACK_IMPORTED_MODULE_8__["DelayContext"]) / 1000).toFixed(2) + "s",
    repeatCount: "1",
    additive: "replace",
    accumulate: "none",
    id: "animateTransform",
    fill: "freeze"
  });
}

function BuildGrowthAnimation(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("animate", {
    attributeName: "height",
    from: props.lastHeight,
    to: props.height,
    dur: (react__WEBPACK_IMPORTED_MODULE_6___default.a.useContext(_components_contexts_js__WEBPACK_IMPORTED_MODULE_8__["DelayContext"]) / 1000).toFixed(2) + "s",
    begin: "0s",
    repeatCount: "1",
    fill: "freeze"
  });
}

function BuildPointsAnimation(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("animate", {
    attributeName: "points",
    from: "230," + (250 + props.lastGrow - 1) + " 270," + (250 + props.lastGrow - 1) + " 250," + (250 + props.lastGrow - 1 + 26),
    to: "230," + (250 + props.grow - 1) + " 270," + (250 + props.grow - 1) + " 250," + (250 + props.grow - 1 + 26),
    dur: (react__WEBPACK_IMPORTED_MODULE_6___default.a.useContext(_components_contexts_js__WEBPACK_IMPORTED_MODULE_8__["DelayContext"]) / 1000).toFixed(2) + "s",
    begin: "0s",
    repeatCount: "1",
    fill: "freeze"
  });
}

/* harmony default export */ __webpack_exports__["default"] = (AcelerometroYZ);

/***/ }),

/***/ "./components/carro-overlay.js":
/*!*************************************!*\
  !*** ./components/carro-overlay.js ***!
  \*************************************/
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
/* harmony import */ var _components_countup_wrapper_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/countup-wrapper.js */ "./components/countup-wrapper.js");
/* harmony import */ var chroma_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! chroma-js */ "chroma-js");
/* harmony import */ var chroma_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(chroma_js__WEBPACK_IMPORTED_MODULE_8__);







function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = _babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default()(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a) return false; if (_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default()(Boolean, [], function () {})); return true; } catch (e) { return false; } }





var CarOverlay = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(CarOverlay, _Component);

  var _super = _createSuper(CarOverlay);

  function CarOverlay() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, CarOverlay);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(CarOverlay, [{
    key: "render",
    value: function render() {
      var colorScale = chroma_js__WEBPACK_IMPORTED_MODULE_8___default.a.scale(['#000000', '#7f0f0c']).domain([80, 200]);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("svg", {
        version: "1.1",
        baseProfile: "full",
        viewBox: "0 0 1240 1080",
        preserveAspectRatio: "xMidYMid meet",
        id: "svg_document",
        style: {
          zoom: 1,
          maxHeight: "100%"
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("g", {
        id: "main_group"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("rect", {
        id: "background_rect",
        fill: "black",
        x: "0px",
        y: "0px",
        width: "1240px",
        height: "1080px",
        visibility: "hidden"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("image", {
        x: "0px",
        height: "1080px",
        y: "0px",
        id: "image1",
        xlinkHref: "/static/images/carro-lowerresolution.png",
        xlinkRole: "/static/images/carro-lowerresolution.png",
        width: "1240px",
        d: "",
        preserveAspectRatio: "xMidYMid meet",
        transform: ""
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("g", {
        transform: "",
        id: "IMD-INFO"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("path", {
        stroke: "darkgreen",
        strokeWidth: "2px",
        id: "path12",
        d: "M694,834 l100,0 a10,10 90 0 0 10,-10 l0,-250 a10,10 90 0 1 10,-10 l100,0 ",
        fill: "none",
        transform: ""
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("path", {
        stroke: "darkgreen",
        strokeWidth: "6",
        id: "path11",
        d: "M893,398 l0,350 a10,10 90 0 0 10,10 l300,0 a10,10 90 0 0 10,-10 l0,-350 a10,10 90 0 0 -10,-10 l-300,0 a10,10 90 0 0 -10,10 ",
        fill: "black",
        strokeLinecap: "butt",
        transform: "",
        strokeLinejoin: "miter"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("g", {
        id: "IMD",
        transform: ""
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("g", {
        transform: "",
        id: "TORQUE-IMD"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("image", {
        x: "918px",
        height: "70px",
        y: "502px",
        id: "image13",
        xlinkHref: "/static/SVGs/gears.svg",
        xlinkRole: "/static/SVGs/gears.svg",
        width: "70px",
        preserveAspectRatio: "xMidYMid meet",
        transform: ""
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_countup_wrapper_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
        end: ((this.props.engine || {}).torque || {}).rightEngine / 10 || 0,
        decimals: 0
      }, function (_ref) {
        var countUpRef = _ref.countUpRef;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("text", {
          ref: countUpRef,
          className: "carro-overlay-value",
          stroke: "none",
          id: "text45",
          strokeWidth: "1px",
          x: "1080px",
          textRendering: "geometricPrecision",
          y: "568px",
          fontFamily: "Exo",
          fill: "whitesmoke",
          fontSize: "25px",
          transform: "",
          textAnchor: "end"
        });
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("text", {
        stroke: "none",
        className: "carro-overlay-value",
        id: "text46",
        strokeWidth: "1px",
        x: "1088px",
        textRendering: "geometricPrecision",
        y: "568px",
        fontFamily: "Exo",
        fill: "whitesmoke",
        fontSize: "25px",
        transform: "",
        textAnchor: "start"
      }, "%"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("text", {
        stroke: "none",
        id: "text47",
        strokeWidth: "1px",
        x: "995px",
        fontWeight: "bold",
        textRendering: "geometricPrecision",
        fontFamily: "Exo",
        fill: "whitesmoke",
        fontSize: "30px",
        y: "535px",
        transform: "",
        textAnchor: "start"
      }, "TORQUE")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("g", {
        transform: "",
        id: "IMD-TITLE"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("text", {
        stroke: "none",
        id: "text54",
        strokeWidth: "1px",
        x: "908px",
        fontWeight: "bold",
        textRendering: "geometricPrecision",
        fontFamily: "Exo",
        fill: "whitesmoke",
        fontSize: "33px",
        y: "436px",
        transform: "",
        textAnchor: "start"
      }, "INVERSOR/MOTOR"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("text", {
        stroke: "none",
        id: "text55",
        strokeWidth: "1px",
        x: "1200px",
        fontWeight: "bold",
        textRendering: "geometricPrecision",
        fontFamily: "Exo",
        fill: "whitesmoke",
        fontSize: "33px",
        y: "474px",
        transform: "",
        textAnchor: "end"
      }, "DIREITO")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("g", {
        transform: "",
        id: "T1-IMD"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("image", {
        x: "1138px",
        height: "70px",
        y: "584px",
        id: "image14",
        xlinkHref: "/static/SVGs/termometer.svg",
        xlinkRole: "/static/SVGs/termometer.svg",
        width: "70px",
        preserveAspectRatio: "xMidYMid meet",
        transform: ""
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_countup_wrapper_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
        end: ((this.props.inverters || {}).temperature || {}).right1 / 10 || 0,
        decimals: 0
      }, function (_ref2) {
        var countUpRef = _ref2.countUpRef;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("text", {
          ref: countUpRef,
          className: "carro-overlay-value",
          stroke: "none",
          id: "text48",
          strokeWidth: "1px",
          x: "971px",
          textRendering: "geometricPrecision",
          y: "647px",
          fontFamily: "Exo",
          fill: "whitesmoke",
          fontSize: "25px",
          transform: "",
          textAnchor: "end"
        });
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("text", {
        stroke: "none",
        id: "text49",
        className: "carro-overlay-value",
        strokeWidth: "1px",
        x: "977px",
        textRendering: "geometricPrecision",
        y: "647px",
        fontFamily: "Exo",
        fill: "whitesmoke",
        fontSize: "25px",
        transform: "",
        textAnchor: "start"
      }, "\xBAC"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("text", {
        stroke: "none",
        id: "text50",
        strokeWidth: "1px",
        x: "904px",
        fontWeight: "bold",
        textRendering: "geometricPrecision",
        fontFamily: "Exo",
        fill: "whitesmoke",
        fontSize: "30px",
        y: "614px",
        transform: "",
        textAnchor: "start"
      }, "TEMPERATURA 1")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("g", {
        transform: "",
        id: "T2-IMD"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("image", {
        x: "900px",
        height: "70px",
        y: "676px",
        id: "image15",
        xlinkHref: "/static/SVGs/termometer.svg",
        xlinkRole: "/static/SVGs/termometer.svg",
        width: "70px",
        preserveAspectRatio: "xMidYMid meet",
        transform: ""
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_countup_wrapper_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
        end: ((this.props.inverters || {}).temperature || {}).right2 / 10 || 0,
        decimals: 0
      }, function (_ref3) {
        var countUpRef = _ref3.countUpRef;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("text", {
          ref: countUpRef,
          className: "carro-overlay-value",
          stroke: "none",
          id: "text51",
          strokeWidth: "1px",
          x: "1143px",
          textRendering: "geometricPrecision",
          y: "740px",
          fontFamily: "Exo",
          fill: "whitesmoke",
          fontSize: "25px",
          transform: "",
          textAnchor: "end"
        });
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("text", {
        stroke: "none",
        id: "text52",
        className: "carro-overlay-value",
        strokeWidth: "1px",
        x: "1175px",
        textRendering: "geometricPrecision",
        y: "740px",
        fontFamily: "Exo",
        fill: "whitesmoke",
        fontSize: "25px",
        transform: "",
        textAnchor: "end"
      }, "\xBAC"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("text", {
        stroke: "none",
        id: "text53",
        strokeWidth: "1px",
        x: "955px",
        fontWeight: "bold",
        textRendering: "geometricPrecision",
        fontFamily: "Exo",
        fill: "whitesmoke",
        fontSize: "30px",
        y: "704px",
        transform: "",
        textAnchor: "start"
      }, "TEMPERATURA 2")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("line", {
        stroke: "#858787",
        y1: "491px",
        strokeWidth: "3px",
        x1: "906px",
        id: "line7",
        y2: "491px",
        x2: "1201px",
        transform: "",
        visibility: "visible"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("circle", {
        stroke: "whitesmoke",
        cx: "694px",
        visibility: "visible",
        strokeWidth: "3px",
        id: "circle3",
        cy: "833px",
        fill: "darkgreen",
        r: "21px",
        transform: ""
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("g", {
        transform: "",
        id: "IME-INFO"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("path", {
        stroke: "darkgreen",
        transform: "",
        strokeWidth: "6",
        id: "path8",
        d: "M23,400 l0,350 a10,10 90 0 0 10,10 l300,0 a10,10 90 0 0 10,-10 l0,-350 a10,10 90 0 0 -10,-10 l-300,0 a10,10 90 0 0 -10,10 ",
        fill: "black",
        strokeLinecap: "butt",
        strokeLinejoin: "miter"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("g", {
        id: "IME",
        transform: ""
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("g", {
        transform: "",
        id: "TORQUE-IME"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_countup_wrapper_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
        end: ((this.props.engine || {}).torque || {}).leftEngine / 10 || 0,
        decimals: 0
      }, function (_ref4) {
        var countUpRef = _ref4.countUpRef;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("text", {
          ref: countUpRef,
          className: "carro-overlay-value",
          stroke: "none",
          id: "text42",
          strokeWidth: "1px",
          x: "208px",
          textRendering: "geometricPrecision",
          y: "566px",
          fontFamily: "Exo",
          fill: "whitesmoke",
          fontSize: "25px",
          transform: "",
          textAnchor: "end"
        });
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("text", {
        stroke: "none",
        id: "text43",
        strokeWidth: "1px",
        x: "216px",
        className: "carro-overlay-value",
        textRendering: "geometricPrecision",
        y: "566px",
        fontFamily: "Exo",
        fill: "whitesmoke",
        fontSize: "25px",
        transform: "",
        textAnchor: "start"
      }, "%"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("text", {
        stroke: "none",
        id: "text44",
        strokeWidth: "1px",
        x: "123px",
        fontWeight: "bold",
        textRendering: "geometricPrecision",
        fontFamily: "Exo",
        fill: "whitesmoke",
        fontSize: "30px",
        y: "533px",
        transform: "",
        textAnchor: "start"
      }, "TORQUE"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("image", {
        x: "42px",
        height: "70",
        y: "504px",
        id: "image10",
        xlinkHref: "/static/SVGs/gears.svg",
        xlinkRole: "/static/SVGs/gears.svg",
        width: "70",
        preserveAspectRatio: "xMidYMid meet",
        transform: ""
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("g", {
        transform: "",
        id: "T1-IME"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_countup_wrapper_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
        end: ((this.props.inverters || {}).temperature || {}).left1 / 10 || 0,
        decimals: 0
      }, function (_ref5) {
        var countUpRef = _ref5.countUpRef;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("text", {
          ref: countUpRef,
          className: "carro-overlay-value",
          stroke: "none",
          id: "text39",
          strokeWidth: "1px",
          x: "99px",
          textRendering: "geometricPrecision",
          y: "645px",
          fontFamily: "Exo",
          fill: "whitesmoke",
          fontSize: "25px",
          transform: "",
          textAnchor: "end"
        });
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("text", {
        stroke: "none",
        id: "text40",
        strokeWidth: "1px",
        x: "105px",
        className: "carro-overlay-value",
        textRendering: "geometricPrecision",
        y: "645px",
        fontFamily: "Exo",
        fill: "whitesmoke",
        fontSize: "25px",
        transform: "",
        textAnchor: "start"
      }, "\xBAC"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("text", {
        stroke: "none",
        id: "text41",
        strokeWidth: "1px",
        x: "32px",
        fontWeight: "bold",
        textRendering: "geometricPrecision",
        fontFamily: "Exo",
        fill: "whitesmoke",
        fontSize: "30px",
        y: "612px",
        transform: "",
        textAnchor: "start"
      }, "TEMPERATURA 1"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("image", {
        x: "268px",
        height: "70px",
        y: "585px",
        id: "image11",
        xlinkHref: "/static/SVGs/termometer.svg",
        xlinkRole: "/static/SVGs/termometer.svg",
        width: "70px",
        preserveAspectRatio: "xMidYMid meet",
        transform: ""
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("g", {
        transform: "",
        id: "T2-IME"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_countup_wrapper_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
        end: ((this.props.inverters || {}).temperature || {}).left2 / 10 || 0,
        decimals: 0
      }, function (_ref6) {
        var countUpRef = _ref6.countUpRef;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("text", {
          ref: countUpRef,
          className: "carro-overlay-value",
          stroke: "none",
          id: "text36",
          strokeWidth: "1px",
          x: "271px",
          textRendering: "geometricPrecision",
          y: "738px",
          fontFamily: "Exo",
          fill: "whitesmoke",
          fontSize: "25px",
          transform: "",
          textAnchor: "end"
        });
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("text", {
        stroke: "none",
        className: "carro-overlay-value",
        id: "text37",
        strokeWidth: "1px",
        x: "303px",
        textRendering: "geometricPrecision",
        y: "738px",
        fontFamily: "Exo",
        fill: "whitesmoke",
        fontSize: "25px",
        transform: "",
        textAnchor: "end"
      }, "\xBAC"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("text", {
        stroke: "none",
        id: "text38",
        strokeWidth: "1px",
        x: "83px",
        fontWeight: "bold",
        textRendering: "geometricPrecision",
        fontFamily: "Exo",
        fill: "whitesmoke",
        fontSize: "30px",
        y: "702px",
        transform: "",
        textAnchor: "start"
      }, "TEMPERATURA 2"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("image", {
        x: "26px",
        height: "70px",
        y: "675px",
        id: "image12",
        xlinkHref: "/static/SVGs/termometer.svg",
        xlinkRole: "/static/SVGs/termometer.svg",
        width: "70px",
        preserveAspectRatio: "xMidYMid meet",
        transform: ""
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("line", {
        stroke: "#858787",
        y1: "489px",
        strokeWidth: "3px",
        x1: "34px",
        id: "line6",
        y2: "489px",
        x2: "329px",
        transform: "",
        visibility: "visible"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("g", {
        transform: "",
        id: "IME-TITLE"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("text", {
        stroke: "none",
        id: "text33",
        strokeWidth: "1px",
        x: "36px",
        fontWeight: "bold",
        textRendering: "geometricPrecision",
        fontFamily: "Exo",
        fill: "whitesmoke",
        fontSize: "33px",
        y: "434px",
        transform: "",
        textAnchor: "start"
      }, "INVERSOR/MOTOR"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("text", {
        stroke: "none",
        id: "text34",
        strokeWidth: "1px",
        x: "34px",
        fontWeight: "bold",
        textRendering: "geometricPrecision",
        fontFamily: "Exo",
        fill: "whitesmoke",
        fontSize: "33px",
        y: "472px",
        transform: "",
        textAnchor: "start"
      }, "ESQUERDO"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("circle", {
        stroke: "whitesmoke",
        cx: "526px",
        strokeWidth: "3px",
        id: "circle2",
        cy: "833px",
        fill: "darkgreen",
        r: "21px",
        transform: ""
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("path", {
        stroke: "darkgreen",
        id: "path10",
        strokeWidth: "2px",
        d: "M524,834 l-80,0 a10,10 90 0 1 -10,-10 l0,-250 a10,10 90 0 0 -10,-10 l-80,0 ",
        fill: "none",
        transform: ""
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("g", {
        transform: "",
        id: "roda-bl"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("polygon", {
        points: "436.552521,892.983032 436.552521,1070.48291 441.552521,1063.98291 441.552521,898.483032",
        stroke: "none",
        strokeWidth: "3px",
        fill: colorScale(((this.props.tires || {}).temperature || {}).backLeft / 100),
        transform: "rotate(-1 440 984.75)",
        id: "polygon4"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("polygon", {
        points: "379.061279,891.979614 379.061279,1069.479614 384.061279,1062.979614 384.061279,897.479614",
        stroke: "none",
        strokeWidth: "3px",
        id: "polygon7",
        fill: colorScale(((this.props.tires || {}).temperature || {}).backLeft / 100),
        transform: "rotate(179 382.043732 981.738159)"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("rect", {
        stroke: "none",
        x: "387.5px",
        height: "179.5px",
        y: "893px",
        strokeWidth: "3px",
        width: "46px",
        id: "rect4",
        fill: colorScale(((this.props.tires || {}).temperature || {}).backLeft / 100),
        transform: "rotate(-1 410.5 982.75)"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("g", {
        transform: "",
        id: "roda-fl"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("polygon", {
        points: "380,340.5 380,518 385,511.5 385,346",
        stroke: "none",
        strokeWidth: "3px",
        fill: colorScale(((this.props.tires || {}).temperature || {}).frontLeft / 100),
        transform: "rotate(180 383 427.25)",
        id: "polygon8"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("polygon", {
        points: "437,337 437,514.5 442,508 442,342.5",
        stroke: "none",
        strokeWidth: "3px",
        fill: colorScale(((this.props.tires || {}).temperature || {}).frontLeft / 100),
        transform: "",
        id: "polygon3"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("rect", {
        stroke: "none",
        x: "388px",
        height: "179.5px",
        y: "336.5px",
        id: "rect1",
        strokeWidth: "3px",
        width: "46px",
        fill: colorScale(((this.props.tires || {}).temperature || {}).frontLeft / 100),
        transform: ""
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("g", {
        transform: "",
        id: "roda-fr"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("polygon", {
        points: "846.5,336.5 846.5,514 851.5,507.5 851.5,342",
        stroke: "none",
        strokeWidth: "3px",
        fill: colorScale(((this.props.tires || {}).temperature || {}).frontRight / 100),
        transform: "",
        id: "polygon5"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("rect", {
        stroke: "none",
        x: "797.5px",
        height: "179px",
        y: "337px",
        strokeWidth: "3px",
        id: "rect3",
        width: "46px",
        fill: colorScale(((this.props.tires || {}).temperature || {}).frontRight / 100),
        transform: ""
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("polygon", {
        points: "-29,339.5 -29,517 -24,510.5 -24,345",
        stroke: "none",
        id: "polygon1",
        strokeWidth: "3px",
        fill: colorScale(((this.props.tires || {}).temperature || {}).frontRight / 100),
        transform: "rotate(180 383 427.25)"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("g", {
        transform: "",
        id: "roda-br"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("polygon", {
        points: "847,892 847,1069.5 852,1063 852,897.5",
        stroke: "none",
        strokeWidth: "3px",
        id: "polygon2",
        fill: colorScale(((this.props.tires || {}).temperature || {}).backRight / 100),
        transform: ""
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("polygon", {
        points: "-29.5,-216 -29.5,-38.5 -24.5,-45 -24.5,-210.5",
        stroke: "none",
        strokeWidth: "3px",
        id: "polygon6",
        fill: colorScale(((this.props.tires || {}).temperature || {}).backRight / 100),
        transform: "rotate(180 383 427.25)"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("rect", {
        stroke: "none",
        x: "798px",
        height: "180.5px",
        y: "891.5px",
        strokeWidth: "3px",
        id: "rect2",
        width: "46px",
        fill: colorScale(((this.props.tires || {}).temperature || {}).backRight / 100),
        transform: ""
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("g", {
        transform: "",
        id: "PTE-INFO"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("path", {
        stroke: "darkgreen",
        strokeWidth: "6",
        id: "path9",
        d: "M25,808 l0,250 a10,10 90 0 0 10,10 l300,0 a10,10 90 0 0 10,-10 l0,-250 a10,10 90 0 0 -10,-10 l-300,0 a10,10 90 0 0 -10,10 ",
        fill: "black",
        strokeLinecap: "butt",
        transform: "",
        strokeLinejoin: "miter"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("path", {
        stroke: "darkgreen",
        strokeWidth: "2px",
        id: "path6",
        d: "M412,919 l0,-80 a10,10 90 0 0 -10,-10 l-60,0 ",
        fill: "none",
        transform: ""
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("circle", {
        stroke: "#000000",
        transform: "",
        strokeWidth: "0px",
        id: "circle1",
        cy: "915px",
        fill: "darkgreen",
        r: "11px",
        cx: "412px"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("g", {
        id: "PTE",
        transform: ""
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("line", {
        stroke: "#858787",
        y1: "900px",
        strokeWidth: "3px",
        x1: "37px",
        id: "line4",
        y2: "900px",
        x2: "332px",
        transform: ""
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("g", {
        transform: "",
        id: "VEL-TE"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("image", {
        x: "44px",
        height: "70px",
        y: "916px",
        id: "image7",
        xlinkHref: "/static/SVGs/speedometer.svg",
        xlinkRole: "/static/SVGs/speedometer.svg",
        width: "70px",
        preserveAspectRatio: "xMidYMid meet",
        transform: ""
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_countup_wrapper_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
        end: ((this.props.tires || {}).speed || {}).backLeft || 0,
        decimals: 0
      }, function (_ref7) {
        var countUpRef = _ref7.countUpRef;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("text", {
          ref: countUpRef,
          className: "carro-overlay-value",
          stroke: "none",
          strokeWidth: "1px",
          x: "231px",
          textRendering: "geometricPrecision",
          y: "975px",
          fontFamily: "Exo",
          fill: "whitesmoke",
          fontSize: "25px",
          transform: "",
          textAnchor: "end",
          id: "text25"
        });
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("text", {
        stroke: "none",
        className: "carro-overlay-value",
        strokeWidth: "1px",
        x: "271px",
        textRendering: "geometricPrecision",
        y: "976px",
        fontFamily: "Exo",
        fill: "whitesmoke",
        fontSize: "25px",
        transform: "",
        textAnchor: "middle",
        id: "text26"
      }, "RPM"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("text", {
        stroke: "none",
        id: "text27",
        strokeWidth: "1px",
        x: "210px",
        fontWeight: "bold",
        textRendering: "geometricPrecision",
        fontFamily: "Exo",
        fill: "whitesmoke",
        fontSize: "30px",
        y: "945px",
        transform: "",
        textAnchor: "middle"
      }, "VELOCIDADE")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("g", {
        transform: "",
        id: "PTE-TEXT"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("text", {
        stroke: "none",
        strokeWidth: "1px",
        x: "39px",
        fontWeight: "bold",
        textRendering: "geometricPrecision",
        fontFamily: "Exo",
        fill: "whitesmoke",
        fontSize: "35px",
        y: "882px",
        transform: "",
        textAnchor: "start",
        id: "text28"
      }, "ESQUERDO"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("text", {
        stroke: "none",
        strokeWidth: "1px",
        x: "39px",
        fontWeight: "bold",
        textRendering: "geometricPrecision",
        fontFamily: "Exo",
        fill: "whitesmoke",
        fontSize: "35px",
        y: "842px",
        transform: "",
        textAnchor: "start",
        id: "text29"
      }, "PNEU TRASEIRO")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("g", {
        transform: "",
        id: "TEMP-TE"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("text", {
        stroke: "none",
        strokeWidth: "1px",
        x: "266px",
        fontWeight: "bold",
        textRendering: "geometricPrecision",
        fontFamily: "Exo",
        fill: "whitesmoke",
        fontSize: "30px",
        y: "1020px",
        transform: "",
        textAnchor: "end",
        id: "text30"
      }, "TEMPERATURA"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_countup_wrapper_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
        end: ((this.props.tires || {}).temperature || {}).backLeft / 100 || 0,
        decimals: 0
      }, function (_ref8) {
        var countUpRef = _ref8.countUpRef;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("text", {
          ref: countUpRef,
          className: "carro-overlay-value",
          stroke: "none",
          strokeWidth: "1px",
          x: "101px",
          textRendering: "geometricPrecision",
          y: "1051px",
          fontFamily: "Exo",
          fill: "whitesmoke",
          fontSize: "25px",
          transform: "",
          textAnchor: "end",
          id: "text31"
        });
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("text", {
        stroke: "none",
        className: "carro-overlay-value",
        strokeWidth: "1px",
        x: "137px",
        textRendering: "geometricPrecision",
        y: "1051px",
        fontFamily: "Exo",
        fill: "whitesmoke",
        fontSize: "25px",
        transform: "",
        textAnchor: "end",
        id: "text32"
      }, "\xBAC"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("image", {
        x: "253px",
        height: "70px",
        y: "989px",
        id: "image8",
        xlinkHref: "/static/SVGs/termometer.svg",
        xlinkRole: "/static/SVGs/termometer.svg",
        width: "70px",
        preserveAspectRatio: "xMidYMid meet",
        transform: ""
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("g", {
        transform: "",
        id: "PDE-INFO"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("circle", {
        stroke: "#000000",
        cx: "412px",
        strokeWidth: "0px",
        id: "circle4",
        cy: "353px",
        fill: "darkgreen",
        r: "11px",
        transform: ""
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("path", {
        stroke: "darkgreen",
        id: "path1",
        strokeWidth: "2px",
        d: "M412,357 l0,-253 a10,10 90 0 0 -10,-10 l-60,0 ",
        fill: "none",
        transform: ""
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("path", {
        stroke: "darkgreen",
        strokeWidth: "6",
        id: "path4",
        d: "M21,88 l0,250 a10,10 90 0 0 10,10 l300,0 a10,10 90 0 0 10,-10 l0,-250 a10,10 90 0 0 -10,-10 l-300,0 a10,10 90 0 0 -10,10 ",
        fill: "black",
        strokeLinecap: "butt",
        transform: "",
        strokeLinejoin: "miter"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("g", {
        id: "PDE",
        transform: ""
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("g", {
        transform: "",
        id: "PDE-TEXT"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("text", {
        stroke: "none",
        id: "text10",
        strokeWidth: "1px",
        x: "36px",
        fontWeight: "bold",
        textRendering: "geometricPrecision",
        fontFamily: "Exo",
        fill: "whitesmoke",
        fontSize: "35px",
        y: "162px",
        transform: "",
        textAnchor: "start"
      }, "ESQUERDO"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("text", {
        stroke: "none",
        id: "text9",
        strokeWidth: "1px",
        x: "180px",
        fontWeight: "bold",
        textRendering: "geometricPrecision",
        fontFamily: "Exo",
        fill: "whitesmoke",
        fontSize: "35px",
        y: "122px",
        transform: "",
        textAnchor: "middle"
      }, "PNEU DIANTEIRO")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("line", {
        stroke: "#858787",
        y1: "175px",
        strokeWidth: "3px",
        x1: "32px",
        id: "line2",
        y2: "175px",
        x2: "327px",
        transform: ""
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("g", {
        transform: "",
        id: "VEL-DE"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("image", {
        x: "40px",
        height: "70px",
        y: "186px",
        id: "image4",
        xlinkHref: "/static/SVGs/speedometer.svg",
        xlinkRole: "/static/SVGs/speedometer.svg",
        width: "70px",
        preserveAspectRatio: "xMidYMid meet",
        transform: ""
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_countup_wrapper_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
        end: ((this.props.tires || {}).speed || {}).frontLeft / 10 / 3.6 / (52.07 / 100 * Math.PI) * 60 || 0,
        decimals: 0
      }, function (_ref9) {
        var countUpRef = _ref9.countUpRef;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("text", {
          ref: countUpRef,
          className: "carro-overlay-value",
          stroke: "none",
          id: "text12",
          strokeWidth: "1px",
          x: "228px",
          textRendering: "geometricPrecision",
          y: "251px",
          fontFamily: "Exo",
          fill: "whitesmoke",
          fontSize: "25px",
          transform: "",
          textAnchor: "end"
        });
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("text", {
        stroke: "none",
        id: "text13",
        className: "carro-overlay-value",
        strokeWidth: "1px",
        x: "268px",
        textRendering: "geometricPrecision",
        y: "252px",
        fontFamily: "Exo",
        fill: "whitesmoke",
        fontSize: "25px",
        transform: "",
        textAnchor: "middle"
      }, "RPM"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("text", {
        stroke: "none",
        id: "text11",
        strokeWidth: "1px",
        x: "207px",
        fontWeight: "bold",
        textRendering: "geometricPrecision",
        fontFamily: "Exo",
        fill: "whitesmoke",
        fontSize: "30px",
        y: "221px",
        transform: "",
        textAnchor: "middle"
      }, "VELOCIDADE")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("g", {
        transform: "",
        id: "TEMP-DE"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("text", {
        stroke: "none",
        id: "text14",
        strokeWidth: "1px",
        x: "263px",
        fontWeight: "bold",
        textRendering: "geometricPrecision",
        fontFamily: "Exo",
        fill: "whitesmoke",
        fontSize: "30px",
        y: "296px",
        transform: "",
        textAnchor: "end"
      }, "TEMPERATURA"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_countup_wrapper_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
        end: ((this.props.tires || {}).temperature || {}).frontLeft / 100 || 0,
        decimals: 0
      }, function (_ref10) {
        var countUpRef = _ref10.countUpRef;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("text", {
          ref: countUpRef,
          className: "carro-overlay-value",
          stroke: "none",
          id: "text15",
          strokeWidth: "1px",
          x: "98px",
          textRendering: "geometricPrecision",
          y: "327px",
          fontFamily: "Exo",
          fill: "whitesmoke",
          fontSize: "25px",
          transform: "",
          textAnchor: "end"
        });
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("text", {
        stroke: "none",
        id: "text16",
        className: "carro-overlay-value",
        strokeWidth: "1px",
        x: "134px",
        textRendering: "geometricPrecision",
        y: "327px",
        fontFamily: "Exo",
        fill: "whitesmoke",
        fontSize: "25px",
        transform: "",
        textAnchor: "end"
      }, "\xBAC"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("image", {
        x: "252px",
        height: "70px",
        y: "262px",
        id: "image6",
        xlinkHref: "/static/SVGs/termometer.svg",
        xlinkRole: "/static/SVGs/termometer.svg",
        width: "70px",
        preserveAspectRatio: "xMidYMid meet",
        transform: ""
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("g", {
        transform: "",
        id: "PDD-INFO"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("path", {
        stroke: "darkgreen",
        strokeWidth: "2px",
        id: "path5",
        d: "M823,352 l0,-253 a10,10 90 0 1 10,-10 l60,0 ",
        fill: "none",
        transform: ""
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("path", {
        stroke: "darkgreen",
        strokeWidth: "6",
        id: "path3",
        d: "M894,88 l0,250 a10,10 90 0 0 10,10 l300,0 a10,10 90 0 0 10,-10 l0,-250 a10,10 90 0 0 -10,-10 l-300,0 a10,10 90 0 0 -10,10 ",
        fill: "black",
        strokeLinecap: "butt",
        transform: "",
        strokeLinejoin: "miter"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("g", {
        id: "PDD",
        transform: ""
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("g", {
        transform: "",
        id: "TEMP-PDD"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("image", {
        x: "1124px",
        height: "70",
        y: "265px",
        id: "image3",
        xlinkHref: "/static/SVGs/termometer.svg",
        xlinkRole: "/static/SVGs/termometer.svg",
        width: "70",
        preserveAspectRatio: "xMidYMid meet",
        transform: ""
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("text", {
        stroke: "none",
        id: "text2",
        strokeWidth: "1px",
        x: "1131px",
        fontWeight: "bold",
        textRendering: "geometricPrecision",
        fontFamily: "Exo",
        fill: "whitesmoke",
        fontSize: "30px",
        y: "292px",
        transform: "",
        textAnchor: "end"
      }, "TEMPERATURA"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_countup_wrapper_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
        end: ((this.props.tires || {}).temperature || {}).frontRight / 10 / 3.6 / (52.07 / 100 * Math.PI) * 60 || 0,
        decimals: 0
      }, function (_ref11) {
        var countUpRef = _ref11.countUpRef;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("text", {
          ref: countUpRef,
          className: "carro-overlay-value",
          stroke: "none",
          id: "text4",
          strokeWidth: "1px",
          x: "966px",
          textRendering: "geometricPrecision",
          fontFamily: "Exo",
          y: "323px",
          fill: "whitesmoke",
          fontSize: "25px",
          transform: "",
          textAnchor: "end"
        });
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("text", {
        stroke: "none",
        id: "text5",
        strokeWidth: "1px",
        x: "1002px",
        className: "carro-overlay-value",
        textRendering: "geometricPrecision",
        y: "323px",
        fontFamily: "Exo",
        fill: "whitesmoke",
        fontSize: "25px",
        transform: "",
        textAnchor: "end"
      }, "\xBAC")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("g", {
        transform: "",
        id: "VEL-DD"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("image", {
        x: "907px",
        height: "70",
        y: "185px",
        id: "image2",
        xlinkHref: "/static/SVGs/speedometer.svg",
        xlinkRole: "/static/SVGs/speedometer.svg",
        width: "70",
        preserveAspectRatio: "xMidYMid meet",
        transform: ""
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("line", {
        stroke: "#858787",
        y1: "175px",
        x1: "908px",
        strokeWidth: "3px",
        y2: "175px",
        x2: "1203px",
        transform: "",
        id: "line3"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("text", {
        stroke: "none",
        id: "text6",
        strokeWidth: "1px",
        x: "1073px",
        fontWeight: "bold",
        textRendering: "geometricPrecision",
        fontFamily: "Exo",
        fill: "whitesmoke",
        fontSize: "30px",
        y: "217px",
        transform: "",
        textAnchor: "middle"
      }, "VELOCIDADE"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_countup_wrapper_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
        end: ((this.props.tires || {}).speed || {}).frontRight / 10 || 0,
        decimals: 0
      }, function (_ref12) {
        var countUpRef = _ref12.countUpRef;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("text", {
          ref: countUpRef,
          className: "carro-overlay-value",
          stroke: "none",
          id: "text7",
          strokeWidth: "1px",
          x: "1098px",
          textRendering: "geometricPrecision",
          y: "247px",
          fontFamily: "Exo",
          fill: "whitesmoke",
          fontSize: "25px",
          transform: "",
          textAnchor: "end"
        });
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("text", {
        stroke: "none",
        className: "carro-overlay-value",
        id: "text8",
        strokeWidth: "1px",
        x: "1138px",
        textRendering: "geometricPrecision",
        y: "248px",
        fontFamily: "Exo",
        fill: "whitesmoke",
        fontSize: "25px",
        transform: "",
        textAnchor: "middle"
      }, "RPM")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("g", {
        transform: "",
        id: "PDD-TEXT"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("text", {
        stroke: "none",
        id: "text1",
        strokeWidth: "1px",
        x: "1050px",
        fontWeight: "bold",
        textRendering: "geometricPrecision",
        fontFamily: "Exo",
        fill: "whitesmoke",
        fontSize: "35px",
        y: "122px",
        transform: "",
        textAnchor: "middle"
      }, "PNEU DIANTEIRO"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("text", {
        stroke: "none",
        id: "text3",
        strokeWidth: "1px",
        x: "1124px",
        fontWeight: "bold",
        textRendering: "geometricPrecision",
        fontFamily: "Exo",
        fill: "whitesmoke",
        fontSize: "35px",
        y: "163px",
        transform: "",
        textAnchor: "middle"
      }, "DIREITO")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("line", {
        stroke: "#858787",
        y1: "175px",
        id: "line1",
        x1: "908px",
        strokeWidth: "3px",
        y2: "175px",
        x2: "1203px",
        transform: ""
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("circle", {
        stroke: "#000000",
        strokeWidth: "0px",
        cy: "353px",
        id: "circle5",
        fill: "darkgreen",
        r: "11px",
        cx: "823px",
        transform: ""
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("g", {
        transform: "",
        id: "PTD-INFO"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("path", {
        stroke: "darkgreen",
        strokeWidth: "2px",
        id: "path7",
        d: "M824,907 l0,-80 a10,10 90 0 1 10,-10 l60,0 ",
        fill: "none",
        transform: ""
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("path", {
        stroke: "darkgreen",
        strokeLinejoin: "miter",
        strokeWidth: "6",
        id: "path2",
        d: "M893,804 l0,250 a10,10 90 0 0 10,10 l300,0 a10,10 90 0 0 10,-10 l0,-250 a10,10 90 0 0 -10,-10 l-300,0 a10,10 90 0 0 -10,10 ",
        fill: "black",
        strokeLinecap: "butt",
        transform: ""
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("circle", {
        stroke: "#000000",
        cx: "824px",
        strokeWidth: "0px",
        id: "circle6",
        cy: "911px",
        fill: "darkgreen",
        r: "11px",
        transform: ""
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("g", {
        transform: "",
        id: "PTD"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("line", {
        stroke: "#858787",
        y1: "899px",
        strokeWidth: "3px",
        x1: "907px",
        id: "line5",
        y2: "899px",
        x2: "1202px",
        transform: ""
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("g", {
        transform: "",
        id: "VEL-TD"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("image", {
        x: "914px",
        height: "70px",
        y: "912px",
        id: "image5",
        xlinkHref: "/static/SVGs/speedometer.svg",
        xlinkRole: "/static/SVGs/speedometer.svg",
        width: "70px",
        preserveAspectRatio: "xMidYMid meet",
        transform: ""
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_countup_wrapper_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
        end: ((this.props.tires || {}).speed || {}).backRight || 0,
        decimals: 0
      }, function (_ref13) {
        var countUpRef = _ref13.countUpRef;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("text", {
          ref: countUpRef,
          className: "carro-overlay-value",
          stroke: "none",
          id: "text19",
          strokeWidth: "1px",
          x: "1101px",
          textRendering: "geometricPrecision",
          y: "974px",
          fontFamily: "Exo",
          fill: "whitesmoke",
          fontSize: "25px",
          transform: "",
          textAnchor: "end"
        });
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("text", {
        stroke: "none",
        id: "text20",
        className: "carro-overlay-value",
        strokeWidth: "1px",
        x: "1141px",
        textRendering: "geometricPrecision",
        y: "975px",
        fontFamily: "Exo",
        fill: "whitesmoke",
        fontSize: "25px",
        transform: "",
        textAnchor: "middle"
      }, "RPM"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("text", {
        stroke: "none",
        id: "text21",
        strokeWidth: "1px",
        x: "1080px",
        fontWeight: "bold",
        textRendering: "geometricPrecision",
        fontFamily: "Exo",
        fill: "whitesmoke",
        fontSize: "30px",
        y: "944px",
        transform: "",
        textAnchor: "middle"
      }, "VELOCIDADE")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("g", {
        id: "PTD-TEXT",
        transform: ""
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("text", {
        stroke: "none",
        id: "text17",
        strokeWidth: "1px",
        x: "1180px",
        fontWeight: "bold",
        textRendering: "geometricPrecision",
        fontFamily: "Exo",
        fill: "whitesmoke",
        fontSize: "35px",
        y: "881px",
        transform: "",
        textAnchor: "end"
      }, "DIREITO"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("text", {
        stroke: "none",
        id: "text18",
        strokeWidth: "1px",
        x: "909px",
        fontWeight: "bold",
        textRendering: "geometricPrecision",
        fontFamily: "Exo",
        fill: "whitesmoke",
        fontSize: "35px",
        y: "841px",
        transform: "",
        textAnchor: "start"
      }, "PNEU TRASEIRO")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("g", {
        transform: "",
        id: "TEMP-TD"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("image", {
        x: "1122px",
        height: "70px",
        y: "988px",
        id: "image9",
        xlinkHref: "/static/SVGs/termometer.svg",
        xlinkRole: "/static/SVGs/termometer.svg",
        width: "70px",
        preserveAspectRatio: "xMidYMid meet",
        transform: ""
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("text", {
        stroke: "none",
        id: "text22",
        strokeWidth: "1px",
        x: "1136px",
        fontWeight: "bold",
        textRendering: "geometricPrecision",
        fontFamily: "Exo",
        fill: "whitesmoke",
        fontSize: "30px",
        y: "1019px",
        transform: "",
        textAnchor: "end"
      }, "TEMPERATURA"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_countup_wrapper_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
        end: ((this.props.tires || {}).temperature || {}).backRight / 100 || 0,
        decimals: 0
      }, function (_ref14) {
        var countUpRef = _ref14.countUpRef;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("text", {
          ref: countUpRef,
          className: "carro-overlay-value",
          stroke: "none",
          id: "text23",
          strokeWidth: "1px",
          x: "971px",
          textRendering: "geometricPrecision",
          y: "1050px",
          fontFamily: "Exo",
          fill: "whitesmoke",
          fontSize: "25px",
          transform: "",
          textAnchor: "end"
        });
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("text", {
        className: "carro-overlay-value",
        stroke: "none",
        id: "text24",
        strokeWidth: "1px",
        x: "1007px",
        textRendering: "geometricPrecision",
        y: "1050px",
        fontFamily: "Exo",
        fill: "whitesmoke",
        fontSize: "25px",
        transform: "",
        textAnchor: "end"
      }, "\xBAC")))));
    }
  }]);

  return CarOverlay;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (CarOverlay);

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
    index: 1,
    name: "current0",
    id: 50,
    pos: 0
  },
  current1: {
    index: 2,
    name: "current1",
    id: 50,
    pos: 1
  },
  current2: {
    index: 3,
    name: "current2",
    id: 50,
    pos: 2
  },
  current3: {
    index: 4,
    name: "current3",
    id: 50,
    pos: 3
  },
  glvVoltage: {
    index: 5,
    name: "glvVoltage",
    id: 51,
    pos: 0
  },
  chargePercent: {
    index: 6,
    name: "chargePercent",
    id: 51,
    pos: 1
  },
  totalVoltage: {
    index: 7,
    name: "totalVoltage",
    id: 52,
    pos: 1
  },
  maxTemperature: {
    index: 8,
    name: "maxTemperature",
    id: 52,
    pos: 3
  },
  minVoltage: {
    index: 9,
    name: "minVoltage",
    id: 53,
    pos: 0
  },

  /*pack 0*/
  cell000: {
    index: 10,
    name: "cell000",
    id: 281,
    pos: 0
  },
  cell001: {
    index: 11,
    name: "cell001",
    id: 281,
    pos: 1
  },
  cell002: {
    index: 12,
    name: "cell002",
    id: 281,
    pos: 2
  },
  cell003: {
    index: 13,
    name: "cell003",
    id: 281,
    pos: 3
  },
  cell004: {
    index: 14,
    name: "cell004",
    id: 282,
    pos: 0
  },
  cell005: {
    index: 15,
    name: "cell005",
    id: 282,
    pos: 1
  },
  cell006: {
    index: 16,
    name: "cell006",
    id: 282,
    pos: 2
  },
  cell007: {
    index: 17,
    name: "cell007",
    id: 282,
    pos: 3
  },
  cell008: {
    index: 18,
    name: "cell008",
    id: 283,
    pos: 0
  },
  cell009: {
    index: 19,
    name: "cell009",
    id: 283,
    pos: 1
  },
  cell010: {
    index: 20,
    name: "cell010",
    id: 283,
    pos: 2
  },
  cell011: {
    index: 21,
    name: "cell011",
    id: 283,
    pos: 3
  },
  cell012: {
    index: 22,
    name: "cell012",
    id: 284,
    pos: 0
  },
  temp001: {
    index: 23,
    name: "temp001",
    id: 284,
    pos: 1
  },
  temp002: {
    index: 24,
    name: "temp002",
    id: 284,
    pos: 2
  },
  temp003: {
    index: 25,
    name: "temp003",
    id: 284,
    pos: 3
  },
  temp004: {
    index: 26,
    name: "temp004",
    id: 285,
    pos: 0
  },
  temp005: {
    index: 27,
    name: "temp005",
    id: 285,
    pos: 1
  },

  /*pack 1*/
  cell100: {
    index: 28,
    name: "cell100",
    id: 276,
    pos: 0
  },
  cell101: {
    index: 29,
    name: "cell101",
    id: 276,
    pos: 1
  },
  cell102: {
    index: 30,
    name: "cell102",
    id: 276,
    pos: 2
  },
  cell103: {
    index: 31,
    name: "cell103",
    id: 276,
    pos: 3
  },
  cell104: {
    index: 32,
    name: "cell104",
    id: 277,
    pos: 0
  },
  cell105: {
    index: 33,
    name: "cell105",
    id: 277,
    pos: 1
  },
  cell106: {
    index: 34,
    name: "cell106",
    id: 277,
    pos: 2
  },
  cell107: {
    index: 35,
    name: "cell107",
    id: 277,
    pos: 3
  },
  cell108: {
    index: 36,
    name: "cell108",
    id: 278,
    pos: 0
  },
  cell109: {
    index: 37,
    name: "cell109",
    id: 278,
    pos: 1
  },
  cell110: {
    index: 38,
    name: "cell110",
    id: 278,
    pos: 2
  },
  cell111: {
    index: 39,
    name: "cell111",
    id: 278,
    pos: 3
  },
  cell112: {
    index: 40,
    name: "cell112",
    id: 279,
    pos: 0
  },
  temp101: {
    index: 41,
    name: "temp101",
    id: 279,
    pos: 1
  },
  temp102: {
    index: 42,
    name: "temp102",
    id: 279,
    pos: 2
  },
  temp103: {
    index: 43,
    name: "temp103",
    id: 279,
    pos: 3
  },
  temp104: {
    index: 44,
    name: "temp104",
    id: 280,
    pos: 0
  },
  temp105: {
    index: 45,
    name: "temp105",
    id: 280,
    pos: 1
  },

  /*pack 2*/
  cell200: {
    index: 46,
    name: "cell200",
    id: 271,
    pos: 0
  },
  cell201: {
    index: 47,
    name: "cell201",
    id: 271,
    pos: 1
  },
  cell202: {
    index: 48,
    name: "cell202",
    id: 271,
    pos: 2
  },
  cell203: {
    index: 49,
    name: "cell203",
    id: 271,
    pos: 3
  },
  cell204: {
    index: 50,
    name: "cell204",
    id: 272,
    pos: 0
  },
  cell205: {
    index: 51,
    name: "cell205",
    id: 272,
    pos: 1
  },
  cell206: {
    index: 52,
    name: "cell206",
    id: 272,
    pos: 2
  },
  cell207: {
    index: 53,
    name: "cell207",
    id: 272,
    pos: 3
  },
  cell208: {
    index: 54,
    name: "cell208",
    id: 273,
    pos: 0
  },
  cell209: {
    index: 55,
    name: "cell209",
    id: 273,
    pos: 1
  },
  cell210: {
    index: 56,
    name: "cell210",
    id: 273,
    pos: 2
  },
  cell211: {
    index: 57,
    name: "cell211",
    id: 273,
    pos: 3
  },
  cell212: {
    index: 58,
    name: "cell212",
    id: 274,
    pos: 0
  },
  temp201: {
    index: 59,
    name: "temp201",
    id: 274,
    pos: 1
  },
  temp202: {
    index: 60,
    name: "temp202",
    id: 274,
    pos: 2
  },
  temp203: {
    index: 61,
    name: "temp203",
    id: 274,
    pos: 3
  },
  temp204: {
    index: 62,
    name: "temp204",
    id: 275,
    pos: 0
  },
  temp205: {
    index: 63,
    name: "temp205",
    id: 275,
    pos: 1
  },

  /*pack 3*/
  cell300: {
    index: 64,
    name: "cell300",
    id: 266,
    pos: 0
  },
  cell301: {
    index: 65,
    name: "cell301",
    id: 266,
    pos: 1
  },
  cell302: {
    index: 66,
    name: "cell302",
    id: 266,
    pos: 2
  },
  cell303: {
    index: 67,
    name: "cell303",
    id: 266,
    pos: 3
  },
  cell304: {
    index: 68,
    name: "cell304",
    id: 267,
    pos: 0
  },
  cell305: {
    index: 69,
    name: "cell305",
    id: 267,
    pos: 1
  },
  cell306: {
    index: 70,
    name: "cell306",
    id: 267,
    pos: 2
  },
  cell307: {
    index: 71,
    name: "cell307",
    id: 267,
    pos: 3
  },
  cell308: {
    index: 72,
    name: "cell308",
    id: 268,
    pos: 0
  },
  cell309: {
    index: 73,
    name: "cell309",
    id: 268,
    pos: 1
  },
  cell310: {
    index: 74,
    name: "cell310",
    id: 268,
    pos: 2
  },
  cell311: {
    index: 75,
    name: "cell311",
    id: 268,
    pos: 3
  },
  cell312: {
    index: 76,
    name: "cell312",
    id: 269,
    pos: 0
  },
  temp301: {
    index: 77,
    name: "temp301",
    id: 269,
    pos: 1
  },
  temp302: {
    index: 78,
    name: "temp302",
    id: 269,
    pos: 2
  },
  temp303: {
    index: 79,
    name: "temp303",
    id: 269,
    pos: 3
  },
  temp304: {
    index: 80,
    name: "temp304",
    id: 270,
    pos: 0
  },
  temp305: {
    index: 81,
    name: "temp305",
    id: 270,
    pos: 1
  },

  /*pack 4*/
  cell400: {
    index: 82,
    name: "cell400",
    id: 256,
    pos: 0
  },
  cell401: {
    index: 83,
    name: "cell401",
    id: 256,
    pos: 1
  },
  cell402: {
    index: 84,
    name: "cell402",
    id: 256,
    pos: 2
  },
  cell403: {
    index: 85,
    name: "cell403",
    id: 256,
    pos: 3
  },
  cell404: {
    index: 86,
    name: "cell404",
    id: 257,
    pos: 0
  },
  cell405: {
    index: 87,
    name: "cell405",
    id: 257,
    pos: 1
  },
  cell406: {
    index: 88,
    name: "cell406",
    id: 257,
    pos: 2
  },
  cell407: {
    index: 89,
    name: "cell407",
    id: 257,
    pos: 3
  },
  cell408: {
    index: 90,
    name: "cell408",
    id: 258,
    pos: 0
  },
  cell409: {
    index: 91,
    name: "cell409",
    id: 258,
    pos: 1
  },
  cell410: {
    index: 92,
    name: "cell410",
    id: 258,
    pos: 2
  },
  cell411: {
    index: 93,
    name: "cell411",
    id: 258,
    pos: 3
  },
  cell412: {
    index: 94,
    name: "cell412",
    id: 259,
    pos: 0
  },
  temp401: {
    index: 95,
    name: "temp401",
    id: 259,
    pos: 1
  },
  temp402: {
    index: 96,
    name: "temp402",
    id: 259,
    pos: 2
  },
  temp403: {
    index: 97,
    name: "temp403",
    id: 259,
    pos: 3
  },
  temp404: {
    index: 98,
    name: "temp404",
    id: 260,
    pos: 0
  },
  temp405: {
    index: 99,
    name: "temp405",
    id: 260,
    pos: 1
  },

  /*pack 5*/
  cell500: {
    index: 100,
    name: "cell500",
    id: 261,
    pos: 0
  },
  cell501: {
    index: 101,
    name: "cell501",
    id: 261,
    pos: 1
  },
  cell502: {
    index: 102,
    name: "cell502",
    id: 261,
    pos: 2
  },
  cell503: {
    index: 103,
    name: "cell503",
    id: 261,
    pos: 3
  },
  cell504: {
    index: 104,
    name: "cell504",
    id: 262,
    pos: 0
  },
  cell505: {
    index: 105,
    name: "cell505",
    id: 262,
    pos: 1
  },
  cell506: {
    index: 106,
    name: "cell506",
    id: 262,
    pos: 2
  },
  cell507: {
    index: 107,
    name: "cell507",
    id: 262,
    pos: 3
  },
  cell508: {
    index: 108,
    name: "cell508",
    id: 263,
    pos: 0
  },
  cell509: {
    index: 109,
    name: "cell509",
    id: 263,
    pos: 1
  },
  cell510: {
    index: 110,
    name: "cell510",
    id: 263,
    pos: 2
  },
  cell511: {
    index: 111,
    name: "cell511",
    id: 263,
    pos: 3
  },
  cell512: {
    index: 112,
    name: "cell512",
    id: 264,
    pos: 0
  },
  temp501: {
    index: 113,
    name: "temp501",
    id: 264,
    pos: 1
  },
  temp502: {
    index: 114,
    name: "temp502",
    id: 264,
    pos: 2
  },
  temp503: {
    index: 115,
    name: "temp503",
    id: 264,
    pos: 3
  },
  temp504: {
    index: 116,
    name: "temp504",
    id: 265,
    pos: 0
  },
  temp505: {
    index: 117,
    name: "temp505",
    id: 265,
    pos: 1
  },

  /*controle geral*/
  // todos os valores da tabela hash de controle estão aqui caso queira que se adicione coisas na janela
  // temos que fazer um filtro desses dados no momento em que formos refatora-lá
  steeringWheel: {
    index: 118,
    name: "steeringWheel",
    id: 101,
    pos: 1
  },
  pedalAcelerador: {
    index: 119,
    name: "pedalAcelerador",
    id: 101,
    pos: 2
  },
  pedalFreio: {
    index: 120,
    name: "pedalFreio",
    id: 101,
    pos: 3
  },
  selectedMode: {
    index: 121,
    name: "selectedMode",
    id: 102,
    pos: 0
  },
  frenagemRegenerativa: {
    index: 122,
    name: "frenagemRegenerativa",
    id: 102,
    pos: 1
  },
  hodometroParcial: {
    index: 123,
    name: "hodometroParcial",
    id: 102,
    pos: 2
  },
  hodometroTotal: {
    index: 124,
    name: "hodometroTotal",
    id: 102,
    pos: 3
  },
  motorTorqueRight: {
    index: 125,
    name: "motorTorqueRight",
    id: 103,
    pos: 0
  },
  motorTorqueLeft: {
    index: 126,
    name: "motorTorqueLeft",
    id: 103,
    pos: 1
  },
  torqueReferenceRight: {
    index: 127,
    name: "torqueReferenceRight",
    id: 103,
    pos: 2
  },
  torqueReferenceLeft: {
    index: 128,
    name: "torqueReferenceLeft",
    id: 103,
    pos: 3
  },
  speedMotorRight: {
    index: 129,
    name: "speedMotorRight",
    id: 104,
    pos: 0
  },
  speedMotorLeft: {
    index: 130,
    name: "speedMotorLeft",
    id: 104,
    pos: 1
  },
  ECU_control_Event_1: {
    index: 131,
    name: "ECU_control_Event_1",
    id: 104,
    pos: 2
  },
  ECU_control_Event_2: {
    index: 132,
    name: "ECU_control_Event_2",
    id: 104,
    pos: 3
  },
  speedFL: {
    index: 133,
    name: "speedFL",
    id: 105,
    pos: 3
  },
  speedFR: {
    index: 134,
    name: "speedFR",
    id: 105,
    pos: 2
  },
  speedBL: {
    index: 135,
    name: "speedBL",
    id: 105,
    pos: 1
  },
  speedBR: {
    index: 136,
    name: "speedBR",
    id: 105,
    pos: 0
  },
  ganhoTorque: {
    index: 137,
    name: "ganhoTorque",
    id: 106,
    pos: 0
  },
  //não está sendo utilizado
  motorCurrentRight: {
    index: 138,
    name: "motorCurrentRight",
    id: 106,
    pos: 2
  },
  motorCurrentLeft: {
    index: 139,
    name: "motorCurrentLeft",
    id: 106,
    pos: 3
  },
  temperatureInversorR1: {
    index: 140,
    name: "temperatureInversorR1",
    id: 107,
    pos: 0
  },
  temperatureInversorR2: {
    index: 141,
    name: "temperatureInversorR2",
    id: 107,
    pos: 1
  },
  temperatureInversorL1: {
    index: 142,
    name: "temperatureInversorL1",
    id: 107,
    pos: 2
  },
  temperatureInversorL2: {
    index: 143,
    name: "temperatureInversorL2",
    id: 107,
    pos: 3
  },
  accelerometerX: {
    index: 144,
    name: "accelerometerX",
    id: 108,
    pos: 0
  },
  accelerometerY: {
    index: 145,
    name: "accelerometerY",
    id: 108,
    pos: 1
  },
  accelerometerZ: {
    index: 146,
    name: "accelerometerZ",
    id: 108,
    pos: 2
  },
  Erro_1: {
    index: 147,
    name: "Erro_1",
    id: 108,
    pos: 3
  },
  gyroscopeX: {
    index: 148,
    name: "gyroscopeX",
    id: 109,
    pos: 0
  },
  gyroscopeY: {
    index: 149,
    name: "gyroscopeY",
    id: 109,
    pos: 1
  },
  gyroscopeZ: {
    index: 150,
    name: "gyroscopeZ",
    id: 109,
    pos: 2
  },
  Erro_2: {
    index: 151,
    name: "Erro_2",
    id: 109,
    pos: 3
  },
  //atualizar essa parte
  modoCorrespondente: {
    index: 546,
    name: "modoCorrespondente",
    id: 0x102,
    pos: 0
  },
  flagCorrespondente1: {
    index: 547,
    name: "flagCorrespondente1",
    id: 0x102,
    pos: 1
  },
  flagCorrespondente2: {
    index: 548,
    name: "flagCorrespondente2",
    id: 0x102,
    pos: 2
  },
  tireTempFL: {
    index: 550,
    name: "tireTempFL",
    id: 0x700,
    pos: 0
  },
  tireTempFR: {
    index: 551,
    name: "tireTempFR",
    id: 0x700,
    pos: 1
  },
  tireTempBL: {
    index: 552,
    name: "tireTempBL",
    id: 0x700,
    pos: 2
  },
  tireTempBR: {
    index: 553,
    name: "tireTempBR",
    id: 0x700,
    pos: 3
  },
  // mediaSpeed: {index: 25, name: "mediaSpeed", id: 0x304, pos: 0},
  // mediaTorque: {index: 26, name: "mediaTorque", id: 0x304, pos: 1},
  potenciometroBalancin: {
    index: 561,
    name: "potenciometroBalancin",
    id: 170,
    pos: 1
  },
  termoparFreioD: {
    index: 562,
    name: "termoparFreioD",
    id: 170,
    pos: 2
  },
  extensometro1: {
    index: 563,
    name: "extensometro1",
    id: 171,
    pos: 0
  },
  extensometro2: {
    index: 564,
    name: "extensometro2",
    id: 171,
    pos: 1
  },
  interfaceFlag: {
    index: 568,
    name: "interfaceFlag",
    id: 102,
    pos: 1
  },
  selecaoBotao: {
    index: 572,
    name: "selecaoBotao",
    id: 104,
    pos: 3
  },
  extensometro22: {
    index: 574,
    name: "extensometro22",
    id: 173,
    pos: 0
  },
  extensometro13: {
    index: 575,
    name: "extensometro13",
    id: 178,
    pos: 0
  },
  extensometro23: {
    index: 576,
    name: "extensometro23",
    id: 178,
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
    index: 660,
    name: "sensorPressaoDianteiro",
    id: 170,
    pos: 0
  },
  simHodometer: {
    index: 677,
    name: "simHodometer",
    id: 901,
    pos: 0
  },
  simCharge: {
    index: 678,
    name: "simCharge",
    id: 901,
    pos: 1
  },
  pressaoTraseiro: {
    index: 679,
    name: "pressaoTraseiro",
    id: 200,
    pos: 0
  },
  mediaCurrent: {
    index: 600,
    name: "mediaCurrent",
    id: 53,
    pos: 0
  },
  //não achei
  mediaTemperature: {
    index: 602,
    name: "mediaTemperature",
    id: 53,
    pos: 2
  } //não achei  

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
}, // {index: fields.energiaInversorRight.index, name: "Energia Inversor Direito", unidade: "kWh", formatFn: ((a) => a/1000)},
// {index: fields.energiaInversorLeft.index, name: "Energia Inversor Esquerdo", unidade: "kWh", formatFn: ((a) => a/1000)},
{
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
var datalogOrder = [//fields.ECUTimer.name,
//fields.hodometroTotal.name,
fields.glvVoltage.name, fields.speedFL.name, fields.speedFR.name, fields.speedMotorLeft.name, fields.speedMotorRight.name, fields.pedalAcelerador.name, fields.pedalFreio.name, fields.steeringWheel.name, fields.motorCurrentRight.name, fields.motorCurrentLeft.name, fields.accelerometerX.name, fields.accelerometerY.name, fields.accelerometerZ.name, fields.sensorPressaoDianteiro.name, fields.potenciometroBalancin.name, fields.termoparFreioD.name, fields.extensometro1.name, fields.extensometro2.name, fields.speedMotorRight.name, fields.speedMotorLeft.name, fields.current0.name, fields.current1.name, fields.current2.name, fields.current3.name, fields.mediaTemperature.name, fields.maxTemperature.name, fields.motorCurrentRight.name, fields.motorCurrentLeft.name, fields.temp001.name, fields.temp002.name, fields.temp003.name, fields.temp004.name, fields.temp101.name, fields.temp102.name, fields.temp103.name, fields.temp104.name, fields.temp201.name, fields.temp202.name, fields.temp203.name, fields.temp204.name, fields.temp301.name, fields.temp302.name, fields.temp303.name, fields.temp304.name, fields.temp401.name, fields.temp402.name, fields.temp403.name, fields.temp404.name, fields.temp501.name, fields.temp502.name, fields.temp503.name, fields.temp504.name, fields.current3.name, fields.totalVoltage.name, fields.minVoltage.name, fields.pressaoTraseiro.name]; // let datalogOrder = [
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

/***/ "./components/volante.js":
/*!*******************************!*\
  !*** ./components/volante.js ***!
  \*******************************/
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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_countup_wrapper_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/countup-wrapper.js */ "./components/countup-wrapper.js");









function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(this).constructor; result = _babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default()(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a) return false; if (_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default()(Boolean, [], function () {})); return true; } catch (e) { return false; } }




var Volante = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Volante, _Component);

  var _super = _createSuper(Volante);

  function Volante(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Volante);

    _this = _super.call(this, props);
    _this.updateVolante = _this.updateVolante.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.rotateRef = react__WEBPACK_IMPORTED_MODULE_8___default.a.createRef();
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Volante, [{
    key: "render",
    value: function render() {
      console.log(this.props.value);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "volante-container default-container bordered-title-container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "component-title bordered-title-text"
      }, "VOLANTE"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "volante-svg-wrapper"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("svg", {
        cursor: "default",
        style: {
          zoom: 1
        },
        width: "100%",
        id: "svg_document",
        baseProfile: "full",
        version: "1.1",
        preserveAspectRatio: "xMidYMid meet",
        viewBox: "0 0 500 350"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("title", {
        id: "svg_document_title"
      }, "Untitled.svg"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("defs", {
        id: "svg_document_defs"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("g", {
        id: "main_group"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("g", {
        ref: this.rotateRef,
        transform: "",
        id: "st-wheel"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("path", {
        stroke: "whitesmoke",
        id: "path1",
        strokeWidth: "3px",
        d: "M100,100 l0,120 s0,45 80,45 l140,0 s80,0 80,-45 l0,-120 s0,-30 -80,-30 l-140,0 s-80,0 -80,30  z ",
        fill: "whitesmoke",
        transform: ""
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("path", {
        stroke: "whitesmoke",
        strokeLinejoin: "miter",
        strokeWidth: "5",
        id: "path2",
        d: "M180,90 l-50,10 c-20,10 -20,30 0,40 l50,0 a10,10 90 0 0 10,-10 l0,-30 c0,-5 0,-10 -10,-10  z ",
        fill: "black",
        strokeLinecap: "butt",
        transform: ""
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("path", {
        stroke: "whitesmoke",
        visibility: "visible",
        id: "path3",
        strokeWidth: "5",
        d: "M320,90 l50,10 c20,10 20,30 0,40 l-50,0 a10,10 90 0 1 -10,-10 l0,-30 c0,-5 0,-10 10,-10  z ",
        fill: "black",
        strokeLinecap: "butt",
        transform: "",
        strokeLinejoin: "miter"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("path", {
        stroke: "whitesmoke",
        strokeWidth: "5",
        id: "path4",
        d: "M365,169 a10,10 90 0 1 10,10 l0,40 c0,15 -35,29 -50,30 a10,10 90 0 1 -10,-10 l0,-30 s0,-40 45,-40  z ",
        fill: "black",
        strokeLinecap: "butt",
        transform: "",
        strokeLinejoin: "miter"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("path", {
        stroke: "whitesmoke",
        strokeWidth: "5",
        id: "path5",
        d: "M135,170 a10,10 90 0 0 -10,10 l0,40 c0,15 35,29 50,30 a10,10 90 0 0 10,-10 l0,-30 s0,-40 -45,-40  z ",
        fill: "black",
        strokeLinecap: "butt",
        transform: "",
        strokeLinejoin: "miter"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("image", {
        x: "218px",
        height: "49.417px",
        y: "141px",
        id: "image1",
        xlinkHref: "/static/images/logo-fundo-branco.png",
        xlinkRole: "/static/images/logo-fundo-branco.png",
        width: "69px",
        preserveAspectRatio: "xMidYMid meet",
        transform: ""
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("g", {
        id: "g1",
        transform: ""
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("circle", {
        stroke: "none",
        strokeWidth: "3px",
        id: "circle2",
        cy: "135px",
        fill: "black",
        r: "4px",
        transform: "",
        cx: "269px"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("circle", {
        stroke: "none",
        strokeWidth: "3px",
        id: "circle3",
        cy: "197px",
        fill: "black",
        r: "4px",
        transform: "",
        cx: "230px"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("circle", {
        stroke: "none",
        strokeWidth: "3px",
        id: "circle4",
        cy: "197px",
        fill: "black",
        r: "4px",
        transform: "",
        cx: "269px"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("circle", {
        stroke: "none",
        strokeWidth: "3px",
        id: "circle5",
        cy: "135px",
        fill: "black",
        r: "4px",
        transform: "",
        cx: "230px"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("circle", {
        stroke: "none",
        transform: "",
        strokeWidth: "3px",
        id: "circle1",
        cy: "166px",
        fill: "black",
        r: "4px",
        cx: "286px"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("circle", {
        stroke: "none",
        transform: "",
        strokeWidth: "3px",
        id: "circle6",
        cy: "167px",
        fill: "black",
        r: "4px",
        cx: "213px"
      }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "volante-value-wrapper"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        className: "volante-title"
      }, "ROTA\xC7\xC3O:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_countup_wrapper_js__WEBPACK_IMPORTED_MODULE_9__["default"], {
        end: 280 / 4095 * (2502 - this.props.value),
        decimals: 0,
        formattingFn: this.updateVolante
      }, function (_ref) {
        var countUpRef = _ref.countUpRef;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
          ref: countUpRef,
          className: "volante-value"
        });
      })));
    }
  }, {
    key: "updateVolante",
    value: function updateVolante(value) {
      var rotateComponent = this.rotateRef.current;

      if (rotateComponent) {
        rotateComponent.setAttribute("transform", "rotate(" + value + ", 250, 167.5)");
      }

      return _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1___default()(value) + "º";
    }
  }]);

  return Volante;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Volante);

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

/***/ "./pages/controle.js":
/*!***************************!*\
  !*** ./pages/controle.js ***!
  \***************************/
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
/* harmony import */ var _components_data_fetcher_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/data-fetcher.js */ "./components/data-fetcher.js");
/* harmony import */ var _components_countup_wrapper_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/countup-wrapper.js */ "./components/countup-wrapper.js");
/* harmony import */ var _components_carro_overlay_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/carro-overlay.js */ "./components/carro-overlay.js");
/* harmony import */ var _components_volante_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/volante.js */ "./components/volante.js");
/* harmony import */ var _components_acelerometro_xy_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/acelerometro-xy.js */ "./components/acelerometro-xy.js");
/* harmony import */ var _components_acelerometro_yz_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/acelerometro-yz.js */ "./components/acelerometro-yz.js");
/* harmony import */ var _components_contexts_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/contexts.js */ "./components/contexts.js");







function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = _babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default()(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a) return false; if (_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default()(Boolean, [], function () {})); return true; } catch (e) { return false; } }









var DelayProvider = _components_contexts_js__WEBPACK_IMPORTED_MODULE_13__["DelayContext"].Provider;

var Controle = /*#__PURE__*/function (_DataFetcher) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(Controle, _DataFetcher);

  var _super = _createSuper(Controle);

  function Controle(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Controle);

    _this = _super.call(this, props);
    _this.page = "controle";
    _this.delay = 400;
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Controle, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "container-fluid"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(DelayProvider, {
        value: this.delay
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "col-md-6 col-12"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        style: {
          height: "78vh"
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_carro_overlay_js__WEBPACK_IMPORTED_MODULE_9__["default"], (this.state.data || {}).control || {}))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "col-md col-12 mr-4"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "col-5 mt-3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_volante_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
        value: ((this.state.data || {}).control || {}).steeringWheel || 2502
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "offset-1"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "col-6 mt-3 "
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "bordered-title-container default-container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "component-title bordered-title-text"
      }, "PEDAIS"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Pedal, {
        title: "ACELERADOR:",
        icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
          src: "/static/SVGs/gas.svg"
        }),
        value: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_countup_wrapper_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
          end: (((this.state.data || {}).control || {}).pedals || {}).throttle / 10 || 0,
          decimals: 0,
          suffix: " %"
        })
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("hr", {
        className: "gray-separator"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Pedal, {
        title: "FREIO:",
        icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
          src: "/static/SVGs/brake.svg"
        }),
        value: (((this.state.data || {}).control || {}).pedals || {}).brake == 1 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
          className: "brake-on"
        }, "ATIVADO") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
          className: "brake-off"
        }, "DESATIVADO")
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "pedal-content"
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "row mt-1"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "col-12 mt-3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "bordered-title-container default-container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "component-title bordered-title-text"
      }, "ACELER\xD4METRO"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: " row w-100"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "col-md-7"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "col-12 component-title subtitle"
      }, "EIXO XY:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "col-12"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_acelerometro_xy_js__WEBPACK_IMPORTED_MODULE_11__["default"], {
        x: (((this.state.data || {}).control || {}).accelerometer || {}).x / 1000,
        y: (((this.state.data || {}).control || {}).accelerometer || {}).y / 1000
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "col-md-5"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "col-12 component-title subtitle"
      }, "EIXO YZ:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "col-12"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_acelerometro_yz_js__WEBPACK_IMPORTED_MODULE_12__["default"], {
        z: (((this.state.data || {}).control || {}).accelerometer || {}).z / 1000,
        y: (((this.state.data || {}).control || {}).accelerometer || {}).y / 1000
      }))))))))))));
    }
  }]);

  return Controle;
}(_components_data_fetcher_js__WEBPACK_IMPORTED_MODULE_7__["default"]);

function Pedal(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "col-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "row d-flex align-items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "col no-padding-right pedal-icon"
  }, props.icon), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "col-9"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "col-12 pedal-title"
  }, props.title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "col-12 pedal-value"
  }, props.value)))));
}

/* harmony default export */ __webpack_exports__["default"] = (Controle);

/***/ }),

/***/ 4:
/*!*********************************!*\
  !*** multi ./pages/controle.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\breno\Tesla\DAQ_Tesla\Telemetria\Interface\pages\controle.js */"./pages/controle.js");


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
//# sourceMappingURL=controle.js.map