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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_countup_wrapper_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/countup-wrapper.js */ "./components/countup-wrapper.js");
/* harmony import */ var _components_contexts_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/contexts.js */ "./components/contexts.js");









var AcelerometroXY =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(AcelerometroXY, _Component);

  function AcelerometroXY(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AcelerometroXY);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(AcelerometroXY).call(this, props));
    _this.svgRef = react__WEBPACK_IMPORTED_MODULE_5___default.a.createRef();
    _this.setaRef = react__WEBPACK_IMPORTED_MODULE_5___default.a.createRef();
    _this.caboRef = react__WEBPACK_IMPORTED_MODULE_5___default.a.createRef();
    _this.pontaRef = react__WEBPACK_IMPORTED_MODULE_5___default.a.createRef();
    _this.lastAngle = 0;
    _this.lastGrow = 0;
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(AcelerometroXY, [{
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

      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("svg", {
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
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("g", {
        id: "main_group"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("g", {
        ref: this.setaRef,
        id: "seta",
        transform: ""
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(BuildRotateAnimation, {
        lastAngle: lAngle,
        angle: finalAngle
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("rect", {
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
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(BuildGrowthAnimation, {
        lastHeight: lGrow,
        height: grow
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("polygon", {
        ref: this.pontaRef,
        points: "330," + (250 + grow - 1) + " 370," + (250 + grow - 1) + " 350," + (250 + grow - 1 + 26),
        stroke: "none",
        id: "polygon1",
        strokeWidth: "3px",
        fill: "green",
        transform: ""
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(BuildPointsAnimation, {
        lastGrow: lGrow,
        grow: grow
      }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("g", {
        id: "g1",
        transform: ""
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("ellipse", {
        stroke: "none",
        cx: "350px",
        transform: "",
        id: "ellipse1",
        cy: "250px",
        fill: "black",
        rx: a,
        ry: b
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("image", {
        x: "187px",
        height: "147px",
        y: "169px",
        id: "image1",
        xlinkHref: "/static/images/carro-lado-iconized.png",
        xlinkRole: "/static/images/carro-lado-iconized.png",
        width: "328px",
        preserveAspectRatio: "xMidYMid meet",
        transform: ""
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("text", {
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
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

function BuildRotateAnimation(props) {
  return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("animateTransform", {
    attributeName: "transform",
    attributeType: "XML",
    type: "rotate",
    values: props.lastAngle + " 350 250;" + props.angle + " 350 250",
    begin: "0s",
    dur: (react__WEBPACK_IMPORTED_MODULE_5___default.a.useContext(_components_contexts_js__WEBPACK_IMPORTED_MODULE_7__["DelayContext"]) / 1000).toFixed(2) + "s",
    repeatCount: "1",
    additive: "replace",
    accumulate: "none",
    id: "animateTransform",
    fill: "freeze"
  });
}

function BuildGrowthAnimation(props) {
  return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("animate", {
    attributeName: "height",
    from: props.lastHeight,
    to: props.height,
    dur: (react__WEBPACK_IMPORTED_MODULE_5___default.a.useContext(_components_contexts_js__WEBPACK_IMPORTED_MODULE_7__["DelayContext"]) / 1000).toFixed(2) + "s",
    begin: "0s",
    repeatCount: "1",
    fill: "freeze"
  });
}

function BuildPointsAnimation(props) {
  return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("animate", {
    attributeName: "points",
    from: "330," + (250 + props.lastGrow - 1) + " 370," + (250 + props.lastGrow - 1) + " 350," + (250 + props.lastGrow - 1 + 26),
    to: "330," + (250 + props.grow - 1) + " 370," + (250 + props.grow - 1) + " 350," + (250 + props.grow - 1 + 26),
    dur: (react__WEBPACK_IMPORTED_MODULE_5___default.a.useContext(_components_contexts_js__WEBPACK_IMPORTED_MODULE_7__["DelayContext"]) / 1000).toFixed(2) + "s",
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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_countup_wrapper_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/countup-wrapper.js */ "./components/countup-wrapper.js");
/* harmony import */ var _components_contexts_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/contexts.js */ "./components/contexts.js");









var AcelerometroYZ =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(AcelerometroYZ, _Component);

  function AcelerometroYZ(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AcelerometroYZ);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(AcelerometroYZ).call(this, props));
    _this.svgRef = react__WEBPACK_IMPORTED_MODULE_5___default.a.createRef();
    _this.lastGrow = 0;
    _this.lastAngle = 0;
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(AcelerometroYZ, [{
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
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("svg", {
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
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("g", {
        id: "main_group"
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("g", {
        transform: "",
        id: "seta"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(BuildRotateAnimation, {
        lastAngle: lAngle,
        angle: finalAngle
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("rect", {
        stroke: "none",
        x: "245px",
        height: grow,
        y: "250px",
        id: "seta-cabo",
        strokeWidth: "10px",
        width: "10px",
        fill: "green",
        transform: ""
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(BuildGrowthAnimation, {
        lastHeight: lGrow,
        height: grow
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("polygon", {
        points: "230," + (250 + grow - 1) + " 270," + (250 + grow - 1) + " 250," + (250 + grow + 26 - 1) + "",
        stroke: "none",
        id: "polygon1",
        strokeWidth: "3px",
        fill: "green",
        transform: ""
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(BuildPointsAnimation, {
        lastGrow: lGrow,
        grow: grow
      }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("circle", {
        stroke: "none",
        transform: "",
        id: "circle1",
        strokeWidth: "3px",
        cy: "250px",
        fill: "black",
        r: radius,
        cx: "250px"
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("image", {
        x: "166px",
        height: "140px",
        y: "163px",
        id: "image1",
        xlinkHref: "/static/images/carro-frente-iconized.png",
        xlinkRole: "/static/images/carro-frente-iconized.png",
        width: "171.111px",
        preserveAspectRatio: "xMidYMid meet",
        transform: ""
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("text", {
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
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

function BuildRotateAnimation(props) {
  return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("animateTransform", {
    attributeName: "transform",
    attributeType: "XML",
    type: "rotate",
    values: props.lastAngle + " 250 250;" + props.angle + " 250 250",
    begin: "0s",
    dur: (react__WEBPACK_IMPORTED_MODULE_5___default.a.useContext(_components_contexts_js__WEBPACK_IMPORTED_MODULE_7__["DelayContext"]) / 1000).toFixed(2) + "s",
    repeatCount: "1",
    additive: "replace",
    accumulate: "none",
    id: "animateTransform",
    fill: "freeze"
  });
}

function BuildGrowthAnimation(props) {
  return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("animate", {
    attributeName: "height",
    from: props.lastHeight,
    to: props.height,
    dur: (react__WEBPACK_IMPORTED_MODULE_5___default.a.useContext(_components_contexts_js__WEBPACK_IMPORTED_MODULE_7__["DelayContext"]) / 1000).toFixed(2) + "s",
    begin: "0s",
    repeatCount: "1",
    fill: "freeze"
  });
}

function BuildPointsAnimation(props) {
  return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("animate", {
    attributeName: "points",
    from: "230," + (250 + props.lastGrow - 1) + " 270," + (250 + props.lastGrow - 1) + " 250," + (250 + props.lastGrow - 1 + 26),
    to: "230," + (250 + props.grow - 1) + " 270," + (250 + props.grow - 1) + " 250," + (250 + props.grow - 1 + 26),
    dur: (react__WEBPACK_IMPORTED_MODULE_5___default.a.useContext(_components_contexts_js__WEBPACK_IMPORTED_MODULE_7__["DelayContext"]) / 1000).toFixed(2) + "s",
    begin: "0s",
    repeatCount: "1",
    fill: "freeze"
  });
}

/* harmony default export */ __webpack_exports__["default"] = (AcelerometroYZ);

/***/ }),

/***/ "./components/brake-bias.js":
/*!**********************************!*\
  !*** ./components/brake-bias.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);







var BrakeBias =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(BrakeBias, _Component);

  function BrakeBias(props) {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, BrakeBias);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(BrakeBias).call(this, props));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(BrakeBias, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "default-container bordered-title-container"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "component-title bordered-title-text"
      }, "BRAKE BIAS"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h2", null, this.props.value, " %"));
    }
  }]);

  return BrakeBias;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (BrakeBias);

/***/ }),

/***/ "./components/carro-overlay.js":
/*!*************************************!*\
  !*** ./components/carro-overlay.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_countup_wrapper_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/countup-wrapper.js */ "./components/countup-wrapper.js");
/* harmony import */ var chroma_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! chroma-js */ "chroma-js");
/* harmony import */ var chroma_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(chroma_js__WEBPACK_IMPORTED_MODULE_7__);









var CarOverlay =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(CarOverlay, _Component);

  function CarOverlay() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CarOverlay);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(CarOverlay).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(CarOverlay, [{
    key: "render",
    value: function render() {
      var colorScale = chroma_js__WEBPACK_IMPORTED_MODULE_7___default.a.scale(['#000000', '#7f0f0c']).domain([80, 200]);
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("svg", {
        version: "1.1",
        baseProfile: "full",
        viewBox: "0 0 1240 1080",
        preserveAspectRatio: "xMidYMid meet",
        id: "svg_document",
        style: {
          zoom: 1,
          maxHeight: "100%"
        }
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("g", {
        id: "main_group"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("rect", {
        id: "background_rect",
        fill: "black",
        x: "0px",
        y: "0px",
        width: "1240px",
        height: "1080px",
        visibility: "hidden"
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("image", {
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
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("g", {
        transform: "",
        id: "IMD-INFO"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("path", {
        stroke: "darkgreen",
        strokeWidth: "2px",
        id: "path12",
        d: "M694,834 l100,0 a10,10 90 0 0 10,-10 l0,-250 a10,10 90 0 1 10,-10 l100,0 ",
        fill: "none",
        transform: ""
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("path", {
        stroke: "darkgreen",
        strokeWidth: "6",
        id: "path11",
        d: "M893,398 l0,350 a10,10 90 0 0 10,10 l300,0 a10,10 90 0 0 10,-10 l0,-350 a10,10 90 0 0 -10,-10 l-300,0 a10,10 90 0 0 -10,10 ",
        fill: "black",
        strokeLinecap: "butt",
        transform: "",
        strokeLinejoin: "miter"
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("g", {
        id: "IMD",
        transform: ""
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("g", {
        transform: "",
        id: "TORQUE-IMD"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("image", {
        x: "918px",
        height: "70px",
        y: "502px",
        id: "image13",
        xlinkHref: "/static/SVGs/gears.svg",
        xlinkRole: "/static/SVGs/gears.svg",
        width: "70px",
        preserveAspectRatio: "xMidYMid meet",
        transform: ""
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_countup_wrapper_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
        end: ((this.props.engine || {}).torque || {}).rightEngine / 10 || 0,
        decimals: 0
      }, function (_ref) {
        var countUpRef = _ref.countUpRef;
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("text", {
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
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("text", {
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
      }, "%"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("text", {
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
      }, "TORQUE")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("g", {
        transform: "",
        id: "IMD-TITLE"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("text", {
        stroke: "none",
        id: "text54",
        strokeWidth: "1px",
        x: "897px",
        fontWeight: "bold",
        textRendering: "geometricPrecision",
        fontFamily: "Exo",
        fill: "whitesmoke",
        fontSize: "38px",
        y: "436px",
        transform: "",
        textAnchor: "start"
      }, "INVERSOR/MOTOR"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("text", {
        stroke: "none",
        id: "text55",
        strokeWidth: "1px",
        x: "1200px",
        fontWeight: "bold",
        textRendering: "geometricPrecision",
        fontFamily: "Exo",
        fill: "whitesmoke",
        fontSize: "38px",
        y: "474px",
        transform: "",
        textAnchor: "end"
      }, "DIREITO")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("line", {
        stroke: "#858787",
        y1: "491px",
        strokeWidth: "3px",
        x1: "906px",
        id: "line7",
        y2: "491px",
        x2: "1201px",
        transform: "",
        visibility: "visible"
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("circle", {
        stroke: "whitesmoke",
        cx: "694px",
        visibility: "visible",
        strokeWidth: "3px",
        id: "circle3",
        cy: "833px",
        fill: "darkgreen",
        r: "21px",
        transform: ""
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("g", {
        transform: "",
        id: "IME-INFO"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("path", {
        stroke: "darkgreen",
        transform: "",
        strokeWidth: "6",
        id: "path8",
        d: "M23,400 l0,350 a10,10 90 0 0 10,10 l300,0 a10,10 90 0 0 10,-10 l0,-350 a10,10 90 0 0 -10,-10 l-300,0 a10,10 90 0 0 -10,10 ",
        fill: "black",
        strokeLinecap: "butt",
        strokeLinejoin: "miter"
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("g", {
        id: "IME",
        transform: ""
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("g", {
        transform: "",
        id: "TORQUE-IME"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_countup_wrapper_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
        end: ((this.props.engine || {}).torque || {}).leftEngine / 10 || 0,
        decimals: 0
      }, function (_ref2) {
        var countUpRef = _ref2.countUpRef;
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("text", {
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
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("text", {
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
      }, "%"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("text", {
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
      }, "TORQUE"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("image", {
        x: "42px",
        height: "70",
        y: "504px",
        id: "image10",
        xlinkHref: "/static/SVGs/gears.svg",
        xlinkRole: "/static/SVGs/gears.svg",
        width: "70",
        preserveAspectRatio: "xMidYMid meet",
        transform: ""
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("line", {
        stroke: "#858787",
        y1: "489px",
        strokeWidth: "3px",
        x1: "34px",
        id: "line6",
        y2: "489px",
        x2: "329px",
        transform: "",
        visibility: "visible"
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("g", {
        transform: "",
        id: "IME-TITLE"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("text", {
        stroke: "none",
        id: "text33",
        strokeWidth: "1px",
        x: "25px",
        fontWeight: "bold",
        textRendering: "geometricPrecision",
        fontFamily: "Exo",
        fill: "whitesmoke",
        fontSize: "38px",
        y: "434px",
        transform: "",
        textAnchor: "start"
      }, "INVERSOR/MOTOR"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("text", {
        stroke: "none",
        id: "text34",
        strokeWidth: "1px",
        x: "25px",
        fontWeight: "bold",
        textRendering: "geometricPrecision",
        fontFamily: "Exo",
        fill: "whitesmoke",
        fontSize: "38px",
        y: "472px",
        transform: "",
        textAnchor: "start"
      }, "ESQUERDO"))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("circle", {
        stroke: "whitesmoke",
        cx: "526px",
        strokeWidth: "3px",
        id: "circle2",
        cy: "833px",
        fill: "darkgreen",
        r: "21px",
        transform: ""
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("path", {
        stroke: "darkgreen",
        id: "path10",
        strokeWidth: "2px",
        d: "M524,834 l-80,0 a10,10 90 0 1 -10,-10 l0,-250 a10,10 90 0 0 -10,-10 l-80,0 ",
        fill: "none",
        transform: ""
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("g", {
        transform: "",
        id: "roda-bl"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("polygon", {
        points: "436.552521,892.983032 436.552521,1070.48291 441.552521,1063.98291 441.552521,898.483032",
        stroke: "none",
        strokeWidth: "3px",
        fill: colorScale(((this.props.tires || {}).temperature || {}).backLeft / 100),
        transform: "rotate(-1 440 984.75)",
        id: "polygon4"
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("polygon", {
        points: "379.061279,891.979614 379.061279,1069.479614 384.061279,1062.979614 384.061279,897.479614",
        stroke: "none",
        strokeWidth: "3px",
        id: "polygon7",
        fill: colorScale(((this.props.tires || {}).temperature || {}).backLeft / 100),
        transform: "rotate(179 382.043732 981.738159)"
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("rect", {
        stroke: "none",
        x: "387.5px",
        height: "179.5px",
        y: "893px",
        strokeWidth: "3px",
        width: "46px",
        id: "rect4",
        fill: colorScale(((this.props.tires || {}).temperature || {}).backLeft / 100),
        transform: "rotate(-1 410.5 982.75)"
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("g", {
        transform: "",
        id: "roda-fl"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("polygon", {
        points: "380,340.5 380,518 385,511.5 385,346",
        stroke: "none",
        strokeWidth: "3px",
        fill: colorScale(((this.props.tires || {}).temperature || {}).frontLeft / 100),
        transform: "rotate(180 383 427.25)",
        id: "polygon8"
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("polygon", {
        points: "437,337 437,514.5 442,508 442,342.5",
        stroke: "none",
        strokeWidth: "3px",
        fill: colorScale(((this.props.tires || {}).temperature || {}).frontLeft / 100),
        transform: "",
        id: "polygon3"
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("rect", {
        stroke: "none",
        x: "388px",
        height: "179.5px",
        y: "336.5px",
        id: "rect1",
        strokeWidth: "3px",
        width: "46px",
        fill: colorScale(((this.props.tires || {}).temperature || {}).frontLeft / 100),
        transform: ""
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("g", {
        transform: "",
        id: "roda-fr"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("polygon", {
        points: "846.5,336.5 846.5,514 851.5,507.5 851.5,342",
        stroke: "none",
        strokeWidth: "3px",
        fill: colorScale(((this.props.tires || {}).temperature || {}).frontRight / 100),
        transform: "",
        id: "polygon5"
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("rect", {
        stroke: "none",
        x: "797.5px",
        height: "179px",
        y: "337px",
        strokeWidth: "3px",
        id: "rect3",
        width: "46px",
        fill: colorScale(((this.props.tires || {}).temperature || {}).frontRight / 100),
        transform: ""
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("polygon", {
        points: "-29,339.5 -29,517 -24,510.5 -24,345",
        stroke: "none",
        id: "polygon1",
        strokeWidth: "3px",
        fill: colorScale(((this.props.tires || {}).temperature || {}).frontRight / 100),
        transform: "rotate(180 383 427.25)"
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("g", {
        transform: "",
        id: "roda-br"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("polygon", {
        points: "847,892 847,1069.5 852,1063 852,897.5",
        stroke: "none",
        strokeWidth: "3px",
        id: "polygon2",
        fill: colorScale(((this.props.tires || {}).temperature || {}).backRight / 100),
        transform: ""
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("polygon", {
        points: "-29.5,-216 -29.5,-38.5 -24.5,-45 -24.5,-210.5",
        stroke: "none",
        strokeWidth: "3px",
        id: "polygon6",
        fill: colorScale(((this.props.tires || {}).temperature || {}).backRight / 100),
        transform: "rotate(180 383 427.25)"
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("rect", {
        stroke: "none",
        x: "798px",
        height: "180.5px",
        y: "891.5px",
        strokeWidth: "3px",
        id: "rect2",
        width: "46px",
        fill: colorScale(((this.props.tires || {}).temperature || {}).backRight / 100),
        transform: ""
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("g", {
        transform: "",
        id: "PTE-INFO"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("path", {
        stroke: "darkgreen",
        strokeWidth: "6",
        id: "path9",
        d: "M25,808 l0,250 a10,10 90 0 0 10,10 l300,0 a10,10 90 0 0 10,-10 l0,-250 a10,10 90 0 0 -10,-10 l-300,0 a10,10 90 0 0 -10,10 ",
        fill: "black",
        strokeLinecap: "butt",
        transform: "",
        strokeLinejoin: "miter"
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("path", {
        stroke: "darkgreen",
        strokeWidth: "2px",
        id: "path6",
        d: "M412,919 l0,-80 a10,10 90 0 0 -10,-10 l-60,0 ",
        fill: "none",
        transform: ""
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("circle", {
        stroke: "#000000",
        transform: "",
        strokeWidth: "0px",
        id: "circle1",
        cy: "915px",
        fill: "darkgreen",
        r: "11px",
        cx: "412px"
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("g", {
        id: "PTE",
        transform: ""
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("line", {
        stroke: "#858787",
        y1: "900px",
        strokeWidth: "3px",
        x1: "37px",
        id: "line4",
        y2: "900px",
        x2: "332px",
        transform: ""
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("g", {
        transform: "",
        id: "VEL-TE"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("image", {
        x: "44px",
        height: "70px",
        y: "916px",
        id: "image7",
        xlinkHref: "/static/SVGs/speedometer.svg",
        xlinkRole: "/static/SVGs/speedometer.svg",
        width: "70px",
        preserveAspectRatio: "xMidYMid meet",
        transform: ""
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_countup_wrapper_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
        end: ((this.props.tires || {}).speed || {}).backLeft || 0,
        decimals: 0
      }, function (_ref3) {
        var countUpRef = _ref3.countUpRef;
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("text", {
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
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("text", {
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
      }, "RPM"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("text", {
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
      }, "VELOCIDADE")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("g", {
        transform: "",
        id: "PTE-TEXT"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("text", {
        stroke: "none",
        strokeWidth: "1px",
        x: "39px",
        fontWeight: "bold",
        textRendering: "geometricPrecision",
        fontFamily: "Exo",
        fill: "whitesmoke",
        fontSize: "40px",
        y: "882px",
        transform: "",
        textAnchor: "start",
        id: "text28"
      }, "ESQUERDO"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("text", {
        stroke: "none",
        strokeWidth: "1px",
        x: "39px",
        fontWeight: "bold",
        textRendering: "geometricPrecision",
        fontFamily: "Exo",
        fill: "whitesmoke",
        fontSize: "40px",
        y: "842px",
        transform: "",
        textAnchor: "start",
        id: "text29"
      }, "PNEU TRASEIRO")))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("g", {
        transform: "",
        id: "PDE-INFO"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("circle", {
        stroke: "#000000",
        cx: "412px",
        strokeWidth: "0px",
        id: "circle4",
        cy: "353px",
        fill: "darkgreen",
        r: "11px",
        transform: ""
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("path", {
        stroke: "darkgreen",
        id: "path1",
        strokeWidth: "2px",
        d: "M412,357 l0,-253 a10,10 90 0 0 -10,-10 l-60,0 ",
        fill: "none",
        transform: ""
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("path", {
        stroke: "darkgreen",
        strokeWidth: "6",
        id: "path4",
        d: "M21,88 l0,250 a10,10 90 0 0 10,10 l300,0 a10,10 90 0 0 10,-10 l0,-250 a10,10 90 0 0 -10,-10 l-300,0 a10,10 90 0 0 -10,10 ",
        fill: "black",
        strokeLinecap: "butt",
        transform: "",
        strokeLinejoin: "miter"
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("g", {
        id: "PDE",
        transform: ""
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("g", {
        transform: "",
        id: "PDE-TEXT"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("text", {
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
      }, "ESQUERDO"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("text", {
        stroke: "none",
        id: "text9",
        strokeWidth: "1px",
        x: "180px",
        fontWeight: "bold",
        textRendering: "geometricPrecision",
        fontFamily: "Exo",
        fill: "whitesmoke",
        fontSize: "40px",
        y: "122px",
        transform: "",
        textAnchor: "middle"
      }, "PNEU DIANTEIRO")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("line", {
        stroke: "#858787",
        y1: "175px",
        strokeWidth: "3px",
        x1: "32px",
        id: "line2",
        y2: "175px",
        x2: "327px",
        transform: ""
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("g", {
        transform: "",
        id: "VEL-DE"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("image", {
        x: "40px",
        height: "70px",
        y: "186px",
        id: "image4",
        xlinkHref: "/static/SVGs/speedometer.svg",
        xlinkRole: "/static/SVGs/speedometer.svg",
        width: "70px",
        preserveAspectRatio: "xMidYMid meet",
        transform: ""
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_countup_wrapper_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
        end: ((this.props.tires || {}).speed || {}).frontLeft / 10 / 3.6 / (52.07 / 100 * Math.PI) * 60 || 0,
        decimals: 0
      }, function (_ref4) {
        var countUpRef = _ref4.countUpRef;
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("text", {
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
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("text", {
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
      }, "RPM"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("text", {
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
      }, "VELOCIDADE")))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("g", {
        transform: "",
        id: "PDD-INFO"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("path", {
        stroke: "darkgreen",
        strokeWidth: "2px",
        id: "path5",
        d: "M823,352 l0,-253 a10,10 90 0 1 10,-10 l60,0 ",
        fill: "none",
        transform: ""
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("path", {
        stroke: "darkgreen",
        strokeWidth: "6",
        id: "path3",
        d: "M894,88 l0,250 a10,10 90 0 0 10,10 l300,0 a10,10 90 0 0 10,-10 l0,-250 a10,10 90 0 0 -10,-10 l-300,0 a10,10 90 0 0 -10,10 ",
        fill: "black",
        strokeLinecap: "butt",
        transform: "",
        strokeLinejoin: "miter"
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("g", {
        id: "PDD",
        transform: ""
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("g", {
        transform: "",
        id: "VEL-DD"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("image", {
        x: "907px",
        height: "70",
        y: "185px",
        id: "image2",
        xlinkHref: "/static/SVGs/speedometer.svg",
        xlinkRole: "/static/SVGs/speedometer.svg",
        width: "70",
        preserveAspectRatio: "xMidYMid meet",
        transform: ""
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("line", {
        stroke: "#858787",
        y1: "175px",
        x1: "908px",
        strokeWidth: "3px",
        y2: "175px",
        x2: "1203px",
        transform: "",
        id: "line3"
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("text", {
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
      }, "VELOCIDADE"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_countup_wrapper_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
        end: ((this.props.tires || {}).speed || {}).frontRight / 10 || 0,
        decimals: 0
      }, function (_ref5) {
        var countUpRef = _ref5.countUpRef;
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("text", {
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
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("text", {
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
      }, "RPM")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("g", {
        transform: "",
        id: "PDD-TEXT"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("text", {
        stroke: "none",
        id: "text1",
        strokeWidth: "1px",
        x: "1050px",
        fontWeight: "bold",
        textRendering: "geometricPrecision",
        fontFamily: "Exo",
        fill: "whitesmoke",
        fontSize: "40px",
        y: "122px",
        transform: "",
        textAnchor: "middle"
      }, "PNEU DIANTEIRO"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("text", {
        stroke: "none",
        id: "text3",
        strokeWidth: "1px",
        x: "1124px",
        fontWeight: "bold",
        textRendering: "geometricPrecision",
        fontFamily: "Exo",
        fill: "whitesmoke",
        fontSize: "40px",
        y: "163px",
        transform: "",
        textAnchor: "middle"
      }, "DIREITO")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("line", {
        stroke: "#858787",
        y1: "175px",
        id: "line1",
        x1: "908px",
        strokeWidth: "3px",
        y2: "175px",
        x2: "1203px",
        transform: ""
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("circle", {
        stroke: "#000000",
        strokeWidth: "0px",
        cy: "353px",
        id: "circle5",
        fill: "darkgreen",
        r: "11px",
        cx: "823px",
        transform: ""
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("g", {
        transform: "",
        id: "PTD-INFO"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("path", {
        stroke: "darkgreen",
        strokeWidth: "2px",
        id: "path7",
        d: "M824,907 l0,-80 a10,10 90 0 1 10,-10 l60,0 ",
        fill: "none",
        transform: ""
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("path", {
        stroke: "darkgreen",
        strokeLinejoin: "miter",
        strokeWidth: "6",
        id: "path2",
        d: "M893,804 l0,250 a10,10 90 0 0 10,10 l300,0 a10,10 90 0 0 10,-10 l0,-250 a10,10 90 0 0 -10,-10 l-300,0 a10,10 90 0 0 -10,10 ",
        fill: "black",
        strokeLinecap: "butt",
        transform: ""
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("circle", {
        stroke: "#000000",
        cx: "824px",
        strokeWidth: "0px",
        id: "circle6",
        cy: "911px",
        fill: "darkgreen",
        r: "11px",
        transform: ""
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("g", {
        transform: "",
        id: "PTD"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("line", {
        stroke: "#858787",
        y1: "899px",
        strokeWidth: "3px",
        x1: "907px",
        id: "line5",
        y2: "899px",
        x2: "1202px",
        transform: ""
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("g", {
        transform: "",
        id: "VEL-TD"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("image", {
        x: "914px",
        height: "70px",
        y: "912px",
        id: "image5",
        xlinkHref: "/static/SVGs/speedometer.svg",
        xlinkRole: "/static/SVGs/speedometer.svg",
        width: "70px",
        preserveAspectRatio: "xMidYMid meet",
        transform: ""
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_countup_wrapper_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
        end: ((this.props.tires || {}).speed || {}).backRight || 0,
        decimals: 0
      }, function (_ref6) {
        var countUpRef = _ref6.countUpRef;
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("text", {
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
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("text", {
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
      }, "RPM"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("text", {
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
      }, "VELOCIDADE")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("g", {
        id: "PTD-TEXT",
        transform: ""
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("text", {
        stroke: "none",
        id: "text17",
        strokeWidth: "1px",
        x: "1180px",
        fontWeight: "bold",
        textRendering: "geometricPrecision",
        fontFamily: "Exo",
        fill: "whitesmoke",
        fontSize: "40px",
        y: "881px",
        transform: "",
        textAnchor: "end"
      }, "DIREITO"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("text", {
        stroke: "none",
        id: "text18",
        strokeWidth: "1px",
        x: "909px",
        fontWeight: "bold",
        textRendering: "geometricPrecision",
        fontFamily: "Exo",
        fill: "whitesmoke",
        fontSize: "40px",
        y: "841px",
        transform: "",
        textAnchor: "start"
      }, "PNEU TRASEIRO")))));
    }
  }]);

  return CarOverlay;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

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

var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js"));

var _keys = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js"));

//PARA REGISTRAR UM NOVO DADO:
//primeiramente, em TypeFields, adicione mais uma linha, incrementando o índice em 1 e o nome do dado em camelCase
//depois, adicione mais uma linha em availableField, com o index sendo o mesmo índice do TypeFields.
//se for um dado que tenha possibilidade de ser plotado em tempo real, adicione-o em availablePlotOPtion.
var isOnClient = !!(typeof (void 0) === "undefined" || typeof window !== "undefined" && window.document && window.document.createElement && (0, _keys.default)(process.env).length === 0 && process.env.constructor === Object);
var fs = isOnClient ? null : __webpack_require__(/*! fs */ "fs");
if (typeof (void 0) !== "undefined") (void 0)[".properties"] = function (module, filename) {
  module.exports = fs.readFileSync(filename, "utf8");
};
var configFileName = "config.properties";

var pr = __webpack_require__(/*! ../config.properties */ "./config.properties");

var file = (0, _typeof2.default)(pr) == "object" ? pr.default : pr; // let file = properties;

if (!isOnClient) {
  if (file === "") {
    var configTemplate = "# TIPO DE OPERA\xC7\xC3O\n# Valores poss\xEDveis:\n# BYTES  - Recebimento por Xbee em formato de bytes\n# STRING - Recebimento por Xbee ou NRF em formato de string\n# API_BYTES  - Recebimento por Xbee em API mode por bytes\n# API_STRING - Recebimento por Xbee em API mode por string\n# [default = STRING]\noperationType = STRING\n\n# [string] [default = 0013A20041932DC6] Endere\xE7o 64bits do xbee transmissor.\nxbeeSourceAddress = 0013A20041932DC6\n\n# PORTA SERIAL\n\n# [string] [default = ] Nome da porta serial que o dispositivo receptor se encontra. Deixe vazio para identifica\xE7\xE3o autom\xE1tica.\nportName = \n# [string] [default = ignore-ports.txt] Nome do arquivo de texto, na pasta raiz, contendo nome de portas para serem ignoradas na identifica\xE7\xE3o autom\xE1tica de porta, separados por linha.\nignorePortsFile = ignore-ports.txt\n\n# NOTIFICA\xC7\xD5ES\n\n# [bool] [default = true] Ativar ou desativar notifica\xE7\xF5es\nshouldNotify = true\n# [number] [default = 10] Limite percentual para acionar a notifica\xE7\xE3o que alerta da proximidade do valor m\xEDnimo/m\xE1ximo\npercentageLimitTolerance = 10\n# [number] [default = 30000] Tempo de timeout em milissegundos para a notifica\xE7\xE3o ser reacionada caso a condi\xE7\xE3o n\xE3o mude\nnotificationExpirationTimeout = 30000\n\n# DATALOG\n\n# [string] [default = ./datalog/] Caminho para a escrita do datalog. O DIRET\xD3RIO N\xC3O \xC9 CRIADO, ENTA\xC3O DEVE, OBRIGATORIAMENTE, EXISTIR.\ndatalogFilePath = ./datalog/\n# [bool] [default = true] Ativar ou desativar o datalog\nshouldWrite = true\n# [number]  [default = 30000] Tempo, em milissegundos, de quanto esperar sem receber dados at\xE9 criar um novo arquivo de texto\ndatalogTimeout = 30000\n# [bool] [default = false] Incluir timestamp (quantidade de milissegundos desde 1/1/1970 00:00) como primeiro item de cada linha\nincludeTimestamp = false\n\n# PLOTAGEM EM TEMPO REAL\n\n# BANCO DE DADOS LOCAL\n# [number]  [default = 60000] Tempo, em milissegundos, de persist\xEAncia dos dados no banco de dados antes de serem eliminados. Altere esse valor para definir de quanto tempo atr\xE1s os dados devem ser exibidos.\npersistanceTimeout = 60000\n# [number] [default = 1000] Per\xEDodo, em milissegundos, para ser acionada a varredura do banco de dados local para eliminar dados antigos\ncleanUpTimeout = 1000\n\n#PLOTAGEM\n# [number] [default = 1] Quantidade desejada de pontos por segundo para serem exibidos no gr\xE1fico. VALORES ALTOS PODEM COMPROMETER A INTEGRIDADE DO SERVIDOR E DA REDE.\npointsPerSecond = 1\n        ";

    var path = __webpack_require__(/*! path */ "path");

    var correctedPath = path.join(__dirname, "..", configFileName);
    fs.writeFileSync(correctedPath, configTemplate);
    file = configTemplate;
  }
}

var config = file.split("\n").filter(function (value) {
  return !value.startsWith("#") && !(value.trim() === "");
}).reduce(function (previous, current) {
  var opt = current.split("=").map(function (value) {
    return value.trim();
  });
  var definition = opt[1];
  var val;

  if (definition == "") {
    val = undefined;
  } else if (definition == "true" || definition == "false") {
    val = definition === "true";
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

  /*controle geral*/
  steeringWheel: {
    index: 27,
    name: "steeringWheel",
    id: 101,
    pos: 1
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
  selectedMode: {
    index: 167,
    name: "selectedMode",
    id: 102,
    pos: 0
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
  ecuFlag: {
    index: 180,
    name: "ecuFlag",
    id: 103,
    pos: 0
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
  speedFL: {
    index: 15,
    name: "speedFL",
    id: 104,
    pos: 0
  },
  speedFR: {
    index: 16,
    name: "speedFR",
    id: 104,
    pos: 1
  },
  speedBL: {
    index: 17,
    name: "speedBL",
    id: 104,
    pos: 2
  },
  speedBR: {
    index: 18,
    name: "speedBR",
    id: 104,
    pos: 3
  },
  speedMotorLeft: {
    index: 166,
    name: "speedMotorLeft",
    id: 110,
    pos: 0
  },
  motorTorqueLeft: {
    index: 20,
    name: "motorTorqueLeft",
    id: 110,
    pos: 1
  },
  speedMotorRight: {
    index: 165,
    name: "speedMotorRight",
    id: 120,
    pos: 0
  },
  motorTorqueRight: {
    index: 19,
    name: "motorTorqueRight",
    id: 120,
    pos: 1
  },
  accelerometerX: {
    index: 154,
    name: "accelerometerX",
    id: 130,
    pos: 0
  },
  accelerometerY: {
    index: 155,
    name: "accelerometerY",
    id: 130,
    pos: 1
  },
  accelerometerZ: {
    index: 156,
    name: "accelerometerZ",
    id: 130,
    pos: 2
  },
  gyroscopeX: {
    index: 157,
    name: "gyroscopeX",
    id: 131,
    pos: 0
  },
  gyroscopeY: {
    index: 158,
    name: "gyroscopeY",
    id: 131,
    pos: 1
  },
  gyroscopeZ: {
    index: 159,
    name: "gyroscopeZ",
    id: 131,
    pos: 2
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
  // mediaSpeed: {index: 25, name: "mediaSpeed", id: 0x304, pos: 0},
  // mediaTorque: {index: 26, name: "mediaTorque", id: 0x304, pos: 1},
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
  interfaceFlag: {
    index: 168,
    name: "interfaceFlag",
    id: 102,
    pos: 1
  },
  intensidadeFrenagem: {
    index: 171,
    name: "intensidadeFrenagem",
    id: 108,
    pos: 2
  },
  selecaoBotao: {
    index: 172,
    name: "selecaoBotao",
    id: 108,
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
var datalogOrder = [fields.ECUTimer.name, fields.hodometroTotal.name, fields.glvVoltage.name, fields.speedFL.name, fields.speedFR.name, fields.speedMotorLeft.name, fields.speedMotorRight.name, fields.pedalAcelerador.name, fields.pedalFreio.name, fields.steeringWheel.name, fields.motorCurrentRight.name, fields.motorCurrentLeft.name, fields.accelerometerX.name, fields.accelerometerY.name, fields.accelerometerZ.name, fields.sensorPressaoDianteiro.name, fields.potenciometroBalancin.name, fields.termoparFreioD.name, fields.extensometro1.name, fields.extensometro2.name, fields.speedMotorRight.name, fields.speedMotorLeft.name, fields.current0.name, fields.current1.name, fields.current2.name, fields.current3.name, fields.mediaTemperature.name, fields.maxTemperature.name, fields.motorCurrentRight.name, fields.motorCurrentLeft.name, fields.temp001.name, fields.temp002.name, fields.temp003.name, fields.temp004.name, fields.temp101.name, fields.temp102.name, fields.temp103.name, fields.temp104.name, fields.temp201.name, fields.temp202.name, fields.temp203.name, fields.temp204.name, fields.temp301.name, fields.temp302.name, fields.temp303.name, fields.temp304.name, fields.current3.name, fields.totalVoltage.name, fields.minVoltage.name, fields.pressaoTraseiro.name]; // let datalogOrder = [
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
  last[field.name][typeof field.max === "undefined" ? "min" : "max"] = typeof field.max === "undefined" ? field.min : field.max;
  if (typeof field.maxReference !== "undefined") last[field.name].maxReference = field.maxReference;
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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _contexts_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./contexts.js */ "./components/contexts.js");
/* harmony import */ var react_countup__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-countup */ "react-countup");
/* harmony import */ var react_countup__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_countup__WEBPACK_IMPORTED_MODULE_8__);










var CountUpWrapper =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(CountUpWrapper, _Component);

  function CountUpWrapper(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, CountUpWrapper);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(CountUpWrapper).call(this, props)); // debugger;

    if (typeof props.children !== 'undefined') {
      _this.childRef = react__WEBPACK_IMPORTED_MODULE_6___default.a.createRef();
    }

    _this.lastValue = 0;
    _this.lastEnd = 0;
    _this.lastComp = undefined;
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(CountUpWrapper, [{
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
      var comp = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(CountComponent, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, p, {
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
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

CountUpWrapper.contextType = _contexts_js__WEBPACK_IMPORTED_MODULE_7__["DelayContext"];

function ZeroDurationComponent(props) {
  return props.component;
} // function RetrieveDuration(props) {
//     return props.duration || useContext(DelayContext)/1000;
// }


function CountComponent(props) {
  // debugger;
  var decs = props.decimals ? props.decimals : props.decimals == 0 ? 0 : 2;
  return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_countup__WEBPACK_IMPORTED_MODULE_8___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    decimals: decs,
    duration: props.duration || Object(react__WEBPACK_IMPORTED_MODULE_6__["useContext"])(_contexts_js__WEBPACK_IMPORTED_MODULE_7__["DelayContext"]) / 1000,
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
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _notifications_handler_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./notifications-handler.js */ "./components/notifications-handler.js");













var DataFetcher =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(DataFetcher, _Component);

  function DataFetcher(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, DataFetcher);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(DataFetcher).call(this, props)); // debugger;

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "updateField",
    /*#__PURE__*/
    Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var response, body;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
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
              return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_10___default()('/' + _this.rootPage + _this.page);

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
      }, _callee, this);
    })));

    _this.updateRSSI = props.updateRSSI;
    _this.delay = 300;
    props.setChildDelay(_this.delay);
    _this.state = {};
    _this.rootPage = "data/";
    _this.isFetching = false;
    _this.shouldFetch = true;
    _this.timerID = null;
    _this.doFetch = _this.doFetch.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(DataFetcher, [{
    key: "doFetch",
    value: function doFetch() {
      var _this2 = this;

      this.updateField().then(function (res) {
        if (res.data) {
          // debugger;
          console.log("Informação não tratada: " + res.data);

          var treatedData = _this2.treatData(res.data);

          console.log("Informação tratada: " + treatedData);

          _this2.setState({
            data: treatedData
          });

          Object(_notifications_handler_js__WEBPACK_IMPORTED_MODULE_11__["default"])(res.data);

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
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (DataFetcher);

/***/ }),

/***/ "./components/ecu.js":
/*!***************************!*\
  !*** ./components/ecu.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);







var ECU =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(ECU, _Component);

  function ECU(props) {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ECU);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(ECU).call(this, props));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ECU, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "default-container bordered-title-container"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "component-title bordered-title-text"
      }, "ECU FLAG"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h2", null, this.props.value));
    }
  }]);

  return ECU;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (ECU);

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
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "d-flex notification-container align-items-center"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "notification-icon"
  }, props.icon), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "flex-fill notification-text"
  }, props.text));
}

var PortDisconnected = function PortDisconnected(_ref) {
  var closeToast = _ref.closeToast;
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(NotificationBasis, {
    text: "Porta Serial desconectada!",
    icon: react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
      src: "/static/images/usb-unplugged.png"
    })
  });
};

var PortConnected = function PortConnected(_ref2) {
  var closeToast = _ref2.closeToast;
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(NotificationBasis, {
    text: "Porta Serial conectada!",
    icon: react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
      src: "/static/images/usb-plugged.png"
    })
  });
};

var WarningValue = function WarningValue(_ref3) {
  var closeToast = _ref3.closeToast,
      text = _ref3.text;
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(NotificationBasis, {
    text: text,
    icon: react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
      src: "/static/icons/warning-red.png"
    })
  });
};

function handleNotifications(data) {
  //CONEXAO SERIAL
  // debugger;
  if (!constants.fieldsLimit.shouldNotify) return;

  if (!data.portConnected) {
    if (!react_toastify__WEBPACK_IMPORTED_MODULE_3__["toast"].isActive(900)) Object(react_toastify__WEBPACK_IMPORTED_MODULE_3__["toast"])(react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(PortDisconnected, null), {
      toastId: 900,
      autoClose: false,
      type: react_toastify__WEBPACK_IMPORTED_MODULE_3__["toast"].TYPE.WARNING,
      closeButton: false,
      draggable: false,
      closeOnClick: false
    });
  } else if (react_toastify__WEBPACK_IMPORTED_MODULE_3__["toast"].isActive(900)) {
    react_toastify__WEBPACK_IMPORTED_MODULE_3__["toast"].dismiss(900);
    react_toastify__WEBPACK_IMPORTED_MODULE_3__["toast"].success(react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(PortConnected, null));
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
        Object(react_toastify__WEBPACK_IMPORTED_MODULE_3__["toast"])(react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(WarningValue, {
          text: textComp
        }), {
          type: react_toastify__WEBPACK_IMPORTED_MODULE_3__["toast"].TYPE.ERROR
        }); //se achou, verifica se ja passou o tempo de expiração. Se tiver passado, notifica novamente
      } else {
        if (new Date().getTime() - finalOffLimited[fIndex].added >= constants.fieldsLimit.notificationExpirationTimeout) {
          finalOffLimited[fIndex] = createOffLimitField(field.fieldId, field.value, new Date().getTime()); // debugger;

          var _textComp = createOffLimitComponent(field);

          Object(react_toastify__WEBPACK_IMPORTED_MODULE_3__["toast"])(react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(WarningValue, {
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


    textComp = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", null, "O campo ", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
      className: "notification-field-name"
    }, fieldName), " est\xE1 ", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
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


    textComp = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", null, "O campo ", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
      className: "notification-field-name"
    }, fieldName), " est\xE1 ", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
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
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_countup_wrapper_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/countup-wrapper.js */ "./components/countup-wrapper.js");










var Volante =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Volante, _Component);

  function Volante(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Volante);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Volante).call(this, props));
    _this.updateVolante = _this.updateVolante.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    _this.rotateRef = react__WEBPACK_IMPORTED_MODULE_7___default.a.createRef();
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Volante, [{
    key: "render",
    value: function render() {
      console.log(this.props.value);
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "volante-container default-container bordered-title-container"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "component-title bordered-title-text"
      }, "VOLANTE"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "volante-svg-wrapper"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("svg", {
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
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("title", {
        id: "svg_document_title"
      }, "Untitled.svg"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("defs", {
        id: "svg_document_defs"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("g", {
        id: "main_group"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("g", {
        ref: this.rotateRef,
        transform: "",
        id: "st-wheel"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
        stroke: "whitesmoke",
        id: "path1",
        strokeWidth: "3px",
        d: "M100,100 l0,120 s0,45 80,45 l140,0 s80,0 80,-45 l0,-120 s0,-30 -80,-30 l-140,0 s-80,0 -80,30  z ",
        fill: "whitesmoke",
        transform: ""
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
        stroke: "whitesmoke",
        strokeLinejoin: "miter",
        strokeWidth: "5",
        id: "path2",
        d: "M180,90 l-50,10 c-20,10 -20,30 0,40 l50,0 a10,10 90 0 0 10,-10 l0,-30 c0,-5 0,-10 -10,-10  z ",
        fill: "black",
        strokeLinecap: "butt",
        transform: ""
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
        stroke: "whitesmoke",
        visibility: "visible",
        id: "path3",
        strokeWidth: "5",
        d: "M320,90 l50,10 c20,10 20,30 0,40 l-50,0 a10,10 90 0 1 -10,-10 l0,-30 c0,-5 0,-10 10,-10  z ",
        fill: "black",
        strokeLinecap: "butt",
        transform: "",
        strokeLinejoin: "miter"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
        stroke: "whitesmoke",
        strokeWidth: "5",
        id: "path4",
        d: "M365,169 a10,10 90 0 1 10,10 l0,40 c0,15 -35,29 -50,30 a10,10 90 0 1 -10,-10 l0,-30 s0,-40 45,-40  z ",
        fill: "black",
        strokeLinecap: "butt",
        transform: "",
        strokeLinejoin: "miter"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
        stroke: "whitesmoke",
        strokeWidth: "5",
        id: "path5",
        d: "M135,170 a10,10 90 0 0 -10,10 l0,40 c0,15 35,29 50,30 a10,10 90 0 0 10,-10 l0,-30 s0,-40 -45,-40  z ",
        fill: "black",
        strokeLinecap: "butt",
        transform: "",
        strokeLinejoin: "miter"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("image", {
        x: "218px",
        height: "49.417px",
        y: "141px",
        id: "image1",
        xlinkHref: "/static/images/logo-fundo-branco.png",
        xlinkRole: "/static/images/logo-fundo-branco.png",
        width: "69px",
        preserveAspectRatio: "xMidYMid meet",
        transform: ""
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("g", {
        id: "g1",
        transform: ""
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("circle", {
        stroke: "none",
        strokeWidth: "3px",
        id: "circle2",
        cy: "135px",
        fill: "black",
        r: "4px",
        transform: "",
        cx: "269px"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("circle", {
        stroke: "none",
        strokeWidth: "3px",
        id: "circle3",
        cy: "197px",
        fill: "black",
        r: "4px",
        transform: "",
        cx: "230px"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("circle", {
        stroke: "none",
        strokeWidth: "3px",
        id: "circle4",
        cy: "197px",
        fill: "black",
        r: "4px",
        transform: "",
        cx: "269px"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("circle", {
        stroke: "none",
        strokeWidth: "3px",
        id: "circle5",
        cy: "135px",
        fill: "black",
        r: "4px",
        transform: "",
        cx: "230px"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("circle", {
        stroke: "none",
        transform: "",
        strokeWidth: "3px",
        id: "circle1",
        cy: "166px",
        fill: "black",
        r: "4px",
        cx: "286px"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("circle", {
        stroke: "none",
        transform: "",
        strokeWidth: "3px",
        id: "circle6",
        cy: "167px",
        fill: "black",
        r: "4px",
        cx: "213px"
      }))))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "volante-value-wrapper"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "volante-title"
      }, "ROTA\xC7\xC3O:"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_countup_wrapper_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
        end: 280 / 4095 * (2502 - this.props.value),
        decimals: 0,
        formattingFn: this.updateVolante
      }, function (_ref) {
        var countUpRef = _ref.countUpRef;
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
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

      return _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(value) + "º";
    }
  }]);

  return Volante;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

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

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/regenerator-runtime/runtime-module.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/regenerator-runtime/runtime-module.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() {
  return this || (typeof self === "object" && self);
})() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(/*! ./runtime */ "./node_modules/@babel/runtime-corejs2/node_modules/regenerator-runtime/runtime.js");

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() {
    return this || (typeof self === "object" && self);
  })() || Function("return this")()
);


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/regenerator/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/regenerator/index.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/@babel/runtime-corejs2/node_modules/regenerator-runtime/runtime-module.js");


/***/ }),

/***/ "./pages/controle.js":
/*!***************************!*\
  !*** ./pages/controle.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_data_fetcher_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/data-fetcher.js */ "./components/data-fetcher.js");
/* harmony import */ var _components_countup_wrapper_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/countup-wrapper.js */ "./components/countup-wrapper.js");
/* harmony import */ var _components_carro_overlay_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/carro-overlay.js */ "./components/carro-overlay.js");
/* harmony import */ var _components_volante_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/volante.js */ "./components/volante.js");
/* harmony import */ var _components_acelerometro_xy_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/acelerometro-xy.js */ "./components/acelerometro-xy.js");
/* harmony import */ var _components_acelerometro_yz_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/acelerometro-yz.js */ "./components/acelerometro-yz.js");
/* harmony import */ var _components_ecu_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/ecu.js */ "./components/ecu.js");
/* harmony import */ var _components_brake_bias_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/brake-bias.js */ "./components/brake-bias.js");
/* harmony import */ var _components_contexts_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/contexts.js */ "./components/contexts.js");















var DelayProvider = _components_contexts_js__WEBPACK_IMPORTED_MODULE_14__["DelayContext"].Provider;

var Controle =
/*#__PURE__*/
function (_DataFetcher) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Controle, _DataFetcher);

  function Controle(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Controle);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Controle).call(this, props));
    _this.page = "controle";
    _this.delay = 400;
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Controle, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "container-fluid"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(DelayProvider, {
        value: this.delay
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-md-6 col-12"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        style: {
          height: "78vh"
        }
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_carro_overlay_js__WEBPACK_IMPORTED_MODULE_8__["default"], (this.state.data || {}).control || {}))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-md col-12 mr-4"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-5 mt-3"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_volante_js__WEBPACK_IMPORTED_MODULE_9__["default"], {
        value: ((this.state.data || {}).control || {}).steeringWheel || 1810
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "offset-1"
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-6 mt-3 "
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "bordered-title-container default-container"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "component-title bordered-title-text"
      }, "PEDAIS"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Pedal, {
        title: "ACELERADOR:",
        icon: react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
          src: "/static/SVGs/gas.svg"
        }),
        value: react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_countup_wrapper_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
          end: (((this.state.data || {}).control || {}).pedals || {}).throttle / 10 || 0,
          decimals: 0,
          suffix: " %"
        })
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("hr", {
        className: "gray-separator"
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Pedal, {
        title: "FREIO:",
        icon: react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
          src: "/static/SVGs/brake.svg"
        }),
        value: (((this.state.data || {}).control || {}).pedals || {}).brake == 1 ? react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
          className: "brake-on"
        }, "ATIVADO") : react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
          className: "brake-off"
        }, "DESATIVADO")
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "pedal-content"
      })))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "row mt-1"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-12 mt-3"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "bordered-title-container default-container"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "component-title bordered-title-text"
      }, "ACELER\xD4METRO"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: " row w-100"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-md-7"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-12 component-title subtitle"
      }, "EIXO XY:"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-12"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_acelerometro_xy_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
        x: (((this.state.data || {}).control || {}).accelerometer || {}).x / 1000,
        y: (((this.state.data || {}).control || {}).accelerometer || {}).y / 1000
      })))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-md-5"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-12 component-title subtitle"
      }, "EIXO YZ:"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-12"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_acelerometro_yz_js__WEBPACK_IMPORTED_MODULE_11__["default"], {
        z: (((this.state.data || {}).control || {}).accelerometer || {}).z / 1000,
        y: (((this.state.data || {}).control || {}).accelerometer || {}).y / 1000
      })))))))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "row mt-1 mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-6 mt-3"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_ecu_js__WEBPACK_IMPORTED_MODULE_12__["default"], {
        value: ((this.state.data || {}).control || {}).ecuFlag || 0
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-6 mt-3"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_brake_bias_js__WEBPACK_IMPORTED_MODULE_13__["default"], {
        value: 50
      })))))));
    }
  }]);

  return Controle;
}(_components_data_fetcher_js__WEBPACK_IMPORTED_MODULE_6__["default"]);

function Pedal(props) {
  return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
    className: "col-12"
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
    className: "row d-flex align-items-center"
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
    className: "col no-padding-right pedal-icon"
  }, props.icon), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
    className: "col-9"
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
    className: "row"
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
    className: "col-12 pedal-title"
  }, props.title)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
    className: "row"
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
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

module.exports = __webpack_require__(/*! C:\Users\luiza\OneDrive\Documentos\Tesla\JanelaDeDados\Interface\pages\controle.js */"./pages/controle.js");


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

/***/ })

/******/ });
//# sourceMappingURL=controle.js.map