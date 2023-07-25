webpackHotUpdate("static\\development\\pages\\controle.js",{

/***/ "./pages/controle.js":
/*!***************************!*\
  !*** ./pages/controle.js ***!
  \***************************/
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
/* harmony import */ var _components_data_fetcher_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/data-fetcher.js */ "./components/data-fetcher.js");
/* harmony import */ var _components_countup_wrapper_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/countup-wrapper.js */ "./components/countup-wrapper.js");
/* harmony import */ var _components_carro_overlay_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/carro-overlay.js */ "./components/carro-overlay.js");
/* harmony import */ var _components_volante_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/volante.js */ "./components/volante.js");
/* harmony import */ var _components_acelerometro_xy_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/acelerometro-xy.js */ "./components/acelerometro-xy.js");
/* harmony import */ var _components_acelerometro_yz_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/acelerometro-yz.js */ "./components/acelerometro-yz.js");
/* harmony import */ var _components_ecu_flag_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/ecu-flag.js */ "./components/ecu-flag.js");
/* harmony import */ var _components_bms_flag_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/bms-flag.js */ "./components/bms-flag.js");
/* harmony import */ var _components_inversor_flag_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/inversor-flag.js */ "./components/inversor-flag.js");
/* harmony import */ var _components_contexts_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/contexts.js */ "./components/contexts.js");

















var DelayProvider = _components_contexts_js__WEBPACK_IMPORTED_MODULE_16__["DelayContext"].Provider;
var Controle = /*#__PURE__*/function (_DataFetcher) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Controle, _DataFetcher);
  function Controle(props) {
    var _this;
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Controle);
    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Controle).call(this, props));
    _this.page = "controle";
    _this.delay = 400;
    return _this;
  }
  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Controle, [{
    key: "render",
    value: function render() {
      console.log(this.state.data);
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "container-fluid"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(DelayProvider, {
        value: this.delay
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        class: "row justify-content-between"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        class: "col-4"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_ecu_flag_js__WEBPACK_IMPORTED_MODULE_13__["default"], {
        value: _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(((this.state.data || {}).control || {}).ecuFlag) || 2
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        class: "col-4"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_bms_flag_js__WEBPACK_IMPORTED_MODULE_14__["default"], {
        value: _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(((this.state.data || {}).control || {}).bmsFlag) || 2
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        class: "col-4"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_inversor_flag_js__WEBPACK_IMPORTED_MODULE_15__["default"], {
        value: _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(((((this.state.data || {}).control || {}).inversor || {}).flag || {}).inversorFlag) || 2
      }))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "col-md-6 col-12"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        style: {
          height: "78vh"
        }
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_carro_overlay_js__WEBPACK_IMPORTED_MODULE_9__["default"], (this.state.data || {}).control || {}))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "col-md col-12 mr-4"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "col-5 mt-3"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_volante_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
        value: ((this.state.data || {}).control || {}).steeringWheel || 180
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "offset-1"
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "col-6 mt-3 "
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "bordered-title-container default-container"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "component-title bordered-title-text"
      }, "PEDAIS"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Pedal, {
        title: "ACELERADOR:",
        icon: react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
          src: "/static/SVGs/gas.svg"
        }),
        value: react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_countup_wrapper_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
          end: (((this.state.data || {}).control || {}).pedals || {}).throttle / 10 || 0,
          decimals: 0
        })
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("hr", {
        className: "gray-separator"
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Pedal, {
        title: "FREIO:",
        icon: react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
          src: "/static/SVGs/brake.svg"
        }),
        value: (((this.state.data || {}).control || {}).pedals || {}).brake / 10 || 0,
        decimals: 0
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "pedal-content"
      })))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "row mt-1"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "col-12 mt-3"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "bordered-title-container default-container"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "component-title bordered-title-text"
      }, "ACELER\xD4METRO"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: " row w-100"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "col-md-7"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "col-12 component-title subtitle"
      }, "EIXO XY:"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "col-12"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_acelerometro_xy_js__WEBPACK_IMPORTED_MODULE_11__["default"], {
        x: (((this.state.data || {}).control || {}).accelerometer || {}).x / 1000,
        y: (((this.state.data || {}).control || {}).accelerometer || {}).y / 1000
      })))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "col-md-5"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "col-12 component-title subtitle"
      }, "EIXO YZ:"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "col-12"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_acelerometro_yz_js__WEBPACK_IMPORTED_MODULE_12__["default"], {
        z: (((this.state.data || {}).control || {}).accelerometer || {}).z / 1000,
        y: (((this.state.data || {}).control || {}).accelerometer || {}).y / 1000
      })))))))))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "row mt-4 mb-4"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "col-4 mt-3"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "bordered-title-container default-container"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "component-title bordered-title-text"
      }, "PRESS\xC3O FREIO"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: ""
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", null, "Press\xE3o dianteira:", (((this.state.data || {}).control || {}).brakes || {}).frontTires || 0), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", null, "Press\xE3o traseira:", (((this.state.data || {}).control || {}).brakes || {}).backTires || 0)))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "col-4 mt-3"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "bordered-title-container default-container"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "component-title bordered-title-text"
      }, "GIROSC\xD3PIO"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: " row w-100"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "col-md-7"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "col-12 component-title subtitle"
      }, "EIXO XY:"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "col-12"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_acelerometro_xy_js__WEBPACK_IMPORTED_MODULE_11__["default"], {
        x: (((this.state.data || {}).control || {}).accelerometer || {}).x / 1000,
        y: (((this.state.data || {}).control || {}).accelerometer || {}).y / 1000
      })))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "col-md-5"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "col-12 component-title subtitle"
      }, "EIXO YZ:"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "col-12"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_acelerometro_yz_js__WEBPACK_IMPORTED_MODULE_12__["default"], {
        z: (((this.state.data || {}).control || {}).accelerometer || {}).z / 1000,
        y: (((this.state.data || {}).control || {}).accelerometer || {}).y / 1000
      }))))))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "col-4 mt-3"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "bordered-title-container default-container"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "component-title bordered-title-text"
      }, "HODOMEtrO"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: ""
      }, "sla oq eh hodometro"))))));
    }
  }]);
  return Controle;
}(_components_data_fetcher_js__WEBPACK_IMPORTED_MODULE_7__["default"]);
function Pedal(props) {
  return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "col-12"
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "row d-flex align-items-center"
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "col no-padding-right pedal-icon"
  }, props.icon), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "col-9"
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "row"
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "col-12 pedal-title"
  }, props.title)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "row"
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "col-12 pedal-value"
  }, props.value, " % ")))));
}
/* harmony default export */ __webpack_exports__["default"] = (Controle);

/***/ })

})
//# sourceMappingURL=controle.js.5493277a6a8354d0cef1.hot-update.js.map