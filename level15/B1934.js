const input = require("fs")
  .readFileSync("../input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((item) => item.split(" "));
const arr = input.map((item) => item.map((item) => Number(item)));
arr.shift();
var answer = [];

for (let i = 0; i < arr.length; i++) {
  let A = arr[i][0];
  let B = arr[i][1];
  if (A == 1 || B == 1) {
    answer.push(A * B);
    continue;
  }

  let measuresA = new Map([]);
  let measuresB = new Map([]);
  let measuresAB = new Map([]);

  let num = 2;
  while (A != 1) {
    if (A % num == 0) {
      A = A / num;
      if (measuresA.has(num)) {
        measuresA.set(num, measuresA.get(num) + 1);
      } else {
        measuresA.set(num, 1);
      }
    } else {
      num++;
    }
  }
  num = 2;
  while (B != 1) {
    if (B % num == 0) {
      B = B / num;
      if (measuresB.has(num)) {
        measuresB.set(num, measuresB.get(num) + 1);
      } else {
        measuresB.set(num, 1);
      }
    } else {
      num++;
    }
  }

  measuresA.forEach((value, key, map) => {
    measuresAB.set(key, value);
  });

  measuresB.forEach((value, key, map) => {
    if (measuresAB.has(key) && measuresAB.get(key) < value) {
      measuresAB.set(key, value);
    }
    
    if(!measuresAB.has(key)){
      measuresAB.set(key, value);
    }
  });

  let sum = 1;
  measuresAB.forEach((value, key, map) => {
    sum = sum * Math.pow(key, value);
  });

  answer.push(sum);
}
console.log(answer.join("\n"));