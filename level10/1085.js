const fs = require("fs");

const input = fs.readFileSync("../input.txt").toString().trim().split(" ");

const x = Number(input[0]);
const y = Number(input[1]);
const w = Number(input[2]);
const h = Number(input[3]);

var min = 0;

min = Math.min(x, Math.abs(x-w), y, Math.abs(y-h));

console.log(min);

