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

/*
 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function diagonalDifference(arr) {
    //console.log(arr); 
    //debug shows parameter passed is a nested array:
    //[ [ 11, 2, 4 ], [ 4, 5, 6 ], [ 10, 8, -12 ] ]

    var pDiagSum = 0;
    var sDiagSum = 0;
    var diagSum = 0;

    var i=0; //outer array index
    var j=0; //inner array index--primary diagonal
    var k = (arr[i].length-1); // inner array index--secondary diagonal

    //Loop to get primary and secondary diagonal sums
    for (i=0; i < arr.length; i++){
        //console.log(arr[i][j])
        pDiagSum += arr[i][j]
        //console.log('primarySum ' + pDiagSum)
        sDiagSum += arr[i][k]
        //console.log('secondarySum ' + sDiagSum)
        j++;
        k--;
        }
    diagSum = Math.abs(pDiagSum - sDiagSum);
    //console.log(diagSum);
    return diagSum;
}
    
function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    let arr = Array(n);

    for (let i = 0; i < n; i++) {
        arr[i] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }

    const result = diagonalDifference(arr);

    ws.write(result + '\n');

    ws.end();
}
