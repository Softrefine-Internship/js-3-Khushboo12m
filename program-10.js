// Write a JavaScript program to find the longest word within the string.

// Input: "This is a demo String find the largest word from it"
// Output: "largest"



function findLongestWord(str) {
  let words = str.split(' '); 
  let longestWord = [];
  let maxLength = 0;

  for (let i = 0; i < words.length; i++) {
      let word = words[i];
      if (word.length > maxLength) {
          longestWord = [word]; 
          maxLength = word.length;
      } else if (word.length === maxLength) {
          longestWord.push(word);
      }
  }

  return longestWord;
}

let sentence = "This is a demo String find the largest word from it";
let longestWord = findLongestWord(sentence);
console.log(longestWord); 

