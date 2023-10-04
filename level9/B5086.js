const fs = require("fs");

const input = fs.readFileSync("../input.txt").toString().trim().split("\n").map(item => item.split(" "));

let i = 0;

let answer = [];

while(true){
    if(input[i][0] == 0 && input[i][1] == 0) break;

    if(parseInt(input[i][1]) % parseInt(input[i][0]) == 0){
        answer[i] = "factor";
    }else if(parseInt(input[i][0]) % parseInt(input[i][1]) == 0){
        answer[i] = "multiple";
    }else{
        answer[i] = "neither";
    }
    i++;
}

for(let i in answer){
    console.log(answer[i]);
}