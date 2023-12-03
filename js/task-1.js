// 'use strict';

function slugify(title) {
  return title.replaceAll(" ", "-").toLowerCase();
}

console.log(slugify('Arrays for begginers')); // "arrays-for-begginers"
console.log(slugify('English for developer')); // "english-for-developer"
console.log(slugify('Ten secrets of JavaScript')); // "ten-secrets-of-javascript"
console.log(slugify(undefined)); // "how-to-become-a-junior-developer-in-two-weeks"

// To check the data type of the argument and check the length of this string.