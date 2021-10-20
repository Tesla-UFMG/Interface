webpackHotUpdate("static\\development\\pages\\packs.js",{

/***/ "./components/constants.js":
/*!*********************************!*\
  !*** ./components/constants.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process, __dirname) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _values = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/values */ "./node_modules/@babel/runtime-corejs2/core-js/object/values.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js"));

var _parseInt2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js"));

var _keys = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js"));

var _fields;

//PARA REGISTRAR UM NOVO DADO:
//primeiramente, em TypeFields, adicione mais uma linha, incrementando o índice em 1 e o nome do dado em camelCase
//depois, adicione mais uma linha em availableField, com o index sendo o mesmo índice do TypeFields.
//se for um dado que tenha possibilidade de ser plotado em tempo real, adicione-o em availablePlotOPtion.
var isOnClient = !!(typeof (void 0) === 'undefined' || typeof window !== 'undefined' && window.document && window.document.createElement && (0, _keys.default)(process.env).length === 0 && process.env.constructor === Object);
var fs = isOnClient ? null : __webpack_require__(/*! fs */ "./node_modules/node-libs-browser/mock/empty.js");
if (typeof (void 0) !== 'undefined') (void 0)['.properties'] = function (module, filename) {
  module.exports = fs.readFileSync(filename, 'utf8');
};
var configFileName = 'config.properties';

var pr = __webpack_require__(/*! ../config.properties */ "./config.properties");

var file = typeof pr == 'object' ? pr.default : pr; // let file = properties;

