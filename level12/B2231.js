const fs = require("fs");
const input = fs.readFileSync("../input.txt").toString().trim();

var N = Number(input);
var divisionSum = 0;
var strDivSum_tk = [];
var intDivSum_tk = [];
var tkSum = 0;
var answer = 0;

for(let i=N; i>0; i--){
    divisionSum = N - i;
    strDivSum_tk = divisionSum.toString().split("");
    intDivSum_tk = strDivSum_tk.map((item)=>Number(item));
    tkSum = intDivSum_tk.reduce((acc, currentValue) => acc + currentValue);

    if(N == (divisionSum + tkSum)){
        answer = divisionSum;
        break;
    }
}

console.log(answer);