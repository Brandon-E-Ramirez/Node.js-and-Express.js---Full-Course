//this is the synchronous approach

/*
The first line of code below is used to call only the specific functions 
we need, this is called de-structuring and we could achieve the same purpose
like this:
    fs.readFileSync()
    fs.writeFileSync()
*/
const {readFileSync, writeFileSync} = require('fs');
const first = readFileSync('/media/yaboi_sakurai/FILES/CODING_FILES/learning/JAVASCRIPT/Node.js and Express.js - Full Course/1 - Node.js/sub_folder/first_file.txt', 'utf-8');//absolute file path, encoding scheme
const second = readFileSync('/media/yaboi_sakurai/FILES/CODING_FILES/learning/JAVASCRIPT/Node.js and Express.js - Full Course/1 - Node.js/sub_folder/second_file.txt','utf-8');

//write to file
writeFileSync(
'/media/yaboi_sakurai/FILES/CODING_FILES/learning/JAVASCRIPT/Node.js and Express.js - Full Course/1 - Node.js/sub_folder/result.txt',
`Here is the result: ${first} ${second} I am appended every time I am run!\n`,
{flag: 'a'}//this flag makes it so that the content is appended to the file, instead of overwriting it
//flags doc: https://nodejs.org/api/fs.html#file-system-flags
)
//read from file
const result = readFileSync('/media/yaboi_sakurai/FILES/CODING_FILES/learning/JAVASCRIPT/Node.js and Express.js - Full Course/1 - Node.js/sub_folder/result.txt', 'utf-8');
console.log(result);