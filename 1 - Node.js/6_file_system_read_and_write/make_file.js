const {readFileSync, writeFileSync} = require('fs');

let j = ''

for(let i = 0; i < 100; i++){
    j += `The current line is: ${i}, this squared is: ${i * i}\n`
}

writeFileSync(
    './misc/big.txt',
    j,
{flag: 'w'}//overwrite file
)
const result = readFileSync('./misc/big.txt', 'utf-8');
console.log(result);