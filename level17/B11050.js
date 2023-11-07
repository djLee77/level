const fs = require("fs");

const input = fs.readFileSync("../input.txt").toString().trim().split(" ");

const factorial = (n) => {
    let answer = n;
  
    for (let i = 1; i < n; i++) {
      answer = answer * i;
    }
  
    if (n === 0) {
      answer = 1;
    }
    return answer;
  };

const N = Number(input[0]);
const K = Number(input[1]);

const answer = factorial(N) / (factorial(K) * factorial(N-K));

console.log(answer);