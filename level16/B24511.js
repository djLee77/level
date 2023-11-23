const fs = require("fs");

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
    this.answer = "";
  }
}

class Deque {
  constructor(size) {
    this.front = null;
    this.rear = null;
    this.count = 0;
    this.size = size + 1;
  }

  isFull() {
    return this.count === this.size;
  }

  isEmpty() {
    return this.count === 0;
  }

  pushRear(data) {
    if (this.isFull()) {
      this.answer += data + " ";
      return false;
    }

    let newNode = new Node(data);

    if (this.isEmpty()) {
      this.front = newNode;
      this.rear = newNode;
    } else {
      this.rear.next = newNode;
      newNode.prev = this.rear;
      this.rear = newNode;
    }

    this.count++;
    return true;
  }

  pushFront(data) {
    if (this.isFull()) {
      return false;
    }

    let newNode = new Node(data);

    if (this.isEmpty()) {
      this.front = newNode;
      this.rear = newNode;
    } else {
      newNode.next = this.front;
      this.front.prev = newNode;
      this.front = newNode;
    }

    this.count++;
    return true;
  }

  popFront() {
    if (this.isEmpty()) {
      return -1;
    }

    let returnData = this.front.data;
    this.front = this.front.next;
    this.count--;

    return returnData;
  }

  popRear() {
    if (this.isEmpty()) {
      return -1;
    }

    let returnData = this.rear.data;
    this.rear = this.rear.prev;
    this.count--;

    return returnData;
  }
}

function main() {
  const input = fs.readFileSync("../input.txt").toString().trim().split("\n");

  const n = parseInt(input[0]);
  const dq = new Deque(n);
  const queueStack = input[1].split(" ").map(Number);

  const inputs = input[2].split(" ").map(Number);
  for (let i = 0; i < n; i++) {
    if (!queueStack[i]) {
      dq.pushFront(inputs[i]);
    }
  }

  const m = parseInt(input[3]);
  const mInputs = input[4].split(" ").map(Number);
  for (let i = 0; i < m; i++) {
    dq.pushRear(mInputs[i]);
    this.answer += dq.popFront() + " ";
  }

  console.log(this.answer.replace("undefined", ""));
}

main();
