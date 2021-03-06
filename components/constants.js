
//PARA REGISTRAR UM NOVO DADO:
//primeiramente, em TypeFields, adicione mais uma linha, incrementando o índice em 1 e o nome do dado em camelCase
//depois, adicione mais uma linha em availableField, com o index sendo o mesmo índice do TypeFields.
//se for um dado que tenha possibilidade de ser plotado em tempo real, adicione-o em availablePlotOPtion.

const isOnClient = !!(
    (typeof require.extensions === 'undefined' || typeof window !== 'undefined' &&
    window.document && window.document.createElement
    && Object.keys(process.env).length === 0 && process.env.constructor === Object)
  );

const fs = isOnClient ? null : require('fs');

if (typeof require.extensions !== 'undefined')
    require.extensions['.properties'] = function (module, filename) {
        module.exports = fs.readFileSync(filename, 'utf8');
    }



const configFileName = 'config.properties';
let pr = require('../config.properties');



let file = typeof pr == 'object' ? pr.default : pr;

// let file = properties;
if (!isOnClient) {
    if (file === '') {
        const configTemplate = `# TIPO DE OPERAÇÃO
# Valores possíveis:
# BYTES  - Recebimento por Xbee em formato de bytes
# STRING - Recebimento por Xbee ou NRF em formato de string
# API_BYTES  - Recebimento por Xbee em API mode por bytes
# API_STRING - Recebimento por Xbee em API mode por string
# [default = STRING]
operationType = STRING

# [string] [default = 0013A20041932DC6] Endereço 64bits do xbee transmissor.
xbeeSourceAddress = 0013A20041932DC6

# PORTA SERIAL

# [string] [default = ] Nome da porta serial que o dispositivo receptor se encontra. Deixe vazio para identificação automática.
portName = 
# [string] [default = ignore-ports.txt] Nome do arquivo de texto, na pasta raiz, contendo nome de portas para serem ignoradas na identificação automática de porta, separados por linha.
ignorePortsFile = ignore-ports.txt


# NOTIFICAÇÕES

# [bool] [default = true] Ativar ou desativar notificações
shouldNotify = true
# [number] [default = 10] Limite percentual para acionar a notificação que alerta da proximidade do valor mínimo/máximo
percentageLimitTolerance = 10
# [number] [default = 30000] Tempo de timeout em milissegundos para a notificação ser reacionada caso a condição não mude
notificationExpirationTimeout = 30000


# DATALOG

# [string] [default = ./datalog/] Caminho para a escrita do datalog. O DIRETÓRIO NÃO É CRIADO, ENTAÃO DEVE, OBRIGATORIAMENTE, EXISTIR.
datalogFilePath = ./datalog/
# [bool] [default = true] Ativar ou desativar o datalog
shouldWrite = true
# [number]  [default = 30000] Tempo, em milissegundos, de quanto esperar sem receber dados até criar um novo arquivo de texto
datalogTimeout = 30000
# [bool] [default = false] Incluir timestamp (quantidade de milissegundos desde 1/1/1970 00:00) como primeiro item de cada linha
includeTimestamp = false


# PLOTAGEM EM TEMPO REAL

# BANCO DE DADOS LOCAL
# [number]  [default = 60000] Tempo, em milissegundos, de persistência dos dados no banco de dados antes de serem eliminados. Altere esse valor para definir de quanto tempo atrás os dados devem ser exibidos.
persistanceTimeout = 60000
# [number] [default = 1000] Período, em milissegundos, para ser acionada a varredura do banco de dados local para eliminar dados antigos
cleanUpTimeout = 1000

#PLOTAGEM
# [number] [default = 1] Quantidade desejada de pontos por segundo para serem exibidos no gráfico. VALORES ALTOS PODEM COMPROMETER A INTEGRIDADE DO SERVIDOR E DA REDE.
pointsPerSecond = 1

        `;
        const path = require('path');
        const correctedPath = path.join(__dirname, '..', configFileName);

        fs.writeFileSync(correctedPath, configTemplate);
        file = configTemplate;
    }
}


