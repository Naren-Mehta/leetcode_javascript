
//1. ================================================================================
// var counter = 0;

// function increment(){
//   counter += 1;
// }

// function decrement(){
//   counter -= 1;
// }

// function  getCounter(){
//   return counter;
// }

// increment();
// increment();
// increment();

// console.log(getCounter());
// counter = 100;  // problem statement

// decrement();
// decrement();
// console.log(getCounter());

//2. ================================================================================


function counter(){
  var counterValue = 0;
  return {
    increment: function(){
      counterValue++;
    },
    decrement: function(){
      counterValue--;
    },
    getCounter: function(){
      return counterValue;
    }
  }
}
var countObject = counter();

console.log(countObject.getCounter());

countObject.increment();
countObject.increment();
countObject.increment();

console.log(countObject.getCounter());

countObject.decrement();

console.log(countObject.getCounter());


// ===========================================================================




