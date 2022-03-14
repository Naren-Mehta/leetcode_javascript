const object = {
    message: 'Hello, World!'
  };
  function logMessage() {
    console.log(this.message); // "Hello, World!"
  }
  // Write your code here...

  logMessage.call(object);
  logMessage.apply(object);

  var message = logMessage.bind(object);
  message();


//   ===============================
var length = 4;
function callback() {
  console.log(this.length); // What is logged?
}
const object1 = {
  length: 5,
  method() {
    arguments[0]();
  }
};
object1.method(callback, 1, 2);

//   ===============================


function test(){
  console.log('this ', this);
}
test();

//

const obj = {
  message: 'Hello, World!',

  getMessage() {
    const message = 'Hello, Earth!';
    return this.message;
  }
};

console.log(obj.getMessage()); // What is logged?
var fun1 = obj.getMessage;
console.log(fun1());