const fs = require("fs");
let input = fs
  .readFileSync("../input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => Number(v));

const n = input.shift();


input[1] = Math.max(input[0] + input[1], input[1]);
input[2] = Math.max(input[0] + input[2], input[1]);

for (let i = 2; i < n; i++) {
  input[i] = Math.max(input[i] + input[i - 2], input[i - 1]);
}
console.log(Math.max(input[input.length - 1], input[input.length - 2]));
