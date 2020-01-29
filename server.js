const express = require('express')
const next = require('next')
const bonjour = require('bonjour')

const ObjectCreator = require('./object-creator.js');
const SerialHandler = require('./serial-handler.js');

const fs = require('fs');

require.extensions['.properties'] = function (module, filename) {
    module.exports = fs.readFileSync(filename, 'utf8');
};
const constants = require('./components/constants.js');

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

var ttl_port;


const recentInformation = new ObjectCreator('database.db', constants);


const port = process.env.PORT || 5000;

const serialHandler = new SerialHandler(recentInformation);
serialHandler.initSerialPort();



app.prepare()
.then(() => {
  const server = express()
  const bj = bonjour()

  server.get('/data/:page', (req, res) => {
    const page = { title: req.params.page }
    res.send({data: recentInformation.buildData(page.title)});
  });

  server.get('/plot/', (req, res) => {
    var ids = []
    ids = ids.concat(req.query.id);
    
    res.send({data: recentInformation.buildPlotData(ids)})
  });

  // server.get('/constants/', (req, res) => res.send(constants));


  server.get('*', (req, res) => {
    return handle(req, res)
  })

  const port = 80;
  // const service = bj.publish({name: 'NK319', port: port, type: 'http'});

  server.listen(port, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})


process.on('SIGTERM', () => {
  server.close(() => {
    console.log('Process terminated')
  })
  if (ttl_port) {
    ttl_port.close(() => {
      console.log('Porta fechada')
    })
  }
})
