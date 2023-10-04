const fs = require('fs');
const input = fs.readFileSync("../input.txt").toString().trim().split(" ");

var a = Number(input[0]);
var b = Number(input[1]);

console.log(a + b);