const fs = require("fs");

const input = fs.readFileSync("../input.txt").toString().trim().split("\n");

input.shift();

var answer = input.sort(function (a, b) { return a - b });

answer.map(input => Number(input));

for(let i=0; i<answer.length; i++){
    console.log(answer[i]);
}