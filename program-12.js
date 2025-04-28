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
    let longestStrings = [];
    let maxLength = 0;

    for (let i = 0; i < arr.length; i++) {
        let str = arr[i];
        if (str.length > maxLength) {
            longestStrings = [str]; 
            maxLength = str.length;
        } else if (str.length === maxLength) {
            longestStrings.push(str); 
        }
    }
    return longestStrings;
}

let languages = ["JavaScript", "Python", "Java", "C++", "Ruby", "Swift"];
let longestStr = getLongestString(languages);
console.log(longestStr); 

