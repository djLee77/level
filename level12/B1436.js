const fs = require("fs");

const input =  fs.readFileSync("../input.txt").toString().trim();

const N = Number(input);

var cnt = 0;
var num = 666;
while(cnt < N){
    str = num.toString();
    if(str.includes("666")){
        cnt++;
    }
    num++;
}

console.log(num-1);