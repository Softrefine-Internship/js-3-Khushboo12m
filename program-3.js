// Write a JavaScript program to flatten object into single depth object.

// Input: 
// obj = {
//     Company: "GeeksforGeeks",
//     Address: "Noida",
//     contact: +91-999999999,
//     mentor: {
//         HTML: "GFG",
//         CSS: "GFG",
//         JavaScript: "GFG"
//     }
// };

// Output: 
// obj = {
//     Company: 'GeeksforGeeks',
//     Address: 'Noida',
//     contact: -999999908,
//     'mentor.HTML': 'GFG',
//     'mentor.CSS': 'GFG',
//     'mentor.JavaScript': 'GFG'
// }




function flattenObject(obj, parentKey = '', result = {}) {
  for (let key in obj) {
      const newKey = parentKey ? parentKey + '.' + key : key;      
      if (typeof obj[key] === 'object' && obj[key] !== null) {
          flattenObject(obj[key], newKey, result); 
      } else {
          result[newKey] = obj[key]; 
      }
  }
  return result;
}

const obj = {
  Company: "GeeksforGeeks",
  Address: "Noida",
  contact: 91 - 999999999,
  mentor: {
      HTML: "GFG",
      CSS: "GFG",
      JavaScript: "GFG"
  }
};

const flattenedObj = flattenObject(obj);

console.log(flattenedObj);

