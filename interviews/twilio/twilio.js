// 1. Question: find the output of this

// const myPromise1 = new Promise((resolve, reject) => {
//     console.log('1');
//     resolve("foo");
//     console.log('11');
//   });

//   const myPromise2 = new Promise((resolve, reject) => {
//     console.log('5');
//     setTimeout(() => {
//       resolve("foo");
//     }, 200);
//     console.log('55');

//   });

//   myPromise1.then(()=>{
//     console.log("3");
//   })

//   myPromise2.then(()=>{
//     console.log("11");
//   })

//   setTimeout(() => {
//     console.log("4");
//   }, 200);

//   console.log("100");


// 2. Question: Shallow copy

const obj1 = {
    a: 'obj1',
    b: {
        x: 'obj1_test'
    },
    c: 20
}

//Shallow copy
const obj2 = Object.assign({}, obj1);

const obj3 = {
    a: 'obj3',
    b: {
        x: 'obj3_test'
    },
    c: 20
}

const obj4 ={...obj3};
console.log(obj1.b.x, obj3.b.x);

obj2.b.x = "abc";
obj4.b.x ="abc";

console.log(obj1.b.x, obj3.b.x);

// 3. Question: ?? mark (nullish coalescing)
// The double question mark operator is called the nullish coalescing operator, 
// and it’s a new feature of JavaScript ES2020 
// that allows you provide a default value to use when a variable expression evaluates to null or undefined.
console.log("=========================================")

const obj ={
    d:""
}

obj.x ??= "test";
obj.d ??= "test 2";
console.log(obj.x,"=========", obj.d)

console.log(undefined ?? 'test'); // test
console.log("I am not null or undefined" ?? 'test'); // I am not null or undefined
console.log(null ?? 'test'); // test