//  Write a JavaScript program to filter an array of objects based on a given property value

// Input:  
// arr = [
//     {
//         id: 1,
//         name: "John",
//         department: "HR",
//     },
//     {
//         id: 2,
//         name: "Alice",
//         department: "IT",
//     },
//     {
//         id: 3,
//         name: "Bob",
//         department: "Finance",
//     },
//     {
//         id: 4,
//         name: "Hank",
//         department: "IT",
//     },
// ]
// property = "department";
// value = "IT";

// Output: 
// [
//     { id: 2, name: 'Alice', department: 'IT' },
//     { id: 4, name: 'Hank', department: 'IT' }
// ]

function filterByProperty(arr, property, value) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
      if (arr[i][property] === value) {
          result.push(arr[i]);
      }
  }
  return result;
}

let employees = [
  { id: 1, name: "John", department: "HR" },
  { id: 2, name: "Alice", department: "IT" },
  { id: 3, name: "Bob", department: "Finance" },
  { id: 4, name: "Hank", department: "IT" }
];

let filtered = filterByProperty(employees, "department", "IT");
console.log(filtered);

