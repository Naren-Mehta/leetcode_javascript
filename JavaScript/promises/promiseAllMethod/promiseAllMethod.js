function vender1() {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            return resolve(8000);;
        }, 1000);
    });
};

function vender2() {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            return resolve(10000);;
        }, 3000);
    });
}


function vender3() {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            return resolve(7000);
        }, 5000);
    });
}


// Get Seperate values like below

// vender1().then(value => {
//     console.log(value);
// });

// vender2().then(value => {
//     console.log(value);
// });

// vender3().then(value => {
//     console.log(value);
// });




// Get all values together and find then max

Promise.all([vender1(), vender2(), vender3()])
    .then(value => {
        console.log(value);
        console.log('Max value = ' + Math.max(...value));
    });


console.log(Promise.all([1, 'string', true]));