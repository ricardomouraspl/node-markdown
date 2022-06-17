const chalk = require('chalk');
const readFile = require('./index');
const validateUrls = require('./http-validation');

const userInput = process.argv;

async function processText(input) {
    let filePath = input[2];
    let validate = input[3] === 'validate' ? true : false;

    const result = await readFile(filePath);

    if (validate) {
        console.log(chalk.yellow("links validados"), await validateUrls(result));
    } else {
        console.log(chalk.yellow("lista de links"), result);
    }
}

console.log(processText(userInput));