'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

//signals input
process.stdin.on('data', function(inputStdin) {
    //inputStdin = "5 6 7\n3 6 10"
    inputStdin = "17 28 30\n99 16 8"
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
// degugging
    //console.log("a= "+a);
    // console.log(b);


    // point tracker
    var totalPointsA = 0;
    var totalPointsB = 0;
    var i = 0;
    for (i; i < a.length; i++){
        if (a[i] > b[i]){
            //a gets point
            totalPointsA += 1
            //console.log('point for A')
        } else if (b[i] > a[i]){
            //b gets point
            totalPointsB += 1
            //console.log('point for B')
        } else {
            //no points
            totalPointsA = totalPointsA
            totalPointsB = totalPointsB
            //console.log('No points: a = b')
        }
    }  
        
    // comparing a with b
    // if(a > b){
    //     //a gets point
    //     totalPointsA ++
    // } else if(b > a){
    //     //b gets point
    //     totalPointsB ++
    // } else {
    //     //no points
    //     totalPointA = totalPointA + 0;
    //     totalPointsB = totalPointsB + 0;
    //}
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
"5 6 7\n3 6 10"
CNTRL D (to "end")
Note: inputStdin must be passed with example data:
e.g. 
process.stdin.on('data', function(inputStdin) {
    inputStdin = "5 6 7\n3 6 10"
        or,
    inputStdin = "17 28 30\n99 16 8"
*/
