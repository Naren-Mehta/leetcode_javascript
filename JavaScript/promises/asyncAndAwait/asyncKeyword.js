//Async function alwasy returns a promise

async function f() {
    return new Promise((resolve, reject) => {
        setTimeout(resolve(true), 10000)
    });
};

const var1 = f();

console.log(var1);
setTimeout(() => {
    console.log(var1);
}, 11000);


async function f1() {
    return Promise.reject(404);
};

console.log(f1());