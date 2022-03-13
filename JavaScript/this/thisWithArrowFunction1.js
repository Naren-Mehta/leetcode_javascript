// In Globle Exection arrow function's this will refer to globle window object

// var foo = () =>{
//     return this;
// }

// var foo1 = (()=> this);

// console.log(foo() === this);
// console.log(foo1() === this);

// var obj = {func: foo1};
// console.log(obj.func() === this);

// ======================================================================================

// this args passed to Call, apply and bind on invocation of an arrow function then it will be ignored
// var foo = () => this;

// var foo = (value) => {
//   console.log(" " + value); // value will always be undefined if call from call, apply or bind
//   return this;
// };
// var obj = { func: foo };

// console.log(obj.func());

// console.log("call ", foo.call(obj));
// console.log("apply ", foo.apply(obj));
// foo = foo.bind(obj);
// console.log(foo());

// ======================================================================================

var obj = {
  bar: function () {
    var x = () => this;
    console.log("===",this);
    return x;
  },
};

// Call bar as a method of obj, setting its this to obj
// Assign a reference to the returned function to fn
var fn = obj.bar();

// Call fn without setting this, would normally default
// to the global object or undefined in strict mode
console.log(fn() === obj); // Returns obj object

// But caution if you reference the method of obj without calling it
var fn2 = obj.bar;
console.log(fn2());
// Calling the arrow function's this from inside the bar method()
// will now return window, because it follows the this from fn2.
console.log(fn2()() == this); // true

// this on the object's prototype chain
var o = {a: 10, b:20, f: function() { return this.a + this.b; }};
var p = Object.create(o);
p.a = 1;
p.b = 4;

console.log(o.f());
console.log(p.f()); // 5