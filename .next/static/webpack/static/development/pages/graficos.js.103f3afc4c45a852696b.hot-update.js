webpackHotUpdate("static\\development\\pages\\graficos.js",{

/***/ "./pages/graficos.js":
/*!***************************!*\
  !*** ./pages/graficos.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-float */ "./node_modules/@babel/runtime-corejs2/core-js/parse-float.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_get__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/get */ "./node_modules/@babel/runtime-corejs2/helpers/esm/get.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _components_data_fetcher_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/data-fetcher.js */ "./components/data-fetcher.js");
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! recharts */ "./node_modules/recharts/es6/index.js");
/* harmony import */ var _components_contexts_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../components/contexts.js */ "./components/contexts.js");
/* harmony import */ var _components_constants_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../components/constants.js */ "./components/constants.js");
/* harmony import */ var _components_constants_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_components_constants_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _components_ecu_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../components/ecu.js */ "./components/ecu.js");




















var DelayProvider = _components_contexts_js__WEBPACK_IMPORTED_MODULE_17__["DelayContext"].Provider;
var i = 1;

var Graficos =
/*#__PURE__*/
function (_DataFetcher) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_12__["default"])(Graficos, _DataFetcher);

  function Graficos(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__["default"])(this, Graficos);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_8__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_10__["default"])(Graficos).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_13__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this), "renderLegendText", function (value) {
      return _components_constants_js__WEBPACK_IMPORTED_MODULE_18__["availablePlotOptions"][_this.mappedPlotingFields[value]].name;
    });

    _this.delay = 1000 / _components_constants_js__WEBPACK_IMPORTED_MODULE_18__["pointsPerSecond"];
    _this.rootPage = "plot/";
    _this.page = "";
    _this.state.plotData = [{
      name: 'Page 0',
      value: Math.random() * 100
    }];
    _this.state.data = [];
    _this.generateData = _this.generateData.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this));
    _this.dado1Change = _this.dado1Change.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this));
    _this.dado2Change = _this.dado2Change.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this));
    _this.buildPage = _this.buildPage.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this));
    _this.state.dado1 = "null";
    _this.state.dado2 = "null";
    _this.shouldFetch = true;
    _this.lastTimestamps = [0, 0];
    _this.lastData = [];
    _this.lastMergedTimestamps = [0, 0];
    _this.lastMergedData = [];
    _this.mappedPlotingFields = {};

    _this.mapPlotFields(); // this.itemsPerFetch = persistanceTimeout/1000 * receivePerSecond;
    // this.actualPerSecond = this.itemsPerFetch / persistanceTimeout/10000;
    // this.reduceRatio = parseInt(receivePerSecond / pointsPerSecond);


    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__["default"])(Graficos, [{
    key: "mapPlotFields",
    value: function () {
      var _mapPlotFields = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee() {
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.mappedPlotingFields = _components_constants_js__WEBPACK_IMPORTED_MODULE_18__["availablePlotOptions"].reduce(function (obj, item, index) {
                  return obj[item.index] = index, obj;
                }, {});

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function mapPlotFields() {
        return _mapPlotFields.apply(this, arguments);
      }

      return mapPlotFields;
    }()
  }, {
    key: "generateData",
    value: function generateData() {
      var prototype = {
        name: 'Page ' + i,
        value: Math.random() * 100
      };
      i++;
      var data = this.state.plotData;
      data.push(prototype); // console.log(data);

      this.setState({
        plotData: data
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      Object(_babel_runtime_corejs2_helpers_esm_get__WEBPACK_IMPORTED_MODULE_11__["default"])(Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_10__["default"])(Graficos.prototype), "componentDidMount", this).call(this);

      this.stopFetching();

      Object(_babel_runtime_corejs2_helpers_esm_get__WEBPACK_IMPORTED_MODULE_11__["default"])(Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_10__["default"])(Graficos.prototype), "doFetch", this).call(this); // this.shouldFetch = true;
      // console.log("child did mount");
      // this.grTimer = setInterval(this.generateData, 1000);

    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      Object(_babel_runtime_corejs2_helpers_esm_get__WEBPACK_IMPORTED_MODULE_11__["default"])(Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_10__["default"])(Graficos.prototype), "componentWillUnmount", this).call(this); // clearInterval(this.grTimer);

    }
  }, {
    key: "dado1Change",
    value: function dado1Change(event) {
      console.log("dado 1 changed");
      var id = event.target.value; // debugger;

      this.setState({
        dado1: id
      }, this.buildPage);
      this.lastTimestamps[0] = 0;
      this.lastData[0] = [];
      this.lastMergedData = [];
      this.lastMergedTimestamps[0] = 0; // this.resetData();
    }
  }, {
    key: "dado2Change",
    value: function dado2Change(event) {
      console.log("dado 2 changed");
      var id = event.target.value;
      this.setState({
        dado2: id
      }, this.buildPage); // this.resetData();

      this.lastTimestamps[1] = 0;
      this.lastData[1] = [];
      this.lastMergedData = [];
      this.lastMergedTimestamps[1] = 0;
    }
  }, {
    key: "resetData",
    value: function resetData() {}
  }, {
    key: "gaugeFrequency",
    value: function gaugeFrequency(filteredValues) {
      var iterationBasis = 20;
      var iterationQuan = filteredValues.length - 1 < iterationBasis ? filteredValues.length - 1 : iterationBasis; // debugger;
      //calcula frequência de recebimento a partir dos primeiros iterationQuan itens, isso para definir a razão de redução

      var sumDiff1 = 0;

      for (var freqI = 0; freqI < iterationQuan - 1; freqI++) {
        var diff1 = filteredValues[freqI + 1].timestamp - filteredValues[freqI].timestamp;
        sumDiff1 += diff1;
      }

      var sumDiff2 = 0;

      for (var freqI = filteredValues.length - 1; freqI > filteredValues.length - iterationQuan - 1; freqI--) {
        var diff2 = filteredValues[freqI].timestamp - filteredValues[freqI - 1].timestamp;
        sumDiff2 += diff2;
      }

      var afferedFrequency = 1000 / ((sumDiff1 + sumDiff2) / (2 * (iterationQuan - 1)));

      var rat = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_3___default()(afferedFrequency / _components_constants_js__WEBPACK_IMPORTED_MODULE_18__["pointsPerSecond"]);

      var lastRatio = this.reduceRatio; //trava a redução em 1

      var newRatio = rat > 1 ? rat : 1; //só se tiver um erro menor de 50% da última aferição, usa a nova aferição

      if (Math.abs(newRatio - lastRatio) < lastRatio * 0.5) {
        this.reduceRatio = newRatio; //senao, calcula a frequencia novamente so que com todos os componentes
      } else {
        var sumDiff = 0;

        for (var freqI = 0; freqI < filteredValues.length - 1; freqI++) {
          var diff = filteredValues[freqI + 1].timestamp - filteredValues[freqI].timestamp;
          sumDiff += diff;
        }

        var averageFreq = 1000 / (sumDiff / (filteredValues.length - 1)); // debugger;

        var _rat = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_3___default()(averageFreq / _components_constants_js__WEBPACK_IMPORTED_MODULE_18__["pointsPerSecond"]); //trava a redução em 1


        this.reduceRatio = _rat > 1 ? _rat : 1;
      }

      console.log("Reduce ratio: " + this.reduceRatio);
    }
  }, {
    key: "treatData",
    value: function treatData(data) {
      var actualDate = new Date().getTime();

      var compareFunction = function compareFunction(a, b) {
        return a.timestamp - b.timestamp;
      };

      var limitDate = new Date().getTime() - _components_constants_js__WEBPACK_IMPORTED_MODULE_18__["persistanceTimeout"];
      var keys = []; // debugger;

      var lastMergedTimes = this.lastMergedTimestamps.slice(0);

      var _arr = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(data);

      for (var _i = 0; _i < _arr.length; _i++) {
        var key = _arr[_i];
        if (isNaN(key)) continue; //TALVEZ N SEJA NECESSARIO

        var filteredValues = data[key].filter(function (entry) {
          return entry.timestamp >= limitDate;
        });
        var lastTimestamp = this.lastTimestamps[keys.length];
        filteredValues.sort(compareFunction);
        this.lastTimestamps[keys.length] = filteredValues[filteredValues.length - 1].timestamp; // debugger;

        this.gaugeFrequency(filteredValues); // const contIndex = filteredValues.findIndex(value => value.timestamp == lastTimestamp.crude);

        var newValues = []; // debugger;

        var breakFlag = false;

        for (var j = filteredValues.length - 1; j >= 0; j -= this.reduceRatio) {
          var v = _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default()({}, filteredValues[j]); // let sTime = 0, sVal = 0;
          // for (var k = 0; k < quanT; k++) {
          //     if (j+k >= filteredValues.length) break;
          //     sTime += filteredValues[j+k].timestamp;
          //     sVal += parseFloat(filteredValues[j+k].value);
          // }
          // v.value = sVal/k;
          // v.timestamp = sTime/k;
          // newValues.push(v);


          var sTime = 0,
              sVal = 0;
          var summedQuan = 0;

          for (var k = 0; k < this.reduceRatio; k++) {
            if (j - k < 0) break;

            if (filteredValues[j - k].timestamp == lastTimestamp) {
              breakFlag = true;

              if (k != 0) {
                var el = newValues.pop();
                sVal += el.value * this.reduceRatio;
                sTime += el.timestamp * this.reduceRatio;
                summedQuan += this.reduceRatio;
              }

              break;
            } // if (filteredValues[j-k].value > sVal) sVal = filteredValues[j-k].value;


            sVal += _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_0___default()(filteredValues[j - k].value);
            sTime += filteredValues[j - k].timestamp;
            summedQuan++; // sVal += parseFloat(filteredValues[j+k].value);
          } //se a proxima iteração não conseguir agrupar reduceRatio elementos, entao agrupa eles na atual. isso reduz picos no grafico
          // if (!breakFlag && (j-k-this.reduceRatio < 0)) {
          //     j-=this.reduceRatio;
          //     summedQuan = 0;
          //     for (let k2 = 0; k2 < this.reduceRatio; k2++) {
          //         if (j-k2 < 0) break;
          //         if (filteredValues[j-k2].timestamp == lastTimestamp) {
          //             breakFlag = true;
          //             break;
          //         }
          //         // if (filteredValues[j-k].value > sVal) sVal = filteredValues[j-k].value;
          //         sVal += parseFloat(filteredValues[j-k2].value);
          //         sTime += filteredValues[j-k2].timestamp;
          //         summedQuan++;
          //         // sVal += parseFloat(filteredValues[j+k].value);
          //     }
          // }


          if (sTime != 0) {
            v.value = sVal / summedQuan;
            v.timestamp = sTime / summedQuan;
            newValues.push(v);
          }

          if (breakFlag) break;
        }

        newValues = newValues.reverse(); // debugger;
        //GUARDA OS TIMESTAMPS JA FORMATADOS PARA DEPOIS AFERIR ONDE PARAR NO AGRUPAMENTO
        //TODO: TRAVANDO (DANDO UNDEFINED), CONSERTAR

        if (typeof newValues[newValues.length - 1].timestamp == 'undefined') debugger;
        this.lastMergedTimestamps[keys.length] = newValues[newValues.length - 1].timestamp; //se setado, entao encotrou um timestamp igual ao ultimo timestamp. entao reaproveita os ultimos dados

        if (breakFlag) {
          // debugger;
          var fromIndex = this.lastData[keys.length].findIndex(function (value) {
            return value.timestamp >= actualDate - _components_constants_js__WEBPACK_IMPORTED_MODULE_18__["persistanceTimeout"];
          });
          var lastDataPart = this.lastData[keys.length].slice(fromIndex);
          newValues = lastDataPart.concat(newValues);
        }

        this.lastData[keys.length] = newValues; // debugger;

        data[key] = newValues;
        i++;
        keys.push(key);
      } // const newData = Object.entries(data).map(
      //     ([key, value]) => value.sort(compareFunction)
      // )


      console.log("data treated"); // debugger;

      var merged = this.mergeData(data, keys, lastMergedTimes, actualDate);
      return this.formatData(merged, actualDate, keys);
    }
  }, {
    key: "formatData",
    value: function formatData(data, actualDate, keys) {
      var _this2 = this;

      var finalValue = data.map(function (value) {
        var nValue = _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default()({}, value);

        nValue.timestamp = -(actualDate - nValue.timestamp) / 1000; //formata o valor de acordo com a formatFn definida na constants.js

        keys.forEach(function (key) {
          return nValue[key] = _components_constants_js__WEBPACK_IMPORTED_MODULE_18__["availablePlotOptions"][_this2.mappedPlotingFields[key]].formatFn(nValue[key]);
        });
        return nValue;
      }, this);
      return finalValue;
    }
  }, {
    key: "mergeData",
    value: function mergeData(data, keys, lastMergedTimestamps, actualDate) {
      if (keys.length == 1) {
        var values = data[keys[0]];
        return values.map(function (element) {
          var _ref;

          return _ref = {}, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_13__["default"])(_ref, element.field, element.value), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_13__["default"])(_ref, "timestamp", element.timestamp), _ref;
        });
      }

      var component1 = data[keys[0]];
      var component2 = data[keys[1]]; // debugger;
      // console.log(component1.map(element => element.timestamp))
      // console.log(component2.map(element => element.timestamp))

      var size1 = component1.length;
      var size2 = component2.length;

      var buildNewValue = function buildNewValue(value1, value2, keys) {
        var _ref2;

        return _ref2 = {}, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_13__["default"])(_ref2, keys[0], value1.value), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_13__["default"])(_ref2, keys[1], value2.value), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_13__["default"])(_ref2, "timestamp", (value1.timestamp + value2.timestamp) / 2), _ref2;
      };

      var index1 = size1 - 1,
          index2 = size2 - 1;
      var newData = []; // debugger;

      while (true) {
        var value1 = component1[index1];
        var value2 = component2[index2];

        if (this.lastMergedData.length > 0 && (value1.timestamp == lastMergedTimestamps[0] || value2.timestamp == lastMergedTimestamps[1])) {
          //cancela geração e pega do lastMergedData
          var fromIndex = this.lastMergedData.findIndex(function (value) {
            return value.timestamp >= actualDate - _components_constants_js__WEBPACK_IMPORTED_MODULE_18__["persistanceTimeout"];
          });
          var lastDataPart = this.lastMergedData.slice(fromIndex);
          newData = lastDataPart.concat(newData.reverse());
          this.lastMergedData = newData;
          break;
        }

        if (value1.timestamp < value2.timestamp) {
          var difference = Math.abs(value2.timestamp - value1.timestamp);

          while (index2 - 1 >= 0 && Math.abs(component2[index2 - 1].timestamp - value1.timestamp) < difference) {
            index2--;
            difference = Math.abs(component2[index2].timestamp - value1.timestamp);
          }

          newData.push(buildNewValue(value1, component2[index2], keys));
        } else if (value1.timestamp > value2.timestamp) {
          var _difference = Math.abs(value2.timestamp - value1.timestamp);

          while (index1 - 1 >= 0 && Math.abs(component1[index1 - 1].timestamp - value2.timestamp) < _difference) {
            index1--;
            _difference = Math.abs(component1[index1].timestamp - value2.timestamp);
          }

          newData.push(buildNewValue(component1[index1], value2, keys));
        } else {
          newData.push(buildNewValue(value1, value2, keys));
        }

        index1--;
        index2--;
        if (index2 < 0 || index1 < 0) break;
      }

      return newData;
    }
  }, {
    key: "buildPage",
    value: function buildPage() {
      this.page = (this.state.dado1 != "null" ? "?id=" + this.state.dado1 : "") + (this.state.dado2 != "null" ? "&id=" + this.state.dado2 : ""); // debugger;

      this.startFetching(); // console.log(this.page);
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      // console.log(persistanceTimeout);
      // console.log(this.state.data);
      return react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
        className: "container-fluid"
      }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(DelayProvider, {
        value: this.delay
      }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("form", null, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
        className: "col-6"
      }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
        className: "d-flex justify-content-center align-items-center form-group dados-grafico"
      }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
        className: "dado-grafico-title"
      }, "DADO 1:", "  "), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("select", {
        value: this.state.dado1,
        className: "form-control",
        onChange: this.dado1Change
      }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("option", {
        value: "null",
        defaultValue: "selected"
      }, "Selecione"), _components_constants_js__WEBPACK_IMPORTED_MODULE_18__["availablePlotOptions"].map(function (value) {
        return react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("option", {
          value: value.index
        }, value.name);
      })))), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
        className: "col-6"
      }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
        className: "d-flex justify-content-center align-items-center form-group dados-grafico"
      }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
        className: "dado-grafico-title"
      }, "DADO 2:", "  "), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("select", {
        value: this.state.dado2,
        className: "form-control",
        onChange: this.dado2Change
      }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("option", {
        value: "null",
        selected: "selected"
      }, "Selecione"), this.state.dado1 != "null" && _components_constants_js__WEBPACK_IMPORTED_MODULE_18__["availablePlotOptions"].map(function (value) {
        if (value.index != _this3.state.dado1) {
          return react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("option", {
            value: value.index
          }, value.name);
        } else {
          return false;
        }
      })))))), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
        className: "col-12"
      }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_16__["ResponsiveContainer"], {
        minHeight: "70vh"
      }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_16__["LineChart"], {
        data: this.state.data,
        margin: {
          top: 10,
          right: 15,
          bottom: 15,
          left: 15
        },
        key: Math.random()
      }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_16__["CartesianGrid"], {
        stroke: "#838383",
        strokeDasharray: "3 3"
      }), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_16__["XAxis"], {
        type: "number",
        dataKey: "timestamp"
      }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_16__["Label"], {
        value: "Tempo [s]",
        offset: -10,
        position: "insideBottomRight"
      })), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_16__["Legend"], {
        formatter: this.renderLegendText
      }), this.state.dado1 != "null" && react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_16__["YAxis"], {
        yAxisId: "left",
        label: {
          content: react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(UnitLabel, null),
          value: _components_constants_js__WEBPACK_IMPORTED_MODULE_18__["availablePlotOptions"][this.mappedPlotingFields[this.state.dado1]].name + " - [" + _components_constants_js__WEBPACK_IMPORTED_MODULE_18__["availablePlotOptions"][this.mappedPlotingFields[this.state.dado1]].unidade + "]",
          position: 'left',
          angle: -90
        }
      }), this.state.dado2 != "null" && react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_16__["YAxis"], {
        yAxisId: "right",
        label: {
          content: react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(UnitLabel, null),
          value: _components_constants_js__WEBPACK_IMPORTED_MODULE_18__["availablePlotOptions"][this.mappedPlotingFields[this.state.dado2]].name + " - [" + _components_constants_js__WEBPACK_IMPORTED_MODULE_18__["availablePlotOptions"][this.mappedPlotingFields[this.state.dado2]].unidade + "]",
          position: 'right',
          angle: -90,
          offset: 50
        },
        orientation: "right"
      }), this.state.dado1 != "null" && react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_16__["Line"], {
        yAxisId: "left",
        dot: react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(CustomDot, null),
        type: "monotone",
        dataKey: this.state.dado1,
        strokeWidth: 2,
        isAnimationActive: false
      }), this.state.dado2 != "null" && react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_16__["Line"], {
        yAxisId: "right",
        dot: react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(CustomDot, null),
        type: "monotone",
        dataKey: this.state.dado2,
        strokeWidth: 2,
        isAnimationActive: false,
        stroke: "#008017"
      })))))));
    }
  }]);

  return Graficos;
}(_components_data_fetcher_js__WEBPACK_IMPORTED_MODULE_15__["default"]);

function UnitLabel(props) {
  // console.log(props);
  var viewBox = props.viewBox,
      value = props.value,
      angle = props.angle,
      offset = props.offset; // return (<div>{value}</div>);

  return react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("text", {
    transform: "rotate(" + angle + ", " + viewBox.x + ", " + viewBox.y + ")",
    x: viewBox.x,
    y: viewBox.y,
    dx: -20,
    dy: 10 + offset,
    fill: "whitesmoke",
    fontFamily: "Exo",
    fontSize: "1rem",
    textAnchor: "end"
  }, value);
}

function CustomDot(props) {
  var cx = props.cx,
      cy = props.cy,
      stroke = props.stroke;
  return react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("circle", {
    cx: cx,
    cy: cy,
    r: 3,
    stroke: stroke,
    strokeWidth: 2,
    fill: "whitesmoke"
  });
}

/* harmony default export */ __webpack_exports__["default"] = (Graficos);

/***/ })

})
//# sourceMappingURL=graficos.js.103f3afc4c45a852696b.hot-update.js.map