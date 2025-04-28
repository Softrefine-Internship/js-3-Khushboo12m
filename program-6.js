// Write a JavaScript program to modify an object’s property in an array of objects.

// Input:  
// arr = [
    // {
    //     employee_id: 1,
    //     employee_name: "Aman",
    // },
    // {
    //     employee_id: 2,
    //     employee_name: "Bhargava",
    // },
    // {
    //     employee_id: 3,
    //     employee_name: "Chaitanya",
    // },
//  ]

// Output: 
// [
//     { employee_id: 1, employee_name: 'Aman' },
//     { employee_id: 2, employee_name: 'Rahul' },
//     { employee_id: 3, employee_name: 'Chaitanya' }
// ] 

function updateEmployeeName(arr, id, property, newValue) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].employee_id === id) {
            arr[i][property] = newValue; 
            break; 
        }
    }
    return arr;
}

let employees = [
    { employee_id: 1, employee_name: "Aman" },
    { employee_id: 2, employee_name: "Bhargava" },
    { employee_id: 3, employee_name: "Chaitanya" }
];

let updatedEmployees = updateEmployeeName(employees, 2, "employee_name", "Rahul");
console.log(updatedEmployees);

