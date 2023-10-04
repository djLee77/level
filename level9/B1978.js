const fs = require("fs");

const input = fs.readFileSync("../input.txt").toString().trim().split("\n").map(item => item.split(" "));
const max = Math.max(...input[1]);
var nums = input[1];
var filter = [];
var answer = 0;

for(let i=1; i<= max; i++){
    filter[i] = i;
}
for(let i=2; i<= max; i++){
    for(let j=i+1; j<= max; j++){
        if(filter[j] % i == 0){
            filter.splice(j, 1);
        }
    }
}

filter.shift();
filter.shift();

for(let i=0; i<nums.length; i++){
    for(let j=0; j<filter.length; j++){
        if(nums[i] == filter[j]) answer++;
    }
}

console.log(answer);