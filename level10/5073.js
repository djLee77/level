const fs = require("fs");
var input2 = fs.readFileSync("../input.txt").toString().trim().split("\n").map(item => item.split(" "));

input2.pop();
input2 = input2.map((item) => item.map(item => Number(item)));

var input = [0, 0, 0];

for(let i=0; i<input2.length; i++){
    for(let j=0; j<input2[i].length; j++){
        input[j] = input2[i][j];
    }
    if (input[0] + input[1] + input[2] - Math.max(...input) > Math.max(...input)) {
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
        console.log("Invalid");
      }
}


