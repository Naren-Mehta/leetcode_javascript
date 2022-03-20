var promise1 = new Promise(function(resolve, reject){
    resolve('test data');
});

console.log(promise1);
var promise2 = new Promise(function(resolve, reject){
    reject('Reject reason');
});

console.log(promise2);