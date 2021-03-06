const arr = [5, 1, 3, 2, 6];

function filterGreterThan3(x) {
  return x > 3;
}

function isOdd(x) {
  return x % 2;
}

function isEven(x) {
  return x % 2 === 0;
}

console.log("Array ", arr);
let output = arr.filter(filterGreterThan3);
console.log("filterGreterThan3 Array ", output);

output = arr.filter(isOdd);
console.log("isOdd Array ", output);

output = arr.filter(isEven);
console.log("isEven Array ", output);

// Inline function
output = arr.filter(function (x) {
  return x % 2;
});
console.log("High order function isOdd Array ", output);

// ES6 syntax
output = arr.filter((x) => {
  return x % 2;
});
console.log("ES6: isOdd Array ", output);

// ES6 syntax
output = arr.filter((x) => x % 2);
console.log("ES6 sorter: isOdd Array ", output);

// ES6 syntax
output = arr.filter((x) => x % 2);
console.log("ES6 shotest: isOdd Array ", output);

//=======================================================================================

let words = ['spray', 'limit', 'exuberant', 'destruction', 'elite', 'present']

const modifiedWords = words.filter( (word, index, arr) => {
  arr[index+1] +=' extra';
  return word.length < 6;
});

console.log(words)
console.log(modifiedWords);

words = ['spray', 'limit', 'exuberant', 'destruction', 'elite', 'present']
const appendedWords = words.filter( (word, index, arr) => {
  arr.push('new');
  console.log(arr);
  return word.length < 6;
})

console.log(words)
console.log(modifiedWords);