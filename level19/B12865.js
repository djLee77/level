const fs = require("fs");

const input = fs
  .readFileSync("../input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map((item) => Number(item)));

const [N, K] = input.shift();

let dp = new Array(N + 1).fill(null).map(() => new Array(K + 1).fill(0));

let w = input.map((v) => v[0]);
let v = input.map((v) => v[1]);

for (let i = 1; i <= N; i++) {
  for (let j = 1; j <= K; j++) {
    if (j - w[i - 1] >= 0) {
      dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - w[i - 1]] + v[i - 1]);
    } else {
      dp[i][j] = dp[i - 1][j];
    }
  }
}

let str = "";
for (let i = 0; i <= N; i++) {
  for (let j = 0; j <= K; j++) {
    str += dp[i][j] + " ";
  }
  str += "\n";
}

console.log(dp[N][K]);
