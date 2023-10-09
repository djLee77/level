const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((item) => item.split(" "));
const arr = input.map((item) => item.map((item) => Number(item)));
arr.shift();
var answer = [];

for (let i = 0; i < arr.length; i++) {
  let big = arr[i][0] > arr[i][1] ? arr[i][0] : arr[i][1];
  let small = arr[i][0] < arr[i][1] ? arr[i][0] : arr[i][1];

  let bigMSmall = big * small;

  let mod = big % small;
  let tmp = 0;

  while(mod != 0){
    tmp = mod;
    mod = small % mod;
    small = tmp;
  }

  let GCD = small;
  answer.push(bigMSmall / GCD);
}

console.log(answer.join("\n"));