let person = {
    firstName: 'naren',
    lastName: 'mehta'
};

function getFullName(city, state) {
    return 'This is '+ this.firstName + ' ' + this.lastName + ' from ' + city + ' ' + state;
}

// let getFullNameForCityPith = getFullName.bind(person, 'pith');
// console.log(getFullNameForCityPith('uttarakhand'));


Function.prototype.myBind = function(scope, ...args){
    scope._this = this;
    return function(...args1){
        return scope._this(args, args1);
    }
}

let testBind = getFullName.bind(person, 'pith');
console.log('bind method tested ==>'+testBind('uttarakhand'))