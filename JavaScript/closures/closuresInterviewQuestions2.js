function multiply(num1, num2) {
  if(num2!=undefined){
    return num1*num2;
  }
  return function(num2){
    return num1 * num2;
  }
}

console.log(multiply(4, 5)); // => 20
console.log(multiply(3, 3)); // => 9
const double = multiply(2);
console.log(double(5));  // => 10
console.log(double(11)); // => 22

const triple = multiply(3);
console.log(triple(5));  // => 15
console.log(triple(11)); // => 33