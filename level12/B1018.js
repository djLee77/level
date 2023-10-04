const fs = require("fs");
const input = fs.readFileSync("../input.txt").toString().trim().split("\n");

var size = input[0].split(" ");
var x_size = Number(size[0]);
var y_size = Number(size[1]);
var board = [];

board.push(...input);
board.shift();
board = board.map((item) => item.split(""));
board = board = board.flat();
board = board.filter((item) => item !== "\r");

var case1 = 0;
var case2 = 0;

var checkW = "W";
var checkB = "B";

for (let i = 0; i < x_size * y_size; i++) {
  if (i % y_size == 0 && i !== 0) {
    var temp = checkW;
    checkW = checkB;
    checkB = temp;
  }
  if (i % 2 == 0 && board[i] == checkB) case1++;
  if (i % 2 == 1 && board[i] == checkW) case1++;
}

checkW = "W";
checkB = "B";

for (let i = 0; i < x_size * y_size; i++) {
  if (i % y_size == 0 && i !== 0) {
    var temp = checkW;
    checkW = checkB;
    checkB = temp;
  }
  if (i % 2 == 0 && board[i] == checkW) case2++;
  if (i % 2 == 1 && board[i] == checkB) case2++;
}

console.log(Math.min(case1, case2));
