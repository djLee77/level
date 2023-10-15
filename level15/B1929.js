const fs = require("fs");

const input = fs
  .readFileSync("../input.txt")
  .toString()
  .trim()
  .split(" ")
  .map((item) => Number(item));

const M = input[0];
const N = input[1];

var Eratos = [];

Eratos[0] = false;
Eratos[1] = false;

for(let i = 2; i <= N; i++){
    Eratos.push(true);
}

for (let i = 2; i * i <= N; i++) {
  if (Eratos[i]) {
    for (let j = i * i; j <= N; j += i) {
      Eratos[j] = false;
    }
  }
}

let answer = [];

for(let i = M; i <= N; i ++){
    if(Eratos[i]) answer.push(i);
}

console.log(answer.join("\n"));