const config = file.split('\n')
    .filter(value => !value.startsWith('#') && !(value.trim() === ''))
    .reduce( (previous, current) => {
        const opt = current.split('=').map(value => value.trim());
        let definition = opt[1];
        let val;
        if (definition == '') {
            val = undefined;
        } else if (definition == 'true' || definition == 'false') {
            val = definition === 'true';
        } else if (isNaN(definition)) {
            val = definition;
        } else {
            val = definition*1;
        }
        previous[opt[0]] = val;
        return previous;
    },{})

const percentageLimitTolerance = config.percentageLimitTolerance;
const notificationExpirationTimeout = config.notificationExpirationTimeout;
const shouldNotify = config.shouldNotify;

const datalogFilePath = config.datalogFilePath;
const shouldWrite = config.shouldWrite;
const datalogTimeout = config.datalogTimeout;
const includeTimestamp = config.includeTimestamp;


const persistanceTimeout = config.persistanceTimeout;
const cleanUpTimeout = config.cleanUpTimeout;

const pointsPerSecond = config.pointsPerSecond;


const portName = config.portName;
const ignorePortsFile = config.ignorePortsFile;

const OperationsType = {
    BYTES: 0,
    STRING: 1,
    API_BYTES: 2,
    API_STRING: 3
}

const operationType = OperationsType[config.operationType];

let i;
let xbeeSourceAddressArray = [];
for (i = 0; i < config.xbeeSourceAddress.length; i+=2) {
    const oct = config.xbeeSourceAddress.substring(i, i+2);
    const hex = parseInt(oct, 16);
    xbeeSourceAddressArray.push(hex);
}
const xbeeSourceAddress = xbeeSourceAddressArray;


