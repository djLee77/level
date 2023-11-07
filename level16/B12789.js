const fs = require("fs");

class main {
  constructor() {}

  checkOrder(input) {
    let arr = input.map((item) => Number(item));
    let stackSnack = [0];
    let stackWait = [];

    while (stackSnack.length <= arr.length) {
      const ARR_TOP = 0;
      const STACK_SNACK_TOP = stackSnack.length - 1;
      const STACK_WAIT_TOP = stackWait.length - 1;

      if (stackSnack[STACK_SNACK_TOP] + 1 == arr[ARR_TOP]) {
        stackSnack.push(arr.shift());
      } else if (
        STACK_WAIT_TOP != -1 &&
        stackSnack[STACK_SNACK_TOP] + 1 == stackWait[STACK_WAIT_TOP]
      ) {
        stackSnack.push(stackWait.pop());
      } else {
        if (stackWait[STACK_WAIT_TOP] > arr[ARR_TOP] || STACK_WAIT_TOP == -1) {
          stackWait.push(arr.shift());
        } else {
          return "Sad";
        }
      }
    }

    return "Nice";
  }

  exe() {
    const input = fs
      .readFileSync("../input.txt")
      .toString()
      .trim()
      .split("\n")
      .map((item) => item.split(" "));
    input.shift();

    const answer = this.checkOrder(input[0]);

    console.log(answer);
  }
}

const app = new main();

app.exe();
