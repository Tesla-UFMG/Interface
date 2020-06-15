const constants = require('./components/constants');
const DatabaseHandler = require('./database-handler.js');

// const Hodometro = require('./components/hodometro.js')
const Carga = require('./components/carga.js')

const cFields = constants.fields

class ObjectCreator {
    
    constructor(databaseName) {
        this.databaseHandler = new DatabaseHandler(databaseName);
        // this.hodometroHandler = new Hodometro();
        this.cargaHandler = new Carga();

        //cria um dictionary, sendo as keys uma concatenacao de id_can-posicao_na_word e o value o fieldid
        const fields = Object.values(cFields);
        this.idsMap  = fields.reduce((obj, item) => (obj[item.id+"-"+item.pos] = item.index, obj), {})
        // this.idsMap  = fields.map(field => { return {[field.id+"-"+field.pos]: field.index} })
        
        this.offLimitFields = [];

        this.packs = [
            {cells: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], temperatures: [0, 0, 0, 0]},
            {cells: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], temperatures: [0, 0, 0, 0]},
            {cells: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], temperatures: [0, 0, 0, 0]},
            {cells: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], temperatures: [0, 0, 0, 0]},
            {cells: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], temperatures: [0, 0, 0, 0]},
            {cells: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], temperatures: [0, 0, 0, 0]}
        ]
    }

    mapId(id, pos) {
        return this.idsMap[id+"-"+pos];
    }

    async treatInfo(id, data) {
        if (this.isPackRelated(id)) {
            let packIndex = parseInt((id-260)/5);
            let packPart = (id-260)%5;

            if (packPart < 3) {
                for (let i = 0; i < 4; i++) {
                    this.packs[packIndex].cells[packPart*4+i] = data[i];
                    let fieldId = this.mapId(id, i);
                    this.insertData(fieldId, data[i]);
                }
            } else if (packPart < 4) {
                this.packs[packIndex].temperatures = data;

                for(var i = 0; i < data.length; i++) {
                    let fieldId = this.mapId(id, i);
                    this.insertData(fieldId, data[i]);
                }
            } 

        } else if (this.isExtensometroRelated(id)) {
            /*
            let ext1 = (data[1] << 16) + data[0];
            this.insertData(this.mapId(id, 0), ext1);
            if (typeof data[2] !== 'undefined') {
                let ext2 = (data[3] << 16) + data[2];
                this.insertData(this.mapId(id, 1), ext2);
            }
            */
        } else {
            //calculo do hodometro
            // if (id == cFields.speedFL.index) {
            //     this.hodometroHandler.addSpeed(data[cFields.speedFL.pos])
            //     this.insertData()
            // }

            //calculo da carga
            if (id == cFields.current0.id) {
                this.cargaHandler.addCurrents(data);
                this.insertData(this.mapId(cFields.simCharge.id, cFields.simCharge.pos), this.cargaHandler.getChargeMean());
            }


            for(var i = 0; i < data.length; i++) {
                let fieldId = this.mapId(id, i);
                if (fieldId == undefined) {}
                    // console.log("Informação inválida! "+id.toString(16)+"-"+i);
                else {
                    this.insertData(fieldId, data[i]);
                    const t = constants.fieldsLimit.fieldsLimit[constants.mappings.fieldIdNameMap[fieldId]];
                    if (typeof t !== 'undefined') {
                        let indexF = this.offLimitFields.findIndex(element => element.fieldId == fieldId);
                        if (indexF >= 0) {
                            this.offLimitFields.splice(indexF, 1);
                        }
                        if (typeof t.max !== 'undefined' && parseInt(data[i]) >= t.max*(1-constants.fieldsLimit.percentageLimitTolerance/100) ||
                            typeof t.min !== 'undefined' && parseInt(data[i]) <= t.min*(1+constants.fieldsLimit.percentageLimitTolerance/100)) {
                            this.offLimitFields.push({fieldId: fieldId, value: data[i]})
                        }
                    }
                }
            }
        }
        
    }

    isExtensometroRelated(id) {
        return (id == cFields.extensometro1.id ||
                id == cFields.extensometro2.id ||
                id == cFields.extensometro22.id ||
                id == cFields.extensometro13.id ||
                id == cFields.extensometro23.id)
    }

    isPackRelated(id) {
        return id >= 260 && id <= 293;
    }

    insertData(fieldId, value) {
        this.databaseHandler.insertLastData(fieldId, value);
        //so salva no historicos os campos que fazem plotagem
        if (constants.mappings.availablePlotIndexes.includes(fieldId))
            this.databaseHandler.insertHistoryData(fieldId, value);
    }

    retrieveLastData(fieldId) {
        return this.databaseHandler.retrieveLastData(fieldId);
    }

    retrieveHistoryData(fieldId) {
        return this.databaseHandler.retrieveHistoryData(fieldId);
    }

    buildData(page) {
        var obj;
        switch(page) {
            case "geral":
                obj = this.buildGeralInfo();
                break;

            case "controle":
                obj = this.buildControleInfo();
                break;

            case "packs":
                obj = this.buildPacksInfo();
                break;

        }
        //concatena informações que devem estar presentes em todos os tipos de mensagens
        Object.assign(obj, this.buildCommonInfo());
        return obj;
    }

    buildGeralInfo() {
        return {
            bms: {
                maxTemperature: this.retrieveLastData(cFields.maxTemperature.index),
                mediaTemperature: this.retrieveLastData(cFields.mediaTemperature.index),
                minVoltage: this.retrieveLastData(cFields.minVoltage.index),
                airStatus: this.retrieveLastData(cFields.airStatus.index),
                totalVoltage: this.retrieveLastData(cFields.totalVoltage.index),
                glvVoltage: this.retrieveLastData(cFields.glvVoltage.index),
                charge: this.retrieveLastData(cFields.chargePercent.index)
            },
            control: {
                // mediaSpeed: this.retrieveLastData(cFields.mediaSpeed.index)
                mediaSpeed: ((parseInt(this.retrieveLastData(cFields.speedMotorLeft.index)) + parseInt(this.retrieveLastData(cFields.speedMotorRight.index))/9)*(0.0312*Math.PI))
            }
        }
    }

    buildControleInfo() {
        const accelX = this.retrieveLastData(cFields.accelerometerX.index)
        const accelY = this.retrieveLastData(cFields.accelerometerY.index)
        const accelZ = this.retrieveLastData(cFields.accelerometerZ.index)

        return {
            control: {
                engine: {
                    torque: {
                        rightEngine: this.retrieveLastData(cFields.motorTorqueRight.index),
                        leftEngine: this.retrieveLastData(cFields.motorTorqueLeft.index)
                    }
                },
                inverters: {
                    temperature: {
                        right1: this.retrieveLastData(cFields.temperatureInversorR1.index),
                        right2: this.retrieveLastData(cFields.temperatureInversorR2.index),
                        left1:  this.retrieveLastData(cFields.temperatureInversorL1.index),
                        left2:  this.retrieveLastData(cFields.temperatureInversorL2.index)
                    }
                },
                tires: {
                    temperature: {
                        backLeft: this.retrieveLastData(cFields.tireTempBL.index),
                        backRight: this.retrieveLastData(cFields.tireTempBR.index),
                        frontLeft: this.retrieveLastData(cFields.tireTempFL.index),
                        frontRight: this.retrieveLastData(cFields.tireTempFR.index)
                    },
                    speed: {
                        backLeft: this.retrieveLastData(cFields.speedBL.index),
                        backRight: this.retrieveLastData(cFields.speedBR.index),
                        frontLeft: this.retrieveLastData(cFields.speedFL.index),
                        frontRight: this.retrieveLastData(cFields.speedFR.index)
                    }
                },
                steeringWheel: this.retrieveLastData(cFields.steeringWheel.index),
                pedals: {
                    throttle: this.retrieveLastData(cFields.pedalAcelerador.index),
                    brake: this.retrieveLastData(cFields.pedalFreio.index)
                },
                accelerometer: {
                    x: (accelX > Math.pow(2, 15) ? (accelX-Math.pow(2, 16)): accelX),
                    y: (accelY > Math.pow(2, 15) ? (accelY-Math.pow(2, 16)): accelY),
                    z: (accelZ > Math.pow(2, 15) ? (accelZ-Math.pow(2, 16)): accelZ)
                }
            }
        }
    }

    buildPacksInfo() {
        return {
            bms: {
                totalVoltage: this.retrieveLastData(cFields.totalVoltage.index),
                mediaCurrent: this.retrieveLastData(cFields.mediaCurrent.index),
                maxTemperature: this.retrieveLastData(cFields.maxTemperature.index),
                minVoltage: this.retrieveLastData(cFields.minVoltage.index),
                packs: this.packs
            }
        }
    }

    buildCommonInfo() {
        return {
            portConnected: this.retrieveLastData(cFields.portConnected.index),
            offLimitFields: this.offLimitFields,
            rssi: this.retrieveLastData(cFields.rssi.index)
        }
    }

    buildPlotData(ids) {
        var obj = {};
        ids.forEach((id) => {
            obj[id] = this.retrieveHistoryData(parseInt(id));
        })
        
        return Object.assign(obj, this.buildCommonInfo());
    }

    retrievePackCells(pack) {
        let num = 0x600 + 0x010*pack;
        let quanCells = 12;

        var cells = [];

        for (var i = 0; i < quanCells; i++) {
            //vai de posição em posição da word ate chegar em 4, dai passa para o proximo id e repete a logica
            const fieldId = this.mapId(num+parseInt(i/4), i%4);
            cells.push(this.databaseHandler.retrieveLastData(fieldId))
        }

        return cells;
    }

    retrievePackTemperatures(pack) {
        let num = 0x603 + 0x010*pack;
        let quanTemps = 4;

        var temps = [];

        for (var i = 0; i < quanTemps; i++) {
            const fieldId = this.mapId(num, i);
            temps.push(this.databaseHandler.retrieveLastData(fieldId))
        }

        return temps;
    }

    buildDatalog() {
        let datalogStr = "";
        if (constants.datalog.includeTimestamp) {
            datalogStr += new Date().getTime() + '\t';
        }
        constants.datalog.datalogOrder.forEach((value, index) => {
            const fieldId = constants.fields[value].index;
            const data = this.retrieveLastData(fieldId);
            datalogStr += (data ? data : 0);
            datalogStr += (index === constants.datalog.datalogOrder.length-1 ? "\r\n" : "\t");
        }, this);


        return datalogStr;
    }
    
    
    
    setPortConnected(pc) {
        this.insertData(900, pc);
    }

}

module.exports = ObjectCreator;