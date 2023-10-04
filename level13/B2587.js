const fs = require("fs");

var input = fs.readFileSync("../input.txt").toString().trim().split("\n");

input = input.map(item => Number(item));

var arr = input.sort(function(a, b ){return (a-b)});

var average = arr.reduce((acc, currentValue) => acc+currentValue) / arr.length;

console.log(average);
console.log(arr[2]);