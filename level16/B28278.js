const fs = require('fs');

class B28278 {
    constructor() {
        this.stack = [];
        this.answer = [];
        this.input = fs.readFileSync("../input.txt").toString().trim().split("\n");
        this.input.shift();
    }

    commander() {
        for (let i = 0; i < this.input.length; i++) {
            let pc = this.input[i];

            if (pc[0] === '1') {
                this.stack.push(Number(pc.split(" ")[1]));
            } else if (pc[0] === '2') {
                if (this.stack.length !== 0) {
                    this.answer.push(this.stack.pop());
                } else {
                    this.answer.push(-1);
                }
            } else if (pc[0] === '3') {
                this.answer.push(this.stack.length);
            } else if (pc[0] === '4') {
                if (this.stack.length !== 0) {
                    this.answer.push(0);
                } else {
                    this.answer.push(1);
                }
            } else {
                if (this.stack.length !== 0) {
                    this.answer.push(this.stack[this.stack.length - 1]);
                } else {
                    this.answer.push(-1);
                }
            }
        }
    }

    main() {
        this.commander();
        console.log(this.answer.join("\n"));
    }
}

const app = new B28278();
app.main();
