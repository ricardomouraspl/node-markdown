const chalk = require('chalk');
const fs = require("fs");
const path = require("path");
const readFile = require('./index');

async function readFilesFromDirectory(directoryPath) {
    const absoluteDirectoryPath = path.join(__dirname, directoryPath);
    const encoding = "utf-8";
    const files = await fs.promises.readdir(absoluteDirectoryPath, { encoding });

    const result = await Promise.all(files.map(async (file) => {
        const filePath = `${absoluteDirectoryPath}/${file}`;
        const readIt = await readFile(filePath);
        return readIt;
    }));

    return result;
}

module.exports = readFilesFromDirectory;