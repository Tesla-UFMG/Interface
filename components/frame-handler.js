const constants = require('./constants.js');

class FrameHandler {

    constructor(bytes) {

    }


    static generateFrame(frameType, frameID, ...data) {

        const countLength = (ob) => {
            
            if (typeof ob === 'object') {
                let quan = 0;
                for (let i = 0; i < ob.length; i++) {
                    quan += countLength(ob[i])
                }
                return quan;
            } else {
                return 1;
            }
        }

        let objLength = countLength(data);

        let frame = Buffer.alloc(objLength+12);
        const startFrame = 0x7E;

        let offset = 0;
        
        // offset = frame.writeUInt8(startFrame, offset);


        offset = frame.writeUInt8(frameType, offset);

        offset = frame.writeUInt8(frameID, offset);


        constants.port.xbeeSourceAddress.forEach(element => {
            offset = frame.writeUInt8(element, offset);
        });

        offset = frame.writeUInt8(0xFF, offset);
        offset = frame.writeUInt8(0xFE, offset);

        switch(frameType) {
            case this.frameTypes.remoteAtCommand:
                offset = frame.writeUInt8(data[0], offset);
                data[1].forEach(element => {
                    offset = frame.writeUInt8(element, offset);
                });
                if (typeof(data[2]) !== 'undefined') {
                    data[2].forEach(element => {
                        offset = frame.writeUInt8(element, offset);
                    });
                }
                break;

            case this.frameTypes.requestTxMessage:
                offset = frame.writeUInt8(data[0], offset);
                offset = frame.writeUInt8(data[1], offset);
                data[2].forEach(element => {
                    offset = frame.writeUInt8(element, offset);
                });
                break;
        }

        let sum = frame.reduce((prev, current) => prev+current, 0);
        

        const checksum = 0xFF-(sum&0xFF);

        let initialBuffer = Buffer.from([startFrame, offset&0xFF00, offset&0xFF]);
        let checksumBuffer = Buffer.from([checksum]);
        let frameBuffer = Buffer.concat([initialBuffer, frame, checksumBuffer]);

        return frameBuffer;
    }



    static parseFrame(data) {
        let position = 0;
        let frameData = {}

        position++;
        
        let length = (data[position]<<4) + data[position+1];
        position+=2;

        const frameType = data[position];
        position++;
        frameData.frameType = frameType;

        let shouldAddressCheck = true;

        switch(frameType) {
            case 0x90:
                frameData.destinationAddressHigh = data.slice(position, position+8);

                position+=8;
                frameData.destinationAddressLow  = data.slice(position, position+2);

                position+=2;
                frameData.options = data[position];

                position++;
                frameData.rfData = data.slice(position, position+length-12);

                position+=length-12;
                break;

                //REMOTE AT COMMAND RESPONSE
            case 0x97:
                frameData.frameID = data[position];
                position++;
                frameData.destinationAddressHigh = data.slice(position, position+8);

                position+=8;

                frameData.destinationAddressLow  = data.slice(position, position+2);

                position+=2;

                frameData.atCommand = data.slice(position, position+2);
                position+=2;

                frameData.commandStatus = data[position];
                position++;

                frameData.commandData = data.slice(position, length+3);
                position = length+3

                break;
            case 0xA2:
                frameData.destinationAddressHigh = data.slice(position, position+8);

                position+=8;
                frameData.destinationAddressLow  = data.slice(position, position+2);

                position+=2;
                frameData.status = data[position];

                position++;
                break;
            case 0x8B:
                shouldAddressCheck = false;
                frameData.frameID = data[position];
                position++;

                frameData.destinationAddressLow  = data.slice(position, position+2);

                position+=2;

                frameData.transmitRetryCount = data[position];
                position++;

                frameData.deliveryStatus = data[position];
                position++;

                frameData.discoveryStatus = data[position];
                position++;


                break;
            default:
                console.log('unknown message: '+frameType);
                debugger;
                break;
            
        }

        const checksum = data[position];
        position++;

        //faz a checkagem so com os bytes da primeira mensagem, por isso o slice(3, length+4)
        const sum = data.slice(3, length+4).reduce((previous, current) => previous+current,0);

        if (sum & 0xFF == 0xFF) {

            if (shouldAddressCheck) {
                if (typeof(frameData.destinationAddressHigh) == 'undefined')
                    return {
                        secure: false,
                        frame: null,
                        position: null
                    }
        
                //xbeeSourceAddress foi convertido de string para um octeto de bytes no constants.js
                const addressCheck = constants.port.xbeeSourceAddress.length === frameData.destinationAddressHigh.length && constants.port.xbeeSourceAddress.every((value, index) => value === frameData.destinationAddressHigh[index])
                return  {
                    secure: addressCheck,
                    frame: frameData,
                    position: position
                }
            } else {
                return {
                    secure: true,
                    frame: frameData,
                    position: position
                }
            }
        } else {
            return {
                secure: false,
                frame: null,
                position: null
            }
        }

        
        

    }
}

FrameHandler.frameTypes = {
    remoteAtCommand: 0x17,
    requestTxMessage: 0x10,
    receivedMessage: 0x90,
    remoteAtCommandResponse: 0x97
}

module.exports = FrameHandler;