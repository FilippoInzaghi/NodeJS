const path = require('path');

const pathToFile = path.join(__dirname, 'index.js');

console.log(pathToFile);

const parse = path.parse(__filename);
console.log(parse);

const os = require('os');
const uptime = os.uptime();
console.log(uptime);
console.log(os.homedir());