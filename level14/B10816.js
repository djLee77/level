const fs = require("fs");
const input = fs.readFileSync("../input.txt").toString().trim().split("\n");

const N = input[1].split(" ").map((item) => Number(item));
const M = input[3].split(" ").map((item) => Number(item));

const Nmap = new Map([]);

for (let i = 0; i < N.length; i++) {
  if (Nmap.get(N[i]) > 0) {
    Nmap.set(N[i], Nmap.get(N[i]) + 1);
  } else {
    Nmap.set(N[i], 1);
  }
}

answer = "";

for (let i = 0; i < M.length; i++) {
  if (Nmap.get(M[i]) == undefined) {
    answer += "0 ";
  } else {
    answer += Nmap.get(M[i]) + " ";
  }
}

console.log(answer);
