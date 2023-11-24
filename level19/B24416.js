const fs = require("fs");
const input = fs.readFileSync("../input.txt").toString().trim().replace(/\r/, "");
const N = Number(input);

let count_fn = 0;
let count_dp = 0;

function fibonacci(n) {  
  if (n == 1 || n == 2) {
    count_fn++;
    return 1;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

function fibonacci_dp(n) {
    let arr = [0, 1, 1];
    for (let i = 3; i <= n; i++) {
        count_dp++;
        arr[i] = arr[i - 1] + arr[i - 2];
    }

    return arr[n];
}

fibonacci(N);
fibonacci_dp(N);

console.log(count_fn + " " + count_dp);
