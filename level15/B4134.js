const fs = require("fs");

const input = fs.readFileSync("../input.txt").toString().trim().split("\n").map(item => Number(item));

input.shift();

const prime = (n) => {
    if(n < 2){
        return false;
    }
    for(let i=2; i<= Math.sqrt(n); i++){
        if(n % i == 0){
            return false;
        }
    }
    return true;
}

let answer = [];

for(let i of input){
    while(!prime(i)){
        i++;
    }
    answer.push(i);
}

console.log(answer.join("\n"));