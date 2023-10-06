const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(item=> item.replace("\r", ""));

const NM = input[0].split(" ");
const N = Number(NM[0]);
var cnt = 0;
var str = "";

input.shift();
var peopleNM = [];
var peopleN = new Map([]);

for(let i=0; i<N; i++){
    peopleN.set(input[i]);
}

for(let i=N; i<input.length; i++){
    if(peopleN.has(input[i])){
        peopleNM.push(input[i]);
        cnt++;
    }
}

answer = peopleNM.sort();

console.log(cnt);
console.log(answer.join("\n"));