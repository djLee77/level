const fs = require('fs');

const input = fs.readFileSync('./input.txt').toString().split('\n').map((item) => item.replace('\r', ''));

input.shift();

let obj = {};
let result = '';

for(let i in input){
    if(obj.hasOwnProperty(input[i][0])){
        obj[input[i][0]]++;
    }else {
        obj[input[i][0]] = 1;
    }

    if(obj[input[i][0]] == 5){
        result += input[i][0];
    }
}

result = result.split('').sort().join('');

if(result == ''){
    result = 'PREDAJA';
}

console.log(result);