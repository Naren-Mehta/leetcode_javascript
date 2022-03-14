// Reduce method can return sum of an array, max, min, avg etc of array

const arr = [5, 1, 3, 2, 6];

function findSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
      sum = sum + arr[i];
  }
  return sum;
}

// console.log(findSum(arr));

const sum = arr.reduce(function(accumulator, currentValue){
    // console.log(accumulator, currentValue)
    return accumulator + currentValue;
}, 0);

// console.log("sum= ", sum);

const max = arr.reduce(function(accumulator, currentValue){
    console.log(accumulator, currentValue);
    return accumulator > currentValue ? currentValue : accumulator;
}, Number.MAX_SAFE_INTEGER);

console.log("max= ", max);


