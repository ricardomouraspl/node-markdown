const chalk = require('chalk');
const readFile = require('./index');

const path = process.argv;

async function processText(filePath) {
    const result = await readFile(filePath);
    console.log(chalk.yellow("lista de links"), result);
}

console.log(processText(path[2]));