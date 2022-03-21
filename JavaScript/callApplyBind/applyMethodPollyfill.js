let person = {
    firstName: 'naren',
    lastName: 'mehta'
};

function getFullName(city, state) {
    return 'This is '+ this.firstName + ' ' + this.lastName + ' from ' + city + ' ' + state;
}

// console.log(getFullName.apply(person, ['pith', 'uttarakhand']));


Function.prototype.myApply = function(scope, args){
    scope._this = this;
    return scope._this(...args);
}

console.log(getFullName.myApply(person, ['pith', 'uttarakhand']));



