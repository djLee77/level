function cantorSet(n) {
  let answer = "";
  let len = Math.pow(3, n);

  for (let i = 0; i < len; i++) {
    answer += "-";
  }

  function func(start, size) {
    if (size === 1) {
      return;
    }
    let newSize = Math.floor(size / 3);

    answer =
      answer.substring(0, start + newSize) +
      " ".repeat(newSize) +
      answer.substring(start + 2 * newSize);

    func(start, newSize);
    func(start + 2 * newSize, newSize);
  }

  func(0, len);
  return answer;
}

const fs = require("fs");

const input = fs
  .readFileSync("../input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((item) => Number(item));

let answer = "";

for (let i = 0; i < input.length; i++) {
  answer += cantorSet(i) + '\n';
}

console.log(answer);