let fields = {
    airStatus: {index: 0, name: "airStatus", id: 0, pos: 0},
    stoppedTime: {index: 1, name: "stoppedTime", id: 0x100, pos: 0},
    current0: {index: 2, name: "current0", id: 51, pos:0},
    current1: {index: 3, name: "current1", id: 51, pos:1},
    current2: {index: 4, name: "current2", id: 51, pos:2},
    current3: {index: 5, name: "current3", id: 51, pos:3},
    glvVoltage: {index: 6, name: "glvVoltage", id: 52, pos: 0},
    chargePercent: {index: 7, name: "chargePercent", id: 52, pos: 1},
    operationMode: {index: 8, name: "operationMode", id: 52, pos: 2},
    errorFlag: {index: 9, name: "errorFlag", id: 52, pos: 3},
    mediaCurrent: {index: 10, name: "mediaCurrent", id: 53, pos: 0},
    totalVoltage: {index: 11, name: "totalVoltage", id: 53, pos: 1},
    mediaTemperature: {index: 12, name: "mediaTemperature", id: 53, pos: 2},
    maxTemperature: {index: 13, name: "maxTemperature", id: 53, pos: 3},
    minVoltage: {index: 14, name: "minVoltage", id: 54, pos: 0},
    speedFL: {index: 15, name: "speedFL", id: 105, pos: 3},
    speedFR: {index: 16, name: "speedFR", id: 105, pos: 2},
    speedBL: {index: 17, name: "speedBL", id: 105, pos: 1},
    speedBR: {index: 18, name: "speedBR", id: 105, pos: 0},
    motorTorqueRight: {index: 19, name: "motorTorqueRight", id: 103, pos: 0},
    motorTorqueLeft: {index: 20, name: "motorTorqueLeft", id: 103, pos: 1},
    torqueReferenceRight: {index: 21, name: "torqueReferenceRight", id: 103, pos: 2},
    torqueReferenceLeft: {index: 22, name: "torqueReferenceLeft", id: 103, pos: 3},
    pedalAcelerador: {index: 23, name: "pedalAcelerador", id: 101, pos: 2},
    pedalFreio: {index: 24, name: "pedalFreio", id: 101, pos: 3},
    // mediaSpeed: {index: 25, name: "mediaSpeed", id: 0x304, pos: 0},
    // mediaTorque: {index: 26, name: "mediaTorque", id: 0x304, pos: 1},
    steeringWheel: {index: 27, name: "steeringWheel", id: 101, pos: 1},
    ECUTimer: {index: 28, name: "ECUTimer", id: 101, pos: 0},
    energiaInversorRight: {index: 29, name: "energiaInversorRight", id: 106, pos: 0},
    energiaInversorLeft: {index: 30, name: "energiaInversorLeft", id: 106, pos: 1},
    motorCurrentRight: {index: 31, name: "motorCurrentRight", id: 106, pos: 2},
    motorCurrentLeft: {index: 32, name: "motorCurrentLeft", id: 106, pos: 3},
    temperatureInversorR1: {index: 33, name: "temperatureInversorR1", id: 107, pos: 0},
    temperatureInversorR2: {index: 34, name: "temperatureInversorR2", id: 107, pos: 1},
    temperatureInversorL1: {index: 35, name: "temperatureInversorL1", id: 107, pos: 2},
    temperatureInversorL2: {index: 36, name: "temperatureInversorL2", id: 107, pos: 3},
    currentEvent: {index: 37, name: "currentEvent", id: 100, pos: 0},
    started: {index: 38, name: "started", id: 100, pos: 1},
    finished: {index: 39, name: "finished", id: 100, pos: 2},
    cell000: {index: 40, name: "cell000", id: 260, pos: 0},
    cell001: {index: 41, name: "cell001", id: 260, pos: 1},
    cell002: {index: 42, name: "cell002", id: 260, pos: 2},
    cell003: {index: 43, name: "cell003", id: 260, pos: 3},
    cell004: {index: 44, name: "cell004", id: 261, pos: 0},
    cell005: {index: 45, name: "cell005", id: 261, pos: 1},
    cell006: {index: 46, name: "cell006", id: 261, pos: 2},
    cell007: {index: 47, name: "cell007", id: 261, pos: 3},
    cell008: {index: 48, name: "cell008", id: 262, pos: 0},
    cell009: {index: 49, name: "cell009", id: 262, pos: 1},
    cell010: {index: 50, name: "cell010", id: 262, pos: 2},
    cell011: {index: 51, name: "cell011", id: 262, pos: 3},
    temp001: {index: 52, name: "temp001", id: 263, pos: 0},
    temp002: {index: 53, name: "temp002", id: 263, pos: 1},
    temp003: {index: 54, name: "temp003", id: 263, pos: 2},
    temp004: {index: 55, name: "temp004", id: 263, pos: 3},
    cell100: {index: 56, name: "cell100", id: 265, pos: 0},
    cell101: {index: 57, name: "cell101", id: 265, pos: 1},
    cell102: {index: 58, name: "cell102", id: 265, pos: 2},
    cell103: {index: 59, name: "cell103", id: 265, pos: 3},
    cell104: {index: 60, name: "cell104", id: 266, pos: 0},
    cell105: {index: 61, name: "cell105", id: 266, pos: 1},
    cell106: {index: 62, name: "cell106", id: 266, pos: 2},
    cell107: {index: 63, name: "cell107", id: 266, pos: 3},
    cell108: {index: 64, name: "cell108", id: 267, pos: 0},
    cell109: {index: 65, name: "cell109", id: 267, pos: 1},
    cell110: {index: 66, name: "cell110", id: 267, pos: 2},
    cell111: {index: 67, name: "cell111", id: 267, pos: 3},
    temp101: {index: 68, name: "temp101", id: 268, pos: 0},
    temp102: {index: 69, name: "temp102", id: 268, pos: 1},
    temp103: {index: 70, name: "temp103", id: 268, pos: 2},
    temp104: {index: 71, name: "temp104", id: 268, pos: 3},
    cell200: {index: 72, name: "cell200", id: 270, pos: 0},
    cell201: {index: 73, name: "cell201", id: 270, pos: 1},
    cell202: {index: 74, name: "cell202", id: 270, pos: 2},
    cell203: {index: 75, name: "cell203", id: 270, pos: 3},
    cell204: {index: 76, name: "cell204", id: 271, pos: 0},
    cell205: {index: 77, name: "cell205", id: 271, pos: 1},
    cell206: {index: 78, name: "cell206", id: 271, pos: 2},
    cell207: {index: 79, name: "cell207", id: 271, pos: 3},
    cell208: {index: 80, name: "cell208", id: 272, pos: 0},
    cell209: {index: 81, name: "cell209", id: 272, pos: 1},
    cell210: {index: 82, name: "cell210", id: 272, pos: 2},
    cell211: {index: 83, name: "cell211", id: 272, pos: 3},
    temp201: {index: 84, name: "temp201", id: 273, pos: 0},
    temp202: {index: 85, name: "temp202", id: 273, pos: 1},
    temp203: {index: 86, name: "temp203", id: 273, pos: 2},
    temp204: {index: 87, name: "temp204", id: 273, pos: 3},
    cell300: {index: 88, name: "cell300", id: 275, pos: 0},
    cell301: {index: 89, name: "cell301", id: 275, pos: 1},
    cell302: {index: 90, name: "cell302", id: 275, pos: 2},
    cell303: {index: 91, name: "cell303", id: 275, pos: 3},
    cell304: {index: 92, name: "cell304", id: 276, pos: 0},
    cell305: {index: 93, name: "cell305", id: 276, pos: 1},
    cell306: {index: 94, name: "cell306", id: 276, pos: 2},
    cell307: {index: 95, name: "cell307", id: 276, pos: 3},
    cell308: {index: 96, name: "cell308", id: 277, pos: 0},
    cell309: {index: 97, name: "cell309", id: 277, pos: 1},
    cell310: {index: 98, name: "cell310", id: 277, pos: 2},
    cell311: {index: 99, name: "cell311", id: 277, pos: 3},
    temp301: {index: 100, name: "temp301", id: 278, pos: 0},
    temp302: {index: 101, name: "temp302", id: 278, pos: 1},
    temp303: {index: 102, name: "temp303", id: 278, pos: 2},
    temp304: {index: 103, name: "temp304", id: 278, pos: 3},
    cell400: {index: 104, name: "cell400", id: 280, pos: 0},
    cell401: {index: 105, name: "cell401", id: 280, pos: 1},
    cell402: {index: 106, name: "cell402", id: 280, pos: 2},
    cell403: {index: 107, name: "cell403", id: 280, pos: 3},
    cell404: {index: 108, name: "cell404", id: 281, pos: 0},
    cell405: {index: 109, name: "cell405", id: 281, pos: 1},
    cell406: {index: 110, name: "cell406", id: 281, pos: 2},
    cell407: {index: 111, name: "cell407", id: 281, pos: 3},
    cell408: {index: 112, name: "cell408", id: 282, pos: 0},
    cell409: {index: 113, name: "cell409", id: 282, pos: 1},
    cell410: {index: 114, name: "cell410", id: 282, pos: 2},
    cell411: {index: 115, name: "cell411", id: 282, pos: 3},
    temp401: {index: 116, name: "temp401", id: 283, pos: 0},
    temp402: {index: 117, name: "temp402", id: 283, pos: 1},
    temp403: {index: 118, name: "temp403", id: 283, pos: 2},
    temp404: {index: 119, name: "temp404", id: 283, pos: 3},
    cell500: {index: 120, name: "cell500", id: 285, pos: 0},
    cell501: {index: 121, name: "cell501", id: 285, pos: 1},
    cell502: {index: 122, name: "cell502", id: 285, pos: 2},
    cell503: {index: 123, name: "cell503", id: 285, pos: 3},
    cell504: {index: 124, name: "cell504", id: 286, pos: 0},
    cell505: {index: 125, name: "cell505", id: 286, pos: 1},
    cell506: {index: 126, name: "cell506", id: 286, pos: 2},
    cell507: {index: 127, name: "cell507", id: 286, pos: 3},
    cell508: {index: 128, name: "cell508", id: 287, pos: 0},
    cell509: {index: 129, name: "cell509", id: 287, pos: 1},
    cell510: {index: 130, name: "cell510", id: 287, pos: 2},
    cell511: {index: 131, name: "cell511", id: 287, pos: 3},
    temp501: {index: 132, name: "temp501", id: 288, pos: 0},
    temp502: {index: 133, name: "temp502", id: 288, pos: 1},
    temp503: {index: 134, name: "temp503", id: 288, pos: 2},
    temp504: {index: 135, name: "temp504", id: 288, pos: 3},
    tireTempFL: {index: 150, name: "tireTempFL", id: 0x700, pos: 0},
    tireTempFR: {index: 151, name: "tireTempFR", id: 0x700, pos: 1},
    tireTempBL: {index: 152, name: "tireTempBL", id: 0x700, pos: 2},
    tireTempBR: {index: 153, name: "tireTempBR", id: 0x700, pos: 3},
    accelerometerX: {index: 154, name: "accelerometerX", id: 161, pos: 0},
    accelerometerY: {index: 155, name: "accelerometerY", id: 161, pos: 1},
    accelerometerZ: {index: 156, name: "accelerometerZ", id: 161, pos: 2},
    gyroscopeX: {index: 157, name: "gyroscopeX", id: 0x702, pos: 0},
    gyroscopeY: {index: 158, name: "gyroscopeY", id: 0x702, pos: 1},
    gyroscopeZ: {index: 159, name: "gyroscopeZ", id: 0x702, pos: 2},
    portConnected: {index: 900, name: "portConnected", id: 900, pos: 0},
    rssi: {index: 901, name: "rssi", id: 901, pos: 0},
    sensorPressaoDianteiro: {index: 160, name: "sensorPressaoDianteiro", id: 170, pos: 0},
    potenciometroBalancin: {index: 161, name: "potenciometroBalancin", id: 170, pos: 1},
    termoparFreioD: {index: 162, name: "termoparFreioD", id: 170, pos: 2},
    extensometro1: {index: 163, name: "extensometro1", id: 171, pos: 0},
    extensometro2: {index: 164, name: "extensometro2", id: 171, pos: 1},
    speedMotorRight: {index: 165, name: "speedMotorRight", id: 104, pos: 0},
    speedMotorLeft: {index: 166, name: "speedMotorLeft", id: 104, pos: 1},
    selectedMode: {index: 167, name: "selectedMode", id: 102, pos: 0},
    interfaceFlag: {index: 168, name: "interfaceFlag", id: 102, pos: 1},
    hodometroParcial: {index: 169, name: "hodometroParcial", id: 102, pos: 2},
    hodometroTotal: {index: 170, name: "hodometroTotal", id: 102, pos: 3},
    intensidadeFrenagem: {index: 171, name: "intensidadeFrenagem", id: 104, pos: 2},
    selecaoBotao: {index: 172, name: "selecaoBotao", id: 104, pos: 3},
    ganhoTorque: {index: 173, name: "ganhoTorque", id: 106, pos: 0},
    extensometro22: {index: 174, name: "extensometro22", id: 173, pos: 0},

    extensometro13: {index: 175, name: "extensometro13", id: 178, pos: 0},

    extensometro23: {index: 176, name: "extensometro23", id: 178, pos: 2},

    simHodometer: {index: 177, name: "simHodometer", id: 901, pos: 0},
    simCharge: {index: 178, name: "simCharge", id: 901, pos: 1},
    pressaoTraseiro: {index: 179, name: "pressaoTraseiro", id: 200, pos: 0}

}


