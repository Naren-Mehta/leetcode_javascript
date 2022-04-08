
// Example1:

// function isEqual(number, compare =10){
//     return number === compare;
// }

// console.log(isEqual(10))


// Example2: this is not the good way

// function isEqual(number = 20, compare){
//     return number === compare;
// }

// console.log(isEqual(10))


// Example3: this is valid

// function isEqual(number, compare = number){
//     return number === compare;
// }

// console.log(isEqual(10));



// Example4: this is not valid and will throw Reference Error

// function isEqual(number = compare, compare = 10){
//     console.log(number, compare)
//     return number === compare;
// }

// console.log(isEqual())



// Example5: this is valid

let value =20;
function isEqual(number =value, compare = number){
    return number === compare;
}

console.log(isEqual());