const fs = require("fs");

const input = fs
  .readFileSync("../input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((item) => item.replace(/\r/, ""));

const M = Number(input[0].split(" ")[1]);

input.shift();

let obj = {};

for (let i = 0; i < input.length; i++) {
  if (input[i].length < M) continue;

  if (Object.keys(obj).includes(input[i])) {
    obj[input[i]] += 1;
  } else {
    obj[input[i]] = 1;
  }
}


let arr = [];

for (const [key, value] of Object.entries(obj)) {
  arr.push([key, value]);
}

arr.sort((a,b) => b[1] - a[1]);

console.log(arr.map(item => item[0]).join("\n"));