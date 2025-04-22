// Write a JavaScript program to check subset.

// Example 1:
// Input: 
// let set1 = new Set([1, 2, 3, 4, 5]);
// let set2 = new Set([3, 4]);

// Output: false


// Example 2:
// Input: 
// let set1 = new Set([3, 4]);
// let set2 = new Set([1, 2, 3, 4, 5]);

// Output: true

function isSubset(subset, set) {
  for (let item of subset) {
      if (!set.has(item)) {
          return false;
      }
  }
  return true;
}

let setA = new Set([1, 2, 3, 4, 5]);
let setB = new Set([3, 4]);
console.log(isSubset(setA, setB)); 

console.log(isSubset(setB, setA)); 