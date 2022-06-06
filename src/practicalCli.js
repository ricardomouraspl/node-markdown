const chalk = require('chalk');
const readFilesFromDirectory = require("./practicalExercise");

const path = process.argv;

async function processText(filePath) {
    const result = await readFilesFromDirectory(filePath);
    console.log(chalk.yellow("lista de links"), result);
}

console.log(processText(path[2]));