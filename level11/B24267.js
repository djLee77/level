const fs = require("fs");

const input = fs.readFileSync("../input.txt").toString().trim();

var N = BigInt(input);

var answer = (N * (N-1n) * (N-2n)) / 6n;

console.log(answer.toString().replace("n", ""));
console.log(3);