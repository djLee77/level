const fs = require("fs");

const input = fs
  .readFileSync("../input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((item) => Number(item));

input.shift();

let divisor = new Set([]);
let divisorArr = [];

for (let i = 0; i < input.length - 1; i++) {
  divisor.add(input[i + 1] - input[i]);
  divisorArr.push(input[i + 1] - input[i]);
}

var GCD = 0;

const fcc = (big, small, index) => {
  let mod = big % small;

  while (mod > 0) {
    let tmp = mod;
    mod = small % mod;
    small = tmp;
  }

  GCD = small;

  if (index == 0) {
    return;
  } else {
    return fcc(small, divisorArr[index - 1], index - 1);
  }
};

fcc(
  divisorArr[divisorArr.length - 1],
  divisorArr[divisorArr.length - 2],
  divisorArr.length - 2
);

let answer = 0;

for(let i of divisorArr){
    if(i != GCD){
        answer += i/GCD - 1;
    }
}

console.log(answer);
