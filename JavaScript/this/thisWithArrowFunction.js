// const test =()=>{
//     var x = 100;
//     console.log(' test => ', this);
// }

// const test1 = function(){
//     var x = 100;
//     console.log(' test1 ', this);
// }

// test(); // window obj
// test1(); // window obj

// =======================================

// let person = {
//     firstName: 'naren',
//     lastName: 'mehta',
//     age: 32,
//     getFullNameAF: ()=>{
//         console.log('Arrow Function ', this.firstName + ' ' +this.lastName);
//     },
//     getFullNameNF: function(){
//         console.log('Normal Function ', this.firstName + ' ' +this.lastName);
//     }
// }

// person.getFullNameNF();
// person.getFullNameAF();

// ==============================================
// let person = {
//     firstName: 'naren',
//     lastName: 'mehta',
//     age: 32
// }

// let getFullNameAF =()=>{
//     console.log('Arrow Function ', this);
// };
// let getFullNameNF = function(){
//     console.log('Normal Function ', this);
// }

// getFullNameNF.call(person); //person object
// getFullNameAF.call(person); // window object
// getFullNameAF.apply(person); // window object
// let myFun = getFullNameAF.bind(person);
// myFun(); // window object

// ==============================================

var obj = {
  bar: function () {
    var x = () => this;
    return x;
  },
};

var fn = obj.bar();
console.log(fn() === obj);

fn = obj.bar;
console.log(fn()() === obj);
