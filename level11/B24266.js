const fs = require("fs");

const input = fs.readFileSync("../input.txt").toString().trim();

var N = BigInt(input);

var answer = N*N*N;

var answer = answer.toString().replace("n", "");


console.log(answer);
console.log(3);