//1 ve 10 dahil aralarındaki sayılar için faktoriyel hesabı yapan bir javascript algoritması oluşturma. https://www.hackerrank.com/challenges/js10-function/problem //


'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}
function factorial(n){
    var result = n;
  if (n === 1) 
    return 1; 
  while (n > 1) { 
    n--;
    result *= n;
  }
  return result;
}


function main() {
    const n = +(readLine());
    
    console.log(factorial(n));
}