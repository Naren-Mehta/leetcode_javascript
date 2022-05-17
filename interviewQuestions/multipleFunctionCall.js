//Important


function multiply(a, b, c, d) {
    return a * b * c * d;
  }
  
  const multiplyModified = function (...args) {
    if (args.length === multiply.length) {
      return multiply(...args);
    }
    return function (...newArgs) {
      return multiplyModified(...args, ...newArgs);
    };
  };
  
  console.log(multiplyModified(1, 2, 3, 4));
  console.log(multiplyModified(1, 2)(3, 4));
  console.log(multiplyModified(1)(2, 3)(4));
  console.log(multiplyModified(1)(2)(3)(4));