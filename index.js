const chalk = require('chalk');
const fs = require('fs');

const filePath = './arquivos/texto1.md';

function extractLinks(text) {
    const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm;
    const resultArray = [];
    let temp;

    while ((temp = regex.exec(text)) !== null) {
        resultArray.push({
            [temp[1]]: temp[2]
        });
    }
    return resultArray;
}

function throwErrorException(error) {
    throw new Error(chalk.red(error.code, 'file not founded!'));
}

async function readFile(filePath) {
    const encoding = 'utf-8';
    try {
        const text = await fs.promises.readFile(filePath, encoding);
        // console.log(chalk.green(text));
        console.log(extractLinks(text));
    } catch (error) {
        throwErrorException(error);
    } finally {
        console.log('process finished');
    }
}

readFile(filePath);