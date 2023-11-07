const fs = require("fs");

class main {
  constructor() {}

  Josephus(N, K) {
    let arr = [];
    for (let i = 1; i <= N; i++) {
      arr.push(i);
    }
    let arrJosep = [];
    let index = 1;

    while (arrJosep.length < N) {
      let cp_arr = [...arr];

      for (let i = 0; i < cp_arr.length; i++) {
        if (index % K === 0) {
          arrJosep.push(cp_arr[i]);
          arr[i] = 0;
        }
        index++;
      }

      arr = arr.filter((item) => item !== 0);
    }

    return `<${arrJosep.join(", ")}>`;
  }

  exe() {
    const input = fs.readFileSync("../input.txt").toString().trim().split(" ");
    const N = Number(input[0]);
    const K = Number(input[1]);

    console.log(this.Josephus(N, K));
  }
}

const app = new main();

app.exe();
