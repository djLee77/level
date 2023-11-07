class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null; // 이전 노드를 가리키는 참조를 추가
  }
}

class Deque {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  addFront(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.length++;
  }

  addRear(data) {
    const newNode = new Node(data);
    if (!this.tail) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  removeFront() {
    if (!this.head) return null;
    const temp = this.head;
    this.head = this.head.next;
    if (this.head) {
      this.head.prev = null;
    } else {
      this.tail = null;
    }

    this.length--;
    return temp.data;
  }

  removeRear() {
    if (!this.tail) return null;
    const temp = this.tail;
    this.tail = this.tail.prev;
    if (this.tail) {
      this.tail.next = null;
    } else {
      this.head = null;
    }
    this.length--;
    return temp.data;
  }

  getLength() {
    return this.length;
  }

  peekFront() {
    if (!this.head) return null;
    return this.head.data;
  }

  peekRear() {
    if (!this.tail) return null;
    return this.tail.data;
  }
}

const fs = require("fs");

const input = fs
  .readFileSync("../input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((item) => item.replace(/\r/, ""));
input.shift();

const deq = new Deque();
let answer = "";

for (let i = 0; i < input.length; i++) {
  let cmd = input[i];

  if (cmd.startsWith("1")) {
    deq.addFront(cmd.split(" ")[1]);
  } else if (cmd.startsWith("2")) {
    deq.addRear(cmd.split(" ")[1]);
  } else if (cmd == "3") {
    if (deq.getLength() > 0) {
      answer += deq.removeFront();
    } else {
      answer += "-1";
    }
    answer += "\n";
  } else if (cmd == "4") {
    if (deq.getLength() > 0) {
      answer += deq.removeRear();
    } else {
      answer += "-1";
    }
    answer += "\n";
  } else if (cmd == "5") {
    answer += deq.getLength() + "\n";
  } else if (cmd == "6") {
    if (deq.getLength() > 0) {
      answer += "0";
    } else {
      answer += "1";
    }
    answer += "\n";
  } else if (cmd == "7") {
    if (deq.getLength() > 0) {
      answer += deq.peekFront();
    } else {
      answer += "-1";
    }
    answer += "\n";
  } else if (cmd == "8") {
    if (deq.getLength() > 0) {
      answer += deq.peekRear();
    } else {
      answer += "-1";
    }
    answer += "\n";
  }
}

console.log(answer);
