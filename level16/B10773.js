const fs = require("fs");

class Main {
  constructor() {
    this.input = fs
      .readFileSync("../input.txt")
      .toString()
      .trim()
      .split("\n")
      .map((item) => Number(item));
    this.K = this.input.shift();
    this.stack = [];
  }

  exe() {
    for (let i = 0; i < this.K; i++) {
      if (this.input[i] == 0) {
        if (this.stack.length != 0) {
          this.stack.pop();
        }
      } else {
        this.stack.push(this.input[i]);
      }
    }

    console.log(
      this.stack.reduce((acc, currentValue) => acc + currentValue, 0)
    );
  }
}

const app = new Main();

app.exe();
