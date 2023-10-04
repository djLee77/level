const fs = require("fs");

var input = fs
  .readFileSync("../input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((item) => item.split(" "));

var n = input[0][0];
var m = input[0][1];
var arr = [];
var sum = 0;

for (let i = 0; i < n; i++) {
  arr.push(Number(input[1][i]));
}

arr = arr.filter((item) => item <= m);

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length; j++) {
    if (j === i) {
      continue;
    }
    for (let k = 0; k < arr.length; k++) {
      if (k === i || k === j) {
        continue;
      }
      if (arr[i] + arr[j] + arr[k] <= m) {
        if (arr[i] + arr[j] + arr[k] > sum) {
          sum = arr[i] + arr[j] + arr[k];
        }
      }
    }
  }
}

console.log(sum);
