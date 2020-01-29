



const constants = require('./components/constants.js');
const DatabaseHandler = require('./database-handler.js');

class ObjectCreator {
    
    

    async treatInfo(id, data) {
        switch(id) {
            //bateria
            case constants.fields.airStatus.id:
                this.setAirStatus(data[0]);
                break;

            case constants.fields.stoppedTime.id:
                this.setStoppedTime(data[0]);
                break;

            case constants.fields.current0.id:
                this.setCurrents(data);
                break;
            case 0x650:
                this.setGLVVoltage(data[0]);
                this.setChargePercent(data[1]);
                this.setOperationMode(data[2]);
                this.setErrorFlag(data[3]);
                break;
            case 0x660:
                this.setMediaCurrent(data[0]);
                this.setTotalVoltage(data[1]);
                this.setMediaTemperature(data[2]);
                this.setMaxTemperature(data[3]);
                break;
            case 0x670:
                this.setMinVoltage(data[0]);
                break;

            //informacoes gerais
            case 0x301:
                this.setSpeedfl(data[0]);
                this.setSpeedfr(data[1]);
                this.setSpeedbl(data[2]);
                this.setSpeedbr(data[3]);
                break;
            case 0x302:
                this.setMotorTorque(data.slice(0,2));
                this.setTorqueReferencia(data.slice(2,4));
                break;
            
            //stering wheel
            case 0x303:
                // var acel = parseInt(data[0], 10) + parseInt(data[1] << 8, 10);
                // var brake = parseInt(data[2], 10) + parseInt(data[3] << 8, 10);
                this.setPedalAcelerador(data[2]);
                this.setPedalFreio(data[3]);
                // this.setPedalAcelerador(acel);
                // this.setPedalFreio(brake);
                break;

            case 0x304:
                this.setMediaSpeed(data[0]);
                this.setMediaTorque(data[1]);
                this.setSteeringWheel(data[2]);
                this.setECUTimer(data[3]);
                break;
            case 0x305:
                this.setEnergiaInversor(data.slice(0,2));
                this.setMotorCurrent(data.slice(2,4));
                break;
            case 0x306:
                this.setTempInversor(data)
                break;
            case 0x310:
                this.setCurrentEvent(data[0]);
                this.setStarted(data[1]);
                this.setFinished(data[2]);
                break;

            //PACKS
            //PACK0
            case 0x600:
                this.add4Cells(0, 0, 3, data);
                break;
            case 0x601:
                this.add4Cells(0, 4, 7, data);
                break;
            case 0x602:
                this.add4Cells(0, 8, 11, data);
                break;
            case 0x603:
                this.add4Temperature(0, 0, 3, data);
                break;
            case 0x604:
                this.add4Errors(0, 0, 3, data);
                break;
            case 0x605:
                this.add4Errors(0, 4, 7, data);
                break;
            case 0x606:
                this.add4Errors(0, 8, 11, data);
                break;
            //PACK1
            case 0x610:
                this.add4Cells(1, 0, 3, data);
                break;
            case 0x611:
                this.add4Cells(1, 4, 7, data);
                break;
            case 0x612:
                this.add4Cells(1, 8, 11, data);
                break;
            case 0x613:
                this.add4Temperature(1, 0, 3, data);
                break;
            case 0x614:
                this.add4Errors(1, 0, 3, data);
                break;
            case 0x615:
                this.add4Errors(1, 4, 7, data);
                break;
            case 0x616:
                this.add4Errors(1, 8, 11, data);
                break;
            //PACK2
            case 0x620:
                this.add4Cells(2, 0, 3, data);
                break;
            case 0x621:
                this.add4Cells(2, 4, 7, data);
                break;
            case 0x622:
                this.add4Cells(2, 8, 11, data);
                break;
            case 0x623:
                this.add4Temperature(2, 0, 3, data);
                break;
            case 0x624:
                this.add4Errors(2, 0, 3, data);
                break;
            case 0x625:
                this.add4Errors(2, 4, 7, data);
                break;
            case 0x626:
                this.add4Errors(2, 8, 11, data);
                break;
            //PACK3
            case 0x630:
                this.add4Cells(3, 0, 3, data);
                break;
            case 0x631:
                this.add4Cells(3, 4, 7, data);
                break;
            case 0x632:
                this.add4Cells(3, 8, 11, data);
                break;
            case 0x633:
                this.add4Temperature(3, 0, 3, data);
                break;
            case 0x634:
                this.add4Errors(3, 0, 3, data);
                break;
            case 0x635:
                this.add4Errors(3, 4, 7, data);
                break;
            case 0x636:
                this.add4Errors(3, 8, 11, data);
                break;
            // //PACK4
            // case 0x640:
            //     this.add4Cells(4, 0, 3, data);
            //     break;
            // case 0x641:
            //     this.add4Cells(4, 4, 7, data);
            //     break;
            // case 0x642:
            //     this.add4Cells(4, 8, 11, data);
            //     break;
            // case 0x643:
            //     this.add4Temperature(4, 0, 3, data);
            //     break;
            // case 0x644:
            //     this.add4Errors(4, 0, 3, data);
            //     break;
            // case 0x645:
            //     this.add4Errors(4, 4, 7, data);
            //     break;
            // case 0x646:
            //     this.add4Errors(4, 8, 11, data);
            //     break;
            // //PACK5
            // case 0x650:
            //     this.add4Cells(5, 0, 3, data);
            //     break;
            // case 0x651:
            //     this.add4Cells(5, 4, 7, data);
            //     break;
            // case 0x652:
            //     this.add4Cells(5, 8, 11, data);
            //     break;
            // case 0x653:
            //     this.add4Temperature(5, 0, 3, data);
            //     break;
            // case 0x654:
            //     this.add4Errors(5, 0, 3, data);
            //     break;
            // case 0x655:
            //     this.add4Errors(5, 4, 7, data);
            //     break;
            // case 0x656:
            //     this.add4Errors(5, 8, 11, data);
            //     break;
            case 0x700:
                this.addTiresTemperature(data);
                break;
            case 0x701:
                this.addAccelerometerData(data);
                break;
            default:
                console.log("UNKNOWN MESSAGE! ID: "+id);
                break;
        }
    }

