const fs = require("fs");

const input = fs
  .readFileSync("../input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((item) => item.replace(/\r/, ""));

input.shift();

let arr = [];
let cnt = 0;

for (let i = 0; i < input.length; i++) {
  if (input[i] === "ENTER") {
    let set = new Set(arr);
    cnt += set.size;
    arr = [];
  }else{
    arr.push(input[i]);
  }
}

let set = new Set(arr);
cnt += set.size;

console.log(cnt);