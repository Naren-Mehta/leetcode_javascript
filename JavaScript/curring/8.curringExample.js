// Curring in JS
// Question 7 -  curry() implementation
// interview question

// Create a multiplyModified method that should call multiply(a,b, c) method with all arguments like below
// multiplyModified(1,2,3,4);
// multiplyModified(1,2)(3,4);
// multiplyModified(1)(2,3)(4);
// multiplyModified(1)(2)(3)(4);

function multiply(a, b, c, d){
    return a * b * c * d;
}

function multiplyModified(...args){

    if(multiply.length === args.length){
        return multiply(...args);
    }
    return function(...newArgs){
       return multiplyModified(...args, ...newArgs);
    }
}

console.log(multiplyModified(1,2,3,4));
console.log(multiplyModified(1,2)(3,4));
console.log(multiplyModified(1)(2,3)(4));
console.log(multiplyModified(1)(2)(3)(4));