const fs = require("fs");

const input = fs.readFileSync("../input.txt").toString().trim().split("\n");

const n = Number(input.shift());
const arr = input.split(" ").map((v) => Number(v));

let dp_i = new Array(n);
let dp_d = new Array(n);

for(let i = 1; i < n ; i++){
    let cnt = 1;


}
