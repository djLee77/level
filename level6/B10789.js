const fs = require('fs');
const input = fs.readFileSync('../input.txt').toString().trim().replace(/\r/g, "").split('\n').map(item=>item.split(' '));

console.log(input[0].length);