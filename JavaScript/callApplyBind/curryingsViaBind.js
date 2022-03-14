function multiply(x, y) {
  console.log(x * y);
}

multiply(2, 3);

const multiplyByTwo = multiply.bind(this, 2);
multiplyByTwo(5);

const multiplyByTen = multiply.bind(this, 10);

multiplyByTen(9);