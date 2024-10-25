
// FIRST ///////////////////////////

//function sayHello(name) {
//    console.log('Hello ' + name);
//}

//sayHello('Mosh');



// SECOND ////////////////////////////

//console.log();  // global
//setTimeout()
//clearTimeout();
//setInterval()
//clearInterval();

//window.console.log
//window.setTimeout()

//var message = '';
//window.message

//globalThis.setTimeout



// THIRD //////////////////////////////

//console.log(module);



// FOURTH ///////////////////////////

// require('./subfolder/logger');
// require('../logger');
//const log = require('./logger');

//log('message');



// FIFTH /////////////////////////////

//const path = require('node:path');

//var pathObj = path.parse(__filename);

//console.log(pathObj);



// 6

//const os = require('node:os');

//var totalMemory = os.totalmem();
//var freeMemory = os.freemem();

//console.log('Total Memoty: ' + totalMemory);

// Template string

//console.log(`Total Memory: ${totalMemory}`);
//console.log(`Free Memory: ${freeMemory}`);



// 7

const fs = require('fs');

//const files = fs.readdirSync('./');
//console.log(files);

fs.readdir('$', function(err, files) {
    if (err) console.log('Error', err);
    else console.log('Result', files);
});