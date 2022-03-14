// function f2(){
//     'use strict';
//     return this;
// }

// console.log(f2());

// var value1 = f2.call(this);
// console.log('call ', value1=== window);

// var value2 = f2.apply(this);
// console.log('apply ', value2=== window);

// var newF2 = f2.bind(this);
// console.log('bind ', newF2()=== window);


// ==================================================================

// this in function contexts
// var obj = {a: 'Custom'};

// var a = 'Global';

// function whatsThis() {
//   return this.a;  
// }

// console.log(whatsThis());          // 'Global' as this in the function isn't set, so it defaults to the global/window object
// console.log(whatsThis.call(obj));  // 'Custom' as this in the function is set to obj
// console.log(whatsThis.apply(obj)); // 'Custom' as this in the function is set to obj

// ==================================================================

// this and object conversion
// function add(c, d) {
//   return this.a + this.b + c + d;
// }

// var o = {a: 1, b: 3};

// // The first parameter is the object to use as
// // 'this', subsequent parameters are passed as
// // arguments in the function call
// console.log(add.call(o, 5, 7)); // 16

// // The first parameter is the object to use as
// // 'this', the second is an array whose
// // members are used as the arguments in the function call
// console.log(add.apply(o, [10, 20])); // 34

// console.log(add.call(7));


// ==================================================================

// function bar() {
//     console.log(this);
//     console.log(Object.prototype.toString.call(this));
//   }
  
//   bar.call(7);     // [object Number]
//   bar.call('foo'); // [object String]
//   bar.call(undefined); // [object global]
//   bar.call(); // [object global]

// ==================================================================
// Bind only work once

function f(){
  return this.a;
}

var g = f.bind({a:'azerty'});
console.log(g()); //azerty

var h = g.bind({a: 'test'}); //Bind only works once
console.log(h()); //azerty

var o = {a: 37, f: f, g: g, h: h};
console.log(o.a, o.f(), o.g(), o.h());