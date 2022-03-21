var askJohn = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve('Yep, I got one extra pen.'), 3000);
    });
};

var askEugene = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve('Sorry man, got only one. '), 1000);
    });
};

var askSusy = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve('Sure, I have a pen for you!'), 2000);
    });
};

var askAtTheShop = () => {
    return Promise.resolve('We always have pens. You can buy one from $1');
}

Promise.race([askJohn(), askEugene(), askSusy(), askAtTheShop()])
    .then((value) => {
        console.log(value)
    })
    .catch((reason) => {
        console.log(reason)
    });



const promise1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 500, 'one');
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, 'two');
});

Promise.race([promise1, promise2]).then((value) => {
    console.log(value);
    // Both resolve, but promise2 is faster
});