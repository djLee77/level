const fs = require("fs");

var input = fs.readFileSync("../input.txt").toString().trim().split(" ");

input = input.map((item)=>Number(item));

var max = Math.max(...input);

var sum = input.reduce((acc, currentValue)=> acc + currentValue, 0);

if((sum - max) > max){
    console.log(sum);
}else{
    console.log((sum - max) * 2 - 1);
}