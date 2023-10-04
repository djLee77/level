const fs = require("fs");

const input = fs.readFileSync("../input.txt").toString().trim().split("\n");

for (let i = 0; i < input.length; i++) {
  if (Number(input[i]) == -1){
    break;
  }

  var measure = [];
  let n = Number(input[i]);

  for (let j = 0; j <= n / 2; j++) {
    if (n % j == 0) {
      measure.push(j);
    }
  }

  var sum = measure.reduce((acc, currentValue) => acc + currentValue);

  if (sum == n) {
    process.stdout.write(n + " = " + measure[0]);
    for (let k = 1; k < measure.length; k++) {
      process.stdout.write(" + " + measure[k]);
    }
    console.log("");
  } else {
    console.log(n + " is NOT perfect.");
  }
}
