const fs = require("fs");
const input = fs.readFileSync("../input.txt").toString().trim().split(" ");

const nums = input[0].split("");
const arithmetic = input[1];
let sum = 0;


for (let i = 0; i < nums.length; i++) {
  let digits = nums.length - 1 - i;
  let w = Math.pow(arithmetic, digits); 
  if (nums[i].charCodeAt(0) >= 65 && nums[i].charCodeAt(0) <= 90) {
    sum += (nums[i].charCodeAt(0) - 55) * w;
  }else{
    sum += nums[i] * w;
  }
}

console.log(sum);

