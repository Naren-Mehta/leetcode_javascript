function logToConsole(somePromise) {
    somePromise.then(value => {
            console.log(value);
        })
        .catch(reason => console.log("Rejected Reason is: " + reason));
};

const somePromise = new Promise((resolve, reject) => {
    resolve('Hello');
});
logToConsole(somePromise);

const value = 'String Value';

// logToConsole(value); // This will throw an error as value is not a Promise

//Promise.resolve
logToConsole(Promise.resolve(value)); // Promise.resolve() method will return promise to the given object

//Promise.reject
logToConsole(Promise.reject(value)); // Promise.reject() method will return rejected promise to the given object

//Promise.reject
logToConsole(Promise.reject(new Error('This is Promise.reject methos'))); // Promise.reject() method will return rejected promise to the given object