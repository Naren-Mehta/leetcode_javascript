// Example 1:
// var y = 200;

// function a() {
//     var x = 10;
//     return function () {
//         console.log(x, y);
//     }
// }

// var z = a();
// console.log(z);

// z();

//====================================================================================================

// Example 2:
// function b() {
//     var y = 200;

//     return function a() {
//         var x = 10;
//         console.log(y);
//         return function c() {
//             console.log(x, y);
//         }
//     }
// }

// var a1 = b();
// console.log(a1);

// var c1 = a1();
// console.log(c1);

// c1();

//====================================================================================================

// Example 3:
function b() {
    var y = 200;
    var x =1;
    return function a() {
        var y = 10;
        var z =90;
        console.log(x, y);
        return function c() {
            var y =1000;
            console.log(x, y, z);
        }
    }
}

var a1 = b();
console.log(a1);

var c1 = a1();
console.log(c1);

c1();