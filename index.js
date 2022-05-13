const chalk = require('chalk');
const fs = require('fs');

const filePath = './arquivos/texto.md';

function throwErrorException(error) {
    throw new Error(chalk.red(error.code, 'file not founded!'));
}

async function readFile(filePath) {
    const enconding = 'utf-8';
    try {
        const text = await fs.promises.readFile(filePath, enconding);
        console.log(chalk.green(text));
    } catch (error) {
        throwErrorException(error);
    } finally {
        console.log('process finished');
    }
}

readFile(filePath);
