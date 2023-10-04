const fs = require("fs");

const input = fs.readFileSync("../input.txt").toString();

var N = Number(input);
var measure = [];

var index = 2;

while(N !== 1){
    if(N % index == 0){
        measure.push(index);
        N = N / index;
    }else{
        index++;
    }
}

measure.map(item => console.log(item));