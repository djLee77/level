const fs = require("fs");

const input = fs
  .readFileSync("../input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((item) => item.replace("\r", ""));
input.shift();

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  append(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  removeFirst() {
    if (!this.head) return null;
    const temp = this.head;
    this.head = this.head.next;
    if (!this.head) this.tail = null;
    this.length--;
    return temp.data;
  }

  get size() {
    return this.length;
  }

  get lastNode() {
    if (!this.tail) return null;
    return this.tail.data;
  }
}

class Queue {
  constructor() {
    this.linkedList = new LinkedList();
  }

  enqueue(data) {
    this.linkedList.append(data);
  }

  dequeue() {
    return this.linkedList.removeFirst();
  }

  peek() {
    if (!this.linkedList.head) return null;
    return this.linkedList.head.data;
  }

  get length() {
    return this.linkedList.size;
  }

  get lastNode() {
    return this.linkedList.lastNode;
  }
}

const queue = new Queue();
let answer = "";

for (let i = 0; i < input.length; i++) {
  if (input[i].startsWith("push")) {
    queue.enqueue(input[i].split(" ")[1]);
  }
  if (input[i] === "pop") {
    if (queue.length === 0) {
      answer += "-1\n";
    } else {
      answer += queue.peek() + "\n";
      queue.dequeue();
    }
  }
  if (input[i] === "size") {
    answer += queue.length + "\n";
  }
  if (input[i] === "empty") {
    if (queue.length === 0) {
      answer += "1\n";
    } else {
      answer += "0\n";
    }
  }
  if (input[i] === "front") {
    if (queue.length === 0) {
      answer += "-1\n";
    } else {
      answer += queue.peek() + "\n";
    }
  }
  if (input[i] === "back") {
    if (queue.length === 0) {
      answer += "-1\n";
    } else {
      answer += queue.lastNode + "\n";
    }
  }
}

console.log(answer);
