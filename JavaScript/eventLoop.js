
console.log("start");

setTimeout(function cbT (){
  console.log("cbT");
}, 0);

fetch('https://www.google.com')
  .then(function a() {
    console.log("a")
  });

Promise.resolve()
  .then(function b() {
    console.log("b")
  });

Promise.reject()
  .catch(function c() {
    console.log("c")
  });
  
  console.log("end")
