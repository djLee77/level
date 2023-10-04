const fs = require("fs");

var input = fs.readFileSync("../input.txt").toString().trim().split("\n").map(item => item.split(" "));

input.shift();

input = input.map(item => item.map(item => Number(item)));

var min_x = input[0][0];
var max_x = input[0][0];
var min_y = input[0][1];
var max_y = input[0][1];

for(let i=0; i<input.length; i++){
    if(input[i][0] > max_x){
        max_x = input[i][0];
    }
    if(input[i][0] < min_x){
        min_x = input[i][0];
    }
    if(input[i][1] > max_y){
        max_y = input[i][1];
    }
    if(input[i][1] < min_y){
        min_y = input[i][1];
    }

}

console.log((max_x - min_x) * (max_y - min_y));