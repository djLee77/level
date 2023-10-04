const fs = require("fs");

const input = fs.readFileSync("../input.txt").toString().trim().split(" ");

var N = Number(input[0]);
var K = Number(input[1]);
var answer = 0;
var cnt_k = 0;
var i = 1;

while (i <= N) {
  if (N % i == 0) {
    answer = i;
    cnt_k++;
  }

  if (cnt_k == K) {
    break;
  }

  i++;
}

if (cnt_k == K) {
  console.log(answer);
} else {
  console.log(0);
}