    getInfo() {
        return this.info;
    }

    buildDatalog() {
        var answer = "";
        function addBit(info, shouldAppend = true) {
            answer+=(info ? info : 0);
        
            answer+=(shouldAppend ? "\t" : "\n");
            
        }

        addBit(this.info.control.ecuTimer);
        addBit(this.info.control.meanspeed);
        addBit(this.info.control.engine.torque.meantorque);
        addBit(this.info.control.steringWheel);
        addBit(this.info.control.pedals.brake);
        addBit(this.info.control.inverters.energy.right);
        addBit(this.info.control.inverters.energy.left);
        addBit(this.info.control.engine.current.right);
        addBit(this.info.control.engine.current.left);
        addBit(this.info.control.inverters.temperature.right1);
        addBit(this.info.control.inverters.temperature.right2);
        addBit(this.info.control.inverters.temperature.left1);
        addBit(this.info.control.inverters.temperature.left2);
        addBit(this.info.bms.meancurrent);
        addBit(this.info.bms.totalvoltage);
        addBit(this.info.bms.meantemperature);
        addBit(this.info.bms.maxtemperature);
        addBit(this.info.bms.minvoltage);
        addBit(this.info.control.stoppedtime, false);

        return answer
    }
    
    constructor(databaseName) {
        this.databaseHandler = new DatabaseHandler(databaseName);
        


        const fields = Object.values(constants.fields);
        this.idsMap  = fields.map(field => { return {[field.id+"-"+field.pos]: field.index} })
        
        this.info = {
            portconnected: false,
            bms: {
                currents:           [],
                glv:                null,
                charge:             null,
                operationmode:      null,
                errorflag:          null,
                meancurrent:        null,
                totalvoltage:       null,
                meantemperature:    null,
                maxtemperature:     null,
                minvoltage:         null,
                airstatus:          null,
                packs:              [
                    {
                        cells: [],
                        temperatures: [],
                        errors: []
                    },
                    {
                        cells: [],
                        temperatures: [],
                        errors: []
                    },
                    {
                        cells: [],
                        temperatures: [],
                        errors: []
                    },
                    {
                        cells: [],
                        temperatures: [],
                        errors: []
                    },
                    {
                        cells: [],
                        temperatures: [],
                        errors: []
                    },
                    {
                        cells: [],
                        temperatures: [],
                        errors: []
                    }
                ]
            },

            control: {
                stoppedtime:    null,
                currentevent:   null,
                eventstart:     null,
                eventended:     null,
                ecuTimer:       null,
                steringWheel:   2240,
                accelerometer: {
                    x: null,
                    y: null,
                    z: null
                },
                speed: {
                    frontright: null,
                    frontleft:  null,
                    backright:  null,
                    backleft:   null
                },
                tires: {
                    temperature: {
                        frontright: null,
                        frontleft:  null,
                        backright:  null,
                        backleft:   null
                    }
                },
                engine: {
                    torque: {
                        rightengine:    null,
                        leftengine:     null,
                        expectedright:  null,
                        expectedleft:   null,
                        meantorque:     null
                    },
                    current: {
                        right: null,
                        left:  null
                    }
                },
                
                pedals: {
                    throttle:   null,
                    brake:      null
                },
                meanspeed: null,
                inverters: {
                    energy: {
                        right:  null,
                        left:   null
                    },
                    temperature: {
                        right1: null,
                        right2: null,
                        left1:  null,
                        left2:  null
                    }
                }
            }
        }
    }
    
