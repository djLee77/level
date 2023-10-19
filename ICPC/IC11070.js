const fs = require("fs");

const input = fs.readFileSync("../input.txt").toString().trim().split("\n");

const T = Number(input[0]);
input.shift();

let arr = new Array(T);
let N = [];

var answer = [];

const Expectation = (N_i, arr) => {
    arr = arr.map(item => item.split(" ").map(item => Number(item)));
    let n = N[N_i];
    let team_plus = new Array(n).fill(0);
    let team_minus = new Array(n).fill(0);
    let max = 0;
    let min = 0;

    for(let i=0; i<arr.length; i++){
        team_plus[arr[i][0] - 1] += arr[i][2];
        team_minus[arr[i][1] - 1] += arr[i][2];
        team_plus[arr[i][1] - 1] += arr[i][3];
        team_minus[arr[i][0] - 1] += arr[i][3];
    }

    for(let i=0; i< n; i++){ // 득점^2 / 득점^2 x 실점^2
        if(team_minus[i] == 0 && team_plus[i] == 0){
            min = 0;
            continue;
        }
        let e = Math.pow(team_plus[i], 2) / (Math.pow(team_plus[i], 2) + Math.pow(team_minus[i], 2));

        if(i == 0){
            min = e;        
        }

        if(e > max){
            max = e;
        }

        if(e < min){
            min = e;
        }
    }

    answer.push(Math.floor(max * 1000));
    answer.push(Math.floor(min * 1000));
    return;
}

for (let i = 0; i < T; i++) {
  N.push(Number(input[0].split(" ")[0]));
  let M = Number(input[0].split(" ")[1]);
  input.shift();

  arr[i] = input.slice(0, M);
  for (let j = 0; j < M; j++) input.shift();
}

for(let i=0; i< T; i++){
    Expectation(i, arr[i]);
}

console.log(answer.join("\n"));