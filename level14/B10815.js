const fs = require("fs");

const input = fs.readFileSync("../input.txt").toString().trim().split("\n");

const N = new Set(input[1].split(" ").map(item => Number(item)));

const M = new Set(input[3].split(" ").map(item => Number(item)));

var str = "";

for(let i of M){
    if(N.has(i)){
        str += "1 ";
    }else{
        str += "0 ";
    }
}

console.log(str);