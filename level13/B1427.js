const fs = require("fs");

const input = fs.readFileSync("../input.txt").toString().trim().split("").map(item => Number(item));

const answer = input.sort((a,b) => b-a);

console.log(answer.join(""));