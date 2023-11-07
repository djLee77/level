const fs = require("fs");

const input = fs.readFileSync("../input.txt").toString().trim();

const N = Number(input);

console.log(N * N - N);