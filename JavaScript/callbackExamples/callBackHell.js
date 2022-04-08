function calculateSqure(number, callback) {
    setTimeout(function () {
        if (typeof number != 'number') {
            callback(new Error('Argument of type number is expected'));
            return;
        }
        const result = number * number;
        callback(null, result);
    }, 1000);
}

// calculateSqure(1, function (error, result) {
//     console.log(result);
//     calculateSqure(2, function (error, result) {
//         console.log(result);
//         calculateSqure(3, function (error, result) {
//             console.log(result);
//         });
//     });
// });

module.exports = calculateSqure;