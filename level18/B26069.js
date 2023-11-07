const fs = require("fs");

const input = fs
  .readFileSync("../input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((item) => item.replace(/\r/, ""));

input.shift();

const obj = {ChongChong : "exist"};

for(let i=0; i<input.length; i++){
    str = input[i].split(" ");
    str1 = str[0];
    str2 = str[1];

    if(Object.keys(obj).includes(str1)){
        obj[str2] = "exists"; 
    }

    if(Object.keys(obj).includes(str2)){
        obj[str1] = "exists"; 
    }
}

console.log(Object.keys(obj).length);