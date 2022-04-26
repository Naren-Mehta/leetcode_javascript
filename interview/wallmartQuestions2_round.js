// function test() {
//     const obj = {
//         name: 'abc'
//     }
//     console.log(obj);
//     test1(obj);
//     console.log(obj);

// }

// function test1(obj) {
//     obj.name = "pqr";
//     // obj = {name: 'pqr'};
// }

// test();

// ===============================2=======================================
// for (var i = 0; i < 10; i++) {

//     (function (testI){
//          getImage().then((i)=>{
//         console.log(testI);
//     }
//     );
//     })(i);

// }

// function getImage() {
//     return new Promise((resolve,reject)=>{
//         resolve(1);
//     }
//     )
// }

// ===============================3=======================================

async function getRandomDogImage1() {
  console.log("1");
  var message = "";
  let response = await fetch("https://dog.ceo/api/breeds/image/random");
  let value = await response.json();
  message = value.message;
  console.log(value.message);

  console.log("=========" + message);
}

function test() {
  console.log("this is test method");

  let currentTime = new Date().getTime();
  let lastTime = currentTime + 1000;

  while (currentTime < lastTime) {
    currentTime = new Date().getTime();
  }

  console.log("end-==================");
}

getRandomDogImage1();
test();
