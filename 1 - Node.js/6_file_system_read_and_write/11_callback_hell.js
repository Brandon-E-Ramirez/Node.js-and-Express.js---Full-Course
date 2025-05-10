//this is the asynchronous approach
const { readFile, writeFile } = require('fs')

let f = '/media/yaboi_sakurai/FILES/CODING_FILES/learning/JAVASCRIPT/Node.js and Express.js - Full Course/1 - Node.js/content/first.txt';
let s = '/media/yaboi_sakurai/FILES/CODING_FILES/learning/JAVASCRIPT/Node.js and Express.js - Full Course/1 - Node.js/content/second.txt';
let r = '1 - Node.js/content/result_async.txt';

console.log('start')//printed first

readFile(f, 'utf8', (err, result) => {
  if (err) {
    console.log(err)
    return
  }
  const first = result
  readFile(s, 'utf8', (err, result) => {
    if (err) {
      console.log(err)
      return
    }
    const second = result
    writeFile(
      r,
      `Here is the result : ${first}, ${second}`,
      (err, result) => {
        if (err) {
          console.log(err)
          return
        }
        console.log('done with this task')//printed last
      }
    )
  })
})
console.log('starting next task')//printed second