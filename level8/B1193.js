const fs = require("fs");
const input = fs.readFileSync("../input.txt").toString().trim();

var N = Number(input);
var answer = 0;

var find_group_sum = 1;
var find_group_index = 1;

while(true){
    if(find_group_sum > N){
        find_group_index--;
        find_group_sum -= find_group_index;
        break;
    }

    find_group_sum = find_group_sum + find_group_index ;
    find_group_index++;
}

const fountains = (i, numer, deno, asc) => {
  if (i >= N) {
    answer = numer + "/" + deno;
    return;
  } else {
    if (asc) {
      if (deno == 1) {
        fountains(i + 1, 1, numer + 1, !asc);
      } else {
        fountains(i + 1, numer + 1, deno - 1, asc);
      }
    } else {
      if (numer == 1) {
        fountains(i + 1, deno + 1, 1, !asc);
      } else {
        fountains(i + 1, numer - 1, deno + 1, asc);
      }
    }
  }
};


if(find_group_index % 2 == 0){
    fountains(find_group_sum, 1, find_group_index, true); 
}else{
    fountains(find_group_sum, find_group_index, 1, false);
}

if (N > 1) {
  console.log(answer);
} else {
  console.log("1/1");
}