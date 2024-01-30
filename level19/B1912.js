const fs = require("fs");

let input = fs.readFileSync("../input.txt").toString().trim().split("\n");

input = input[1].split(" ").map((v) => Number(v));

