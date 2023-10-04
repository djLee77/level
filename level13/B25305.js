const fs = require("fs");

const input = fs.readFileSync("../input.txt").toString().trim().split("\n").map(item => item.split(" "));

var arr = input[1];

arr = arr.map(item => Number(item));

var k = input[0][1];

arr = arr.sort(function(a, b) {return (a-b)});

console.log(arr[arr.length - k]);