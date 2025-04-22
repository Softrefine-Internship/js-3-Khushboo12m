// Write a JavaScript program to find intersection of two sets.

// Input: 
// let set1 = new Set([1, 2, 3, 4]);
// let set2 = new Set([3, 4, 5, 6]);

// Output: [3, 4]

function intersection(set1, set2) {
  let result = [];
  for (let item of set1) {
    if (set2.has(item)) {
      result.push(item);
    }
  }
  return result;
}

let set1 = new Set([1, 2, 3, 4]);
let set2 = new Set([3, 4, 5, 6]);
console.log(intersection(set1, set2));
