const fs = require("fs");

const input = fs.readFileSync("../input.txt").toString().trim().split(" ");

var a = Number(input[0]);
var b = Number(input[1]);
var c = Number(input[2]);
var d = Number(input[3]);
var e = Number(input[4]);
var f = Number(input[5]);

for(let x = -999; x<= 999; x++){
    for(let y = -999; y<=999; y++){
        if(((a*x + b*y) == c )&&((d*x + e*y) == f)){
            console.log(x + " " + y);
            break;
        }
    }       
}