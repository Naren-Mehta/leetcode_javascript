const promise1 = new Promise((res, rej) => {
  res("====11====");
});

const promise2 = new Promise((res, rej) => {
  setTimeout(() => {
    res("===22======");
  }, 10000);
});

// Promise.all([promise1, promise2, "hello"]).then(data =>{
//     console.log(data);
// });

const myAll = (arr) => {
  return new Promise((resolve, reject) => {
    let responseArr = [];
    let completed = 0;
    arr.forEach((ele, index) => {
      Promise.resolve(ele)
        .then((result) => {
          completed++;
          responseArr[index] = result;
          if (completed === arr.length) {
            resolve(responseArr);
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  });
};

myAll([promise1, promise2, "hello"]).then((data) => {
  console.log(data);
});
