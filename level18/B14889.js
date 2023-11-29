const fs = require("fs");

const input = fs.readFileSync("../input.txt").toString().trim().split("\n").map((item) => item.split(" ").map((item) => Number(item)));

const startAndLink = input.slice(1);

const n = input[0][0];
const arr = Array.from({ length: n }, (_, i) => i);

const visited = Array.from({ length: n }, () => false);

let min = Infinity;

const getSum = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length - 1; i++) sum += startAndLink[arr[i]][arr[i + 1]] + startAndLink[arr[i + 1]][arr[i]];
    return sum;
    };

const dfs = (cnt, idx) => {
    if (cnt === n / 2) {
        const start = [];
        const link = [];
        for (let i = 0; i < n; i++) {
            if (visited[i]) start.push(i);
            else link.push(i);
        }
        min = Math.min(min, Math.abs(getSum(start) - getSum(link)));
        return;
    }

    for (let i = idx; i < n; i++) {
        if (!visited[i]) {
            visited[i] = true;
            dfs(cnt + 1, i);
            visited[i] = false;
        }
    }
}

dfs(0, 0);

console.log(min);
