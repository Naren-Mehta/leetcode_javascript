var obj = {
  name: "naren",
  age: 32,
};

console.log(obj);

//IN ES6 we can use object as a literal

let name = "naren1";
let age = 31;

// let obj1 ={
//     name,
//     age
// }

// or you can override as well
let obj1 = {
  name: "mehta",
  age,
};
console.log(obj1);

// or you can override as well
let ageField = "age";
let obj2 = {
  name: "mehta",
  age,
  [ageField]: 28,
  greet(){
    console.log("Good Morning")
  },
  "greet me na test hai ye"(){
    console.log("Good Morning na")
  }

};
// obj2.greet();
// obj2["greet me na test hai ye"]();

console.log(obj2);
