// CUrring In JS

// Normal function
// function sum(a, b, c) {
//   return a + b + c;
// }




// Question 1 -> sum(2)(6)(1);
function sum(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

console.log(sum(10)(20)(30));
