// sum of sum(1)(2)(3)(4)(5)......(100)()

var sum = function sum(x) {
  return function (y) {
    if (y) {
      return sum(x + y);
    }
    return x;
  };
};

console.log(sum(1)(2)(3)(4)());

// Simplified code==========================


var sum = function sum(x) {
  return function (y) {
    return y ? sum(x + y) : x;
  };
};

console.log(sum(1)(2)(3)(4)());

// More Simplified code==========================

var sum = (x) => (y) => y ? sum(x + y) : x;
console.log(sum(1)(2)(3)(4)());

// More & More Simplified code==========================

var sum = x => y => y ? sum(x + y) : x;
console.log(sum(10)(20)(30)(4)());



