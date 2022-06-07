const Transform = require('stream').Transform

const constants = require('./components/constants.js');

const frameHandler = require('./components/frame-handler.js')

class ApiModeParser extends Transform {
    constructor(options = {}) {
        super(options)
  
        // if (options.delimiter === undefined) {
        //     throw new TypeError('"delimiter" is not a bufferable object')
        // }
  
        // if (options.delimiter.length === 0) {
        //     throw new TypeError('"delimiter" has a 0 or undefined length')
        // }
  
        // this.includeDelimiter = options.includeDelimiter !== undefined ? options.includeDelimiter : false
        // this.delimiter = Buffer.from(options.delimiter)
        this.buffer = Buffer.alloc(0)
        this.processingMessage = false;
    }
  
    _transform(chunk, encoding, cb) {
        let data = Buffer.concat([this.buffer, chunk])
        let position = 0;

        if (!this.processingMessage) {
            while (position < data.length-1 && !(this.processingMessage = (data[position] === 0x7E))) {
                position++;
            }
            data = data.slice(position);
            position = 0;
        }

        if (this.processingMessage) {
            
            while(true) {
                if (position == null)
                    break;
                data = data.slice(position);
                position = 0;
                if (data[position] !== 0x7E) {
                    this.processingMessage = false;
                    break;
                }


                //se acabar as mensagens ou se chegar uma mensagem muito pequena (corrompida)
                if (data.length < 5)
                    break;

                const len = (data[1]<<8) + data[2];
                if (data.length < len + 3)
                    break;

                // if ((data.length) <= 18) {
                //     break;
                // }

                

                const frame = frameHandler.parseFrame(data);
                if (frame.secure) {
                    this.push(data);
                } else {
                    //deu erro no checksum, procure o byte de inicio novamente
                    if (frame.position == null) {
                        frame.position = 1
                    }
                    this.processingMessage = false;
                }

                //readiciona os 3 bytes q foram dados offset no começo para cria o newData
                position = frame.position;

            }
        }

        this.buffer = data;
        cb();
    }
  
    _flush(cb) {
      this.push(this.buffer)
      this.buffer = Buffer.alloc(0)
      cb()
    }

    
  }
  
  module.exports = ApiModeParser