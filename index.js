const chalk = require('chalk');
const fs = require('fs');

function readFile(filePath) {
    const enconding = 'utf-8';
    fs.readFile(filePath, enconding, (_, texto) => {
        console.log(chalk.green(texto));
    });
}

readFile('./arquivos/texto1.md');