// Write a JavaScript program to get the longest string in an array.

// Input:  
// arr = [
    // "JavaScript",
    // "Python",
    // "Java",
    // "C++",
    // "Ruby",
    // "Swift",
// ]

// Output: "JavaScript"




function getLongestString(arr) {
    let longest = "";
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > longest.length) {
            longest = arr[i];
        }
    }
    return longest;
}

let languages = ["JavaScript", "Python", "Java", "C++", "Ruby", "Swift"];
let longestStr = getLongestString(languages);
console.log(longestStr); 

