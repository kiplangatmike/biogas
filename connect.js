// const path = require('path');
// const Readline = require('@serialport/parser-readline');
// var SerialPort = require('serialport').SerialPort;
// const myPort = new SerialPort({
//     path: 'COM6',
//     baudRate:9600,
    
//     // parser: new Readline("\n")
//   });
// // const myPort = new SerialPort('COM7', { 
// //     baudRate: 9600,
// //     // parser: SerialPort.parsers.readline('\r\n')
// // });


// myPort.on('open', onOpen);
// myPort.on('on data', onData);

// function onOpen(){
//     console.log("Open connection\n");
// }

// function onData(data){
//     console.log('data' + data)
// }
// const path = require('path');
// const SerialPort = require('serialport').SerialPort;
const Readline = require('@serialport/parser-readline');

// const port = new SerialPort('COM7', { baudRate: 9600 });
// const parser = port.pipe(new Readline({ delimiter: '\r\n' }));

// parser.on('data', (sensorData) => {
//   console.log(sensorData);
// });

// ===================================================================

var http = require('http');
var fs = require('fs');
var index = fs.readFileSync( 'index.html');

var SerialPort = require('serialport').SerialPort;
const { ReadlineParser } = require('@serialport/parser-readline')
const parser = new ReadlineParser()
// const parsers = SerialPort.parsers;

// const parser = new parsers.Readline({
//     delimiter: '\r\n'
// });

var port = new SerialPort({
    path: 'COM5',
    baudRate: 9600,
    dataBits: 8,
    parity: 'none',
    stopBits: 1,
    flowControl: false
});

port.pipe(parser);

var app = http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(index);
});

var io = require('socket.io').listen(app)
app.listen(3000);

io.on('connection', function(data) {

    console.log('Node is listening to port 3000');

});

parser.on('data', function(data) {
    console.log('Received data from port: ' + data);
    
    console.log(typeof data);
    io.emit('data', data);
});





