const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("foo");
  }, 300);
});

//Check this as well: For Rejected promise
// const myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject("foo");
//     }, 300);
//   });

myPromise
  .then((value) => {
    return value + " and bar";
  })
  .then((value) => {
    return value + " and bar again";
  })
  .then((value) => {
    return value + " and again";
  })
  .then((value) => {
    return value + " and again";
  })
  .then((value) => {
    return value + ' end!';
  })
  .catch((err) => {
    console.log("==error " , err);
  })
  .then((value) => {
    console.log("==="+value);
  })
