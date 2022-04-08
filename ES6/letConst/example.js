let name ="naren";

if(true){
    let age = 20;
    console.log(age, name);
}

console.log(name);


//============================

const arr = [1,2,3];
console.log(arr);

arr.push(100);
console.log(arr);


//============================

const obj ={
    name:'test'
}
 
console.log(obj);

obj.age= 30;
console.log(obj);

//===========hoiesting in ES6======================

function doSomething(){
    age = 27
}

let age;
doSomething();
console.log(age);