const fs = require("fs");

const [N, input] = fs
  .readFileSync("../input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map((item) => Number(item)));

const n = N.shift();

var dp = new Array(n).fill(0);
for(var i=0; i<n; i++){
    var max = 0;
    for(var j=0; j<i; j++){
        if(input[i] > input[j] && dp[j] > max){
            max = dp[j];
        }
    }
    dp[i] = max + 1;
}
console.log(Math.max(...dp));