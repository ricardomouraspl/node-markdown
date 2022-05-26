const chalk = require('chalk');
const fs = require('fs');

const filePath = './arquivos/texto.md';

const text = 'São geralmente recuperados a partir de um objeto [FileList](https://developer.mozilla.org/pt-BR/docs/Web/API/FileList) que é retornado como resultado da seleção, pelo usuário, de arquivos através do elemento [<input>](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/Input), a partir do objeto [DataTransfer](https://developer.mozilla.org/pt-BR/docs/Web/API/DataTransfer) utilizado em operações de arrastar e soltar, ou a partir da API `mozGetAsFile()` em um [HTMLCanvasElement](https://developer.mozilla.org/pt-BR/docs/Web/API/HTMLCanvasElement). Em Gecko, códigos com privilégiios podem criar objetos File representando qualquer arquivo local sem a intereção do usuário (veja [Implementation notes](https://developer.mozilla.org/pt-BR/docs/Web/API/File#implementation_notes) para mais informações.)';

function extractLinks(text) {
    const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm;
    const extractedLinks = text.match(regex);
    console.log(extractedLinks);
}
extractLinks(text);

// function throwErrorException(error) {
//     throw new Error(chalk.red(error.code, 'file not founded!'));
// }

// async function readFile(filePath) {
//     const enconding = 'utf-8';
//     try {
//         const text = await fs.promises.readFile(filePath, enconding);
//         console.log(chalk.green(text));
//     } catch (error) {
//         throwErrorException(error);
//     } finally {
//         console.log('process finished');
//     }
// }

// readFile(filePath);