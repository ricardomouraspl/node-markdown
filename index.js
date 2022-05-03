const chalk = require('chalk');
const fs = require('fs');

function throwErrorException(error) {
    throw new Error(chalk.red(error.code, 'file not founded!'));
}

function readFile(filePath) {
    const enconding = 'utf-8';
    fs.readFile(filePath, enconding, (error, text) => {
        if (error) {
            throwErrorException(error);
        } else {
            console.log(chalk.green(text));
        }
    });
}

readFile('./arquivos');