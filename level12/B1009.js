const input = require("fs")
  .readFileSync("../input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((item) => item.split(" "));

input.shift();

for (let i = 0; i < input.length; i++) {
  var a = Number(input[i][0]);
  var b = Number(input[i][1]);
  var num = a;
  for (let j = 0; j <= b; j++) {
    var num = num * a;
    var str_num = num.toString();
    num = Number(str_num.charAt(str_num.length-1));
  }
  str_num = num.toString();
  console.log(str_num.charAt(str_num.length-1));
}
