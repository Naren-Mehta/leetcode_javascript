// var i = 10;
// setTimeout(function () {
//     console.log(i);
// }, 2000);

//Print 1-5 after 1 sec with the help of let=================================================================================================================

// for (let i = 1; i < 6; i++) {
//         setTimeout(function () {
//             console.log(i);
//         }, i * 1000);
// }

//Print 1-5 after 1 sec with var keyoud only=================================================================================================================

for (var i = 1; i < 6; i++) {

    function print(i){
        setTimeout(function(){
            console.log(i);
        }, i*1000);
    }
    print(i);

}

//Print 1-5 after 1 sec with var keyoud only (IIFE)=================================================================================================================

// for (var i = 1; i < 6; i++) {

//     (function (i) {
//         setTimeout(function () {
//             console.log(i);
//         }, i * 1000);
//     })(i);

// }