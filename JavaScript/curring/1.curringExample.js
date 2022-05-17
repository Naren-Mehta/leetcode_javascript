//Curring in JavaScript
// Why Curring:

// It makes a function pure which makes it expose to less errors and side effects.
// It helps in avoiding the same variable again and again.
// It is a checking method that checks if you have all the things before you proceed.
// It divides one function into multiple functions so that one handles one set of responsibility.


// Example f(a, b) into f(a)(b);


// Normal function with two arguments
function f(a, b){
    console.log(a, b);
}


//function curring

function f1(a){
    return function (b){
        return `${a} ${b}`;
    }
}

console.log(f1(10)(20));