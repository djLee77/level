const fs = require("fs");

const input = fs.readFileSync("../input.txt").toString().trim().split("\n");

const NM = input[0].split(" ");
input.shift();

const N = Number(NM[0]);

const S = new Set(input.slice(0, N));
const target = input.slice(N, input.length);

var cnt = 0;

for(let i of target){
    if(S.has(i)){
        cnt++;
    }
}

console.log(cnt);