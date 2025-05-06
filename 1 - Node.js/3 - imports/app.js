//CommonJS, every file is a module (by default)
//Modules - Encapsulated code (only share the mininmum)

const names = require("../2 - exports/4-names");
const {john, peter} = require("../2 - exports/4-names");
const data = require("../2 - exports/6-alternative-flavor");
const sayHi = require("../2 - exports/5-utils");

require("./7-mind-greande"); //the code in this module runs 'externally' and shows up here

console.log(data + '\n');
console.log(data.singlePerson)

console.log(names);
sayHi('Susan');
sayHi(john); //sayHi(names.john)
sayHi(peter); //sayHi(names.peter)