if (!isOnClient) {
  if (file === '') {
    var configTemplate = "# TIPO DE OPERA\xC7\xC3O\n# Valores poss\xEDveis:\n# BYTES  - Recebimento por Xbee em formato de bytes\n# STRING - Recebimento por Xbee ou NRF em formato de string\n# API_BYTES  - Recebimento por Xbee em API mode por bytes\n# API_STRING - Recebimento por Xbee em API mode por string\n# [default = STRING]\noperationType = STRING\n\n# [string] [default = 0013A20041932DC6] Endere\xE7o 64bits do xbee transmissor.\nxbeeSourceAddress = 0013A20041932DC6\n\n# PORTA SERIAL\n\n# [string] [default = ] Nome da porta serial que o dispositivo receptor se encontra. Deixe vazio para identifica\xE7\xE3o autom\xE1tica.\nportName = \n# [string] [default = ignore-ports.txt] Nome do arquivo de texto, na pasta raiz, contendo nome de portas para serem ignoradas na identifica\xE7\xE3o autom\xE1tica de porta, separados por linha.\nignorePortsFile = ignore-ports.txt\n\n# NOTIFICA\xC7\xD5ES\n\n# [bool] [default = true] Ativar ou desativar notifica\xE7\xF5es\nshouldNotify = true\n# [number] [default = 10] Limite percentual para acionar a notifica\xE7\xE3o que alerta da proximidade do valor m\xEDnimo/m\xE1ximo\npercentageLimitTolerance = 10\n# [number] [default = 30000] Tempo de timeout em milissegundos para a notifica\xE7\xE3o ser reacionada caso a condi\xE7\xE3o n\xE3o mude\nnotificationExpirationTimeout = 30000\n\n# DATALOG\n\n# [string] [default = ./datalog/] Caminho para a escrita do datalog. O DIRET\xD3RIO N\xC3O \xC9 CRIADO, ENTA\xC3O DEVE, OBRIGATORIAMENTE, EXISTIR.\ndatalogFilePath = ./datalog/\n# [bool] [default = true] Ativar ou desativar o datalog\nshouldWrite = true\n# [number]  [default = 30000] Tempo, em milissegundos, de quanto esperar sem receber dados at\xE9 criar um novo arquivo de texto\ndatalogTimeout = 30000\n# [bool] [default = false] Incluir timestamp (quantidade de milissegundos desde 1/1/1970 00:00) como primeiro item de cada linha\nincludeTimestamp = false\n\n# PLOTAGEM EM TEMPO REAL\n\n# BANCO DE DADOS LOCAL\n# [number]  [default = 60000] Tempo, em milissegundos, de persist\xEAncia dos dados no banco de dados antes de serem eliminados. Altere esse valor para definir de quanto tempo atr\xE1s os dados devem ser exibidos.\npersistanceTimeout = 60000\n# [number] [default = 1000] Per\xEDodo, em milissegundos, para ser acionada a varredura do banco de dados local para eliminar dados antigos\ncleanUpTimeout = 1000\n\n#PLOTAGEM\n# [number] [default = 1] Quantidade desejada de pontos por segundo para serem exibidos no gr\xE1fico. VALORES ALTOS PODEM COMPROMETER A INTEGRIDADE DO SERVIDOR E DA REDE.\npointsPerSecond = 1\n        ";

    var path = __webpack_require__(/*! path */ "./node_modules/path-browserify/index.js");

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
var fields = (_fields = {
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
  operationMode: {
    index: 118,
    name: "operationMode",
    id: 1,
    pos: 0
  },
  statusDatalog: {
    index: 119,
    name: "statusDatalog",
    id: 1,
    pos: 1
  },
  erroECU: {
    index: 120,
    name: "erroECU",
    id: 1,
    pos: 2
  },
  statusCurrent: {
    index: 121,
    name: "statusCurrent",
    id: 1,
    pos: 3
  },
  ECUTimer: {
    index: 122,
    name: "ECUTimer",
    id: 101,
    pos: 0
  },
  steeringWheel: {
    index: 123,
    name: "steeringWheel",
    id: 101,
    pos: 1
  },
  pedalAcelerador: {
    index: 124,
    name: "pedalAcelerador",
    id: 101,
    pos: 2
  },
  pedalFreio: {
    index: 125,
    name: "pedalFreio",
    id: 101,
    pos: 3
  },
  selectedMode: {
    index: 126,
    name: "selectedMode",
    id: 102,
    pos: 0
  },
  motorTorqueRight: {
    index: 127,
    name: "motorTorqueRight",
    id: 103,
    pos: 0
  },
  motorTorqueLeft: {
    index: 128,
    name: "motorTorqueLeft",
    id: 103,
    pos: 1
  },
  torqueReferenceRight: {
    index: 129,
    name: "torqueReferenceRight",
    id: 103,
    pos: 2
  },
  torqueReferenceLeft: {
    index: 130,
    name: "torqueReferenceLeft",
    id: 103,
    pos: 3
  },
  speedMotorRight: {
    index: 131,
    name: "speedMotorRight",
    id: 104,
    pos: 0
  },
  speedMotorLeft: {
    index: 132,
    name: "speedMotorLeft",
    id: 104,
    pos: 1
  },
  intensidadeFrenagem: {
    index: 133,
    name: "intensidadeFrenagem",
    id: 104,
    pos: 2
  },
  selecaoBotao: {
    index: 134,
    name: "selecaoBotao",
    id: 104,
    pos: 3
  },
  speedFL: {
    index: 135,
    name: "speedFL",
    id: 105,
    pos: 3
  },
  speedFR: {
    index: 136,
    name: "speedFR",
    id: 105,
    pos: 2
  },
  speedBL: {
    index: 137,
    name: "speedBL",
    id: 105,
    pos: 1
  },
  speedBR: {
    index: 138,
    name: "speedBR",
    id: 105,
    pos: 0
  },
  ganhoTorque: {
    index: 139,
    name: "ganhoTorque",
    id: 106,
    pos: 0
  },
  //não está sendo utilizado
  motorCurrentRight: {
    index: 140,
    name: "motorCurrentRight",
    id: 106,
    pos: 2
  },
  motorCurrentLeft: {
    index: 141,
    name: "motorCurrentLeft",
    id: 106,
    pos: 3
  },
  temperatureInversorR1: {
    index: 142,
    name: "temperatureInversorR1",
    id: 107,
    pos: 0
  },
  temperatureInversorR2: {
    index: 143,
    name: "temperatureInversorR2",
    id: 107,
    pos: 1
  },
  temperatureInversorL1: {
    index: 144,
    name: "temperatureInversorL1",
    id: 107,
    pos: 2
  },
  temperatureInversorL2: {
    index: 145,
    name: "temperatureInversorL2",
    id: 107,
    pos: 3
  },

  /*inversor*/
  velocidadeMotorE: {
    index: 146,
    name: "velocidadeMotorE",
    id: 0x100,
    pos: 0
  },
  torqueMotorE: {
    index: 147,
    name: "torqueMotorE",
    id: 0x100,
    pos: 1
  },
  potenciaMotorE: {
    index: 148,
    name: "potenciaMotorE",
    id: 0x100,
    pos: 2
  },
  correnteMotorE: {
    index: 149,
    name: "correnteMotorE",
    id: 0x100,
    pos: 3
  },
  // mediaSpeed: {index: 25, name: "mediaSpeed", id: 0x304, pos: 0},
  // mediaTorque: {index: 26, name: "mediaTorque", id: 0x304, pos: 1},
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

  /*aquisicao*/
  accelerometerX: {
    index: 554,
    name: "accelerometerX",
    id: 161,
    pos: 0
  },
  accelerometerY: {
    index: 555,
    name: "accelerometerY",
    id: 161,
    pos: 1
  },
  accelerometerZ: {
    index: 556,
    name: "accelerometerZ",
    id: 161,
    pos: 2
  },
  gyroscopeX: {
    index: 557,
    name: "gyroscopeX",
    id: 0x702,
    pos: 0
  },
  gyroscopeY: {
    index: 558,
    name: "gyroscopeY",
    id: 0x702,
    pos: 1
  },
  gyroscopeZ: {
    index: 559,
    name: "gyroscopeZ",
    id: 0x702,
    pos: 2
  },
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
  }
}, (0, _defineProperty2.default)(_fields, "selecaoBotao", {
  index: 572,
  name: "selecaoBotao",
  id: 104,
  pos: 3
}), (0, _defineProperty2.default)(_fields, "extensometro22", {
  index: 574,
  name: "extensometro22",
  id: 173,
  pos: 0
}), (0, _defineProperty2.default)(_fields, "extensometro13", {
  index: 575,
  name: "extensometro13",
  id: 178,
  pos: 0
}), (0, _defineProperty2.default)(_fields, "extensometro23", {
  index: 576,
  name: "extensometro23",
  id: 178,
  pos: 2
}), (0, _defineProperty2.default)(_fields, "portConnected", {
  index: 900,
  name: "portConnected",
  id: 900,
  pos: 0
}), (0, _defineProperty2.default)(_fields, "rssi", {
  index: 901,
  name: "rssi",
  id: 901,
  pos: 0
}), (0, _defineProperty2.default)(_fields, "sensorPressaoDianteiro", {
  index: 660,
  name: "sensorPressaoDianteiro",
  id: 170,
  pos: 0
}), (0, _defineProperty2.default)(_fields, "hodometroParcial", {
  index: 669,
  name: "hodometroParcial",
  id: 102,
  pos: 2
}), (0, _defineProperty2.default)(_fields, "hodometroTotal", {
  index: 670,
  name: "hodometroTotal",
  id: 102,
  pos: 3
}), (0, _defineProperty2.default)(_fields, "simHodometer", {
  index: 677,
  name: "simHodometer",
  id: 901,
  pos: 0
}), (0, _defineProperty2.default)(_fields, "simCharge", {
  index: 678,
  name: "simCharge",
  id: 901,
  pos: 1
}), (0, _defineProperty2.default)(_fields, "pressaoTraseiro", {
  index: 679,
  name: "pressaoTraseiro",
  id: 200,
  pos: 0
}), (0, _defineProperty2.default)(_fields, "mediaCurrent", {
  index: 600,
  name: "mediaCurrent",
  id: 53,
  pos: 0
}), (0, _defineProperty2.default)(_fields, "mediaTemperature", {
  index: 602,
  name: "mediaTemperature",
  id: 53,
  pos: 2
}), _fields);
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
var datalogOrder = [fields.ECUTimer.name, //fields.hodometroTotal.name,
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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/process/browser.js */ "./node_modules/process/browser.js"), "/"))

/***/ })

})
//# sourceMappingURL=packs.js.729fab0311626c6f44e3.hot-update.js.map