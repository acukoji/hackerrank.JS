'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the compareTriplets function below.
function compareTriplets(a, b) {

    // point tracker
    var totalPointsA = 0;
    var totalPointsB = 0;

    // constraints: a/b must be >=1 and <=100

    // comparing a with b
    if(a > b){
        //a gets point
        totalPointsA ++
    } else if(b > a){
        //b gets point
        totalPointsB ++
    } else {
        //no points
        totalPointA = totalPointA + 0;
        totalPointsB = totalPointsB + 0;
    }
    return totalPointsA, totalPointsB;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const a = readLine().replace(/\s+$/g, '').split(' ').map(aTemp => parseInt(aTemp, 10));

    const b = readLine().replace(/\s+$/g, '').split(' ').map(bTemp => parseInt(bTemp, 10));

    const result = compareTriplets(a, b);

    ws.write(result.join(' ') + '\n');

    ws.end();
}
