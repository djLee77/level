const fs = require("fs");

const input = fs
  .readFileSync("../input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((item) => item.replace(/\r/, ""));

const str = input.shift();
const n = Number(input.shift());
const arr = input.map((item) => item.split(" "));

for (let i = 0; i < n; i++) {
    let [c, s_idx, e_idx] = arr[i];
    
}
