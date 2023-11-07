const input = require("fs").readFileSync("../input.txt").toString().trim();

let n = Number(input);

let answer = n;

for (let i = 1; i < n; i++) {
  answer = answer * i;
}

if (n === 0) {
  answer = 1;
}

console.log(answer);
