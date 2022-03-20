function calculateSqure(number) {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof number != 'number') {
                return reject(new Error('Argument of type number is expected'));
            }
            const result = number * number;
            resolve(result);
        }, 1000);
    });
    return promise;
}


// Promise rejections via myPromise.then(undefined, onRejected)
// calculateSqure(1)
//     .then(value => {
//         console.log("promise chain starts " + value);
//         return calculateSqure(2);
//     }).then(value => {
//         throw new Error('Having some errors');
//         console.log("promise chain starts " + value);
//     }, reason => {
//         console.log('Error happened ' + reason)
//     }).then(undefined, reason => {
//         console.log('Error happened ' + reason)
//     });

// Promise rejections via myPromise.catch(onRejected)


calculateSqure(100)
    .then(value => {
        console.log(value);
        return calculateSqure(200);
    })
    .then(value2 => {
        // throw new Error('This is an error');  // Can throw an error or return Reject
        // console.log(value2);

        return new Promise((resolve, reject) => {
            return reject(new Error('Return error via Reject method'));
        });
        console.log(value2);
    })
    .catch(error => {
        console.log('Error: ' + error);
    })