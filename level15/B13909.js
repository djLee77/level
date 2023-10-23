const fs = require("fs");

const input = fs.readFileSync("../input.txt").toString().trim();

const N = Number(input);

let cnt = 0;

for(let i=1; i*i <= N; i++){
    cnt++;
}

console.log(cnt);