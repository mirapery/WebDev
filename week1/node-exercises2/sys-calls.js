
const fs = require('fs');

fs.readFile('sample.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file: ', err);
    } else {
        console.log('File contents: ', data);
    }
});

fs.writeFile('output.txt', 'This is sample data.', (err) => {
    if (err) {
        console.error('Error writing file: ', err);
    } else {
        console.log('Data written to output.txt');
    }
});

const os = require('os');

const osInfo = `
    Hostname: ${os.hostname()}
    Platform: ${os.platform()}
    Available cores: ${os.cpus().length}
`;

fs.writeFile('output.txt', osInfo, (err) => {
    if (err) {
        console.error('Error writing file: ', err);
    } else {
        console.log('DatOS information written to output.txt');
    }
});