const nameFieldIdMap = Object.values(fields).reduce((last, field) => (last[field.name] = field.index, last), {})
const fieldIdNameMap = Object.values(fields).reduce((last, field) => (last[field.index] = field.name, last), {})


let availablePlotOptions = [
    {index: fields.current0.index, name: "Corrente 0", unidade: "A", formatFn: ((current) => (current > Math.pow(2, 15) ? (current-Math.pow(2, 16))/10: current/10))},
    {index: fields.current1.index, name: "Corrente 1", unidade: "A", formatFn: ((current) => (current > Math.pow(2, 15) ? (current-Math.pow(2, 16))/100: current)/100)},
    {index: fields.current2.index, name: "Corrente 2", unidade: "A", formatFn: ((current) => (current > Math.pow(2, 15) ? (current-Math.pow(2, 16))/10: current)/10)},
    {index: fields.current3.index, name: "Corrente 3", unidade: "A", formatFn: ((current) => (current > Math.pow(2, 15) ? (current-Math.pow(2, 16))/10: current)/10)},
    {index: fields.glvVoltage.index, name: "Tensão do GLV", unidade: "V", formatFn: ((a) => a/1000)},
    {index: fields.chargePercent.index, name: "Porcentagem de Carga", unidade: "%", formatFn: ((a) => a/100)},
    {index: fields.mediaCurrent.index, name: "Corrente Média", unidade: "A", formatFn: ((current) => (current > Math.pow(2, 15) ? (current-Math.pow(2, 16))/100: current/100))},
    {index: fields.totalVoltage.index, name: "Tensão Total", unidade: "V", formatFn: ((a) => a/100)},
    {index: fields.mediaTemperature.index, name: "Temperatura Média", unidade: "ºC", formatFn: ((a) => a/1000)},
    {index: fields.maxTemperature.index, name: "Temperatura Máxima", unidade: "ºC", formatFn: ((a) => a/1000)},
    {index: fields.minVoltage.index, name: "Tensão Mínima", unidade: "V", formatFn: ((a) => a/10000)},
    {index: fields.mediaTemperature.index, name: "Temperatura Média", unidade: "ºC", formatFn: ((a) => a/1000)},
    {index: fields.motorTorqueRight.index, name: "Torque Motor Direito", unidade: "%", formatFn: ((a) => a/10)},
    {index: fields.motorTorqueLeft.index, name: "Torque Motor Esquerdo", unidade: "%", formatFn: ((a) => a/10)},
    {index: fields.torqueReferenceRight.index, name: "Referência de Torque Direito", unidade: "%", formatFn: ((a) => a/10)},
    {index: fields.torqueReferenceLeft.index, name: "Referência de Torque Esquerdo", unidade: "%", formatFn: ((a) => a/10)},
    {index: fields.pedalAcelerador.index, name: "Pedal Acelerador", unidade: "%", formatFn: ((a) => a/10)},
    {index: fields.pedalFreio.index, name: "Pedal Freio", unidade: "", formatFn: ((a) => Math.round(a))},
    // {index: fields.mediaSpeed.index, name: "Velocidade Média", unidade: "km/h", formatFn: ((a) => a)},
    // {index: fields.mediaTorque.index, name: "Torque Médio", unidade: "%", formatFn: ((a) => a/100)},
    {index: fields.steeringWheel.index, name: "Volante", unidade: "º", formatFn: ((a) => a*300/4095-164.1025)},
    {index: fields.energiaInversorRight.index, name: "Energia Inversor Direito", unidade: "kWh", formatFn: ((a) => a/1000)},
    {index: fields.energiaInversorLeft.index, name: "Energia Inversor Esquerdo", unidade: "kWh", formatFn: ((a) => a/1000)},
    {index: fields.motorCurrentRight.index, name: "Corrente Motor Direito", unidade: "A", formatFn: ((a) => a/100)},
    {index: fields.motorCurrentLeft.index, name: "Corrente Motor Esquerdo", unidade: "A", formatFn: ((a) => a/100)},
    {index: fields.temperatureInversorR1.index, name: "Temperatura Inversor Direito 1", unidade: "ºC", formatFn: ((a) => a/100)},
    {index: fields.temperatureInversorR2.index, name: "Temperatura Inversor Direito 2", unidade: "ºC", formatFn: ((a) => a/100)},
    {index: fields.temperatureInversorL1.index, name: "Temperatura Inversor Esquerdo 1", unidade: "ºC", formatFn: ((a) => a/100)},
    {index: fields.temperatureInversorL2.index, name: "Temperatura Inversor Esquerdo 2", unidade: "ºC", formatFn: ((a) => a/100)},
    {index: fields.speedFL.index, name: "Velocidade do Pneu Dianteiro Esquerdo", unidade: "RPM", formatFn: ((a) => a/10/3.6/(52.07/10*Math.PI)*60)},
    {index: fields.speedFR.index, name: "Velocidade do Pneu Dianteiro Direito", unidade: "RPM", formatFn: ((a) => a/10/3.6/(52.07/10*Math.PI)*60)},
    {index: fields.speedBL.index, name: "Velocidade do Pneu Traseiro Esquerdo", unidade: "RPM", formatFn: ((a) => a/9)},
    {index: fields.speedBR.index, name: "Velocidade do Pneu Traseiro Direito", unidade: "RPM", formatFn: ((a) => a/9)},
    {index: fields.speedMotorLeft.index, name: "Velocidade do Motor Esquerdo", unidade: "RPM", formatFn: ((a) => a/9)},
    {index: fields.speedMotorRight.index, name: "Velocidade do Motor Direito", unidade: "RPM", formatFn: ((a) => a/9)},
    {index: fields.tireTempFL.index, name: "Temperatura do Pneu Dianteiro Esquerdo", unidade: "ºC", formatFn: ((a) => a/100)},
    {index: fields.tireTempFR.index, name: "Temperatura do Pneu Dianteiro Direito", unidade: "ºC", formatFn: ((a) => a/100)},
    {index: fields.tireTempBL.index, name: "Temperatura do Pneu Traseiro Esquerdo", unidade: "ºC", formatFn: ((a) => a)},
    {index: fields.tireTempBR.index, name: "Temperatura do Pneu Traseiro Direito", unidade: "ºC", formatFn: ((a) => a)},
    {index: fields.accelerometerX.index, name: "Acelerômetro X", unidade: "g", formatFn: ((a) => a/100)},
    {index: fields.accelerometerY.index, name: "Acelerômetro Y", unidade: "g", formatFn: ((a) => a/100)},
    {index: fields.accelerometerZ.index, name: "Acelerômetro Z", unidade: "g", formatFn: ((a) => a/100)},
    {index: fields.rssi.index, name: "RSSI", unidade: "dBm", formatFn: ((a) => -a)},
    {index: fields.sensorPressaoDianteiro.index, name: "Sensor de Pressão", unidade: "bar", formatFn: ((a) => a)},
    {index: fields.temp201.index, name: "Temperatura 201", unidade: "ºC", formatFn: ((a) => a)},
    {index: fields.temp203.index, name: "Temperatura 203", unidade: "ºC", formatFn: ((a) => a)},
    {index: fields.temp301.index, name: "Temperatura 301", unidade: "ºC", formatFn: ((a) => a)},
    {index: fields.temp303.index, name: "Temperatura 303", unidade: "ºC", formatFn: ((a) => a)},
    {index: fields.temp401.index, name: "Temperatura 401", unidade: "ºC", formatFn: ((a) => a)},
    {index: fields.temp403.index, name: "Temperatura 403", unidade: "ºC", formatFn: ((a) => a)},
    {index: fields.simCharge.index, name: "Descarga recente", unidade: "C", formatFn: ((a) => a)},
    {index: fields.pressaoTraseiro.index, name: "Pressão na linha de freio traseira", unidade: "Pa", formatFn: ((a) => a)}
]



