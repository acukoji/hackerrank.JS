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

// Complete the plusMinus function below.
function plusMinus(arr) {
    //console.log(arr)
    var i=0
    var negNum = 0
    var posNum = 0
    var zeroNum = 0
    var negRatio = 0
    var posRatio = 0
    var zeroRatio = 0
    var denom = arr.length

    for(i=0; i < arr.length; i++){
        if(arr[i] > 0){
            posNum +=1
        }else if(arr[i] < 0){
            negNum +=1
        }else{
            zeroNum +=1
        }
    }
    posRatio = (posNum/denom).toFixed(6)
    negRatio = (negNum/denom).toFixed(6)
    zeroRatio = (zeroNum/denom).toFixed(6)
    console.log(posRatio)
    console.log(negRatio)
    console.log(zeroRatio)
}

function main() {
    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
