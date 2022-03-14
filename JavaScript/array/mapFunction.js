const arr = [5, 1, 3, 2, 6];

function double(x) {
  return x * 2;
}

function triple(x) {
  return x * 3;
}

function toBinary(x) {
  return x.toString(2);
}
console.log("Array ", arr);

let output = arr.map(double);
console.log("Double Array ", output);

output = arr.map(triple);
console.log("Tripple Array ", output);

output = arr.map(toBinary);
console.log("Binary Array ", output);

// Pass method directly
output = arr.map(function double(x) {
  return x * 2;
});

console.log("Double Array ", output);

//In ES6 Syntax
output = arr.map((x) => {
  return x * 2;
});

console.log("ES 6: Double Array ", output);

// ===========================================================
//In ES6 Syntax (sortest way)
output = arr.map((x) => x * 2);

console.log("ES 6: Double Array ", output);

// ===========================================================
//In ES6 Syntax

output = arr.map(x => x * 2);

console.log("sortest ES 6: Double Array ", output);
