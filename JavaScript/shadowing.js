//1. let shadowing

// let a = 10;
// {
//     let a =100;
//     console.log(a); // Shadowing 
// }

//  console.log(a);

// ===============================================================================================================

//1. const shadowing

// const a = 10;
// {
//     const a =100;
//     console.log(a); // Shadowing 
// }

//  console.log(a);

// ===============================================================================================================

//1. let to const shadowing

// let a = 10;
// {
//     const a =100;
//     console.log(a); // Shadowing 
// }

//  console.log(a);

// ===============================================================================================================

//1. let to const shadowing

const a = 10; 
{
    let a = 100;
    console.log(a); // Shadowing 
}

console.log(a);

// ===============================================================================================================
//2. const shadowing

//  const a = 10;
// {
//     const a =100;
//     console.log(a); // Shadowing 
// }

//  console.log(a)

// ===============================================================================================================
//3. var shadwing is not possible inside {} block beacuse var is a function scope

//  var a = 10;
// {
//     var a =100;
//     console.log(a); // not Shadowing 
// }

//  console.log(a);


// ===============================================================================================================
//4. var shadwing is only possible if its in function. like below

// var a = 10;

// function test() {
//     var a = 100;
//     console.log(a); // Shadowing 
// }

// test();

// console.log(a);


// ===============================================================================================================
//5. let to var shadowing is not possible 

//  let a = 10;
// {
//     var a =100; //Uncaught SyntaxError: Identifier 'a' has already been declared
//     // coz var is a function scoped and var can be accessed outside of {}.
//     console.log(a); 
// }

//  console.log(a);

// ===============================================================================================================
//6. let to var shadowing is only possible if var is defined in a function like below

// let a = 10;

// function test() {
//     var a = 100;
//     console.log(a);
// }

// test();
// console.log(a);


// ===============================================================================================================
//7. var to let shadowing is possible coz let's scope is {}
// var a = 10;

// function test() {
//     let a = 100;
//     console.log(a);
// }

// test();
// console.log(a);