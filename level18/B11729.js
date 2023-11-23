const fs = require("fs");

const input = fs
  .readFileSync("../input.txt")
  .toString()
  .trim()
  .replace(/\r/, "");

const N = Number(input);

let answer = [];

const hanoi = (n, from, tmp, to) => {
  if (n < 1) return;

  hanoi(n - 1, from, to, tmp);
  answer.push([from, to]);

  hanoi(n - 1, tmp, from, to);
};

hanoi(N, 1, 2, 3);
console.log(Math.pow(2, N) - 1);
console.log(answer.map((item) => item.join(" ")).join("\n"));
