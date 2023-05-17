webpackHotUpdate("static\\development\\pages\\packs.js",{

/***/ "./pages/packs.js":
/*!************************!*\
  !*** ./pages/packs.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_data_fetcher_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/data-fetcher.js */ "./components/data-fetcher.js");
/* harmony import */ var _components_countup_wrapper_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/countup-wrapper.js */ "./components/countup-wrapper.js");
/* harmony import */ var _components_contexts_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/contexts.js */ "./components/contexts.js");
/* harmony import */ var _components_ecu_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/ecu.js */ "./components/ecu.js");












var DelayProvider = _components_contexts_js__WEBPACK_IMPORTED_MODULE_10__["DelayContext"].Provider;

var Packs =
/*#__PURE__*/
function (_DataFetcher) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Packs, _DataFetcher);

  function Packs(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Packs);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Packs).call(this, props));
    _this.page = "packs";
    _this.delay = 1000;
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Packs, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "container-fluid"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(DelayProvider, {
        value: this.delay
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_ecu_js__WEBPACK_IMPORTED_MODULE_11__["default"], {
        value: _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1___default()(((this.state.data || {}).control || {}).ecuFlag) || 2
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "col-lg-3 col-6"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(PacksInformation, {
        title: "TENSÃO TOTAL",
        value: ((this.state.data || {}).bms || {}).totalVoltage / 100 || 0,
        unit: "V"
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "col-lg-3 col-6"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(PacksInformation, {
        title: "CORRENTE MÉDIA",
        value: ((this.state.data || {}).bms || {}).mediaCurrent / 10 || 0,
        unit: "A"
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "col-lg-3 col-6"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(PacksInformation, {
        title: "TEMPERATURA MÁXIMA",
        value: ((this.state.data || {}).bms || {}).maxTemperature / 10 || 0,
        unit: "ºC"
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "col-lg-3 col-6"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(PacksInformation, {
        title: "TENSÃO MÍNIMA",
        value: ((this.state.data || {}).bms || {}).minVoltage / 10000 || 0,
        unit: "V"
      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "col-12"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "row"
      }, (((this.state.data || {}).bms || {}).packs || []).map(function (pack, index) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: "col-12 col-lg-6 mt-3"
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Pack, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
          key: index,
          packIndex: index + 1
        }, pack)));
      }))))));
    }
  }]);

  return Packs;
}(_components_data_fetcher_js__WEBPACK_IMPORTED_MODULE_8__["default"]);

function PacksInformation(props) {
  return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
    className: "packs-information-container"
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
    className: "packs-information-title"
  }, props.title), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
    className: "packs-information-value-wrapper"
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_countup_wrapper_js__WEBPACK_IMPORTED_MODULE_9__["default"], {
    end: props.value
  }, function (_ref) {
    var countUpRef = _ref.countUpRef;
    return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
      ref: countUpRef,
      className: "packs-information-value"
    });
  }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
    className: "packs-information-unit"
  }, props.unit)));
}

function Pack(props) {
  return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
    className: "pack-container"
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
    className: "pack-title-wrapper"
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
    className: "pack-title"
  }, "PACK ", props.packIndex - 1)), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
    className: "pack-content"
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
    className: "pack-voltages"
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
    className: "pack-section-title"
  }, "TENS\xD5ES"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
    className: "pack-section-values"
  }, props.cells.map(function (cell, index) {
    return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_countup_wrapper_js__WEBPACK_IMPORTED_MODULE_9__["default"], {
      end: cell / 10000.0 || 0,
      duration: 5,
      useEasing: false
    }, function (_ref2) {
      var countUpRef = _ref2.countUpRef;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        key: "c-" + index,
        ref: countUpRef,
        className: "pack-value " + (cell >= 35500 ? "over-voltage" : cell <= 28000 ? "under-voltage" : "")
      });
    });
  }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
    className: "pack-temperatures"
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
    className: "pack-section-title"
  }, "TEMPERATURAS"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
    className: "pack-section-values"
  }, props.temperatures.map(function (temperature, index) {
    return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_countup_wrapper_js__WEBPACK_IMPORTED_MODULE_9__["default"], {
      end: temperature / 10.0 || 0,
      duration: 5,
      useEasing: false
    }, function (_ref3) {
      var countUpRef = _ref3.countUpRef;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        key: "t-" + index,
        ref: countUpRef,
        className: "pack-value " + (temperature >= 55000 ? "over-temperature" : "")
      });
    });
  })))));
}

/* harmony default export */ __webpack_exports__["default"] = (Packs);

/***/ })

})
//# sourceMappingURL=packs.js.13594718f6f6bca47fd9.hot-update.js.map