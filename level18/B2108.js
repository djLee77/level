const fs = require("fs");

let arr = fs
  .readFileSync("../input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((item) => Number(item));

arr.shift();
arr.sort((a, b) => a - b);
let map = new Map();

for (let i = 0; i < arr.length; i++) {
  if (!map.has(arr[i])) {
    map.set(arr[i], 1);
    continue;
  }

  map.set(arr[i], map.get(arr[i]) + 1);
}

let sum = 0;
let max_freq_key = 0;
let max_freq_value = 0;
let max_freq_duplicated_cnt = 0;

map.forEach((value, key, map) => {
  sum += value * key;

  if (value > max_freq_value) {
    max_freq_value = value;
    max_freq_key = key;
    max_freq_duplicated_cnt = 1;
  } else if (value === max_freq_value) {
    if (max_freq_duplicated_cnt < 2) {
      max_freq_key = key;
      max_freq_duplicated_cnt++;
    }
  }
});

let avg = Math.round(sum / arr.length);

let mid_index = (arr.length + 1) / 2;
let mid = arr[mid_index - 1];

let range = arr[arr.length - 1] - arr[0];

console.log(avg + "\n" + mid + "\n" + max_freq_key + "\n" + range);
