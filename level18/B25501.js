const fs = require("fs");

const input = fs
  .readFileSync("../input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((item) => item.replace(/\r/, ""));

input.shift();

function recursion(s, l, r, cnt) {
  cnt++;
  if (l >= r) return {isPalindrome : 1, cnt};
  else if (s.charAt(l) !== s.charAt(r)) return {isPalindrome : 0, cnt};
  else return recursion(s, l + 1, r - 1, cnt);
}

function isPalindrome(s) {
  return recursion(s, 0, s.length - 1, 0);
}

let answer = "";

for (let i = 0; i < input.length; i++) {
  const result = isPalindrome(input[i]);
  answer += `${result.isPalindrome} ${result.cnt}\n`;
}

console.log(answer);
