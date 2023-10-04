const fs = require("fs");

const input = fs.readFileSync("../input.txt").toString().trim();

console.log(Number(input) * 4);