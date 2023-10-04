const fs = require("fs");

const input = fs.readFileSync("../input.txt").toString().trim().split("\n").map((item)=>item.split(" "));

input.shift();

var arr = input.map(item => item.map(item=> Number(item)));

var arr = arr.sort(function(a, b){ if (a[0] !== b[0]) {
    return a[0] - b[0];
  }
  return a[1] - b[1];
});

console.log(arr.map(item=>item.join(" ")).join("\n"));