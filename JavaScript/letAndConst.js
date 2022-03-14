// console.log(a);
// let a = 20;

// console.log(a);
// const x;
// console.log(x)


// Block Scope
var x = 100; // this will store in Global Scope  
let y = 200; // this will store in Script Scope
const z = 300; // this will store in Script Scope
{
    // var x = 10; // this will store in Global Scope 
    // let y = 20; // this will store in Block Scope  // Shodowing happening
    // const z = 30; // this will store in Block Scope // Shodowing happening
    console.log(x);
    console.log(y);
    console.log(z);
}

console.log(x);
console.log(y);
console.log(z);
