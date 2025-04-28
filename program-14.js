// Write a JavaScript program to count frequency of character in string.

// Input: "hello"
// Output: { 'h': 1, 'e': 1, 'l': 2, 'o': 1 }


function countFrequency(str) {
  let freq = {};
  for (let char of str) {
    if (char !== ' ') {  
      freq[char] = (freq[char] || 0) + 1;
    }
  }
  return freq;
}

console.log(countFrequency("hello"));
