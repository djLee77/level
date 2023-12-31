const fs = require("fs");

class main {
  constructor() {
    this.opend = "";
  }

  checkBalance(arr) {
    let balance = "";
    let stack = [];
    let str = "";
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === '(' || arr[i] === '[') {
        stack.push(arr[i]);
      }
      if (arr[i] === ")") {
        str = stack.pop();
        if (str !== "(") return "no";
      } else if (arr[i] === "]") {
        str = stack.pop();
        if (str !== "[") return "no";
      }
    }

    if (stack.length === 0) {
      balance = "yes";
    } else {
      balance = "no";
    }

    return balance;
  }

  solve() {
    const input = fs
      .readFileSync("../input.txt")
      .toString()
      .trim()
      .split("\n")
      .map((item) => item.split(''));

    input.pop();
    
    let answer = [];

    for (let i = 0; i < input.length; i++) {
      answer.push(this.checkBalance(input[i]));
    }

    console.log(answer.join('\n'));
  }
}

const app = new main();
app.solve();