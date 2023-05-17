webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_server_head__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next-server/head */ "./node_modules/next-server/head.js");
/* harmony import */ var next_server_head__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_server_head__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_velocimetro_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/velocimetro.js */ "./components/velocimetro.js");
/* harmony import */ var _components_bateria_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/bateria.js */ "./components/bateria.js");
/* harmony import */ var _components_bms_information_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/bms-information.js */ "./components/bms-information.js");
/* harmony import */ var _components_data_fetcher_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/data-fetcher.js */ "./components/data-fetcher.js");
/* harmony import */ var _components_ecu_flag_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/ecu-flag.js */ "./components/ecu-flag.js");
/* harmony import */ var _components_bms_flag_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/bms-flag.js */ "./components/bms-flag.js");
/* harmony import */ var _components_inversor_flag_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/inversor-flag.js */ "./components/inversor-flag.js");
/* harmony import */ var _components_brake_bias_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/brake-bias.js */ "./components/brake-bias.js");
/* harmony import */ var _static_styles_styles_css__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../static/styles/styles.css */ "./static/styles/styles.css");
/* harmony import */ var _static_styles_styles_css__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_static_styles_styles_css__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _components_contexts_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../components/contexts.js */ "./components/contexts.js");
















/* 
import SerialHandler from  "../serial-handler.js" */



var DelayProvider = _components_contexts_js__WEBPACK_IMPORTED_MODULE_17__["DelayContext"].Provider;

var Index =
/*#__PURE__*/
function (_DataFetcher) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Index, _DataFetcher);

  function Index(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Index);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Index).call(this, props));
    _this.page = "geral";
    _this.delay = 400;
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Index, [{
    key: "render",
    value: function render() {
      // debugger;
      console.log(this.state.data);
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "container-fluid"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "row d-flex align-items-center index-section"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_ecu_flag_js__WEBPACK_IMPORTED_MODULE_12__["default"], {
        value: _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(((this.state.data || {}).control || {}).ecuFlag) || 2
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_bms_flag_js__WEBPACK_IMPORTED_MODULE_13__["default"], {
        value: _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(((this.state.data || {}).bms || {}).bmsFlag) || 2
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_inversor_flag_js__WEBPACK_IMPORTED_MODULE_14__["default"], {
        value: _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(((this.state.data || {}).control || {}).inversorFlag) || 2
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("br", null)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(DelayProvider, {
        value: this.delay
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "row d-flex align-items-center index-section"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "col-lg-4 col-12 mt-2 mb-2"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_bms_information_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
        maxtemperature: ((this.state.data || {}).bms || {}).maxTemperature / 10 || 0,
        meantemperature: ((this.state.data || {}).bms || {}).mediaTemperature / 10 || 0,
        minvoltage: ((this.state.data || {}).bms || {}).minVoltage / 10000 || 0,
        airstatus: ((this.state.data || {}).bms || {}).airStatus || 0,
        totalvoltage: ((this.state.data || {}).bms || {}).totalVoltage / 100 || 0,
        glvvoltage: ((this.state.data || {}).bms || {}).glvVoltage / 1000 || 0
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_brake_bias_js__WEBPACK_IMPORTED_MODULE_15__["default"], {
        value: 50
      }, " ")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "col-lg-4 col-12 mt-2 mb-2"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_velocimetro_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
        speed: ((this.state.data || {}).control || {}).mediaSpeed || 0
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "col bordered-title-container mt-2 mb-2",
        style: {
          margin: "0px 50px 0px 40px"
        }
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "d-flex justify-content-left"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "component-title bordered-title-text "
      }, "STATUS DE CARGA")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_bateria_js__WEBPACK_IMPORTED_MODULE_9__["default"], {
        charge: _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(((this.state.data || {}).bms || {}).charge) || 0
      })))));
    }
  }]);

  return Index;
}(_components_data_fetcher_js__WEBPACK_IMPORTED_MODULE_11__["default"]);

{
  /* <div class="alert alert-danger" role="alert" background-color='#dc3545'>
  {         
  }        </div> */
}
/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.9ea754334124fd36f956.hot-update.js.map