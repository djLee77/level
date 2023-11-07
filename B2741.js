const fs = require("fs");

const input = fs.readFileSync("../input.txt").toString().trim();

const N = Number(input);

let answer = "";

for(let i=1; i<=N; i++){
    answer += i + "\n";
}