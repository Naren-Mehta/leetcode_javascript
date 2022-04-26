function add(a, b) {
  if (b) {
    return a + b;
  }

  return function (c) {
    return a + c;
  };
}

console.log(add(10, 10));
console.log(add(10)(20));
