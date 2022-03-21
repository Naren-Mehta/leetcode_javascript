let person = {
    firstName: 'naren',
    lastName: 'mehta'
};

function getFullName(city, state) {
    return this.firstName + ' ' + this.lastName, ' from ' + city + ' ' +state;
}

console.log(getFullName.call(person, 'pith', 'uttarakhand'));

Function.prototype.myCall = function (scope, ...args) {
    scope._fun = this;
    return scope._fun(args);
}

console.log(getFullName.myCall(person, 'pith', 'uttarakhand'));