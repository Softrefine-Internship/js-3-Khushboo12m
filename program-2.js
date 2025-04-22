// Write a JavaScript program to convert two-dimensional array in to an object.

// Input:  [
//     ["John", 12],
//     ["Jack", 13],
//     ["Matt", 14],
//     ["Maxx", 15]
// ]

// Output: {
//     "John": 12,
//     "Jack": 13,
//     "Matt": 14,
//     "Maxx": 15
// }

function arrayToObject(arr) {
  const obj = {};
  for (let i = 0; i < arr.length; i++) {
      const [key, value] = arr[i];
      obj[key] = value;
  }
  return obj;
}

const input = [
  ["John", 12],
  ["Jack", 13],
  ["Matt", 14],
  ["Maxx", 15]
];

const output = arrayToObject(input);
console.log(output);
