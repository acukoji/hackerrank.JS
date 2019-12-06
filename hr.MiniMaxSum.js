'use strict';

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

// Complete the miniMaxSum function below.
function miniMaxSum(arr) {
    //console.log(arr)
    var minVal = Math.min(...arr)
    var maxVal = Math.max(...arr)
    //create "reducer": see notes below
    const add = (a,b) => 
    (a+b);
    var totSum = arr.reduce(add)

    //another more condensed way to write: 
    //are there cases in which the longer way is clearer?
    //var totSum = arr.reduce((a, b) => (a + b));
    
    var minSum = totSum - maxVal
    var maxSum = totSum - minVal
    console.log(minSum , maxSum)
}

function main() {
    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}

/* Notes:
For more details on prototype.reduce, see:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

Simplified explanation of reducer:
https://medium.com/@chrisburgin95/rewriting-javascript-sum-an-array-dbf838996ed0

*/