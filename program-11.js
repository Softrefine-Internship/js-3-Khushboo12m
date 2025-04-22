// Write a JavaScript program to check a given string is an anagram of another string.

// Example 1:
// Input: evil = vile
// Output: true

// Example 2:
// Input: a gentleman = elegant man
// Output: true

// Example 3:
// Input: eleven plus two = twelve plus one
// Output: true

function areAnagrams(str1, str2) {
  let cleanedStr1 = '';
  let cleanedStr2 = '';

  for (let i = 0; i < str1.length; i++) {
    if (str1[i] !== ' ') {
      cleanedStr1 += str1[i].toLowerCase();
    }
  }

  for (let i = 0; i < str2.length; i++) {
    if (str2[i] !== ' ') {
      cleanedStr2 += str2[i].toLowerCase();

    }
  }

  return cleanedStr1.split('').sort().join('') === cleanedStr2.split('').sort().join('');
}

console.log(areAnagrams("evil", "vile")); 
console.log(areAnagrams("a gentleman", "elegant man"));
console.log(areAnagrams("eleven plus two", "twelve plus one")); 
