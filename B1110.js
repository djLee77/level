const fs = require("fs");

let input = fs
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .replace(/\r/, "");

if (input.length === 1) input = "0" + input;

let str = input;
let cnt = 0;

while (true) {
  let token = str.split("");
  let sum = Number(token[0]) + Number(token[1]);
  if (sum < 10) {
    sum = "0" + sum;
  }else{
    sum = String(sum);
  }
  str = token[token.length - 1] + sum.split("")[sum.length - 1];
  cnt++;
  if (str === input) break;
}

console.log(cnt);
