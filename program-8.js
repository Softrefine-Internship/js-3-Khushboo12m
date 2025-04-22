// Write a JavaScript program to calculate the total value of a specific property in an array of objects.

// Input:  
// arr = [
//     {
//         product: "Laptop",
//         price: 1000,
//         quantity: 2,
//     },
//     {
//         product: "Phone",
//         price: 600,
//         quantity: 3,
//     },
//     {
//         product: "Monitor",
//         price: 250,
//         quantity: 1,
//     },
// ]

// Output: 
// total value for "price": 1850
// total value for "quantity": 6


// function calculateTotal(arr, key) {
//   let total = 0;
//   for (let i = 0; i < arr.length; i++) {
//       if (arr[i][key] !== undefined) {
//           total += arr[i][key];
//       }
//   }
//   return total;
// }

// const arr = [
//   {
//       product: "Laptop",
//       price: 1000,
//       quantity: 2,
//   },
//   {
//       product: "Phone",
//       price: 600,
//       quantity: 3,
//   },
//   {
//       product: "Monitor",
//       price: 250,
//       quantity: 1,
//   },
// ];


// console.log("Total value for 'price':", calculateTotal(arr, "price"));     
// console.log("Total value for 'quantity':", calculateTotal(arr, "quantity"));

function calculateTotal(arr, key) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
     if (arr[i][key] !== undefined) {
          total += arr[i][key];
      }
  }
  console.log(`Total value for '${key}':`, total);
}

const arr = [
  { product: "Laptop", price: 1000, quantity: 2 },
  { product: "Phone", price: 600, quantity: 3 },
  { product: "Monitor", price: 250, quantity: 1 },
];

calculateTotal(arr, "price");
calculateTotal(arr, "quantity");
