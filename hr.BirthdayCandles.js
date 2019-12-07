'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

//Complete the birthdayCakeCandles function below.
//method 1
function birthdayCakeCandles(ar) {
    var largestNum = Math.max(...ar)
    var counter = 0
    for(var i = 0; i < ar.length; i++){
        if( ar[i] == largestNum){
            counter ++
        }
    }
    return counter;

}

//method 2
// is there a way to do it like this?
//https://stackoverflow.com/questions/45149482/count-occurrences-of-each-number-present-in-array-using-javascript

//method 3
//https://stackoverflow.com/questions/5667888/counting-the-occurrences-frequency-of-array-elements/35101824
//counter[num] = counter[num] ? counter[num] + 1 : 1;
//or:
//counter[num] = (counter[num] || 0) +1;


function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const arCount = parseInt(readLine(), 10);

    const ar = readLine().split(' ').map(arTemp => parseInt(arTemp, 10));

    let result = birthdayCakeCandles(ar);

    ws.write(result + "\n");

    ws.end();
}
