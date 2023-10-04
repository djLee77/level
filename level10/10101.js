const fs = require("fs");
var input = fs.readFileSync("../input.txt").toString().trim().split("\n");

input = input.map((item) => Number(item));

if (input[0] + input[1] + input[2] == 180) {
  if (input[0] === input[1] &&
    input[1] === input[2] &&
    input[0] === input[2]) {
    console.log("Equilateral");
  } else if (
    input[0] === input[1] ||
    input[1] === input[2] ||
    input[0] === input[2]
  ) {
    console.log("Isosceles");
  }else{
    console.log("Scalene");
  }
} else {
  console.log("Error");
}