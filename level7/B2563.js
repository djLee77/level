const fs = require("fs");

const square_point = fs
  .readFileSync("../input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((item) => item.split(" "));

const T = square_point[0][0];

var paper = Array.from(Array(101), () => Array(101).fill(0))

var answer = 0;


for (let i = 1; i <= T; i++) {
  var x = +square_point[i][0];
  var y = +square_point[i][1];

  for (let j = x; j < x + 10; j++) {
    for (let k = y; k < y + 10; k++) {
      paper[j][k] = 1;
    }
  }
}

for(let i=0; i<paper.length; i++){
    for(let j=0; j<paper.length; j++){
        if(paper[i][j] == 1){
            answer++;
        }
    }
}

console.log(answer);