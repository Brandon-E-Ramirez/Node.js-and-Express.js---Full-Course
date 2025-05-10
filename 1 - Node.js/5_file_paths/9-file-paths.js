const path = require('path');
console.log(path.sep); //prints: "/"

const filePath = path.join('Node.js', 'sub_folder', 'test.txt');//adds '/' between elements
console.log(filePath);

const base = path.basename(filePath)//prints: "test.txt"
console.log(base);

const absolute = path.resolve(__dirname, filePath);//full 'absolute' path
console.log(absolute);