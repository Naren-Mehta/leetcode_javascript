/* Promise.any: It returns a single promise that resolves as soon as 
any of the promises in the iterable fulfills, with the value of the fulfilled promise */


/* Note:
If no promises in the iterable fulfill (if all of the given promises are rejected),
then the returned promise is rejected with an AggregateError, 
a new subclass of Error that groups together individual errors. */

const promise1 = Promise.reject(0);
const promise2 = new Promise((resolve) => setTimeout(resolve, 100, 'quick'));
const promise3 = new Promise((resolve) => setTimeout(resolve, 500, 'slow'));

const promises = [promise1, promise2, promise3];

Promise.any(promises).then((value) => console.log(value)); // Quick


//=========================================================================

const pErr = new Promise((resolve, reject) => {
    reject("Always fails");
  });
  
  const pSlow = new Promise((resolve, reject) => {
    setTimeout(resolve, 500, "Done eventually");
  });
  
  const pFast = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, "Done quick");
  });
  
  Promise.any([pErr, pSlow, pFast]).then((value) => {
    console.log(value); // Done Quick
    // pFast fulfills first
  });


//=========================================================================

//   Promise.any() rejects with an AggregateError if no promise fulfills.


  const pErr1 = new Promise((resolve, reject) => {
    reject('Always fails');
  });
  
  Promise.any([pErr1]).catch((err) => {
    console.log(err);
  })


//=========================================================================

