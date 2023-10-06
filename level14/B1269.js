const fs = require("fs");

const input = fs.readFileSync("../input.txt").toString().trim().split("\n").map(item=> item.split(" "));
input.shift();

const A = new Set(input[0].map(item=> Number(item)));
const B = new Set(input[1].map(item=> Number(item)));

var cnt = 0;

for(let value of A){ // set은 인덱스가 없기 때문에 for ... of 를 사용해야 한다.
    if(B.has(value)) cnt ++;
}

console.log(A.size + B.size - (cnt*2));