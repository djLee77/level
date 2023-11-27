const fs = require("fs");

const input = fs
  .readFileSync("../input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((item) => item.split(" ").map((item) => Number(item)));

const sudoku = input.slice(0, 9);

const zero = [];

for (let i = 0; i < 9; i++) {
  for (let j = 0; j < 9; j++) if (sudoku[i][j] === 0) zero.push([i, j]);
}

const checkRow = (row, num) => {
  for (let i = 0; i < 9; i++) if (sudoku[row][i] === num) return false;
  return true;
};

const checkCol = (col, num) => {
  for (let i = 0; i < 9; i++) if (sudoku[i][col] === num) return false;
  return true;
};

const checkSquare = (row, col, num) => {
  const r = Math.floor(row / 3) * 3;
  const c = Math.floor(col / 3) * 3;

  for (let i = r; i < r + 3; i++)
    for (let j = c; j < c + 3; j++) if (sudoku[i][j] === num) return false;
  return true;
};

const dfs = (cnt) => {
  if (cnt === zero.length) {
    sudoku.forEach((item) => console.log(item.join(" ")));
    process.exit(0);
  }

  const [row, col] = zero[cnt];

  for (let i = 1; i <= 9; i++) {
    if (checkRow(row, i) && checkCol(col, i) && checkSquare(row, col, i)) {
      sudoku[row][col] = i;
      dfs(cnt + 1);
      sudoku[row][col] = 0;
    }
  }
};

dfs(0);
