

const personPtototype = {
    greet(){
        console.log(`hello, this is ${this.name}!`);
    }
}

function Person(name){
    this.name = name;
}



Person.prototype = personPtototype;
Person.prototype.constructor = Person;

let naren = new Person('naren');
naren.greet();

console.log(Object.hasOwn(naren, 'name'));
console.log(Object.hasOwn(naren, 'greet'));
