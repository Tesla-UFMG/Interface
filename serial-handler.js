const SerialPort = require('serialport');
const fs = require('fs');

const constants = require('./components/constants.js');

const Delimiter = require('@serialport/parser-delimiter');
const ApiModeParser = require('./api-mode-parser.js');

const frameHandler = require('./components/frame-handler.js')

const sleep = (waitTimeInMs) => new Promise(resolve => setTimeout(resolve, waitTimeInMs));

class SerialHandler {
    constructor(objectCreatorInstance) {
        this.objectCreatorInstance = objectCreatorInstance;
        this.ttl_port = false;
        this.idsGone = [];
        this.lastDatalogDate = false;
        this.currentDatalogPath = false;
        this.parseData = this.parseData.bind(this);
        this.requestRSSI = this.requestRSSI.bind(this);
        this.rssiRequestMessage = this.rssiRequestMessage.bind(this);
        this.payloadMessage = this.payloadMessage.bind(this);

        this.allowDatalog = true;
        this.shouldCreateNewDatalogFile = true;

        this.receivedRSSI = undefined;
        this.lastSentRSSI = undefined;
    }

    async openPort() {
        // this.rssiRequestMessage();
        // this.payloadMessage();
        console.log("Esperando conexão da porta...");
        let found = false;
        let targetPort = constants.port.portName;
        let ignorePorts = [];
        while (!found) {
            try {
                ignorePorts = fs.readFileSync('./'+constants.port.ignorePortsFile, 'utf8').split('\n');
            } catch (e) {
                console.log('Erro lendo arquivo '+constants.port.ignorePortsFile+': '+e);
            }
            await sleep(1000);
            const ports = await SerialPort.list();
    
            if (ports.length == 0)
                continue;
            
            for(let i = 0; i<ports.length; i++) {
                if (typeof targetPort !== 'undefined' && targetPort !== ""){
                    if (ports[i].comName !== targetPort)
                        continue;
                }
                if (ignorePorts.includes(ports[i].comName))
                    continue;
                
                console.log("Tentando porta: "+ports[i].comName);
                this.ttl_port = new SerialPort(ports[i].comName, { baudRate: 115200, autoOpen: false })
                let opened = false;
                let error;
                //abre e fecha a porta para garantir que ela é capaz de ser aberta
                this.ttl_port.open(async err => {
                    error = err;
                    if (!err) {
                        let closed = false;
                        this.ttl_port.close(() => closed = true);
                        while(!closed)
                            await sleep(5);
                    }
                    opened = true;
                });
                //await new Promise(resolve => )
                while(!opened)
                    await sleep(10);
                //se tiver erro, fecha a porta e a seta como nulo
                if (error) {
                    console.log("erro ao abrir a porta "+this.ttl_port.path+": "+error);
                    this.ttl_port = false
                } else {
                    found = true;
                    break;
                }
                
            }
        }
    }

    async initSerialPort() {
        await this.openPort();
        this.ttl_port.open(err => {});
        const _this = this;
        this.ttl_port.on('open', function () {
            console.log('Porta '+_this.ttl_port.path+' aberta');
            _this.objectCreatorInstance.setPortConnected(true);
            //so ativa a rotina de medir a intensidade de sinal se estiver rodando em API mode
            if (constants.port.operationType == constants.port.OperationsType.API_BYTES
                || constants.port.operationType == constants.port.OperationsType.API_STRING)
                _this.rssiInterval = setTimeout(_this.requestRSSI, 500);
                
            _this.ttl_port.on("close", () => {
                console.log("port closed");
                _this.objectCreatorInstance.setPortConnected(false);
                _this.ttl_port = false;
                clearInterval(_this.rssiInterval);
                parser = false;
                _this.initSerialPort();
            })
        })

        let parser;
          
        switch (constants.port.operationType) {
            case constants.port.OperationsType.API_BYTES:
            case constants.port.OperationsType.API_STRING:
                parser = new ApiModeParser();
                break;
            default:
                parser = new Delimiter({delimiter: '\n'});
                break;
        }
        this.ttl_port.pipe(parser);
        parser.on('data', this.parseData)
        
    }

    

