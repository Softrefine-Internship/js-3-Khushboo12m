// Write a JavaScript program to count number of occurrences of repeated names in an array of objects.

// Input:  
// arr = [
//     {
//        employeeName: "Ram",
//        employeeId: 23
//     },
//     {
//        employeeName: "Shyam",
//        employeeId: 24
//     },
//     {
//        employeeName: "Ram",
//        employeeId: 21
//     },
//     {
//        employeeName: "Ram",
//        employeeId: 25
//     },
//     {
//        employeeName: "Kisan",
//        employeeId: 22
//     },
//     {
//        employeeName: "Shyam",
//        employeeId: 20
//     }
//  ]

// Output: 
// [
//     {employeeName: "Ram", occurrences: 3},
//     {employeeName: "Shyam", occurrences: 2},
//     {employeeName: "Kisan", occurrences:  1}
// ] 



function countEmployeeNameOccurrences(arr) {
  const nameCountMap = {};

  for (let i = 0; i < arr.length; i++) {
      const name = arr[i].employeeName;
      if (nameCountMap[name]) {
          nameCountMap[name]++;
      } else {
          nameCountMap[name] = 1;
      }
  }

  const result = [];
  for (let name in nameCountMap) {
      result.push({
          employeeName: name,
          occurrences: nameCountMap[name]
      });
  }

  return result;
}

const arr = [
  { employeeName: "Ram", employeeId: 23 },
  { employeeName: "Shyam", employeeId: 24 },
  { employeeName: "Ram", employeeId: 21 },
  { employeeName: "Ram", employeeId: 25 },
  { employeeName: "Kisan", employeeId: 22 },
  { employeeName: "Shyam", employeeId: 20 }
];

console.log(countEmployeeNameOccurrences(arr));

