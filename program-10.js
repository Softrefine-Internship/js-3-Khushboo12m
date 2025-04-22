// Write a JavaScript program to find the longest word within the string.

// Input: "This is a demo String find the largest word from it"
// Output: "largest"



function findLongestWord(str) {
  let words = str.split(' '); 
  let longestWord = '';

  for (let i = 0; i < words.length; i++) {
      if (words[i].length > longestWord.length) {
          longestWord = words[i];
      }
  }

  return longestWord;
}

let sentence = "This is a demo String find the largest word from it";
let longestWord = findLongestWord(sentence);
console.log(longestWord); 

