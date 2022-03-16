// var x = 'x';

// function findName(){
//     console.log('findName x ', x);
//     // console.log('findName a ', a);

//     var b = 'b';
//     return printName();
// }

// function printName(){
//     console.log('printName x ', x);
//     // console.log('printName b', b);

//      var c = 'c';
//     return 'Naren';
// }

// function sayMyName(){
//     console.log('sayMyName ', x);
//      var a = 'a';
//     return findName();
// }

// sayMyName();
// ===========================================================================
// console.log('1', height)
// function weird(){
//     height = 50;
// }

// weird();
// var height;
// console.log('2',height)

// ===========================================================================


// var test = function myTest(){
//     console.log("my test ");
//     // myTest();
// }

// test();

// ===========================================================================

// IIFE

var x =10;
(
    function(){
        var z =100;
        console.log('test===='+x);
    }
)();

console.log(x);
