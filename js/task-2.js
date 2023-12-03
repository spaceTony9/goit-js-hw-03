'use strict';

// main version

// function makeArray(firstArray, secondArray, maxLength) {
//   let connectedArrays = firstArray.concat(secondArray);
//   if (connectedArrays.length > maxLength) {
//     return connectedArrays.slice(0, maxLength);
//   }
//   return connectedArrays;
// }

// alternative version

function makeArray(firstArray, secondArray, maxLength) {
  for (let i = 0; i < maxLength; i++) {
    if (firstArray.length === maxLength) {
      break;
    }
    firstArray.push(secondArray[i]);
  }
  return firstArray.slice(0, maxLength);
}

// todo: should return copy of array. Check the datatype of the arguments. 

console.log(makeArray(['Mango', 'Poly'], ['Ajax', 'Chelsea'], 3)); // ["Mango", "Poly", "Ajax"]
console.log(makeArray(['Mango', 'Poly', 'Houston'], ['Ajax', 'Chelsea'], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
console.log(makeArray(['Mango'], ['Ajax', 'Chelsea', 'Poly', 'Houston'], 3)); // ["Mango", "Ajax", "Chelsea"]
console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 2)); // ["Earth", "Jupiter"]
console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus', 'Venus'], 0)); // []
