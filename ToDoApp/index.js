// process.argv.slice(2,3)


const parseArgs = require("minimist");
const colors = require('colors');

const handleCommand = require('./handleCommand')

const command = parseArgs(process.argv.slice(2, 3));
delete command._;
console.log(command);

handleCommand(command);