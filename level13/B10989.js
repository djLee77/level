const fs = require("fs");

const input = fs.readFileSync("../input.txt").toString().trim().split("\n");

input.shift();

var arr = input.map((item) => Number(item));

arr = arr.sort(function(a, b){return (a-b)});

for(let i=0; i<arr.length; i++){
    console.log(arr[i]);
}