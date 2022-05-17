// Curring in JS
// Question 9: add(1,2..n)(5,6…n)…(n)()
// Use of Curring in your project

//=========================simple question==================================
// function sum(a, b) {
//   return function (c, d) {
//     return a + b + c + d;
//   };
// }

// console.log(sum(1, 2)(3, 4));

//=============================main question=================================

function add(...args) {
  return function (...newArgs) {
    if (newArgs.length > 0) {
      return add(...args, ...newArgs);
    }
    
    return args.reduce((acc, cur) => {
      acc += cur;
      return acc;
    }, 0);
  };
}
console.log(add(1, 2)(3, 4, 5)(6, 7, 8, 9)());
