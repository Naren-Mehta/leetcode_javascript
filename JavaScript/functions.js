//# Function Statement or Funtion Declaration

function a() {
    console.log("this is function statement or Funtion Declaration");
}

//# Function Expression

var b = function () {
    console.log("this is function expression");
}
// 
//# Name Function Expression

var c = function xyz(param) {
    if(!param){
        console.log("this is Name function expression: function xyz(){} assigned to var b ");
        xyz(!param)// you can call xyz from here only
    }
}

c();

// xyz(); // we cant access this it will throw ReferenceError: xyz is not defined

//# Anonymous Function

// function (){
//     console.log('This is a Anonymous function: it can only used as a value example: creating a function Expression');
// };


// DIfference between Parameters & arguments
function abc(parameter1, parameter2) {  // this is Parameter

}

abc(10, 20); // 10, 20 are arguments


// (First class Function) or (Function are Finction class citizens)
// The ability to use functions as a value (pass functions as a argument or return functions as a value) are called First Class Functions

// example:

function test (param){
    console.log('param ', param);
    return function (){

    }
}

var x = test (function () {});
console.log('x', x);





