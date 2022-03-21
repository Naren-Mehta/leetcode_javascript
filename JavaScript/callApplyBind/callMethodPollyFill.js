let person ={
    firstName: 'naren',
    lastName: 'mehta'
};

function getFullName(){
    return this.firstName + ' ' + this.lastName;
}

console.log(getFullName.call(person));

Function.prototype.myCall = function(scope, ...args){
        scope._fun = this;
       return scope._fun(args);
}

console.log(getFullName.myCall(person));


