const fs = require("fs");

const input = fs.readFileSync("../input.txt").toString().trim().split("\n");
input.shift();

var set = new Set(input);
var array = [...set];

var array = array.sort(function(a, b){
    if(a.length === b.length){
        let i = 0;
        while(true){
            if(a.charAt(i) === b.charAt(i)){
                i++;
            }else{
                break;
            }
        }

        return a.charCodeAt(i) - b.charCodeAt(i);
    }else{
        return (a.length - b.length);
    }
})

console.log(array.join("\n"));