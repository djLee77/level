const fs = require("fs");
const input = fs.readFileSync("../input.txt").toString().trim();

var index = 1;
var max = 0;

const count_layer = (min, layer) => {
  max = min + layer * 6 - 1;
  layer++;

  if (input > max) {
    count_layer(max + 1, layer);
  } else {
    console.log(layer);
    return;
  }
};

if (Number(input) == 1) {
  console.log(1);
} else {
  count_layer(2, index);
}