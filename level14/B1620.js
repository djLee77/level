const fs = require("fs");

const input = fs.readFileSync("../input.txt").toString().trim().split("\n").map(item=> item.replace('\r',""));

const NM = input[0].split(" ");
input.shift();
const N = Number(NM[0]);

const dictionary = input.slice(0, N);
const problem = input.slice(N, input.length);
const arr = new Map([]);
let answer = "";

for(let i=0; i< N; i++){
    arr.set(dictionary[i], i+1);
}

for(let i=0; i< problem.length; i++){
    if(Number(problem[i]) > 0){
        answer += dictionary[Number(problem[i]) - 1] + "\n";
    }else{
        answer += arr.get(problem[i]) + "\n";
    }
}

console.log(answer);
