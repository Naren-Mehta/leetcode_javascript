// function xyz(){
//     var a = 20;
//     console.log(a);
// }

// xyz();
// console.log(a);

// Global : {x=30, z=4000, method1 = function}
// abc : {
//     local: {x = 20}
// }

//method1 : {
//     Local: {y: 10}
//     globle: this
//     closure:{
//         {x = 100}
//     }
// }



// var x = 30;
// var z = 40;

// function abc(){
//     var x = 20;
//     console.log(x);
//     return function (){
//         var y = 10;
//         x = 100;
//         z = 4000;
//         console.log("hello", x , y, z); // 100, 10, 4000
//     }
// }


// var method1 = abc();

// method1();

// console.log(x, z)

// =============================================================================================================

// var x = 30;
// function abc(){
//     return function (){
//         x = 100;
//         console.log("hello", x);
//     }
// }


// var method1 = abc();
// method1();
// console.log(x)


// [

//     Local memory ->  globle
//     closure {}
   

// ]

// console.log(method1);

// method1();


// ===================================================================================================



// var xyz = function(){
//     console.log('==xyz===')
// }
// xyz();

// abc();


// =======================================Must know============================================================

// (function immediateA(a) {
//     return (function immediateB(b) {
//       console.log(a); // What is logged?
//     })(1);
//   })(0);


//   //simpler form

// function immediateA(a) {
//     return function immediateB(a) {
//       console.log(a); // What is logged?
//     }
//   }


// var x = immediateA(0);
// x(1);


// =======================================Must know============================================================

// let count = 0;
// (function immediate() {
//   if (count === 0) {
//     let count = 1;
//     console.log(count); // What is logged? // 1
//   }
//   console.log(count); // What is logged? //0
// })();

//Simple cde

// let count = 0;
// function immediate() {
//   if (count === 0) {
//     let count = 1; // shadowing
//     console.log(count); // What is logged? // 1
//   }
//   console.log(count); // What is logged? //0
// }

// immediate();


// ===================================================================================================

for (var i = 0; i < 3; i++) {

    (function test(i){
        setTimeout(function log() {
            console.log(i); // What is logged?
          }, i*1000);
    })(i);
    
}

// ===================================================================================================
for (var i = 0; i < 3; i++) {

    (function test(i){
        setTimeout(function log() {
            console.log(i); // What is logged?
          }, i*1000);
    })(i);
    
}