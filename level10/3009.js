const fs = require("fs");

var input = fs.readFileSync("../input.txt").toString().trim().split("\n").map(item => item.split(" "));

input = input.map(item => item.map(item2 => parseInt(item2)));

var cntIndex0 = [0, 0, 0];
var cntIndex1 = [0, 0, 0];

for(let i = 0; i<3; i++){
    for(let j = 0; j<3; j++){
        if(input[i][0] == input[j][0]){
            cntIndex0[i] += 1;
        }
        if(input[i][1] == input[j][1]){
            cntIndex1[i] += 1;
        }
    }
}

var x = 0;
var y = 0;

for(let i = 0; i< 3; i++){
    if(cntIndex0[i] == 1){
        x = input[i][0];
    }
    if(cntIndex1[i] == 1){
        y = input[i][1];
    }
}

console.log(x + " " + y);