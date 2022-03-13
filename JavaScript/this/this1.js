function importantPerson () {
    console.log('Name: ', this.name);
}

let name = 'test';

const person1 = {
    name: 'Naren',
    importantPerson: importantPerson
}

const person2 = {
    name: 'Mehta',
    importantPerson: importantPerson
}

importantPerson();
person1.importantPerson();
person2.importantPerson();


// ========================================================================

const a = function (){
    console.log('a ', this)
    const b = function (){
        console.log('b ', this)

        const c = {
            hi: function(){
                console.log('hi ', this)
            }
        }
        c.hi();
    }
    b();
}

a();


// ========================================================================


const obj = {
    name: 'Naren',
    sing(){
        console.log('aa ', this);
        var anotherFunction = function(){
            console.log('bb ', this);
        }
        anotherFunction();
    }
}

obj.sing();
