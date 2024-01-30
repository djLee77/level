const fs = require("fs");

const input = fs
  .readFileSync("../input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => Number(v));

input.shift();

const n = Math.max(...input);

let dp = [];

dp.push(1);
dp.push(1);
dp.push(1);
dp.push(2);
dp.push(2);

if (n > 5) {
  for (let i = 5; i <= n; i++) {
    dp[i] = dp[i-1] + dp[i-5];
  }
}

let answer = "";

for (let i = 0; i < input.length; i++) {
  answer += dp[input[i]-1] + "\n";
}

console.log(answer);
