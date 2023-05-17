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
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ({

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
      switch (this.props.value) {
        case 0:
          return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
            className: "default-container bordered-text-container"
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
            className: "component-title bordered-title-text"
          }, "ECU FLAG"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h4", null, "Erro de plausabilidade entre BSE e APPS"));
          break;

        case 1:
          return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
            className: "default-container bordered-title-container"
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
            className: "component-title bordered-title-text"
          }, "ECU FLAG"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h4", null, "Erro de plausabilidade entre APPS"));
          break;

        case 8:
          return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
            className: "default-container bordered-title-container"
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
            className: "component-title bordered-title-text"
          }, "ECU FLAG"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h4", null, "Erro de comunica\xE7\xE3o do inversor"));
          break;

        case 9:
          return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
            className: "default-container bordered-title-container"
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
            className: "component-title bordered-title-text"
          }, "ECU FLAG"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h4", null, "Curto detectado na placa de freio"));
          break;

        case 10:
          return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
            className: "default-container bordered-title-container"
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
            className: "component-title bordered-title-text"
          }, "ECU FLAG"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h4", null, "Erro de bus off na CAN do inversor"));

        default:
          return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
            className: "default-container bordered-title-container"
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
            className: "component-title bordered-title-text"
          }, "ECU FLAG"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h4", null, "Sem erros detectados"));
          break;
      }
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

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

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

/***/ "./node_modules/@babel/runtime-corejs2/core-js/parse-float.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/parse-float.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/parse-float */ "core-js/library/fn/parse-float");

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

/***/ "./node_modules/@babel/runtime-corejs2/core-js/reflect/get.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/reflect/get.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/reflect/get */ "core-js/library/fn/reflect/get");

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

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/get.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/get.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _get; });
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_reflect_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/reflect/get */ "./node_modules/@babel/runtime-corejs2/core-js/reflect/get.js");
/* harmony import */ var _core_js_reflect_get__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_reflect_get__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _superPropBase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./superPropBase */ "./node_modules/@babel/runtime-corejs2/helpers/esm/superPropBase.js");




function _get(target, property, receiver) {
  if (typeof Reflect !== "undefined" && _core_js_reflect_get__WEBPACK_IMPORTED_MODULE_1___default.a) {
    _get = _core_js_reflect_get__WEBPACK_IMPORTED_MODULE_1___default.a;
  } else {
    _get = function _get(target, property, receiver) {
      var base = Object(_superPropBase__WEBPACK_IMPORTED_MODULE_3__["default"])(target, property);
      if (!base) return;

      var desc = _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(base, property);

      if (desc.get) {
        return desc.get.call(receiver);
      }

      return desc.value;
    };
  }

  return _get(target, property, receiver || target);
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

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/superPropBase.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/superPropBase.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _superPropBase; });
/* harmony import */ var _getPrototypeOf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");

function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = Object(_getPrototypeOf__WEBPACK_IMPORTED_MODULE_0__["default"])(object);
    if (object === null) break;
  }

  return object;
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _components_data_fetcher_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/data-fetcher.js */ "./components/data-fetcher.js");
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! recharts */ "recharts");
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(recharts__WEBPACK_IMPORTED_MODULE_16__);
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
      }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_components_ecu_js__WEBPACK_IMPORTED_MODULE_19__["default"], {
        value: _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_3___default()(((this.state.data || {}).control || {}).ecuFlag) || 2
      }), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("form", null, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
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

/***/ }),

/***/ 7:
/*!*********************************!*\
  !*** multi ./pages/graficos.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\luiza\OneDrive\Documentos\Tesla\JanelaDeDados\Interface\pages\graficos.js */"./pages/graficos.js");


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

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

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

/***/ "core-js/library/fn/parse-float":
/*!*************************************************!*\
  !*** external "core-js/library/fn/parse-float" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/parse-float");

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

/***/ "core-js/library/fn/reflect/get":
/*!*************************************************!*\
  !*** external "core-js/library/fn/reflect/get" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/reflect/get");

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

/***/ "react-toastify":
/*!*********************************!*\
  !*** external "react-toastify" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-toastify");

/***/ }),

/***/ "recharts":
/*!***************************!*\
  !*** external "recharts" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("recharts");

/***/ })

/******/ });
//# sourceMappingURL=graficos.js.map