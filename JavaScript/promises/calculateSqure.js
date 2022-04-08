function calculateSqure(number) {
    const promise = new Promise(function (resolve, reject) {
        setTimeout(function () {
            if (typeof number != 'number') {
                return reject(new Error('Argument of type number is expected'));
            }
            const result = number * number;
            resolve(result);
        }, 1000);
    });
    return promise;
}

// calculateSqure('test').then(function (value) {
//     console.log(value);
// }, function (reason) {
//     console.log('Error: ' + reason);
// });

// calculateSqure(5).then(function (value) {
//     console.log(value);
// }, function (reason) {
//     console.log('Error: ' + reason);
// });


// //Promise Chain example
// console.log('Promise chain');
// calculateSqure(5).then(function (value) {
//     console.log(value);
//     return calculateSqure(10);
// }).then(function (value1) {
//     console.log(value1);
// }, function (reason) {
//     console.log(reason);
// });

// setTimeout(function () {
//     console.log('setTimeOut===========')
// }, 0);


// ES6 lambda
// Calculate squre // Promise chain==============================================

// calculateSqure(1)
//     .then(value => {
//         console.log("promise chain starts " + value);
//         return calculateSqure(2);
//     })
//     .then(value1 => {
//         console.log(value1);
//         return calculateSqure(3);
//     })
//     .then(value2 => {
//         console.log(value2);
//         return calculateSqure(4);
//     })
//     .then(value3 => {
//         console.log("promise chain ends " + value3);
//         return calculateSqure(5);
//     });

    module.exports = calculateSqure;