'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

//signals input
process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});
//signals end of data input
process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Example input
// "5 6 7\n3 6 10"
// 17 28 30\n99 16 8

// Complete the compareTriplets function below.
function compareTriplets(a, b) {
    //point tracker
    var totalPointsA = 0;
    var totalPointsB = 0;

    for (var i=0; i < a.length; i++){
        if (a[i] > b[i]){
            //a gets point
            totalPointsA += 1
        } 
        
        if (b[i] > a[i]){
            //b gets point
            totalPointsB += 1
        }
    }
    return [totalPointsA, totalPointsB];
}
 

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const a = readLine().replace(/\s+$/g, '').split(' ').map(aTemp => parseInt(aTemp, 10));

    const b = readLine().replace(/\s+$/g, '').split(' ').map(bTemp => parseInt(bTemp, 10));

    const result = compareTriplets(a, b);

    ws.write(result.join(' ') + '\n');

    ws.end();
}

/*
How to run this code locally from terminal.
$ OUTPUT_PATH=/dev/fd/0 node hr.Compare.Triplets.js
"5 6 7
3 6 10"
CNTRL D (to "end")

*/
