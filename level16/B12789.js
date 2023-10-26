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

/*
stackSnack - 간식 받는 곳
stackWait - 대기하는 곳

stackSnack - 1일 경우 push() 아닐경우 stack2로 넘김
       - 1이 push 되었다면 + 1하여 2일 경우로 반복
       - 입력값 배열과 Stack2 두 곳 모두에서 입력 받아야함

stackWait - push하려는 값이 Top에 위치한 값보다 크면 
            바로 return "Sad"
*/
