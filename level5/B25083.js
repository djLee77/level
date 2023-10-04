const solution = (input) => {
    let num = Number(input[1]);
	return input[0][num - 1];
}

const readline = require("readline");
const rl = readline.createInterface({

	input: process.stdin,
    output: process.stdout

});

 

let list = [];

rl.on("line", function (line) {
    list.push(line);
    if(list.length === 2) {
        rl.close();
    }
    

}).on("close", function () {
    console.log(solution(list));
    process.exit();

});