    setPortConnected(pc) {
        this.info.portconnected = pc;
    }
    setAirStatus(status) {
        this.info.bms.airstatus = status;
    }
    setStoppedTime(time) {
        this.info.control.stoppedtime = time;
    }
    setChargePercent(charge) {
        this.info.bms.charge = charge;
       //this.chargePercent = charge;
    }
    setCurrents(currents) {
        this.info.bms.currents = currents;
        //this.currents.push(currents);
    }
    setMediaCurrent(med) {
        this.info.bms.meancurrent = med
        //this.mediaCurrent = med
    }
    setMotorCurrent(cur) {
        this.info.control.engine.current.right = cur[0]
        this.info.control.engine.current.left = cur[1]
        //this.motorCurrent = cur;
    }

    setGLVVoltage(v) {
        this.info.bms.glv = v;
        //this.glvVoltage = v;
    }
    
    setOperationMode(op) {
        this.info.bms.operationmode = op;
        //this.operationMode = op;
    }
    setErrorFlag(er) {
        this.info.bms.errorflag = er;
        //this.errorFlag = er;
    }
    
    setTotalVoltage(tv) {
        this.info.bms.totalvoltage = tv;
        //this.totalVoltage = tv;
    }
    setMediaTemperature(med) {
        this.info.bms.meantemperature = med;
        //this.mediaTemperature = med;
    }
    setMaxTemperature(max) {
        this.info.bms.maxtemperature = max;
        //this.maxTemperature = max;
    }
    setMinVoltage(min) {
        this.info.bms.minvoltage = min;
        //this.minVoltage = min;
    }
    setSpeedfl(speedfl) {
        this.info.control.speed.frontleft = speedfl;
        //this.speedfl = speedfl
    }
    setSpeedfr(speedfr) {
        this.info.control.speed.frontright = speedfr;
        //this.speedfr = speedfr
    }
    setSpeedbl(speedbl) {
        this.info.control.speed.backleft = speedbl;
        //this.speedbl = speedbl
    }
    setSpeedbr(speedbr) {
        this.info.control.speed.backright = speedbr;
        //this.speedbr = speedbr
    }
    setMotorTorque(torque) {
        this.info.control.engine.torque.rightengine = torque[0];
        this.info.control.engine.torque.leftengine  = torque[1];
        //this.motorTorque = torque
    }
    setTorqueReferencia(tr) {
        this.info.control.engine.torque.expectedright = tr[0];
        this.info.control.engine.torque.expectedleft = tr[1];
    }
    setMediaSpeed(media) {
        this.info.control.meanspeed = media;
        //this.mediaSpeed = media;
    }
    setMediaTorque(media) {
        this.info.control.engine.torque.meantorque = media
        //this.mediaTorque = media;
    }
    setPedalAcelerador(pedAc) {
        this.info.control.pedals.throttle = pedAc
        //this.pedalAcelerador = pedAc;
    }
    setPedalFreio(pedFr) {
        this.info.control.pedals.brake = pedFr
        //this.pedalFreio = pedFr;
    }
    setSteeringWheel(sw) {
        this.info.control.steringWheel = sw;
    }
    setEnergiaInversor(inv) {
        this.info.control.inverters.energy.right = inv[0];
        this.info.control.inverters.energy.left  = inv[1];
        //this.energiaInversor = inv
    }
    
