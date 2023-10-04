const fs = require("fs");

const input = fs.readFileSync("../input.txt").toString().trim().split("\n").map(item => item.split(" "));

input.shift();

const set = new Set(input.map(item => item[0]));

console.log(set);