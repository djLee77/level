const fs = require("fs");

const input = fs.readFileSync("../input.txt").toString().trim().split("\n");

var M = input[0];
var N = input[1];
var filter = [];
var sum = 0;
var min = 0;

for(let i=0; i<=N; i++){
    filter[i] = i;
}


for(let i=2; i<=filter.length; i++){
    for(let j=i+1; j<=filter.length; j++){
        if(filter[j] % i == 0) filter.splice(j, 1);
    }
}

filter.shift();
filter.shift();

for(let i=0; i<filter.length; i++){
    if(filter[i]>=M && filter[i]<=N){
        if(min >= filter[i] || min == 0){
            min = filter[i];
        };
        sum += filter[i];
    }
}


if(sum == 0){
    console.log(-1);
}else{
    console.log(sum);
    console.log(min);
}