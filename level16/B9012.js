const fs = require("fs");

class Main {
  constructor() {}

  checkVPS(arr) {
    let stack = [];
    for (let i = 0; i < arr.length; i++) {
      if (stack.length == 0) {
        if (arr[i] == ")") return "NO";
        if (arr[i] == "(") stack.push(1);
      } else if (stack.length != 0) {
        if (arr[i] == ")") stack.pop();
        if (arr[i] == "(") stack.push(1);
      }
    }

    return stack.length > 0 ? "NO" : "YES";
  }

  exe() {
    try {
      const input = fs
        .readFileSync("../input.txt")
        .toString()
        .trim()
        .split("\n")
        .map((item) => item.split(""));
      input.shift();
      let answer = [];

      for (let i = 0; i < input.length; i++) {
        answer.push(this.checkVPS(input[i]));
      }
      console.log(answer.join("\n"));
    } catch (err) {
      console.error("Error reading file:", err);
    }
  }
}

const app = new Main();

app.exe();
