
function doSomething() {}
console.log( doSomething.prototype );

doSomething.prototype.foo = 'bar';
console.log(doSomething.prototype);

const doSomethingFromArrowFunction = () => {};
console.log(doSomethingFromArrowFunction.prototype);