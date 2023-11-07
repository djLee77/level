var fs = require('fs');
var input = fs.readFileSync('../input.txt').toString().trim().split('\n');

var N = Number(input.shift());
var ex = input.shift().split(' ').map((v,i) => [i+1, Number(v)]);


var copyN = N;
var idx = 0;
var str = ''

for(var i=0; i<copyN; i++){
    str += ex[idx][0] + ' ';

    var move = ex[idx][1];
    
    if(move > 0) move--;

    ex.splice(idx,1);

    idx += move;
    
    N--;
    
    if(!N) continue;

    if(idx > 0){
        idx = idx % N;
    }else{
        idx = (idx + N) % N;
        if(idx < 0) idx = N + idx;
    }
}

console.log(str.trim());