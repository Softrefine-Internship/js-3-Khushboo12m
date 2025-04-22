// Write a JavaScript program to group elements by their properties.

// Input:
// arr = [
//     { id: 1, name: "John" },
//     { id: 2, name: "Alice" },
//     { id: 3, name: "Bob" },
//     { id: 4, name: "Alice" },
// ]

// Output:
// { 'John' => [ 1 ], 'Alice' => [ 2, 4 ], 'Bob' => [ 3 ] }

function groupByProperty(arr, key) {
  let grouped = {};
  for (let i = 0; i < arr.length; i++) {
      let groupKey = arr[i][key];
      if (!grouped[groupKey]) {
          grouped[groupKey] = [];
      }
      grouped[groupKey].push(arr[i].id);
  }
  return grouped;
}

const arr = [
    { id: 1, name: "John" },
    { id: 2, name: "Alice" },
    { id: 3, name: "Bob" },
    { id: 4, name: "Alice" },
];


const result = groupByProperty(arr, "name");
console.log(result);

