const fs = require("fs");

const input = fs.readFileSync("../input.txt").toString().trim().split("\n");

var arr = input;
arr.shift();
arr = arr.map((item) => Number(item));

const answer = arr.sort(function(a,b){return(a-b)});

console.log(answer.join("\n"));