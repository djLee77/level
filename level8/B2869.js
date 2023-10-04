
const fs = require("fs");

const input = fs.readFileSync("../input.txt").toString().trim().split(" ");

var A = Number(input[0]);
var B = Number(input[1]);
var V = Number(input[2]) - A;
var clm = A-B;

var day = Math.ceil(V / clm) + 1;

console.log(day);