    parseData(data) {
        //console.log('new data');
        //console.log(newData);
        let newData = [];
        let id;
        let datalogSafe = true;

        switch (constants.port.operationType) {
            case constants.port.OperationsType.BYTES:
                id = (data[1] << 8) + data[0];
                for (let i = 2; i < data.length; i+=2)
                    newData.push((data[i+1] << 8) + data[i]);
                break;

            case constants.port.OperationsType.STRING:
                const d = data.toString().split('\t');
                id = d[0];
                newData = d.slice(1);
                break;

            case constants.port.OperationsType.API_BYTES:
            case constants.port.OperationsType.API_STRING:
                
                const frame = frameHandler.parseFrame(data);

                switch (frame.frame.frameType) {
                    case 0x90:
                        const rfData = frame.frame.rfData;
                        if (constants.port.operationType === constants.port.OperationsType.API_BYTES) {
                            id = (rfData[1] << 8) + rfData[0];
                            for (let i = 2; i < rfData.length; i+=2)
                                newData.push((rfData[i+1] << 8) + rfData[i]);
                        } else {
                            const dat = rfData.toString().replace('\n','').split('\t');
                            id = dat[0];
                            newData = dat.slice(1);
                        }

                        if (id == 10) {//COLOCAR ID DA MENSAGEM DE GUILHERME
                            console.log("\nTime request received!")
                            if(newData[0] == 1) {
                                //MANDAR MENSAGEM DE HORA E MINUTO
                                let now = new Date()
                                const data = [0, 0, 0, 1, 0, now.getHours(), 0, now.getMinutes()]
                                console.log("Time request: "+now.getHours()+":"+now.getMinutes());
                                const message = frameHandler.generateFrame(0x10, 0x01, 0, 0, data)
                                
                                this.ttl_port.write(message);
                            }
                        }

                        break;
                    case 0x97:
                        datalogSafe = false;
                        id = 901;
                        this.receivedRSSI = true;
                        //0x04: TX Failure, xbee não está conectado
                        if (frame.frame.commandStatus == 0x04) {
                            newData.push(-1)
                        } else {
                            newData = frame.frame.commandData;
                        }
                        break;
                }


                break;
        }
        
        
        if (datalogSafe) {
            if (this.idsGone.includes(id)) {
                this.writeDatalog()
                this.idsGone = [];
            } else {
                this.idsGone.push(id);
            }
        }

        this.objectCreatorInstance.treatInfo(id, newData).then( () => {
            // var now = new Date().getMilliseconds();
            // console.log(now - lastEscrito);
            // lastEscrito = now;
        });
        // var now = new Date().getMilliseconds();
        // console.log(now - lastEscrito);
        // lastEscrito = now;
        // console.log(recentInformation.getInfo());
    }

    rssiRequestMessage() {

        const frameID = 0x01;
        const commOpt = 0x02;
        const atCommand = Buffer.from("DB", "ascii");
        let frame = frameHandler.generateFrame(frameHandler.frameTypes.remoteAtCommand, frameID, commOpt, atCommand);

        // 7E 00 0F 17 01 00 13 A2 00 41 93 2D C6 FF FE 02 44 42 E6
        this.ttl_port.write(frame);
    }

    payloadMessage() {
        const frameID = 0x23;
        const broadcastRadius = 0x00;
        const opt = 0x00;
        const payload = Buffer.from("ping", "ascii");

        let frame = frameHandler.generateFrame(frameHandler.frameTypes.requestTxMessage, frameID, broadcastRadius, opt, payload);
        
        // 7E 00 0F 17 01 00 13 A2 00 41 93 2D C6 FF FE 02 44 42 E6
        this.ttl_port.write(frame);
    }

    delay(t) {
        return new Promise(resolve => setTimeout(resolve, t));
    }

    async requestRSSI() {
        if (!(this.receivedRSSI || typeof (this.receivedRSSI) === 'undefined'
            || new Date().getTime() - this.lastSentRSSI > 10000))
            return;

        this.receivedRSSI = false;
        
        this.payloadMessage();
        this.delay(100);
        this.rssiRequestMessage();

        this.delay(200);

        this.payloadMessage();
        this.delay(100);
        this.rssiRequestMessage();

        this.lastSentRSSI = new Date().getTime();
        // this.rssiRequestMessage();
        this.rssiInterval = setTimeout(this.requestRSSI, 500);
        
        
    }

    createNewDatalogFile() {
        this.shouldCreateNewDatalogFile = true;

    }

    startDatalog() {
        this.allowDatalog = true;
    }

    stopDatalog() {
        this.allowDatalog = false;
    }

    writeDatalog() {
        
        if (constants.datalog.shouldWrite && this.allowDatalog) {
            const options = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'};
            const now = new Date();
            let fileDestination;
            if (!this.lastDatalogDate || now.getTime()-this.lastDatalogDate.getTime() > constants.datalog.timeout) {
                const localeStr = now.toLocaleDateString('pt-BR', options);
                const replaced = localeStr.replace(new RegExp("/", "g"),'-').replace(new RegExp(':', 'g'), '.');//꞉
                fileDestination = constants.datalog.filepath + replaced + '.txt';
                
                this.currentDatalogPath = fileDestination;
            }
            else 
                fileDestination = this.currentDatalogPath;
            
            this.lastDatalogDate = now;
            let datalogData = this.objectCreatorInstance.buildDatalog();
            this.invokeWritting(fileDestination, datalogData);
        }
        
    }

    async invokeWritting(fileDestination, datalogData) {
        fs.appendFile(fileDestination, datalogData, err => {
            if(err)
                console.error('Erro ao fazer datalog: '+err);
        });
    }

    
    listSerialPorts() {
        SerialPort.list(function (err, ports) {
            ports.forEach(function(port) {
                console.log(port.comName);
                console.log(' - pnpId: ' + port.pnpId);
                console.log(' - manufacturer: ' + port.manufacturer);
                console.log(' - serialNumber: ' + port.serialNumber);
                console.log(' - vendorId: ' + port.vendorId);
                console.log(' - productId: ' + port.productId);
            });
        });
    }
}

module.exports = SerialHandler;
