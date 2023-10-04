const fs = require("fs");

const input = fs.readFileSync("../input.txt").toString().trim().split("\n").map(item => item.split(" "));
input.shift();

answer = input.sort(function(a,b){
    return Number(a[0]) - Number(b[0]);
});

console.log(answer.map(item => item.join(" ")).join("\n"));