function multiply(x) {
  return function (y) {
    console.log(x * y);
  };
}

const multiplyByTen = multiply(10);
multiplyByTen(9);


const multiplyBy9 = multiply(9);
multiplyBy9(20);