    setTempInversor(tmp) {
        this.info.control.inverters.temperature.right1=tmp[0];
        this.info.control.inverters.temperature.right2=tmp[1];
        this.info.control.inverters.temperature.left1=tmp[2];
        this.info.control.inverters.temperature.left2=tmp[3];
        //this.temperaturaInversor = tmp;
    }
    setCurrentEvent(ce) {
        this.info.control.currentevent = ce;
        //this.currentEvent = ce;
    }
    setStarted(st) {
        this.info.control.eventstart = st;
        //this.started = st;
    }
    setFinished(fn) {
        this.info.control.eventended = fn;
        //this.finished = fn;
    }
    setECUTimer(ecu) {
        this.info.control.ecuTimer = ecu;
        //this.ecuTimer = ecu;
    }

    //packs related
    addCell(pack, cell, value) {
        this.info.bms.packs[pack].cells[cell] = value;
    }
    add4Cells(pack, from, to, data) {
        var i;
        var j = 0;
        for(i = from; i<= to; i++) {
            this.addCell(pack,i,data[j++]);
        }
    }

    addTemperature(pack, temperature, value) {
        this.info.bms.packs[pack].temperatures[temperature] = value;
    }
    add4Temperature(pack, from, to, data) {
        var i;
        var j = 0;
        for(i = from; i<= to; i++) {
            this.addTemperature(pack,i,data[j++]);
        }
    }

    addError(pack, error, value) {
        this.info.bms.packs[pack].errors[error] = value;
    }
    add4Errors(pack, from, to, data) {
        var i;
        var j = 0;
        for(i = from; i<= to; i++) {
            this.addError(pack,i,data[j++]);
        }
    }


    addTiresTemperature(data) {
        this.info.control.tires.temperature.frontright = data[0]
        this.info.control.tires.temperature.frontleft = data[1]
        this.info.control.tires.temperature.backright = data[2]
        this.info.control.tires.temperature.backleft = data[3]
    }

    addAccelerometerData(data) {
        this.info.control.accelerometer.x = (data[0] >= Math.pow(2, 15) ? data[0]-Math.pow(2, 16): data[0]);
        this.info.control.accelerometer.y = (data[1] >= Math.pow(2, 15) ? data[1]-Math.pow(2, 16): data[1]);
        this.info.control.accelerometer.z = (data[2] >= Math.pow(2, 15) ? data[2]-Math.pow(2, 16): data[2]);
    }

}

module.exports = ObjectCreator;