const availablePlotIndexes = availablePlotOptions.map(option => option.index);

let datalogOrder = [
    fields.ECUTimer.name,
    fields.hodometroTotal.name,
    fields.glvVoltage.name,
    fields.speedFL.name,
    fields.speedFR.name,
    fields.speedMotorLeft.name,
    fields.speedMotorRight.name,
    fields.pedalAcelerador.name,
    fields.pedalFreio.name,
    fields.steeringWheel.name,
    fields.motorCurrentRight.name,
    fields.motorCurrentLeft.name,
    fields.accelerometerX.name,
    fields.accelerometerY.name,
    fields.accelerometerZ.name,
    fields.sensorPressaoDianteiro.name,
    fields.potenciometroBalancin.name,
    fields.termoparFreioD.name,
    fields.extensometro1.name,
    fields.extensometro2.name,
    fields.speedMotorRight.name,
    fields.speedMotorLeft.name,
    fields.current0.name,
    fields.current1.name,
    fields.current2.name,
    fields.current3.name,
    fields.mediaTemperature.name,
    fields.maxTemperature.name,
    fields.motorCurrentRight.name,
    fields.motorCurrentLeft.name,
    fields.temp001.name,
    fields.temp002.name,
    fields.temp003.name,
    fields.temp004.name,
    fields.temp101.name,
    fields.temp102.name,
    fields.temp103.name,
    fields.temp104.name,
    fields.temp201.name,
    fields.temp202.name,
    fields.temp203.name,
    fields.temp204.name,
    fields.temp301.name,
    fields.temp302.name,
    fields.temp303.name,
    fields.temp304.name,
    fields.temp401.name,
    fields.temp402.name,
    fields.temp403.name,
    fields.temp404.name,
    fields.temp501.name,
    fields.temp502.name,
    fields.temp503.name,
    fields.temp504.name,
    fields.current3.name,
    fields.totalVoltage.name,
    fields.minVoltage.name,
    fields.pressaoTraseiro.name

]

