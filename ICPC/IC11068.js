const fs = require("fs");

const input = fs.readFileSync("../input.txt").toString().trim().split("\n").map(item => item.replace("\r", ""));
input.shift();

var answer = [];

const obj = {
    "a": "as",
    "i" : "ios",
    "y" : "ios",
    "l" : "les",
    "n" : "anes",
    "ne" : "anes",
    "o" : "os",
    "r" : "res",
    "t" : "tas",
    "u" : "us",
    "v" : "ves",
    "w" : "was"
}

for(let i=0; i<input.length; i++){
    let changed = false;
    for(let [key, value] of Object.entries(obj)){
        if(input[i].endsWith(key)){
            let index = input[i].lastIndexOf(key);
            
            answer.push(input[i].substring(0, index) + value);
            changed = true;
        }
    }

    if(!changed){
        answer.push(input[i] + "us");
    }
}

console.log(answer.join("\n"));