//Curring in jS

// Question 4: CUrring vs Partial Application


//this is partial application, not curring
function sum(a) {
  return function (b, c) {
    return a + b + c;
  };
}

const x = sum(4);
console.log(x(5, 6));


// or

console.log(sum(4)(5, 6));