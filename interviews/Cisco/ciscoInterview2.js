function fun1() {
  let x;
  for (x = 0; x < 5; x++) {
    setTimeout(function () {
      console.log(x);
    }, 2000);
  }
}

fun1();

function fun2() {
  let x;
  for (x = 0; x < 5; x++) {
    (function (i) {
      setTimeout(function () {
        console.log(i);
      }, 2000);
    })(x);
  }
}

fun2();

// function fun3() {
//   let x;
//   for (x = 0; x < 5; x++) {
//     (function (i) {
//       setTimeout(function () {
//         console.log(i);
//       }, i * 1000);
//     })(x);
//   }
// }

// fun3();
