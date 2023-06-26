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

/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
    const vowels=['a','e','i','o','u']
    const letters = s.toLowerCase().split('');
    
    const vowelLetters = [];
    const otherLetters = [];
    
    
   for (let i = 0; i < letters.length; i++) {   
    if (vowels.includes(letters[i])) {
      vowelLetters.push(letters[i]);
    } else if (letters[i] !== ' ') {
      otherLetters.push(letters[i]);
    }
  }

  console.log(vowelLetters.concat(otherLetters).join('\n'));
}

function main() {
    const s = readLine();
    
    vowelsAndConsonants(s);
}