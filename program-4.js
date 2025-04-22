// Write a JavaScript program to get the index of an object by it's property.

// Input:  
// arrayObj = [{
//     prop_1: 'val_1',
//     prop_2: 'val_2',
//     prop_3: 'val_3'
// }, {
//     prop_1: 'val_4',
//     prop_2: 'val_5',
//     prop_3: 'val_6'
// }];

// Output: 1 (index of an object for prop_1: 'val_4')

function findIndexByProperty(array, propName, propValue) {
  for (let i = 0; i < array.length; i++) {
      if (array[i][propName] === propValue) {
          return i; 
      }
  }
  return -1; 
}

const arrayObj = [
  { prop_1: 'val_1', prop_2: 'val_2', prop_3: 'val_3' },
  { prop_1: 'val_4', prop_2: 'val_5', prop_3: 'val_6' }
];

const index = findIndexByProperty(arrayObj, 'prop_1', 'val_4');
console.log(index); 