// let datalogOrder = [
//     fields.current0.name,
//     fields.current1.name,
//     fields.current2.name,
//     fields.current3.name,
//     fields.motorCurrentRight.name,
//     fields.motorCurrentLeft.name
 

// ]


let fieldsLimits = [
    {name: fields.chargePercent.name, formattedName: "Porcentagem de Carga", min: 0, maxReference: 100},
    {name: fields.glvVoltage.name, formattedName: "Tensão do GLV", min: 13000, maxReference: 16000},
    {name: fields.maxTemperature.name, formattedName: "Temperatura Máxima dos Packs", max: 65500},
    {name: fields.minVoltage.name, formattedName: "Tensão Mínima das Células", min: 28000, maxReference: 35500},
    {name: fields.temperatureInversorL1.name, formattedName: "Temperatura do Inversor Esquerdo 1", max: 50000},
    {name: fields.temperatureInversorL2.name, formattedName: "Temperatura do Inversor Esquerdo 2", max: 50000},
    {name: fields.temperatureInversorR1.name, formattedName: "Temperatura do Inversor Direito 1", max: 50000},
    {name: fields.temperatureInversorR2.name, formattedName: "Temperatura do Inversor Direito 2", max: 50000},
    {name: fields.tireTempBL.name, formattedName: "Temperatura Pneu Traseiro Esquerdo", max: 20000},
    {name: fields.tireTempBR.name, formattedName: "Temperatura Pneu Traseiro Direito", max: 20000},
    {name: fields.tireTempFL.name, formattedName: "Temperatura Pneu Dianteiro Esquerdo", max: 20000},
    {name: fields.tireTempFR.name, formattedName: "Temperatura Pneu Dianteiro Direito", max: 20000},
]

fieldsLimits = fieldsLimits.reduce( (last, field) => {
    last[field.name] = {}; 
    last[field.name].name = field.formattedName; 
    last[field.name][(typeof field.max === 'undefined' ? "min": "max")] = (typeof field.max === 'undefined' ? field.min: field.max);
    if (typeof field.maxReference !== 'undefined')
        last[field.name].maxReference = field.maxReference;
    return last
}, {});






module.exports = {
    availablePlotOptions,
    fields,
    mappings: {
        nameFieldIdMap: nameFieldIdMap, 
        fieldIdNameMap: fieldIdNameMap,
        availablePlotIndexes: availablePlotIndexes
    },
    persistanceTimeout,
    cleanUpTimeout,
    pointsPerSecond,
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
}